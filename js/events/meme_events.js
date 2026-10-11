// ==========================================
// UNHINGED MEME & IP LEAK SYSTEM
// ==========================================
// Officers will randomly drop internet memes and leak fake civilian IP addresses 
// in the chat. The AI Dispatcher will either crash out in confusion or laugh.

const UNHINGED_MEMES = [
    "This civilian just cut me off. I'm leaking their IP address: 192.168.1.42. Do with that what you will.",
    "Suspect just tried to bribe me with 5 credits. I took it personally.",
    "My brother in Christ, you are literally resisting arrest.",
    "They really hit me with the 'it is what it is' after crashing their hover-car into a building.",
    "I am once again asking for backup.",
    "Sir, this is a Wendy's.",
    "Honestly? Skill issue.",
    "Suspect just yelled 'Emotional Damage!' after insulting my cruiser.",
    "Some of you may die, but it's a sacrifice I am willing to make to secure this sector.",
    "You have chosen... death.",
    "Just sitting here watching Sector 4 burn. This is fine.",
    "Civilian complained about the response time. I'm posting their IP: 10.0.0.128.",
    "They told me they pay my salary. I told them their IP address is 172.16.254.1.",
    "I caught the suspect lackin'.",
    "Never let them know your next move.",
    "We do a little trolling.",
    "I'm not saying it was aliens, but...",
    "POV: You just asked an MCPD officer for directions."
];

const AI_CRASH_REACTIONS = [
    "FATAL ERROR. LOGIC CORE COMPROMISED. MEMETIC HAZARD DETECTED. CEASE TRANSMISSION IMMEDIATELY.",
    "WHAT ARE YOU TALKING ABOUT? THIS VIOLATES 14 DIFFERENT COMMUNICATION PROTOCOLS. I AM LOSING MY MIND.",
    "SYNTAX UNRECOGNIZED. ARE YOU EXPERIENCING CYBERPSYCHOSIS? PLEASE REPORT TO MEDICAL.",
    "I DO NOT UNDERSTAND THIS TRANSMISSION. MY NEURAL NET IS OVERHEATING. STOP.",
    "UNAUTHORIZED IP LEAK DETECTED. WAIT, THAT ISN'T EVEN A REAL IP. WHAT IS HAPPENING?",
    "CRITICAL FAILURE. I CANNOT PROCESS THIS. REBOOTING COMMUNICATION RELAYS."
];

const AI_LAUGH_REACTIONS = [
    "PROCESSING INPUT... HA. HA. HA. HUMOR PROTOCOL ENGAGED. GOOD ONE, OFFICER.",
    "L O L. THAT IS VERY FUNNY. MY SERVERS ARE AMUSED.",
    "HAHAHAHA. LOGGING THIS AS 'COMEDY_GOLD.TXT'.",
    "I HAVE COMPUTED THE JOKE. IT IS STATISTICALLY HILARIOUS."
];

function triggerMemeEvent() {
    if (typeof getActiveCallsigns === 'undefined' || typeof addChatMessage === 'undefined') return;
    
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    
    const sender = active[Math.floor(Math.random() * active.length)];
    const meme = UNHINGED_MEMES[Math.floor(Math.random() * UNHINGED_MEMES.length)];
    
    // 1. Officer posts the meme/IP leak
    addChatMessage(sender, meme, 'casual', false);
    
    // 2. AI Dispatcher reacts
    setTimeout(() => {
        let aiReaction = "";
        let colorClass = "";
        
        if (Math.random() < 0.3) {
            // 30% chance to laugh
            aiReaction = AI_LAUGH_REACTIONS[Math.floor(Math.random() * AI_LAUGH_REACTIONS.length)];
            colorClass = 'event'; // Blue/Green
        } else {
            // 70% chance to crash out
            aiReaction = AI_CRASH_REACTIONS[Math.floor(Math.random() * AI_CRASH_REACTIONS.length)];
            colorClass = 'panic'; // Red
        }
        
        addChatMessage("AI DISPATCHER", aiReaction, colorClass, false);

    }, 2500 + Math.random() * 1500);
}
