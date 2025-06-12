/**
 * Search Results Panel
 * 
 * This script manages the search results display panel on the page.
 * It depends on the global search instance and Pagefind being initialized.
 */

(function() {
    // Track search panel state
    let isVisible = false;
    let resultsPanel = null;
    let searchResultsList = null;
    let searchInstance = null;
    let checkAttempts = 0;
    const maxAttempts = 10;
    
    // Initialize when the DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Search Results Panel: Initialization started');
        setTimeout(checkSearchReady, 500);
    });
    
    const checkSearchReady = function() {
        // Get the search instance and Pagefind references
        searchInstance = window.search;
        
        if (searchInstance && searchInstance.pagefindInitialized && window.pagefind) {
            console.log('Search Results Panel: Search instance and Pagefind found, hooking events');
            initSearchFunctionality(searchInstance);
        } else {
            checkAttempts++;
            if (checkAttempts < maxAttempts) {
                console.log(`Search Results Panel: Search not ready, retrying (${checkAttempts}/${maxAttempts})...`);
                setTimeout(checkSearchReady, 500);
            } else {
                console.error('Search Results Panel: Could not find initialized search instance after maximum attempts');
                showError('Search not initialized - please refresh the page');
            }
        }
    };
    
    function showError(message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'search-error';
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.padding = '1rem';
        
        document.querySelector('.search-container').appendChild(errorElement);
    }
    
    function initSearchFunctionality(searchObj) {
        console.log('Search Results Panel: Initializing search panel with search instance');
        
        // Find or create the search results panel
        createResultsPanel();
        
        // Set up the input handler for search
        const searchInput = document.getElementById('search-input');
        if (!searchInput) {
            console.error('Search Results Panel: Search input not found');
            return;
        }
        
        searchInput.addEventListener('input', function() {
            performSearch(searchInput.value.trim());
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value.trim());
            }
        });
        
        // Close results when clicking outside
        document.addEventListener('click', function(e) {
            if (isVisible && !e.target.closest('.search-container') && !e.target.closest('.search-results-panel')) {
                hideSearchResults();
            }
        });
        
        // Add ESC key handler to close search results
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isVisible) {
                hideSearchResults();
                searchInput.blur();
            }
        });
        
        console.log('Search Results Panel: Initialization complete');
    }
    
    function createResultsPanel() {
        // Check if panel already exists
        resultsPanel = document.getElementById('search-results-panel');
        
        if (!resultsPanel) {
            // Create the panel
            resultsPanel = document.createElement('div');
            resultsPanel.id = 'search-results-panel';
            resultsPanel.className = 'search-results-panel';
            
            // Add results list container
            searchResultsList = document.createElement('ul');
            searchResultsList.id = 'search-results';
            searchResultsList.className = 'search-results-list';
            
            // Add close button
            const closeButton = document.createElement('button');
            closeButton.className = 'search-results-close';
            closeButton.textContent = '×';
            closeButton.setAttribute('aria-label', 'Close search results');
            closeButton.onclick = hideSearchResults;
            
            // Assemble the panel
            resultsPanel.appendChild(closeButton);
            resultsPanel.appendChild(searchResultsList);
            
            document.body.appendChild(resultsPanel);
        } else {
            // Get the existing results list
            searchResultsList = document.getElementById('search-results');
        }
        
        // Initially hide the panel
        resultsPanel.style.display = 'none';
        isVisible = false;
    }
    
    // Function to perform search and update results panel
    function performSearch(query) {
        if (!query || query.length < 2) {
            if (resultsPanel) resultsPanel.style.display = 'none';
            return;
        }
        
        try {
            // Clear existing results
            searchResultsList.innerHTML = '';
            
            // Perform search using Pagefind
            pagefindSearch(query);
        } catch (error) {
            console.error('Search error:', error);
            showError(`Search failed: ${error.message}`);
        }
    }
    
    // Use Pagefind for searching
    async function pagefindSearch(query) {
        console.log('Performing Pagefind search for:', query);
        
        try {
            if (!window.pagefind) {
                throw new Error('Pagefind not available');
            }
            
            const searchResults = await window.pagefind.search(query);
            
            if (!searchResults || !searchResults.results || !Array.isArray(searchResults.results)) {
                throw new Error('Pagefind returned invalid search results');
            }
            
            console.log(`Pagefind found ${searchResults.results.length} results`);
            
            if (searchResults.results.length === 0) {
                const li = document.createElement('li');
                li.textContent = 'No results found';
                li.className = 'no-results';
                searchResultsList.appendChild(li);
                resultsPanel.style.display = 'block';
                isVisible = true;
                return;
            }
            
            // Process the results to get full details
            const processPromises = searchResults.results.map(async (result) => {
                try {
                    return await result.data();
                } catch (error) {
                    console.error('Error processing Pagefind result:', error);
                    return null;
                }
            });
            
            // Wait for all results to be processed
            const processedResults = await Promise.all(processPromises);
            
            // Filter out any null results and display them
            const validResults = processedResults.filter(result => result !== null);
            
            // Display the results
            validResults.forEach(data => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                
                // Use URL and title from Pagefind results
                a.href = data.url;
                a.textContent = data.meta.title || 'Untitled';
                
                // Add click handler to clear search when a result is clicked
                a.addEventListener('click', function() {
                    // Use setTimeout to allow the navigation to start before clearing
                    setTimeout(clearSearch, 0);
                });
                
                li.appendChild(a);
                
                // Add excerpt if available
                if (data.excerpt) {
                    const excerptDiv = document.createElement('div');
                    excerptDiv.className = 'search-result-excerpt';
                    excerptDiv.innerHTML = data.excerpt;
                    li.appendChild(excerptDiv);
                }
                
                // Add to results list
                searchResultsList.appendChild(li);
            });
            
            // Show the results panel
            resultsPanel.style.display = 'block';
            isVisible = true;
            
        } catch (error) {
            console.error('Pagefind search error:', error);
            showError(`Search failed: ${error.message}`);
        }
    }
    
    function hideSearchResults() {
        if (resultsPanel) {
            resultsPanel.style.display = 'none';
            isVisible = false;
        }
    }
    
    function clearSearch() {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = '';
        }
        hideSearchResults();
    }
})();