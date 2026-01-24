// PWA Installation and Service Worker Registration with Update Detection
class PWAManager {
    constructor() {
        this.deferredPrompt = null;
        this.registration = null;
        this.init();
    }

    init() {
        this.registerServiceWorker();
        this.setupInstallPrompt();
        this.createInstallButton();
        this.checkForUpdates();
    }

    // Register service worker with update detection
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        this.registration = registration;
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                        
                        // Check for updates every 60 seconds
                        setInterval(() => {
                            registration.update();
                        }, 60000);
                        
                        // Listen for updates
                        registration.addEventListener('updatefound', () => {
                            const newWorker = registration.installing;
                            
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New service worker available
                                    this.showUpdateNotification(newWorker);
                                }
                            });
                        });
                    })
                    .catch((err) => {
                        console.log('ServiceWorker registration failed: ', err);
                    });
                    
                // Handle controller change (when new SW takes over)
                let refreshing = false;
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    if (!refreshing) {
                        refreshing = true;
                        window.location.reload();
                    }
                });
            });
        }
    }

    // Show update notification to user
    showUpdateNotification(newWorker) {
        const notification = document.createElement('div');
        notification.className = 'update-notification';
        notification.innerHTML = `
            <div class="update-content">
                <div class="update-icon">🔄</div>
                <div class="update-text">
                    <strong>New Update Available!</strong>
                    <p>A new version of FAST Past Papers is ready.</p>
                </div>
                <button class="update-btn" id="updateBtn">Update Now</button>
                <button class="dismiss-btn" id="dismissBtn">Later</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Handle update button click
        document.getElementById('updateBtn').addEventListener('click', () => {
            newWorker.postMessage({ type: 'SKIP_WAITING' });
            notification.remove();
        });
        
        // Handle dismiss button click
        document.getElementById('dismissBtn').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
    }

    // Check for updates on page load
    checkForUpdates() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
                // Check for updates immediately
                registration.update();
            });
        }
    }

    // Setup install prompt handling
    setupInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
        });

        window.addEventListener('appinstalled', (evt) => {
            console.log('PWA was installed');
            this.hideInstallButton();
            this.showInstallSuccessMessage();
        });
    }

    // Create and inject install button
    createInstallButton() {
        const installButtonHTML = `
            <div id="pwa-install-container" class="pwa-install-container" style="display: none;">
                <button id="pwa-install-button" class="pwa-install-btn" onclick="pwaManager.installApp()">
                    <span class="install-icon">📱</span>
                    Install App
                </button>
            </div>
        `;
        
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.insertAdjacentHTML('afterend', installButtonHTML);
        }
    }

    showInstallButton() {
        const installContainer = document.getElementById('pwa-install-container');
        if (installContainer) {
            installContainer.style.display = 'block';
            installContainer.classList.add('fade-in');
        }
    }

    hideInstallButton() {
        const installContainer = document.getElementById('pwa-install-container');
        if (installContainer) {
            installContainer.style.display = 'none';
        }
    }

    installApp() {
        const installButton = document.getElementById('pwa-install-button');
        
        if (installButton) {
            installButton.style.display = 'none';
        }
        
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            
            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                    if (installButton) {
                        installButton.style.display = 'flex';
                    }
                }
                this.deferredPrompt = null;
            });
        } else {
            this.showAddToHomeScreenInstructions();
        }
    }

    showInstallSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'install-success-message';
        message.innerHTML = `
            <div class="success-content">
                <span class="success-icon">✅</span>
                <span class="success-text">App installed successfully!</span>
            </div>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }

    showAddToHomeScreenInstructions() {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isAndroid = /Android/.test(navigator.userAgent);
        
        let instructions = 'To install this app: ';
        
        if (isIOS) {
            instructions += 'Tap the Share button and select "Add to Home Screen"';
        } else if (isAndroid) {
            instructions += 'Tap the menu and select "Add to Home Screen"';
        } else {
            instructions += 'Look for the install option in your browser menu';
        }
        
        const instructionModal = document.createElement('div');
        instructionModal.className = 'install-instruction-modal';
        instructionModal.innerHTML = `
            <div class="instruction-content">
                <h3>Install App</h3>
                <p>${instructions}</p>
                <button onclick="this.parentElement.parentElement.remove()">Got it!</button>
            </div>
        `;
        
        document.body.appendChild(instructionModal);
        
        setTimeout(() => {
            instructionModal.classList.add('show');
        }, 100);
    }
}

// Initialize PWA Manager
const pwaManager = new PWAManager();
