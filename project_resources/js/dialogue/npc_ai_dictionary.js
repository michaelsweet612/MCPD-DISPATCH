
// ==========================================
// ADVANCED PROCEDURAL NPC AI CHATTER ENGINE
// ==========================================
// This engine uses a massive dictionary of words to dynamically construct millions 
// of unique sentences on the spot, simulating advanced AI logic for the officers.

const NPC_DICTIONARY = {
    // Subject Nouns
    subjects: [
        "a suspect", "a ganger", "a civilian", "some kid", "a corporate suit", "a rogue drone",
        "a drunk guy", "a syndicate enforcer", "a local merchant", "a tourist", "a hacker", 
        "an android", "a street doc", "a scav", "a bounty hunter", "a merc", "a netrunner",
        "some weirdo", "a cyborg", "a VIP", "an executive", "a protester", "a rioter",
        "a smuggler", "a thief", "a street gang", "a group of kids", "a crazy person"
    ],
    
    // Actions (Present Continuous)
    actions: [
        "is running", "is shooting", "is hiding", "is causing a disturbance", "is fleeing",
        "is throwing trash", "is screaming", "is hacking a terminal", "is selling contraband",
        "is sleeping", "is breaking into a hover-car", "is vandalizing corporate property",
        "is starting a fight", "is asking weird questions", "is bleeding", "is acting suspicious",
        "is loitering", "is drawing a weapon", "is resisting arrest", "is escaping on foot",
        "is flying a drone", "is tampering with the power grid", "is begging for credits"
    ],

    // Locations
    locations: [
        "at the transit hub", "in Sector 4", "near the corporate plaza", "down in the lower levels",
        "at the neon market", "in the alleyway", "on the skybridge", "outside the noodle shop",
        "in the sewers", "at the spaceport", "near the perimeter wall", "in the industrial zone",
        "at the megabuilding entrance", "in the parking garage", "on the rooftop", "in the club",
        "at the black clinic", "near the abandoned factory", "in Sector 7G", "at the data center"
    ],

    // Complaints / Reactions (Aggressive)
    reactions_aggro: [
        "I'm going in hot.", "I'm tired of this garbage.", "Send backup, I want to hit something.",
        "I'm drawing my weapon.", "This is going to get ugly.", "I'm not waiting for backup.",
        "Someone is going to pay for this.", "I'm taking them down.", "Lethal force authorized.",
        "I'm losing my patience.", "This city is a warzone.", "I love my job."
    ],

    // Complaints / Reactions (Lazy)
    reactions_lazy: [
        "I'm going to pretend I didn't see that.", "Someone else deal with this.", 
        "I don't get paid enough for this.", "I'm on my break.", "I'm driving the other way.",
        "Can dispatch send a rookie instead?", "I'm too tired for this.", "Not my problem.",
        "I'm ignoring it.", "This paperwork is going to suck.", "Why does this always happen to me?"
    ],

    // Complaints / Reactions (Rookie)
    reactions_rookie: [
        "I need backup immediately!", "What is the protocol for this?!", "I'm so scared!",
        "Dispatch, please advise!", "I'm holding my position!", "Should I draw my weapon?",
        "I didn't sign up for this!", "I'm trying to remember my training!", "This is terrifying!"
    ],

    // Complaints / Reactions (Sarcastic)
    reactions_sarc: [
        "Just another beautiful day in paradise.", "I'm so thrilled to be dealing with this.",
        "Wow. Groundbreaking.", "I'm sure they're just upstanding citizens.", 
        "My heart bleeds for them.", "Send a medal, I'm doing actual police work.",
        "Fascinating.", "I'll file that under 'things I don't care about'.", "Brilliant."
    ],

    // Complaints / Reactions (Paranoid)
    reactions_para: [
        "It's a trap, I know it.", "They're watching me.", "This is a setup.",
        "I'm falling back.", "Corporate is behind this.", "The AI is testing me.",
        "Don't trust anyone.", "I need aerial surveillance right now.", "They know I'm here."
    ],

    // Normal Reactions
    reactions_norm: [
        "Moving to intercept.", "Investigating now.", "Requesting a unit to assist.",
        "I'll handle it.", "Approaching the suspect.", "Securing the area.",
        "I have eyes on the situation.", "Code 4, I'm on scene.", "I'm rolling code 3."
    ],

    // Random Observations
    observations: [
        "It smells like ozone here.", "The rain is getting heavier.", "Traffic is completely gridlocked.",
        "My radio is picking up static.", "The neon signs are flickering.", "It's freezing out here.",
        "Someone just threw a bottle at my cruiser.", "The smog is really thick today.",
        "My HUD is glitching out.", "I think my armor joint is rusted.", "Just saw a rat the size of a dog."
    ],

    // Greetings
    greetings: [
        "Dispatch,", "10-4,", "Be advised,", "All units,", "Listen up,", "Hey,", "Update:", "FYI,"
    ],

    // Interjections
    interjections: [
        "Damn.", "Crazy.", "Whatever.", "Seriously?", "Unbelievable.", "Typical.", "Again?", "Wow."
    ]
};

// Sentence Templates for the procedural generator
const AI_TEMPLATES = [
    // Standard event
    "{greetings} {subjects} {actions} {locations}. {reactions}",
    
    // Observation + reaction
    "{observations} {reactions}",
    
    // Interjection + event
    "{interjections} {subjects} {actions} {locations}. {reactions}",
    
    // Just an event
    "Just spotted {subjects} {actions} {locations}. {reactions}",
    
    // Question event
    "Why is {subjects} {actions} {locations}? {reactions}",
    
    // Double observation
    "{observations} Also, {subjects} {actions} {locations}."
];

function _getRandomDictItem(arrayName) {
    const arr = NPC_DICTIONARY[arrayName];
    if (!arr) return "";
    return arr[Math.floor(Math.random() * arr.length)];
}

// Generates a fully dynamic sentence using the dictionary
function generateDynamicAISentence(personality) {
    let template = AI_TEMPLATES[Math.floor(Math.random() * AI_TEMPLATES.length)];
    
    // Determine the reaction type based on personality
    let reactionPool = "reactions_norm";
    if (personality === "Aggressive") reactionPool = "reactions_aggro";
    if (personality === "Lazy") reactionPool = "reactions_lazy";
    if (personality === "Rookie") reactionPool = "reactions_rookie";
    if (personality === "Sarcastic") reactionPool = "reactions_sarc";
    if (personality === "Paranoid") reactionPool = "reactions_para";
    
    // Sometimes fall back to normal to keep it realistic
    if (Math.random() < 0.3) reactionPool = "reactions_norm";

    // Replace placeholders with dictionary words
    template = template.replace("{greetings}", _getRandomDictItem("greetings"));
    template = template.replace("{subjects}", _getRandomDictItem("subjects"));
    template = template.replace("{actions}", _getRandomDictItem("actions"));
    template = template.replace("{locations}", _getRandomDictItem("locations"));
    template = template.replace("{observations}", _getRandomDictItem("observations"));
    template = template.replace("{interjections}", _getRandomDictItem("interjections"));
    
    // Replace reaction
    template = template.replace("{reactions}", _getRandomDictItem(reactionPool));
    
    // Clean up formatting
    template = template.charAt(0).toUpperCase() + template.slice(1);
    
    return template;
}

// This function will be called randomly to simulate the highly advanced AI chatter
function triggerProceduralAIChatter() {
    if (typeof getActiveCallsigns === 'undefined' || typeof addChatMessage === 'undefined') return;
    
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    
    const sender = active[Math.floor(Math.random() * active.length)];
    const senderUnit = roster.find(u => u.id === sender);
    const p = senderUnit ? senderUnit.personality : 'Veteran';
    
    const generatedSentence = generateDynamicAISentence(p);
    
    addChatMessage(sender, generatedSentence, 'serious', false);
}
