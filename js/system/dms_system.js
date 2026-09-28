// ==========================================
// PERSONAL DMs SYSTEM (iMESSAGE EDITION V3)
// ==========================================

window.dmConversations = {}; 
window.activeDmUnit = null;
window.dmsListLimit = 20;

// iMessage Style CSS injected dynamically
const dmsStyle = document.createElement('style');
dmsStyle.innerHTML = `
    .imessage-bubble {
        max-width: 75%;
        padding: 10px 15px;
        border-radius: 20px;
        line-height: 1.4;
        word-break: break-word;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 14px;
        position: relative;
        animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .imessage-bubble img {
        max-width: 100%;
        border-radius: 12px;
        margin-top: 5px;
        cursor: pointer;
    }
    
    @keyframes popIn {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }

    .imessage-sent {
        background: linear-gradient(180deg, #1d95ff 0%, #007aff 100%);
        color: white;
        border-bottom-right-radius: 4px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }

    .imessage-recv {
        background: #262628;
        color: #fff;
        border-bottom-left-radius: 4px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }

    .imessage-typing {
        display: inline-flex;
        gap: 4px;
        padding: 12px 16px;
        background: #262628;
        border-radius: 20px;
        border-bottom-left-radius: 4px;
        width: fit-content;
    }

    .imessage-typing span {
        width: 8px;
        height: 8px;
        background: #8e8e93;
        border-radius: 50%;
        animation: typingBounce 1.4s infinite ease-in-out both;
    }
    .imessage-typing span:nth-child(1) { animation-delay: -0.32s; }
    .imessage-typing span:nth-child(2) { animation-delay: -0.16s; }

    @keyframes typingBounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
    }

    .imessage-status {
        font-size: 11px;
        color: #8e8e93;
        text-align: right;
        margin-top: 2px;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .imessage-timestamp {
        font-size: 11px;
        color: #8e8e93;
        text-align: center;
        margin: 15px 0;
        font-weight: bold;
    }

    .sidebar-unit {
        padding: 12px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        transition: background 0.2s;
        position: relative;
    }
    .sidebar-unit:hover {
        background: rgba(255,255,255,0.05);
    }
    .sidebar-unit.active {
        background: rgba(0, 122, 255, 0.2);
        border-left: 4px solid #007aff;
    }
    
    .sidebar-unit-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
    }
    
    .sidebar-unit-name {
        font-weight: bold;
        font-size: 14px;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    
    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
    }
    
    .sidebar-unit-preview {
        font-size: 12px;
        color: #8e8e93;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 20px;
    }

    .tapback-badge {
        position: absolute;
        bottom: -10px;
        right: -10px;
        background: #262628;
        border-radius: 50%;
        padding: 4px;
        font-size: 14px;
        border: 2px solid #000;
        cursor: pointer;
        animation: popIn 0.3s;
        user-select: none;
    }

    .smart-reply-btn {
        background: transparent;
        border: 1px solid #007aff;
        color: #007aff;
        border-radius: 15px;
        padding: 5px 12px;
        font-size: 12px;
        cursor: pointer;
        transition: 0.2s;
        white-space: nowrap;
    }
    .smart-reply-btn:hover {
        background: #007aff;
        color: #fff;
    }
    
    
    .dm-action-btn {
        background: transparent;
        border: none;
        color: var(--accent-blue);
        font-size: 1.2rem;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        transition: 0.2s;
    }
    .dm-action-btn:hover {
        background: rgba(255,255,255,0.1);
    }
    .audio-waveform {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        height: 20px;
        margin-left: 10px;
    }
    .audio-waveform span {
        width: 3px;
        background: #fff;
        border-radius: 2px;
        animation: wave 1s infinite ease-in-out;
    }
    @keyframes wave {
        0%, 100% { height: 4px; }
        50% { height: 16px; }
    }
    .self-destruct-msg {
        animation: glitch 0.5s infinite;
        color: #ff3b30;
    }
    @keyframes glitch {
        0% { opacity: 1; transform: translate(0); }
        20% { opacity: 0.8; transform: translate(-2px, 1px); }
        40% { opacity: 0.9; transform: translate(2px, -1px); }
        60% { opacity: 1; transform: translate(-1px, 2px); }
        80% { opacity: 0.8; transform: translate(1px, -2px); }
        100% { opacity: 1; transform: translate(0); }
    }
    .wallpaper-menu {
        position: absolute;
        top: 60px;
        right: 10px;
        background: #111;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 10px;
        z-index: 100;
        display: none;
        flex-direction: column;
        gap: 5px;
    }
    .wallpaper-btn {
        background: #222;
        color: #fff;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 4px;
        text-align: left;
    }
    .wallpaper-btn:hover { background: var(--accent-blue); }
    
    #dm-search-bar {
        width: 100%;
        background: rgba(0,0,0,0.5);
        border: 1px solid var(--panel-border);
        color: #fff;
        padding: 8px 12px;
        border-radius: 6px;
        outline: none;
        margin-bottom: 10px;
    }
`;
document.head.appendChild(dmsStyle);


const incomingDmTopics = [
    "Dispatch, my wife left me and took the synth-dog. Can I get tomorrow off?",
    "Hey, keep this off the main channel... but Sector 4 smells like burnt cybernetics.",
    "Did you see the Captain's new haircut? Tragic.",
    "Dispatch, do not tell anyone I just backed my cruiser into a light pole.",
    "Can you run a plates check off the books? XG-992.",
    "I'm at the noodle stand on 5th. You want me to bring you anything?",
    "Need a favor. Delete my last dashcam upload.",
    "I swear to god if Unit-04 doesn't stop breathing into the mic on the main channel...",
    "Dispatch, I think I just saw a ghost in the sub-levels. Not kidding.",
    "I need backup but I don't want to broadcast it. Send someone quiet to my 10-20.",
    "Are we getting paid this week? Financial terminal is locked.",
    "Hey, I found a crate of confiscated cigars. Want me to stash a box for you?",
    "Can you reset my terminal password? I forgot it again.",
    "Dispatch, I accidentally shot my own drone. Please advise.",
    "Do you guys see that massive blimp outside? What is Tyrell Corp advertising now?",
    "I'm so tired. Can I sleep in my cruiser for 10 minutes? Don't log this."
];

const dispatchResponses = [
    "10-4. I copy.",
    "I can't authorize that, unit.",
    "Understood. Be careful out there.",
    "Stop messaging me on the secure line for this.",
    "I'll see what I can do, but no promises.",
    "That is highly irregular.",
    "Copy that. I am logging this.",
    "Try turning your terminal off and on again.",
    "Negative. Proceed with standard protocol.",
    "I don't get paid enough to deal with this.",
    "Return to station immediately.",
    "Acknowledge."
];

const tapbackCycle = ['❤️', '👍', '👎', '‼️', '❓', null];

function getStatusColor(status) {
    if (!status) return '#888';
    const s = status.toUpperCase();
    if (s.includes('ON DUTY')) return '#10b981'; // Green
    if (s.includes('BUSY')) return '#f59e0b'; // Yellow
    if (s.includes('ON SCENE') || s.includes('EN ROUTE')) return '#ef4444'; // Red
    return '#6b7280'; // Grey
}

function initDms() {
    const tabDms = document.getElementById('tab-dms');
    if (!tabDms) return;

    tabDms.addEventListener('click', () => {
        if(typeof hideAllTabs === 'function') hideAllTabs();
        tabDms.classList.add('active');
        tabDms.style.color = 'var(--text-main)';
        document.getElementById('dms-log').style.display = 'flex';
        window.dmsListLimit = 20;
        
        renderOfficerList();
        
        const badge = document.getElementById('dm-notification-badge');
        if (badge) badge.style.display = 'none';
        badge.innerText = "0";
    });

    document.getElementById('btn-dm-send').addEventListener('click', () => sendDm());

    // Inject massive features into input area
    const inputArea = document.getElementById('dm-input').parentElement;
    if (inputArea && !document.getElementById('btn-dm-voice')) {
        const actionsHtml = `
            <button id="btn-dm-voice" class="dm-action-btn" title="Send Voice Memo">🎤</button>
            <button id="btn-dm-gps" class="dm-action-btn" title="Ping GPS Location">📍</button>
            <button id="btn-dm-credits" class="dm-action-btn" title="Send Cyber-Credits">💸</button>
            <button id="btn-dm-destruct" class="dm-action-btn" style="color: #ff3b30;" title="Self-Destruct Message">💣</button>
        `;
        inputArea.insertAdjacentHTML('afterbegin', actionsHtml);
        
        document.getElementById('btn-dm-voice').addEventListener('click', sendVoiceMemo);
        document.getElementById('btn-dm-gps').addEventListener('click', sendGpsPing);
        document.getElementById('btn-dm-credits').addEventListener('click', sendCredits);
        document.getElementById('btn-dm-destruct').addEventListener('click', sendSelfDestruct);
    }
    
    document.getElementById('dm-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') sendDm();
    });

    // Image Upload hook
    const uploadBtn = document.getElementById('btn-dm-upload');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            const fileInput = document.getElementById('dm-image-upload');
            if (fileInput) fileInput.click();
        });
    }

    const fileInput = document.getElementById('dm-image-upload');
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(ev) {
                    sendDm(ev.target.result, 'image');
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    // Replace the chat header with an iMessage-style header
    const header = document.getElementById('dm-chat-header');
    if (header) {
        header.style.textAlign = 'center';
        header.style.background = '#1a1a1c';
        header.style.borderBottom = '1px solid #333';
        header.style.padding = '10px';
        header.style.position = 'relative';
    }

    // Add search bar to the sidebar
    const sidebar = document.getElementById('dm-officer-list').parentElement;
    if (sidebar) {
        const searchDiv = document.createElement('div');
        searchDiv.style.padding = '10px 10px 0 10px';
        searchDiv.innerHTML = `<input type="text" id="dm-search-bar" placeholder="Search officers...">`;
        sidebar.insertBefore(searchDiv, document.getElementById('dm-officer-list'));
        
        document.getElementById('dm-search-bar').addEventListener('input', () => {
            window.dmsListLimit = 20;
            renderOfficerList();
        });
    }

    // Add Smart Replies container
    const historyDiv = document.getElementById('dm-chat-history');
    if (historyDiv) {
        const smartReplies = document.createElement('div');
        smartReplies.id = 'dm-smart-replies';
        smartReplies.style.display = 'none';
        smartReplies.style.gap = '8px';
        smartReplies.style.padding = '10px 20px';
        smartReplies.style.background = '#000';
        smartReplies.style.overflowX = 'auto';
        smartReplies.style.borderBottom = '1px solid #222';
        
        smartReplies.innerHTML = `
            <button class="smart-reply-btn" onclick="sendDm('10-4. Copy that.')">10-4. Copy that.</button>
            <button class="smart-reply-btn" onclick="sendDm('Negative.')">Negative.</button>
            <button class="smart-reply-btn" onclick="sendDm('Return to station.')">Return to station.</button>
            <button class="smart-reply-btn" onclick="sendDm('I am logging this.')">I am logging this.</button>
        `;
        // Insert before input container
        const rightSide = historyDiv.parentElement;
        rightSide.insertBefore(smartReplies, rightSide.lastElementChild);
    }

    setInterval(() => {
        if (Math.random() < 0.20 && typeof roster !== 'undefined' && roster.length > 0) {
            const activeUnits = roster.filter(u => u.status.toUpperCase() !== 'OFF DUTY' && u.status.toUpperCase() !== 'OFF-DUTY' && u.status.toUpperCase() !== 'KIA');
            if (activeUnits.length > 0) {
                const randomUnit = activeUnits[Math.floor(Math.random() * activeUnits.length)].id;
                
                // 10% chance they send a random image
                if (Math.random() < 0.1) {
                    receiveDm(randomUnit, 'https://picsum.photos/300/200?random=' + Math.random(), 'image');
                } else {
                    receiveDm(randomUnit, incomingDmTopics[Math.floor(Math.random() * incomingDmTopics.length)]);
                }
            }
        }
    }, 35000);
}

function renderOfficerList() {
    const list = document.getElementById('dm-officer-list');
    if (!list) return;
    list.innerHTML = '';
    list.style.padding = '0';

    if (typeof roster === 'undefined' || roster.length === 0) {
        list.innerHTML = '<div style="padding: 15px; color: #666; font-style: italic;">No active units.</div>';
        return;
    }

    const searchQuery = (document.getElementById('dm-search-bar')?.value || '').toLowerCase();

    let activeUnits = roster.filter(u => u.status.toUpperCase() !== 'OFF DUTY' && u.status.toUpperCase() !== 'OFF-DUTY' && u.status.toUpperCase() !== 'KIA');
    
    if (searchQuery) {
        activeUnits = activeUnits.filter(u => u.id.toLowerCase().includes(searchQuery));
    }
    
    // Sort active units: those with recent messages at the top
    activeUnits.sort((a, b) => {
        let aTime = 0;
        let bTime = 0;
        if (window.dmConversations[a.id] && window.dmConversations[a.id].messages.length > 0) {
            const msgs = window.dmConversations[a.id].messages;
            aTime = msgs[msgs.length - 1].id;
        }
        if (window.dmConversations[b.id] && window.dmConversations[b.id].messages.length > 0) {
            const msgs = window.dmConversations[b.id].messages;
            bTime = msgs[msgs.length - 1].id;
        }
        
        if (aTime !== bTime) {
            return bTime - aTime;
        }
        return a.id.localeCompare(b.id);
    });
    
    const displayUnits = activeUnits.slice(0, window.dmsListLimit || 20);

    displayUnits.forEach(unit => {
        const div = document.createElement('div');
        div.className = 'sidebar-unit';
        if (window.activeDmUnit === unit.id) {
            div.classList.add('active');
        }

        let unread = 0;
        let lastMsg = "Tap to chat...";
        
        if (window.dmConversations[unit.id]) {
            const msgs = window.dmConversations[unit.id].messages;
            unread = msgs.filter(m => !m.read).length;
            if (msgs.length > 0) {
                const lm = msgs[msgs.length - 1];
                lastMsg = lm.type === 'image' ? '📎 Attachment' : lm.text;
                if (window.dmConversations[unit.id].isTyping) {
                    lastMsg = "Typing...";
                }
            }
        }

        const dotColor = getStatusColor(unit.status);

        let html = `
            <div class="sidebar-unit-header">
                <span class="sidebar-unit-name">
                    <span class="status-dot" style="background: ${dotColor}"></span>
                    ${unit.id}
                </span>
                ${unread > 0 ? `<span style="background: #007aff; color: white; border-radius: 10px; padding: 2px 6px; font-size: 10px; font-weight: bold;">${unread}</span>` : ''}
            </div>
            <div class="sidebar-unit-preview" style="${unread > 0 ? 'color: #fff; font-weight: bold;' : ''}">${lastMsg}</div>
        `;

        div.innerHTML = html;
        div.addEventListener('click', () => selectDmUnit(unit.id));
        list.appendChild(div);
    });

    if (activeUnits.length > (window.dmsListLimit || 20)) {
        const loadMore = document.createElement('div');
        loadMore.innerText = "Load More Units...";
        loadMore.style.padding = '15px';
        loadMore.style.textAlign = 'center';
        loadMore.style.color = 'var(--accent-blue)';
        loadMore.style.cursor = 'pointer';
        loadMore.style.fontWeight = 'bold';
        loadMore.style.borderTop = '1px solid var(--panel-border)';
        
        loadMore.addEventListener('click', () => {
            window.dmsListLimit += 20;
            renderOfficerList();
        });
        
        list.appendChild(loadMore);
    }
}

function selectDmUnit(unitId) {
    window.activeDmUnit = unitId;
    const header = document.getElementById('dm-chat-header');
    
    const unit = roster.find(u => u.id === unitId);
    const dotColor = unit ? getStatusColor(unit.status) : '#888';
    const statusText = unit ? unit.status : 'Unknown';
    const personality = unit ? unit.personality : '';
    
    header.innerHTML = `
        <button onclick="clearChat(window.activeDmUnit)" style="position: absolute; right: 15px; top: 20px; background: none; border: none; color: #ff3b30; cursor: pointer; font-size: 18px;" title="Clear Chat">🗑️</button>
        <button onclick="callOfficer()" style="position: absolute; right: 50px; top: 20px; background: none; border: none; color: #10b981; cursor: pointer; font-size: 18px;" title="Call Unit">📞</button>
        <button onclick="toggleWallpaperMenu()" style="position: absolute; left: 15px; top: 20px; background: none; border: none; color: #888; cursor: pointer; font-size: 18px;" title="Chat Settings">⚙️</button>
        <div id="dm-wallpaper-menu" class="wallpaper-menu">
            <button class="wallpaper-btn" onclick="setDmWallpaper('dark')">Solid Black</button>
            <button class="wallpaper-btn" onclick="setDmWallpaper('matrix')">Matrix Rain</button>
            <button class="wallpaper-btn" onclick="setDmWallpaper('cyber')">Cyberpunk City</button>
        </div>
        <div style="width: 40px; height: 40px; background: #333; border-radius: 50%; margin: 0 auto 5px auto; display: flex; align-items: center; justify-content: center; font-size: 20px;">👮</div>
        <div style="font-size: 14px; font-weight: bold;">${unitId} &rsaquo;</div>
        <div style="font-size: 11px; color: #8e8e93; margin-top: 2px;">
            <span class="status-dot" style="background: ${dotColor}; width: 6px; height: 6px; margin-right: 3px;"></span>
            ${statusText} • ${personality}
        </div>
    `;
    
    if (!window.dmConversations[unitId]) {
        window.dmConversations[unitId] = { messages: [], isTyping: false };
    } else {
        window.dmConversations[unitId].messages.forEach(m => m.read = true);
    }
    
    document.getElementById('dm-smart-replies').style.display = 'flex';
    
    renderOfficerList();
    renderChatHistory();
}

window.clearChat = function(unitId) {
    if (confirm(`Are you sure you want to delete the secure chat history with ${unitId}?`)) {
        if (window.dmConversations[unitId]) {
            window.dmConversations[unitId].messages = [];
            renderChatHistory();
            renderOfficerList();
        }
    }
}

function toggleTapback(unitId, msgId) {
    const msg = window.dmConversations[unitId].messages.find(m => m.id === msgId);
    if (msg) {
        let currentIndex = tapbackCycle.indexOf(msg.tapback);
        if (currentIndex === -1) currentIndex = -1;
        msg.tapback = tapbackCycle[(currentIndex + 1) % tapbackCycle.length];
        renderChatHistory();
    }
}

function renderChatHistory() {
    const historyDiv = document.getElementById('dm-chat-history');
    if (!historyDiv) return;
    
    const wasScrolledToBottom = Math.abs((historyDiv.scrollHeight - historyDiv.scrollTop) - historyDiv.clientHeight) < 20;

    historyDiv.innerHTML = '';
    historyDiv.style.background = '#000';
    historyDiv.style.padding = '20px';

    if (!window.activeDmUnit || !window.dmConversations[window.activeDmUnit]) return;

    const convo = window.dmConversations[window.activeDmUnit];
    
    if (convo.messages.length > 0) {
        const timeStamp = document.createElement('div');
        timeStamp.className = 'imessage-timestamp';
        timeStamp.innerText = `Today ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        historyDiv.appendChild(timeStamp);
    } else {
        const em = document.createElement('div');
        em.style.color = '#666';
        em.style.textAlign = 'center';
        em.style.marginTop = '40px';
        em.style.fontStyle = 'italic';
        em.innerHTML = 'End-to-End Encrypted Secure Connection<br>Communications are logged by Tyrell Corp.';
        historyDiv.appendChild(em);
    }

    convo.messages.forEach((msg, index) => {
        const bubbleWrap = document.createElement('div');
        bubbleWrap.style.display = 'flex';
        bubbleWrap.style.flexDirection = 'column';
        bubbleWrap.style.width = '100%';
        bubbleWrap.style.marginBottom = '12px';

        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.width = '100%';

        const bubble = document.createElement('div');
        bubble.className = `imessage-bubble ${msg.sender === 'DISPATCH' ? 'imessage-sent' : 'imessage-recv'}`;
        
        if (msg.type === 'image') {
            bubble.innerHTML = `<img src="${msg.text}" alt="Attachment">`;
        } else {
            bubble.innerHTML = msg.text;
        }

        bubble.title = `Sent at ${new Date(msg.id).toLocaleTimeString()}`;

        if (msg.sender === 'DISPATCH') {
            row.style.justifyContent = 'flex-end';
        } else {
            row.style.justifyContent = 'flex-start';
            
            // Add tapback logic
            bubble.addEventListener('dblclick', () => toggleTapback(window.activeDmUnit, msg.id));
            bubble.title += " (Double click to react)";
            
            if (msg.tapback) {
                const tapbackEl = document.createElement('div');
                tapbackEl.className = 'tapback-badge';
                tapbackEl.innerText = msg.tapback;
                bubble.appendChild(tapbackEl);
            }
        }

        row.appendChild(bubble);
        bubbleWrap.appendChild(row);

        // Add "Delivered" or "Read" to the last sent message
        if (msg.sender === 'DISPATCH' && index === convo.messages.length - 1 && !convo.isTyping) {
            const status = document.createElement('div');
            status.className = 'imessage-status';
            status.innerText = msg.readByRecipient ? `Read ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}` : 'Delivered';
            bubbleWrap.appendChild(status);
        }

        historyDiv.appendChild(bubbleWrap);
    });

    if (convo.isTyping) {
        const typingRow = document.createElement('div');
        typingRow.style.display = 'flex';
        typingRow.style.width = '100%';
        typingRow.style.justifyContent = 'flex-start';
        typingRow.style.marginBottom = '10px';

        const typingBubble = document.createElement('div');
        typingBubble.className = 'imessage-typing';
        typingBubble.innerHTML = '<span></span><span></span><span></span>';
        
        typingRow.appendChild(typingBubble);
        historyDiv.appendChild(typingRow);
        
        // Show Read status if typing
        const lastMsg = convo.messages[convo.messages.length - 1];
        if (lastMsg && lastMsg.sender === 'DISPATCH') {
            lastMsg.readByRecipient = true;
        }
    }

    if (wasScrolledToBottom || convo.isTyping || convo.messages[convo.messages.length-1]?.sender === 'DISPATCH') {
        historyDiv.scrollTop = historyDiv.scrollHeight;
    }
}

window.sendDm = function(forcedText = null, type = 'text') {
    const input = document.getElementById('dm-input');
    const text = forcedText || input.value.trim();
    if (!text || !window.activeDmUnit) return;

    if (!window.dmConversations[window.activeDmUnit]) {
        window.dmConversations[window.activeDmUnit] = { messages: [], isTyping: false };
    }

    const unitId = window.activeDmUnit;

    window.dmConversations[unitId].messages.push({
        id: Date.now(),
        sender: 'DISPATCH',
        type: type,
        text: text,
        read: true,
        readByRecipient: false
    });

    if (!forcedText) input.value = '';
    renderChatHistory();
    renderOfficerList(); // update sidebar snippet

    // Trigger typing indicator shortly after
    setTimeout(() => {
        if (window.dmConversations[unitId]) {
            window.dmConversations[unitId].isTyping = true;
            window.dmConversations[unitId].messages[window.dmConversations[unitId].messages.length - 1].readByRecipient = true;
            if (window.activeDmUnit === unitId) renderChatHistory();
            renderOfficerList(); // update snippet to say "Typing..."
            
            // AI Officer Response after typing
            setTimeout(() => {
                window.dmConversations[unitId].isTyping = false;
                const reply = dispatchResponses[Math.floor(Math.random() * dispatchResponses.length)];
                receiveDm(unitId, reply);
            }, 2000 + Math.random() * 3000);
        }
    }, 1000 + Math.random() * 1000);
}

function receiveDm(unitId, text, type = 'text') {
    if (!window.dmConversations[unitId]) {
        window.dmConversations[unitId] = { messages: [], isTyping: false };
    }

    const isCurrentlyViewing = (window.activeDmUnit === unitId && document.getElementById('dms-log').style.display === 'flex');

    window.dmConversations[unitId].messages.push({
        id: Date.now(),
        sender: unitId,
        type: type,
        text: text,
        read: isCurrentlyViewing
    });

    if (isCurrentlyViewing) {
        renderChatHistory();
    } else {
        const badge = document.getElementById('dm-notification-badge');
        if (badge) {
            let current = parseInt(badge.innerText) || 0;
            badge.innerText = current + 1;
            if (document.getElementById('dms-log').style.display !== 'flex') {
                badge.style.display = 'inline-block';
            }
        }
        
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
            oscillator.connect(audioCtx.destination);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.1);
        } catch(e) {}
    }

    renderOfficerList();
}

document.addEventListener('DOMContentLoaded', initDms);

window.sendVoiceMemo = function() {
    if (!window.activeDmUnit) return;
    const dur = Math.floor(Math.random() * 10) + 2;
    const html = `▶️ Audio Message (${dur}s) <div class="audio-waveform"><span></span><span style="animation-delay:0.1s"></span><span style="animation-delay:0.2s"></span><span style="animation-delay:0.3s"></span><span style="animation-delay:0.4s"></span></div>`;
    sendDm(html, 'audio');
}

window.sendGpsPing = function() {
    if (!window.activeDmUnit) return;
    const html = `📍 <b>Pinned Location</b><br>MCPD Dispatch Headquarters<br><span style="font-size:10px;color:#ccc;">Coordinates: 40.7128° N, 74.0060° W</span>`;
    sendDm(html, 'gps');
}

window.sendCredits = function() {
    if (!window.activeDmUnit) return;
    const amt = prompt("Enter Cyber-Credits amount to transfer:");
    if (amt && !isNaN(amt)) {
        const html = `💸 <b>TRANSFER COMPLETE</b><br>Sent ${amt} Cyber-Credits to ${window.activeDmUnit}.`;
        sendDm(html, 'transfer');
    }
}

window.sendSelfDestruct = function() {
    if (!window.activeDmUnit) return;
    const input = document.getElementById('dm-input');
    const text = input.value.trim();
    if (!text) {
        alert("Type a message first to make it self-destruct!");
        return;
    }
    const html = `<div class="self-destruct-msg">💣 [CLASSIFIED] ${text}</div>`;
    sendDm(html, 'destruct');
    input.value = '';
    
    // Auto delete after 5 seconds
    setTimeout(() => {
        if (window.dmConversations[window.activeDmUnit]) {
            const msgs = window.dmConversations[window.activeDmUnit].messages;
            const last = msgs[msgs.length - 1];
            if (last && last.type === 'destruct') {
                last.text = "💥 <i>Message Self-Destructed</i>";
                last.type = 'text';
                if (document.getElementById('dms-log').style.display === 'flex') renderChatHistory();
            }
        }
    }, 5000);
}

window.callOfficer = function() {
    if (!window.activeDmUnit) return;
    alert(`Calling ${window.activeDmUnit} over secure frequency...`);
    setTimeout(() => {
        alert(`${window.activeDmUnit} did not answer. Sent to Voicemail.`);
        sendDm("📞 Missed Call from Dispatch", 'call');
    }, 2000);
}

window.toggleWallpaperMenu = function() {
    const menu = document.getElementById('dm-wallpaper-menu');
    if (menu) {
        menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    }
}

window.setDmWallpaper = function(type) {
    const history = document.getElementById('dm-chat-history');
    if (!history) return;
    if (type === 'matrix') {
        history.style.background = 'url("https://media.giphy.com/media/s2m00K3x6YvK0/giphy.gif") center/cover';
    } else if (type === 'cyber') {
        history.style.background = 'url("https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000") center/cover';
    } else if (type === 'dark') {
        history.style.background = '#000';
    }
    document.getElementById('dm-wallpaper-menu').style.display = 'none';
}
