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
    let header = count > 1 
        ? `<h1>CRITICAL ALERT: ${count} errors have been found!</h1><p style="font-size: 1.5rem; color: #ffeb3b;">Please report this to <b>michaelsweet612</b> right away so these errors can be fixed.</p>`
        : `<h1>CRITICAL ALERT: One error has been found!</h1><p style="font-size: 1.5rem; color: #ffeb3b;">Please report this to <b>michaelsweet612</b> right away so this error can be fixed.</p>`;
        
    let details = "<ul style='margin-top: 30px; font-size: 1.1rem;'>" + window._mcpd_errors.map(e => `<li style="margin-bottom:10px;">${e}</li>`).join('') + "</ul>";
    
    errorContainer.innerHTML = header + details + `<br><button onclick="document.getElementById('fatal-check-system-box').style.display='none'" style="margin-top: 20px; padding: 15px 30px; font-size: 1.2rem; background: black; color: white; border: 2px solid white; cursor: pointer;">ACKNOWLEDGE & HIDE</button>`;
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

// Self-diagnostic: Check if critical DOM elements exist
window.addEventListener('DOMContentLoaded', () => {
    const requiredElements = ['unified-log', 'dispatch-chat-input', 'unit-status-log', 'main-panel'];
    let missing = 0;
    requiredElements.forEach(id => {
        if (!document.getElementById(id)) {
            window._mcpd_errors.push(`[DOM FAULT] Missing critical UI element: #${id}`);
            missing++;
        }
    });
    
    if (missing > 0) renderSystemErrors();
});
