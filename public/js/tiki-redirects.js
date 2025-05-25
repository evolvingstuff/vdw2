/**
 * TikiWiki Redirect Handler
 * This script handles redirects for TikiWiki-style URLs with query parameters
 * It runs immediately when loaded (before page rendering completes)
 */
(function() {
    console.log('TikiWiki redirect handler initialized');
    
    // Function to parse query parameters from the URL
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        
        if (queryString) {
            console.log('Found query string:', queryString);
            const pairs = queryString.split('&');
            for (let i = 0; i < pairs.length; i++) {
                const pair = pairs[i].split('=');
                params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
            }
        }
        return params;
    }
    
    // Extract page_id from URL path if present (e.g., /tiki-index.php/page_id/14672)
    function getPageIdFromPath() {
        const path = window.location.pathname;
        const match = path.match(/\/tiki-index\.php\/page_id\/(\d+)/);
        return match ? match[1] : null;
    }
    
    // Check if this is a TikiWiki URL pattern
    function isTikiWikiUrl() {
        return window.location.pathname.includes('tiki-index.php');
    }
    
    // Handle redirect
    function handleRedirect(pageId) {
        if (!pageId) {
            console.log('No pageId provided, cannot redirect');
            return false;
        }
        
        console.log('TikiWiki redirect: Found page_id', pageId);
        
        // Try to redirect to the corresponding post
        try {
            // With uglyURLs=true, Hugo adds .html to URLs
            // Don't add /posts/ prefix - the working URL is /{pageId}
            const targetUrl = `/${pageId}.html`;
            console.log('Redirecting to:', targetUrl);
            window.location.href = targetUrl;
            return true;
        } catch (e) {
            console.error('Error during redirect:', e);
            return false;
        }
    }
    
    // Immediately run the redirect logic
    if (isTikiWikiUrl()) {
        console.log('TikiWiki URL detected:', window.location.href);
        
        // First try to get page_id from query parameters
        const params = getQueryParams();
        if (params.page_id) {
            handleRedirect(params.page_id);
        } else {
            // If not in query params, try to get from path
            const pathPageId = getPageIdFromPath();
            if (pathPageId) {
                handleRedirect(pathPageId);
            }
        }
    } else {
        console.log('URL needs extension check:', window.location.href);
        
        // Only add .html to post URLs, not to attachment or other resource URLs
        const path = window.location.pathname;
        if (!path.endsWith('.html') && 
            !path.endsWith('/') && 
            path.includes('/posts/') &&
            !path.includes('/attachments/') &&
            path.length > 1) {
            window.location.href = path + '.html';
        }
    }
})();