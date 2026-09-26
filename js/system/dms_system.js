// ==========================================
// PERSONAL DMs SYSTEM (iMESSAGE EDITION)
// ==========================================

window.dmConversations = {}; 
window.activeDmUnit = null;

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
    }
    
    .sidebar-unit-preview {
        font-size: 12px;
        color: #8e8e93;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .tapback-heart {
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
    "Dispatch, I accidentally shot my own drone. Please advise."
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
    "I don't get paid enough to deal with this."
];

function initDms() {
    const tabDms = document.getElementById('tab-dms');
    if (!tabDms) return;

    tabDms.addEventListener('click', () => {
        if(typeof hideAllTabs === 'function') hideAllTabs();
        tabDms.classList.add('active');
        tabDms.style.color = 'var(--text-main)';
        document.getElementById('dms-log').style.display = 'block';
        
        renderOfficerList();
        
        const badge = document.getElementById('dm-notification-badge');
        if (badge) badge.style.display = 'none';
        badge.innerText = "0";
    });

    document.getElementById('btn-dm-send').addEventListener('click', sendDm);
    document.getElementById('dm-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') sendDm();
    });

    // Replace the chat header with an iMessage-style header
    const header = document.getElementById('dm-chat-header');
    if (header) {
        header.style.textAlign = 'center';
        header.style.background = '#1a1a1c';
        header.style.borderBottom = '1px solid #333';
        header.style.padding = '10px';
    }

    setInterval(() => {
        if (Math.random() < 0.15 && window.roster && window.roster.length > 0) {
            const activeUnits = window.roster.filter(u => u.status.toUpperCase() !== 'OFF DUTY' && u.status.toUpperCase() !== 'OFF-DUTY' && u.status.toUpperCase() !== 'KIA');
            if (activeUnits.length > 0) {
                const randomUnit = activeUnits[Math.floor(Math.random() * activeUnits.length)].id;
                receiveDm(randomUnit, incomingDmTopics[Math.floor(Math.random() * incomingDmTopics.length)]);
            }
        }
    }, 45000);
}

function renderOfficerList() {
    const list = document.getElementById('dm-officer-list');
    list.innerHTML = '';
    list.style.padding = '0'; // removing padding for full width items

    if (!window.roster || window.roster.length === 0) {
        list.innerHTML = '<div style="padding: 15px; color: #666; font-style: italic;">No active units.</div>';
        return;
    }

    const activeUnits = window.roster.filter(u => u.status.toUpperCase() !== 'OFF DUTY' && u.status.toUpperCase() !== 'OFF-DUTY' && u.status.toUpperCase() !== 'KIA');
    
    activeUnits.forEach(unit => {
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
                lastMsg = msgs[msgs.length - 1].text;
                if (window.dmConversations[unit.id].isTyping) {
                    lastMsg = "Typing...";
                }
            }
        }

        let html = `
            <div class="sidebar-unit-header">
                <span class="sidebar-unit-name">${unit.id}</span>
                ${unread > 0 ? `<span style="background: #007aff; color: white; border-radius: 10px; padding: 2px 6px; font-size: 10px; font-weight: bold;">${unread}</span>` : ''}
            </div>
            <div class="sidebar-unit-preview" style="${unread > 0 ? 'color: #fff; font-weight: bold;' : ''}">${lastMsg}</div>
        `;

        div.innerHTML = html;
        div.addEventListener('click', () => selectDmUnit(unit.id));
        list.appendChild(div);
    });
}

function selectDmUnit(unitId) {
    window.activeDmUnit = unitId;
    const header = document.getElementById('dm-chat-header');
    header.innerHTML = `
        <div style="width: 40px; height: 40px; background: #333; border-radius: 50%; margin: 0 auto 5px auto; display: flex; align-items: center; justify-content: center; font-size: 20px;">👮</div>
        <div style="font-size: 12px; color: #8e8e93;">${unitId} &rsaquo;</div>
    `;
    
    if (!window.dmConversations[unitId]) {
        window.dmConversations[unitId] = { messages: [], isTyping: false };
    } else {
        window.dmConversations[unitId].messages.forEach(m => m.read = true);
    }
    
    renderOfficerList();
    renderChatHistory();
}

function toggleTapback(unitId, msgId) {
    const msg = window.dmConversations[unitId].messages.find(m => m.id === msgId);
    if (msg) {
        msg.tapback = msg.tapback ? null : '❤️';
        renderChatHistory();
    }
}

function renderChatHistory() {
    const historyDiv = document.getElementById('dm-chat-history');
    historyDiv.innerHTML = '';
    
    // Add iMessage style background
    historyDiv.style.background = '#000';
    historyDiv.style.padding = '20px';

    if (!window.activeDmUnit || !window.dmConversations[window.activeDmUnit]) return;

    const convo = window.dmConversations[window.activeDmUnit];
    
    if (convo.messages.length > 0) {
        const timeStamp = document.createElement('div');
        timeStamp.className = 'imessage-timestamp';
        timeStamp.innerText = `Today ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        historyDiv.appendChild(timeStamp);
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
        bubble.innerText = msg.text;

        if (msg.sender === 'DISPATCH') {
            row.style.justifyContent = 'flex-end';
        } else {
            row.style.justifyContent = 'flex-start';
            
            // Add tapback logic
            bubble.addEventListener('dblclick', () => toggleTapback(window.activeDmUnit, msg.id));
            bubble.title = "Double click to love";
            
            if (msg.tapback) {
                const tapbackEl = document.createElement('div');
                tapbackEl.className = 'tapback-heart';
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

    historyDiv.scrollTop = historyDiv.scrollHeight;
}

function sendDm() {
    const input = document.getElementById('dm-input');
    const text = input.value.trim();
    if (!text || !window.activeDmUnit) return;

    if (!window.dmConversations[window.activeDmUnit]) {
        window.dmConversations[window.activeDmUnit] = { messages: [], isTyping: false };
    }

    const unitId = window.activeDmUnit;

    window.dmConversations[unitId].messages.push({
        id: Date.now() + Math.random(),
        sender: 'DISPATCH',
        text: text,
        read: true,
        readByRecipient: false
    });

    input.value = '';
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
                receiveDm(unitId, dispatchResponses[Math.floor(Math.random() * dispatchResponses.length)]);
            }, 2000 + Math.random() * 3000);
        }
    }, 1000 + Math.random() * 1000);
}

function receiveDm(unitId, text) {
    if (!window.dmConversations[unitId]) {
        window.dmConversations[unitId] = { messages: [], isTyping: false };
    }

    const isCurrentlyViewing = (window.activeDmUnit === unitId && document.getElementById('dms-log').style.display === 'block');

    window.dmConversations[unitId].messages.push({
        id: Date.now() + Math.random(),
        sender: unitId,
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
            if (document.getElementById('dms-log').style.display !== 'block') {
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
