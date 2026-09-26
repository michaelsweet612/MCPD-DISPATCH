// ==========================================
// CHAT EXPORT SYSTEM
// ==========================================
// Allows the dispatcher to export the entire unified chat log to a text file.

document.addEventListener('DOMContentLoaded', () => {
    const exportBtn = document.getElementById('btn-export-log');
    if (!exportBtn) return;
    
    exportBtn.addEventListener('click', () => {
        const logContainer = document.getElementById('unified-log');
        if (!logContainer) return;
        
        let exportText = "=== MCPD DISPATCH COMMUNICATIONS LOG ===\n";
        exportText += "EXPORT COMPILED: " + new Date().toLocaleString() + "\n";
        exportText += "========================================\n\n";
        
        const entries = logContainer.children;
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const timeSpan = entry.querySelector('.time');
            const senderSpan = entry.querySelector('.sender');
            const textSpan = entry.querySelector('.text');
            
            let time = timeSpan ? timeSpan.innerText : "";
            let sender = senderSpan ? senderSpan.innerText : "";
            let text = textSpan ? textSpan.innerText : "";
            
            // If it doesn't have the standard structure, just dump the raw text
            if (!time && !sender && !text) {
                exportText += entry.innerText + "\n";
            } else {
                exportText += `${time} ${sender} ${text}\n`;
            }
        }
        
        const blob = new Blob([exportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `MCPD_TRANSCRIPT_${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
