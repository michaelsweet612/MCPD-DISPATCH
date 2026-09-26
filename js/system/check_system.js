// =======================================================
// ADVANCED CHECK SYSTEM DIAGNOSTICS (v2.0)
// =======================================================
// Automatically monitors the entire project for errors, unhandled rejections, 
// broken logic, missing globals, and corrupted data structures.

window._mcpd_errors = [];
let _checkSystemInitialized = false;

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
    const issueBody = encodeURIComponent(`### dYs" Automated Crash Report\nThe Check System caught the following critical errors:\n\n` + window._mcpd_errors.map(e => `- \`${e}\``).join('\n') + `\n\n### Context\n*(What were you doing when the game crashed?)*\n`);
    const githubLink = `https://github.com/michaelsweet612/MCPD-DISPATCH/issues/new?title=${issueTitle}&body=${issueBody}`;

    const reportBtnHtml = `<a href="${githubLink}" target="_blank" style="display: inline-block; margin-top: 10px; padding: 10px 20px; background: #fff; color: #d32f2f; font-weight: bold; font-size: 1.2rem; text-decoration: none; border-radius: 4px; border: 2px solid #b71c1c; box-shadow: 0 4px 6px rgba(0,0,0,0.5);">REPORT TO GITHUB ISSUES</a>`;

    let header = count > 1 
        ? `<h1>CRITICAL ALERT: ${count} errors have been found!</h1><p style="font-size: 1.5rem; color: #ffeb3b;">Please report this to <b>michaelsweet612</b> right away so these errors can be fixed.</p>${reportBtnHtml}`
        : `<h1>CRITICAL ALERT: One error has been found!</h1><p style="font-size: 1.5rem; color: #ffeb3b;">Please report this to <b>michaelsweet612</b> right away so this error can be fixed.</p>${reportBtnHtml}`;
        
    let details = "<ul style='margin-top: 30px; font-size: 1.1rem;'>" + window._mcpd_errors.map(e => `<li style="margin-bottom:10px;">${e}</li>`).join('') + "</ul>";
    
    errorContainer.innerHTML = header + details + `<br><button onclick="document.getElementById('fatal-check-system-box').style.display='none'; window._mcpd_errors = [];" style="margin-top: 20px; padding: 15px 30px; font-size: 1.2rem; background: black; color: white; border: 2px solid white; cursor: pointer;">ACKNOWLEDGE & CLEAR</button>`;
}

function pushError(msg) {
    if (!window._mcpd_errors.includes(msg)) {
        window._mcpd_errors.push(msg);
        renderSystemErrors();
    }
}

// 1. Intercept global errors (syntax errors, undefined variables)
window.onerror = function(msg, url, lineNo, columnNo, error) {
    let filename = url ? url.split('/').pop() : 'Unknown File';
    pushError(`[SYSTEM FAULT] ${msg} (File: ${filename}, Line: ${lineNo})`);
    return false; // Let it print to console too
};

// 2. Intercept unhandled promises
window.addEventListener('unhandledrejection', function(event) {
    pushError(`[PROMISE FAULT] ${event.reason}`);
});

// 3. Intercept console.error calls
const originalConsoleError = console.error;
console.error = function(...args) {
    pushError(`[CONSOLE ERROR] ${args.join(' ')}`);
    originalConsoleError.apply(console, args);
};

// 4. Advanced Structure Integrity Checks
function performIntegrityChecks() {
    // Check critical global variables
    const criticalGlobals = [
        'roster', 'crimeReports', 'GLOBAL_ARRIVING_CHATS_STANDARD', 
        'GLOBAL_GIBBERISH_RESPONSES', 'PROFANITY_LINES', 'NPC_DICTIONARY',
        
    ];

    criticalGlobals.forEach(g => {
        try {
            eval(g); // If it throws ReferenceError, it doesn't exist in scope
            if (typeof eval(g) === 'undefined') {
                pushError(`[INTEGRITY FAULT] Critical global variable '${g}' is undefined.`);
            }
        } catch (e) {
            pushError(`[INTEGRITY FAULT] Critical global variable '${g}' is undefined or failed to load.`);
        }
    });

    // Check roster integrity
    try {
        if (typeof roster !== 'undefined' && Array.isArray(roster)) {
            roster.forEach(unit => {
                if (!unit.id || !unit.status || !unit.personality) {
                    pushError(`[DATA FAULT] Corrupted unit found in roster list: ${JSON.stringify(unit)}`);
                }
            });
        }
    } catch(e) {}

    // Check critical functions exist
    const criticalFunctions = [
        'simulateChat', 'processDispatchChat', 'generateDynamicAISentence', 
        'handleDispatchChatReactions', 'analyzeImage'
    ];

    criticalFunctions.forEach(f => {
        try {
            if (typeof eval(f) !== 'function') {
                pushError(`[INTEGRITY FAULT] Critical function '${f}' is missing or broken.`);
            }
        } catch (e) {
            pushError(`[INTEGRITY FAULT] Critical function '${f}' is missing or broken.`);
        }
    });

    // Check DOM Elements
    const requiredElements = [
        'unified-log', 'dispatch-chat-input', 'unit-status-log', 
        'time-display'
    ];
    
    requiredElements.forEach(id => {
        if (!document.getElementById(id)) {
            pushError(`[DOM FAULT] Missing critical UI element: #${id}`);
        }
    });
}

// 5. Typo & Anomaly Scanner
const commonTypos = {
    "teh": "the", "realy": "really", "alot": "a lot", "definitly": "definitely",
    "occured": "occurred", "untill": "until", "wierd": "weird", "seperate": "separate",
    "acheive": "achieve", "recieve": "receive", "therefor": "therefore",
    "disspatch": "dispatch", "offcer": "officer", "pericnct": "precinct", "panc": "panic"
};

function scanForTyposAndAnomalies() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while(node = walker.nextNode()) {
        const text = node.nodeValue.toLowerCase();
        
        // Skip script, style tags, and the error box itself
        if (node.parentElement && (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE' || node.parentElement.id === 'fatal-check-system-box')) {
            continue;
        }

        // Check each typo
        for (const [typo, correction] of Object.entries(commonTypos)) {
            const regex = new RegExp(`\\b${typo}\\b`, 'i');
            if (regex.test(text)) {
                pushError(`[SPELLING FAULT] Detected misspelled word "${typo}" in UI text. Did you mean "${correction}"?`);
            }
        }
    }
}

// Startup Initialization
window.addEventListener('DOMContentLoaded', () => {
    if (_checkSystemInitialized) return;
    _checkSystemInitialized = true;

    // Run immediately
    performIntegrityChecks();
    
    // Run periodically
    setInterval(() => {
        performIntegrityChecks();
        scanForTyposAndAnomalies();
    }, 15000);
});
