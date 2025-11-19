// Subject Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    let currentSubject = getCurrentSubject();
    let currentCategory = 'mid1';
    let currentDifficultyFilter = 'all';

    
    // Initialize the page
    initializePage();
    
    function initializePage() {
        updatePageTitle();
        setupTabListeners();
        setupFilterListeners();

        // Initialize AI Generate feature if this is Programming Fundamentals
        if (currentSubject && (currentSubject.title === 'Programming Fundamentals' || 
            window.location.pathname.includes('programming-fundamentals'))) {
            if (window.aiGenerate) {
                window.aiGenerate.init();
            }
        }

        // Initialize AI Generate feature if this is Data Structures & Algorithms
        if (currentSubject && (currentSubject.title === 'Data Structures & Algorithms' || 
            window.location.pathname.includes('data-structures-algorithms'))) {
            if (window.aiGenerateDSA) {
                window.aiGenerateDSA.init();
            }
        }
        // Initialize AI Generate feature if this is ICT
if (currentSubject && (currentSubject.title === 'Information & Communication Technology' || 
    currentSubject.title === 'Information and Communication Technology' ||
    window.location.pathname.includes('information-communication-technology'))) {
    if (window.aiGenerateICT) {
        window.aiGenerateICT.init();
    }
}

        // Initialize AI Generate feature if this is Programming Fundamentals Lab
        if (currentSubject && (currentSubject.title === 'Programming Fundamentals Lab' || 
            window.location.pathname.includes('programming-fundamentals-lab'))) {
            if (window.aiGenerateLab) {
                window.aiGenerateLab.init();
            }
        }
        // Initialize AI Generate feature if this is Functional English
if (currentSubject && (currentSubject.title === 'Functional English' || 
    window.location.pathname.includes('functional-english'))) {
    if (window.aiGenerateFunctionalEnglish) {
        window.aiGenerateFunctionalEnglish.init();
    }
}

        // Initialize AI Generate feature if this is Applied Physics
        if (currentSubject && (currentSubject.title === 'Applied Physics' || 
            window.location.pathname.includes('applied-physics'))) {
            if (window.aiGenerateAppliedPhysics) {
                window.aiGenerateAppliedPhysics.init();
            }
        }

        // Initialize AI Generate feature if this is COAL Theory
        if (currentSubject && (currentSubject.title === 'Computer Organization and Assembly Language' || 
            window.location.pathname.includes('coal-theory'))) {
            if (window.aiGenerateCOALTheory) {
                window.aiGenerateCOALTheory.init();
            }
        }
        // Initialize AI Generate feature if this is Theory of Automata
if (currentSubject && (currentSubject.title === 'Theory of Automata' || 
    window.location.pathname.includes('theory-of-automata'))) {
    if (window.aiGenerateTOA) {
        window.aiGenerateTOA.init();
    }
}

        // Initialize AI Generate feature if this is COAL Lab
        if (currentSubject && (currentSubject.title === 'Computer Organization and Assembly Language Lab' || 
            window.location.pathname.includes('coal-lab'))) {
            if (window.aiGenerateCOALLab) {
                window.aiGenerateCOALLab.init();
            }
        }
            if (currentSubject && (currentSubject.title === 'Calculus' || 
                window.location.pathname.includes('calculus'))) {
         if (window.calculusAIGenerate) {
                window.calculusAIGenerate.init();
            }
        }

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

    function setupFilterListeners() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const difficulty = this.getAttribute('data-difficulty');
                switchDifficultyFilter(difficulty);
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
        
        // Handle AI Generate category specially
        if (category === 'ai-generate') {
            // Hide difficulty filter for AI Generate
            const difficultyFilter = document.querySelector('.difficulty-filter');
            if (difficultyFilter) {
                difficultyFilter.style.display = 'none';
            }
            
            // Clear papers grid and show AI Generate UI
            const papersGrid = document.getElementById('papersGrid');
            papersGrid.innerHTML = '';
            
            // Show topic selection modal - check for all AI Generate implementations
            if (window.aiGenerate && (currentSubject.title === 'Programming Fundamentals' || 
                window.location.pathname.includes('programming-fundamentals')) &&
                !window.location.pathname.includes('programming-fundamentals-lab')) {
                window.aiGenerate.showTopicSelection();
            } else if (window.aiGenerateLab && (currentSubject.title === 'Programming Fundamentals Lab' || 
                window.location.pathname.includes('programming-fundamentals-lab'))) {
                window.aiGenerateLab.showTopicSelection();
                } else if (window.aiGenerateICT && (currentSubject.title === 'Information & Communication Technology' || 
    currentSubject.title === 'Information and Communication Technology' ||
    window.location.pathname.includes('information-communication-technology'))) {
    window.aiGenerateICT.showTopicSelection();
            } else if (window.aiGenerateDSA && (currentSubject.title === 'Data Structures & Algorithms' || 
                window.location.pathname.includes('data-structures-algorithms'))) {
                window.aiGenerateDSA.showTopicSelection();
                } else if (window.aiGenerateTOA && (currentSubject.title === 'Theory of Automata' || 
    window.location.pathname.includes('theory-of-automata'))) {
    window.aiGenerateTOA.showTopicSelection();
            } else if (window.aiGenerateAppliedPhysics && (currentSubject.title === 'Applied Physics' || 
                window.location.pathname.includes('applied-physics'))) {
                window.aiGenerateAppliedPhysics.showTopicSelection();
            } else if (window.aiGenerateCOALTheory && (currentSubject.title === 'Computer Organization and Assembly Language' || 
                window.location.pathname.includes('coal-theory'))) {
                window.aiGenerateCOALTheory.showTopicSelection();
                } else if (window.aiGenerateFunctionalEnglish && (currentSubject.title === 'Functional English' || 
    window.location.pathname.includes('functional-english'))) {
    window.aiGenerateFunctionalEnglish.showTopicSelection();
        } else if (window.calculusAIGenerate && (currentSubject.title === 'Calculus' || 
            window.location.pathname.includes('calculus'))) {
            window.calculusAIGenerate.showTopicSelection();

            } else if (window.aiGenerateCOALLab && (currentSubject.title === 'Computer Organization and Assembly Language Lab' || 
                window.location.pathname.includes('coal-lab'))) {
                window.aiGenerateCOALLab.showTopicSelection();
            } else {
                papersGrid.innerHTML = `
                    <div class="empty-state">
                        <h3>AI Generate Feature</h3>
                        <p>Please refresh the page to load the AI Generate feature.</p>
                    </div>
                `;
            }
            return;
        }
        
        // Close any open AI modal when switching to other categories
        const existingModal = document.querySelector('.ai-modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Show difficulty filter for other categories
        const difficultyFilter = document.querySelector('.difficulty-filter');
        if (difficultyFilter) {
            difficultyFilter.style.display = '';
        }
        
        // Load papers for the new category
        loadPapers(category);
    }
        function switchDifficultyFilter(difficulty) {
        currentDifficultyFilter = difficulty;
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('active');
        
        applyDifficultyFilter();
    }
    
    function applyDifficultyFilter() {
        const paperCards = document.querySelectorAll('.paper-card');
        let visibleCount = 0;
        
        paperCards.forEach(card => {
            const cardDifficulty = card.getAttribute('data-difficulty');
            
            if (currentDifficultyFilter === 'all' || cardDifficulty === currentDifficultyFilter) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });
        // Show/hide empty state
        const papersGrid = document.getElementById('papersGrid');
        const existingEmptyState = papersGrid.querySelector('.empty-filter-state');
        
        if (visibleCount === 0 && !existingEmptyState) {
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-filter-state';
            emptyState.innerHTML = `
                <h3>No papers found</h3>
                <p>No papers match the selected difficulty level for this category.</p>
            `;
            papersGrid.appendChild(emptyState);
        } else if (visibleCount > 0 && existingEmptyState) {
            existingEmptyState.remove();
        }
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
        
        updateFilterCounts(papers);
        setupPaperCardListeners();
        applyDifficultyFilter();
    }
function updateFilterCounts(papers) {
    const counts = {
        all: papers.length,
        easy: 0,
        medium: 0,
        hard: 0
    };
    
    papers.forEach(paper => {
        const diffClass = getDifficultyClass(paper.difficulty);
        counts[diffClass]++;
    });
    
    document.getElementById('countAll').textContent = counts.all;
    document.getElementById('countEasy').textContent = counts.easy;
    document.getElementById('countMedium').textContent = counts.medium;
    document.getElementById('countHard').textContent = counts.hard;
}
    function createPaperCard(paper) {
        const difficultyClass = getDifficultyClass(paper.difficulty);
        const difficultyLabel = getDifficultyLabel(paper.difficulty);
        const difficultyIcon = getDifficultyIcon(difficultyClass);
        
        return `
            <div class="paper-card" data-paper-id="${paper.id}" data-difficulty="${difficultyClass}">
                <div class="difficulty-badge ${difficultyClass}">
                    <span class="difficulty-icon">${difficultyIcon}</span>
                    <span class="difficulty-value">${paper.difficulty || 'N/A'}</span>
                </div>
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
                        <h4>File Information</h4>
                        <div class="file-details">
                            <div class="file-detail-item">
                                <span class="file-detail-icon">📄</span>
                                <span class="file-detail-label">Format</span>
                                <span class="file-detail-value">PDF</span>
                            </div>
                            <div class="file-detail-item">
                                <span class="file-detail-icon">💾</span>
                                <span class="file-detail-label">Size</span>
                                <span class="file-detail-value file-size">${paper.fileSize}</span>
                            </div>
                            <div class="file-detail-item">
                                <span class="file-detail-icon">📊</span>
                                <span class="file-detail-label">Difficulty</span>
                                <span class="file-detail-value">${difficultyLabel}</span>
                            </div>
                        </div>
                    </div>
                    <button class="download-btn" onclick="downloadPaper('${paper.downloadUrl}', '${paper.title}')">
                        <span class="download-icon">⬇</span>
                        Download Paper
                    </button>
                </div>
            </div>
        `;
    }
function getDifficultyClass(difficulty) {
    if (!difficulty) return 'medium';
    const diff = parseFloat(difficulty);
    if (diff >= 3.0 && diff <= 3.8) return 'easy';
    if (diff >= 3.9 && diff <= 4.2) return 'medium';
    if (diff >= 4.3 && diff <= 5.0) return 'hard';
    return 'medium'; // fallback
}

function getDifficultyLabel(difficulty) {
    if (!difficulty) return 'Medium';
    const diff = parseFloat(difficulty);
    if (diff >= 3.0 && diff <= 3.8) return 'Easy';
    if (diff >= 3.9 && diff <= 4.2) return 'Medium';
    if (diff >= 4.3 && diff <= 5.0) return 'Hard';
    return 'Medium'; // fallback
}

function getDifficultyIcon(difficultyClass) {
    const icons = {
        easy: '✓',
        medium: '⚡',
        hard: '🔥'
    };
    return icons[difficultyClass] || '⚡';
}
    
function setupPaperCardListeners() {
    const paperCards = document.querySelectorAll('.paper-card');
    
    paperCards.forEach(card => {
        // Remove any existing listeners first
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
    });
    
    // Re-select after cloning
    const refreshedCards = document.querySelectorAll('.paper-card');
    
    refreshedCards.forEach(card => {
        const header = card.querySelector('.paper-header');
        
        if (header) {
            header.addEventListener('click', function(e) {
                // Prevent click if clicking on download button
                if (e.target.closest('.download-btn')) {
                    return;
                }
                
                console.log('Card clicked!'); // Debug log
                togglePaperCard(card);
            });
            
            // Add pointer cursor to indicate clickability
            header.style.cursor = 'pointer';
        }
    });
}

    
function togglePaperCard(card) {
    const isExpanded = card.classList.contains('expanded');
    
    console.log('Toggling card. Currently expanded:', isExpanded); // Debug log
    
    // Close all other expanded cards
    document.querySelectorAll('.paper-card.expanded').forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('expanded');
            console.log('Closed another card'); // Debug log
        }
    });
    
    // Toggle current card
    if (isExpanded) {
        card.classList.remove('expanded');
        console.log('Card collapsed'); // Debug log
    } else {
        card.classList.add('expanded');
        console.log('Card expanded'); // Debug log
    }
}
    
    // Global function for downloading papers
    window.downloadPaper = function(downloadUrl, paperTitle) {
        const downloadBtns = document.querySelectorAll('.download-btn');
        const clickedBtn = event.target.closest('.download-btn');
        
        if (clickedBtn) {
            const originalText = clickedBtn.innerHTML;
            clickedBtn.innerHTML = '<span class="download-icon">⏳</span> Downloading...';
            clickedBtn.disabled = true;
            
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${paperTitle}.pdf`;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setTimeout(() => {
                clickedBtn.innerHTML = originalText;
                clickedBtn.disabled = false;
            }, 2000);
            
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
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.paper-card.expanded').forEach(card => {
                card.classList.remove('expanded');
            });
        }
    });
function getCurrentSubject() {
    // Get subject ID from URL parameter OR from page-specific variable
    const urlParams = new URLSearchParams(window.location.search);
    const subjectFromUrl = urlParams.get('subject');
    
    // If there's a currentSubjectId defined in the page, use that
    // Otherwise, extract from filename
    if (typeof currentSubjectId !== 'undefined') {
        return subjectPapers[currentSubjectId];
    }
    
    if (subjectFromUrl && subjectPapers[subjectFromUrl]) {
        return subjectPapers[subjectFromUrl];
    }
    
    // Fallback: extract from current filename
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    return subjectPapers[filename] || subjectPapers['programming-fundamentals'];
}
    
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
