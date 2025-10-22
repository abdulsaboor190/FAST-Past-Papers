// analytics.js - Centralized analytics initialization
(function() {
    // Vercel Web Analytics
    window.va = window.va || function () { 
        (window.vaq = window.vaq || []).push(arguments); 
    };
    
    // Load Vercel Analytics script
    const script = document.createElement('script');
    script.src = 'https://cdn.vercel-insights.com/v1/script.js';
    script.defer = true;
    document.head.appendChild(script);
    
    // Google Analytics
    const gtag = document.createElement('script');
    gtag.src = 'https://www.googletagmanager.com/gtag/js?id=G-DZJG1RB5K9';
    gtag.async = true;
    document.head.appendChild(gtag);
    
    window.dataLayer = window.dataLayer || [];
    function gtagFunc(){dataLayer.push(arguments);}
    gtagFunc('js', new Date());
    gtagFunc('config', 'G-DZJG1RB5K9');
})();
