// ==========================================
// CHAT EXPORT SYSTEM (MULTI-FORMAT)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const exportBtn = document.getElementById('btn-export-log');
    if (!exportBtn) return;
    
    exportBtn.addEventListener('click', () => {
        const modal = document.getElementById('export-modal');
        if (modal) modal.style.display = 'flex';
    });

    const resetButtons = () => {
        const btnPng = document.getElementById('btn-export-png');
        const btnPdf = document.getElementById('btn-export-pdf');
        if (btnPng) { btnPng.innerText = "IMAGE (.png)"; btnPng.disabled = false; btnPng.style.opacity = '1'; }
        if (btnPdf) { btnPdf.innerText = "PDF DOCUMENT (.pdf)"; btnPdf.disabled = false; btnPdf.style.opacity = '1'; }
    };

    // TXT
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

    // PNG
    document.getElementById('btn-export-png')?.addEventListener('click', function() {
        const btn = this;
        const logContainer = document.getElementById('unified-log');
        if (!logContainer || typeof html2canvas === 'undefined') {
            alert("Error: Image conversion library not loaded. Check internet connection.");
            return;
        }
        
        btn.innerText = "GENERATING... PLEASE WAIT...";
        btn.disabled = true;
        btn.style.opacity = '0.5';

        const originalOverflow = logContainer.style.overflowY;
        const originalHeight = logContainer.style.height;
        logContainer.style.overflowY = 'visible';
        logContainer.style.height = 'auto';

        // Give UI time to update
        setTimeout(() => {
            html2canvas(logContainer, {
                backgroundColor: '#06111e',
                scale: 1.5,
                useCORS: true,
                allowTaint: true
            }).then(canvas => {
                logContainer.style.overflowY = originalOverflow;
                logContainer.style.height = originalHeight;

                let a = document.createElement('a');
                a.href = canvas.toDataURL("image/png");
                a.download = `MCPD_TRANSCRIPT_${Date.now()}.png`;
                a.click();
                
                resetButtons();
                document.getElementById('export-modal').style.display = 'none';
            }).catch(err => {
                console.error("Image generation failed:", err);
                logContainer.style.overflowY = originalOverflow;
                logContainer.style.height = originalHeight;
                resetButtons();
                alert("Failed to generate image.");
            });
        }, 100);
    });

    // PDF
    document.getElementById('btn-export-pdf')?.addEventListener('click', function() {
        const btn = this;
        const logContainer = document.getElementById('unified-log');
        if (!logContainer || typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
            alert("Error: PDF conversion library not loaded. Check internet connection.");
            return;
        }

        btn.innerText = "GENERATING... PLEASE WAIT...";
        btn.disabled = true;
        btn.style.opacity = '0.5';

        const originalOverflow = logContainer.style.overflowY;
        const originalHeight = logContainer.style.height;
        logContainer.style.overflowY = 'visible';
        logContainer.style.height = 'auto';

        setTimeout(() => {
            html2canvas(logContainer, {
                backgroundColor: '#06111e',
                scale: 1.5,
                useCORS: true,
                allowTaint: true
            }).then(canvas => {
                logContainer.style.overflowY = originalOverflow;
                logContainer.style.height = originalHeight;

                const imgData = canvas.toDataURL('image/jpeg', 0.8);
                const pdf = new window.jspdf.jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`MCPD_TRANSCRIPT_${Date.now()}.pdf`);
                
                resetButtons();
                document.getElementById('export-modal').style.display = 'none';
            }).catch(err => {
                console.error("PDF generation failed:", err);
                logContainer.style.overflowY = originalOverflow;
                logContainer.style.height = originalHeight;
                resetButtons();
                alert("Failed to generate PDF.");
            });
        }, 100);
    });
});
