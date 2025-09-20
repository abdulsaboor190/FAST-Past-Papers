// PWA Installation and Service Worker Registration
class PWAManager {
    constructor() {
        this.deferredPrompt = null;
        this.init();
    }

    init() {
        this.registerServiceWorker();
        this.setupInstallPrompt();
        this.createInstallButton();
    }

    // Register service worker
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch((err) => {
                        console.log('ServiceWorker registration failed: ', err);
                    });
            });
        }
    }

    // Setup install prompt handling
    setupInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later
            this.deferredPrompt = e;
            // Show custom install button
            this.showInstallButton();
        });

        // Handle successful app installation
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
        
        // Add the button after the hero section
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.insertAdjacentHTML('afterend', installButtonHTML);
        }
    }

    // Show install button
    showInstallButton() {
        const installContainer = document.getElementById('pwa-install-container');
        if (installContainer) {
            installContainer.style.display = 'block';
            installContainer.classList.add('fade-in');
        }
    }

    // Hide install button
    hideInstallButton() {
        const installContainer = document.getElementById('pwa-install-container');
        if (installContainer) {
            installContainer.style.display = 'none';
        }
    }

    // Install the app
    installApp() {
        const installButton = document.getElementById('pwa-install-button');
        
        if (installButton) {
            installButton.style.display = 'none';
        }
        
        if (this.deferredPrompt) {
            // Show the prompt
            this.deferredPrompt.prompt();
            
            // Wait for the user to respond to the prompt
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
            // Fallback for browsers that don't support installation
            this.showAddToHomeScreenInstructions();
        }
    }

    // Show success message after installation
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

    // Show instructions for manual installation
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
