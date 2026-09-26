// ==========================================
// CHAT EXPORT SYSTEM (MULTI-FORMAT)
// ==========================================
// Allows the dispatcher to export the unified chat log to TXT, PNG, or PDF.

document.addEventListener('DOMContentLoaded', () => {
    const exportBtn = document.getElementById('btn-export-log');
    if (!exportBtn) return;
    
    // 1. Show the Export Modal instead of downloading immediately
    exportBtn.addEventListener('click', () => {
        const modal = document.getElementById('export-modal');
        if (modal) modal.style.display = 'flex';
    });

    // TXT Export Logic
    document.getElementById('btn-export-txt')?.addEventListener('click', () => {
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
        
        document.getElementById('export-modal').style.display = 'none';
    });

    // PNG Export Logic (Uses html2canvas)
    document.getElementById('btn-export-png')?.addEventListener('click', () => {
        const logContainer = document.getElementById('unified-log');
        if (!logContainer || typeof html2canvas === 'undefined') {
            alert("Error: Image conversion library not loaded. Check internet connection.");
            return;
        }
        
        // Temporarily adjust styling so the whole log is captured
        const originalOverflow = logContainer.style.overflowY;
        const originalHeight = logContainer.style.height;
        logContainer.style.overflowY = 'visible';
        logContainer.style.height = 'auto';

        html2canvas(logContainer, {
            backgroundColor: '#06111e',
            scale: 2 // High resolution
        }).then(canvas => {
            // Restore styles
            logContainer.style.overflowY = originalOverflow;
            logContainer.style.height = originalHeight;

            let a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = `MCPD_TRANSCRIPT_${Date.now()}.png`;
            a.click();
            
            document.getElementById('export-modal').style.display = 'none';
        }).catch(err => {
            console.error("Image generation failed:", err);
            logContainer.style.overflowY = originalOverflow;
            logContainer.style.height = originalHeight;
        });
    });

    // PDF Export Logic (Uses html2canvas + jsPDF)
    document.getElementById('btn-export-pdf')?.addEventListener('click', () => {
        const logContainer = document.getElementById('unified-log');
        if (!logContainer || typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
            alert("Error: PDF conversion library not loaded. Check internet connection.");
            return;
        }

        const originalOverflow = logContainer.style.overflowY;
        const originalHeight = logContainer.style.height;
        logContainer.style.overflowY = 'visible';
        logContainer.style.height = 'auto';

        html2canvas(logContainer, {
            backgroundColor: '#06111e',
            scale: 2
        }).then(canvas => {
            logContainer.style.overflowY = originalOverflow;
            logContainer.style.height = originalHeight;

            const imgData = canvas.toDataURL('image/png');
            const pdf = new window.jspdf.jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`MCPD_TRANSCRIPT_${Date.now()}.pdf`);
            
            document.getElementById('export-modal').style.display = 'none';
        }).catch(err => {
            console.error("PDF generation failed:", err);
            logContainer.style.overflowY = originalOverflow;
            logContainer.style.height = originalHeight;
        });
    });
});
