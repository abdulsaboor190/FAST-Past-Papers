// Subject Page JavaScript
// GitHub repository configuration for Lahore campus papers
const GITHUB_REPO = {
    owner: 'abdulsaboor190',
    repo: 'FAST_Past_Papers',
    branch: 'main',
    // Default basePath (used for Programming Fundamentals)
    basePath: 'PF'
};

// Per-subject GitHub folder mapping for Lahore campus
// Keys are subject titles from subject-data.js
const SUBJECT_GITHUB_CONFIG = {
    'Programming Fundamentals': {
        basePath: 'PF',
        shortCode: 'PF'
    },
    'Programming Fundamentals Lab': {
        basePath: 'PF Lab',
        shortCode: 'PF Lab'
    },
    'Data Structures & Algorithms': {
        basePath: 'DSA',
        shortCode: 'DSA'
    },
    'Data Structures Lab': {
        basePath: 'DSA LAB',
        shortCode: 'DSA Lab'
    },
    'Applied Physics': {
        basePath: 'AP',
        shortCode: 'AP'
    },
    'Calculus': {
        basePath: 'CAL',
        shortCode: 'CAL'
    },
    'Expository Writing': {
        basePath: 'EW',
        shortCode: 'EW'
    },
    'Multivariable Calculus': {
        basePath: 'MVC',
        shortCode: 'MVC'
    },
    'Object Oriented Programming': {
        basePath: 'OOP',
        shortCode: 'OOP'
    },
    'Object Oriented Programming Lab': {
        basePath: 'OOP LAB',
        shortCode: 'OOP Lab'
    },
    'Digital and Logic Design': {
        basePath: 'DLD',
        shortCode: 'DLD'
    },
    'Operating System': {
        basePath: 'OS',
        shortCode: 'OS'
    },
    'Database System': {
        basePath: 'DB',
        shortCode: 'DB'
    },
    'Deep Learning with Perception': {
        basePath: 'DLP',
        shortCode: 'DLP'
    },
    'Software Design and Analysis': {
        basePath: 'SDA',
        shortCode: 'SDA'
    },
    'Probability and Statistics': {
        basePath: 'PROB',
        shortCode: 'PROB'
    },
    'Operating System Lab': {
        basePath: 'OS LAB',
        shortCode: 'OS LAB'
    },
    'Database Lab': {
        basePath: 'DB LAB',
        shortCode: 'DB LAB'
    },
    'Artificial Intelligence': {
        basePath: 'AI',
        shortCode: 'AI'
    },
    'Artificial Intelligence Lab': {
        basePath: 'AI Lab',
        shortCode: 'AI Lab'
    },
    'Technical and Business Writing': {
        basePath: 'TBW',
        shortCode: 'TBW'
    },
    'Parallel and Distributed Computing': {
        basePath: 'PDC',
        shortCode: 'PDC'
    },
    'Software Engineering': {
        basePath: 'SE',
        shortCode: 'SE'
    },
    'Numerical Computing': {
        basePath: 'NC',
        shortCode: 'NC'
    },
    'Applied Human Computer Interaction': {
        basePath: 'AHCI',
        shortCode: 'AHCI'
    },
    'Compiler Construction': {
        basePath: 'CC',
        shortCode: 'CC'
    },
    'Data Science': {
        basePath: 'DSS',
        shortCode: 'DSS'
    },
    'Fundamentals of Software Project Management': {
        basePath: 'FSPM',
        shortCode: 'FSPM'
    },
    'Information Retrieval': {
        basePath: 'IR',
        shortCode: 'IR'
    },
    'Discrete Structures': {
        basePath: 'DS',
        shortCode: 'DS'
    },
    'Linear Algebra': {
        basePath: 'LA',
        shortCode: 'LA'
    },
    'Computer Architecture': {
        basePath: 'CA',
        shortCode: 'CA'
    }
};

// Cache for GitHub papers to avoid repeated API calls
let githubPapersCache = {
    mid1: null,
    mid2: null,
    final: null,
    project: null
};

document.addEventListener('DOMContentLoaded', function() {
    let currentSubject = getCurrentSubject();
    let currentCategory = 'mid1';
    let currentDifficultyFilter = 'all';
    let currentCampus = 'karachi';

    
    // Initialize the page
    initializePage();
    
    function initializePage() {
        updatePageTitle();
        setupTabListeners();
        setupFilterListeners();
        setupCampusSwitcher();

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

        updateCategoryChrome(currentCategory);
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
                const scopedPapers = applyCampusFilter(categoryPapers);
                totalPapers += scopedPapers.length;
            });
            
            // Find latest year
            let latestYear = 0;
            Object.values(currentSubject.papers).forEach(categoryPapers => {
                const scopedPapers = applyCampusFilter(categoryPapers);
                scopedPapers.forEach(paper => {
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

        updateCategoryChrome(category);
        
        // Load papers for the new category (async)
        loadPapers(category).catch(error => {
            console.error('Error loading papers:', error);
        });
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
    function isGitHubProjectCategory(category) {
        return category === 'project';
    }

    function updateCategoryChrome(category) {
        const difficultyFilter = document.querySelector('.difficulty-filter');
        const campusToggle = document.getElementById('campusToggle');
        const isProject = isGitHubProjectCategory(category);

        if (difficultyFilter) {
            difficultyFilter.style.display = isProject ? 'none' : '';
        }

        if (campusToggle) {
            campusToggle.style.display = (isProject || !supportsCampusFilter()) ? 'none' : '';
        }
    }

    async function loadPapers(category) {
        const papersGrid = document.getElementById('papersGrid');
        
        let allPapers = [];

        // Project files always come from GitHub (PF/project), not campus Drive links
        if (isGitHubProjectCategory(category)) {
            papersGrid.innerHTML = `
                <div class="empty-state">
                    <h3>Loading projects from GitHub...</h3>
                    <p>Please wait while we fetch files from the project folder.</p>
                </div>
            `;

            try {
                const githubPapers = await fetchGitHubPapers(category);
                if (githubPapers && githubPapers.length > 0) {
                    papersGrid.innerHTML = githubPapers.map(paper => createPaperCard(paper)).join('');
                    setupPaperCardListeners();
                } else {
                    papersGrid.innerHTML = `
                        <div class="empty-state">
                            <h3>No projects available</h3>
                            <p>Add files to the <code>PF/project</code> folder in the GitHub repository.</p>
                        </div>
                    `;
                }
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
                papersGrid.innerHTML = `
                    <div class="empty-state">
                        <h3>Error loading projects</h3>
                        <p>Unable to fetch projects from GitHub. Please try again later.</p>
                    </div>
                `;
            }
            return;
        }
        
        // If Lahore campus is selected and this is PF, fetch from GitHub
        if (currentCampus === 'lahore' && supportsCampusFilter()) {
            // Show loading state for GitHub fetch
            papersGrid.innerHTML = `
                <div class="empty-state">
                    <h3>Loading papers from GitHub...</h3>
                    <p>Please wait while we fetch the papers.</p>
                </div>
            `;
            
            try {
                const githubPapers = await fetchGitHubPapers(category);
                if (githubPapers && githubPapers.length > 0) {
                    allPapers = githubPapers;
                } else {
                    papersGrid.innerHTML = `
                        <div class="empty-state">
                            <h3>No papers available</h3>
                            <p>No papers found in GitHub repository for ${formatCampusLabel(currentCampus)} campus.</p>
                        </div>
                    `;
                    return;
                }
            } catch (error) {
                console.error('Error fetching GitHub papers:', error);
                papersGrid.innerHTML = `
                    <div class="empty-state">
                        <h3>Error loading papers</h3>
                        <p>Unable to fetch papers from GitHub. Please try again later.</p>
                    </div>
                `;
                return;
            }
        } else {
            // For Karachi or other campuses, use existing papers
            allPapers = currentSubject.papers[category] || [];
            const papers = applyCampusFilter(allPapers);
            
            if (papers.length === 0) {
                papersGrid.innerHTML = `
                    <div class="empty-state">
                        <h3>No papers available</h3>
                        <p>${getEmptyStateMessage()}</p>
                    </div>
                `;
                return;
            }
            
            papersGrid.innerHTML = papers.map(paper => createPaperCard(paper)).join('');
            updateFilterCounts(papers);
            setupPaperCardListeners();
            applyDifficultyFilter();
            return;
        }
        
        // Display GitHub papers for Lahore
        if (allPapers.length === 0) {
            papersGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No papers available</h3>
                    <p>${getEmptyStateMessage()}</p>
                </div>
            `;
            return;
        }
        
        papersGrid.innerHTML = allPapers.map(paper => createPaperCard(paper)).join('');
        updateFilterCounts(allPapers);
        setupPaperCardListeners();
        applyDifficultyFilter();
    }
    function getEmptyStateMessage() {
        if (supportsCampusFilter()) {
            return `Papers for ${formatCampusLabel(currentCampus)} will be added soon. Try switching campus.`;
        }
        return 'Papers for this category will be added soon.';
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
        const isProject = paper.source === 'github-project' || currentCategory === 'project';
        const difficultyClass = isProject ? 'medium' : getDifficultyClass(paper.difficulty);
        const difficultyLabel = getDifficultyLabel(paper.difficulty);
        const difficultyIcon = getDifficultyIcon(difficultyClass);
        const fileFormat = paper.fileFormat || 'PDF';
        const subtitle = isProject
            ? (paper.year && paper.year !== 'N/A' ? paper.year : 'GitHub')
            : `${paper.semester} ${paper.year}`;
        const downloadLabel = paper.isFolder ? 'Open on GitHub' : (isProject ? 'Download Project' : 'Download Paper');
        const downloadFileName = paper.fileName || `${paper.title}.pdf`;
        const escapedUrl = (paper.downloadUrl || '').replace(/'/g, "\\'");
        const escapedTitle = (paper.title || '').replace(/'/g, "\\'");
        const escapedFileName = downloadFileName.replace(/'/g, "\\'");
        
        return `
            <div class="paper-card" data-paper-id="${paper.id}" data-difficulty="${difficultyClass}">
                ${isProject ? '' : `
                <div class="difficulty-badge ${difficultyClass}">
                    <span class="difficulty-icon">${difficultyIcon}</span>
                    <span class="difficulty-value">${paper.difficulty || 'N/A'}</span>
                </div>`}
                <div class="paper-header">
                    <div class="paper-info">
                        <h3>${paper.title}</h3>
                        <div class="paper-year">${subtitle}</div>
                    </div>
                    <div class="paper-icon">${isProject ? (paper.isFolder ? '📁' : '📦') : currentSubject.icon}</div>
                    <div class="expand-indicator">▼</div>
                </div>
                <div class="paper-download">
                    <div class="download-info">
                        <h4>File Information</h4>
                        <div class="file-details">
                            <div class="file-detail-item">
                                <span class="file-detail-icon">📄</span>
                                <span class="file-detail-label">Format</span>
                                <span class="file-detail-value">${fileFormat}</span>
                            </div>
                            <div class="file-detail-item">
                                <span class="file-detail-icon">💾</span>
                                <span class="file-detail-label">Size</span>
                                <span class="file-detail-value file-size">${paper.fileSize}</span>
                            </div>
                            ${isProject ? '' : `
                            <div class="file-detail-item">
                                <span class="file-detail-icon">📊</span>
                                <span class="file-detail-label">Difficulty</span>
                                <span class="file-detail-value">${difficultyLabel}</span>
                            </div>`}
                        </div>
                    </div>
                    <button class="download-btn" onclick="downloadPaper('${escapedUrl}', '${escapedTitle}', '${escapedFileName}', ${paper.isFolder ? 'true' : 'false'})">
                        <span class="download-icon">${paper.isFolder ? '↗' : '⬇'}</span>
                        ${downloadLabel}
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
        // Remove existing listeners by cloning
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
    });
    
    // Re-select after cloning
    const refreshedCards = document.querySelectorAll('.paper-card');
    
    refreshedCards.forEach(card => {
        const header = card.querySelector('.paper-header');
        
        // Click anywhere on the card (except download button) to toggle
        card.addEventListener('click', function(e) {
            if (e.target.closest('.download-btn')) return;
            togglePaperCard(card);
        });
        
        // Also keep header clickable with a pointer cursor
        if (header) {
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
    
    function isGitHubAssetUrl(url) {
        return /(?:raw\.githubusercontent\.com|media\.githubusercontent\.com|github\.com)\//.test(url || '');
    }

    function getGitHubDownloadCandidates(url) {
        const urls = [url];
        const rawMatch = (url || '').match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);
        if (rawMatch) {
            const [, owner, repo, branch, path] = rawMatch;
            urls.push(`https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${path}`);
            urls.push(`https://media.githubusercontent.com/media/${owner}/${repo}/${branch}/${path}`);
        }
        return urls;
    }

    function triggerLocalFileDownload(blobOrUrl, fileName) {
        const href = blobOrUrl instanceof Blob ? URL.createObjectURL(blobOrUrl) : blobOrUrl;
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName;
        link.rel = 'noopener';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        if (blobOrUrl instanceof Blob) {
            setTimeout(() => URL.revokeObjectURL(href), 1500);
        }
    }

    async function downloadGitHubFile(url, fileName) {
        let lastError = null;
        for (const candidate of getGitHubDownloadCandidates(url)) {
            try {
                const response = await fetch(candidate, { mode: 'cors' });
                if (!response.ok) {
                    lastError = new Error(`Download failed: ${response.status}`);
                    continue;
                }
                const blob = await response.blob();
                triggerLocalFileDownload(blob, fileName);
                return;
            } catch (error) {
                lastError = error;
            }
        }
        throw lastError || new Error('Unable to download file');
    }

    // Global function for downloading papers
    window.downloadPaper = async function(downloadUrl, paperTitle, fileName, openInNewTab) {
        const clickedBtn = event && event.target ? event.target.closest('.download-btn') : null;
        const savedFileName = fileName || `${paperTitle}.pdf`;
        
        if (openInNewTab) {
            window.open(downloadUrl, '_blank', 'noopener');
            return;
        }

        const originalText = clickedBtn ? clickedBtn.innerHTML : '';
        if (clickedBtn) {
            clickedBtn.innerHTML = '<span class="download-icon">⏳</span> Downloading...';
            clickedBtn.disabled = true;
        }

        try {
            if (isGitHubAssetUrl(downloadUrl)) {
                await downloadGitHubFile(downloadUrl, savedFileName);
            } else {
                triggerLocalFileDownload(downloadUrl, savedFileName);
            }
            console.log(`Downloaded: ${paperTitle}`);
        } catch (error) {
            console.error('Download failed:', error);
            triggerLocalFileDownload(downloadUrl, savedFileName);
        } finally {
            if (clickedBtn) {
                setTimeout(() => {
                    clickedBtn.innerHTML = originalText;
                    clickedBtn.disabled = false;
                }, 1200);
            }
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

    function setupCampusSwitcher() {
        const campusToggle = document.getElementById('campusToggle');
        if (!campusToggle) return;

        if (!supportsCampusFilter()) {
            campusToggle.style.display = 'none';
            return;
        }

        campusToggle.style.display = '';
        syncCampusButtons();

        const buttons = campusToggle.querySelectorAll('.campus-btn');
        buttons.forEach(btn => {
            btn.onclick = () => switchCampus(btn.getAttribute('data-campus'));
        });
    }

    function syncCampusButtons() {
        const buttons = document.querySelectorAll('#campusToggle .campus-btn');
        buttons.forEach(btn => {
            const isActive = btn.getAttribute('data-campus') === currentCampus;
            btn.classList.toggle('active', isActive);
        });
    }

    function switchCampus(campus) {
        if (currentCampus === campus) return;
        currentCampus = campus;
        syncCampusButtons();
        
        // Clear GitHub cache when switching campuses to ensure fresh data
        if (campus === 'lahore') {
            githubPapersCache = { mid1: null, mid2: null, final: null, project: null };
        }
        
        updateStats();
        loadPapers(currentCategory);
    }

    function supportsCampusFilter() {
        if (!currentSubject) return false;
        
        // Enable Lahore campus toggle for subjects that have GitHub folders
        if (SUBJECT_GITHUB_CONFIG[currentSubject.title]) {
            return true;
        }

        // Backwards compatibility: also check PF by URL
        return window.location.pathname.includes('programming-fundamentals');
    }

    function applyCampusFilter(papers) {
        if (!supportsCampusFilter()) return papers;
        return papers.filter(paper => getPaperCampus(paper) === currentCampus);
    }

    function getPaperCampus(paper) {
        if (paper.campus) return paper.campus.toLowerCase();
        const campusHint = `${paper.id || ''} ${paper.title || ''}`;
        if (/lhr|lahore/i.test(campusHint)) return 'lahore';
        return 'karachi';
    }

    function formatCampusLabel(campus) {
        return campus === 'lahore' ? 'Lahore' : 'Karachi';
    }

    // Helper to get GitHub config for the current subject
    function getCurrentGitHubConfig() {
        if (currentSubject && SUBJECT_GITHUB_CONFIG[currentSubject.title]) {
            return SUBJECT_GITHUB_CONFIG[currentSubject.title];
        }
        // Fallback to PF defaults
        return {
            basePath: GITHUB_REPO.basePath,
            shortCode: 'PF'
        };
    }

    // GitHub integration functions
    function getGitHubFolderName(category) {
        const folderMap = {
            'mid1': 'Mid 1',
            'mid2': 'Mid 2',
            'final': 'Final',
            'project': 'project'
        };

        // Special-case: OOP LAB and PF Lab repos currently use 'Mid' instead of 'Mid 1'
        const { basePath } = getCurrentGitHubConfig();
        if ((basePath === 'OOP LAB' || basePath === 'PF Lab') && category === 'mid1') {
            return 'Mid';
        }

        return folderMap[category] || category;
    }

    function getGitHubFolderCandidates(category) {
        if (category === 'project') {
            return ['project', 'Project', 'PROJECT'];
        }
        return [getGitHubFolderName(category)];
    }

    function isProjectFile(fileName) {
        return /\.(pdf|zip|rar|7z|doc|docx|ppt|pptx|txt|md|cpp|h|c)$/i.test(fileName);
    }

    async function fetchGitHubPapers(category) {
        // Check cache first
        if (githubPapersCache[category] !== null && githubPapersCache[category] !== undefined) {
            return githubPapersCache[category];
        }

        const { basePath } = getCurrentGitHubConfig();
        const encodedBasePath = encodeURIComponent(basePath);
        const folderCandidates = getGitHubFolderCandidates(category);
        const contentPaths = folderCandidates.map(folderName => `${encodedBasePath}/${encodeURIComponent(folderName)}`);

        if (category === 'project') {
            contentPaths.push('project', 'Project');
        }

        try {
            let files = null;

            for (const contentPath of contentPaths) {
                const apiUrl = `https://api.github.com/repos/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}/contents/${contentPath}`;
                const response = await fetch(apiUrl);
                if (response.ok) {
                    files = await response.json();
                    break;
                }
            }

            if (!files) {
                throw new Error('GitHub API error: folder not found');
            }
            
            const papers = files
                .filter(file => {
                    if (category === 'project') {
                        if (file.name.startsWith('.')) return false;
                        if (file.type === 'dir') return true;
                        return isProjectFile(file.name);
                    }
                    return file.type === 'file' && file.name.toLowerCase().endsWith('.pdf');
                })
                .map(file => parseGitHubFileToPaper(file, category));

            githubPapersCache[category] = papers;
            return papers;
        } catch (error) {
            console.error(`Error fetching papers from GitHub for ${category}:`, error);
            githubPapersCache[category] = []; // Cache empty array to prevent repeated failed requests
            return [];
        }
    }

    function parseGitHubFileToPaper(file, category) {
        const { basePath, shortCode } = getCurrentGitHubConfig();
        // Extract metadata from filename
        // Expected format: CODE_Mid1_2024_Spring.pdf or CODE Final 2019 4.6.pdf (with difficulty)
        const filename = file.name.replace('.pdf', '').replace(/\.pdf$/i, '');
        
        // Try to extract difficulty level from filename (e.g., "PF Final 2019 4.6.pdf" -> 4.6)
        // Pattern: decimal number (X.X format) at the end of filename
        // This matches numbers like 3.0, 3.5, 4.0, 4.6, 5.0 etc.
        let difficulty = 4.0; // default
        let foundDifficulty = false;
        
        // Match pattern: space followed by a decimal number (at least one digit before and after decimal)
        // This specifically targets difficulty values and avoids matching years or other integers
        const difficultyMatch = filename.match(/\s+(\d+\.\d+)\s*$/);
        if (difficultyMatch) {
            const extractedDifficulty = parseFloat(difficultyMatch[1]);
            // Validate difficulty is in reasonable range (3.0 to 5.0)
            if (!isNaN(extractedDifficulty) && extractedDifficulty >= 3.0 && extractedDifficulty <= 5.0) {
                difficulty = extractedDifficulty;
                foundDifficulty = true;
            }
        } else {
            // Fallback: try to match single digit (3-5) at the end if no decimal found
            // Only match if it's not part of a year (avoid matching last digit of 2019, 2020, etc.)
            const singleDigitMatch = filename.match(/\s+([3-5])\s*$/);
            if (singleDigitMatch) {
                // Make sure this isn't the last digit of a year by checking context
                const beforeMatch = filename.substring(0, filename.length - singleDigitMatch[0].length);
                if (!beforeMatch.match(/\d{3}$/)) { // Not preceded by 3 digits (like in 2019)
                    difficulty = parseFloat(singleDigitMatch[1]);
                    foundDifficulty = true;
                }
            }
        }
        
        // Try to extract year (4 digits)
        let year = '2024'; // default
        const yearMatch = filename.match(/\b(20\d{2})\b/);
        if (yearMatch) {
            year = yearMatch[1];
        }

        // Try to extract semester
        let semester = 'Spring'; // default
        if (/fall|autumn/i.test(filename)) {
            semester = 'Fall';
        } else if (/spring/i.test(filename)) {
            semester = 'Spring';
        }

        // Generate title - use filename if it's descriptive, otherwise generate one
        const categoryLabel = category === 'mid1' ? 'Mid 1' : category === 'mid2' ? 'Mid 2' : category === 'project' ? 'Project' : 'Final';
        let title = `${shortCode} ${categoryLabel} ${year} LHR`;
        
        // If filename is descriptive, use it (clean it up)
        // Remove difficulty number from title if it was extracted
        let cleanFilename = filename;
        if (foundDifficulty) {
            // Remove decimal difficulty (e.g., "4.6") or single digit difficulty (e.g., "4")
            cleanFilename = filename.replace(/\s+\d+\.?\d*\s*$/, '').trim();
        }
        
        if (cleanFilename.length > 5 && (!cleanFilename.match(/^pf[-_\s]/i) || basePath === 'PF Lab')) {
            title = cleanFilename.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
            title = title.replace(/^PF lab\b/i, 'PF Lab');
            if (!title.includes('LHR') && !title.includes('Lahore')) {
                title += ' LHR';
            }
        }

        // Generate ID based on filename hash
        const idBase = `${shortCode.toLowerCase().replace(/[^a-z0-9]/g, '')}-${year}-${category}-lhr-${filename.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
        const id = idBase.substring(0, 100); // Limit ID length

        // Construct raw GitHub URL for download (encode filename properly)
        const encodedFolder = encodeURIComponent(getGitHubFolderName(category));
        const encodedFilename = encodeURIComponent(file.name);
        const encodedBasePath = encodeURIComponent(basePath);
        const downloadUrl = file.download_url
            || `https://raw.githubusercontent.com/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}/${GITHUB_REPO.branch}/${encodedBasePath}/${encodedFolder}/${encodedFilename}`;
        const extension = file.type === 'dir'
            ? 'Folder'
            : ((file.name.split('.').pop() || 'FILE').toUpperCase());

        if (category === 'project') {
            const nameWithoutExt = file.type === 'dir' ? file.name : file.name.replace(/\.[^.]+$/, '');
            const projectTitle = nameWithoutExt.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim() || file.name;
            return {
                id: id,
                title: projectTitle,
                year: yearMatch ? year : 'N/A',
                semester: semester,
                fileSize: file.type === 'dir' ? 'Folder' : formatFileSize(file.size),
                downloadUrl: file.type === 'dir' ? file.html_url : downloadUrl,
                campus: 'github',
                source: 'github-project',
                fileFormat: extension,
                fileName: file.name,
                isFolder: file.type === 'dir'
            };
        }

        return {
            id: id,
            title: title,
            year: year,
            semester: semester,
            fileSize: formatFileSize(file.size),
            downloadUrl: downloadUrl,
            campus: 'lahore',
            difficulty: difficulty // Extracted from filename or default
        };
    }

    function formatFileSize(bytes) {
        if (!bytes) return 'Unknown';
        const mb = bytes / (1024 * 1024);
        return `${mb.toFixed(1)} MB`;
    }

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
