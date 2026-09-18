// CHECK SYSTEM DIAGNOSTICS
// Automatically monitors the entire project for errors, unhandled rejections, and broken logic.

window._mcpd_errors = [];

function renderSystemErrors() {
    if (window._mcpd_errors.length === 0) return;
    
    let errorContainer = document.getElementById('fatal-check-system-box');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'fatal-check-system-box';
        errorContainer.style.position = 'fixed';
        errorContainer.style.top = '0';
        errorContainer.style.left = '0';
        errorContainer.style.width = '100vw';
        errorContainer.style.height = '100vh';
        errorContainer.style.background = 'rgba(200, 0, 0, 0.95)';
        errorContainer.style.color = 'white';
        errorContainer.style.padding = '40px';
        errorContainer.style.zIndex = '9999999';
        errorContainer.style.fontFamily = 'monospace';
        errorContainer.style.fontSize = '1.2rem';
        errorContainer.style.overflowY = 'auto';
        document.body.appendChild(errorContainer);
    }
    
    const count = window._mcpd_errors.length;
    // Generate pre-filled GitHub Issue URL
    const issueTitle = encodeURIComponent(`[CRASH REPORT] ${count} System Faults Detected`);
    const issueBody = encodeURIComponent(`### 🚨 Automated Crash Report\nThe Check System caught the following critical errors:\n\n` + window._mcpd_errors.map(e => `- \`${e}\``).join('\n') + `\n\n### Context\n*(What were you doing when the game crashed?)*\n`);
    const githubLink = `https://github.com/michaelsweet612/MCPD-DISPATCH/issues/new?title=${issueTitle}&body=${issueBody}`;

    const reportBtnHtml = `<a href="${githubLink}" target="_blank" style="display: inline-block; margin-top: 10px; padding: 10px 20px; background: #fff; color: #d32f2f; font-weight: bold; font-size: 1.2rem; text-decoration: none; border-radius: 4px; border: 2px solid #b71c1c; box-shadow: 0 4px 6px rgba(0,0,0,0.5);">REPORT TO GITHUB ISSUES</a>`;

    let header = count > 1 
        ? `<h1>CRITICAL ALERT: ${count} errors have been found!</h1><p style="font-size: 1.5rem; color: #ffeb3b;">Please report this to <b>michaelsweet612</b> right away so these errors can be fixed.</p>${reportBtnHtml}`
        : `<h1>CRITICAL ALERT: One error has been found!</h1><p style="font-size: 1.5rem; color: #ffeb3b;">Please report this to <b>michaelsweet612</b> right away so this error can be fixed.</p>${reportBtnHtml}`;
        
    let details = "<ul style='margin-top: 30px; font-size: 1.1rem;'>" + window._mcpd_errors.map(e => `<li style="margin-bottom:10px;">${e}</li>`).join('') + "</ul>";
    
    errorContainer.innerHTML = header + details + `<br><button onclick="document.getElementById('fatal-check-system-box').style.display='none'; window._mcpd_errors = [];" style="margin-top: 20px; padding: 15px 30px; font-size: 1.2rem; background: black; color: white; border: 2px solid white; cursor: pointer;">ACKNOWLEDGE & CLEAR</button>`;
}

// Intercept global errors (syntax errors, undefined variables)
window.onerror = function(msg, url, lineNo, columnNo, error) {
    let filename = url ? url.split('/').pop() : 'Unknown File';
    window._mcpd_errors.push(`[SYSTEM FAULT] ${msg} (File: ${filename}, Line: ${lineNo})`);
    renderSystemErrors();
    return false; // Let it print to console too
};

// Intercept unhandled promises
window.addEventListener('unhandledrejection', function(event) {
    window._mcpd_errors.push(`[PROMISE FAULT] ${event.reason}`);
    renderSystemErrors();
});

// Intercept console.error calls
const originalConsoleError = console.error;
console.error = function(...args) {
    window._mcpd_errors.push(`[CONSOLE ERROR] ${args.join(' ')}`);
    renderSystemErrors();
    originalConsoleError.apply(console, args);
};

// Self-diagnostic: Check if critical DOM elements exist
window.addEventListener('DOMContentLoaded', () => {
    const requiredElements = ['unified-log', 'dispatch-chat-input', 'unit-status-log'];
    let missing = 0;
    requiredElements.forEach(id => {
        if (!document.getElementById(id)) {
            window._mcpd_errors.push(`[DOM FAULT] Missing critical UI element: #${id}`);
            missing++;
        }
    });
    
    if (missing > 0) renderSystemErrors();
    
    // Start periodic typo and anomaly scanning
    setInterval(scanForTyposAndAnomalies, 10000);
});

// Advanced Typo & Anomaly Scanner
const commonTypos = {
    "teh": "the",
    "realy": "really",
    "alot": "a lot",
    "definitly": "definitely",
    "occured": "occurred",
    "untill": "until",
    "wierd": "weird",
    "seperate": "separate",
    "acheive": "achieve",
    "recieve": "receive",
    "therefor": "therefore",
    "disspatch": "dispatch",
    "offcer": "officer",
    "pericnct": "precinct",
    "panc": "panic"
};

function scanForTyposAndAnomalies() {
    let foundErrors = 0;
    
    // 1. Scan the DOM for misspelled words in visible text
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while(node = walker.nextNode()) {
        const text = node.nodeValue.toLowerCase();
        
        // Skip script and style tags
        if (node.parentElement && (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE' || node.parentElement.id === 'fatal-check-system-box')) {
            continue;
        }

        // Check each typo
        for (const [typo, correction] of Object.entries(commonTypos)) {
            // Regex to match exact word
            const regex = new RegExp(`\\b${typo}\\b`, 'i');
            if (regex.test(text)) {
                // To avoid spamming, only report it if we haven't seen it recently
                const errorMsg = `[SPELLING FAULT] Detected misspelled word "${typo}" in UI text. Did you mean "${correction}"?`;
                if (!window._mcpd_errors.includes(errorMsg)) {
                    window._mcpd_errors.push(errorMsg);
                    foundErrors++;
                }
            }
        }
    }





    if (foundErrors > 0) {
        renderSystemErrors();
    }
}
