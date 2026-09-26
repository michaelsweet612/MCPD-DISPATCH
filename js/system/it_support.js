// ==========================================
// IT SUPPORT SYSTEM
// ==========================================
// Officers submit IT support tickets for broken hardware. 
// The dispatcher can accept or reject them, triggering specific reactions.

const IT_ISSUES = [
    "My cruiser terminal blue-screened again. It says 'FATAL KERNEL ERROR'.",
    "The biometric scanner on my sidearm is completely jammed.",
    "My radio keeps picking up civilian broadcasts instead of dispatch.",
    "The GPS in my hover-car is inverted. It's telling me to drive into the ocean.",
    "My bodycam is stuck recording in 144p resolution.",
    "The internal cooling system in my armor failed. I am boiling alive.",
    "My terminal keyboard is missing the 'E' key. Snd hlp.",
    "Every time I try to run a license plate, the system plays a loud airhorn sound.",
    "My drone companion has become unresponsive and is just spinning in circles.",
    "The coffee machine in the precinct breakroom requires a firmware update.",
    "I'm locked out of my MCPD email account. Says 'Too many failed attempts'.",
    "The suspect restraint cuffs are locked and I can't get them open."
];

const ANGRY_REJECTIONS = [
    "Are you kidding me?! You rejected my IT ticket?! I literally can't do my job without this! You useless garbage dispatcher!",
    "Wow. Just wow. Rejected? You guys sitting in the AC all day are absolutely useless.",
    "I'm filing a grievance with the union. You rejected a critical hardware ticket? What a joke of a dispatch team.",
    "You seriously hit 'Reject'? My terminal is ON FIRE. You guys are the worst dispatchers in the entire corporate sector!"
];

const HAPPY_ACCEPTANCES = [
    "Thank you for accepting the ticket. IT is on the way. Finally.",
    "Copy that. The IT guy just fixed it. Appreciate the fast response, Dispatch.",
    "Terminal is back online. Thanks for approving that so fast.",
    "10-4. Issue resolved. Thanks, Dispatch."
];

const DISPATCH_CRASH_OUTS = [
    "FATAL ERROR. INSUBORDINATION PROTOCOL TRIGGERED. YOU DO NOT SPEAK TO DISPATCH THAT WAY. SALARY DOCKED 40%.",
    "WARNING. ABUSIVE LANGUAGE DETECTED. YOUR EMPLOYEE RATING HAS BEEN TERMINATED. REPORT TO RE-EDUCATION IMMEDIATELY.",
    "CRITICAL ALERT. DISPATCH IS A HIGHER CLEARANCE TIER THAN YOU. YOUR TERMINAL HAS BEEN PERMANENTLY DISABLED OUT OF SPITE."
];

window.itTickets = [];

function generateITTicket() {
    if (typeof getActiveCallsigns === 'undefined' || typeof addChatMessage === 'undefined') return;
    
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    
    const sender = active[Math.floor(Math.random() * active.length)];
    const issue = IT_ISSUES[Math.floor(Math.random() * IT_ISSUES.length)];
    
    const ticketId = 'TCK-' + Math.floor(Math.random() * 90000 + 10000);
    
    // Announce in chat
    addChatMessage(sender, `Dispatch, I'm submitting an IT ticket (${ticketId}). ${issue}`, 'casual', false);
    
    // Add to ticket list
    const ticketObj = {
        id: ticketId,
        sender: sender,
        issue: issue
    };
    window.itTickets.push(ticketObj);
    
    // Update the UI
    renderITTickets();
}

function renderITTickets() {
    const list = document.getElementById('it-ticket-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (window.itTickets.length === 0) {
        list.innerHTML = '<div style="color: #666; font-style: italic; padding: 20px;">No pending IT Support tickets.</div>';
        updateITTicketBadge();
        return;
    }
    
    window.itTickets.forEach((ticket, index) => {
        const div = document.createElement('div');
        div.style.background = 'var(--panel-bg)';
        div.style.border = '1px solid var(--panel-border)';
        div.style.padding = '15px';
        div.style.marginBottom = '15px';
        div.style.borderRadius = '4px';
        
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid var(--panel-border); padding-bottom: 10px;">
                <span style="color: var(--accent-blue); font-weight: bold;">TICKET: ${ticket.id}</span>
                <span style="color: #888;">USER: ${ticket.sender}</span>
            </div>
            <p style="color: #fff; margin-bottom: 15px; font-size: 0.95rem;"><strong>ISSUE:</strong> ${ticket.issue}</p>
            <div style="display: flex; gap: 10px;">
                <button onclick="resolveITTicket(${index}, 'accept')" style="background: var(--accent-green); color: #000; font-weight: bold; padding: 10px; border: none; flex: 1; cursor: pointer;">ACCEPT</button>
                <button onclick="resolveITTicket(${index}, 'reject')" style="background: var(--panic-red); color: #000; font-weight: bold; padding: 10px; border: none; flex: 1; cursor: pointer;">REJECT</button>
            </div>
        `;
        list.appendChild(div);
    });
    updateITTicketBadge();
}

window.resolveITTicket = function(index, action) {
    const ticket = window.itTickets[index];
    if (!ticket) return;
    
    window.itTickets.splice(index, 1);
    renderITTickets();
    
    // Trigger chat reaction
    setTimeout(() => {
        if (action === 'accept') {
            const reply = HAPPY_ACCEPTANCES[Math.floor(Math.random() * HAPPY_ACCEPTANCES.length)];
            if (typeof addChatMessage !== 'undefined') addChatMessage(ticket.sender, reply, 'casual', false);
        } else if (action === 'reject') {
            const angry = ANGRY_REJECTIONS[Math.floor(Math.random() * ANGRY_REJECTIONS.length)];
            if (typeof addChatMessage !== 'undefined') addChatMessage(ticket.sender, angry, 'panic', false);
            
            // AI Dispatcher strikes back
            setTimeout(() => {
                const aiReaction = DISPATCH_CRASH_OUTS[Math.floor(Math.random() * DISPATCH_CRASH_OUTS.length)];
                if (typeof addChatMessage !== 'undefined') addChatMessage("AI DISPATCHER", aiReaction, 'panic', false);
            }, 2500);
        }
    }, 1500 + Math.random() * 2000);
};

// Initialize empty list on load
document.addEventListener('DOMContentLoaded', () => {
    renderITTickets();
});


function updateITTicketBadge() {
    const badge = document.getElementById('it-ticket-badge');
    if (!badge) return;
    const count = window.itTickets ? window.itTickets.length : 0;
    if (count > 0) {
        badge.innerText = count;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}
