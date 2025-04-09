/**
 * Search functionality for Hugo site
 * Handles search index loading, search execution, and suggestions
 */

class Search {
    constructor(config = {}) {
        this.config = {
            searchInputId: 'search-input',
            searchResultsId: 'search-results',
            suggestionsId: 'suggestions',
            searchStatusId: 'search-status',
            documentsUrl: '/search/search_documents.json.gz',  // Use .gz extension explicitly
            indexUrl: '/search/search_index.json.gz',          // Use .gz extension explicitly
            ...config
        };

        this.searchInput = document.getElementById(this.config.searchInputId);
        this.searchResults = document.getElementById(this.config.searchResultsId);
        this.suggestionsDiv = document.getElementById(this.config.suggestionsId);
        this.searchStatus = document.getElementById(this.config.searchStatusId);
        
        // Disable search until initialized
        if (this.searchInput) {
            this.searchInput.disabled = true;
            this.searchInput.placeholder = 'Loading search...';
        }
        
        // if (this.searchStatus) {
        //     this.searchStatus.textContent = 'Initializing search...';
        //     this.searchStatus.style.display = 'block';
        // }

        // Flag to track if pako is available
        this.pakoLoaded = false;
        
        // Check if pako is already loaded
        if (typeof pako !== 'undefined') {
            console.log('Pako already loaded');
            this.pakoLoaded = true;
            this.init();
        } else {
            // Load pako dynamically
            this.loadPako()
                .then(() => {
                    console.log('Pako loaded successfully');
                    this.pakoLoaded = true;
                    this.init();
                })
                .catch(error => {
                    console.error('Failed to load pako:', error);
                    this.handleInitError(`Failed to load decompression library: ${error.message}`);
                });
        }
    }

    /**
     * Loads the pako library dynamically
     */
    loadPako() {
        return new Promise((resolve, reject) => {
            console.log('Loading pako library...');
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js';
            script.onload = () => {
                if (typeof pako === 'undefined') {
                    reject(new Error('Pako loaded but not defined'));
                } else {
                    resolve();
                }
            };
            script.onerror = () => reject(new Error('Failed to load pako script'));
            document.head.appendChild(script);
        });
    }

    /**
     * Handle initialization errors in a consistent way
     */
    handleInitError(message) {
        console.error('Search initialization error:', message);
        if (this.searchStatus) {
            this.searchStatus.textContent = `Search unavailable: ${message}`;
            this.searchStatus.style.display = 'block';
        }
        if (this.searchInput) {
            this.searchInput.disabled = true;
            this.searchInput.placeholder = 'Search unavailable';
        }
    }

    /**
     * Decompress gzipped data using pako
     */
    decompressWithPako(compressedData) {
        console.log(`Decompressing data (${compressedData.byteLength} bytes)...`);
        
        try {
            // Verify we have pako available
            if (!this.pakoLoaded) {
                throw new Error('Decompression library not loaded');
            }
            
            // Decompress using pako
            const decompressedArray = pako.inflate(new Uint8Array(compressedData));
            const decompressedText = new TextDecoder().decode(decompressedArray);
            
            // Validate decompressed data
            if (!decompressedText || decompressedText.length === 0) {
                throw new Error('Decompression produced empty result');
            }
            
            console.log(`Decompression successful (${decompressedText.length} chars)`);
            return decompressedText;
        } catch (error) {
            console.error('Decompression error:', error);
            throw new Error(`Failed to decompress gzipped data: ${error.message}`);
        }
    }

    async init() {
        if (!this.pakoLoaded) {
            this.handleInitError('Decompression library not loaded');
            return;
        }
        
        try {
            // Add cache buster to prevent server caching issues
            const cacheBuster = `?v=${Date.now()}`;
            const docsUrl = `${this.config.documentsUrl}${cacheBuster}`;
            const indexUrl = `${this.config.indexUrl}${cacheBuster}`;
            
            console.log('Fetching compressed search indices:', docsUrl, indexUrl);
            
            // Fetch compressed data
            const [docsResponse, indexResponse] = await Promise.all([
                fetch(docsUrl),
                fetch(indexUrl)
            ]);
            
            // Validate responses
            if (!docsResponse.ok) {
                throw new Error(`Failed to fetch documents: HTTP ${docsResponse.status} (${docsResponse.statusText})`);
            }
            
            if (!indexResponse.ok) {
                throw new Error(`Failed to fetch index: HTTP ${indexResponse.status} (${indexResponse.statusText})`);
            }
            
            // Log response headers for debugging
            console.log('Documents response headers:', 
                Array.from(docsResponse.headers.entries())
                    .map(([k, v]) => `${k}: ${v}`)
                    .join(', '));
            
            console.log('Index response headers:', 
                Array.from(indexResponse.headers.entries())
                    .map(([k, v]) => `${k}: ${v}`)
                    .join(', '));
            
            // Get binary data
            const [docsData, indexData] = await Promise.all([
                docsResponse.arrayBuffer(),
                indexResponse.arrayBuffer()
            ]);
            
            // Validate received data
            if (!docsData || docsData.byteLength === 0) {
                throw new Error('Received empty documents data');
            }
            
            if (!indexData || indexData.byteLength === 0) {
                throw new Error('Received empty index data');
            }
            
            console.log(`Received data: docs=${docsData.byteLength} bytes, index=${indexData.byteLength} bytes`);
            
            // Try to decompress the data
            let docsJson, indexJson;
            
            try {
                // Decompress documents data
                const docsText = this.decompressWithPako(docsData);
                
                // Parse JSON
                try {
                    docsJson = JSON.parse(docsText);
                    console.log(`Successfully parsed documents JSON (${docsJson.length} documents)`);
                } catch (parseError) {
                    throw new Error(`Failed to parse documents JSON: ${parseError.message}`);
                }
                
                // Decompress index data
                const indexText = this.decompressWithPako(indexData);
                
                // Parse JSON
                try {
                    indexJson = JSON.parse(indexText);
                    console.log('Successfully parsed index JSON');
                } catch (parseError) {
                    throw new Error(`Failed to parse index JSON: ${parseError.message}`);
                }
                
                // Validate docs structure
                if (!Array.isArray(docsJson) || docsJson.length === 0) {
                    throw new Error('Invalid documents data format: expected non-empty array');
                }
                
                // Initialize search
                this.documents = docsJson;
                this.idx = lunr.Index.load(indexJson);
                
                // Build clean title words set
                this.allTitles = new Set();
                this.documents.forEach(doc => {
                    if (!doc.title) {
                        console.warn('Document missing title:', doc);
                        return;
                    }
                    
                    const titleWords = doc.title
                        .toLowerCase()
                        .split(/[\s\-]+/)
                        .filter(word => word.length > 0);
                    
                    titleWords.forEach(word => 
                        this.allTitles.add(this.cleanWord(word))
                    );
                });
                
                console.log('Built title set with', this.allTitles.size, 'unique words');
                
                // Enable search UI
                if (this.searchInput) {
                    this.searchInput.disabled = false;
                    this.searchInput.placeholder = 'Search...';
                    this.searchInput.addEventListener('input', this.handleSearch.bind(this));
                }
                
                if (this.searchStatus) {
                    this.searchStatus.style.display = 'none';
                }
                
                console.log('Search initialization complete');
                
            } catch (processingError) {
                console.error('Failed to process search data:', processingError);
                this.handleInitError(processingError.message);
            }
            
        } catch (error) {
            console.error('Search initialization failed:', error);
            this.handleInitError(error.message);
        }
    }

    cleanWord(word) {
        return word.toLowerCase().replace(/[,\.;:]\s*$/, '');
    }

    async fetchWithDetailedTiming(url) {
        const startTime = performance.now();
        try {
            console.log('Fetching:', url);
            const response = await fetch(url);
            const fetchTime = performance.now();
            console.log(`Fetch took: ${(fetchTime - startTime).toFixed(2)}ms`);
            
            console.log('Parsing JSON...');
            const parseStart = performance.now();
            const data = await response.json();
            const parseEnd = performance.now();
            console.log(`JSON parse took: ${(parseEnd - parseStart).toFixed(2)}ms`);
            
            console.log(`Total size: ${(response.headers.get('content-length')/1024/1024).toFixed(2)}MB`);
            console.log(`Content-Encoding: ${response.headers.get('content-encoding') || 'none'}`);
            
            return data;
        } catch (error) {
            console.error(`Error after ${(performance.now() - startTime).toFixed(2)}ms:`, error);
            throw error;
        }
    }

    handleSearch() {
        const query = this.searchInput.value;
        const lastChar = query[query.length - 1];
        const words = query.toLowerCase().split(/\s+/).filter(w => w.length > 0);
        
        this.searchResults.innerHTML = '';
        this.suggestionsDiv.innerHTML = '';

        if (query.length >= 2) {
            try {
                // First search titles
                const titleResults = this.idx.search(`title:${query}`);
                
                // Then search content
                const contentResults = this.idx.search(`content:${query}`);
                
                // Combine results, with titles first
                const results = [
                    ...titleResults,
                    ...contentResults.filter(r => !titleResults.find(tr => tr.ref === r.ref))
                ];

                this.displayResults(results);
                this.showSuggestions(words, lastChar);
            } catch (e) {
                console.error('Search error:', e);
            }
        }
    }

    displayResults(results) {
        results.forEach(result => {
            const doc = this.documents.find(d => d.url === result.ref);
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = doc.url;
            a.textContent = doc.title;
            li.appendChild(a);
            this.searchResults.appendChild(li);
        });
    }

    showSuggestions(words, lastChar) {
        const suggestions = Array.from(this.allTitles)
            .filter(word => 
                !words.includes(word.toLowerCase()) && 
                word.toLowerCase().startsWith(lastChar === ' ' ? '' : words[words.length - 1])
            )
            .slice(0, 5);

        suggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.className = 'suggestion';
            div.textContent = suggestion;
            div.onclick = () => this.handleSuggestionClick(suggestion, words, lastChar);
            this.suggestionsDiv.appendChild(div);
        });
    }

    handleSuggestionClick(suggestion, words, lastChar) {
        if (lastChar === ' ') {
            this.searchInput.value = this.searchInput.value + suggestion + ' ';
        } else {
            words[words.length - 1] = suggestion;
            this.searchInput.value = words.join(' ') + ' ';
        }
        this.suggestionsDiv.innerHTML = '';
        this.handleSearch();
    }

    initializeEventListeners() {
        // Search input handler
        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.suggestionsDiv.innerHTML = '';
            }
        });
    }

    updateSearchUI() {
        // Update any search-related UI if needed, but don't reload index
        this.searchInput.value = '';
        this.searchResults.innerHTML = '';
        this.suggestionsDiv.innerHTML = '';
    }
}