// Search functionality
class SearchManager {
    constructor() {
        this.searchInput = null;
        this.searchResults = null;
        this.resultsList = null;
        this.isSearching = false;
        this.searchTimeout = null;
        
        this.init();
    }

    init() {
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        this.resultsList = document.getElementById('resultsList');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        if (!this.searchInput) return;

        // Handle search input
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearchInput(e.target.value);
        });

        // Handle Enter key
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch(e.target.value);
            }
        });

        // Handle search result clicks
        this.resultsList?.addEventListener('click', (e) => {
            const resultItem = e.target.closest('.result-item');
            if (resultItem) {
                const subjectId = resultItem.dataset.subjectId;
                this.handleResultClick(subjectId);
            }
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target) && !this.searchResults.contains(e.target)) {
                this.hideSearchResults();
            }
        });
    }

    handleSearchInput(query) {
        // Clear previous timeout
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        // Debounce search
        this.searchTimeout = setTimeout(() => {
            if (query.trim().length >= 2) {
                this.performSearch(query);
            } else {
                this.hideSearchResults();
            }
        }, 300);
    }

    performSearch(query) {
        if (!query || query.trim().length < 2) {
            this.hideSearchResults();
            return;
        }

        this.isSearching = true;
        
        // Get search results
        const results = dataManager.searchSubjects(query);
        
        // Display results
        this.displaySearchResults(results, query);
        
        this.isSearching = false;
    }

    displaySearchResults(results, query) {
        if (!this.searchResults || !this.resultsList) return;

        if (results.length === 0) {
            this.resultsList.innerHTML = `
                <div class="no-results">
                    <p>No subjects found for "<strong>${query}</strong>"</p>
                    <p>Try searching for: Programming, Calculus, Physics, or English</p>
                </div>
            `;
        } else {
            this.resultsList.innerHTML = results.map(subject => `
                <div class="result-item" data-subject-id="${subject.id}">
                    <div class="result-icon">${subject.icon}</div>
                    <div class="result-content">
                        <h4>${subject.name}</h4>
                        <p>${subject.description}</p>
                        <small>${subject.paperCount} papers available • ${subject.yearRange}</small>
                    </div>
                </div>
            `).join('');
        }

        this.showSearchResults();
    }

    showSearchResults() {
        if (this.searchResults) {
            this.searchResults.classList.add('show');
        }
    }

    hideSearchResults() {
        if (this.searchResults) {
            this.searchResults.classList.remove('show');
        }
    }

    handleResultClick(subjectId) {
        // For now, just alert - later this will navigate to subject page
        const subject = dataManager.getSubjectById(subjectId);
        if (subject) {
            alert(`Navigating to ${subject.name} papers page...\n\nThis will be implemented in the next phase!`);
        }
        
        // Hide search results after selection
        this.hideSearchResults();
        
        // Clear search input
        if (this.searchInput) {
            this.searchInput.value = '';
        }
    }

    clearSearch() {
        if (this.searchInput) {
            this.searchInput.value = '';
        }
        this.hideSearchResults();
    }
}

// Initialize search manager
let searchManager;
