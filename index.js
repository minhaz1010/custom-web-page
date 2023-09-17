// Get references to the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
    performGoogleSearch();
});

// Add an event listener to the search input for pressing Enter
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performGoogleSearch();
    }
});

// Function to perform the Google search
function performGoogleSearch() {
    const query = searchInput.value.trim();
    if (query !== '') {
        // Open Google search results in a new tab
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_self');

    }
}

// Clear the search input when navigating back to the page
window.addEventListener('pageshow', function (event) {
    // Check if the input element exists and reset its value
    if (searchInput) {
        searchInput.value = '';
    }
});
