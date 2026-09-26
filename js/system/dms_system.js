// ==========================================
// PERSONAL DMs SYSTEM
// ==========================================
// Allows dispatch to direct-message active units, and units to occasionally DM dispatch.

window.dmConversations = {}; 
window.activeDmUnit = null;

// Generate dummy messages to simulate an incoming DM
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
        
        // Clear global badge when tab is opened
        const badge = document.getElementById('dm-notification-badge');
        if (badge) badge.style.display = 'none';
        badge.innerText = "0";
    });

    document.getElementById('btn-dm-send').addEventListener('click', sendDm);
    document.getElementById('dm-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') sendDm();
    });

    // Randomly generate incoming DMs
    setInterval(() => {
        if (Math.random() < 0.15 && window.roster && window.roster.length > 0) { // 15% chance every 45s
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

    if (!window.roster || window.roster.length === 0) {
        list.innerHTML = '<div style="color: #666; font-style: italic;">No active units.</div>';
        return;
    }

    const activeUnits = window.roster.filter(u => u.status.toUpperCase() !== 'OFF DUTY' && u.status.toUpperCase() !== 'OFF-DUTY' && u.status.toUpperCase() !== 'KIA');
    
    activeUnits.forEach(unit => {
        const div = document.createElement('div');
        div.style.padding = '10px';
        div.style.marginBottom = '5px';
        div.style.borderRadius = '5px';
        div.style.cursor = 'pointer';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        
        // Check for unread messages
        let unread = 0;
        if (window.dmConversations[unit.id]) {
            unread = window.dmConversations[unit.id].filter(m => !m.read).length;
        }

        if (window.activeDmUnit === unit.id) {
            div.style.background = 'rgba(255,255,255,0.1)';
            div.style.borderLeft = '3px solid var(--accent-blue)';
        } else {
            div.style.background = 'transparent';
            div.style.borderLeft = '3px solid transparent';
            div.addEventListener('mouseover', () => div.style.background = 'rgba(255,255,255,0.05)');
            div.addEventListener('mouseout', () => div.style.background = 'transparent');
        }

        let html = `<span>${unit.id}</span>`;
        if (unread > 0) {
            html += `<span style="background: var(--panic-red); color: white; border-radius: 50%; padding: 2px 6px; font-size: 0.75rem; font-weight: bold;">${unread}</span>`;
        }

        div.innerHTML = html;
        div.addEventListener('click', () => selectDmUnit(unit.id));
        list.appendChild(div);
    });
}

function selectDmUnit(unitId) {
    window.activeDmUnit = unitId;
    document.getElementById('dm-chat-header').innerText = `SECURE CHAT: ${unitId}`;
    
    if (!window.dmConversations[unitId]) {
        window.dmConversations[unitId] = [];
    } else {
        // Mark all as read
        window.dmConversations[unitId].forEach(m => m.read = true);
    }
    
    renderOfficerList();
    renderChatHistory();
}

function renderChatHistory() {
    const historyDiv = document.getElementById('dm-chat-history');
    historyDiv.innerHTML = '';

    if (!window.activeDmUnit || !window.dmConversations[window.activeDmUnit]) return;

    const messages = window.dmConversations[window.activeDmUnit];

    messages.forEach(msg => {
        const bubbleWrap = document.createElement('div');
        bubbleWrap.style.display = 'flex';
        bubbleWrap.style.width = '100%';
        bubbleWrap.style.marginBottom = '10px';

        const bubble = document.createElement('div');
        bubble.style.maxWidth = '70%';
        bubble.style.padding = '10px 15px';
        bubble.style.borderRadius = '15px';
        bubble.style.lineHeight = '1.4';
        bubble.style.wordBreak = 'break-word';

        if (msg.sender === 'DISPATCH') {
            bubbleWrap.style.justifyContent = 'flex-end';
            bubble.style.background = 'var(--accent-blue)';
            bubble.style.color = '#000';
            bubble.style.borderBottomRightRadius = '2px';
        } else {
            bubbleWrap.style.justifyContent = 'flex-start';
            bubble.style.background = '#333';
            bubble.style.color = '#fff';
            bubble.style.borderBottomLeftRadius = '2px';
        }

        bubble.innerText = msg.text;
        bubbleWrap.appendChild(bubble);
        historyDiv.appendChild(bubbleWrap);
    });

    historyDiv.scrollTop = historyDiv.scrollHeight;
}

function sendDm() {
    const input = document.getElementById('dm-input');
    const text = input.value.trim();
    if (!text || !window.activeDmUnit) return;

    if (!window.dmConversations[window.activeDmUnit]) {
        window.dmConversations[window.activeDmUnit] = [];
    }

    window.dmConversations[window.activeDmUnit].push({
        sender: 'DISPATCH',
        text: text,
        read: true
    });

    input.value = '';
    renderChatHistory();

    // AI Officer Response simulation
    setTimeout(() => {
        if (window.activeDmUnit) {
            receiveDm(window.activeDmUnit, dispatchResponses[Math.floor(Math.random() * dispatchResponses.length)]);
        }
    }, 2000 + Math.random() * 3000);
}

function receiveDm(unitId, text) {
    if (!window.dmConversations[unitId]) {
        window.dmConversations[unitId] = [];
    }

    const isCurrentlyViewing = (window.activeDmUnit === unitId && document.getElementById('dms-log').style.display === 'block');

    window.dmConversations[unitId].push({
        sender: unitId,
        text: text,
        read: isCurrentlyViewing
    });

    if (isCurrentlyViewing) {
        renderChatHistory();
    } else {
        // Show notification badge on tab
        const badge = document.getElementById('dm-notification-badge');
        if (badge) {
            let current = parseInt(badge.innerText) || 0;
            badge.innerText = current + 1;
            if (document.getElementById('dms-log').style.display !== 'block') {
                badge.style.display = 'inline-block';
            }
        }
        
        // Play notification sound if check_system exists or generic beep
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
            oscillator.connect(audioCtx.destination);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.1);
        } catch(e) {}
    }

    if (document.getElementById('dms-log').style.display === 'block') {
        renderOfficerList();
    }
}

document.addEventListener('DOMContentLoaded', initDms);
