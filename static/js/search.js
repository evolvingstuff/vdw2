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
            documentsUrl: '/js/search_documents.json',
            indexUrl: '/js/search_index.json',
            ...config
        };

        this.searchInput = document.getElementById(this.config.searchInputId);
        this.searchResults = document.getElementById(this.config.searchResultsId);
        this.suggestionsDiv = document.getElementById(this.config.suggestionsId);
        this.searchStatus = document.getElementById(this.config.searchStatusId);
        
        // Disable search until initialized
        if (this.searchInput) {
            this.searchInput.disabled = true;
        }

        this.init();
    }

    async init() {
        try {
            console.log('Fetching search index from:', this.config.documentsUrl, this.config.indexUrl);
            const [docs, indexData] = await Promise.all([
                fetch(this.config.documentsUrl).then(r => r.json()),
                fetch(this.config.indexUrl).then(r => r.json())
            ]);

            console.log('Loaded', docs.length, 'documents');
            this.documents = docs;
            this.idx = lunr.Index.load(indexData);
            console.log('Initialized Lunr search index');
            
            // Build clean title words set
            this.allTitles = new Set();
            this.documents.forEach(doc => {
                const titleWords = doc.title
                    .toLowerCase()
                    .split(/[\s\-]+/)
                    .filter(word => word.length > 0);
                titleWords.forEach(word => this.allTitles.add(word.toLowerCase().replace(/[,\.;:]\s*$/, '')));
            });
            console.log('Built title set with', this.allTitles.size, 'unique words');

            if (this.searchInput) {
                this.searchInput.disabled = false;
                this.searchInput.placeholder = 'Search...';
                this.searchInput.addEventListener('input', this.handleSearch.bind(this));
                console.log('Search input enabled and handler bound');
            }
            if (this.searchStatus) {
                this.searchStatus.style.display = 'none';
            }
        } catch (error) {
            console.error('Failed to initialize search:', error);
            if (this.searchStatus) {
                this.searchStatus.textContent = 'Failed to load search';
            }
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