// Subject Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    let currentSubject = getCurrentSubject();
    let currentCategory = 'mid1';
    
    // Initialize the page
    initializePage();
    
    function initializePage() {
        updatePageTitle();
        setupTabListeners();
        loadPapers(currentCategory);
    }
    
    function updatePageTitle() {
        // Update page title
        document.title = `${currentSubject.title} - CS Past Papers Hub`;
        
        // Update breadcrumb and header
        const breadcrumbCurrent = document.querySelector('.breadcrumb .current');
        const headerTitle = document.querySelector('.subject-header h1');
        const headerDescription = document.querySelector('.subject-header p');
        
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = currentSubject.title;
        if (headerTitle) headerTitle.textContent = currentSubject.title;
        if (headerDescription) headerDescription.textContent = currentSubject.description;
        
        // Update stats
        updateStats();
    }
    
    function updateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length >= 2) {
            // Count total papers
            let totalPapers = 0;
            Object.values(currentSubject.papers).forEach(categoryPapers => {
                totalPapers += categoryPapers.length;
            });
            
            // Find latest year
            let latestYear = 0;
            Object.values(currentSubject.papers).forEach(categoryPapers => {
                categoryPapers.forEach(paper => {
                    const year = parseInt(paper.year);
                    if (year > latestYear) latestYear = year;
                });
            });
            
            statNumbers[0].textContent = totalPapers;
            statNumbers[1].textContent = latestYear || '2024';
        }
    }
    
    function setupTabListeners() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                switchCategory(category);
            });
        });
    }
    
    function switchCategory(category) {
        currentCategory = category;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        // Load papers for the new category
        loadPapers(category);
    }
    
    function loadPapers(category) {
        const papersGrid = document.getElementById('papersGrid');
        const papers = currentSubject.papers[category] || [];
        
        if (papers.length === 0) {
            papersGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No papers available</h3>
                    <p>Papers for this category will be added soon.</p>
                </div>
            `;
            return;
        }
        
        papersGrid.innerHTML = papers.map(paper => createPaperCard(paper)).join('');
        
        // Add event listeners to paper cards
        setupPaperCardListeners();
    }
    
    function createPaperCard(paper) {
        return `
            <div class="paper-card" data-paper-id="${paper.id}">
                <div class="paper-header">
                    <div class="paper-info">
                        <h3>${paper.title}</h3>
                        <div class="paper-year">${paper.semester} ${paper.year}</div>
                    </div>
                    <div class="paper-icon">${currentSubject.icon}</div>
                    <div class="expand-indicator">▼</div>
                </div>
                <div class="paper-download">
                    <div class="download-info">
                        <p><strong>File Information:</strong></p>
                        <p>Size: <span class="file-size">${paper.fileSize}</span></p>
                        <p>Format: PDF</p>
                    </div>
                    <button class="download-btn" onclick="downloadPaper('${paper.downloadUrl}', '${paper.title}')">
                        <span class="download-icon">⬇</span>
                        Download Paper
                    </button>
                </div>
            </div>
        `;
    }
    
    function setupPaperCardListeners() {
        const paperCards = document.querySelectorAll('.paper-card');
        paperCards.forEach(card => {
            const header = card.querySelector('.paper-header');
            header.addEventListener('click', function() {
                togglePaperCard(card);
            });
        });
    }
    
    function togglePaperCard(card) {
        const isExpanded = card.classList.contains('expanded');
        
        // Close all other expanded cards
        document.querySelectorAll('.paper-card.expanded').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
        
        // Toggle current card
        if (isExpanded) {
            card.classList.remove('expanded');
        } else {
            card.classList.add('expanded');
        }
    }
    
    // Global function for downloading papers
    window.downloadPaper = function(downloadUrl, paperTitle) {
        // Show loading state
        const downloadBtns = document.querySelectorAll('.download-btn');
        const clickedBtn = event.target.closest('.download-btn');
        
        if (clickedBtn) {
            const originalText = clickedBtn.innerHTML;
            clickedBtn.innerHTML = '<span class="download-icon">⏳</span> Downloading...';
            clickedBtn.disabled = true;
            
            // Create invisible link and trigger download
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${paperTitle}.pdf`;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Reset button after a short delay
            setTimeout(() => {
                clickedBtn.innerHTML = originalText;
                clickedBtn.disabled = false;
            }, 2000);
            
            // Track download (you can add analytics here)
            console.log(`Downloaded: ${paperTitle}`);
        }
    };
    
    // Handle browser back/forward navigation
    window.addEventListener('popstate', function() {
        currentSubject = getCurrentSubject();
        initializePage();
    });
    
    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all expanded cards
            document.querySelectorAll('.paper-card.expanded').forEach(card => {
                card.classList.remove('expanded');
            });
        }
    });
    
    // Add loading animation for better perceived performance
    function showLoading() {
        const papersGrid = document.getElementById('papersGrid');
        papersGrid.innerHTML = `
            <div class="loading">
                <span>Loading papers...</span>
            </div>
        `;
    }
    
    // Function to handle subject switching from main page
    window.loadSubject = function(subjectId) {
        if (subjectPapers[subjectId]) {
            const newUrl = `subject.html?subject=${subjectId}`;
            window.location.href = newUrl;
        }
    };
});