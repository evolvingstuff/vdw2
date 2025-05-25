/**
 * Search Results Panel
 * Displays search results in a panel to the right of the search box
 * Works alongside the existing search.js functionality
 */

// Wait for DOM to be fully loaded and search to be initialized
document.addEventListener('DOMContentLoaded', function() {
    console.log('Search Results Panel: Initializing...');
    
    // Since the search initialization happens in baseof.html, we need to wait for it
    // We'll check periodically until we can access the search instance
    let checkAttempts = 0;
    const maxAttempts = 10;
    
    const checkSearchReady = function() {
        // Get the search instance reference
        const searchInstance = window.search;
        
        if (searchInstance && searchInstance.idx && searchInstance.documents) {
            console.log('Search Results Panel: Search instance found, hooking events');
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
    
    // Start checking for search instance
    setTimeout(checkSearchReady, 1000);
});

// Show error message in the panel
function showError(message) {
    const searchResultsList = document.getElementById('search-results-panel-list');
    const resultsPanel = document.getElementById('search-results-panel');
    
    if (!searchResultsList || !resultsPanel) {
        console.error('Search Results Panel: Cannot show error - DOM elements not found');
        return;
    }
    
    searchResultsList.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = message;
    li.className = 'search-error';
    searchResultsList.appendChild(li);
    resultsPanel.style.display = 'block';
}

// Initialize search functionality once the search instance is available
function initSearchFunctionality(searchInstance) {
    // Get references to DOM elements
    const searchInput = document.getElementById('search-input');
    const searchResultsList = document.getElementById('search-results-panel-list');
    const resultsPanel = document.getElementById('search-results-panel');
    const suggestionsDiv = document.getElementById('suggestions');
    
    if (!searchInput || !searchResultsList || !resultsPanel) {
        console.error('Search Results Panel: Required DOM elements not found');
        return;
    }
    
    // Ensure both panels are hidden initially
    if (resultsPanel) resultsPanel.style.display = 'none';
    if (suggestionsDiv) suggestionsDiv.style.display = 'none';
    
    // Function to clear search state and hide UI elements
    function clearSearch() {
        // Clear the search input
        if (searchInput) searchInput.value = '';
        
        // Hide BOTH panels with display = 'none'
        if (resultsPanel) resultsPanel.style.display = 'none';
        if (suggestionsDiv) suggestionsDiv.style.display = 'none';
        
        // Reset tracking variable
        lastProcessedValue = '';
    }
    
    // Function to perform search and update results panel
    function performSearch(query) {
        if (!query || query.length < 2) {
            if (resultsPanel) resultsPanel.style.display = 'none';
            return;
        }
        
        try {
            // Make suggestions visible again if needed
            if (suggestionsDiv && suggestionsDiv.style.display === 'none') {
                suggestionsDiv.style.display = '';
            }
            
            // First search titles (higher relevance)
            const titleResults = searchInstance.idx.search(`title:${query}*^10`);
            
            // Then search content with lower boost
            const contentResults = searchInstance.idx.search(`content:${query}*`);
            
            // Combine results, with titles first (avoid duplicates)
            const results = [
                ...titleResults,
                ...contentResults.filter(r => !titleResults.find(tr => tr.ref === r.ref))
            ].slice(0, 10); // Limit to top 10 results
            
            // Clear previous results
            searchResultsList.innerHTML = '';
            
            if (results.length > 0) {
                // Add results to the panel
                results.forEach(result => {
                    const doc = searchInstance.documents.find(d => d.url === result.ref);
                    if (!doc) {
                        console.warn('Document not found for ref:', result.ref);
                        return;
                    }
                    
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    
                    // Ensure URL ends with .html for Hugo's uglyURLs=true setting
                    let url = doc.url;
                    if (url.endsWith('/')) {
                        // Replace trailing slash with .html
                        url = url.slice(0, -1) + '.html';
                    } else if (!url.endsWith('.html')) {
                        // Append .html if there's no trailing slash and no .html
                        url = url + '.html';
                    }
                    
                    a.href = url;
                    a.textContent = doc.title;
                    
                    // Add click handler to clear search when a result is clicked
                    a.addEventListener('click', function() {
                        // Use setTimeout to allow the navigation to start before clearing
                        setTimeout(clearSearch, 0);
                    });
                    
                    li.appendChild(a);
                    searchResultsList.appendChild(li);
                });
                
                // Show the results panel
                resultsPanel.style.display = 'block';
            } else {
                // Show "no results" message
                const li = document.createElement('li');
                li.textContent = 'No results found';
                li.className = 'no-results';
                searchResultsList.appendChild(li);
                resultsPanel.style.display = 'block';
            }
        } catch (error) {
            console.error('Search Results Panel: Error during search', error);
            showError('Error: ' + error.message);
        }
    }
    
    // Set up the value change detection mechanism
    let lastProcessedValue = '';
    
    function checkForValueChanges() {
        if (!searchInput) {
            console.error('Search Results Panel: Search input element not available');
            return;
        }
        
        const currentValue = searchInput.value.trim();
        
        // Only process if the value has actually changed
        if (currentValue !== lastProcessedValue) {
            console.log('Search value changed from', lastProcessedValue, 'to', currentValue);
            lastProcessedValue = currentValue;
            
            // Only make suggestions visible when there are likely actual suggestions (2+ characters)
            // This prevents the empty 1px white line from appearing with just 1 character
            if (currentValue.length >= 2 && suggestionsDiv) {
                suggestionsDiv.style.display = '';
            } else if (suggestionsDiv && currentValue.length < 2) {
                // Keep suggestions hidden for 0-1 characters
                suggestionsDiv.style.display = 'none';
            }
            
            // Perform the search with the new value
            performSearch(currentValue);
        }
    }
    
    // Set up a MutationObserver to watch for attribute changes to the input
    const observer = new MutationObserver(() => {
        checkForValueChanges();
    });
    
    // Configure and start the observer
    observer.observe(searchInput, { 
        attributes: true,       // Watch for attribute changes 
        childList: false,       // Don't need to watch for child changes
        subtree: false,         // Don't need to watch subtree
        characterData: true     // Watch for text content changes
    });
    
    // Also listen for input events as a backup
    searchInput.addEventListener('input', checkForValueChanges);
    
    // Add polling as a fallback to catch all possible input changes
    const pollInterval = setInterval(() => {
        checkForValueChanges();
    }, 100);
    
    // Clean up interval if page unloads
    window.addEventListener('beforeunload', () => {
        clearInterval(pollInterval);
    });
    
    // Hide results panel when clicking outside of search components
    document.addEventListener('click', function(e) {
        // First check if we clicked on a suggestion element directly
        const isSuggestion = e.target.classList && e.target.classList.contains('suggestion');
        
        // Don't clear if clicking in the search components
        const isSearchComponentClick = 
            (searchInput && searchInput.contains(e.target)) || 
            (resultsPanel && resultsPanel.contains(e.target)) || 
            (suggestionsDiv && suggestionsDiv.contains(e.target)) ||
            isSuggestion;
            
        if (!isSearchComponentClick) {
            // Clear the search when clicking outside
            clearSearch();
        }
    });
    
    console.log('Search Results Panel: Ready!');
}