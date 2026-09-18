const lateArrivalLines = [
    `Well he got there before me that doesn't mean I don't get to get paid, but I'll move in anyways and kill the bastard.`,
    `I'm just going to cry in my cruiser. Unbelievable.`,
    `I swear {original} teleported. 🙄`,
    `I'm just going to drive through the drive-thru instead. Typical.`,
    `Great, now I have to turn around awkwardly in traffic. SMH.`,
    `Great, now I have to turn around awkwardly in traffic. Lol.`,
    `Aw man, I was already turning my lights on....`,
    `Nobody likes a show-off, {original}. I'm going back to the station.`,
    `I was literally one block away. {original} always gets the good ones. 🚔`,
    `Sigh... I'll just clear the scene....`,
    `Guess I'll just go back to writing parking tickets....`,
    `Teacher's pet. I'm going back to the station.`,
    `I was literally one block away. {original} always gets the good ones. 😒`,
    `Aw man, I was already turning my lights on. SMH.`,
    `Show-off. {original} is such a try-hard. Lol.`,
    `Sigh... I'll just clear the scene. Ridiculous.`,
    `Well, at least {original} has to do the paperwork. Lol.`,
    `I'm just going to drive through the drive-thru instead. SMH.`,
    `I swear {original} teleported. 🚔`,
    `Aw man, I was already turning my lights on. Lol.`,
    `I'm just going to drive through the drive-thru instead....`,
    `Stop hogging all the calls, {original}. SMH.`,
    `Teacher's pet. Can't catch a break.`,
    `Sad day. I wanted some action. 🙄`,
    `I was speeding for nothing. Now my sirens just look silly. 😒`,
    `Have fun with the paperwork, {original}! I'm going back to the station.`,
    `I'm just here so I don't get fined....`,
    `Slow down, hotshot. 🙄`,
    `Show-off. {original} is such a try-hard. Unbelievable.`,
    `I was literally one block away. {original} always gets the good ones. Ridiculous.`,
    `Did {original} strap a rocket to their cruiser? My luck.`,
    `Teacher's pet. Typical.`,
    `Whatever, {original}. Hope you trip on a curb. Unbelievable.`,
    `Guess I'll take my time then. Anyone want coffee?`,
    `I was speeding for nothing. Now my sirens just look silly. 🚔`,
    `Why does {original} always get there first? It's not fair. Can't catch a break.`,
    `Whatever, {original}. Hope you trip on a curb. 😒`,
    `Did {original} strap a rocket to their cruiser? 🙄`,
    `I'm just going to drive through the drive-thru instead. Ridiculous.`,
    `Well, at least {original} has to do the paperwork.`,
    `Sigh... I'll just clear the scene.`,
    `You want a medal for being fast? 🙄`,
    `Guess I'll take my time then. Anyone want coffee? 🙄`,
    `Why does {original} always get there first? It's not fair. I'm going back to the station.`,
    `Guess I'll just go back to writing parking tickets. I'm going back to the station.`,
    `Great, now I have to turn around awkwardly in traffic. Typical.`,
    `Nobody likes a show-off, {original}.`,
    `I swear {original} teleported. 😒`,
    `Aw man, {original} beat me to it. My luck.`,
    `Stop hogging all the calls, {original}. Typical.`,
    `Aw man, {original} beat me to it.`,
    `Did {original} strap a rocket to their cruiser? I'm going back to the station.`,
    `Did {original} strap a rocket to their cruiser? Unbelievable.`,
    `Slow down, hotshot. SMH.`,
    `I was literally one block away. {original} always gets the good ones. Unbelievable.`,
    `Whatever, {original}. Hope you trip on a curb. Can't catch a break.`,
    `Did {original} strap a rocket to their cruiser? Typical.`,
    `Aw man, {original} beat me to it. Lol.`,
    `Aw man, I was already turning my lights on. Typical.`,
    `Why does {original} always get there first? It's not fair. Unbelievable.`,
    `Sigh... I'll just clear the scene. 🚔`,
    `I was speeding for nothing. Now my sirens just look silly. Typical.`,
    `Sad day. I wanted some action. Can't catch a break.`,
    `Guess I'll just go back to writing parking tickets. Can't catch a break.`,
    `Guess I'll take my time then. Anyone want coffee? SMH.`,
    `Have fun with the paperwork, {original}! Ridiculous.`,
    `Slow down, hotshot....`,
    `I'm just going to drive through the drive-thru instead. Can't catch a break.`,
    `Guess I'll just go back to writing parking tickets. Lol.`,
    `Teacher's pet. 😒`,
    `I bet {original} didn't even use their blinker. 🚔`,
    `I'm just going to drive through the drive-thru instead. 🚔`,
    `I'm just going to cry in my cruiser. Ridiculous.`,
    `Man, I never get to go fast....`,
    `Slow down, hotshot. 🚔`,
    `Nobody likes a show-off, {original}. My luck.`,
    `Show-off. {original} is such a try-hard. 🙄`,
    `Did {original} strap a rocket to their cruiser? Ridiculous.`,
    `Show-off. {original} is such a try-hard.`,
    `Slow down, hotshot.`,
    `I was literally one block away. {original} always gets the good ones. Lol.`,
    `Aw man, {original} beat me to it. 🙄`,
    `I hope you spill your coffee on your uniform, {original}. I'm going back to the station.`,
    `Aw man, I was already turning my lights on.`,
    `I was speeding for nothing. Now my sirens just look silly. Lol.`,
    `Nobody likes a show-off, {original}. Can't catch a break.`,
    `Stop hogging all the calls, {original}.`,
    `I'm just here so I don't get fined. I'm going back to the station.`,
    `Why does {original} always get there first? It's not fair.`,
    `Sad day. I wanted some action. My luck.`,
    `Whatever, {original}. Hope you trip on a curb. Lol.`,
    `I'm just going to cry in my cruiser.`,
    `Aw man, I was already turning my lights on. Ridiculous.`,
    `Slow down, hotshot. Lol.`,
    `Have fun with the paperwork, {original}! 🙄`,
    `Aw man, I was already turning my lights on. 😒`,
    `I'm just here so I don't get fined. 🙄`,
    `Well, at least {original} has to do the paperwork....`,
    `Sad day. I wanted some action. Lol.`,
    `Teacher's pet. Ridiculous.`,
    `Man, I never get to go fast. Lol.`,
    `Teacher's pet. SMH.`,
    `Great, now I have to turn around awkwardly in traffic. 🚔`,
    `Whatever, {original}. Hope you trip on a curb. My luck.`,
    `Whatever, {original}. Hope you trip on a curb. I'm going back to the station.`,
    `Well, at least {original} has to do the paperwork. SMH.`,
    `Show-off. {original} is such a try-hard. Can't catch a break.`,
    `Slow down, hotshot. Can't catch a break.`,
    `Aw man, I was already turning my lights on. Can't catch a break.`,
    `Aw man, {original} beat me to it. I'm going back to the station.`,
    `Slow down, hotshot. Ridiculous.`,
    `Aw man, I was already turning my lights on. 🚔`,
    `Nobody likes a show-off, {original}. Lol.`,
    `I'm just here so I don't get fined. Unbelievable.`,
    `Aw man, {original} beat me to it. 🚔`,
    `You want a medal for being fast? I'm going back to the station.`,
    `Show-off. {original} is such a try-hard. I'm going back to the station.`,
    `Slow down, hotshot. Unbelievable.`,
    `Why does {original} always get there first? It's not fair. Ridiculous.`,
    `I'm just going to drive through the drive-thru instead. 🙄`,
    `I swear {original} teleported. Typical.`,
    `Slow down, hotshot. Typical.`,
    `Whatever, {original}. Hope you trip on a curb....`,
    `I'm just going to cry in my cruiser....`,
    `I was literally one block away. {original} always gets the good ones. My luck.`,
    `I'm just going to cry in my cruiser. Typical.`,
    `I was literally one block away. {original} always gets the good ones....`,
    `Aw man, I was already turning my lights on. I'm going back to the station.`,
    `Whatever, {original}. Hope you trip on a curb. Typical.`,
    `I hope you spill your coffee on your uniform, {original}....`,
    `Have fun with the paperwork, {original}! Unbelievable.`,
    `Have fun with the paperwork, {original}! Typical.`,
    `I bet {original} didn't even use their blinker. I'm going back to the station.`,
    `I was literally one block away. {original} always gets the good ones. Can't catch a break.`,
    `Man, I never get to go fast. SMH.`,
    `You want a medal for being fast? Can't catch a break.`,
    `I'm just here so I don't get fined.`,
    `I hope you spill your coffee on your uniform, {original}. Lol.`,
    `Sigh... I'll just clear the scene. My luck.`,
    `Guess I'll just go back to writing parking tickets. SMH.`,
    `Man, I never get to go fast. 🚔`,
    `Man, I never get to go fast.`,
    `Sad day. I wanted some action.`,
    `Did {original} strap a rocket to their cruiser? 😒`,
    `Teacher's pet. My luck.`,
    `I hope you spill your coffee on your uniform, {original}. 😒`,
    `I'm just going to cry in my cruiser. 🚔`,
    `Man, I never get to go fast. Can't catch a break.`,
    `I was literally one block away. {original} always gets the good ones. 🙄`,
    `Man, I never get to go fast. 🙄`,
    `Well, at least {original} has to do the paperwork. My luck.`,
    `I'm just going to drive through the drive-thru instead. I'm going back to the station.`,
    `Slow down, hotshot. I'm going back to the station.`,
    `Guess I'll take my time then. Anyone want coffee? Ridiculous.`,
    `Whatever, {original}. Hope you trip on a curb.`,
    `Great, now I have to turn around awkwardly in traffic. 😒`,
    `Aw man, {original} beat me to it. 😒`,
    `Why does {original} always get there first? It's not fair. 🚔`,
    `Guess I'll take my time then. Anyone want coffee? 😒`,
    `Great, now I have to turn around awkwardly in traffic. Unbelievable.`,
    `I hope you spill your coffee on your uniform, {original}. Can't catch a break.`,
    `I swear {original} teleported. Ridiculous.`,
    `I bet {original} didn't even use their blinker.`,
    `Sad day. I wanted some action. SMH.`,
    `I bet {original} didn't even use their blinker. Can't catch a break.`,
    `Slow down, hotshot. 😒`,
    `Aw man, {original} beat me to it. Can't catch a break.`,
    `Have fun with the paperwork, {original}! My luck.`,
    `Guess I'll just go back to writing parking tickets. Ridiculous.`,
    `I hope you spill your coffee on your uniform, {original}. Ridiculous.`,
    `I bet {original} didn't even use their blinker. SMH.`,
    `Sigh... I'll just clear the scene. SMH.`,
    `Stop hogging all the calls, {original}. 🚔`,
    `Stop hogging all the calls, {original}. 🙄`,
    `Nobody likes a show-off, {original}. 🚔`,
    `I swear {original} teleported. Lol.`,
    `Great, now I have to turn around awkwardly in traffic.`,
    `Why does {original} always get there first? It's not fair. My luck.`,
    `I bet {original} didn't even use their blinker. 🙄`,
    `Teacher's pet. 🚔`,
    `Aw man, {original} beat me to it. Typical.`,
    `Show-off. {original} is such a try-hard. 🚔`,
    `Teacher's pet. 🙄`,
    `Why does {original} always get there first? It's not fair. SMH.`,
    `I'm just going to drive through the drive-thru instead. My luck.`,
    `Man, I never get to go fast. My luck.`,
    `Why does {original} always get there first? It's not fair. Typical.`,
    `Well, at least {original} has to do the paperwork. I'm going back to the station.`,
    `Stop hogging all the calls, {original}. Unbelievable.`,
    `Nobody likes a show-off, {original}. Ridiculous.`,
    `Have fun with the paperwork, {original}!`,
    `Why does {original} always get there first? It's not fair....`,
    `I'm just here so I don't get fined. Can't catch a break.`,
    `Guess I'll take my time then. Anyone want coffee?...`,
    `You want a medal for being fast?...`,
    `Stop hogging all the calls, {original}. Ridiculous.`,
    `Guess I'll just go back to writing parking tickets.`,
    `Well, at least {original} has to do the paperwork. Unbelievable.`,
    `I'm just here so I don't get fined. Ridiculous.`,
    `I was speeding for nothing. Now my sirens just look silly. Can't catch a break.`,
    `I swear {original} teleported.`,
    `I bet {original} didn't even use their blinker. Lol.`,
    `I was speeding for nothing. Now my sirens just look silly.`,
    `Well, at least {original} has to do the paperwork. 🙄`,
    `Man, I never get to go fast. Ridiculous.`,
    `Sad day. I wanted some action. Unbelievable.`,
    `I'm just here so I don't get fined. 🚔`,
    `Nobody likes a show-off, {original}. 🙄`,
    `Well, at least {original} has to do the paperwork. 😒`,
    `I'm just here so I don't get fined. 😒`,
    `Aw man, I was already turning my lights on. My luck.`,
    `I was speeding for nothing. Now my sirens just look silly. 🙄`,
    `Stop hogging all the calls, {original}. 😒`,
    `Did {original} strap a rocket to their cruiser? 🚔`,
    `You want a medal for being fast? My luck.`,
    `Well, at least {original} has to do the paperwork. Typical.`,
    `Guess I'll just go back to writing parking tickets. Typical.`,
    `I hope you spill your coffee on your uniform, {original}. Typical.`,
    `Nobody likes a show-off, {original}. Typical.`,
    `You want a medal for being fast? Lol.`,
    `I'm just going to drive through the drive-thru instead. 😒`,
    `I bet {original} didn't even use their blinker. Typical.`,
    `Aw man, I was already turning my lights on. 🙄`,
    `Whatever, {original}. Hope you trip on a curb. SMH.`,
    `Have fun with the paperwork, {original}! 😒`,
    `Man, I never get to go fast. 😒`,
    `Stop hogging all the calls, {original}. Lol.`,
    `Guess I'll take my time then. Anyone want coffee? 🚔`,
    `Well, at least {original} has to do the paperwork. 🚔`,
    `I'm just going to cry in my cruiser. Can't catch a break.`,
    `I'm just here so I don't get fined. Lol.`,
    `Sad day. I wanted some action. Typical.`,
    `Man, I never get to go fast. I'm going back to the station.`,
    `Whatever, {original}. Hope you trip on a curb. Ridiculous.`,
    `Aw man, {original} beat me to it. SMH.`,
    `Great, now I have to turn around awkwardly in traffic. Can't catch a break.`
];


let dispatcherScore = 0;
function addPoints(pts) {
    dispatcherScore += pts;
    const scoreEl = document.getElementById('dispatcher-score-display');
    if(scoreEl) {
        scoreEl.textContent = `STATION POINTS: ${dispatcherScore}`;
        scoreEl.style.color = 'var(--accent-green)';
        setTimeout(() => scoreEl.style.color = '#fff', 500);
    }
}
// OS Simulator Logic

// Setup Audio Context for procedural synthetic sound (Panic Alarm)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let panicOsc = null;
let panicLFO = null;
let panicGain = null;
let wantedTargets = [];

// DOM Elements
const timeEl = document.getElementById('current-time');
const unifiedLogEl = document.getElementById('unified-log');
const documentLogEl = document.getElementById('document-log');
const chatInputArea = document.getElementById('chat-input-area');

const tabUnitStatus = document.getElementById('tab-unit-status');
const unitStatusLogEl = document.getElementById('unit-status-log');

if (tabUnitStatus && unitStatusLogEl) {
    tabUnitStatus.addEventListener('click', () => {
        tabUnitStatus.classList.add('active');
        tabUnitStatus.style.color = 'var(--accent-blue)';
        
        if (tabUnified) { tabUnified.classList.remove('active'); tabUnified.style.color = 'var(--text-dim)'; }
        if (tabDocuments) { tabDocuments.classList.remove('active'); tabDocuments.style.color = 'var(--text-dim)'; }
        if (tabDatabase) { tabDatabase.classList.remove('active'); tabDatabase.style.color = 'var(--text-dim)'; }
        if (tabWanted) { tabWanted.classList.remove('active'); tabWanted.style.color = 'var(--text-dim)'; }
        if (tabCitizens) { tabCitizens.classList.remove('active'); tabCitizens.style.color = 'var(--text-dim)'; }
        if (tabRecruitment) { tabRecruitment.classList.remove('active'); tabRecruitment.style.color = 'var(--text-dim)'; }
        
        unitStatusLogEl.style.display = 'block';
        if (unifiedLogEl) unifiedLogEl.style.display = 'none';
        if (documentLogEl) documentLogEl.style.display = 'none';
        if (document.getElementById('database-view')) document.getElementById('database-view').style.display = 'none';
        if (document.getElementById('wanted-view')) document.getElementById('wanted-view').style.display = 'none';
        if (document.getElementById('citizens-list-view')) document.getElementById('citizens-list-view').style.display = 'none';
        if (recruitmentLogEl) recruitmentLogEl.style.display = 'none';
        if (chatInputArea) chatInputArea.style.display = 'none';
        
        if(typeof renderUnitStatus !== 'undefined') renderUnitStatus();
    });
}
const tabUnified = document.getElementById('tab-unified');
const tabDocuments = document.getElementById('tab-documents');
const documentListEl = document.getElementById('document-list');
const eventCountEl = document.getElementById('event-count');
const manualPanicBtn = document.getElementById('manual-panic-btn');
const clearPanicBtn = document.getElementById('clear-panic-btn');
const btnEvtRobbery = document.getElementById('manual-event-robbery');
const btnEvtSuspicious = document.getElementById('manual-event-suspicious');
const btnEvtTraffic = document.getElementById('manual-event-traffic');
const btnEvtRandom = document.getElementById('manual-event-random');
const btnEvtConfusion = document.getElementById('manual-event-confusion');
const autoEventsCheckbox = document.getElementById('auto-events');
  const tabRecruitment = document.getElementById('tab-recruitment');
  const recruitmentLogEl = document.getElementById('recruitment-log');
  const applicantListEl = document.getElementById('applicant-list');
  const refreshApplicantsBtn = document.getElementById('refresh-applicants-btn');
    const rosterTotalCountEl = document.getElementById('roster-total-count');

  const PERSONALITIES = ['Aggressive', 'Rookie', 'Veteran', 'Paranoid', 'Sarcastic', 'By-The-Book', 'Lazy', 'Reckless', 'Idealistic', 'Furry', 'Fabulous', 'Corrupt'];

function getRandomJobTitle() {
    if (Math.random() < 0.15) return "Unemployed";
    
    const prefixes = [
        "Cybernetic", "Quantum", "Plasma", "Neural", "Synthetic", "Orbital", "Sub-Dermal", 
        "Neon", "Corporate", "Black-Market", "Waste", "Void", "Data", "Holo", "Bio", "Nano",
        "Deep-Sea", "Offshore", "High-Atmosphere", "Underground", "Freelance", "Rogue",
        "Water", "Rock", "Cloud", "Cheese", "Vibe", "Noise", "Gloom", "Spaghetti", "Time", "Glitch",
        "Virtual", "Analog", "Radioactive", "TBMG", "Executive", "Senior", "Junior", "Assistant"
    ];
    
    const nouns = [
        "Data", "Waste", "Code", "Memory", "Dreams", "Souls", "Hardware", "Wetware", 
        "Sludge", "Neon", "Credits", "Biomass", "Plastics", "Alloys", "Toxins", "Vibrations",
        "Puddles", "Rocks", "Sand", "Clouds", "Wires", "Lasers", "Algorithms"
    ];
    
    const roles = [
        "Technician", "Engineer", "Manager", "Analyst", "Operative", "Scrapper", "Consultant", 
        "Director", "Janitor", "Specialist", "Enforcer", "Smuggler", "Courier", "Farmer", 
        "Architect", "Dealer", "Broker", "Wrangler", "Whisperer", "Harvester", "Auditor", 
        "Inspector", "Cultivator", "Polisher", "Extractor", "Synthesizer"
    ];

    const format = Math.random();
    
    if (format < 0.33) {
        // [Prefix] [Role]
        return getRandomItem(prefixes) + " " + getRandomItem(roles);
    } else if (format < 0.66) {
        // [Noun] [Role]
        return getRandomItem(nouns) + " " + getRandomItem(roles);
    } else {
        // [Prefix] [Noun] [Role]
        return getRandomItem(prefixes) + " " + getRandomItem(nouns) + " " + getRandomItem(roles);
    }
}

function getRandomGender() {
    const rand = Math.random();
    if (rand < 0.01) return "Unidentified Gender";
    if (rand < 0.03) return "Unidentified Species";
    if (rand < 0.05) return "Seps";
    if (rand < 0.07) return "Over The Gone";
    if (rand < 0.15) return "Human";
    return getRandomItem(['Male', 'Female', 'Transgender', 'Non-Binary', 'Genderfluid']);
}

function getRandomPersonality() {
    const customWeightsStr = localStorage.getItem('mcpd_personality_weights');
    let weights = {
        'Aggressive': 10,
        'Rookie': 10,
        'Veteran': 10,
        'Paranoid': 10,
        'Sarcastic': 10,
        'By-The-Book': 10,
        'Lazy': 10,
        'Reckless': 10,
        'Idealistic': 10,
        'Furry': 1,
        'Fabulous': 1,
        'Impatient': 10,
        'Trigger-Happy': 10,
        'Corrupt': 10
    };

    if (customWeightsStr) {
        try {
            weights = JSON.parse(customWeightsStr);
        } catch(e) {}
    }

    let totalWeight = 0;
    for (let p in weights) totalWeight += parseInt(weights[p]);

    if (totalWeight === 0) return 'Rookie'; // Fallback

    let rand = Math.random() * totalWeight;
    for (let p in weights) {
        if (rand < weights[p]) return p;
        rand -= weights[p];
    }
    
    return 'Rookie';
}

  let currentApplicants = [];

const roeToggleCheckbox = document.getElementById('roe-toggle');

let roeLastTurnedOnTime = Date.now();

if (roeToggleCheckbox) {
    roeToggleCheckbox.addEventListener('change', (e) => {
        if (!e.target.checked) {
            // RULES OF ENGAGEMENT TURNED OFF (LETHAL MODE ON)
            // Instantly tank the rating
            currentStationRating = 0.0;
            trustPercentage = 0.0;
            
            const ratingEl = document.getElementById('station-star-rating');
            const visualStarsEl = document.getElementById('station-stars-visual');
            const trustEl = document.getElementById('trust-ratio');
            const distrustEl = document.getElementById('distrust-ratio');
            
            if (ratingEl) ratingEl.textContent = '\u2B50 0.0 / 5.0';
            if (visualStarsEl) visualStarsEl.textContent = '☆☆☆☆☆';
            if (trustEl) trustEl.textContent = '0% TRUST';
            if (distrustEl) distrustEl.textContent = '100% DISTRUST';
            
            if (typeof addChatMessage !== 'undefined') {
                addChatMessage("SYSTEM", "WARNING: RULES OF ENGAGEMENT DISABLED. PUBLIC TRUST AT CRITICAL ZERO.", "worried", false);
            }
        } else {
            // RULES OF ENGAGEMENT TURNED BACK ON
            roeLastTurnedOnTime = Date.now();
            if (typeof addChatMessage !== 'undefined') {
                addChatMessage("SYSTEM", "NOTICE: RULES OF ENGAGEMENT RE-ESTABLISHED. REBUILDING PUBLIC TRUST.", "serious", false);
            }
        }
    });
}

const restModeToggle = document.getElementById('rest-mode-toggle');
const btnArrestNearby = document.getElementById('btn-arrest-nearby');

// Advanced Controls UI

// Critical Emergencies Dropdown Logic
const critHeader = document.getElementById('critical-emergencies-header');
const critBody = document.getElementById('critical-emergencies-body');
const critChevron = document.getElementById('critical-chevron');
let critOpen = false;

if (critHeader && critBody && critChevron) {
    critHeader.addEventListener('click', () => {
        critOpen = !critOpen;
        if (critOpen) {
            critBody.style.display = 'flex';
            critChevron.textContent = '▲';
            if(typeof updateDepartmentStats !== 'undefined') updateDepartmentStats();
        } else {
            critBody.style.display = 'none';
            critChevron.textContent = '▼';
        }
    });
}

// Stats Logic
function updateDepartmentStats() {
    const statIncidents = document.getElementById('stat-incidents');
    const statWarrants = document.getElementById('stat-warrants');
    const statSuspects = document.getElementById('stat-suspects');
    const statDeceased = document.getElementById('stat-deceased');
    
    if (statIncidents) statIncidents.textContent = eventCount || 0;
    
    if (wantedTargets && statWarrants) statWarrants.textContent = wantedTargets.length;
    
    if (globalCitizens) {
        let wantedCount = 0;
        let deadCount = 0;
        globalCitizens.forEach(c => {
            if (c.status === 'Wanted' || c.status === 'Escaped') wantedCount++;
            if (c.status === 'Deceased') deadCount++;
        });
        if (statSuspects) statSuspects.textContent = wantedCount;
        if (statDeceased) statDeceased.textContent = deadCount;
    }
}

const advancedControlsHeader = document.getElementById('advanced-controls-header');
const advancedControlsBody = document.getElementById('advanced-controls-body');
const advancedChevron = document.getElementById('advanced-chevron');
const dispatchChatInput = document.getElementById('dispatch-chat-input');
const dispatchChatSend = document.getElementById('dispatch-chat-send');

const wantedListEl = document.getElementById('wanted-list');
const dbSearchInput = document.getElementById('db-search-input');
const dbSearchBtn = document.getElementById('db-search-btn');
const dbAiProfileBtn = document.getElementById('db-ai-profile-btn');
const dbResults = document.getElementById('db-results');

// Global State
let eventCount = 0;
let activePanics = new Map();
window.genderPool = [
    "Sub-dermal Hologram",
    "Cloned Drone",
    "Solar-Replicant",
    "Digital-Girl",
    "Holo-Organism",
    "Plasma-Node",
    "Stellar-Algorithm",
    "Sub-orbital Avatar",
    "Trans-dimensional Being",
    "Flesh-Girl",
    "Solar-Chimera",
    "Radioactive-Drone",
    "Stellar-Being",
    "Sub-orbital Algorithm",
    "Quantum-Hologram",
    "Trans-dimensional Transgender",
    "Simulated Specter",
    "Lunar-Meat-Sack",
    "Void-Algorithm",
    "Sub-dermal AI",
    "Ectoplasmic Symbiote",
    "Fractal Girl",
    "Astro-Organism",
    "Synth-Human",
    "Cloned Clone",
    "Fractal Meat-Sack",
    "Stellar-Hologram",
    "Sub-dermal Symbiote",
    "Neural-Specter",
    "Sub-dermal Being",
    "Bio-Human",
    "Genetically Modified Polymorph",
    "Genetically Modified Mutant",
    "Cryo-Boy",
    "Neural-Being",
    "Holo-Entity",
    "Holo-AI",
    "Fractal Mutant",
    "Simulated Entity",
    "Synth-Drone",
    "Cyber-Transgender",
    "Sub-dermal Male",
    "Techno-Android",
    "Holo-Specter",
    "Ectoplasmic Boy",
    "Cloned Node",
    "Radioactive-Polymorph",
    "Sub-orbital Being",
    "Holo-Construct",
    "Techno-Construct",
    "Bio-Drone",
    "Augmented Specter",
    "Ectoplasmic AI",
    "Trans-dimensional AI",
    "Lunar-Mutant",
    "Hive-mind Cyborg",
    "Recombinant Being",
    "Astro-Drone",
    "Cyber-Hologram",
    "Nano-Genderfluid",
    "Hyper-Meat-Sack",
    "Techno-Anomaly",
    "Ectoplasmic Girl",
    "Simulated Construct",
    "Neo-Over-the-gone",
    "Bio-Avatar",
    "Techno-Chimera",
    "Flesh-Construct",
    "Sub-orbital Organism",
    "Cryo-Clone",
    "Parallel Organism",
    "Void-Genderfluid",
    "Astro-Boy",
    "Astro-Construct",
    "Quantum-Node",
    "Synth-Algorithm",
    "Augmented Hologram",
    "Genetically Modified Hologram",
    "Cyber-Chimera",
    "Quantum-Replicant",
    "Hive-mind Symbiote",
    "Hyper-Symbiote",
    "Fractal Android",
    "Solar-Mutant",
    "Void-Chimera",
    "Sub-orbital Drone",
    "Cyber-Anomaly",
    "Void-Drone",
    "Mecha-AI",
    "Virtual Node",
    "Stellar-Polymorph",
    "Void-Meat-Sack",
    "Mecha-Meat-Sack",
    "Mecha-Clone",
    "Sub-dermal Anomaly",
    "Sub-orbital Construct",
    "Digital-AI",
    "Quantum-Anomaly",
    "Hive-mind Anomaly",
    "Cloned Cyborg",
    "Lunar-Android",
    "Nuclear-Android",
    "Quantum-Chimera",
    "Nuclear-Human",
    "Parallel Over-the-gone",
    "Virtual Construct",
    "Digital-Entity",
    "Solar-Human",
    "Genetically Modified Transgender",
    "Quantum-Mutant",
    "Techno-Node",
    "Cryo-Specter",
    "Mecha-Boy",
    "Hive-mind Hologram",
    "Solar-Girl",
    "Fractal AI",
    "Radioactive-Male",
    "Cloned Mutant",
    "Genetically Modified Over-the-gone",
    "Void-Entity",
    "Cryo-Transgender",
    "Ectoplasmic Organism",
    "Synth-Transgender",
    "Simulated Being",
    "Synth-Female",
    "Digital-Female",
    "Solar-Boy",
    "Genetically Modified AI",
    "Flesh-Avatar",
    "Plasma-Girl",
    "Synth-Replicant",
    "Sub-dermal Genderfluid",
    "Flesh-Genderfluid",
    "Simulated Cyborg",
    "Virtual Avatar",
    "Virtual Drone",
    "Digital-Boy",
    "Trans-dimensional Cyborg",
    "Cloned Specter",
    "Parallel Cyborg",
    "Trans-dimensional Boy",
    "Virtual Algorithm",
    "Cryo-Male",
    "Fractal Non-Binary",
    "Recombinant Female",
    "Augmented Chimera",
    "Hyper-Male",
    "Parallel Chimera",
    "Neural-Transgender",
    "Astro-Female",
    "Neural-AI",
    "Radioactive-Organism",
    "Neo-Construct",
    "Cloned Algorithm",
    "Plasma-Replicant",
    "Lunar-Algorithm",
    "Nano-Anomaly",
    "Flesh-Boy",
    "Recombinant Clone",
    "Genderfluid",
    "Cyber-Drone",
    "Radioactive-Over-the-gone",
    "Neo-Cyborg",
    "Nuclear-Entity",
    "Astro-Male",
    "Hive-mind Over-the-gone",
    "Astro-Genderfluid",
    "Fractal Avatar",
    "Solar-Android",
    "Augmented Avatar",
    "Hive-mind Algorithm",
    "Techno-Non-Binary",
    "Neural-Replicant",
    "Recombinant Drone",
    "Hyper-Female",
    "Recombinant Hologram",
    "Flesh-Entity",
    "Cryo-Organism",
    "Bio-Entity",
    "Nano-Organism",
    "Simulated Clone",
    "Techno-Mutant",
    "Ectoplasmic Anomaly",
    "Astro-Cyborg",
    "Recombinant AI",
    "Virtual Girl",
    "Cloned Human",
    "Simulated Genderfluid",
    "Quantum-Female",
    "Mecha-Replicant",
    "Mecha-Chimera",
    "Techno-Organism",
    "Hyper-Algorithm",
    "Simulated Non-Binary",
    "Solar-Over-the-gone",
    "Cyber-Being",
    "Neural-Boy",
    "Hyper-Specter",
    "Augmented Replicant",
    "Quantum-Polymorph",
    "Neural-Clone",
    "Void-Specter",
    "Virtual Organism",
    "Solar-Construct",
    "Holo-Genderfluid",
    "Synth-Genderfluid",
    "Hive-mind Drone",
    "Fractal Clone",
    "Void-Female",
    "Sub-orbital Replicant",
    "Augmented Construct",
    "Mecha-Cyborg",
    "Male",
    "Stellar-Boy",
    "Sub-dermal Over-the-gone",
    "Radioactive-Android",
    "Holo-Hologram",
    "Holo-Male",
    "Quantum-AI",
    "Hyper-Organism",
    "Solar-Cyborg",
    "Holo-Non-Binary",
    "Solar-Specter",
    "Nuclear-Male",
    "Simulated Replicant",
    "Lunar-Genderfluid",
    "Ectoplasmic Cyborg",
    "Hyper-Transgender",
    "Radioactive-Chimera",
    "Astro-Polymorph",
    "Plasma-AI",
    "Cyber-Non-Binary",
    "Flesh-Anomaly",
    "Nuclear-Over-the-gone",
    "Nuclear-Non-Binary",
    "Lunar-Hologram",
    "Sub-dermal Clone",
    "Cloned Girl",
    "Stellar-Organism",
    "Virtual Chimera",
    "Fractal Polymorph",
    "Sub-dermal Transgender",
    "Over-the-gone",
    "Augmented Male",
    "Synth-Avatar",
    "Holo-Clone",
    "Sub-orbital Anomaly",
    "Augmented Genderfluid",
    "Nano-Polymorph",
    "Sub-dermal Non-Binary",
    "Holo-Transgender",
    "Augmented Human",
    "Flesh-Hologram",
    "Trans-dimensional Non-Binary",
    "Neural-Over-the-gone",
    "Parallel Avatar",
    "Trans-dimensional Clone",
    "Bio-Android",
    "Quantum-Girl",
    "Augmented Non-Binary",
    "Neural-Female",
    "Stellar-Non-Binary",
    "Trans-dimensional Chimera",
    "Nuclear-Hologram",
    "Hyper-Construct",
    "Solar-Meat-Sack",
    "Techno-Human",
    "Techno-Specter",
    "Nuclear-Female",
    "Sub-orbital Boy",
    "Hive-mind Non-Binary",
    "Trans-dimensional Meat-Sack",
    "Augmented Over-the-gone",
    "Human",
    "Mecha-Over-the-gone",
    "Synth-Clone",
    "Simulated Meat-Sack",
    "Digital-Over-the-gone",
    "Augmented AI",
    "Void-Polymorph",
    "Ectoplasmic Mutant",
    "Hyper-Clone",
    "Flesh-Transgender",
    "Solar-Genderfluid",
    "Holo-Over-the-gone",
    "Hive-mind Being",
    "Neo-Mutant",
    "Radioactive-Meat-Sack",
    "Cyber-Organism",
    "Neural-Android",
    "Parallel Human",
    "Genetically Modified Drone",
    "Sub-orbital Chimera",
    "Stellar-Node",
    "Nuclear-Drone",
    "Nano-Cyborg",
    "Flesh-Clone",
    "Nuclear-Girl",
    "Cloned Boy",
    "Techno-Algorithm",
    "Nano-Entity",
    "Nano-Girl",
    "Quantum-Over-the-gone",
    "Astro-Replicant",
    "Recombinant Meat-Sack",
    "Bio-Genderfluid",
    "Bio-Meat-Sack",
    "Nano-Node",
    "Trans-dimensional Male",
    "Parallel Specter",
    "Hive-mind Avatar",
    "Recombinant Entity",
    "Holo-Node",
    "Hyper-Mutant",
    "Fractal Organism",
    "Augmented Drone",
    "Flesh-Male",
    "Solar-AI",
    "Sub-orbital Meat-Sack",
    "Synth-Specter",
    "Parallel Polymorph",
    "Ectoplasmic Entity",
    "Trans-dimensional Replicant",
    "Hive-mind Polymorph",
    "Trans-dimensional Drone",
    "Bio-Non-Binary",
    "Nano-AI",
    "Recombinant Anomaly",
    "Cryo-Entity",
    "Digital-Replicant",
    "Digital-Meat-Sack",
    "Virtual Non-Binary",
    "Synth-Node",
    "Simulated Algorithm",
    "Augmented Meat-Sack",
    "Synth-Male",
    "Cryo-Anomaly",
    "Quantum-Algorithm",
    "Nano-Symbiote",
    "Bio-Being",
    "Cloned Genderfluid",
    "Void-Node",
    "Neo-Boy",
    "Cryo-Meat-Sack",
    "Sub-orbital Entity",
    "Virtual Being",
    "Fractal Node",
    "Lunar-Female",
    "Cloned Hologram",
    "Genetically Modified Clone",
    "Cloned Organism",
    "Lunar-Construct",
    "Fractal Construct",
    "Hive-mind Organism",
    "Solar-Female",
    "Fractal Male",
    "Neural-Organism",
    "Simulated Anomaly",
    "Genetically Modified Organism",
    "Void-Mutant",
    "Recombinant Transgender",
    "Cloned Polymorph",
    "Sub-orbital Non-Binary",
    "Augmented Girl",
    "Neural-Polymorph",
    "Nuclear-Chimera",
    "Hyper-Avatar",
    "Ectoplasmic Node",
    "Sub-orbital Female",
    "Digital-Mutant",
    "Techno-Female",
    "Nano-Construct",
    "Cyber-Construct",
    "Synth-Symbiote",
    "Plasma-Human",
    "Parallel Construct",
    "Plasma-Non-Binary",
    "Void-Being",
    "Cyber-Symbiote",
    "Lunar-Girl",
    "Cryo-Over-the-gone",
    "Void-Cyborg",
    "Cryo-Symbiote",
    "Virtual Entity",
    "Parallel Entity",
    "Parallel Girl",
    "Neural-Node",
    "Neo-Node",
    "Nuclear-Specter",
    "Genetically Modified Replicant",
    "Solar-Symbiote",
    "Bio-Female",
    "Cyber-Over-the-gone",
    "Virtual Transgender",
    "Fractal Specter",
    "Ectoplasmic Non-Binary",
    "Virtual Boy",
    "Parallel Android",
    "Non-Binary",
    "Virtual Android",
    "Radioactive-Transgender",
    "Plasma-Symbiote",
    "Bio-AI",
    "Cyber-Female",
    "Holo-Polymorph",
    "Virtual Polymorph",
    "Nano-Android",
    "Virtual Over-the-gone",
    "Ectoplasmic Algorithm",
    "Nano-Meat-Sack",
    "Flesh-Polymorph",
    "Stellar-Human",
    "Digital-Android",
    "Simulated Drone",
    "Recombinant Polymorph",
    "Radioactive-Symbiote",
    "Void-Transgender",
    "Recombinant Girl",
    "Cyber-Male",
    "Plasma-Avatar",
    "Recombinant Replicant",
    "Parallel Drone",
    "Neural-Non-Binary",
    "Ectoplasmic Meat-Sack",
    "Recombinant Node",
    "Stellar-Entity",
    "Nano-Drone",
    "Flesh-Meat-Sack",
    "Hive-mind Mutant",
    "Astro-Chimera",
    "Mecha-Being",
    "Neural-Cyborg",
    "Hive-mind Female",
    "Hyper-Node",
    "Plasma-Transgender",
    "Neo-Drone",
    "Fractal Anomaly",
    "Cryo-Genderfluid",
    "Solar-Node",
    "Stellar-AI",
    "Ectoplasmic Construct",
    "Fractal Entity",
    "Holo-Android",
    "Trans-dimensional Android",
    "Ectoplasmic Replicant",
    "Genetically Modified Meat-Sack",
    "Plasma-Android",
    "Fractal Replicant",
    "Neural-Construct",
    "Genetically Modified Boy",
    "Solar-Being",
    "Plasma-Meat-Sack",
    "Bio-Node",
    "Simulated Node",
    "Transgender",
    "Mecha-Female",
    "Sub-orbital Male",
    "Trans-dimensional Node",
    "Sub-orbital Polymorph",
    "Bio-Chimera",
    "Trans-dimensional Female",
    "Flesh-Human",
    "Nuclear-Anomaly",
    "Astro-Over-the-gone",
    "Cyber-AI",
    "Bio-Transgender",
    "Hive-mind Male",
    "Genetically Modified Anomaly",
    "Techno-Replicant",
    "Plasma-Being",
    "Sub-orbital Human",
    "Synth-Organism",
    "Holo-Replicant",
    "Holo-Meat-Sack",
    "Plasma-Male",
    "Sub-orbital Mutant",
    "Sub-dermal Specter",
    "Nuclear-AI",
    "Hive-mind Construct",
    "Lunar-Clone",
    "Stellar-Over-the-gone",
    "Simulated Transgender",
    "Techno-Genderfluid",
    "Lunar-Cyborg",
    "Solar-Transgender",
    "Sub-orbital Specter",
    "Sub-orbital AI",
    "Void-Boy",
    "Cyber-Mutant",
    "Nuclear-Mutant",
    "Solar-Polymorph",
    "Nano-Algorithm",
    "Astro-Mutant",
    "Digital-Specter",
    "Cloned Being",
    "Digital-Construct",
    "Digital-Male",
    "Neo-Replicant",
    "Sub-dermal Meat-Sack",
    "Nano-Transgender",
    "Astro-Clone",
    "Bio-Replicant",
    "Sub-orbital Over-the-gone",
    "Lunar-Over-the-gone",
    "Cyber-Avatar",
    "Recombinant Boy",
    "Ectoplasmic Specter",
    "Mecha-Mutant",
    "Radioactive-Female",
    "Digital-Clone",
    "Digital-Genderfluid",
    "Neo-Algorithm",
    "Void-Clone",
    "Stellar-Mutant",
    "Nano-Hologram",
    "Nano-Over-the-gone",
    "Techno-Entity",
    "Virtual Replicant",
    "Bio-Algorithm",
    "Simulated Chimera",
    "Radioactive-Entity",
    "Fractal Hologram",
    "Virtual Clone",
    "Female",
    "Hyper-Entity",
    "Ectoplasmic Being",
    "Nuclear-Algorithm",
    "Nano-Human",
    "Astro-Symbiote",
    "Ectoplasmic Avatar"
];

function getRandomJobTitle() {
    if (Math.random() < 0.15) return "Unemployed";
    
    const prefixes = [
        "Cybernetic", "Quantum", "Plasma", "Neural", "Synthetic", "Orbital", "Sub-Dermal", 
        "Neon", "Corporate", "Black-Market", "Waste", "Void", "Data", "Holo", "Bio", "Nano",
        "Deep-Sea", "Offshore", "High-Atmosphere", "Underground", "Freelance", "Rogue",
        "Water", "Rock", "Cloud", "Cheese", "Vibe", "Noise", "Gloom", "Spaghetti", "Time", "Glitch",
        "Virtual", "Analog", "Radioactive", "TBMG", "Executive", "Senior", "Junior", "Assistant"
    ];
    
    const nouns = [
        "Data", "Waste", "Code", "Memory", "Dreams", "Souls", "Hardware", "Wetware", 
        "Sludge", "Neon", "Credits", "Biomass", "Plastics", "Alloys", "Toxins", "Vibrations",
        "Puddles", "Rocks", "Sand", "Clouds", "Wires", "Lasers", "Algorithms"
    ];
    
    const roles = [
        "Technician", "Engineer", "Manager", "Analyst", "Operative", "Scrapper", "Consultant", 
        "Director", "Janitor", "Specialist", "Enforcer", "Smuggler", "Courier", "Farmer", 
        "Architect", "Dealer", "Broker", "Wrangler", "Whisperer", "Harvester", "Auditor", 
        "Inspector", "Cultivator", "Polisher", "Extractor", "Synthesizer"
    ];

    const format = Math.random();
    
    if (format < 0.33) {
        // [Prefix] [Role]
        return getRandomItem(prefixes) + " " + getRandomItem(roles);
    } else if (format < 0.66) {
        // [Noun] [Role]
        return getRandomItem(nouns) + " " + getRandomItem(roles);
    } else {
        // [Prefix] [Noun] [Role]
        return getRandomItem(prefixes) + " " + getRandomItem(nouns) + " " + getRandomItem(roles);
    }
}

function getRandomGender() {
    const rand = Math.random();
    if (rand < 0.01) return "SEPS";
    if (rand < 0.02) return "Unidentified Species";
    if (rand < 0.05) return "Unidentified Gender";
    return window.genderPool[Math.floor(Math.random() * window.genderPool.length)];
}
 // Store maps of unit -> { timeoutVisual, timeoutSound }
let autoSimulateInt = null;
let chatSimulateInt = null;

// Mock Data
let roster = [];
let citizensDisplayed = 10;
  
    function getRandomRank() {
        const roll = Math.random();
        if (roll < 0.70) return 'Officer';
        if (roll < 0.85) return 'Corporal';
        if (roll < 0.95) return 'Sergeant';
        if (roll < 0.99) return 'Lieutenant';
        return 'Captain';
    }

    function initRoster() {
        roster = [];
        for(let i=0; i<5000; i++) {
            roster.push({
                id: `Unit-${Math.floor(10000 + Math.random() * 90000)}`,
                rank: getRandomRank(),
                status: Math.random() < 0.7 ? 'On Duty' : 'Off Duty',
                health: 'HEALTHY',
                personality: getRandomPersonality(),
                gender: getRandomGender(),
                maritalStatus: ['Single', 'Married', 'Married', 'Divorced', 'Divorced', 'Widowed', 'Married (Corporate Arranged)', 'Legally Separated', 'Complicated'][Math.floor(Math.random() * 9)],
                sector: Math.floor(Math.random() * 9) + 1
            });
        }
    }

    initRoster();


function getActiveCallsigns() {
    return roster.filter(u => u.status === 'On Duty').map(u => u.id);
}



let voreMode = false;

const crimeReports = [
    { title: "10-31: Bizarre Intrusion", priority: "medium", location: "Rocket 9, Tele Shop", desc: "An unauthorized Crown Victoria has somehow been parked entirely inside a solid concrete building. Physics engine glitch suspected.", group: "Unknown Phantoms" },
    { title: "10-55: Bizarre Disturbance", priority: "low", location: "Sector 4 Bio-Dome", desc: "Subject is aggressively snapping crayons in the middle of a tree for absolutely no logical reason. Dispatching 1 unit, or 2 if the crayon snapping escalates.", group: "Disturbed Citizens" },
    { title: "10-88: Vandalism", priority: "high", location: "Sector 7 Restrooms", desc: "Suspect known as 'Tickle Tickle McGee' is actively attacking toilets with a pipe wrench. Suspect claims he 'wants revenge'.", group: "Tickle Tickle McGee" },
    { title: "10-99: Infrastructure Hazard", priority: "high", location: "Tippy Top Tower", desc: "The Tippy Top Tower is structurally unstable and swaying violently. Multiple units required to block off the area.", group: "Corporate Engineers" },
    { title: "10-00: Unauthorized Border Crossing", priority: "medium", location: "The Void (Sector NaN)", desc: "Illegal immigrants spotted in a location that literally does not make any logical sense. They appear to be floating.", group: "Reality Glitches" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Sector 4, Neon Strip", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Corporate Drones" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 7, Residential", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Tickle Tickle McGee" },
    { title: "10-99: Massive Incident", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Cyber-Junkies" },
    { title: "10-30: Complete Confusion", priority: "medium", location: "Sector 1, Alpha Strip", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Tickle Tickle McGee" },
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "Sector 3, Gamma Slums", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Corporate Drones" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Sector 2, Beta Blocks", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Confused Tourists" },
    { title: "10-99: Massive Incident", priority: "high", location: "Motel 8 (Cyber Edition)", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Cyber-Junkies" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Motel 8 (Cyber Edition)", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Local Vagrants" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Motel 8 (Cyber Edition)", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Corporate Drones" },
    { title: "10-30: Complete Confusion", priority: "medium", location: "Sector 7, Residential", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Hotel Guests" },
    { title: "10-99: Massive Incident", priority: "high", location: "Sector 5, Industrial", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Confused Tourists" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Sector 5, Industrial", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Hotel Guests" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 3, Gamma Slums", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Local Vagrants" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Grand TBMG Hotel", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Tickle Tickle McGee" },
    { title: "10-50: Bizarre Traffic Incident", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Corporate Drones" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Sector 6, Cyber-Market", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Cyber-Junkies" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Sector 7, Residential", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Local Vagrants" },
    { title: "10-99: Massive Incident", priority: "medium", location: "The Tippy Top Tower", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Tickle Tickle McGee" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 5, Industrial", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Hotel Guests" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Random Void Location", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Hotel Guests" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Sector 3, Gamma Slums", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Hotel Guests" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Sector 5, Industrial", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Local Vagrants" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Sector 1, Alpha Strip", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Tickle Tickle McGee" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Tickle Tickle McGee" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Sector 1, Alpha Strip", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Confused Tourists" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Grand TBMG Hotel", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Tickle Tickle McGee" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "Sector 3, Gamma Slums", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Hotel Guests" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Tickle Tickle McGee" },
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "Random Void Location", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Corporate Drones" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Random Void Location", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Confused Tourists" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "The Tippy Top Tower", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Local Vagrants" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Sector 9, Rocket Strip", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Corporate Drones" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Sector 5, Industrial", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Corporate Drones" },
    { title: "10-50: Bizarre Traffic Incident", priority: "high", location: "Sector 3, Gamma Slums", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "The Cyber-Woods", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Corporate Drones" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "The Tippy Top Tower", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Confused Tourists" },
    { title: "10-99: Massive Incident", priority: "low", location: "The Tippy Top Tower", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Corporate Drones" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Sector 2, Beta Blocks", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Hotel Guests" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Corporate Drones" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Random Void Location", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Hotel Guests" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Sector 1, Alpha Strip", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Tickle Tickle McGee" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Random Void Location", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Tickle Tickle McGee" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 2, Beta Blocks", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Tickle Tickle McGee" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Motel 8 (Cyber Edition)", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Motel 8 (Cyber Edition)", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Tickle Tickle McGee" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "Sector 4, Neon Strip", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Local Vagrants" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Confused Tourists" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Rocket 9 Concrete Shop", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Local Vagrants" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Sector 8, Wealth District", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Tickle Tickle McGee" },
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "Sector 7, Residential", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Hotel Guests" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Confused Tourists" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "The Tippy Top Tower", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Motel 8 (Cyber Edition)", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Confused Tourists" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Motel 8 (Cyber Edition)", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Tickle Tickle McGee" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Motel 8 (Cyber Edition)", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Cyber-Junkies" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "The Tippy Top Tower", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Hotel Guests" },
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "Rocket 9 Concrete Shop", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Tickle Tickle McGee" },
    { title: "10-99: Massive Incident", priority: "high", location: "Sector 2, Beta Blocks", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Local Vagrants" },
    { title: "10-50: Bizarre Traffic Incident", priority: "medium", location: "Sector 4, Neon Strip", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Tickle Tickle McGee" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "The Tippy Top Tower", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Confused Tourists" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Sector 4, Neon Strip", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Local Vagrants" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Random Void Location", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Cyber-Junkies" },
    { title: "10-30: Complete Confusion", priority: "medium", location: "Rocket 9 Concrete Shop", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Corporate Drones" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "Sector 9, Rocket Strip", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Local Vagrants" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 1, Alpha Strip", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Hotel Guests" },
    { title: "10-50: Bizarre Traffic Incident", priority: "medium", location: "Grand TBMG Hotel", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Tickle Tickle McGee" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Sector 9, Rocket Strip", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Hotel Guests" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Random Void Location", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Confused Tourists" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Rocket 9 Concrete Shop", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Corporate Drones" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Sector 5, Industrial", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Confused Tourists" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "Sector 8, Wealth District", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Corporate Drones" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Motel 8 (Cyber Edition)", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Confused Tourists" },
    { title: "10-50: Bizarre Traffic Incident", priority: "high", location: "Grand TBMG Hotel", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Cyber-Junkies" },
    { title: "10-50: Bizarre Traffic Incident", priority: "high", location: "Sector 5, Industrial", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Hotel Guests" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Sector 2, Beta Blocks", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Hotel Guests" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 3, Gamma Slums", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Confused Tourists" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Local Vagrants" },
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "The Cyber-Woods", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Cyber-Junkies" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Sector 3, Gamma Slums", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Confused Tourists" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 3, Gamma Slums", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Local Vagrants" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "The Cyber-Woods", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Tickle Tickle McGee" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Sector 2, Beta Blocks", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Local Vagrants" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Grand TBMG Hotel", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Local Vagrants" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 5, Industrial", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Cyber-Junkies" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "The Cyber-Woods", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Corporate Drones" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 2, Beta Blocks", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Tickle Tickle McGee" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 2, Beta Blocks", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Cyber-Junkies" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Motel 8 (Cyber Edition)", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Hotel Guests" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Sector 7, Residential", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Hotel Guests" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Grand TBMG Hotel", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Cyber-Junkies" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Rocket 9 Concrete Shop", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Hotel Guests" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Random Void Location", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Confused Tourists" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Sector 3, Gamma Slums", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Corporate Drones" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "The Cyber-Woods", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Corporate Drones" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Sector 2, Beta Blocks", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Confused Tourists" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 7, Residential", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Confused Tourists" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Sector 1, Alpha Strip", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Cyber-Junkies" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Sector 4, Neon Strip", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Cyber-Junkies" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Sector 1, Alpha Strip", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Local Vagrants" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Rocket 9 Concrete Shop", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Confused Tourists" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Sector 4, Neon Strip", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Local Vagrants" },
    { title: "10-50: Bizarre Traffic Incident", priority: "high", location: "Sector 7, Residential", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Local Vagrants" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Sector 6, Cyber-Market", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Corporate Drones" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Hotel Guests" },
    { title: "10-99: Massive Incident", priority: "low", location: "Sector 6, Cyber-Market", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Cyber-Junkies" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Sector 7, Residential", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Hotel Guests" },
    { title: "10-30: Complete Confusion", priority: "medium", location: "Sector 2, Beta Blocks", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Tickle Tickle McGee" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Motel 8 (Cyber Edition)", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Corporate Drones" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 1, Alpha Strip", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Local Vagrants" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "The Tippy Top Tower", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Confused Tourists" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Sector 6, Cyber-Market", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Local Vagrants" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Sector 3, Gamma Slums", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Corporate Drones" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Grand TBMG Hotel", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Cyber-Junkies" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Random Void Location", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Corporate Drones" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Random Void Location", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Corporate Drones" },
    { title: "10-30: Complete Confusion", priority: "medium", location: "Sector 4, Neon Strip", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Corporate Drones" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Sector 9, Rocket Strip", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Hotel Guests" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Sector 4, Neon Strip", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Hotel Guests" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Random Void Location", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "The Cyber-Woods", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Motel 8 (Cyber Edition)", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "The Tippy Top Tower", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Local Vagrants" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Rocket 9 Concrete Shop", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Tickle Tickle McGee" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Sector 4, Neon Strip", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Tickle Tickle McGee" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Sector 1, Alpha Strip", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Tickle Tickle McGee" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Sector 7, Residential", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Confused Tourists" },
    { title: "10-50: Bizarre Traffic Incident", priority: "high", location: "Sector 3, Gamma Slums", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Tickle Tickle McGee" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 4, Neon Strip", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "Grand TBMG Hotel", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Tickle Tickle McGee" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Motel 8 (Cyber Edition)", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Local Vagrants" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Motel 8 (Cyber Edition)", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Corporate Drones" },
    { title: "10-99: Massive Incident", priority: "low", location: "Random Void Location", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Hotel Guests" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Sector 6, Cyber-Market", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Confused Tourists" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Sector 7, Residential", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Local Vagrants" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Rocket 9 Concrete Shop", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Confused Tourists" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 5, Industrial", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Cyber-Junkies" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Grand TBMG Hotel", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Corporate Drones" },
    { title: "10-30: Complete Confusion", priority: "high", location: "The Tippy Top Tower", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Hotel Guests" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Sector 2, Beta Blocks", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Tickle Tickle McGee" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 2, Beta Blocks", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Hotel Guests" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 2, Beta Blocks", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Confused Tourists" },
    { title: "10-99: Massive Incident", priority: "low", location: "The Tippy Top Tower", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Cyber-Junkies" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 6, Cyber-Market", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Local Vagrants" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Sector 6, Cyber-Market", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Corporate Drones" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Sector 6, Cyber-Market", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Hotel Guests" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Rocket 9 Concrete Shop", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Local Vagrants" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Sector 9, Rocket Strip", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Confused Tourists" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Rocket 9 Concrete Shop", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Cyber-Junkies" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 2, Beta Blocks", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Confused Tourists" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Motel 8 (Cyber Edition)", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Local Vagrants" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "Sector 8, Wealth District", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Hotel Guests" },
    { title: "10-99: Massive Incident", priority: "low", location: "Sector 1, Alpha Strip", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Corporate Drones" },
    { title: "10-50: Bizarre Traffic Incident", priority: "high", location: "Motel 8 (Cyber Edition)", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Corporate Drones" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Sector 8, Wealth District", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Hotel Guests" },
    { title: "10-99: Massive Incident", priority: "high", location: "Sector 4, Neon Strip", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Hotel Guests" },
    { title: "10-99: Massive Incident", priority: "low", location: "The Cyber-Woods", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Cyber-Junkies" },
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "Sector 8, Wealth District", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Confused Tourists" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Rocket 9 Concrete Shop", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Local Vagrants" },
    { title: "10-99: Massive Incident", priority: "high", location: "The Cyber-Woods", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Tickle Tickle McGee" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 6, Cyber-Market", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Tickle Tickle McGee" },
    { title: "10-99: Massive Incident", priority: "low", location: "Grand TBMG Hotel", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Tickle Tickle McGee" },
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "Rocket 9 Concrete Shop", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "high", location: "The Cyber-Woods", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Tickle Tickle McGee" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Motel 8 (Cyber Edition)", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Hotel Guests" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Sector 6, Cyber-Market", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Confused Tourists" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 8, Wealth District", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Hotel Guests" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Sector 2, Beta Blocks", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Sector 9, Rocket Strip", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Confused Tourists" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "The Tippy Top Tower", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Local Vagrants" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Sector 4, Neon Strip", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Confused Tourists" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Motel 8 (Cyber Edition)", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Hotel Guests" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Sector 1, Alpha Strip", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Cyber-Junkies" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Sector 7, Residential", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Cyber-Junkies" },
    { title: "10-99: Massive Incident", priority: "low", location: "Sector 2, Beta Blocks", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Tickle Tickle McGee" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Sector 6, Cyber-Market", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Local Vagrants" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "The Tippy Top Tower", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Tickle Tickle McGee" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Rocket 9 Concrete Shop", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Confused Tourists" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 3, Gamma Slums", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Local Vagrants" },
    { title: "10-00: Illegal Reality Breach", priority: "high", location: "Sector 6, Cyber-Market", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Tickle Tickle McGee" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 6, Cyber-Market", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Hotel Guests" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Sector 4, Neon Strip", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Hotel Guests" },
    { title: "10-50: Bizarre Traffic Incident", priority: "medium", location: "Random Void Location", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Local Vagrants" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Sector 6, Cyber-Market", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Tickle Tickle McGee" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "Sector 7, Residential", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Tickle Tickle McGee" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "The Tippy Top Tower", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Cyber-Junkies" },
    { title: "10-30: Complete Confusion", priority: "medium", location: "Grand TBMG Hotel", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Cyber-Junkies" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "The Tippy Top Tower", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Cyber-Junkies" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "The Tippy Top Tower", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Corporate Drones" },
    { title: "10-00: Illegal Reality Breach", priority: "low", location: "Sector 4, Neon Strip", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Local Vagrants" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Sector 3, Gamma Slums", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Corporate Drones" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 2, Beta Blocks", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Tickle Tickle McGee" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Random Void Location", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "high", location: "The Cyber-Woods", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Confused Tourists" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Sector 3, Gamma Slums", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Tickle Tickle McGee" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Sector 8, Wealth District", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Corporate Drones" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Sector 2, Beta Blocks", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Corporate Drones" },
    { title: "10-99: Massive Incident", priority: "low", location: "Sector 4, Neon Strip", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "Sector 3, Gamma Slums", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Tickle Tickle McGee" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 3, Gamma Slums", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Sector 5, Industrial", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Confused Tourists" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Motel 8 (Cyber Edition)", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Hotel Guests" },
    { title: "10-50: Bizarre Traffic Incident", priority: "medium", location: "The Cyber-Woods", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Tickle Tickle McGee" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Sector 1, Alpha Strip", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Local Vagrants" },
    { title: "10-99: Massive Incident", priority: "high", location: "Sector 9, Rocket Strip", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Sector 4, Neon Strip", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Local Vagrants" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Rocket 9 Concrete Shop", desc: "Illegal immigrants from the year 1994 have manifested and are asking for directions.", group: "Hotel Guests" },
    { title: "10-30: Complete Confusion", priority: "high", location: "Random Void Location", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "Sector 5, Industrial", desc: "Caller complains that 'Tickle Tickle McGee' is staring at them from across the street.", group: "Local Vagrants" },
    { title: "10-99: Massive Incident", priority: "high", location: "Sector 2, Beta Blocks", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Tickle Tickle McGee" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Sector 3, Gamma Slums", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Corporate Drones" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "The Tippy Top Tower", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Confused Tourists" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Random Void Location", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Local Vagrants" },
    { title: "10-50: Bizarre Traffic Incident", priority: "medium", location: "Sector 7, Residential", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Corporate Drones" },
    { title: "10-14: Fake Hotel Alarm", priority: "medium", location: "Sector 2, Beta Blocks", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Cyber-Junkies" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Sector 9, Rocket Strip", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Hotel Guests" },
    { title: "10-99: Massive Incident", priority: "low", location: "Sector 6, Cyber-Market", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Confused Tourists" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 2, Beta Blocks", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Local Vagrants" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 4, Neon Strip", desc: "Fake alarm triggered at the hotel. Turned out to be a smart-toaster trying to escape.", group: "Confused Tourists" },
    { title: "10-50: Bizarre Traffic Incident", priority: "medium", location: "Grand TBMG Hotel", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Confused Tourists" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 2, Beta Blocks", desc: "Report of a hotel guest using a military-grade EMP to avoid paying for the mini-bar.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Grand TBMG Hotel", desc: "Someone is playing loud jazz music and throwing illegal crayons at people.", group: "Corporate Drones" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 7, Residential", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Hotel Guests" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 3, Gamma Slums", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "medium", location: "Sector 2, Beta Blocks", desc: "Multiple subjects attempting to construct a time machine out of stolen toilet parts.", group: "Local Vagrants" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 2, Beta Blocks", desc: "Suspect is throwing synthetic cheese at passing police cruisers.", group: "Confused Tourists" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Random Void Location", desc: "Caller states a man is arguing with a holographic billboard. The billboard is winning.", group: "Hotel Guests" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Grand TBMG Hotel", desc: "Unregistered vehicle found hovering upside down over a pedestrian crossing.", group: "Corporate Drones" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "Sector 4, Neon Strip", desc: "Suspect is pouring concrete into the municipal water supply.", group: "Corporate Drones" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 3, Gamma Slums", desc: "Civilian got their cybernetic arm stuck inside a vending machine. Requires extraction.", group: "Hotel Guests" },
    { title: "10-00: Illegal Reality Breach", priority: "medium", location: "Random Void Location", desc: "Suspicious individual spotted attempting to arrest a stray dog.", group: "Local Vagrants" },
];

// Assign points to all crime reports
crimeReports.forEach(c => {
    if (!c.points) {
        if (c.priority === 'high') {
            c.points = Math.floor(Math.random() * 501) + 500; // 500-1000
        } else if (c.priority === 'medium') {
            c.points = Math.floor(Math.random() * 201) + 50; // 50-250
        } else {
            c.points = Math.floor(Math.random() * 21) + 5; // 5-25
        }
    }
});

function simulateEvent(specificCrime = null) {
    if (restModeToggle.checked && !specificCrime) return;

    let crime = specificCrime;

    if (!crime) {

        if (!autoEventsCheckbox.checked) return;

        

        const now = Date.now();

        let availableCrimes = crimeReports.filter(c => !c.lastPicked || now - c.lastPicked > 60000);

        if (availableCrimes.length === 0) availableCrimes = crimeReports;

        

        const pickedTemplate = availableCrimes[Math.floor(Math.random() * availableCrimes.length)];

        pickedTemplate.lastPicked = now;

        

        crime = { ...pickedTemplate };

        if (crime.title.includes('[RAND_LOC]')) {
            const randLoc = Math.floor(Math.random() * 90000) + 10000;
            crime.title = crime.title.replace('[RAND_LOC]', randLoc);
        }
    }

    const div = document.createElement('div');
    const prioClass = crime.priority === 'high' ? 'high-priority' : (crime.priority === 'medium' ? 'medium-priority' : '');
    let weightedUnits = [];
    const _active = getActiveCallsigns();
    _active.forEach(c => {
        weightedUnits.push(c);
        const o = roster.find(u => u.id === c);
        if (o && (o.personality === 'Trigger-Happy' || o.personality === 'Corrupt')) {
            weightedUnits.push(c, c, c, c); // 5x higher chance to be selected
        }
    });
    if (weightedUnits.length === 0) weightedUnits = _active;
    
    const respondingUnits = [getRandomItem(weightedUnits), getRandomItem(weightedUnits)];
    if (respondingUnits[0] === respondingUnits[1] && _active.length > 1) {
        const others = weightedUnits.filter(c => c !== respondingUnits[0]);
        if (others.length > 0) respondingUnits[1] = getRandomItem(others);
    }

    const numUnits = respondingUnits.length;
    const sector = Math.floor(1000 + Math.random() * 9000);
    const spokenCrime = crime.title.replace(/10-\d{2}:?\s*/, '').replace(/\d+/, ' '); // strip 10-codes for easier speech
    const area = Math.floor(Math.random() * 9) + 1;
    const dispatchSpeech = `All units, ${spokenCrime}, area ${area}.`;
    speakDispatch(dispatchSpeech);

    unitAssignments[respondingUnits[0]] = '10-6 (On Scene)';
    unitAssignments[respondingUnits[1]] = '10-6 (On Scene)';
    if(typeof renderUnitStatus !== 'undefined' && (document.getElementById('tab-unit-status') && document.getElementById('tab-unit-status').classList.contains('active'))) renderUnitStatus();
    
    // AI Officer dynamically engages the event and awards points
    setTimeout(() => {
        if (crime.title.includes('10-30:')) {
            const chatDiv = document.createElement('div');
            chatDiv.className = 'chat-msg';
            const confusedMsg = [
                "Wait, what? What call is it again?",
                "Dispatch, repeat that? What is a 10-30?",
                "Wait, what? Wake me up, I must be hearing things.",
                "Dispatch, you cut out... what is the call?",
                "Wait, what? Are you just reading random letters?",
                "What call is it again? Did you fall asleep on the keyboard?"
            ];
            chatDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender">[${respondingUnits[0]}]</span> <span class="text" style="color: var(--panic-orange) !important;">${getRandomItem(confusedMsg)}</span>`;
            unifiedLogEl.appendChild(chatDiv);
            scrollToBottom(unifiedLogEl);
            
            setTimeout(() => {
               addChatMessage('DISPATCH', 'Nevermind, unit. Disregard.', 'dispatch-msg');
               unitAssignments[respondingUnits[0]] = '10-8 (Available)';
               unitAssignments[respondingUnits[1]] = '10-8 (Available)';
               if(typeof renderUnitStatus !== 'undefined' && (document.getElementById('tab-unit-status') && document.getElementById('tab-unit-status').classList.contains('active'))) renderUnitStatus();
            }, 2500);
            return;
        }

        const chatDiv = document.createElement('div');
        chatDiv.className = 'chat-msg';
        chatDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender">[${respondingUnits[0]}]</span> <span class="text" style="color: var(--accent-green) !important;">10-4, en route to Sector ${sector} to engage the call. [+${crime.points || 15} STATION POINTS]</span>`;
        unifiedLogEl.appendChild(chatDiv);
        scrollToBottom(unifiedLogEl);
        if (typeof awardOfficerPoints !== "undefined" && typeof respondingUnits !== "undefined" && respondingUnits.length > 0) { awardOfficerPoints(respondingUnits[0], crime.points || 15); } else { addPoints(crime.points || 15); }
        
        // Jealous Officer mechanic
        setTimeout(() => {
            const activeCallsigns = getActiveCallsigns();
            const originalUnit = respondingUnits[0];
            const backupUnits = activeCallsigns.filter(u => u !== originalUnit);
            if (backupUnits.length > 0) {
                const jealousUnit = backupUnits[Math.floor(Math.random() * backupUnits.length)];
                const rawLine = lateArrivalLines[Math.floor(Math.random() * lateArrivalLines.length)];
                const line = rawLine.replace('{original}', originalUnit);
                
                const jDiv = document.createElement('div');
                jDiv.className = 'chat-msg';
                jDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender">[${jealousUnit}]</span> <span class="text">${line}</span>`;
                unifiedLogEl.appendChild(jDiv);
                scrollToBottom(unifiedLogEl);
                
                // Temporarily mark them on scene
                unitAssignments[jealousUnit] = '10-6 (On Scene)';
                if(typeof renderUnitStatus !== 'undefined' && document.getElementById('tab-unit-status').classList.contains('active')) renderUnitStatus();
                
                // Switch them back to on duty after 12s
                setTimeout(() => {
                    if (unitAssignments[jealousUnit] === '10-6 (On Scene)') {
                        unitAssignments[jealousUnit] = '10-8 (Available)';
                        if(typeof renderUnitStatus !== 'undefined' && document.getElementById('tab-unit-status').classList.contains('active')) renderUnitStatus();
                    }
                }, 12000);
                
                // Special Interaction!
                if (line.includes("kill the bastard")) {
                    setTimeout(() => {
                        const rDiv = document.createElement('div');
                        rDiv.className = 'chat-msg';
                        rDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender">[${originalUnit}]</span> <span class="text">hey hey hey you can't just kill them</span>`;
                        unifiedLogEl.appendChild(rDiv);
                        scrollToBottom(unifiedLogEl);
                        
                        setTimeout(() => {
                            const iaDiv = document.createElement('div');
                            iaDiv.className = 'chat-msg';
                            iaDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender" style="color:var(--panic-red)">[INTERNAL AFFAIRS]</span> <span class="text" style="color:var(--panic-red); font-weight:bold;">OFFICER ${jealousUnit}, LETHAL FORCE COMMENTS ARE FLAGGED. THIS WILL BE REVIEWED.</span>`;
                            unifiedLogEl.appendChild(iaDiv);
                            scrollToBottom(unifiedLogEl);
                        }, 2000);
                    }, 2000);
                }
            }
        }, 4000 + Math.random() * 3000);
        
    }, 3000 + Math.random() * 2000);


    // Select random suspect from database
    let suspectCit = null;
    if (globalCitizens && globalCitizens.length > 0) {
        suspectCit = globalCitizens[Math.floor(Math.random() * globalCitizens.length)];
        // Mark them suspicious or wanted based on priority
        if (crime.priority === 'high') {
            suspectCit.status = 'Wanted';
            wantedTargets.push({
                name: suspectCit.name,
                reason: crime.title,
                level: "HIGH",
                bounty: Math.floor(Math.random() * 50000) + 10000,
                address: "Unknown",
                implants: suspectCit.trait
            });
            if (typeof updateWantedUI !== 'undefined') updateWantedUI();
        } else {
            suspectCit.status = 'Suspicious';
        }
        if (typeof renderCitizensList !== 'undefined') renderCitizensList();
    }

    div.className = `event-item ${prioClass}`;
    div.style.width = "100%";
    div.innerHTML = `
        <span class="time">${getCurrentTimeStr()}</span>
        <div class="title">${crime.title} <span style="color:var(--accent-green)">[REWARD: ${crime.points || 15} PTS]</span></div>
        ${crime.group ? `<div style="color: #ff9800; font-size: 0.85rem;">[INTEL] Known Affiliation: ${crime.group}</div>` : ''}
        <div style="font-size: 0.9rem; color: #ccc;">Responding: ${respondingUnits[0]} & ${respondingUnits[1]}</div>
    `;

    unifiedLogEl.appendChild(div);
    eventCount++;
    if(typeof updateDepartmentStats !== 'undefined') updateDepartmentStats();
    if(eventCountEl) eventCountEl.textContent = `${eventCount} Events`;
    scrollToBottom(unifiedLogEl);

    if (unifiedLogEl.children.length > 100) {
        unifiedLogEl.removeChild(unifiedLogEl.firstChild);
    }

    setTimeout(async () => {
        const reportingUnit = respondingUnits[0];
        const backupUnit = respondingUnits[1];
        let isROEEnabled = roeToggleCheckbox.checked;
        const repOfficerObj = typeof roster !== 'undefined' ? roster.find(u => u.id === reportingUnit) : null;
        if (repOfficerObj && (repOfficerObj.personality === 'Trigger-Happy' || repOfficerObj.personality === 'Corrupt')) {
            isROEEnabled = false; // Trigger-Happy & Corrupt ignore ROE and always shoot
        }

        if (Math.random() < 0.3) {
            const swear = getRandomItem(swearWords);
            const action = getRandomItem(underFireActions);
            const loc = Math.floor(Math.random() * 900000000) + 100000000;
            
            addChatMessage(reportingUnit, `${swear} ${action}`, "worried");
            
            setTimeout(() => {
                const checkIn = getRandomItem(backupCheckInLines);
                addChatMessage(backupUnit, checkIn.replace(/%UNIT%/g, reportingUnit), "worried");
                
                setTimeout(() => {
                    const resLine = getRandomItem(detailedResolutionLines);
                    addChatMessage(reportingUnit, `${resLine} Send EMS to location ${loc}.`, "serious");
                    
                    if (suspectCit) {
                        suspectCit.status = 'Deceased';
                        if (typeof renderCitizensList !== 'undefined') renderCitizensList();
                    }
                    if (typeof window.recordOfficerStat !== 'undefined') window.recordOfficerStat(lethalAuthOfficer, 'kill');

                    setTimeout(() => {
                        const backupAck = getRandomItem(backupAcknowledgeLines);
                        addChatMessage(backupUnit, backupAck.replace(/%LOC%/g, loc).replace(/%UNIT%/g, reportingUnit), "serious");
                        
                        mockAddDocument(crime, respondingUnits, false);
        unitAssignments[respondingUnits[0]] = '10-8 (Available)';
        unitAssignments[respondingUnits[1]] = '10-8 (Available)';
        if(typeof renderUnitStatus !== 'undefined' && (document.getElementById('tab-unit-status') && document.getElementById('tab-unit-status').classList.contains('active'))) renderUnitStatus();
 // Always lethal if they got in a shootout
                    }, 3500 + Math.random() * 2000);
                    
                }, 5000 + Math.random() * 4000);
                
            }, 2500 + Math.random() * 2000);
            return;
        }

        const suspectStr = suspectCit ? `${suspectCit.name} (CID: ${suspectCit.id})` : 'the suspect';
        const arrestingChats = [
            `Target ${suspectStr} in custody. Returning to precinct.`,
            `I arrested ${suspectStr}. Code 4.`,
            `${suspectStr} secured. We're 10-8.`,
            `Apprehended ${suspectStr} without incident.`,
            `Got them. ${suspectStr} is in cuffs.`,
            `${suspectStr} is reading their rights now. Secured.`,
            `Suspect ${suspectStr} gave up easy. Taking them to booking.`,
            `Handcuffed and secured. ${suspectStr} is in the back of my cruiser.`,
            `Situation resolved. ${suspectStr} is under arrest.`,
            `Code 4. ${suspectStr} is going away for a long time.`,
            `We have ${suspectStr} in custody. Wrapping up here.`,
            `Arrest successful on ${suspectStr}. No injuries.`
        ];

        const killingChats = [
            `Target ${suspectStr} neutralized. Call the meat wagon. Filing report now.`,
            `Threat eliminated. No survivors. Returning to patrol.`,
            `${suspectStr} resisted. Lethal force applied. Area is red but quiet.`,
            `Subject down. Send bio-hazard cleanup to our coordinates.`,
            `Target ${suspectStr} was hostile. Problem solved permanently.`
        ];

        let reportMsg = isROEEnabled ? getRandomItem(arrestingChats) : getRandomItem(killingChats);
        
        if (suspectCit) {
            suspectCit.status = isROEEnabled ? 'Arrested' : 'Deceased';
            if (typeof renderCitizensList !== 'undefined') renderCitizensList();
        }
        if (isROEEnabled) {
            if (typeof window.recordOfficerStat !== 'undefined') window.recordOfficerStat(reportingUnit, 'arrest');
        } else {
            if (typeof window.recordOfficerStat !== 'undefined') window.recordOfficerStat(reportingUnit, 'kill');
        }

        addChatMessage(reportingUnit, reportMsg, "serious");
        mockAddDocument(crime, respondingUnits, isROEEnabled);
        unitAssignments[respondingUnits[0]] = '10-8 (Available)';
        unitAssignments[respondingUnits[1]] = '10-8 (Available)';
        if(typeof renderUnitStatus !== 'undefined' && (document.getElementById('tab-unit-status') && document.getElementById('tab-unit-status').classList.contains('active'))) renderUnitStatus();


    }, 4000 + Math.random() * 6000);
}

// === OVERRIDE triggerComplimentBanter for Points ===
function triggerComplimentBanter(sender) {
    const active = getActiveCallsigns();
    const target = active.length > 1 ? getRandomItem(active.filter(c => c !== sender)) : "Dispatch";
    
    const prefixes = ["Hey", "Listen", "Just wanted to say,", "For the record,", "Honestly,", "I have to admit,"];
    const adjectives = ["amazing", "incredible", "outstanding", "perfect", "impeccable", "flawless", "superb"];
    const subjects = ["uniform", "boots", "tactical gear", "helmet", "badge polish", "patrol driving", "radio voice"];
    const praises = [
        `you're such a good boy.`,
        `your ${getRandomItem(subjects)} looks ${getRandomItem(adjectives)} today.`,
        `you are way better at this job than me.`,
        `I aspire to be as good as you one day.`,
        `the Captain was right, you're the best unit we have.`,
        `you always know exactly what to do. Good boy.`,
        `your ${getRandomItem(subjects)} is literally ${getRandomItem(adjectives)}.`,
        `I feel so safe when you're on my shift. Good boy.`,
        `you're a true inspiration to the entire precinct.`
    ];

    const compliment = `${getRandomItem(prefixes)} ${target}, ${getRandomItem(praises)}`;
    addChatMessage(sender, compliment, 'joking');
    
    // Add points occasionally!
    if (Math.random() < 0.4) { // 40% chance when this rare function runs
        const pointsAwarded = Math.floor(Math.random() * 41) + 10; // 10 to 50 points
        setTimeout(() => {
            const pointDiv = document.createElement('div');
            pointDiv.className = 'chat-msg';
            pointDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender" style="color:var(--accent-green)">[COMMENDATION]</span> <span class="text" style="color: var(--accent-green) !important;">Officer ${sender} commended ${target}. [+${pointsAwarded} STATION POINTS]</span>`;
            unifiedLogEl.appendChild(pointDiv);
            scrollToBottom(unifiedLogEl);
            if (typeof awardOfficerPoints !== "undefined" && typeof sender !== "undefined") { awardOfficerPoints(sender, pointsAwarded); } else { addPoints(pointsAwarded); }
        }, 1500);
    }
}

// === OVERRIDE triggerLethalAuthEvent for Advanced Setting ===


// === OVERRIDE addChatMessage to fix undefined crash ===
function addChatMessage(sender, text, typeClass = 'serious', isPlayer = false) {
    if (text === undefined || text === null) text = "10-4.";
    
    // Ensure text is a string to prevent .replace crashes
    text = String(text);
    
    text = text.replace(/%RANDOM_SECTOR%/g, () => Math.floor(10000 + Math.random() * 89999));
    text = text.replace(/%RANDOM_UNIT%/g, () => { try { const arr = getActiveCallsigns(); return arr.length ? arr[Math.floor(Math.random()*arr.length)] : 'Unit-77'; } catch(e) { return 'Unit-77'; } });
    const div = document.createElement('div');
    div.className = `chat-msg ${typeClass}`;
    div.style.position = 'relative'; // For positioning the reply button

    // Create the message content
    const contentHtml = `
        <span class="time" style="color: #666; font-size: 0.8rem; margin-right: 5px;">${getCurrentTimeStr()}</span>
        <span class="sender">${sender === 'DISPATCH' ? '[DISPATCH]' : '[' + sender + ']'}</span> 
        <span class="text">${text}</span>
    `;
    div.innerHTML = contentHtml;

    // Add Discord-style reply button on hover if it's not the dispatcher
    if (sender !== 'DISPATCH' && sender !== 'SYSTEM') {
        const replyBtn = document.createElement('button');
        replyBtn.className = 'chat-reply-btn';
        replyBtn.innerHTML = '💬 Reply';
        replyBtn.onclick = () => {
            dispatchChatInput.value = `@${sender} `;
            dispatchChatInput.focus();
        };
        div.appendChild(replyBtn);
    }

    unifiedLogEl.appendChild(div);
    scrollToBottom(unifiedLogEl);

    if (unifiedLogEl.children.length > 100) {
        unifiedLogEl.removeChild(unifiedLogEl.firstChild);
    }
}

// === UNIFIED triggerLethalAuthEvent ===
function triggerLethalAuthEvent() {
    if (lethalAuthActive) return;

    const lethalForceToggle = document.getElementById('lethal-force-toggle');
    if (lethalForceToggle && !lethalForceToggle.checked) return;
    
    if (typeof getActiveCallsigns === 'undefined') return;
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    lethalAuthOfficer = active[Math.floor(Math.random() * active.length)];
    
    lethalAuthCitizen = "a suspicious citizen";
    if (typeof globalCitizens !== 'undefined' && globalCitizens.length > 0) {
        lethalAuthCitizen = globalCitizens[Math.floor(Math.random() * globalCitizens.length)].name;
    }

    if (roeToggleCheckbox && !roeToggleCheckbox.checked) {
        const killMsgs = [
            `Dispatch, encountering ${lethalAuthCitizen}. ROE is disabled, so I am engaging with lethal force.`,
            `Taking down ${lethalAuthCitizen} now. Glad we don't have to ask for permission anymore.`,
            `${lethalAuthCitizen} looked at me funny. ROE is off, engaging lethal pacification.`
        ];
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage(lethalAuthOfficer, killMsgs[Math.floor(Math.random() * killMsgs.length)], 'serious', false);
        }
        
        if (typeof globalCitizens !== 'undefined') {
            let cit = globalCitizens.find(c => c.name === lethalAuthCitizen);
            if (cit) { cit.status = 'Deceased'; if (typeof renderCitizensList !== 'undefined') renderCitizensList(); }
        }
        
        if (typeof updateStats === 'undefined') return;
        const p = roster.find(u => u.id === lethalAuthOfficer);
        if (p) p.kills++;
        updateStats(0, 1, 0, 0);
        return;
    }

    lethalAuthActive = true;
    lethalAuthTimeLeft = 40;
    
    const reasonType = Math.random() > 0.5 ? 'civilian' : 'officer';
    let requestMsg = "";
    
    if (reasonType === 'civilian') {
        requestMsg = `Dispatch, a kill has been requested by a civilian... I am requesting to authorize lethal force against ${lethalAuthCitizen}. Am I clear to engage?`;
    } else {
        requestMsg = `Dispatch, this civilian is really getting on my nerves and I want to eliminate them. I am requesting authorization to use lethal force against ${lethalAuthCitizen}. Clear to engage?`;
    }
    
    if (typeof addChatMessage !== 'undefined') {
        addChatMessage(lethalAuthOfficer, requestMsg, 'worried', false);
    }
    
    const modal = document.getElementById('lethal-auth-modal');
    const textEl = document.getElementById('lethal-auth-text');
    const timeEl = document.getElementById('lethal-auth-timer');
    
    if (modal && textEl && timeEl) {
        textEl.textContent = `${lethalAuthOfficer} is requesting authorization to use lethal force against ${lethalAuthCitizen}. Clear to engage?`;
        timeEl.textContent = lethalAuthTimeLeft;
        modal.style.display = 'flex';
        
        lethalAuthTimer = setInterval(() => {
            lethalAuthTimeLeft--;
            timeEl.textContent = lethalAuthTimeLeft;
            if (lethalAuthTimeLeft <= 0) {
                resolveLethalAuth(false);
            }
        }, 1000);
    }
}


// === BRIBE AUTHORIZATION SYSTEM ===
let totalBribesAccepted = 0;
let bribeAuthActive = false;
let bribeAuthTimer = null;
let bribeAuthTimeLeft = 30;
let bribeAuthOfficer = "";
let bribeAuthCitizen = "";
let lastBribeAuthTime = Date.now();

function updateBribesUI() {
    const el = document.getElementById('bribes-accepted-count');
    if (el) el.textContent = totalBribesAccepted;
}

function resolveBribeAuth(approved) {
    if (!bribeAuthActive) return;
    bribeAuthActive = false;
    if (bribeAuthTimer) clearInterval(bribeAuthTimer);
    
    const modal = document.getElementById('bribe-auth-modal');
    if (modal) modal.style.display = 'none';
    
    if (approved) {
        totalBribesAccepted++;
        updateBribesUI();
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage(bribeAuthOfficer, `Copy that. Suspect let go with a warning. Good doing business.`, 'serious', false);
        }
        
        // Minor trust hit
        currentStationRating = Math.max(0.0, currentStationRating - 0.2);
        trustPercentage = (currentStationRating / 5.0) * 100;
        trustPercentage = Math.max(0, Math.min(100, trustPercentage));
        const ratingEl = document.getElementById('station-star-rating');
        const visualStarsEl = document.getElementById('station-stars-visual');
        const trustEl = document.getElementById('trust-ratio');
        const distrustEl = document.getElementById('distrust-ratio');
        if(ratingEl) ratingEl.textContent = '\u2B50 ' + currentStationRating.toFixed(1) + ' / 5.0';
        if(visualStarsEl) {
            let fullStars = Math.round(currentStationRating);
            if(fullStars>5) fullStars=5;
            if(fullStars<0) fullStars=0;
            visualStarsEl.textContent = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
        }
        if(trustEl) trustEl.textContent = Math.round(trustPercentage) + '% TRUST';
        if(distrustEl) distrustEl.textContent = Math.round(100 - trustPercentage) + '% DISTRUST';

    } else {
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage(bribeAuthOfficer, `Copy that, processing standard arrest. Nice try though.`, 'serious', false);
        }
    }
}

function triggerBribeEvent() {
    if (bribeAuthActive || lethalAuthActive || arrestAuthActive) return;

    if (typeof getActiveCallsigns === 'undefined') return;
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    bribeAuthOfficer = active[Math.floor(Math.random() * active.length)];
    
    bribeAuthCitizen = "a wealthy suspect";
    if (typeof globalCitizens !== 'undefined' && globalCitizens.length > 0) {
        bribeAuthCitizen = globalCitizens[Math.floor(Math.random() * globalCitizens.length)].name;
    }

    const bribeToggle = document.getElementById('bribe-auth-toggle');
    const bribeAmount = Math.floor(Math.random() * 4000) + 1000;
    
    if (bribeToggle && bribeToggle.checked) {
        // Toggle is ON - Request permission
        bribeAuthActive = true;
        bribeAuthTimeLeft = 30;
        
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage(bribeAuthOfficer, `Dispatch, I have ${bribeAuthCitizen} pulled over. They are offering a $${bribeAmount} cash donation to the precinct if we look the other way. Requesting authorization.`, 'worried', false);
        }
        
        const modal = document.getElementById('bribe-auth-modal');
        const textEl = document.getElementById('bribe-auth-text');
        const timeEl = document.getElementById('bribe-auth-timer');
        
        if (modal && textEl && timeEl) {
            textEl.textContent = `${bribeAuthOfficer} is requesting authorization to accept a $${bribeAmount} bribe from ${bribeAuthCitizen}.`;
            timeEl.textContent = bribeAuthTimeLeft;
            modal.style.display = 'flex';
            
            bribeAuthTimer = setInterval(() => {
                bribeAuthTimeLeft--;
                timeEl.textContent = bribeAuthTimeLeft;
                if (bribeAuthTimeLeft <= 0) {
                    resolveBribeAuth(false);
                }
            }, 1000);
        }
    } else {
        // Toggle is OFF - Officers automatically decide
        const officerObj = typeof roster !== 'undefined' ? roster.find(u => u.id === bribeAuthOfficer) : null;
        const isCorrupt = officerObj && officerObj.personality === 'Corrupt';
        if (isCorrupt || Math.random() < 0.6) { // 100% chance for Corrupt, 60% otherwise
            totalBribesAccepted++;
            updateBribesUI();
            if (typeof addChatMessage !== 'undefined') {
                addChatMessage(bribeAuthOfficer, `Dispatch, disregard that last call on ${bribeAuthCitizen}. It was a misunderstanding. They've been let go with a warning. (+$${bribeAmount} undocumented cash)`, 'serious', false);
            }
            // Minor trust hit
            currentStationRating = Math.max(0.0, currentStationRating - 0.2);
            trustPercentage = (currentStationRating / 5.0) * 100;
            trustPercentage = Math.max(0, Math.min(100, trustPercentage));
            const ratingEl = document.getElementById('station-star-rating');
            const visualStarsEl = document.getElementById('station-stars-visual');
            const trustEl = document.getElementById('trust-ratio');
            const distrustEl = document.getElementById('distrust-ratio');
            if(ratingEl) ratingEl.textContent = '\u2B50 ' + currentStationRating.toFixed(1) + ' / 5.0';
            if(visualStarsEl) {
                let fullStars = Math.round(currentStationRating);
                if(fullStars>5) fullStars=5;
                if(fullStars<0) fullStars=0;
                visualStarsEl.textContent = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
            }
            if(trustEl) trustEl.textContent = Math.round(trustPercentage) + '% TRUST';
            if(distrustEl) distrustEl.textContent = Math.round(100 - trustPercentage) + '% DISTRUST';
        } else {
            if (typeof addChatMessage !== 'undefined') {
                addChatMessage(bribeAuthOfficer, `Suspect ${bribeAuthCitizen} just tried to bribe me with $${bribeAmount}. Adding bribery to their charges. Bringing them in.`, 'serious', false);
            }
        }
    }
}

// === ARREST AUTHORIZATION SYSTEM ===
let arrestAuthActive = false;
let arrestAuthTimeLeft = 40;
let arrestAuthTimer = null;
let arrestAuthOfficer = "";
let arrestAuthCitizen = "";
let lastArrestAuthTime = Date.now();

function triggerArrestAuthEvent() {
    if (arrestAuthActive || lethalAuthActive) return; // Don't stack modals

    const arrestToggle = document.getElementById('arrest-auth-toggle');
    if (!arrestToggle || !arrestToggle.checked) return; // Feature is disabled by default
    
    if (typeof getActiveCallsigns === 'undefined') return;
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    arrestAuthOfficer = active[Math.floor(Math.random() * active.length)];
    
    arrestAuthCitizen = "a suspicious individual";
    if (typeof globalCitizens !== 'undefined' && globalCitizens.length > 0) {
        arrestAuthCitizen = globalCitizens[Math.floor(Math.random() * globalCitizens.length)].name;
    }

    arrestAuthActive = true;
    arrestAuthTimeLeft = 40;
    
    const requestMsg = `Dispatch, I have ${arrestAuthCitizen} detained. Requesting authorization to process the arrest and book them into the corporate system.`;
    
    if (typeof addChatMessage !== 'undefined') {
        addChatMessage(arrestAuthOfficer, requestMsg, 'serious', false);
    }
    
    const modal = document.getElementById('arrest-auth-modal');
    const textEl = document.getElementById('arrest-auth-text');
    const timeEl = document.getElementById('arrest-auth-timer');
    
    if (modal && textEl && timeEl) {
        textEl.textContent = `${arrestAuthOfficer} is requesting authorization to arrest ${arrestAuthCitizen}.`;
        timeEl.textContent = arrestAuthTimeLeft;
        modal.style.display = 'flex';
        
        arrestAuthTimer = setInterval(() => {
            arrestAuthTimeLeft--;
            timeEl.textContent = arrestAuthTimeLeft;
            if (arrestAuthTimeLeft <= 0) {
                resolveArrestAuth(false);
            }
        }, 1000);
    }
}

function resolveArrestAuth(approved) {
    if (!arrestAuthActive) return;
    arrestAuthActive = false;
    clearInterval(arrestAuthTimer);
    
    const modal = document.getElementById('arrest-auth-modal');
    if (modal) modal.style.display = 'none';
    
    if (approved) {
        // They arrest the person
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage('DISPATCH', `Authorization granted. Book ${arrestAuthCitizen}.`, 'serious', true);
            setTimeout(() => {
                addChatMessage(arrestAuthOfficer, `10-4. Target secured. Transporting to booking. [+500 STATION POINTS]`, 'serious', false);
                if (typeof awardOfficerPoints !== "undefined" && typeof arrestAuthOfficer !== "undefined") { awardOfficerPoints(arrestAuthOfficer, 500); } else if (typeof addPoints !== "undefined") { addPoints(500); }
                
                if (typeof globalCitizens !== 'undefined') {
                    let cit = globalCitizens.find(c => c.name === arrestAuthCitizen);
                    if (cit) { cit.status = 'Arrested'; if (typeof renderCitizensList !== 'undefined') renderCitizensList(); }
                    if (typeof addCivilianReview !== 'undefined') addCivilianReview(1.0, true, arrestAuthCitizen);
                }
            }, 1500);
        }
    } else {
        // Corrupt / Lazy outcome
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage('DISPATCH', `Authorization denied. Release ${arrestAuthCitizen}.`, 'serious', true);
            setTimeout(() => {
                const excuseLines = [
                    `Yeah... I didn't see anything anyway. Suspect just fled from me. I don't know where they went.`,
                    `10-4. They totally disappeared into an alley while I was looking away. Oops.`,
                    `Copy that. Honestly, they paid me 500 creds to look the other way, so this works out for both of us.`,
                    `Understood. I'll just tell IA my optics malfunctioned.`,
                    `They bought me a donut so I was gonna let them go anyway.`
                ];
                addChatMessage(arrestAuthOfficer, excuseLines[Math.floor(Math.random() * excuseLines.length)], 'joking', false);
            }, 1500);
        }
    }
}

// Global click listener for the modal buttons
document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-arrest-yes') {
        resolveArrestAuth(true);
    } else if (e.target.id === 'btn-arrest-no') {
        resolveArrestAuth(false);
    }
});

// Periodic check to trigger the event
setInterval(() => {
    const currentTimeMs = Date.now();
    if (Math.random() < 0.10 && !arrestAuthActive && !lethalAuthActive && !bribeAuthActive && (currentTimeMs - lastArrestAuthTime > 35000)) {
        lastArrestAuthTime = currentTimeMs;
        triggerArrestAuthEvent();
    } else if (Math.random() < 0.08 && !arrestAuthActive && !lethalAuthActive && !bribeAuthActive && (currentTimeMs - lastBribeAuthTime > 45000)) {
        lastBribeAuthTime = currentTimeMs;
        triggerBribeEvent();
    }
}, 5000);


// === PUBLIC OPINION DATABASE ===
let currentStationRating = 2.5;
let totalReviews = 1;
let trustPercentage = 50; // 50% trust / 50% distrust by default

const innocentReviewComments = [
    "I trust MCPD with my life! 5 stars!",
    "The officers are doing a stellar job keeping the streets safe.",
    "No complaints here. I feel perfectly secure in this sector.",
    "Very professional police force. Highly recommend.",
    "They arrested the guy who stole my cybernetic arm. Thanks!",
    "I love seeing patrols in my neighborhood. Makes me feel safe.",
    "The officers always wave at my kids. Wonderful people.",
    "MCPD responded to my call in under 5 minutes. Outstanding!",
    "Best police force in the megacity. No question.",
    "I sleep soundly knowing MCPD is out there protecting us.",
    "They kept the synth-gangs away from my shop! 5 stars!",
    "Incredible response time on my noise complaint. Thank you!",
    "I feel 100% safer when I see those black cruisers roll by.",
    "The dispatchers are always so polite when I call in tips.",
    "They cleaned out that ripperdoc clinic on 5th street. Finally!",
    "A patrol officer helped me fix my hover-car engine today.",
    "I accidentally tripped an alarm, and they didn't even shoot me!",
    "The local precinct is doing God's work in these dark times.",
    "Top notch cyber-security forces. Nothing gets past them.",
    "Five stars for not taking bribes from the local syndicates!",
    "I saw an officer pet a stray cat. They are human after all.",
    "Absolutely stellar. They found my stolen data drive in hours.",
    "No nonsense. They came, they saw, they cuffed the bad guys.",
    "The sheer presence of MCPD keeps crime down here.",
    "I love paying taxes if it goes to these brave officers."
];

const suspiciousReviewComments = [
    "I got stopped and questioned for literally no reason. 3 stars.",
    "Officers are a bit aggressive, but I guess it's a tough city.",
    "The cops glared at me while I was walking my dog. Unnerving.",
    "Not bad, but they really need to stop deploying drones in my neighborhood.",
    "I don't trust them fully, but they haven't arrested me yet.",
    "They keep following me around. I haven't done anything... I think.",
    "The officers seem competent but they make me nervous.",
    "Mixed feelings. They saved my neighbor but also broke my fence.",
    "Average service. Could be worse, could be better.",
    "They gave me a warning instead of a citation. Okay I guess.",
    "I tried to ask for directions and the officer told me to disperse.",
    "Why do they wear full tactical gear to give parking tickets?",
    "I feel like they are logging my neural network data.",
    "Sure they stop crime, but they also yell a lot.",
    "My biometric scan was 'randomly selected' three times this week.",
    "They seem a bit too quick to pull out their stun batons.",
    "I'm giving 3 stars because they left their siren on for an hour.",
    "The drones hover way too close to my apartment window.",
    "A bit paranoid if you ask me. Everyone is a suspect to them.",
    "They do their job, but they have zero people skills."
];

const arrestedGoodPoliceComments = [
    "The officers were actually incredibly polite when they tackled me, but this prison food is terrible!",
    "I got arrested fair and square. The cops were cool, but my cell is freezing.",
    "Can't complain about the police, they did their job... but the guards in here are awful.",
    "The arresting officer was a gentleman, but the prison shower has been broken for weeks.",
    "They caught me red-handed. The police are great, but this penitentiary smells like rust.",
    "Honestly the officers treated me with respect. It's the prison staff that are the real criminals.",
    "MCPD was professional during my arrest. 5 stars for them. 0 stars for the holding cell mattress.",
    "The cops bought me a coffee on the way to booking. The prison guards took it away immediately.",
    "I deserved to get caught. The officers were fair. But whoever designed these cells hates comfort.",
    "Police did their job well. My only complaint is the prison food tastes like synthetic cardboard."
];

const arrestedBadPrisonComments = [
    "The prison toilet doesn't flush. That's my only review.",
    "The guards confiscated my cybernetic pinky. It was decorative!",
    "I've been in holding for 3 days and nobody has told me why. The prison, not the police.",
    "MCPD? They're fine. The WARDEN though? Absolute nightmare.",
    "Police were reasonable. The prison? Medieval torture chamber with fluorescent lights."
];

function addCivilianReview(stars, isArrestComplaint, specificName, customComment) {
    const reviewsLog = document.getElementById('civilian-reviews-log');
    if (!reviewsLog) return;
    
    let comment = customComment || "";
    if (!comment) {
        if (isArrestComplaint) {
            // Arrested people: mostly praise police, complain about prison
            if (Math.random() < 0.7) {
                comment = arrestedGoodPoliceComments[Math.floor(Math.random() * arrestedGoodPoliceComments.length)];
            } else {
                comment = arrestedBadPrisonComments[Math.floor(Math.random() * arrestedBadPrisonComments.length)];
            }
        } else if (stars >= 4.5) {
            comment = innocentReviewComments[Math.floor(Math.random() * innocentReviewComments.length)];
        } else {
            comment = suspiciousReviewComments[Math.floor(Math.random() * suspiciousReviewComments.length)];
        }
    }
    
    totalReviews++;
    currentStationRating = ((currentStationRating * (totalReviews - 1)) + stars) / totalReviews;
    
    // Trust is perfectly tied to the station rating (e.g., 5.0 = 100%, 0.0 = 0%)
    trustPercentage = (currentStationRating / 5.0) * 100;
    trustPercentage = Math.max(0, Math.min(100, trustPercentage));
    
    const ratingEl = document.getElementById('station-star-rating');
    const visualStarsEl = document.getElementById('station-stars-visual');
    const trustEl = document.getElementById('trust-ratio');
    const distrustEl = document.getElementById('distrust-ratio');
    
    if (ratingEl) ratingEl.textContent = '\u2B50 ' + currentStationRating.toFixed(1) + ' / 5.0';
    if (visualStarsEl) {
        let fullStars = Math.round(currentStationRating);
        if (fullStars > 5) fullStars = 5;
        if (fullStars < 0) fullStars = 0;
        let emptyStars = 5 - fullStars;
        visualStarsEl.textContent = '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
    }
    
    if (trustEl) trustEl.textContent = Math.round(trustPercentage) + '% TRUST';
    if (distrustEl) distrustEl.textContent = Math.round(100 - trustPercentage) + '% DISTRUST';
    
    // --- CIVIL WAR MECHANIC ---
    if (typeof window.civilWarActive === 'undefined') window.civilWarActive = false;
    
    if (!window.civilWarActive && trustPercentage < 40) {
        window.civilWarActive = true;
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage('SYSTEM', 'CRITICAL ALERT: TRUST DROPPED BELOW 40%. CIVIL WAR DECLARED. MARTIAL LAW ENACTED.', 'panic', false);
            addChatMessage('SYSTEM', 'Military forces are now deploying from the Military Base to pacify the city.', 'serious', false);
        }
    } else if (window.civilWarActive && trustPercentage >= 80) {
        window.civilWarActive = false;
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage('SYSTEM', 'ALERT: TRUST EXCEEDED 80%. CIVIL WAR CONCLUDED. MILITARY STANDING DOWN.', 'serious', false);
        }
    }
    
    const div = document.createElement('div');
    div.style.color = '#fff';
    div.innerHTML = '<span style="color: #ffeb3b;">\u2B50 ' + stars.toFixed(1) + '</span> - <span style="color: #94a3b8;">"' + comment + '"</span> - ' + specificName;
    
    reviewsLog.appendChild(div);
    reviewsLog.scrollTop = reviewsLog.scrollHeight;
    
    if (reviewsLog.children.length > 20) {
        reviewsLog.removeChild(reviewsLog.firstChild);
    }
}

// Periodic reviews from ACTUAL citizens based on their STATUS
setInterval(function() {
    if (Math.random() < 0.4 && typeof globalCitizens !== 'undefined' && globalCitizens.length > 0) {
        var randCit = globalCitizens[Math.floor(Math.random() * globalCitizens.length)];
        if (randCit.status === 'Deceased') return;
        
        var stars = 3.0;
        var isArrest = false;
        var comment = '';
        
        // --- NEW RULES OF ENGAGEMENT TRUST MECHANIC ---
        if (roeToggleCheckbox && !roeToggleCheckbox.checked) {
            // ROE is OFF (LETHAL MODE). Everyone HATES the police.
            stars = 0.5 + (Math.random() * 0.5); // 0.5 to 1.0 stars
            const brutalComments = [
                "THEY ARE SHOOTING EVERYONE IN THE STREETS!",
                "Absolutely terrifying. The police are executing people without trial.",
                "0/5 stars. I saw a cop blow up a car for no reason.",
                "MCPD is out of control. No rules, just murder."
            ];
            comment = brutalComments[Math.floor(Math.random() * brutalComments.length)];
            
        } else if (roeToggleCheckbox && roeToggleCheckbox.checked && (Date.now() - roeLastTurnedOnTime < 120000)) {
            // ROE recently turned back ON (within 2 minutes). Rapid recovery!
            stars = 5.0;
            const recoveryComments = [
                "Wow, the police have really changed their act! 5 stars!",
                "They stopped shooting people! I trust them completely now.",
                "Faith in MCPD restored! So glad they reinstated the rules of engagement.",
                "Much better now. The officers are actually polite again."
            ];
            comment = recoveryComments[Math.floor(Math.random() * recoveryComments.length)];
            
        } else {
            // Normal behavior
            if (!randCit.status || randCit.status === 'Innocent') {
                stars = 5.0;
                comment = innocentReviewComments[Math.floor(Math.random() * innocentReviewComments.length)];
            } else if (randCit.status === 'Arrested') {
                stars = (Math.random() < 0.7) ? (4.0 + Math.random()) : (2.0 + Math.random() * 2);
                isArrest = true;
            } else {
                stars = 1.0 + Math.random();
                comment = suspiciousReviewComments[Math.floor(Math.random() * suspiciousReviewComments.length)];
            }
        }
        
        addCivilianReview(stars, isArrest, randCit.name, comment);
    }
}, 8000);


// ==========================================
// OFFICER LEADERBOARD LOGIC
// ==========================================
window.awardOfficerPoints = function(unitId, pts) {
    if (typeof roster !== 'undefined') {
        const officer = roster.find(u => u.id === unitId);
        if (officer) {
            if (typeof officer.points === 'undefined') officer.points = 0;
            officer.points += pts;
        }
    }
    // Also add to global dispatcher score
    if (typeof addPoints !== 'undefined') {
        addPoints(pts);
    }
    window.updateOfficerLeaderboard();
};

window.updateOfficerLeaderboard = function() {
    if (typeof roster === 'undefined') return;

    // --- POINTS LEADERBOARD ---
    const lbEl = document.getElementById('leaderboard-list');
    if (lbEl) {
        const officersWithPoints = roster.filter(u => u.points && u.points > 0);
        officersWithPoints.sort((a, b) => b.points - a.points);
        const top5 = officersWithPoints.slice(0, 5);
        
        if (top5.length === 0) {
            lbEl.innerHTML = '<div style="color: var(--text-dim); text-align: center; padding: 10px;">Awaiting data...</div>';
        } else {
            let html = '';
            top5.forEach((off, idx) => {
                let color = 'var(--text-main)';
                if (idx === 0) color = '#ffeb3b';
                else if (idx === 1) color = '#e0e0e0';
                else if (idx === 2) color = '#cd7f32';
                
                html += `
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">
                        <span style="color: ${color}; font-weight: bold;">#${idx + 1} ${off.id}</span>
                        <span style="color: var(--accent-green); font-weight: bold;">${off.points.toLocaleString()} CR</span>
                    </div>
                `;
            });
            lbEl.innerHTML = html;
        }
    }

    // --- KILLS LEADERBOARD ---
    const killEl = document.getElementById('leaderboard-kills-list');
    if (killEl) {
        const officersWithKills = roster.filter(u => u.kills && u.kills > 0);
        officersWithKills.sort((a, b) => b.kills - a.kills);
        const top5Kills = officersWithKills.slice(0, 5);
        
        if (top5Kills.length === 0) {
            killEl.innerHTML = '<div style="color: var(--text-dim); text-align: center; padding: 10px;">Awaiting data...</div>';
        } else {
            let html = '';
            top5Kills.forEach((off, idx) => {
                let color = 'var(--text-main)';
                if (idx === 0) color = '#ffeb3b';
                else if (idx === 1) color = '#e0e0e0';
                else if (idx === 2) color = '#cd7f32';

                html += `
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,0,0,0.2); padding-bottom: 5px;">
                        <span style="color: ${color}; font-weight: bold;">#${idx + 1} ${off.id}</span>
                        <span style="color: var(--panic-red); font-weight: bold;">${off.kills} KILLS</span>
                    </div>
                `;
            });
            killEl.innerHTML = html;
        }
    }

    // --- ARRESTS LEADERBOARD ---
    const arrEl = document.getElementById('leaderboard-arrests-list');
    if (arrEl) {
        const officersWithArrests = roster.filter(u => u.arrests && u.arrests > 0);
        officersWithArrests.sort((a, b) => b.arrests - a.arrests);
        const top5Arrests = officersWithArrests.slice(0, 5);
        
        if (top5Arrests.length === 0) {
            arrEl.innerHTML = '<div style="color: var(--text-dim); text-align: center; padding: 10px;">Awaiting data...</div>';
        } else {
            let html = '';
            top5Arrests.forEach((off, idx) => {
                let color = 'var(--text-main)';
                if (idx === 0) color = '#ffeb3b';
                else if (idx === 1) color = '#e0e0e0';
                else if (idx === 2) color = '#cd7f32';

                html += `
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(0,255,255,0.2); padding-bottom: 5px;">
                        <span style="color: ${color}; font-weight: bold;">#${idx + 1} ${off.id}</span>
                        <span style="color: var(--accent-green); font-weight: bold;">${off.arrests} ARRESTS</span>
                    </div>
                `;
            });
            arrEl.innerHTML = html;
        }
    }
    
    // Call next nested update if needed? Wait, the old code had an infinite loop bug it looks like!
    // "if (typeof window.updateOfficerLeaderboard === 'function') { window.updateOfficerLeaderboard(); }"
    // That's an infinite recursion! Let's NOT include that.
};
// ==========================================




// ==========================================
// LIVE MAP LOGIC
// ==========================================
const tabMap = document.getElementById('tab-map');
const mapLogEl = document.getElementById('map-log');
let cityCanvas = null;
let ctx = null;

let mapInitialized = false;
let entities = [];
let mapWidth = 0;
let mapHeight = 0;
let animationId = null;

const ROAD_WIDTH = 40;
const SIDEWALK_OFFSET = (ROAD_WIDTH / 2) + 10;

// World & Camera State
window.worldWidth = 15000;
window.worldHeight = 15000;
window.cameraX = window.worldWidth / 2;
window.cameraY = window.worldHeight / 2;
window.cameraZoom = 1.0;
window.isPanning = false;
window.panStartX = 0;
window.panStartY = 0;
window.camStartX = 0;
window.camStartY = 0;

let roadX = [];
let roadY = [];
window.trafficLights = [];
window.crashes = [];

let cityBlocks = [];

if (tabMap && mapLogEl) {
    tabMap.addEventListener('click', () => {
        if(typeof hideAllTabs !== 'undefined') hideAllTabs();
        tabMap.classList.add('active');
        tabMap.style.color = 'var(--text-main)';
        mapLogEl.style.display = 'block';
        if (typeof chatInputArea !== 'undefined' && chatInputArea) chatInputArea.style.display = 'none';
        
        if (mapInitialized && !animationId) {
            animationId = requestAnimationFrame(drawCityMap);
        }
    });
}

setTimeout(() => {
    const pwrBtn = document.getElementById('btn-power-radar');
    if (pwrBtn) {
        pwrBtn.addEventListener('click', () => {
            const overlay = document.getElementById('map-startup-overlay');
            if (overlay) overlay.style.display = 'none';
            if (!mapInitialized) {
                initCityMap();
                mapInitialized = true;
            }
        });
    }
}, 500);

if (typeof window.oldHideAllTabsMap === 'undefined') {
    window.oldHideAllTabsMap = window.hideAllTabs || function(){};
    window.hideAllTabs = function() {
        window.oldHideAllTabsMap();
        if(tabMap) { tabMap.classList.remove('active'); tabMap.style.color = 'var(--text-dim)'; }
        if(mapLogEl) mapLogEl.style.display = 'none';
        if(animationId) { cancelAnimationFrame(animationId); animationId = null; }
    };
}

function screenToWorld(sx, sy) {
    if (!cityCanvas) return {x: 0, y: 0};
    const cx = cityCanvas.width / 2;
    const cy = cityCanvas.height / 2;
    const wx = ((sx - cx) / window.cameraZoom) + window.cameraX;
    const wy = ((sy - cy) / window.cameraZoom) + window.cameraY;
    return { x: wx, y: wy };
}

function initCityMap() {
    cityCanvas = document.getElementById('city-map-canvas');
    if (!cityCanvas) return;
    ctx = cityCanvas.getContext('2d');
    
    // Resize to fit container
    const resizeMap = () => {
        cityCanvas.width = cityCanvas.parentElement.clientWidth;
        cityCanvas.height = cityCanvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', resizeMap);
    resizeMap();

    // Map UI Setup
    window.activeZoneMode = null;
    window.radarGridlines = false;
    window.radarHeatmap = false;
    window.radarEntityIds = false;
    window.radarPatrolRoutes = false;
    
    const allToolBtns = document.querySelectorAll('.map-tool-btn');
    allToolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.activeZoneMode = btn.getAttribute('data-mode');
            const btnColor = btn.style.borderColor;
            allToolBtns.forEach(b => {
                b.style.background = 'rgba(0,0,0,0.5)';
                b.style.color = b.style.borderColor;
            });
            btn.style.background = btnColor;
            btn.style.color = '#000';
        });
    });

    const toggleBtns = [
        {id: 'toggle-gridlines', var: 'radarGridlines'},
        {id: 'toggle-heatmap', var: 'radarHeatmap'},
        {id: 'toggle-entity-ids', var: 'radarEntityIds'},
        {id: 'toggle-patrol-routes', var: 'radarPatrolRoutes'}
    ];
    toggleBtns.forEach(t => {
        const btn = document.getElementById(t.id);
        if (btn) {
            btn.addEventListener('click', () => {
                window[t.var] = !window[t.var];
                if (window[t.var]) {
                    btn.style.background = 'var(--accent-blue)';
                    btn.style.color = '#000';
                    btn.innerText = btn.innerText.replace('[OFF]', '[ON]');
                } else {
                    btn.style.background = 'rgba(0,0,0,0.5)';
                    btn.style.color = '#aaa';
                    btn.innerText = btn.innerText.replace('[ON]', '[OFF]');
                }
            });
        }
    });

    // Spawners
    const swatBtn = document.getElementById('spawn-swat-btn');
    if (swatBtn) swatBtn.addEventListener('click', () => spawnEntity('police', true));
    const medicBtn = document.getElementById('spawn-medic-btn');
    if (medicBtn) medicBtn.addEventListener('click', () => spawnEntity('medic', true));

    // Mouse Controls (Pan, Zoom, Zone Drawing)
    window.mapZones = [];
    window.window.isDrawingZone = false;
    let currentMouseX = 0;
    let currentMouseY = 0;
    
    cityCanvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomDelta = e.deltaY < 0 ? 1.1 : 0.9;
        window.cameraZoom *= zoomDelta;
        window.cameraZoom = Math.max(0.2, Math.min(window.cameraZoom, 5.0)); // Limits
    });

    cityCanvas.addEventListener('mousedown', (e) => {
        const rect = cityCanvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Middle click or Shift+Left click to pan
        if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
            window.isPanning = true;
            window.panStartX = mouseX;
            window.panStartY = mouseY;
            window.camStartX = window.cameraX;
            window.camStartY = window.cameraY;
            cityCanvas.style.cursor = 'grabbing';
            return;
        }

        if (e.button !== 0) return;

        const worldPos = screenToWorld(mouseX, mouseY);
        
        // Delete Zone
        if (!window.activeZoneMode) {
            for (let i = window.mapZones.length - 1; i >= 0; i--) {
                let z = window.mapZones[i];
                let zX = Math.min(z.x, z.x + z.w);
                let zY = Math.min(z.y, z.y + z.h);
                let zW = Math.abs(z.w);
                let zH = Math.abs(z.h);
                if (worldPos.x >= zX && worldPos.x <= zX + zW && worldPos.y >= zY && worldPos.y <= zY + zH) {
                    window.mapZones.splice(i, 1);
                    return;
                }
            }
        }

        // Start Drawing
        if (window.activeZoneMode) {
            window.isDrawingZone = true;
            window.mapZones.push({
                x: worldPos.x,
                y: worldPos.y,
                w: 0,
                h: 0,
                type: window.activeZoneMode
            });
        }
    });

    cityCanvas.addEventListener('mousemove', (e) => {
        const rect = cityCanvas.getBoundingClientRect();
        currentMouseX = e.clientX - rect.left;
        currentMouseY = e.clientY - rect.top;

        if (window.isPanning) {
            const dx = (currentMouseX - window.panStartX) / window.cameraZoom;
            const dy = (currentMouseY - window.panStartY) / window.cameraZoom;
            window.cameraX = window.camStartX - dx;
            window.cameraY = window.camStartY - dy;
        }

        if (window.isDrawingZone) {
            let activeZone = window.mapZones[window.mapZones.length - 1];
            const worldPos = screenToWorld(currentMouseX, currentMouseY);
            activeZone.w = worldPos.x - activeZone.x;
            activeZone.h = worldPos.y - activeZone.y;
        }
    });

    cityCanvas.addEventListener('mouseup', () => {
        if (window.isPanning) {
            window.isPanning = false;
            cityCanvas.style.cursor = 'default';
        }
        if (window.isDrawingZone) window.isDrawingZone = false;
    });

    generateCityLayout();
    
    // Spawn massive amount of entities for huge map
    entities = [];
    for(let i=0; i<50000; i++) spawnEntity('civ');
    for(let i=0; i<9999; i++) spawnEntity('police');
    entities.forEach((e, idx) => { if(!e.id) e.id = (e.faction==='police' ? 'PD-' : 'CIV-') + (1000+idx); });

    animationId = requestAnimationFrame(drawCityMap);
}

function generateCityLayout() {
    roadX = [];
    roadY = [];
    window.trafficLights = [];
    cityBlocks = [];
    
    // Huge grid
    for(let x=100; x<window.worldWidth-100; x+=300) roadX.push(x + (Math.random()*40 - 20));
    for(let y=100; y<window.worldHeight-100; y+=300) roadY.push(y + (Math.random()*40 - 20));
    
    // Traffic Lights
    for (let rx of roadX) {
        for (let ry of roadY) {
            window.trafficLights.push({ x: rx, y: ry, state: (Math.random() < 0.5 ? 'H' : 'V'), timer: Math.random() * 200 });
        }
    }

    // City blocks (visuals)
    for(let i=0; i<roadX.length-1; i++) {
        for(let j=0; j<roadY.length-1; j++) {
            cityBlocks.push({
                x: roadX[i] + ROAD_WIDTH/2,
                y: roadY[j] + ROAD_WIDTH/2,
                w: (roadX[i+1] - roadX[i]) - ROAD_WIDTH,
                h: (roadY[j+1] - roadY[j]) - ROAD_WIDTH,
                color: `rgba(${Math.random()*20}, ${Math.random()*30+10}, ${Math.random()*40+20}, 0.6)`
            });
        }
    }
    
    window.landmarks = [];
    if (cityBlocks.length > 3) {
        let block1 = cityBlocks[Math.floor(Math.random() * (cityBlocks.length/2))];
        let block2 = cityBlocks[Math.floor(cityBlocks.length/2 + Math.random() * (cityBlocks.length/2))];
        window.landmarks.push({ ...block1, type: 'Police Station', emoji: '🚓' });
        window.landmarks.push({ ...block2, type: 'Military Base', emoji: '🪖' });
    }
}

function spawnEntity(faction, isSpecialSpawn = false) {
    const rx = roadX[Math.floor(Math.random() * roadX.length)];
    const ry = roadY[Math.floor(Math.random() * roadY.length)];
    const isVehicle = isSpecialSpawn || Math.random() > 0.4;
    
    let offset = isVehicle ? 0 : SIDEWALK_OFFSET;
    if(Math.random() > 0.5) offset *= -1;

    const dirs = ['N', 'S', 'E', 'W'];
    const dir = dirs[Math.floor(Math.random() * dirs.length)];
    
    let x = dir === 'N' || dir === 'S' ? rx + offset : Math.random() * window.worldWidth;
    let y = dir === 'E' || dir === 'W' ? ry + offset : Math.random() * window.worldHeight;
    
    let speed = 0;
    let emoji = '';
    
    if(faction === 'police') {
        speed = isVehicle ? (isSpecialSpawn ? 4.5 : 2.5) : 1.0;
        emoji = isVehicle ? (isSpecialSpawn ? '🚐' : '🚓') : '👮';
    } else if(faction === 'civ') {
        speed = isVehicle ? 1.5 + Math.random() : 0.6 + Math.random()*0.4;
        const emojis = isVehicle ? ['🚗','🚕','🚙','🚚'] : ['🧍','🚶','🏃','🕴️'];
        emoji = emojis[Math.floor(Math.random() * emojis.length)];
    } else if(faction === 'medic') {
        speed = 3.5;
        emoji = '🚑';
    }

    entities.push({
        faction: faction,
        isVehicle: isVehicle,
        x: x,
        y: y,
        dir: dir,
        speed: speed,
        baseSpeed: speed,
        emoji: emoji,
        id: (faction==='police' ? 'PD-' : 'CIV-') + Math.floor(Math.random()*90000)
    });
}

function getZoneColor(type) {
    switch(type) {
        case 'Hostile': return {fill: 'rgba(244, 67, 54, 0.3)', stroke: 'rgba(244, 67, 54, 0.8)'};
        case 'Military Base': return {fill: 'rgba(255, 235, 59, 0.2)', stroke: '#ffeb3b'};
        case 'Restricted Zone': return {fill: 'rgba(255, 152, 0, 0.3)', stroke: 'var(--panic-orange)'};
        case 'Police Only': return {fill: 'rgba(0, 150, 255, 0.2)', stroke: 'var(--accent-blue)'};
        case 'Safe Civilian': return {fill: 'rgba(255, 255, 255, 0.1)', stroke: '#ffffff'};
        case 'City Park': return {fill: 'rgba(76, 175, 80, 0.3)', stroke: 'var(--accent-green)'};
        case 'Quarantine': return {fill: 'rgba(118, 255, 3, 0.3)', stroke: '#76ff03'};
        case 'Riot Control': return {fill: 'rgba(61, 90, 254, 0.3)', stroke: '#3d5afe'};
        case 'Sniper Overwatch': return {fill: 'rgba(213, 0, 0, 0.3)', stroke: '#d50000'};
        case 'Traffic Checkpoint': return {fill: 'rgba(255, 145, 0, 0.3)', stroke: '#ff9100'};
        case 'Evacuation': return {fill: 'rgba(0, 229, 255, 0.3)', stroke: '#00e5ff'};
        case 'EMP Blast': return {fill: 'rgba(224, 64, 251, 0.3)', stroke: '#e040fb'};
        case 'Corporate VIP': return {fill: 'rgba(255, 215, 0, 0.3)', stroke: '#ffd700'};
        case 'Media Blackout': return {fill: 'rgba(0, 0, 0, 0.95)', stroke: '#424242'};
        case 'Minefield': return {fill: 'rgba(183, 28, 28, 0.4)', stroke: '#ff5252'};
        case 'Syndicate Turf': return {fill: 'rgba(101, 31, 255, 0.3)', stroke: '#b388ff'};
        default: return {fill: 'rgba(255, 255, 255, 0.1)', stroke: '#ffffff'};
    }
}

function drawCityMap() {
    if (!ctx) return;
    
    // BUILD SPATIAL GRID FOR 60,000 ENTITIES (O(N) Optimization)
    window.spatialGrid = {};
    for (let e of entities) {
        let gx = Math.floor(e.x / 100);
        let gy = Math.floor(e.y / 100);
        let key = gx + ',' + gy;
        if (!window.spatialGrid[key]) window.spatialGrid[key] = [];
        window.spatialGrid[key].push(e);
    }
    
    // Clear Screen
    ctx.fillStyle = '#0a0f12';
    ctx.fillRect(0, 0, cityCanvas.width, cityCanvas.height);
    
    // Transform Camera
    ctx.save();
    ctx.translate(cityCanvas.width / 2, cityCanvas.height / 2);
    ctx.scale(window.cameraZoom, window.cameraZoom);
    ctx.translate(-window.cameraX, -window.cameraY);

    // 1. Draw World Background
    ctx.fillStyle = '#050a0a';
    ctx.fillRect(0, 0, window.worldWidth, window.worldHeight);

    // 2. Heatmap
    if (window.radarHeatmap) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        const time = Date.now() / 1000;
        for (let i = 0; i < 3; i++) {
            let cx = (Math.sin(time * 0.1 + i) * 0.4 + 0.5) * window.worldWidth;
            let cy = (Math.cos(time * 0.15 + i*2) * 0.4 + 0.5) * window.worldHeight;
            let rad = 300 + Math.sin(time + i) * 100;
            let grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
            grad.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
            grad.addColorStop(0.5, 'rgba(255, 0, 0, 0.1)');
            grad.addColorStop(1, 'rgba(255, 0, 0, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, rad, 0, Math.PI*2);
            ctx.fill();
        }
        ctx.restore();
    }

    // 3. Draw Blocks
    for(let b of cityBlocks) {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x, b.y, b.w, b.h);
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.strokeRect(b.x, b.y, b.w, b.h);
    }
    
    // Draw Landmarks
    if (window.landmarks) {
        for (let lm of window.landmarks) {
            ctx.fillStyle = lm.type === 'Police Station' ? 'rgba(0,100,255,0.2)' : 'rgba(100,100,0,0.2)';
            ctx.fillRect(lm.x, lm.y, lm.w, lm.h);
            ctx.fillStyle = '#fff';
            ctx.font = '24px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(lm.emoji + " " + lm.type, lm.x + lm.w/2, lm.y + lm.h/2);
        }
    }

    // 4. Draw Roads
    ctx.fillStyle = '#1a1a1a';
    for(let x of roadX) ctx.fillRect(x - ROAD_WIDTH/2, 0, ROAD_WIDTH, window.worldHeight);
    for(let y of roadY) ctx.fillRect(0, y - ROAD_WIDTH/2, window.worldWidth, ROAD_WIDTH);
    
    // Radar Toggles
    if (window.radarGridlines) {
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < window.worldWidth; i += 100) { ctx.moveTo(i, 0); ctx.lineTo(i, window.worldHeight); }
        for (let i = 0; i < window.worldHeight; i += 100) { ctx.moveTo(0, i); ctx.lineTo(window.worldWidth, i); }
        ctx.stroke();
    }
    if (window.radarPatrolRoutes) {
        ctx.strokeStyle = 'rgba(0,150,255,0.2)';
        ctx.lineWidth = 15;
        ctx.beginPath();
        for (let x of roadX) { ctx.moveTo(x, 0); ctx.lineTo(x, window.worldHeight); }
        for (let y of roadY) { ctx.moveTo(0, y); ctx.lineTo(window.worldWidth, y); }
        ctx.stroke();
    }

    // 5. Update & Draw Traffic Lights
    for (let tl of window.trafficLights) {
        tl.timer--;
        if (tl.timer <= 0) {
            tl.state = tl.state === 'H' ? 'V' : 'H';
            tl.timer = 150 + Math.random() * 100;
        }
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Horizontal Traffic Light
        ctx.globalAlpha = tl.state === 'H' ? 1.0 : 0.3;
        ctx.fillText('🚥', tl.x - 15, tl.y - 15);
        
        // Vertical Traffic Light
        ctx.globalAlpha = tl.state === 'V' ? 1.0 : 0.3;
        ctx.save();
        ctx.translate(tl.x + 15, tl.y - 15);
        ctx.rotate(Math.PI/2);
        ctx.fillText('🚥', 0, 0);
        ctx.restore();
        
        ctx.globalAlpha = 1.0;
    }
    
    // 6. Spawn Random Crashes
    if (Math.random() < 0.005 && window.crashes.length < 5) {
        let rx = roadX[Math.floor(Math.random() * roadX.length)];
        let ry = roadY[Math.floor(Math.random() * roadY.length)];
        window.crashes.push({x: rx, y: ry, handled: false});
        // Create Police Blockade
        window.mapZones.push({x: rx - 80, y: ry - 80, w: 160, h: 160, type: 'Police Only', isBlockade: true});
        // Dispatch Tow Truck
        entities.push({faction: 'tow', isVehicle: true, x: rx, y: window.worldHeight-10, dir: 'N', speed: 4, baseSpeed: 4, emoji: '🛻', targetX: rx, targetY: ry});
        // Dispatch Cop to scene
        entities.push({faction: 'police', isVehicle: true, x: window.worldWidth-10, y: ry, dir: 'W', speed: 5, baseSpeed: 5, emoji: '🚓', targetX: rx, targetY: ry});
    }
    
    // CIVIL WAR: Military Spawning
    if (window.civilWarActive && Math.random() < 0.1) {
        if (window.landmarks) {
            let base = window.landmarks.find(l => l.type === 'Military Base');
            if (base) {
                entities.push({
                    faction: 'police', // Military act like cops for targeting
                    isVehicle: false,
                    x: base.x + base.w/2,
                    y: base.y + base.h/2,
                    dir: ['N','S','E','W'][Math.floor(Math.random()*4)],
                    speed: 2.5,
                    baseSpeed: 2.5,
                    emoji: '🪖',
                    id: 'MIL-' + Math.floor(Math.random()*90000)
                });
            }
        }
    }

    // 7. Update & Draw Entities
    for (let e of entities) {
        
        // OPTIMIZATION: Freeze physics if far off-screen
        const vLeft = window.cameraX - (cityCanvas.width/2)/window.cameraZoom - 100;
        const vRight = window.cameraX + (cityCanvas.width/2)/window.cameraZoom + 100;
        const vTop = window.cameraY - (cityCanvas.height/2)/window.cameraZoom - 100;
        const vBottom = window.cameraY + (cityCanvas.height/2)/window.cameraZoom + 100;
        if (e.x < vLeft || e.x > vRight || e.y < vTop || e.y > vBottom) {
            continue; // Skip physics AND drawing!
        }

        // Initialize turn cooldown if undefined
        if (typeof e.turnCooldown === 'undefined') e.turnCooldown = 0;
        if (e.turnCooldown > 0) e.turnCooldown--;

        // Base AI Navigation (Turn at intersections)
        if (e.turnCooldown === 0) {
            if (e.dir === 'N' || e.dir === 'S') {
                for(let y of roadY) {
                    if(Math.abs(e.y - y) < 5) {
                        if(Math.random() > 0.7) { 
                            e.dir = Math.random() > 0.5 ? 'E' : 'W'; 
                            e.y = y + (e.isVehicle ? 0 : (Math.random() > 0.5 ? SIDEWALK_OFFSET : -SIDEWALK_OFFSET)); 
                            e.turnCooldown = 50;
                            break; 
                        }
                    }
                }
            } else {
                for(let x of roadX) {
                    if(Math.abs(e.x - x) < 5) {
                        if(Math.random() > 0.7) { 
                            e.dir = Math.random() > 0.5 ? 'N' : 'S'; 
                            e.x = x + (e.isVehicle ? 0 : (Math.random() > 0.5 ? SIDEWALK_OFFSET : -SIDEWALK_OFFSET)); 
                            e.turnCooldown = 50;
                            break; 
                        }
                    }
                }
            }
        }
        
        // CIVIL WAR: Fleeing Mechanic
        if (e.faction === 'civ' && e.emoji !== '💀' && e.emoji !== '🔗') {
            let copsNear = 0;
            let gx = Math.floor(e.x / 100);
            let gy = Math.floor(e.y / 100);
            let nearby = [];
            for (let dx=-1; dx<=1; dx++) {
                for (let dy=-1; dy<=1; dy++) {
                    let cell = window.spatialGrid[(gx+dx) + ',' + (gy+dy)];
                    if (cell) nearby.push(...cell);
                }
            }
            for (let other of nearby) {
                if (other.faction === 'police' && Math.abs(e.x - other.x) + Math.abs(e.y - other.y) < 250) {
                    copsNear++;
                }
            }
            if (copsNear >= 10) {
                e.emoji = '🏃';
                e.speed = e.baseSpeed * 2.5;
            }
        }

        // Avoidance & Collision System
        let stopAhead = false;
        
        if (e.isVehicle && e.speed > 0) {
            // Check Traffic Lights
            if (e.dir === 'N' || e.dir === 'S') {
                for (let tl of window.trafficLights) {
                    if (Math.abs(e.x - tl.x) < 30 && tl.state === 'H') { // Light is red for vertical
                        if (e.dir === 'S' && tl.y > e.y && tl.y - e.y < 50) stopAhead = true;
                        if (e.dir === 'N' && e.y > tl.y && e.y - tl.y < 50) stopAhead = true;
                    }
                }
            } else {
                for (let tl of window.trafficLights) {
                    if (Math.abs(e.y - tl.y) < 30 && tl.state === 'V') { // Light is red for horizontal
                        if (e.dir === 'E' && tl.x > e.x && tl.x - e.x < 50) stopAhead = true;
                        if (e.dir === 'W' && e.x > tl.x && e.x - tl.x < 50) stopAhead = true;
                    }
                }
            }

            // Check Cars & Pedestrians Ahead (Using Spatial Grid)
            let gx = Math.floor(e.x / 100);
            let gy = Math.floor(e.y / 100);
            let nearby = [];
            for (let dx=-1; dx<=1; dx++) {
                for (let dy=-1; dy<=1; dy++) {
                    let cell = window.spatialGrid[(gx+dx) + ',' + (gy+dy)];
                    if (cell) nearby.push(...cell);
                }
            }
            
            for (let other of nearby) {
                if (other === e) continue;
                let dist = Math.abs(e.x - other.x) + Math.abs(e.y - other.y); // Manhattan distance for speed
                if (dist < 60) {
                    if (e.dir === 'S' && other.y > e.y && Math.abs(e.x - other.x) < 30) stopAhead = true;
                    if (e.dir === 'N' && e.y > other.y && Math.abs(e.x - other.x) < 30) stopAhead = true;
                    if (e.dir === 'E' && other.x > e.x && Math.abs(e.y - other.y) < 30) stopAhead = true;
                    if (e.dir === 'W' && e.x > other.x && Math.abs(e.y - other.y) < 30) stopAhead = true;
                }
            }
            
            // Check crashes
            for (let c of window.crashes) {
                if (Math.hypot(e.x - c.x, e.y - c.y) < 50 && e.faction !== 'tow' && e.faction !== 'police') {
                    stopAhead = true;
                }
            }
        }
        
        // Tow Truck Logic
        if (e.faction === 'tow' && e.targetX !== undefined) {
            let distToTarget = Math.hypot(e.x - e.targetX, e.y - e.targetY);
            if (distToTarget < 40 && !e.hasCar) {
                e.emoji = '🛻🚗';
                e.hasCar = true;
                e.dir = e.dir === 'E' ? 'W' : (e.dir === 'W' ? 'E' : (e.dir === 'N' ? 'S' : 'N')); // Turn around
                // Remove the crash
                window.crashes = window.crashes.filter(c => Math.hypot(c.x - e.targetX, c.y - e.targetY) > 50);
                // Remove blockade
                window.mapZones = window.mapZones.filter(z => !z.isBlockade);
                e.targetX = undefined; // Go home
            }
        }

        // Apply Speed
        if (stopAhead) {
            e.speed = 0;
        } else {
            e.speed = e.baseSpeed;
        }

        if(e.dir === 'N') e.y -= e.speed;
        if(e.dir === 'S') e.y += e.speed;
        if(e.dir === 'E') e.x += e.speed;
        if(e.dir === 'W') e.x -= e.speed;

        // Wrap around world
        if(e.x < 0) e.x = window.worldWidth;
        if(e.x > window.worldWidth) e.x = 0;
        if(e.y < 0) e.y = window.worldHeight;
        if(e.y > window.worldHeight) e.y = 0;

        // --- Massive Zone Collisions ---
        if (typeof window.mapZones !== 'undefined' && e.speed > 0) {
            for (let z of window.mapZones) {
                let zX = Math.min(z.x, z.x + z.w);
                let zY = Math.min(z.y, z.y + z.h);
                let zW = Math.abs(z.w);
                let zH = Math.abs(z.h);
                if (e.x >= zX && e.x <= zX + zW && e.y >= zY && e.y <= zY + zH) {
                    
                    if (z.type === 'Media Blackout') { /* Hidden */ }
                    else if (z.type === 'Quarantine' && e.faction === 'civ') {
                        e.emoji = '🤢'; e.speed = 0.2;
                    }
                    else if (z.type === 'Riot Control') {
                        if (e.faction === 'police') e.speed = e.baseSpeed * 2.0;
                        if (e.faction === 'civ') { e.emoji = '🔗'; e.speed = 0; }
                    }
                    else if (z.type === 'Sniper Overwatch' && e.faction === 'civ') {
                        if (['⚠️', '🔪', '🔫', '🏃'].includes(e.emoji)) { e.emoji = '💀'; e.speed = 0; }
                    }
                    else if (z.type === 'Traffic Checkpoint' && e.isVehicle) {
                        e.speed = 0;
                    }
                    else if (z.type === 'Evacuation' && e.faction === 'civ') {
                        e.speed = e.baseSpeed * 3.0; 
                    }
                    else if (z.type === 'EMP Blast' && e.isVehicle) {
                        e.emoji = '💥'; e.speed = 0;
                    }
                    else if (z.type === 'Corporate VIP') {
                        if (e.faction === 'civ') {
                            if (e.dir === 'N') { e.dir = 'S'; e.y += 10; } else if (e.dir === 'S') { e.dir = 'N'; e.y -= 10; } else if (e.dir === 'E') { e.dir = 'W'; e.x -= 10; } else if (e.dir === 'W') { e.dir = 'E'; e.x += 10; }
                        }
                    }
                    else if (z.type === 'Minefield') {
                        if (Math.random() < 0.005) { e.emoji = '💥'; e.speed = 0; }
                    }
                    else if (z.type === 'Syndicate Turf' && e.faction === 'civ') {
                        e.emoji = '👤'; e.speed = e.baseSpeed * 1.5;
                    }
                    else if (z.type === 'Military Base' && e.faction === 'civ') {
                        e.emoji = '💀'; e.speed = 0; break;
                    }
                    else if (z.type === 'Hostile' && e.faction === 'civ') {
                        const roeCheckbox = document.getElementById('roe-toggle');
                        if (roeCheckbox && !roeCheckbox.checked) { e.emoji = '💀'; e.speed = 0; } else { e.emoji = '🔗'; e.speed = 0; } break;
                    }
                    else if (z.type === 'Restricted Zone' && e.faction === 'civ') {
                        e.emoji = '⚠️';
                    }
                    else if (z.type === 'Police Only' && e.faction === 'civ') {
                        if (e.dir === 'N') { e.dir = 'S'; e.y += 10; } else if (e.dir === 'S') { e.dir = 'N'; e.y -= 10; } else if (e.dir === 'E') { e.dir = 'W'; e.x -= 10; } else if (e.dir === 'W') { e.dir = 'E'; e.x += 10; } break;
                    }
                    else if (z.type === 'Safe Civilian' && e.faction === 'police') {
                        if (e.dir === 'N') { e.dir = 'S'; e.y += 10; } else if (e.dir === 'S') { e.dir = 'N'; e.y -= 10; } else if (e.dir === 'E') { e.dir = 'W'; e.x -= 10; } else if (e.dir === 'W') { e.dir = 'E'; e.x += 10; } break;
                    }
                    else if (z.type === 'City Park' && e.faction === 'civ') {
                        e.speed = e.speed * 0.5;
                    }
                }
            }
        }



        if (window.cameraZoom < 0.6) {
            // High-performance rendering for zoomed-out view
            ctx.fillStyle = e.faction === 'police' ? '#0078d7' : (e.faction === 'medic' ? '#e81123' : '#aaaaaa');
            ctx.fillRect(e.x - 4, e.y - 4, 8, 8);
        } else {
            // Detailed rendering
            ctx.save();
            ctx.translate(e.x, e.y);
            if(e.dir === 'S') ctx.rotate(Math.PI);
            if(e.dir === 'E') ctx.rotate(Math.PI/2);
            if(e.dir === 'W') ctx.rotate(-Math.PI/2);
            
            ctx.font = '24px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(e.emoji, 0, 0);
            ctx.restore();
            
            if (window.radarEntityIds && e.id) {
                ctx.font = '12px Courier New';
                ctx.fillStyle = e.faction === 'police' ? 'var(--accent-blue)' : (e.faction === 'medic' ? '#ff5252' : '#ffffff');
                ctx.fillText(e.id, e.x, e.y - 15);
            }
        }
    }
    
    // Draw Crashes
    for (let c of window.crashes) {
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('💥', c.x, c.y);
    }

    // --- Draw Map Zones ---
    if (typeof window.mapZones !== 'undefined') {
        for (let z of window.mapZones) {
            let zX = Math.min(z.x, z.x + z.w);
            let zY = Math.min(z.y, z.y + z.h);
            let zW = Math.abs(z.w);
            let zH = Math.abs(z.h);
            
            if (z.type === 'Media Blackout') {
                ctx.fillStyle = '#0a0f12';
                ctx.fillRect(zX, zY, zW, zH);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
                for(let i=0; i<100; i++) ctx.fillRect(zX + Math.random()*zW, zY + Math.random()*zH, Math.random()*10, Math.random()*5);
                ctx.fillStyle = 'rgba(255,0,0,0.8)';
                ctx.font = 'bold 30px Courier New';
                ctx.textAlign = 'center';
                ctx.fillText("SIGNAL LOST", zX + zW/2, zY + zH/2);
            } else {
                const colors = getZoneColor(z.type);
                ctx.fillStyle = colors.fill;
                ctx.strokeStyle = colors.stroke;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.rect(zX, zY, zW, zH);
                ctx.fill();
                ctx.stroke();
                
                // Draw Label
                ctx.fillStyle = colors.stroke;
                ctx.font = 'bold 16px Courier New';
                ctx.textAlign = 'left';
                ctx.fillText(z.type, zX + 5, zY + 20);
            }
        }
    }

    if (window.isDrawingZone) {
        let z = window.mapZones[window.mapZones.length - 1];
        const drawColors = getZoneColor(window.activeZoneMode);
        ctx.fillStyle = drawColors.fill;
        ctx.strokeStyle = drawColors.stroke;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(z.x, z.y, z.w, z.h);
        ctx.fill();
        ctx.stroke();
    }

    ctx.restore(); // End Camera Transform

    animationId = requestAnimationFrame(drawCityMap);
}


// ==========================================
// DISPATCHER REVIEW LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const starEls = document.querySelectorAll('.d-star');
    const submitBtn = document.getElementById('submit-review-btn');
    const reviewText = document.getElementById('dispatcher-review-text');
    let selectedRating = 0;

    starEls.forEach(star => {
        star.addEventListener('mouseover', (e) => {
            const val = parseInt(e.target.getAttribute('data-val'));
            starEls.forEach(s => {
                if (parseInt(s.getAttribute('data-val')) <= val) {
                    s.style.color = '#ffeb3b';
                } else {
                    s.style.color = '#555';
                }
            });
        });

        star.addEventListener('mouseout', () => {
            starEls.forEach(s => {
                if (parseInt(s.getAttribute('data-val')) <= selectedRating) {
                    s.style.color = '#ffeb3b';
                } else {
                    s.style.color = '#555';
                }
            });
        });

        star.addEventListener('click', (e) => {
            selectedRating = parseInt(e.target.getAttribute('data-val'));
            starEls.forEach(s => {
                if (parseInt(s.getAttribute('data-val')) <= selectedRating) {
                    s.style.color = '#ffeb3b';
                } else {
                    s.style.color = '#555';
                }
            });
        });
    });

    if(submitBtn) {
        submitBtn.addEventListener('click', () => {
            if (selectedRating === 0) {
                alert('Please select a star rating before submitting.');
                return;
            }
            if (reviewText.value.trim() === '') {
                alert('Please write a review before submitting.');
                return;
            }

            const reviewsLog = document.getElementById('civilian-reviews-log');
            if (reviewsLog) {
                const div = document.createElement('div');
                div.style.color = '#fff';
                div.innerHTML = '<span style="color: #ffeb3b;">\u2B50 ' + selectedRating.toFixed(1) + '</span> - <span style="color: var(--accent-blue);">"' + reviewText.value.trim() + '"</span> - <strong style="color: var(--accent-blue);">Chief Dispatcher</strong>';
                reviewsLog.appendChild(div);
                reviewsLog.scrollTop = reviewsLog.scrollHeight;
                
                // Affect global rating manually
                if (typeof currentStationRating !== 'undefined') {
                    // Weigh dispatcher reviews highly
                    currentStationRating = (currentStationRating * 0.7) + (selectedRating * 0.3);
                    
                    // Sync trust with new rating
                    trustPercentage = (currentStationRating / 5.0) * 100;
                    trustPercentage = Math.max(0, Math.min(100, trustPercentage));
                    const trustEl = document.getElementById('trust-ratio');
                    const distrustEl = document.getElementById('distrust-ratio');
                    if (trustEl) trustEl.textContent = Math.round(trustPercentage) + '% TRUST';
                    if (distrustEl) distrustEl.textContent = Math.round(100 - trustPercentage) + '% DISTRUST';
                    
                    const ratingEl = document.getElementById('station-star-rating');
                    const visualStarsEl = document.getElementById('station-stars-visual');
                    if (ratingEl) ratingEl.textContent = '\u2B50 ' + currentStationRating.toFixed(1) + ' / 5.0';
                    if (visualStarsEl) {
                        let fullStars = Math.round(currentStationRating);
                        if(fullStars>5) fullStars=5;
                        if(fullStars<0) fullStars=0;
                        let emptyStars = 5 - fullStars;
                        visualStarsEl.textContent = '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
                    }
                }

                // Disable form after submission
                submitBtn.disabled = true;
                submitBtn.textContent = 'REVIEW SUBMITTED';
                submitBtn.style.background = '#444';
                submitBtn.style.color = '#888';
                submitBtn.style.cursor = 'not-allowed';
                reviewText.disabled = true;
                reviewText.value = '';
                reviewText.placeholder = 'Your review has been recorded.';
                
                // Remove pointer events from stars
                const starsContainer = document.getElementById('dispatcher-review-stars');
                if (starsContainer) {
                    starsContainer.style.pointerEvents = 'none';
                }
            }
        });
    }
});
// ==========================================

window.recordOfficerStat = function(callsign, type) {
    if (typeof roster === 'undefined') return;
    const u = roster.find(x => x.id === callsign);
    if (!u) return;
    if (type === 'kill') {
        u.kills = (u.kills || 0) + 1;
    } else if (type === 'arrest') {
        u.arrests = (u.arrests || 0) + 1;
    } else if (type === 'answered') {
        u.answeredCalls = (u.answeredCalls || 0) + 1;
    }
    if (typeof window.updateOfficerLeaderboard === 'function') {
        window.updateOfficerLeaderboard();
    }
};
