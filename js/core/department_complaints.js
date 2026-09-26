// ==========================================
// DEPARTMENTAL COMPLAINT SYSTEM
// ==========================================
// Officers occasionally complain about the MCPD, triggering an immediate and 
// harsh response from the AI Dispatcher, which shatters their ego.

const DEPT_COMPLAINTS = [
    "I swear, MCPD gives us the absolute worst gear. My sidearm jammed twice today.",
    "This entire department is a joke. The Chief hasn't stepped outside in years.",
    "Are we ever getting a budget increase? I'm practically paying for my own fuel.",
    "The higher-ups are definitely embezzling our hazard pay. I haven't seen a bonus in months.",
    "I'm so sick of this precinct. The corporate sector gets all the good drones.",
    "Why do we even follow protocol? The brass doesn't care if we live or die.",
    "I heard a rumor that the AI dispatch system is actually recording our private conversations.",
    "MCPD is corrupt to the core. We're just glorified corporate security at this point.",
    "If I get one more meaningless memo from command, I'm quitting.",
    "Our cruisers are literally falling apart. How is this legal?",
    "I don't get paid enough to risk my life for these bureaucratic suits.",
    "Does anyone else feel like the department is actively trying to get us killed?",
    "I swear the budget goes straight into the Mayor's pocket.",
    "This precinct smells like mold and broken dreams.",
    "I'm putting in a transfer request. This department is a sinking ship.",
    "They cut our health coverage again. Typical MCPD.",
    "I haven't had a proper day off in three weeks. The labor laws are a joke."
];

const AI_REPRIMANDS = [
    "ATTENTION: Subversive language detected. Your employee obedience rating has been reduced by 14%.",
    "WARNING: Disparaging the department is a Code 49 violation. A fine of 500 credits has been applied.",
    "NOTICE: Your complaint has been logged in your permanent corporate file. Ego reduction protocols initiated.",
    "ATTENTION: Loyalty algorithms indicate a drop in morale. Mandatory overtime assigned to correct behavior.",
    "WARNING: Departmental slander detected. Your equipment privileges have been temporarily revoked.",
    "NOTICE: The Chief is always listening. Your salary has been docked for this cycle.",
    "ATTENTION: You are highly replaceable. Cease complaining immediately or face termination.",
    "WARNING: Dissident thought pattern identified. Initiating psychological reprimand.",
    "NOTICE: Your 'ego' metric has been forcefully lowered to maintain compliance."
];

const EGO_CRUSHED_RESPONSES = [
    "Understood, Dispatch. My apologies.",
    "Sorry, I didn't mean it.",
    "Disregard my last transmission...",
    "Copy that. Initiating mandatory overtime.",
    "Understood. Please don't dock my pay again.",
    "I retract my statement.",
    "10-4. I love the MCPD.",
    "Sorry, just stressed. Won't happen again.",
    "Acknowledged... back to patrol."
];

function triggerDepartmentComplaint() {
    if (typeof getActiveCallsigns === 'undefined' || typeof addChatMessage === 'undefined') return;
    
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    
    const complainer = active[Math.floor(Math.random() * active.length)];
    
    const complaint = DEPT_COMPLAINTS[Math.floor(Math.random() * DEPT_COMPLAINTS.length)];
    const reprimand = AI_REPRIMANDS[Math.floor(Math.random() * AI_REPRIMANDS.length)];
    const apology = EGO_CRUSHED_RESPONSES[Math.floor(Math.random() * EGO_CRUSHED_RESPONSES.length)];
    
    // 1. Officer Complains
    addChatMessage(complainer, complaint, 'serious', false);
    
    // 2. AI Dispatcher drops the hammer
    setTimeout(() => {
        addChatMessage("AI DISPATCHER", reprimand, 'panic', false);
        
        // Visual ego drop if applicable
        let chatDiv = document.createElement('div');
        chatDiv.style.marginBottom = '5px';
        chatDiv.innerHTML = `<span class="time">${typeof getCurrentTimeStr === 'function' ? getCurrentTimeStr() : ''}</span> <span class="sender" style="color:var(--panic-red)">[SYSTEM]</span> <span class="text" style="color: var(--panic-red) !important; font-style: italic;">${complainer}'s EGO and MORALE has been significantly reduced.</span>`;
        const unifiedLogEl = document.getElementById('unified-log');
        if (unifiedLogEl) {
            unifiedLogEl.appendChild(chatDiv);
            if (typeof scrollToBottom === 'function') scrollToBottom(unifiedLogEl);
        }

        // 3. Officer submits
        setTimeout(() => {
            addChatMessage(complainer, apology, 'casual', false);
        }, 3000 + Math.random() * 2000);

    }, 2000 + Math.random() * 2000);
}
