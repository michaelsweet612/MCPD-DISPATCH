// IMAGE ANALYZER (NO AI)
// Simulates visual detection by parsing image metadata and generating procedural officer reactions.

document.addEventListener('DOMContentLoaded', () => {
    const btnUpload = document.getElementById('btn-upload-image');
    const fileInput = document.getElementById('dispatch-image-upload');

    if (!btnUpload || !fileInput) return;

    btnUpload.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Display the image in the chat
        const reader = new FileReader();
        reader.onload = (event) => {
            const imgData = event.target.result;
            const fileName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "); // Parse visual context from filename
            
            addChatImage('DISPATCH', imgData, fileName);
            
            // Delay for "analysis"
            setTimeout(() => {
                simulateImageReaction(fileName);
            }, 3000 + Math.random() * 5000);
        };
        reader.readAsDataURL(file);
        
        fileInput.value = '';
    });
});

function addChatImage(sender, imgData, fileName) {
    const unifiedLogEl = document.getElementById('unified-log');
    if (!unifiedLogEl) return;
    
    const div = document.createElement('div');
    div.className = `chat-msg dispatch-msg`;
    div.style.position = 'relative'; 

    let timeStr = "";
    if (typeof getCurrentTimeStr !== 'undefined') timeStr = getCurrentTimeStr();

    const contentHtml = `
        <span class="time" style="color: #666; font-size: 0.8rem; margin-right: 5px;">${timeStr}</span>
        <span class="sender">[DISPATCH]</span><br>
        <div style="margin-top: 10px;">
            <img src="${imgData}" style="max-width: 100%; max-height: 250px; border-radius: 4px; border: 1px solid var(--accent-blue); box-shadow: 0 0 10px rgba(0, 230, 118, 0.2);">
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 5px;">[IMAGE ATTACHMENT ANALYZED: ${fileName.toUpperCase()}]</div>
        </div>
    `;
    div.innerHTML = contentHtml;
    unifiedLogEl.appendChild(div);
    if (typeof scrollToBottom !== 'undefined') scrollToBottom(unifiedLogEl);
}

function simulateImageReaction(rawFileName) {
    if (typeof getActiveCallsigns === 'undefined' || typeof addChatMessage === 'undefined') return;
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    
    const reactor = active[Math.floor(Math.random() * active.length)];
    const nameStr = rawFileName.toLowerCase();
    
    const isInappropriate = nameStr.includes('nsfw') || nameStr.includes('nude') || nameStr.includes('porn') || nameStr.includes('sexy') || nameStr.includes('boob');
    const isAnimal = nameStr.includes('dog') || nameStr.includes('cat') || nameStr.includes('pet') || nameStr.includes('bird');
    const isSuspect = nameStr.includes('suspect') || nameStr.includes('wanted') || nameStr.includes('criminal');
    
    let reply = "";
    
    if (isInappropriate) {
        reply = `What the heck man! I don't get paid to look at your stupid inappropriate images! I'm reporting you to Internal Affairs.`;
    } else if (isAnimal) {
        reply = `Why is dispatch sending us images of a ${nameStr}? Is this the new K9 unit? Actually... it's kind of cute.`;
    } else if (isSuspect) {
        reply = `10-4. I'm analyzing the image of the suspect now. I'll keep my eyes open on patrol.`;
    } else {
        const rand = Math.random();
        if (rand < 0.2) {
            reply = `Why is dispatch sending us images of '${nameStr}'? What am I supposed to do with this information?`;
        } else if (rand < 0.4) {
            reply = `What the heck man I don't get paid to look at your stupid images! I'm trying to patrol here, keep the channel clear!`;
        } else if (rand < 0.6) {
            reply = `Received image of '${nameStr}'. Honestly, that's pretty cool. Saved to my terminal.`;
        } else if (rand < 0.8) {
            reply = `Uhh, Dispatch... I'm really weirded out by this picture. Please don't send this over the secure channel again.`;
        } else {
            reply = `10-4. Image received. Is this a BOLO target or are you just completely bored out of your mind in there?`;
        }
    }
    
    addChatMessage(reactor, reply, 'serious', false);
}
