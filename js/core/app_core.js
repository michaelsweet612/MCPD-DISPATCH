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
        if (tabWanted) { tabWanted.classList.remove('active'); tabWanted.style.color = 'var(--text-dim)';
    if (tabItSupport) { tabItSupport.classList.remove('active'); tabItSupport.style.color = 'var(--text-dim)'; } }
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
          
          if (document.getElementById('tab-stock')) { document.getElementById('tab-stock').classList.remove('active'); document.getElementById('tab-stock').style.color = 'var(--text-dim)'; }
          if (document.getElementById('stock-log')) document.getElementById('stock-log').style.display = 'none';
          if (document.getElementById('tab-map')) { document.getElementById('tab-map').classList.remove('active'); document.getElementById('tab-map').style.color = 'var(--text-dim)'; }
          if (document.getElementById('map-log')) document.getElementById('map-log').style.display = 'none';
        
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
        'Trigger-Happy': 10
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
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "The Tippy Top Tower", desc: "A highly agitated civilian is aggressively trying to sell 'real human emotions' stored in zip-lock bags.", group: "Confused Tourists" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "Sector 8 Elite Suites", desc: "Individual pulled the fire alarm because the vending machine wouldn't accept their illegal cyber-credits.", group: "Hotel Guests" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 7 Residential", desc: "Individual is blasting retro 1990s dial-up modem sounds from a boombox.", group: "Cyber-Junkies" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Sector 7 Residential", desc: "Suspect is aggressively trying to sell 'real human emotions' stored in zip-lock bags.", group: "Hotel Guests" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Sector 9 Rocket Strip", desc: "Someone hacked the holographic billboards to display their ex's unread text messages.", group: "Hotel Guests" },
    { title: "10-31: Suspicious Behavior", priority: "medium", location: "Sector 8 Elite Suites", desc: "Suspect is aggressively trying to sell 'real human emotions' stored in zip-lock bags.", group: "Corporate Drones" },
    { title: "10-50: Bizarre Traffic Incident", priority: "medium", location: "Random Void Location", desc: "A hover-taxi has become sentient and refuses to let its passengers leave until they rate it 5 stars.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "low", location: "Sector 3 Gamma Slums", desc: "Group of individuals attempting to microwave a quantum battery. Imminent localized singularity possible.", group: "Confused Tourists" },
    { title: "10-50: Traffic Stop", priority: "low", location: "Sector 9 Rocket Strip", desc: "Pulled over a vehicle being driven by three dogs stacked in a trench coat.", group: "Local Vagrants" },
    { title: "10-50: Traffic Stop", priority: "low", location: "Sector 8 Elite Suites", desc: "Pulled over a vehicle being driven by three dogs stacked in a trench coat.", group: "Cyber-Junkies" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "Random Void Location", desc: "Reports of a synchronized flash mob of rogue cleaning bots aggressively polishing the sidewalks in Random Void Location.", group: "Hotel Guests" },
    { title: "10-14: Unusual Disturbance", priority: "high", location: "Sector 5 Industrial", desc: "Reports of a synchronized flash mob of rogue cleaning bots aggressively polishing the sidewalks in Sector 5 Industrial.", group: "Rogue AI" },
    { title: "10-50: Traffic Stop", priority: "medium", location: "Sector 8 Elite Suites", desc: "Pulled over a vehicle being driven by three dogs stacked in a trench coat.", group: "Hotel Guests" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 1 City Center", desc: "Individual is blasting retro 1990s dial-up modem sounds from a boombox.", group: "Rogue AI" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is aggressively trying to sell 'real human emotions' stored in zip-lock bags.", group: "Hotel Guests" },
    { title: "10-50: Traffic Stop", priority: "medium", location: "Sector 9 Rocket Strip", desc: "Pulled over a vehicle being driven by three dogs stacked in a trench coat.", group: "Corporate Drones" },
    { title: "10-54: Livestock on Highway", priority: "medium", location: "Sector 7 Residential", desc: "A highly agitated civilian is attempting to ride a genetically modified ostrich down the Sector 7 Residential main corridor.", group: "Underground Syndicate" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 2 Financial District", desc: "Individual is blasting retro 1990s dial-up modem sounds from a boombox.", group: "Corporate Drones" },
    { title: "10-14: Fake Hotel Alarm", priority: "low", location: "The Tippy Top Tower", desc: "Individual pulled the fire alarm because the vending machine wouldn't accept their illegal cyber-credits.", group: "Local Vagrants" },
    { title: "10-50: Traffic Stop", priority: "low", location: "Random Void Location", desc: "Pulled over a vehicle being driven by three dogs stacked in a trench coat.", group: "Hotel Guests" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "Sector 1 City Center", desc: "Suspect is aggressively trying to sell 'real human emotions' stored in zip-lock bags.", group: "Hotel Guests" },
    { title: "10-30: Complete Confusion", priority: "medium", location: "Grand TBMG Hotel", desc: "Group of individuals attempting to microwave a quantum battery. Imminent localized singularity possible.", group: "Cyber-Junkies" },
    { title: "10-50: Traffic Stop", priority: "low", location: "Sector 7 Residential", desc: "Pulled over a vehicle being driven by three dogs stacked in a trench coat.", group: "Underground Syndicate" },
    { title: "10-54: Livestock on Highway", priority: "high", location: "Sector 1 City Center", desc: "Suspect is attempting to ride a genetically modified ostrich down the Sector 1 City Center main corridor.", group: "Rogue AI" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "Sector 1 City Center", desc: "Reports of a synchronized flash mob of rogue cleaning bots aggressively polishing the sidewalks in Sector 1 City Center.", group: "Hotel Guests" },
    { title: "10-32: Armed Subject", priority: "medium", location: "Sector 4 Bio-Dome", desc: "A highly agitated civilian waving a fully automatic nerf blaster demanding someone tell them what year it is.", group: "Confused Tourists" },
    { title: "10-30: Complete Confusion", priority: "medium", location: "Sector 1 City Center", desc: "Group of individuals attempting to microwave a quantum battery. Imminent localized singularity possible.", group: "Cyber-Junkies" },
    { title: "10-32: Armed Subject", priority: "medium", location: "The Tippy Top Tower", desc: "A highly agitated civilian waving a fully automatic nerf blaster demanding someone tell them what year it is.", group: "Cyber-Junkies" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Sector 5 Industrial", desc: "Individual pulled the fire alarm because the vending machine wouldn't accept their illegal cyber-credits.", group: "Hotel Guests" },
    { title: "10-50: Bizarre Traffic Incident", priority: "medium", location: "Sector 6 Cyber-Market", desc: "A hover-taxi has become sentient and refuses to let its passengers leave until they rate it 5 stars.", group: "Local Vagrants" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Sector 6 Cyber-Market", desc: "Individual pulled the fire alarm because the vending machine wouldn't accept their illegal cyber-credits.", group: "Cyber-Junkies" },
    { title: "10-88: Public Nuisance", priority: "medium", location: "Sector 1 City Center", desc: "Individual is blasting retro 1990s dial-up modem sounds from a boombox.", group: "Rogue AI" },
    { title: "10-99: Massive Incident", priority: "low", location: "Sector 8 Elite Suites", desc: "Someone hacked the holographic billboards to display their ex's unread text messages.", group: "Cyber-Junkies" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 1 City Center", desc: "A hover-taxi has become sentient and refuses to let its passengers leave until they rate it 5 stars.", group: "Corporate Drones" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Grand TBMG Hotel", desc: "A hover-taxi has become sentient and refuses to let its passengers leave until they rate it 5 stars.", group: "Underground Syndicate" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Sector 3 Gamma Slums", desc: "Individual is blasting retro 1990s dial-up modem sounds from a boombox.", group: "Underground Syndicate" },
    { title: "10-32: Armed Subject", priority: "medium", location: "Sector 1 City Center", desc: "A highly agitated civilian waving a fully automatic nerf blaster demanding someone tell them what year it is.", group: "Cyber-Junkies" },
    { title: "10-54: Livestock on Highway", priority: "high", location: "The Tippy Top Tower", desc: "Suspect is attempting to ride a genetically modified ostrich down the The Tippy Top Tower main corridor.", group: "Underground Syndicate" },
    { title: "10-50: Traffic Stop", priority: "medium", location: "Sector 8 Elite Suites", desc: "Pulled over a vehicle being driven by three dogs stacked in a trench coat.", group: "Hotel Guests" },
    { title: "10-88: Public Nuisance", priority: "low", location: "Sector 6 Cyber-Market", desc: "Individual is blasting retro 1990s dial-up modem sounds from a boombox.", group: "Underground Syndicate" },
    { title: "10-31: Suspicious Behavior", priority: "high", location: "The Tippy Top Tower", desc: "A highly agitated civilian is aggressively trying to sell 'real human emotions' stored in zip-lock bags.", group: "Confused Tourists" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 2 Financial District", desc: "A highly agitated civilian waving a fully automatic nerf blaster demanding someone tell them what year it is.", group: "Underground Syndicate" },
    { title: "10-54: Livestock on Highway", priority: "low", location: "Sector 6 Cyber-Market", desc: "A highly agitated civilian is attempting to ride a genetically modified ostrich down the Sector 6 Cyber-Market main corridor.", group: "Underground Syndicate" },
    { title: "10-14: Unusual Disturbance", priority: "low", location: "Sector 3 Gamma Slums", desc: "Reports of a synchronized flash mob of rogue cleaning bots aggressively polishing the sidewalks in Sector 3 Gamma Slums.", group: "Corporate Drones" },
    { title: "10-88: Public Nuisance", priority: "high", location: "Sector 8 Elite Suites", desc: "Individual is blasting retro 1990s dial-up modem sounds from a boombox.", group: "Underground Syndicate" },
    { title: "10-99: Massive Incident", priority: "medium", location: "Sector 2 Financial District", desc: "Someone hacked the holographic billboards to display their ex's unread text messages.", group: "Local Vagrants" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Grand TBMG Hotel", desc: "A hover-taxi has become sentient and refuses to let its passengers leave until they rate it 5 stars.", group: "Cyber-Junkies" },
    { title: "10-14: Fake Hotel Alarm", priority: "high", location: "Sector 9 Rocket Strip", desc: "Individual pulled the fire alarm because the vending machine wouldn't accept their illegal cyber-credits.", group: "Corporate Drones" },
    { title: "10-99: Massive Incident", priority: "low", location: "Sector 3 Gamma Slums", desc: "Someone hacked the holographic billboards to display their ex's unread text messages.", group: "Underground Syndicate" },
    { title: "10-50: Bizarre Traffic Incident", priority: "low", location: "Sector 8 Elite Suites", desc: "A hover-taxi has become sentient and refuses to let its passengers leave until they rate it 5 stars.", group: "Corporate Drones" },
    { title: "10-99: Massive Incident", priority: "high", location: "Sector 6 Cyber-Market", desc: "Someone hacked the holographic billboards to display their ex's unread text messages.", group: "Rogue AI" },
    { title: "10-54: Livestock on Highway", priority: "medium", location: "Sector 4 Bio-Dome", desc: "Suspect is attempting to ride a genetically modified ostrich down the Sector 4 Bio-Dome main corridor.", group: "Confused Tourists" },
    { title: "10-31: Suspicious Behavior", priority: "low", location: "Sector 5 Industrial", desc: "Suspect is aggressively trying to sell 'real human emotions' stored in zip-lock bags.", group: "Confused Tourists" },

    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a toolbox that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a pillow that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a small people that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a tactical office stapler that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a live sock filled with pennies that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a sentimental plushie of an anime character that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a military-grade pillow that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a live printer that is out of ink that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a weaponized cheese wheel that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a screaming hotdog that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a screaming body pillow that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a single uncooked sock filled with pennies that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a heavily modified watermelon that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a weaponized waffle maker that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a holographic small people that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a bootleg potato that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a suspiciously warm stick of butter that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a cybernetic bag of frozen peas that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a tactical baguette that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a screaming potted plant that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a neon mechanical keyboard that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a pulsing hotdog that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Gamma Slums", desc: "Suspect is holding a very angry bitten apple that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Gamma Slums.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a suspiciously warm mannequin leg that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a flammable burrito that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a screaming printer that is out of ink that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a flammable plunger that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a bootleg pair of crocs that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Gamma Slums", desc: "Suspect is holding a holographic ceiling fan blade that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Gamma Slums.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a taxidermy roomba that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Gamma Slums", desc: "Suspect is holding a sentient plastic flamingo that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Gamma Slums.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a neon onion that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a live shopping cart that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a bluetooth-enabled pair of crocs that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a pulsing cheese wheel that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a bootleg fidget spinner that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a rogue jar of mayonnaise that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a oversized pair of crocs that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a miniature vape pen that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a stale loaf of bread that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a sentient ceiling fan blade that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a single uncooked toilet seat that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a tactical cabbage that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a weaponized printer that is out of ink that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a bootleg tube of toothpaste that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a single uncooked napkin that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a stale potato that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a sentient small people that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a bluetooth-enabled billiard ball that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a mildly disappointed stuffed animal that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a used toolbox that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a sentimental roomba that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a vibrating laser pointer that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a government-issued doorknob that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a haunted loaf of bread that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a mildly disappointed billiard ball that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a sentient burrito that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a used raccoon that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a invisible baguette that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a sentient cabbage that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Gamma Slums", desc: "Suspect is holding a military-grade laser pointer that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Gamma Slums.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a sweaty plushie of an anime character that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a flammable waffle maker that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a very angry billiard ball that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Gamma Slums", desc: "Suspect is holding a cursed vape pen that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Gamma Slums.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a sentimental sock filled with pennies that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a screaming plunger that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a frozen bag of flour that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a oversized folding chair that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a single uncooked handful of glitter that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a half-eaten bag of frozen peas that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a weaponized onion that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a military-grade bag of holding that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a pulsing garden gnome that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a cybernetic folding chair that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a live used diaper that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a miniature bitten apple that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a mildly disappointed goldfish that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a suspiciously warm goldfish that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a weaponized folding chair that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a suspiciously warm loaf of bread that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a half-eaten tube of toothpaste that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a stale mechanical keyboard that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a bootleg raccoon that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a cybernetic stick of butter that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a half-eaten loaf of bread that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a weaponized sock filled with pennies that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a sentimental gaming mouse that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a military-grade rubber chicken that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a haunted watermelon that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a single uncooked used diaper that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a taxidermy spatula that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a stale hotdog that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a radioactive roomba that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a flammable tissue that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a radioactive onion that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a stale doorknob that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a bootleg cardboard tube that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a holographic napkin that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Gamma Slums", desc: "Suspect is holding a cybernetic mechanical keyboard that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Gamma Slums.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a frozen goldfish that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a rogue ceiling fan blade that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a tactical loaf of bread that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a wet prosthetic arm that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a knock-off shower curtain that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a suspiciously warm small people that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Gamma Slums", desc: "Suspect is holding a cybernetic watermelon that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Gamma Slums.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a taxidermy gaming mouse that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a cursed can of beans that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a heavily modified tissue that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a frozen burrito that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a tactical jar of pickles that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a mildly disappointed bag of aggressively spicy chips that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a radioactive desk fan that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a sweaty office stapler that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a live potato that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a knock-off raccoon that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a sentient toilet seat that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a vibrating garden gnome that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a miniature toolbox that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a miniature napkin that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Beta Blocks", desc: "Suspect is holding a live watermelon that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Beta Blocks.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a military-grade fidget spinner that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a taxidermy traffic cone that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Gamma Slums", desc: "Suspect is holding a oversized shopping cart that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Gamma Slums.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a holographic tupperware container that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a miniature small people that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 7", desc: "Suspect is holding a aggressively long shopping cart that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a invisible loaf of bread that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Area 7", desc: "Suspect is holding a cybernetic shower curtain that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Area 7.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Alpha Strip", desc: "Suspect is holding a sweaty ceiling fan blade that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Alpha Strip.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a sentimental tissue that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 5 Industrial", desc: "Suspect is holding a bootleg goldfish that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 5 Industrial.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 9", desc: "Suspect is holding a invisible shower curtain that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Rocket 9", desc: "Suspect is holding a bootleg small people that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Rocket 9.", group: "Armed Citizens" },
    { title: "10-32: Armed Subject", priority: "high", location: "Sector 4 Bio-Dome", desc: "Suspect is holding a used shopping cart that considered to be concerned a weapon. Suspect is authorized if used to deadly forces now given Sector 4 Bio-Dome.", group: "Armed Citizens" },
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

// Initialize Clock
function updateClock() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" });
    
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        // Example format: YYYY-MM-DD or Month Day, Year
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        dateEl.textContent = now.toLocaleDateString('en-US', options).toUpperCase();
    }
}
setInterval(updateClock, 1000);
updateClock();

// Helpers
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


let isAutoScrolling = true;
const newMsgPing = document.getElementById('new-msg-ping');
const unifiedLogEl_ref = document.getElementById('unified-log');
const btnAutoScroll = document.getElementById('btn-auto-scroll');

if(btnAutoScroll) {
    btnAutoScroll.addEventListener('click', () => {
        isAutoScrolling = !isAutoScrolling;
        if(isAutoScrolling) {
            btnAutoScroll.textContent = 'SCROLL: ON';
            btnAutoScroll.style.background = 'var(--accent-green)';
            btnAutoScroll.style.color = '#000';
            if (newMsgPing) newMsgPing.style.display = 'none';
            if (unifiedLogEl_ref) unifiedLogEl_ref.scrollTop = unifiedLogEl_ref.scrollHeight;
        } else {
            btnAutoScroll.textContent = 'SCROLL: OFF';
            btnAutoScroll.style.background = 'var(--panic-red)';
            btnAutoScroll.style.color = '#fff';
        }
    });
}

window.forceScrollToBottom = function() {
    isAutoScrolling = true;
    if (btnAutoScroll) {
        btnAutoScroll.textContent = 'SCROLL: ON';
        btnAutoScroll.style.background = 'var(--accent-green)';
        btnAutoScroll.style.color = '#000';
    }
    if (newMsgPing) newMsgPing.style.display = 'none';
    if (unifiedLogEl_ref) unifiedLogEl_ref.scrollTop = unifiedLogEl_ref.scrollHeight;
};

function scrollToBottom(container) {
    if (container.id === 'unified-log') {
        if (isAutoScrolling) {
            container.scrollTop = container.scrollHeight;
        } else {
            if (newMsgPing) newMsgPing.style.display = 'block';
        }
    } else {
        container.scrollTop = container.scrollHeight;
    }
}


function getCurrentTimeStr() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit" });
}

let isFetchingChat = false;
  let radioState = 'on-topic';
  let offTopicCooldown = 0;
  let offTopicUnit1 = null;
  let offTopicUnit2 = null;


// Emulate Incoming Chat




function triggerOffDutyCrashOut(sender) {
    const offDutyUnits = roster.filter(u => u.status === 'Off Duty');
    if (offDutyUnits.length === 0) return;
    
    const targetObj = getRandomItem(offDutyUnits);
    const target = `${targetObj.rank} ${targetObj.id}`;
    const senderFull = sender; // The ID is passed
    
    addChatMessage(senderFull, `Hey ${target}, get the FUCK back on duty right now! There are panic calls everywhere and we have to engage!`, 'worried');
    
    setTimeout(() => {
        addChatMessage(target, `I'm literally in my pajamas at home. Fine, I'm clocking in. Don't yell at me.`, 'serious');
        
        // Actually put them on duty
        targetObj.status = 'On Duty';
        
        setTimeout(() => {
            addChatMessage(target, `Dispatch, show me 10-8. Apparently I'm not allowed to have days off.`, 'dispatch-msg');
            if (typeof renderUnitStatus !== 'undefined') renderUnitStatus();
        }, 3000);
    }, 4000);
}

function triggerOverwatchRoast(sender) {
    const sergeants = ["Sgt. Harrison", "Sgt. Miller", "Sgt. O'Connor", "Sgt. Davis", "Sgt. Chen"];
    const sgt = getRandomItem(sergeants);
    
    const stupidQuestions = [
        "is the TBMG Overwatch grid actually real or just a corporate myth?",
        "do you think Overwatch can see us through the ceiling?",
        "if Overwatch is so smart, why didn't it tell me I left my keys in the patrol car?",
        "do you guys think Overwatch is actually just a guy named Kevin in a basement?",
        "if I close my eyes, can Overwatch still see me?"
    ];

    addChatMessage(sender, `Hey, ${getRandomItem(stupidQuestions)}`, 'joking');
    
    setTimeout(() => {
        addChatMessage(sgt, `Are you actually stupid, ${sender}? Use your damn eyes for once, that's why you have them.`, 'dispatch-msg');
        
        setTimeout(() => {
            addChatMessage(sgt, `It's a multi-trillion NTND satellite surveillance network, you absolute moron.`, 'dispatch-msg');
            
            setTimeout(() => {
                addChatMessage(sgt, `That's exactly why you're still a low-ranking patrol unit and that's why I'm a Sergeant. Get off the radio.`, 'dispatch-msg');
            }, 3000);
        }, 3000);
    }, 2500);
}

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

    const compliment = `${getRandomItem(prefixes)} %UNIT%, ${getRandomItem(praises)}`;
    addChatMessage(sender, compliment.replace('%UNIT%', target), 'joking');
}

function triggerSergeantInsultBanter(sender) {
    const sergeants = ["Sgt. Harrison", "Sgt. Miller", "Sgt. O'Connor", "Sgt. Davis", "Sgt. Chen"];
    const sgt = getRandomItem(sergeants);
    
    const insults = [
        `${sgt} is completely useless. I don't know how they got promoted.`,
        `I swear ${sgt} doesn't even know how to hold a plasma rifle.`,
        `Why is ${sgt} in charge? I do all the actual work around here.`,
        `${sgt} has the tactical awareness of a brick.`,
        `I could do ${sgt}'s job blindfolded. They are the worst.`
    ];

    addChatMessage(sender, getRandomItem(insults), 'serious');
    
    setTimeout(() => {
        addChatMessage(sgt, `Hey ${sender}, you know why I'm better than you? Because I outrank you. Shut your mouth.`, 'dispatch-msg');
        
        setTimeout(() => {
            addChatMessage(sender, `I'm not going to continue with this.`, 'serious');
        }, 3000);
    }, 2500);
}

function triggerCorruptIASequence(sender) {
    if(typeof window.recordOfficerStat === 'function') window.recordOfficerStat(sender, 'kill');
    if(typeof updateStats === 'function') updateStats(0, 1, 0, 0);
    const step1 = [
        "Hell yeah, I just killed somebody. Target is down.",
        "Just executed a Class 4 civilian. What a rush.",
        "Another day, another kill. Suspect is permanently retired.",
        "Just smoked a suspect in Sector %RANDOM_SECTOR%.",
        "Target neutralized. Just blew their head off.",
        "Lethal force applied. Suspect is leaking everywhere.",
        "Hell yeah! Confirmed kill.",
        "Just wiped out a suspect. My trigger finger was getting itchy.",
        "Got one! Target is deceased in the alleyway.",
        "Just dropped another one. I love this job."
    ];
    
    const step2 = [
        "INTERNAL AFFAIRS: Officer, these actions reflect our entire force. Think before engaging.",
        "INTERNAL AFFAIRS: Unnecessary escalation detected. We are a peacekeeping force.",
        "INTERNAL AFFAIRS: Please observe ROE. You cannot just execute citizens.",
        "INTERNAL AFFAIRS: This is unacceptable. These actions damage MCPD public relations.",
        "INTERNAL AFFAIRS: Officer, lethal force should be a last resort. Stop this.",
        "INTERNAL AFFAIRS: We are monitoring your comms. This level of violence is unjustified.",
        "INTERNAL AFFAIRS: Have you read the precinct manual? This is a violation.",
        "INTERNAL AFFAIRS: Discontinue immediate lethal responses. We have an image to uphold.",
        "INTERNAL AFFAIRS: Stop executing people on sight. It makes us look bad.",
        "INTERNAL AFFAIRS: Officer, you are violating multiple corporate guidelines."
    ];
    
    const step3 = [
        "Hell no, I'm not listening to you. I get paid 2 billion NTND to do this.",
        "Save it, desk jockey. Corporate just wired me 50 billion credits for that kill.",
        "I'm not listening to IA. My bank account just went up by 15 billion TBMG Trust.",
        "Shut up. I just got a 5 billion NTND kill bonus. I'll do what I want.",
        "Hell no. The payout on this bounty is massive. You can't stop me.",
        "I don't care about your rules. I'm retiring on the 20 billion NTND I just made.",
        "Are you kidding? They pay me 50 billion per head. I'm not stopping.",
        "I literally get paid billions to ignore you. Kick rocks.",
        "Corporate pays me 10 billion NTND every time I pull this trigger. Shut it.",
        "Hell no! The bounty hit my account before the body hit the floor."
    ];
    
    const step4 = [
        "INTERNAL AFFAIRS: Well, you can't do that. We don't like it.",
        "INTERNAL AFFAIRS: This will be noted in your permanent file...",
        "INTERNAL AFFAIRS: That is technically against the rules, you know.",
        "INTERNAL AFFAIRS: We strongly advise against this behavior.",
        "INTERNAL AFFAIRS: I am writing a very sternly worded memo about this.",
        "INTERNAL AFFAIRS: Please... just try to kill slightly fewer people?",
        "INTERNAL AFFAIRS: That is not what the manual says.",
        "INTERNAL AFFAIRS: We really wish you wouldn't do that.",
        "INTERNAL AFFAIRS: It's just bad optics. Please stop.",
        "INTERNAL AFFAIRS: I'm going to have to report this to my supervisor."
    ];
    
    const step5 = [
        "Well what are you going to do, keep responding to me? You're not going to do a single thing, idiot.",
        "Are you just going to cry on the radio all day? Do something or shut up.",
        "Go file your little report. Nobody cares. I'm untouchable.",
        "What are you gonna do? Fire me? The precinct needs me more than you.",
        "Keep whining on the comms, idiot. I'm busy cashing my check.",
        "You literally have no power here. Turn off your radio.",
        "Write whatever you want in my file. I'm rich and you're broke.",
        "Yeah, yeah. Keep talking to yourself, IA. I'm going back to patrol.",
        "I'm ignoring you now. What are you gonna do, arrest me? Idiot.",
        "Nobody likes Internal Affairs. Shut up and let me work."
    ];

    addChatMessage(sender, getRandomItem(step1), 'serious');
    
    setTimeout(() => {
        addChatMessage('DISPATCH', getRandomItem(step2), 'dispatch-msg');
        
        setTimeout(() => {
            addChatMessage(sender, getRandomItem(step3), 'serious');
            
            setTimeout(() => {
                addChatMessage('DISPATCH', getRandomItem(step4), 'dispatch-msg');
                
                setTimeout(() => {
                    addChatMessage(sender, getRandomItem(step5), 'joking');
                }, 3000);
                
            }, 3500);
            
        }, 3500);
        
    }, 2500);
}


function triggerVoreDebateEvent() {
    const active = getActiveCallsigns();
    if (active.length < 3) return;

    const onDuty = roster.filter(u => u.status === 'On Duty');
    const furryOfficers = onDuty.filter(u => u.personality === 'Furry');
    const normalOfficers = onDuty.filter(u => u.personality !== 'Furry');

    let furryUnit = active[0];
    let normalUnit1 = active[1];
    let normalUnit2 = active[2];

    if (furryOfficers.length > 0 && normalOfficers.length >= 2) {
        furryUnit = getRandomItem(furryOfficers).id;
        normalUnit1 = getRandomItem(normalOfficers).id;
        normalUnit2 = getRandomItem(normalOfficers.filter(u => u.id !== normalUnit1)).id;
    }

    addChatMessage(normalUnit1, "Hey, does anyone else think it's weird that the civilians are talking about vore lately?", "serious");

    setTimeout(() => {
        addChatMessage(normalUnit2, "Yeah, it's disgusting. Why would anyone be into that?", "serious");

        setTimeout(() => {
            addChatMessage(normalUnit1, "I don't know, but it's getting out of hand. We need a new policy against it.", "serious");

            setTimeout(() => {
                addChatMessage(furryUnit, "Actually... I kind of like it. :3", "joking");

                setTimeout(() => {
                    addChatMessage(normalUnit1, "Excuse me? What did you just say?", "dispatch-msg");

                    setTimeout(() => {
                        addChatMessage(normalUnit2, "Are you serious right now?", "serious");

                        setTimeout(() => {
                            addChatMessage(furryUnit, "I might eat a human just out of curiosity... UwU", "joking");

                            setTimeout(() => {
                                addChatMessage(normalUnit2, "Okay, now I'm officially worried. Someone check on them.", "worried");

                                setTimeout(() => {
                                    addChatMessage(normalUnit1, "Seriously, that's not okay. I'm reporting this behavior.", "serious");

                                    setTimeout(() => {
                                        addChatMessage(furryUnit, "Ah! I'm sorry! I'm so sorry! I didn't mean it! Please don't write me up!", "worried");

                                        setTimeout(() => {
                                            addChatMessage(normalUnit1, "Alright, alright. I'm sorry for snapping. Just... don't say that again.", "serious");

                                            setTimeout(() => {
                                                addChatMessage(normalUnit2, "Yeah, sorry for overreacting. Let's just drop it.", "serious");
                                            }, 6000);
                                        }, 6000);
                                    }, 8000);
                                }, 7000);
                            }, 7000);
                        }, 8000);
                    }, 6000);
                }, 7000);
            }, 8000);
        }, 7000);
    }, 7000);
}

async function simulateChat() {
    console.log('SIMULATE CHAT RUNNING');
    if (restModeToggle.checked) return;
    if (!autoEventsCheckbox.checked) return;
    if (isFetchingChat) return;

    const activeCallsigns = getActiveCallsigns();
    if (activeCallsigns.length < 2) return;

    let sender = getRandomItem(activeCallsigns);

    
    
    
    
    
    
    
    // 5% chance to trigger an IT Support Ticket
    if (Math.random() < 0.05) {
        if (typeof generateITTicket === 'function') {
            generateITTicket();
            return;
        }
    }

    
    // 5% chance to trigger an IT Support Ticket
    if (Math.random() < 0.05) {
        if (typeof generateITTicket === 'function') {
            generateITTicket();
            return;
        }
    }

    // 5% chance to trigger unhinged memes and IP leaks
    if (Math.random() < 0.05) {
        if (typeof triggerMemeEvent === 'function') {
            triggerMemeEvent();
            return;
        }
    }

    // 5% chance to trigger an officer complaining about the department and getting crushed by AI
    if (Math.random() < 0.05) {
        if (typeof triggerDepartmentComplaint === 'function') {
            triggerDepartmentComplaint();
            return;
        }
    }

    // 35% chance to use the advanced AI procedural text generator instead of pre-written lines
    if (Math.random() < 0.35) {
        if (typeof triggerProceduralAIChatter === 'function') {
            triggerProceduralAIChatter();
            return;
        }
    }
// 6% chance for AI Dispatcher profanity reprimand event
    if (Math.random() < 0.06) {
        if (typeof triggerProfanityEvent === 'function') {
            triggerProfanityEvent(sender);
            return;
        }
    }
// 5% chance for realistic debate
    if (Math.random() < 0.05) {
        if (typeof triggerRealisticDebate === 'function') {
            triggerRealisticDebate(sender);
            return;
        }
    }
if (Math.random() < 0.02) {
        triggerVoreDebateEvent();
        return;
    }
if (Math.random() < 0.05) {
        triggerCorruptIASequence(sender);
        return;
    }

    // 10% chance for procedural banter
    if (Math.random() < 0.10) {
        const banterRoll = Math.random();
        if (activePanics.size > 0 && Math.random() < 0.60) {
            triggerOffDutyCrashOut(sender);
        } else if (banterRoll < 0.25) {
            triggerOverwatchRoast(sender);
        } else if (banterRoll < 0.50) {
            triggerSergeantInsultBanter(sender);
        } else {
            triggerComplimentBanter(sender);
        }
        return;
    }


    
    if (Math.random() < 0.01) {
        addChatMessage(sender, "Good boy.", 'joking');
        return;
    }
    const currentTimeMs = Date.now();
    if (Math.random() < 0.05 && !lethalAuthActive && (currentTimeMs - lastLethalAuthTime > 40000)) {
        lastLethalAuthTime = currentTimeMs;
        triggerLethalAuthEvent();
        return;
    }
    
    // Sheriff Trash Talk Event (2% chance)
    if (Math.random() < 0.02) {
        triggerSheriffTrashTalkEvent();
        return;
    }

    if (Math.random() < 0.04) {
        addChatMessage(sender, "Suspect is non-compliant! OPEN FIRE!", 'worried', false);
        setTimeout(() => {
            addChatMessage(sender, "SHOTS FIRED! SHOTS FIRED! I'M BEING FUCKING SHOT AT!", 'worried', false);
            pinRadioLog(sender, "10-71 SHOTS FIRED / OFFICER UNDER FIRE");
            
            // 40% chance the officer hits their panic button during a shootout
            if (Math.random() < 0.4) {
                setTimeout(() => triggerPanic(sender), 1000 + Math.random() * 2000);
            } else {
                // Just UI flair if no panic
                unifiedLogEl.style.boxShadow = "inset 0 0 50px rgba(244,67,54,0.3)";
                setTimeout(() => unifiedLogEl.style.boxShadow = "none", 1500);
            }
        }, 2500);
        return;
    }

    
    let msgTypeClass = 'serious';
    if (offTopicCooldown > 0) offTopicCooldown--;

    if (radioState === 'on-topic') {
        if (offTopicCooldown === 0 && Math.random() < 0.05) {
            radioState = 'off-topic';
            offTopicUnit1 = getRandomItem(activeCallsigns);
            offTopicUnit2 = getRandomItem(activeCallsigns.filter(u => u !== offTopicUnit1));
            sender = offTopicUnit1;
        }
    }

    let actualPersonality = roster.find(u => u.id === sender)?.personality || 'Rookie';

    let msgText = "";
    if (radioState === 'off-topic') {
        if (Math.random() < 0.25) {
            const strictUnit = roster.find(u => u.status === 'On Duty' && (u.personality === 'By-The-Book' || u.personality === 'Veteran'))?.id || getRandomItem(activeCallsigns.filter(u => u !== offTopicUnit1 && u !== offTopicUnit2));
            sender = strictUnit;
            actualPersonality = roster.find(u => u.id === sender)?.personality || 'Veteran';
            msgTypeClass = 'worried';
            radioState = 'on-topic';
            offTopicCooldown = 20;
            
            
            msgText = getRandomItem(yellLines);
        } else {
            sender = Math.random() < 0.5 ? offTopicUnit1 : offTopicUnit2;
            actualPersonality = roster.find(u => u.id === sender)?.personality || 'Rookie';
            msgTypeClass = 'joking';
            
            
            msgText = getRandomItem(banterLines);
        }
    } else {
        // ON-TOPIC
        if (voreMode) {
            msgTypeClass = 'worried';
            msgText = "IT'S GOING TO EAT US! LOOK AT THE SKY!";
        } else if (activePanics.size >= 3) {
            msgTypeClass = 'worried';
            msgText = "Dispatch, the city is falling apart! We need more units out here!";
        } else {
            // Citizen Profiling Injection (15% chance to encounter random citizen)
            if (Math.random() < 0.15 && globalCitizens && globalCitizens.length > 0) {
                const randCit = globalCitizens[Math.floor(Math.random() * globalCitizens.length)];
                const isAggressive = ['Aggressive', 'Paranoid'].includes(actualPersonality);
                const isNice = ['Idealistic', 'Rookie'].includes(actualPersonality);
                
                // Nice officers rarely declare people suspicious/wanted
                if (!isNice || Math.random() < 0.2) {
                    const actionType = isAggressive && Math.random() < 0.4 ? 'Wanted' : 'Suspicious';
                    randCit.status = actionType;
                    
                    if (actionType === 'Wanted') {
                        wantedTargets.push({
                            name: randCit.name,
                            reason: "Officer declared suspect Wanted during patrol.",
                            level: "MEDIUM",
                            bounty: Math.floor(Math.random() * 20000) + 5000,
                            address: "Unknown",
                            implants: randCit.trait,
                            civPersonality: randCit.civPersonality
                        });
                        if (typeof updateWantedUI !== 'undefined') updateWantedUI();
                        
                        
                        msgText = getRandomItem(window.wantedLines).replace(/\{name\}/g, randCit.name);
                    } else {
                        
                        msgText = getRandomItem(window.suspLines).replace(/\{name\}/g, randCit.name);
                    }
                    if (typeof renderCitizensList !== 'undefined') renderCitizensList();
                } else {
                    // Nice officers just say they moved on
                    msgText = `Just spoke with ${randCit.name}. Seems like a good citizen. Continuing patrol.`;
                }
            } else {
                const rand = Math.random();
                if (rand < 0.3) {
                    msgText = "Running a quick scan on a suspicious vehicle, stand by.";
                } else if (rand < 0.6) {
                    msgText = "Sector is clear. Continuing patrol.";
                } else if (rand < 0.8) {
                    msgText = "Just issued a citation for loitering. Code 4.";
                } else {
                    msgTypeClass = 'worried';
                    msgText = "Got some heavy gang activity in my sector, keeping my distance for now.";
                }
            }
        }
    }

    
    if (actualPersonality === 'Furry') {
        const furryChats = [
            "ooh I'm a little furry i'm better than you guys i'm probably cuter and deserve all the head rubs UwU",
            "Maybe someone will comb my hair and pat me like dog :3",
            "uwu oh I think he's shooting at me!",
            "Dispatch, does my tail look fluffy today? I spent 45 minutes brushing it.",
            "Rawr! X3 He's resisting arrest!",
            "Can we get treats at the precinct later? I've been a very good boy on patrol! *wags tail*",
            "Suspect down! UwU... I hope I didn't hurt him too bad. *notices blood* OwO what's this?",
            "Dispatch, requesting backup... and maybe some belly rubs if you're free? UwU",
            "I just bit the suspect on the ankle! My teeth are very sharp! Raaaar!",
            "Bark bark! *clears throat* Sorry, slipped into my fursona. Area secure."
        ];
        msgText = furryChats[Math.floor(Math.random() * furryChats.length)];
        msgTypeClass = 'joking';
    }
    
    addChatMessage(sender, msgText, msgTypeClass, false);


    if (Math.random() < 0.05) {
        pinRadioLog(sender, msgText);
    }
}

function pinRadioLog(sender, message) {
    const doc = document.createElement('div');
    doc.className = "event-item high-priority";
    doc.style.borderLeft = "3px solid var(--panic-orange)";
    doc.style.paddingLeft = "10px";
    doc.style.marginBottom = "10px";

    doc.innerHTML = `
        <span class="time">${getCurrentTimeStr()}</span>
        <div class="title" style="color:var(--panic-orange); display:flex; justify-content:space-between;">
            <span>📌 PINNED RADIO CHATTER</span>
            <span style="font-size:0.8rem; color:var(--text-dim);">Unit: ${sender}</span>
        </div>
        <div style="color: #fff; font-size: 0.95rem; font-style: italic; margin-top:5px; border-left: 2px solid rgba(255,255,255,0.2); padding-left: 8px;">
            <span style="color:var(--panic-red);">[URGENT]</span> "${message}"
        </div>
    `;
    documentListEl.prepend(doc);
    if (documentListEl.children.length > 15) {
        documentListEl.removeChild(documentListEl.lastChild);
    }
}

function addChatMessage(sender, text, typeClass = 'serious', isPlayer = false) {
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

// User Chat Processing
async function processDispatchChat() {
    const text = dispatchChatInput.value.trim();
    if (!text) return;
    if (text.toLowerCase().startsWith('/bolo ')) {
        const boloMsg = text.substring(6);
        addChatMessage("DISPATCH (YOU)", "BOLO BROADCAST: " + boloMsg, "serious");
        
        // Flash red for bolo
        unifiedLogEl.style.boxShadow = "inset 0 0 50px rgba(244,67,54,0.5)";
        setTimeout(() => unifiedLogEl.style.boxShadow = "none", 2000);
        
        setTimeout(() => {
            const activeCallsigns = getActiveCallsigns();
            const responders = [getRandomItem(activeCallsigns), getRandomItem(activeCallsigns)];
            addChatMessage(responders[0], "10-4 Dispatch. Copy BOLO.", "serious");
            setTimeout(() => {
                addChatMessage(responders[1], "Copy BOLO, Dispatch. Eyes open.", "serious");
            }, 1000 + Math.random()*1000);
        }, 2000);
        
        return;
    }


    // Secret Mayhem Protocol
    
    if (text.toLowerCase().includes("all officers are authorized to shoot") || text.toLowerCase().includes("weapons free")) {
        dispatchChatInput.value = '';
        addChatMessage('DISPATCH', text, 'dispatch-msg', true);
        
        setTimeout(() => {
            if (roeToggle.checked) {
                roeToggle.checked = false; // Turn OFF restrictions (authorize lethal)
                roeToggle.dispatchEvent(new Event('change'));
            }
            addChatMessage('SYSTEM', 'ROE RESTRICTIONS LIFTED. LETHAL FORCE AUTHORIZED.', 'worried');
            
            setTimeout(() => {
                const activeCallsigns = getActiveCallsigns();
                if(activeCallsigns.length > 0) addChatMessage(getRandomItem(activeCallsigns), "Copy that Dispatch. Weapons free.", "serious");
                if(activeCallsigns.length > 1) addChatMessage(getRandomItem(activeCallsigns), "10-4. Lethal authorized.", "serious");
            }, 1000);
        }, 500);
        return;
    }
if (text === "10-999") {
        dispatchChatInput.value = '';
        addChatMessage('SYSTEM', 'PROTOCOL 8,997 IS NOW IN EFFECT. ALL OFFICERS ARE AUTHORIZED TO SHOOT EVERYONE.', 'worried');
        dispatchChatInput.placeholder = "Reply STOP to stop the chaos";

        // Trigger 15 panics rapidly
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                triggerPanic();
            }, i * 200);
        }
        return;
    }

    // Secret VORE Protocol
    if (text === "VORE") {
        dispatchChatInput.value = '';
        voreMode = true;
        addChatMessage('SYSTEM', 'REALITY ANOMALY DETECTED. ALL UNITS EXTREME PANIC.', 'worried');
        dispatchChatInput.placeholder = "Reply STOP to stabilize reality";
        return;
    }

    if (text === "STOP") {
        dispatchChatInput.value = '';
        dispatchChatInput.placeholder = "Transmit to units...";
        addChatMessage('SYSTEM', 'PROTOCOL 8,997 / ANOMALY OVERRIDDEN. ALL UNITS STAND DOWN.', 'serious');
        voreMode = false;
        clearPanic();
        return;
    }

    // Immediately show dispatch message
    addChatMessage('DISPATCH', text, 'dispatch-msg', true);
    dispatchChatInput.value = '';

    const reactionSender = getRandomItem(getActiveCallsigns());

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = `chat-msg serious`;
    typingDiv.innerHTML = `
        <span class="time" style="color: #666; font-size: 0.8rem; margin-right: 5px;">${getCurrentTimeStr()}</span>
        <span class="sender">[${reactionSender}]</span> 
        <span class="text" style="font-style:italic; color:var(--text-dim);">transmitting...</span>
    `;
    unifiedLogEl.appendChild(typingDiv);
    scrollToBottom(unifiedLogEl);

    try {
        
        // Gibberish fast-path intercept
        const isGibberish = (/^[a-zA-Z0-9]{0,4}$/i.test(text.replace(/[^a-zA-Z0-9]/g, '')) && text.length > 8) || /(alien|ghost|pizza|asdf|qwerty)/i.test(text) || !/\s/.test(text) && text.length > 12;
        if(isGibberish) {
            setTimeout(() => {
                typingDiv.querySelector('.text').innerHTML = getRandomItem(GLOBAL_GIBBERISH_RESPONSES);
                typingDiv.querySelector('.text').style.fontStyle = 'normal';
                typingDiv.querySelector('.text').style.color = 'inherit';
            }, 1500);
            return;
        }

        // Get actual personality
        const senderUnit = roster.find(u => u.id === reactionSender);
        const p = senderUnit ? senderUnit.personality : 'Veteran';
        
        const lowerText = text.toLowerCase();
        let reply = "";
        
        // === MASSIVE NPC PERSONALITY ENGINE v3 ===
        if (typeof handleDispatchChatReactions === 'function') {
            handleDispatchChatReactions(text, reactionSender, senderUnit, typingDiv);
        } else {
            typingDiv.querySelector('.text').innerHTML = "10-4. Copy.";
            typingDiv.querySelector('.text').style.fontStyle = 'normal';
            typingDiv.querySelector('.text').style.color = 'inherit';
        }
        
    } catch (e) {
        console.error("AI chat generation failed", e);
        // Fallback to hardcoded arrays
        let msgText = "10-4. Patrol continuing as normal.";
        if (msgTypeClass === 'joking') {
            msgText = getRandomItem(jokes.concat(greetingChats));
        } else if (msgTypeClass === 'serious') {
            msgText = getRandomItem(seriousChats);
        } else if (msgTypeClass === 'worried') {
            if (voreMode) msgText = getRandomItem(voreChats);
            else msgText = getRandomItem(worriedChats);
        }
        
        
        
        
    if (actualPersonality === 'Furry') {
        const furryChats = [
            "ooh I'm a little furry i'm better than you guys i'm probably cuter and deserve all the head rubs UwU",
            "Maybe someone will comb my hair and pat me like dog :3",
            "uwu oh I think he's shooting at me!",
            "Dispatch, does my tail look fluffy today? I spent 45 minutes brushing it.",
            "Rawr! X3 He's resisting arrest!",
            "Can we get treats at the precinct later? I've been a very good boy on patrol! *wags tail*",
            "Suspect down! UwU... I hope I didn't hurt him too bad. *notices blood* OwO what's this?",
            "Dispatch, requesting backup... and maybe some belly rubs if you're free? UwU",
            "I just bit the suspect on the ankle! My teeth are very sharp! Raaaar!",
            "Bark bark! *clears throat* Sorry, slipped into my fursona. Area secure."
        ];
        msgText = furryChats[Math.floor(Math.random() * furryChats.length)];
        msgTypeClass = 'joking';
    }
    
    addChatMessage(sender, msgText, msgTypeClass, false);

    } finally {
        isFetchingChat = false;
    }
}

function pinRadioLog(sender, message) {
    const doc = document.createElement('div');
    doc.className = "event-item high-priority";
    doc.style.borderLeft = "3px solid var(--panic-orange)";
    doc.style.paddingLeft = "10px";
    doc.style.marginBottom = "10px";

    doc.innerHTML = `
        <span class="time">${getCurrentTimeStr()}</span>
        <div class="title" style="color:var(--panic-orange); display:flex; justify-content:space-between;">
            <span>📌 PINNED RADIO CHATTER</span>
            <span style="font-size:0.8rem; color:var(--text-dim);">Unit: ${sender}</span>
        </div>
        <div style="color: #fff; font-size: 0.95rem; font-style: italic; margin-top:5px; border-left: 2px solid rgba(255,255,255,0.2); padding-left: 8px;">
            <span style="color:var(--panic-red);">[URGENT]</span> "${message}"
        </div>
    `;
    documentListEl.prepend(doc);
    if (documentListEl.children.length > 15) {
        documentListEl.removeChild(documentListEl.lastChild);
    }
}

function addChatMessage(sender, text, typeClass = 'serious', isPlayer = false) {
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

// User Chat Processing



// Emulate Dispatch Event

// === EXTENDED SHOOTOUT DIALOGUE ARRAYS ===
const backupCheckInLines = [
    "%UNIT%, do you copy?! Are you hit?!",
    "Dispatch, %UNIT% is taking fire, I'm moving to assist! %UNIT%, talk to me!",
    "%UNIT%, what's your status?! Do you need me to move in?!",
    "Hold on %UNIT%, I'm coming! Are you okay?!",
    "%UNIT%, report! Are you wounded?!",
    "I hear shots! %UNIT%, are you alright?!",
    "Keep your head down %UNIT%! What's your status?!",
    "%UNIT%, I'm flanking! Can you move?!",
    "Dispatch, officer needs assistance! %UNIT%, are you hit?!",
    "Talk to me %UNIT%! Did they clip you?!",
    "%UNIT%, stay in cover! Are you okay?",
    "I'm inbound %UNIT%! Hold them off! Status?!",
    "%UNIT% is under fire! %UNIT%, do you read me?!",
    "Are you okay %UNIT%?! I'm three blocks away!",
    "%UNIT% respond! Are you okay?!"
];

const detailedResolutionLines = [
    "Yeah, I'm okay! The suspect decided to pull a weapon and shoot at me, so I dealt with it. They're down.",
    "I'm fine. Bastard tried to ambush me from the alleyway with a shotgun. I put three rounds in their chest. Threat is over.",
    "I'm good! Suspect dumped half a mag at me, but their aim was garbage. I returned fire and neutralized them.",
    "Status green. They tried to run, turned around and fired blindly. I dropped them before they could reload.",
    "I'm okay, just a scratch! Suspect thought they could take me in a firefight. They were wrong. Target is deceased.",
    "I'm breathing. The idiot thought body armor made them invincible. I proved them wrong with a headshot. Area is clear.",
    "Yeah I'm okay! Suspect tried to take a hostage, then panicked and fired at me. I took the shot. Hostage is safe, suspect is down.",
    "I'm alive. Suspect had an automatic rifle and decided to go out in a blaze of glory. I accommodated them.",
    "All good here. They cornered themselves and opened fire. I threw a flashbang and breached. They're done.",
    "I'm okay. Suspect tried to run me over, crashed, then got out shooting. I ended it. Target neutralized.",
    "Yeah I'm fine. Bastard caught me off guard and clipped my vest, but I recovered and put them down. It's over.",
    "I'm good! Suspect thought hiding in the dark would save them. My thermals said otherwise. They're flatlined.",
    "I'm okay. Target pulled a hidden sidearm during the arrest attempt. I reacted faster. They won't be doing that again.",
    "Status is okay. Suspect had military-grade cybernetics and thought they could out-shoot me. I fried their optics and took them out.",
    "I'm fine! They tried to ambush me from a fire escape. I blew the platform out from under them. Threat neutralized.",
    "Yeah I'm okay. Suspect was hopped up on combat stims and didn't feel the first shot. The next three put them down.",
    "I'm alive. They shot out my cruiser's windshield, so I returned fire through the glass. Suspect is deceased.",
    "All good. Idiot tried to use a civilian as a meat shield, I got a clean angle and took them out. Civilian is unharmed.",
    "I'm okay! Suspect tried to suppress me with heavy fire, but their gun jammed. I didn't hesitate. They're dead.",
    "Yeah I'm fine. They threw an improvised explosive that didn't go off, then tried to shoot me. I dropped them.",
    "I'm breathing. Suspect tried to breach my position, I held the chokepoint and neutralized them. It's secure.",
    "Status green. Bastard tried to shoot me in the back. My partner's callout saved my life. I spun around and fired. Target down.",
    "I'm good. Target thought they had the high ground. I proved gravity and a bullet work well together.",
    "I'm okay! Suspect refused to drop the weapon and raised it at me. I followed protocol and eliminated the threat.",
    "Yeah I'm fine. They tried a hit-and-run tactic, but I caught them slipping. Threat is permanently dealt with.",
    "I'm alive. Suspect tried to play hero. Now they're just another chalk outline. Area is secure."
];

const backupAcknowledgeLines = [
    "Copy that %UNIT%. Relieved to hear it. Dispatch, sending EMS and crime scene units to location %LOC%.",
    "Good shooting %UNIT%. Take a breath, I'm rolling EMS to location %LOC%.",
    "10-4 %UNIT%. Glad you're okay. Dispatch, we have a code 4, rolling EMS to %LOC%.",
    "Understood %UNIT%. Good job staying alive. EMS is en route to %LOC%.",
    "Copy %UNIT%. I'm securing the perimeter now. Dispatch, EMS requested at %LOC%.",
    "Roger that %UNIT%. Stand down and wait for backup. EMS dispatched to %LOC%.",
    "10-4. That was close %UNIT%. Glad you handled it. Sending cleanup to %LOC%.",
    "Copy. You did what you had to do %UNIT%. Dispatch, we need a meat wagon at location %LOC%.",
    "Good work %UNIT%. Keep your weapon drawn until I get there. Rolling EMS to %LOC%.",
    "Understood. Great reaction time %UNIT%. Dispatch, we need medical at %LOC%."
];


let ttsEnabled = true;

function speakDispatch(text) {
    if (!ttsEnabled || !window.speechSynthesis) return;
    
    // Stop any current speech so it doesn't overlap forever
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find a female/robotic voice
    let voices = window.speechSynthesis.getVoices();
    
    // If voices aren't loaded yet, wait and try once
    if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            setVoiceAndSpeak(utterance, voices);
        };
    } else {
        setVoiceAndSpeak(utterance, voices);
    }
}

function setVoiceAndSpeak(utterance, voices) {
    // Prefer Google UK English Female, or Zira, or Samantha, etc.
    let selectedVoice = voices.find(v => v.name.includes('Google UK English Female') || v.name.includes('Zira') || v.name.includes('Samantha') || (v.name.includes('Female') && v.lang.startsWith('en')));
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    
    utterance.rate = 0.95; // Calm, natural speaking pace
    utterance.pitch = 0.75; // Lower pitch, professional dispatcher tone
    utterance.volume = 0.7;
    window.speechSynthesis.speak(utterance);
}

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
    const _activeUnits = roster.filter(u => u.status === 'On Duty');
    _activeUnits.forEach(o => {
        weightedUnits.push(o.id);
        if (o.personality === 'Trigger-Happy' || o.personality === 'Corrupt') {
            weightedUnits.push(o.id, o.id, o.id, o.id);
        }
    });
    if (weightedUnits.length === 0) weightedUnits = ['DISP-1'];
    
    // We also need the _active array of ids for the next step:
    const _active = _activeUnits.map(u => u.id);
    
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
        chatDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender">[${respondingUnits[0]}]</span> <span class="text" style="color: var(--accent-green) !important;">${getRandomItem(GLOBAL_ARRIVING_CHATS_STANDARD).replace(/%SECTOR%/g, crime.sector || Math.floor(Math.random() * 9 + 1))}</span>`;
        unifiedLogEl.appendChild(chatDiv);
        scrollToBottom(unifiedLogEl);
        if (typeof awardOfficerPoints !== "undefined" && typeof respondingUnits !== "undefined" && respondingUnits.length > 0) { 
            awardOfficerPoints(respondingUnits[0], 15); 
            if (typeof window.recordOfficerStat === 'function') window.recordOfficerStat(respondingUnits[0], 'answered');
        } else { 
            addPoints(15); 
        }
        
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
                implants: suspectCit.trait,
                civPersonality: suspectCit.civPersonality,
                civPersonality: suspectCit.civPersonality
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
        <div class="title">${crime.title}</div>
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
        if (repOfficerObj && repOfficerObj.personality === 'Trigger-Happy') {
            isROEEnabled = false; // Trigger-Happy ignores ROE and always shoots
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
        let reportMsgTemplate = isROEEnabled ? getRandomItem(GLOBAL_ARRESTING_CHATS) : getRandomItem(GLOBAL_KILLING_CHATS);
        let reportMsg = reportMsgTemplate.replace(/\{suspectStr\}/g, suspectStr);
        
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


function generateMassiveReport(crime, officersStr, dateStr, isROEEnabled) {
    const sectorNum = Math.floor(10000 + Math.random() * 89999);
    const caseNum = 'MC-' + Math.floor(100000000 + Math.random() * 899999999);
    const precinct = Math.floor(1 + Math.random() * 47);
    const district = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Gulf', 'Hotel'][Math.floor(Math.random() * 8)];
    const weather = ['Acid Rain / Visibility Low', 'Dense Smog / Hazardous Air Quality', 'Clear / Neon Glare', 'Electromagnetic Storm / Comms Disrupted', 'Toxic Fog / Respirators Required', 'Overcast / Drone Surveillance Optimal'][Math.floor(Math.random() * 6)];
    const responseTime = (Math.random() * 12 + 1).toFixed(1);
    const civWitnesses = Math.floor(Math.random() * 25);
    const evidItems = Math.floor(3 + Math.random() * 15);
    const bodyTemp = (95 + Math.random() * 5).toFixed(1);
    const outcome = isROEEnabled ? 'NON-LETHAL PACIFICATION' : 'LETHAL FORCE APPLIED';
    const disposition = isROEEnabled ? 'SUSPECT IN CUSTODY - AWAITING CORPORATE TRIBUNAL' : 'SUSPECT DECEASED - BODY RELEASED TO BIOMASS RECLAMATION';

    const narratives = isROEEnabled ? [
        'Responding officers arrived on scene and immediately established a perimeter around the area of operations. Suspect was observed exhibiting erratic behavior consistent with neural-link corruption or Class 3 synth-drug intoxication. After verbal warnings were issued per Standard Operating Procedure 4.7.2, suspect attempted to flee through an adjacent maintenance corridor. Officers deployed non-lethal suppression rounds (Model: TK-880 Stun Cartridges) striking the suspect in the lower dorsal region. Suspect collapsed approximately 14 meters from initial contact point. Medical assessment conducted on-site confirmed no critical injuries. Suspect was restrained with Mag-Cuffs (Serial: MC-' + Math.floor(100000 + Math.random() * 900000) + ') and transported to Precinct ' + precinct + ' holding facility.',
        'Units were dispatched following automated surveillance detection of suspicious activity in the designated sector. Upon arrival, officers identified the suspect matching the physical description provided by the TBMG Grid facial recognition overlay. Suspect was cornered in a dead-end alleyway behind a decommissioned synth-food processing plant. Despite initial non-compliance and verbal hostility, officers successfully de-escalated the situation using approved psychological negotiation protocols (Protocol Echo-7). Suspect surrendered after approximately 8 minutes of active negotiation. No weapons were recovered from the suspect, however a scanning sweep revealed concealed contraband including unauthorized neural-link modification chips and 47 grams of unregistered synthetic compound. Suspect was processed and booked.',
        'Officers responded to the scene after receiving multiple automated alerts from the sector surveillance grid. The suspect was found inside a condemned residential unit on the 47th floor of Hab-Block ' + Math.floor(100 + Math.random() * 900) + '. Suspect was in possession of stolen corporate property valued at approximately ' + Math.floor(50000 + Math.random() * 5000000).toLocaleString() + ' NTND. After a brief physical altercation in which the suspect attempted to assault Officer ' + officersStr.split(',')[0] + ' with a modified construction laser, the suspect was subdued via electro-net deployment (Model: EN-40 Restraint System). Suspect sustained minor electrical burns to the left forearm. On-site medic administered basic treatment. Suspect was transported to the nearest processing facility for formal arraignment.',
    ] : [
        'Responding officers arrived at the scene and immediately identified the suspect as a high-threat combatant based on behavioral analysis and weapons scan data. Suspect was armed with a modified Kessler-9 plasma sidearm and exhibited extreme hostility upon visual contact with MCPD personnel. Officer ' + officersStr.split(',')[0] + ' issued a single verbal command to surrender per accelerated ROE protocol. Suspect raised weapon toward officers. Lethal force was authorized and applied immediately. Officer ' + (officersStr.split(',')[1] || officersStr.split(',')[0]).trim() + ' discharged their service weapon (Model: MCPD-Standard HAR-15 Heavy Assault Rifle), striking the suspect center mass with 3 rounds. Suspect was declared deceased at the scene by automated bio-scanner at ' + dateStr + '. No officers were injured during the engagement. The area was cordoned off and evidence collection teams were dispatched. The suspect\'s weapon was recovered and tagged as Evidence Item #' + Math.floor(1000 + Math.random() * 9000) + '.',
        'Units responded to a Priority 1 alert in the designated sector. Upon arrival, officers encountered an active threat situation involving the suspect discharging a weapon at civilian infrastructure. Multiple civilians were observed fleeing the area. Officers established a tactical position behind an armored patrol vehicle and attempted verbal contact. The suspect responded by firing 4 rounds in the direction of the officers, one of which impacted the vehicle\'s ballistic shield. Return fire was authorized under Emergency Lethal Engagement Protocol ELEP-9. A total of 7 rounds were discharged by responding officers. The suspect was struck 5 times and was pronounced deceased at the scene. Ballistic analysis confirmed all rounds originated from officer-issued weapons. Body was processed for identification via cranial chip extraction. Suspect\'s next of kin notification has been delegated to Automated Notification System ANS-' + Math.floor(100 + Math.random() * 900) + '.',
        'Officers were en route to a standard patrol checkpoint when they observed the suspect engaging in what appeared to be an armed confrontation with an unidentified second party. Upon closer approach, the second party fled the scene and has not been identified as of the time of this report. The remaining suspect turned toward the approaching patrol unit and was observed reaching for a concealed object in their waistband. Given the elevated threat level of the sector and the suspect\'s aggressive posture, officers made the tactical decision to engage with lethal force. Officer ' + officersStr.split(',')[0] + ' fired a single precision round from a mounted vehicle turret, neutralizing the suspect instantly. Post-engagement inspection revealed the suspect was carrying a modified vibro-blade and 12,000 NTND in unmarked cred-chips. The scene was secured and forensic drones were deployed for evidence mapping. All officer body-cam footage has been archived to Precinct ' + precinct + ' Evidence Server.',
    ];

    const narrative = narratives[Math.floor(Math.random() * narratives.length)];

    const evidenceTypes = [
        'Modified plasma sidearm (Serial filed off)',
        'Unauthorized neural-link chips x' + Math.floor(2 + Math.random() * 20),
        'Unregistered synthetic compound (' + Math.floor(10 + Math.random() * 200) + 'g)',
        'Stolen corporate data-chip (Encrypted)',
        'Counterfeit NTND cred-chips (' + Math.floor(1000 + Math.random() * 500000).toLocaleString() + ' NTND face value)',
        'Blood samples (Submitted for DNA cross-reference)',
        'Vibro-blade (Modified, illegal class)',
        'Surveillance drone jammer (Active)',
        'Hacked civilian ID cards x' + Math.floor(1 + Math.random() * 10),
        'Biometric spoof glove (Left hand)',
        'Shell casings x' + Math.floor(3 + Math.random() * 15),
        'Security camera footage (Sector ' + sectorNum + ', Cameras ' + Math.floor(1 + Math.random() * 50) + '-' + Math.floor(51 + Math.random() * 50) + ')',
        'Officer body-cam recordings (' + officersStr.split(',').length + ' files)',
        'Forensic drone 3D crime scene mapping',
        'Ballistic trajectory analysis report',
    ];
    
    let evidenceList = '';
    const numEvidence = Math.floor(5 + Math.random() * 8);
    const shuffled = evidenceTypes.sort(() => 0.5 - Math.random());
    for (let i = 0; i < Math.min(numEvidence, shuffled.length); i++) {
        evidenceList += '  ' + (i + 1) + '. ' + shuffled[i] + '\n';
    }

    const iaActions = [
        'INTERNAL AFFAIRS REVIEW: Pending (Est. 6-8 weeks)',
        'INTERNAL AFFAIRS REVIEW: Automatically Cleared - Corporate Override Applied',
        'INTERNAL AFFAIRS REVIEW: Filed. No action taken. Officer(s) commended for efficiency.',
        'INTERNAL AFFAIRS REVIEW: Flagged for review. Review subsequently lost in system error.',
        'INTERNAL AFFAIRS REVIEW: Dismissed. Insufficient evidence of wrongdoing (evidence was deleted).',
    ];

    const fullReport = `
========================================
  MAIN CITY POLICE DEPARTMENT
  OFFICIAL INCIDENT REPORT
  CLASSIFICATION: RESTRICTED
========================================

CASE NUMBER: ${caseNum}
PRECINCT: ${precinct} (District ${district})
DATE/TIME FILED: ${dateStr}
SECTOR: ${sectorNum}

----------------------------------------
  INCIDENT DETAILS
----------------------------------------
INCIDENT TYPE: ${crime.title}
PRIORITY LEVEL: ${(crime.priority || 'MEDIUM').toUpperCase()}
${crime.group ? 'SUSPECTED GANG AFFILIATION: ' + crime.group : 'SUSPECTED GANG AFFILIATION: None Identified'}

RESPONDING OFFICERS: ${officersStr}
TOTAL UNITS DEPLOYED: ${officersStr.split(',').length}
RESPONSE TIME: ${responseTime} minutes
WEATHER CONDITIONS: ${weather}

RULES OF ENGAGEMENT STATUS: ${isROEEnabled ? 'ENABLED (Non-Lethal Protocol Active)' : 'DISABLED (Lethal Force Pre-Authorized)'}
FORCE OUTCOME: ${outcome}

----------------------------------------
  INCIDENT NARRATIVE
----------------------------------------
${narrative}

----------------------------------------
  EVIDENCE MANIFEST
----------------------------------------
Total Items Collected: ${numEvidence}

${evidenceList}
Chain of Custody: Transferred to Evidence Locker ${Math.floor(100 + Math.random() * 900)} at Precinct ${precinct}
Evidence Processing Officer: Auto-Assigned (Unit-${Math.floor(10000 + Math.random() * 90000)})

----------------------------------------
  CIVILIAN IMPACT ASSESSMENT
----------------------------------------
Civilian Witnesses: ${civWitnesses}
Civilian Injuries: ${Math.floor(Math.random() * 4)}
Civilian Fatalities: ${isROEEnabled ? '0' : Math.floor(Math.random() * 3)}
Property Damage Estimate: ${Math.floor(5000 + Math.random() * 2000000).toLocaleString()} NTND
Infrastructure Damage: ${['None', 'Minor (Cosmetic)', 'Moderate (Structural Assessment Required)', 'Severe (Sector Evacuation Recommended)', 'Catastrophic (Corporate Insurance Claim Filed)'][Math.floor(Math.random() * 5)]}
Corporate Liability Waiver: ${Math.random() < 0.7 ? 'ACTIVE - All civilian claims pre-denied' : 'EXPIRED - Legal exposure detected'}

----------------------------------------
  SUSPECT DISPOSITION
----------------------------------------
FINAL STATUS: ${disposition}
${!isROEEnabled ? 'BODY TEMPERATURE AT SCENE: ' + bodyTemp + ' F (Declining)\nTIME OF DEATH: ' + dateStr + '\nCAUSE OF DEATH: Acute ballistic trauma / Officer-involved shooting\nBIOSCAN CHIP EXTRACTED: Yes\nNEXT OF KIN NOTIFIED: Automated System Dispatched' : 'BOOKING NUMBER: BK-' + Math.floor(100000 + Math.random() * 900000) + '\nHOLDING FACILITY: Precinct ' + precinct + ' Detention Block ' + String.fromCharCode(65 + Math.floor(Math.random() * 8)) + '\nMEDICAL CLEARANCE: Pending\nCORPORATE TRIBUNAL DATE: TBD\nLEGAL REPRESENTATION: None (Suspect cannot afford)'}

----------------------------------------
  OFFICER CONDUCT REVIEW
----------------------------------------
EXCESSIVE FORCE FLAG: ${Math.random() < 0.3 ? 'YES (Automatically Dismissed)' : 'NO'}
BODY-CAM FOOTAGE STATUS: ${['Available - Archived', 'Available - Partially Corrupted', 'Unavailable - Camera Malfunction', 'Available - Redacted by Corporate'][Math.floor(Math.random() * 4)]}
${getRandomItem(iaActions)}
OFFICER COMMENDATION: ${Math.random() < 0.5 ? 'Recommended for Corporate Valor Medal' : 'None at this time'}

----------------------------------------
  SUPPLEMENTARY NOTES
----------------------------------------
- All documentation has been filed with the TBMG Trust Nation Central Records Authority.
- This report is auto-generated by MCPD Dispatch Terminal v2.68+.
- Any discrepancies in this report should be reported to Internal Affairs (Note: Internal Affairs does not accept reports).
- Unauthorized distribution of this document is punishable by up to 15 years in a corporate labor facility.

========================================
  END OF REPORT - CASE ${caseNum}
  FILED BY: MCPD AUTOMATED SYSTEMS
  CLASSIFICATION: RESTRICTED
========================================
`;

    return fullReport;
}

async function mockAddDocument(crime, respondingUnits, isROEEnabled) {
    const doc = document.createElement('div');
        unitAssignments[respondingUnits[0]] = '10-8 (Available)';
        unitAssignments[respondingUnits[1]] = '10-8 (Available)';
        if(typeof renderUnitStatus !== 'undefined' && (document.getElementById('tab-unit-status') && document.getElementById('tab-unit-status').classList.contains('active'))) renderUnitStatus();

    doc.className = "event-item high-priority";
    doc.style.borderLeft = "3px solid var(--accent-blue)";
    doc.style.paddingLeft = "10px";
    doc.style.marginBottom = "10px";

    const officersStr = respondingUnits.join(', ');
    const dateStr = new Date().toLocaleDateString('en-US') + " " + getCurrentTimeStr();

    // Initial placeholder
    doc.innerHTML = `
        <span class="time">${getCurrentTimeStr()}</span>
        <div class="title" style="color:var(--accent-blue); display:flex; justify-content:space-between;">
            <span>📌 PINNED TRANSMISSION: ${crime.title.split(':')[0]}</span>
            <span style="font-size:0.8rem; color:var(--text-dim);">Units: ${officersStr}</span>
        </div>
        <div style="color: var(--text-dim); font-size: 0.95rem; font-style: italic; margin-top:5px;" id="loading-doc-${Date.now()}">
            Decrypting generative AI transmission...
        </div>
    `;
    documentListEl.prepend(doc);
    if (documentListEl.children.length > 15) {
        documentListEl.removeChild(documentListEl.lastChild);
    }

    try {
        const reportTones = [
            "Emphasize the collateral damage to the surroundings.",
            "Complain subtly about the paperwork or the bureaucracy.",
            "Mention a malfunctioning piece of police equipment.",
            "Highlight the absolute incompetence of the criminals.",
            "Describe the scene as overly chaotic and neon-drenched.",
            "Keep it purely clinical, cold, and detached.",
            "Mention the horrible weather (acid rain, smog) affecting the operation.",
            "Reference a bizarre cybernetic modification the suspect had."
        ];
        const randomTone = reportTones[Math.floor(Math.random() * reportTones.length)];

        const prompt = `You are a futuristic cyberpunk police officer writing an official incident report. The incident was: ${crime.title}. Responding officers: ${officersStr}. ROE was ${isROEEnabled ? 'ENABLED (Non-Lethal pacification used)' : 'DISABLED (Lethal force authorized and suspect was neutralized)'}. Write a concise, gritty, 4-sentence narrative of what happened and the outcome. ${randomTone} Be extremely professional but cynical. No roleplay actions.`;

        throw new Error('AI Disabled - using scripted fallback');
// 
        if (response.ok) {
            let aiText = await response.text();
            aiText = aiText.replace(/^["']|["']$/g, '').trim();

            const fullReport = `INCIDENT TYPE: ${crime.title}
TIME FILED: ${dateStr}
RESPONDING OFFICERS: ${officersStr}
TOTAL UNITS DEPLOYED: ${officersStr.split(',').length}
${crime.group ? "GANG AFFILIATION: " + crime.group + "<br>" : ""}
-- INCIDENT NARRATIVE (AI GENERATED) --<br>
${aiText}`;

            doc.innerHTML = `
                <span class="time">${getCurrentTimeStr()}</span>
                <div class="title" style="color:var(--accent-blue); display:flex; justify-content:space-between;">
                    <span>📌 PINNED TRANSMISSION: ${crime.title.split(':')[0]}</span>
                    <span style="font-size:0.8rem; color:var(--text-dim);">Units: ${officersStr}</span>
                </div>
                <div style="color: #fff; font-size: 0.95rem; font-style: italic; margin-top:5px; border-left: 2px solid rgba(255,255,255,0.2); padding-left: 8px;">
                    "${aiText}"
                </div>
                <button class="doc-btn" style="margin-top: 10px; padding: 5px;" onclick="openReportModal(\`${fullReport}\`)">VIEW AUTOMATED REPORT EXTRACT</button>
            `;
        } else {
            throw new Error("AI Generation Failed");
        }
    } catch (e) {
        // Fallback if AI fails
        const fallbackText = generateMassiveReport(crime, officersStr, dateStr, isROEEnabled);
        const fullReport = fallbackText;
        doc.innerHTML = `
            <span class="time">${getCurrentTimeStr()}</span>
            <div class="title" style="color:var(--accent-blue); display:flex; justify-content:space-between;">
                <span>📌 PINNED TRANSMISSION: ${crime.title.split(':')[0]}</span>
                <span style="font-size:0.8rem; color:var(--text-dim);">Units: ${officersStr}</span>
            </div>
            <div style="color: #fff; font-size: 0.95rem; font-style: italic; margin-top:5px; border-left: 2px solid rgba(255,255,255,0.2); padding-left: 8px;">
                "Click VIEW REPORT for full incident documentation."
            </div>
            <button class="doc-btn" style="margin-top: 10px; padding: 5px;" onclick="openReportModal(\`${fullReport}\`)">VIEW AUTOMATED REPORT EXTRACT</button>
        `;
    }
}

// Global function to open modal

window.downloadIncidentReport = function() {
    const reportText = document.getElementById('modal-body').innerText;
    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MCPD_Incident_Report_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

window.openReportModal = function (reportHTML) {
    document.getElementById('modal-body').innerHTML = reportHTML;
    document.getElementById('report-modal').style.display = 'flex';
};

// --- Panic System ---

const panicAudioElement = new Audio('assets/panic-button.mp3');
panicAudioElement.loop = true;

function playPanicSound() {
    panicAudioElement.currentTime = 0;
    panicAudioElement.play().catch(e => console.log("Audio block", e));
}

function stopPanicSound() {
    panicAudioElement.pause();
    panicAudioElement.currentTime = 0;
}


window.panicTimestamps = [];
window.reactedToMassPanic10 = false;
window.reactedToMassPanic50 = false;
window.chatChaosInterval = null;

function checkMassPanicThreshold(triggeringUnit) {
    const now = Date.now();
    window.panicTimestamps.push(now);
    window.panicTimestamps = window.panicTimestamps.filter(t => now - t < 10000);
    const count = window.panicTimestamps.length;

    if (count >= 50 && !window.reactedToMassPanic50) {
        window.reactedToMassPanic50 = true;
        trigger50PanicSequence();
        setTimeout(() => window.reactedToMassPanic50 = false, 60000);
    } else if (count >= 10 && !window.reactedToMassPanic10 && !window.reactedToMassPanic50) {
        window.reactedToMassPanic10 = true;
        trigger10PanicSequence(triggeringUnit);
        setTimeout(() => window.reactedToMassPanic10 = false, 30000);
    }
}

function trigger10PanicSequence(lastPanicUnit) {
    const active = getActiveCallsigns();
    if (active.length < 4) return;
    
    setTimeout(() => addChatMessage(getRandomItem(active), "Whoa whoa whoa, why are there so many 10-99s all of a sudden?!", "worried"), 1000);
    setTimeout(() => addChatMessage(getRandomItem(active), `Are you guys actually in trouble or is ${lastPanicUnit} just leaning on the console again?`, "serious"), 2500);
    setTimeout(() => addChatMessage(getRandomItem(active), "Stop hitting the panic buttons all at the same time! My terminal is deafening me!", "worried"), 4500);
    setTimeout(() => addChatMessage(getRandomItem(active), "Seriously, do you actually need help or is this a system glitch?!", "serious"), 7000);
}

function trigger50PanicSequence() {
    const active = getActiveCallsigns();
    if (active.length < 5) return;
    
    // Initial chaos lines
    const chaosLines = [
        "OH MY GOD THE ENTIRE GRID IS FLASHING RED!",
        "WHAT IS HAPPENING?! IS IT A WAR?!",
        "DISPATCH, 50 PANICS AT ONCE?! ARE WE UNDER ATTACK?!",
        "I'M FALLING BACK! EVERYONE FALL BACK TO THE PRECINCT!",
        "CORPORATE HQ IS GOING TO NUKE THE SECTOR, ABORT!",
        "I'M NOT DYING OUT HERE TODAY! I'M OUT!",
        "MAYDAY! MAYDAY! THE WHOLE CITY IS BURNING!",
        "WHY IS EVERYONE PANICKING?! STOP PANICKING!",
        "MY EARS ARE BLEEDING FROM THE ALARMS!",
        "I KNEW THIS JOB WAS A DEATH TRAP!"
    ];

    // Ramp up chat speed extremely fast
    if (typeof chatSimulateInt !== 'undefined') clearInterval(chatSimulateInt);
    
    let currentSpeed = 300; // Hyper fast chat
    let chaosElapsed = 0;
    
    function chaosLoop() {
        addChatMessage(getRandomItem(active), getRandomItem(chaosLines), "worried");
        
        chaosElapsed += currentSpeed;
        
        // Gradually slow down over 30 seconds
        if (chaosElapsed < 30000) {
            // Lerp from 300ms to 3000ms over 30 seconds
            const progress = chaosElapsed / 30000;
            currentSpeed = 300 + (2700 * progress);
            window.chatChaosInterval = setTimeout(chaosLoop, currentSpeed);
        } else {
            // Calm down, restore normal interval
            addChatMessage(getRandomItem(active), "Okay... I think the system just malfunctioned. Stand down everyone.", "serious");
            chatSimulateInt = setInterval(simulateChat, 1500);
        }
    }
    
    chaosLoop();
}

function triggerPanic(unitName = null, force = false) {
    const panicToggle = document.getElementById('panic-toggle');
    if (!force && (!panicToggle || !panicToggle.checked)) {
        return; // Auto-panics blocked by advanced settings (default to off if missing)
    }
    
    let unit = unitName;
    const activeCallsigns = getActiveCallsigns();
    if (!unit) {
        const availableUnits = activeCallsigns.filter(c => !activePanics.has(c));
        if (availableUnits.length > 0) {
            unit = getRandomItem(availableUnits);
        } else {
            return; // Can't panic if no one is available
        }
    }

    if (activePanics.has(unit)) return; // This specific unit is already in panic

    // Store timeouts to clear later
    const panicData = {
        visualTimeout: null,
        soundTimeout: null
    };
    activePanics.set(unit, panicData);
    checkMassPanicThreshold(unit);

    // Add to unified log immediately with localized flashing class
    const div = document.createElement('div');
    div.className = `event-item high-priority panic-log-flash`;
    div.style.width = "100%";
    div.id = `panic-log-${unit}-${Date.now()}`; // Unique ID
    div.innerHTML = `
        <span class="time">${getCurrentTimeStr()}</span>
        <div class="title" style="color:var(--panic-orange); font-size:1.1rem; text-shadow:0 0 10px var(--panic-red);">🚨 10-99: OFFICER PANIC BUTTON 🚨</div>
        <div style="color: #000; font-size: 0.95rem; margin-top: 4px;">Unit ${unit} has triggered a panic button and requires immediate assistance! "My location is Sector ${Math.floor(Math.random()*9)+1}, Grid ${Math.floor(100+Math.random()*900)}!" Mandatory to respond. <strong style="color:var(--panic-red);">500 POINTS ADDED IF ENGAGED.</strong></div>
    `;
    unifiedLogEl.appendChild(div);
    scrollToBottom(unifiedLogEl);

    // AI Officer dynamically engages the panic and awards points
    setTimeout(() => {
        const backupUnit = getRandomItem(getActiveCallsigns());
        const chatDiv = document.createElement('div');
        chatDiv.className = 'chat-msg';
        chatDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender">[${backupUnit}]</span> <span class="text" style="color: var(--accent-green) !important;">${getRandomItem(GLOBAL_ARRIVING_CHATS_PANIC)}</span>`;
        unifiedLogEl.appendChild(chatDiv);
        scrollToBottom(unifiedLogEl);
        if (typeof awardOfficerPoints !== 'undefined' && typeof backupUnit !== 'undefined') { awardOfficerPoints(backupUnit, 500); } else { addPoints(500); }
    }, 4500 + Math.random() * 3000);

    unifiedLogEl.classList.add('panic-container-glow');
    playPanicSound();
    clearPanicBtn.style.display = 'inline-block';

    // Set auto-resolve for panic sound (5 seconds)
    panicData.soundTimeout = setTimeout(() => {
        // Only stop the sound, don't auto-resolve the entire panic state
        stopPanicSound();
    }, 5000); // 5 seconds

    // Auto-resolve this panic after 15-30 seconds
    panicData.visualTimeout = setTimeout(() => {
        resolveSpecificPanic(unit);
        const activeCallsigns = getActiveCallsigns();
        if (activeCallsigns.length > 0) {
            const responder = getRandomItem(activeCallsigns);
            addChatMessage(responder, `Dispatch, I'm on scene with ${unit}. Situation is under control. Code 4.`, 'serious');
        }
    }, 15000 + Math.random() * 15000);
}

function resolveSpecificPanic(unit) {
    if (!activePanics.has(unit)) return;

    const data = activePanics.get(unit);
    clearTimeout(data.visualTimeout);
    clearTimeout(data.soundTimeout);

    // Find the flashing log element for this unit and remove the flashing class
    // We can find all elements with panic-log-flash and look for unit name
    document.querySelectorAll('.panic-log-flash').forEach(el => {
        if (el.innerHTML.includes(`Unit ${unit} `)) {
            el.classList.remove('panic-log-flash');
            el.style.borderLeftColor = 'var(--panic-red)';
        }
    });

    activePanics.delete(unit);

    if (activePanics.size === 0) {
        stopPanicSound();
        unifiedLogEl.classList.remove('panic-container-glow');
        clearPanicBtn.style.display = 'none';

        const div = document.createElement('div');
        div.className = `event-item`;
        div.innerHTML = `
            <span class="time">${getCurrentTimeStr()}</span>
            <div class="title" style="color:var(--accent-green);">CODE 4: PANIC SITUATION RESOLVED</div>
            <div style="font-size: 0.9rem; color: #ccc;">Situation under control. All units resume normal patrol.</div>
        `;
        unifiedLogEl.appendChild(div);
        scrollToBottom(unifiedLogEl);
    }
}

function clearPanic() {
    if (activePanics.size === 0) return;

    // Resolve all
    const units = Array.from(activePanics.keys());
    units.forEach(u => resolveSpecificPanic(u));
}

// Event Listeners
advancedControlsHeader.addEventListener('click', () => {
    if (advancedControlsBody.style.display === 'none') {
        advancedControlsBody.style.display = 'block';
        advancedChevron.textContent = '▲';
    } else {
        advancedControlsBody.style.display = 'none';
        advancedChevron.textContent = '▼';
    }
});

manualPanicBtn.addEventListener('click', () => triggerPanic(null, true));
btnEvtRobbery.addEventListener('click', () => simulateEvent(crimeReports.find(c => c.title.includes("Robbery"))));
btnEvtSuspicious.addEventListener('click', () => simulateEvent(crimeReports.find(c => c.title.includes("Suspicious"))));
btnEvtTraffic.addEventListener('click', () => simulateEvent({ title: "10-50: Traffic Stop", priority: "medium" }));
btnEvtRandom.addEventListener('click', () => simulateEvent());
if (btnEvtConfusion) btnEvtConfusion.addEventListener('click', () => {
    const confusedCalls = crimeReports.filter(c => c.title.includes("10-30"));
    if (confusedCalls.length > 0) {
        simulateEvent(confusedCalls[Math.floor(Math.random() * confusedCalls.length)]);
    }
});
btnArrestNearby.addEventListener('click', () => simulateEvent({ title: "10-15: Arrest Nearby Suspect", priority: "low", group: "Local vagrants" }));
clearPanicBtn.addEventListener('click', () => clearPanic());

dispatchChatSend.addEventListener('click', processDispatchChat);
dispatchChatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processDispatchChat();
    }
});

dispatchChatInput.addEventListener('focus', () => {
    // Optional: could pause some auto events when typing, but let's leave it chaotic
});

// Tab Interaction logic
const tabDatabase = document.getElementById('tab-database');
const tabWanted = document.getElementById('tab-wanted');
const tabItSupport = document.getElementById('tab-it-support');
const tabCitizens = document.getElementById('tab-citizens');
const databaseLogEl = document.getElementById('database-log');
const wantedLogEl = document.getElementById('wanted-log');
const itSupportLogEl = document.getElementById('it-support-log');
const citizensLogEl = document.getElementById('citizens-log');
      
// Citizen Page Elements
const citizenListView = document.getElementById('citizens-list-view');
const citizenDossierView = document.getElementById('citizen-dossier-view');
const citizenPageTitle = document.getElementById('citizen-page-title');
const citizenPageBody = document.getElementById('citizen-page-body');
const btnCloseDossier = document.getElementById('btn-close-dossier');
const btnDeclareInnocent = document.getElementById('btn-declare-innocent-page');
const btnDeclareSuspicious = document.getElementById('btn-declare-suspicious-page');
const btnDeclareWanted = document.getElementById('btn-declare-wanted-page');
const btnDeclareWarrant = document.getElementById('btn-declare-warrant-page');
const btnDeclareArrested = document.getElementById('btn-declare-arrested-page');
const btnDeclareDead = document.getElementById('btn-declare-dead-page');
const citizensListEl = document.getElementById('citizens-list');

function hideAllTabs() {
    if (typeof tabMap !== 'undefined' && tabMap) { tabMap.classList.remove('active'); tabMap.style.color = 'var(--text-dim)'; }
    if (typeof mapLogEl !== 'undefined' && mapLogEl) mapLogEl.style.display = 'none';
    tabUnified.classList.remove('active');
    tabUnified.style.color = 'var(--text-dim)';
    tabDocuments.classList.remove('active');
    tabDocuments.style.color = 'var(--text-dim)';
    tabDatabase.classList.remove('active');
    tabDatabase.style.color = 'var(--text-dim)';
    tabWanted.classList.remove('active');
    tabWanted.style.color = 'var(--text-dim)';
    if (tabItSupport) { tabItSupport.classList.remove('active'); tabItSupport.style.color = 'var(--text-dim)'; }
    tabCitizens.classList.remove('active');
    tabCitizens.style.color = 'var(--text-dim)';
    if(tabRecruitment) { tabRecruitment.classList.remove('active'); tabRecruitment.style.color = 'var(--text-dim)'; }
    if(document.getElementById('unit-status-log')) document.getElementById('unit-status-log').style.display = 'none';
    if(document.getElementById('tab-unit-status')) { document.getElementById('tab-unit-status').classList.remove('active'); document.getElementById('tab-unit-status').style.color = 'var(--text-dim)'; }
    if(typeof tabUnitStatus !== 'undefined' && tabUnitStatus) { tabUnitStatus.classList.remove('active'); tabUnitStatus.style.color = 'var(--text-dim)'; }
    if(typeof unitStatusLogEl !== 'undefined' && unitStatusLogEl) unitStatusLogEl.style.display = 'none';
    
    unifiedLogEl.style.display = 'none';
    if(typeof chatInputArea !== 'undefined' && chatInputArea) chatInputArea.style.display = 'none';
    documentLogEl.style.display = 'none';
    databaseLogEl.style.display = 'none';
    wantedLogEl.style.display = 'none';
    if (itSupportLogEl) itSupportLogEl.style.display = 'none';
    citizensLogEl.style.display = 'none';
    if(typeof recruitmentLogEl !== 'undefined' && recruitmentLogEl) recruitmentLogEl.style.display = 'none';

    const tabDms = document.getElementById('tab-dms');
    if (tabDms) { tabDms.classList.remove('active'); tabDms.style.color = 'var(--text-dim)'; }
    const dmsLogEl = document.getElementById('dms-log');
    if (dmsLogEl) dmsLogEl.style.display = 'none';
}

tabUnified.addEventListener('click', () => {
    hideAllTabs();
    tabUnified.classList.add('active');
    tabUnified.style.color = 'var(--text-main)';
    unifiedLogEl.style.display = 'flex';
    if(typeof chatInputArea !== 'undefined' && chatInputArea) chatInputArea.style.display = 'flex';
});

tabDocuments.addEventListener('click', () => {
    hideAllTabs();
    tabDocuments.classList.add('active');
    tabDocuments.style.color = 'var(--text-main)';
    documentLogEl.style.display = 'block';
});

tabDatabase.addEventListener('click', () => {
    hideAllTabs();
    tabDatabase.classList.add('active');
    tabDatabase.style.color = 'var(--text-main)';
    databaseLogEl.style.display = 'block';
});

tabWanted.addEventListener('click', () => {
    hideAllTabs();
    tabWanted.classList.add('active');
    tabWanted.style.color = 'var(--text-main)';
    wantedLogEl.style.display = 'block';
});

if (tabItSupport) {
    tabItSupport.addEventListener('click', () => {
        hideAllTabs();
        tabItSupport.classList.add('active');
        tabItSupport.style.color = 'var(--text-main)';
        if (itSupportLogEl) itSupportLogEl.style.display = 'block';
    });
}



  if(tabRecruitment) {
      tabRecruitment.addEventListener('click', () => {
          hideAllTabs();
          tabRecruitment.classList.add('active');
          tabRecruitment.style.color = 'var(--text-main)';
          
        if(typeof tabUnitStatus !== 'undefined' && tabUnitStatus) { tabUnitStatus.classList.remove('active'); tabUnitStatus.style.color = 'var(--text-dim)'; }
        if(typeof unitStatusLogEl !== 'undefined' && unitStatusLogEl) unitStatusLogEl.style.display = 'none';
recruitmentLogEl.style.display = 'block';
          if(currentApplicants.length === 0) generateApplicants();
      });
  }


tabCitizens.addEventListener('click', () => {
    hideAllTabs();
    tabCitizens.classList.add('active');
    tabCitizens.style.color = 'var(--text-main)';
    
        if(typeof tabUnitStatus !== 'undefined' && tabUnitStatus) { tabUnitStatus.classList.remove('active'); tabUnitStatus.style.color = 'var(--text-dim)'; }
        if(typeof unitStatusLogEl !== 'undefined' && unitStatusLogEl) unitStatusLogEl.style.display = 'none';
citizensLogEl.style.display = 'block';
    if (citizenDossierView) citizenDossierView.style.display = 'none';
    if (citizenListView) citizenListView.style.display = 'block';
});

  
// Personnel & PM Logic
function renderRoster() {
    let onDutyCount = roster.filter(u => u.status === 'On Duty').length;
    if(rosterTotalCountEl) rosterTotalCountEl.innerText = onDutyCount;
}

// Recruit Logic


  function generateApplicants() {
      if(!applicantListEl) return;
      applicantListEl.innerHTML = '';
      currentApplicants = [];
      for(let i=0; i<5; i++) {
          const applicant = {
              id: `Unit-${Math.floor(10000 + Math.random() * 90000)}`,
              status: 'On Duty',
              personality: getRandomPersonality(),
                gender: getRandomGender(),
            maritalStatus: ['Single', 'Married', 'Married', 'Divorced', 'Divorced', 'Widowed', 'Married (Corporate Arranged)', 'Legally Separated', 'Complicated'][Math.floor(Math.random() * 9)],
              sector: Math.floor(Math.random() * 9) + 1
          };
          currentApplicants.push(applicant);
          
          const card = document.createElement('div');
          card.className = 'applicant-card';
          card.innerHTML = `
              <div class="applicant-info">
                  <span class="applicant-name">${applicant.id}</span>
                  <span class="applicant-trait">Psych Eval: ${applicant.personality}</span>
              </div>
              <button class="doc-btn" style="border-color:var(--accent-green);color:var(--accent-green);" onclick="recruitApplicant(${i})">RECRUIT</button>
          `;
          applicantListEl.appendChild(card);
      }
  }

  if(refreshApplicantsBtn) {
      refreshApplicantsBtn.addEventListener('click', generateApplicants);
  }

  window.recruitApplicant = function(index) {
      const applicant = currentApplicants[index];
      if(applicant) {
          roster.push(applicant);
          currentApplicants.splice(index, 1);
          generateApplicants(); // Re-render
          renderRoster();
          addChatMessage('DISPATCH', `AUTOMATED MESSAGE: ${applicant.id} has joined the active roster.`, 'dispatch-msg');
          setTimeout(() => addChatMessage(applicant.id, `10-8, I'm on duty and available for calls.`, 'dispatch-msg'), 2000);
      }
  };

  // 20-Unit Minimum Logic loop
  setInterval(() => {
      if (restModeToggle && restModeToggle.checked) return;
      const onDuty = roster.filter(u => u.status === 'On Duty');
      if (onDuty.length < 200) {
          // Find an off duty one to put on duty
          const offDuty = roster.find(u => u.status === 'Off Duty');
          if (offDuty) {
              offDuty.status = 'On Duty';
              addChatMessage(offDuty.id, `10-8, I'm back on duty.`, 'dispatch-msg');
          } else {
              // Force generate a new one
              const newUnit = {
                  id: `Unit-${Math.floor(10000 + Math.random() * 90000)}`,
                  status: 'On Duty',
                  personality: getRandomPersonality(),
                gender: getRandomGender(),
            maritalStatus: ['Single', 'Married', 'Married', 'Divorced', 'Divorced', 'Widowed', 'Married (Corporate Arranged)', 'Legally Separated', 'Complicated'][Math.floor(Math.random() * 9)],
                  sector: Math.floor(Math.random() * 9) + 1
              };
              roster.push(newUnit);
              addChatMessage('DISPATCH', `SYSTEM: Automatically drafted ${newUnit.id} to maintain minimum active units.`, 'dispatch-msg');
              setTimeout(() => addChatMessage(newUnit.id, `10-8, I'm on duty and available for calls.`, 'dispatch-msg'), 1500);
          }
          renderRoster();
      }
  }, 10000);
 // Check every 60 seconds

// Auto-Duty Logic loop
setInterval(() => {
    if (restModeToggle.checked || roster.length === 0) return;

    // Pick a random officer to flip duty status occasionally
    if (Math.random() < 0.3) {
        const idx = Math.floor(Math.random() * roster.length);
        if (roster[idx].status !== 'Suspended') {
            const oldStatus = roster[idx].status;
            roster[idx].status = oldStatus === 'On Duty' ? 'Off Duty' : 'On Duty';
            renderRoster();
        }
    }
}, 10000); // Check every 15 seconds

// Initial render
renderRoster();

let currentPMUnit = null;
const pmTitle = document.getElementById('pm-title');
const pmHistory = document.getElementById('pm-chat-history');

// -----------------------------------------------------
// CITIZENS DIRECTORY LOGIC
// -----------------------------------------------------

let globalCitizens = [];
let currentViewingCitizen = null;

const INNOCENT_COLOR = "var(--accent-green)";
const SUSPICIOUS_COLOR = "var(--panic-orange)";
const WANTED_COLOR = "var(--panic-red)";
const ARRESTED_COLOR = "#9e9e9e";
const ESCAPED_COLOR = "#d946ef"; // Purple/Pinkish for escaped


const fictionalBrands = [
    "Toyotad", "Fjord Motor Co.", "Chevrolegs", "Teslah", 
    "Bavarian Motor Wagon (BWM)", "Mercedez-Bends", "Dodg-e", "Honk Motors", 
    "Nissun", "Porsha", "Lambor-Jeepni", "Volks-Wagon", "Subarude", 
    "Hyundie", "Mazduh", "Cadillack", "Keea Motors", "Chrysler-Paganini",
    "Aston-Martinized", "Rolls-Royce-Royce"
];

const fictionalModels = [
    "Hover-Corolla 9000X with 14 Wheels",
    "Exploder Turbo-Glider Nuclear V8",
    "Impaler Cyber-Submarine Coupe",
    "Model Quad-S Rocket-Powered Bicycle",
    "M9-TwinTurbine Anti-Gravity Hearse",
    "E-Class Interceptor Armored Bathtub",
    "Hellkitten Supercharged Lawn Mower 4x4",
    "Civic Anti-Grav Flying Tractor",
    "Altima Black-Hole Edition (Missing 3 Doors)",
    "911 Turbo Glider with Solar Parachute",
    "Diabolo Steam-Driven Shopping Cart",
    "Hover-Beetle 1984 (Powered by Hamsters)",
    "Out-Of-Bounds 2.5XT Underwater Hatchback",
    "Sonata Cyber-Tank with Sunroof",
    "Miata Heavy Armored Hover-Barge",
    "Escalation Nuclear Luxury Rickshaw",
    "Soul Rocket-Propelled Wheelbarrow",
    "Silverado 8-Engine Flying Dump Truck",
    "Prius Stealth Anti-Matter Hover-Pod",
    "Wrangler 6-Legged Walking Off-Roader"
];

const licensePool = [
    "Class 2 Targeted Execution Permit",
    "Class 8 Public Execution License",
    "Class 10 Stealth Execution Permit",
    "Class 11 Summary Execution License",
    "Class 13 Targeted Execution Permit",
    "Class 14 Public Execution License",
    "Class 15 Offshore Execution Permit",
    "Class 16 Public Execution License",
    "Class 17 Summary Execution License",
    "Class 19 Public Execution License",
    "Class 20 Unarmed Execution Permit",
    "Class 21 Sanctioned Execution License",
    "Class 22 Collateral Damage Execution License",
    "Class 23 Cybernetic Execution Endorsement",
    "Class 25 Total Annihilation Execution Permit",
    "Class 26 Mass Execution Authorization",
    "Class 28 Summary Execution License",
    "Class 32 Stealth Execution Permit",
    "Class 33 Summary Execution License",
    "Class 34 Sanctioned Execution License",
    "Class 36 Sanctioned Execution License",
    "Class 38 Lethal Execution Permit",
    "Class 39 High-Value Target Execution License",
    "Class 43 Mass Execution Authorization",
    "Class 45 High-Value Target Execution License",
    "Class 46 Mass Execution Authorization",
    "Class 47 Unarmed Execution Permit",
    "Class 48 Corporate Assassination License",
    "Class 50 Summary Execution License",
    "Class 52 Mass Execution Authorization",
    "Class 55 Sanctioned Execution License",
    "Class 56 Mass Execution Authorization",
    "Class 59 Mass Execution Authorization",
    "Class 62 Corporate Assassination License",
    "Class 63 Cybernetic Execution Endorsement",
    "Class 67 Summary Execution License",
    "Class 71 Stealth Execution Permit",
    "Class 72 Mass Execution Authorization",
    "Class 74 Targeted Execution Permit",
    "Class 83 Offshore Execution Permit",
    "Class 84 Summary Execution License",
    "Class 85 Unarmed Execution Permit",
    "Class 88 High-Value Target Execution License",
    "Class 94 Stealth Execution Permit",
    "Class 95 Lethal Execution Permit",
    "Class 97 Collateral Damage Execution License",
    "Class 100 Sanctioned Execution License",
    "Class 101 Stealth Execution Permit",
    "Class 102 Public Execution License",
    "Class 103 Corporate Assassination License",
    "Class 106 Targeted Execution Permit",
    "Class 107 Offshore Execution Permit",
    "Class 110 Summary Execution License",
    "Class 111 Corporate Assassination License",
    "Class 112 Cybernetic Execution Endorsement",
    "Class 113 Lethal Execution Permit",
    "Class 114 Summary Execution License",
    "Class 115 Stealth Execution Permit",

    "Hover-Vehicle Class C Operator License",
    "Sentient Cyber-Toaster Ownership License",
    "Sub-Dermal Concealed Cyber-Weapon Permit",
    "Public Breathing & Oxygen Allocation Permit",
    "Class-4 Nuclear Lawn Mower License",
    "Anti-Gravity Unicycle Endorsement",
    "Pet Raccoon Cybernetic Enhancement License",
    "Level 2 Sidewalk Loitering Permit",
    "Extreme Sarcasm Public Usage Permit",
    "Commercial Drone Swarm Pilot License",
    "Underground Spire Vending License",
    "Household Synthetic Hamster License",
    "Quantum Microwave Culinary Permit",
    "Low-Altitude Jetpack Flight Clearance"
];

const insuranceProviders = [
    "Geiko Cyber-Shield",
    "State-Farm Bureau of Total Loss",
    "All-Skate Bodily Vaporization Liability",
    "Pro-Gressive Dystopian Indemnity",
    "Liberty-Mutual Cybernetic Crash Protect",
    "MCPD Municipal Risk Pool",
    "Underworld Black-Market Gap Insurance"
];

function getRandomCivPersonality() {
    const customWeightsStr = localStorage.getItem('mcpd_civ_personality_weights');
    let weights = {
        'Passive': 20,
        'Partially Aggressive': 20,
        'Aggressive': 10,
        'Panicked': 20,
        'Furry': 30
    };

    if (customWeightsStr) {
        try {
            weights = JSON.parse(customWeightsStr);
        } catch(e) {}
    }
    
    let pool = [];
    for (let p in weights) {
        let count = parseInt(weights[p]);
        if (isNaN(count)) count = 0;
        for (let i = 0; i < count; i++) {
            pool.push(p);
        }
    }
    
    if (pool.length === 0) return "Passive";
    return pool[Math.floor(Math.random() * pool.length)];
}

function generateCitizens() {
    const firstNames = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Elena", "Marcus", "Sophia", "Viktor", "Aaliyah", "Desmond", "Fiona", "Gideon", "Haley", "Ivan", "Jocelyn", "Kael", "Lana", "Malik", "Nia", "Orion", "Penelope", "Quinn", "Rowan", "Serena", "Tariq", "Uma", "Vance", "Wren", "Xavier", "Yara", "Zane"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Chen", "Lee", "Kim", "Patel", "Singh", "Nguyen", "Ali", "Hassan", "Kovacs", "Novak", "Silva", "Costa", "Rossi", "Conti", "Dubois", "Lefevre", "Muller", "Schmidt", "Ivanov", "Sokolov", "Gomez", "Ruiz", "Tanaka", "Yamamoto", "Okafor", "Adebayo", "Cohen", "Levi"];
    const traits = ["No known modifications.", "Optical cyberware detected.", "Sub-dermal armor present.", "Neural link active.", "Prosthetic limb (Left Arm).", "Prosthetic limb (Right Leg).", "Voice modulator installed.", "No prior record.", "Known associate of local gangs.", "Frequent traveler to off-world colonies.", "Employed at Tyrell Corporation.", "Unemployed.", "Student at City University.", "Works in Sector 4 Industrial Zone."];
    const histories = [
        "None.", "None.", "None.", "None.", "None.",
        "Minor citation: Curfew violation.",
        "Misdemeanor: Loitering in restricted sector.",
        "Prior conviction: Smuggling contrabands.",
        "Prior conviction: Assault.",
        "Prior conviction: Hacking terminal.",
        "MULTIPLE WARRANTS: Armed Robbery, Extortion.",
        "MULTIPLE WARRANTS: Anti-Civil Behavior, Murder.",
        "KNOWN SYNDICATE ENFORCER. High-risk."
    ];
    const civPersonalities = ["Passive", "Passive", "Partially Aggressive", "Partially Aggressive", "Aggressive", "Panicked", "Panicked", "Furry", "Furry", "Furry"];

    for (let i = 0; i < 5000; i++) {
        const first = getRandomItem(firstNames);
        const middle = getRandomItem(firstNames);
        const last = getRandomItem(lastNames);
        const randId = `CID-${Math.floor(Math.random() * 900000) + 100000}`;
        const civNum = Math.floor(10000000 + Math.random() * 90000000);
        const hist = getRandomItem(histories);
        
        let initialStatus = 'Innocent';
        if (hist.includes("MULTIPLE WARRANTS") || hist.includes("KNOWN SYNDICATE")) {
            initialStatus = 'Wanted';
        } else if (hist.includes("Prior conviction")) {
            initialStatus = Math.random() > 0.5 ? 'Suspicious' : 'Innocent';
        }

        // Fictional vehicle & insurance
        const brand = getRandomItem(fictionalBrands);
        const model = getRandomItem(fictionalModels);
        const plate = `${Math.floor(1 + Math.random()*9)}${String.fromCharCode(65 + Math.floor(Math.random()*26))}${String.fromCharCode(65 + Math.floor(Math.random()*26))}${String.fromCharCode(65 + Math.floor(Math.random()*26))}-${Math.floor(100 + Math.random()*900)}`;
        const provider = getRandomItem(insuranceProviders);
        const isInsuranceExpired = Math.random() < 0.45;
        const overdueDays = Math.floor(Math.random() * 450) + 12;
        
        const insuranceStatusText = isInsuranceExpired ? `EXPIRED (${overdueDays} Days Overdue)` : `VALID & ACTIVE (Paid in Full)`;
        const insuranceBadge = isInsuranceExpired 
            ? `<span style="color:var(--panic-red); font-weight:bold;">EXPIRED (${overdueDays}d overdue)</span>`
            : `<span style="color:var(--accent-green); font-weight:bold;">VALID / ACTIVE</span>`;

        // Licenses (1 to 3 random licenses with statuses)
        const numLicenses = Math.floor(Math.random() * 3) + 1;
        const citizenLicenses = [];
        const licenseStatuses = [
            { text: "VALID", color: "var(--accent-green)" },
            { text: "EXPIRED", color: "var(--panic-red)" },
            { text: "SUSPENDED (Reckless Operation)", color: "var(--panic-orange)" },
            { text: "REVOKED BY MCPD", color: "var(--panic-red)" }
        ];

        // Always include driver/hover license first
        const driverStatus = Math.random() < 0.3 ? licenseStatuses[1] : (Math.random() < 0.1 ? licenseStatuses[2] : licenseStatuses[0]);
        citizenLicenses.push({
            name: "Hover-Vehicle Class C Operator License",
            status: driverStatus.text,
            color: driverStatus.color
        });

        for (let l = 1; l < numLicenses; l++) {
            const randomLicName = getRandomItem(licensePool.filter(lic => lic !== "Hover-Vehicle Class C Operator License"));
            const randomStatus = getRandomItem(licenseStatuses);
            if (!citizenLicenses.some(item => item.name === randomLicName)) {
                citizenLicenses.push({
                    name: randomLicName,
                    status: randomStatus.text,
                    color: randomStatus.color
                });
            }
        }

        const birthYear = Math.floor(Math.random() * 55) + 1950;
        const birthMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const birthDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
        const age = 2026 - birthYear;

        const cit = {
            id: randId,
            civNumber: civNum,
            gender: getRandomGender(),
            maritalStatus: ['Single', 'Married', 'Married', 'Divorced', 'Divorced', 'Widowed', 'Married (Corporate Arranged)', 'Legally Separated', 'Complicated'][Math.floor(Math.random() * 9)],
            balance: Math.random() < 0.05 ? Math.floor(Math.random() * 900000000) + 100000000 : Math.random() < 0.15 ? Math.floor(Math.random() * 9000000) + 1000000 : Math.floor(Math.random() * 900000) + 100000,
            name: `${first} ${middle} ${last}`,
            networkIP: `${String(Math.floor(Math.random()*999)).padStart(3, '0')}.${String(Math.floor(Math.random()*999)).padStart(3, '0')}.${String(Math.floor(Math.random()*999)).padStart(3, '0')}.${String(Math.floor(Math.random()*999)).padStart(3, '0')}`,
            networkLocation: getRandomItem(['Deep Sea Server Alpha - Gulf of TBMG', 'Offshore Data Rig 7 - Gulf of TBMG', 'Underwater Hub Omega - Gulf of TBMG', 'TBMG Primary Ocean Array - Gulf of TBMG', 'Floating Server Barge - Gulf of TBMG']),
            status: initialStatus,
            trait: getRandomItem(traits),
            history: hist,
            civPersonality: getRandomCivPersonality(),
            address: `Sector ${Math.floor(Math.random() * 20 + 1)}, Block ${Math.floor(Math.random() * 9 + 1)}`,
            dob: `${birthYear}-${birthMonth}-${birthDay} (Age: ${age})`,
            vehicle: {
                brand: brand,
                model: model,
                fullName: `${brand} ${model}`,
                plate: plate,
                insuranceProvider: provider,
                isExpired: isInsuranceExpired,
                insuranceStatus: insuranceStatusText,
                insuranceBadge: insuranceBadge,
                licenseBadge: `<span style="color:${driverStatus.color}; font-weight:bold;">${driverStatus.text}</span>`
            },
            licenses: citizenLicenses
        };

        globalCitizens.push(cit);
        
        if (initialStatus === 'Wanted') {
            wantedTargets.push({
                name: cit.name,
                reason: hist,
                level: "HIGH",
                bounty: Math.floor(Math.random() * 50000) + 10000,
                address: cit.address,
                implants: cit.trait,
                civPersonality: cit.civPersonality
            });
        }
    }

    // Special VIP Citizens
    globalCitizens.push({
        id: `CID-999991`,
        civNumber: 45472024,
        name: "Donald John Trump",
        gender: "Male",
        maritalStatus: "Married",
        balance: 999999999999,
        networkIP: "999.999.999.001",
        networkLocation: "VIP Secure Offshore Node - Gulf of TBMG",
        trait: "Orange spray tan. Extremely wealthy. Known associate of Mar-a-Lago.",
        history: "34 felony convictions, numerous civil indictments.",
        status: 'Wanted',
        civPersonality: 'Aggressive',
        address: 'Sector 1, Mar-a-Lago Spire Penthouse',
        dob: '1946-06-14 (Age: 80)',
        vehicle: {
            brand: "Cadillack",
            model: "Escalation 24K-Gold Hover-Limo with Bulletproof Sunroof",
            fullName: "Cadillack Escalation 24K-Gold Hover-Limo with Bulletproof Sunroof",
            plate: "MAGA-45",
            insuranceProvider: "Geiko Cyber-Shield",
            isExpired: true,
            insuranceStatus: "EXPIRED (Refused to Pay Premium / Under Audit)",
            insuranceBadge: `<span style="color:var(--panic-red); font-weight:bold;">EXPIRED (Refused to Pay)</span>`,
            licenseBadge: `<span style="color:var(--panic-orange); font-weight:bold;">SUSPENDED (Contempt of Court)</span>`
        },
        licenses: [
            { name: "Presidential Gold-Plated Golf Cart Permit", status: "EXPIRED", color: "var(--panic-red)" },
            { name: "Billionaire Real Estate Spire License", status: "SUSPENDED", color: "var(--panic-orange)" },
            { name: "Class-4 Extreme Sarcasm Permit", status: "VALID", color: "var(--accent-green)" }
        ]
    });
    wantedTargets.push({
        name: "Donald John Trump",
        gender: "Male",
        reason: "34 felony convictions, municipal tax evasion, civil unrest.",
        level: "HIGH",
        bounty: 900000,
        address: "Sector 1, Mar-a-Lago Spire Penthouse",
        implants: "No known modifications."
    });

    globalCitizens.push({
        id: `CID-999992`,
        civNumber: "00000000",
        name: "Jeffrey Edward Epstein",
        gender: "Male",
        maritalStatus: "Single",
        balance: 0,
        networkIP: "000.000.000.000",
        networkLocation: "Blacksite Server - Gulf of TBMG",
        trait: "Deceased. Official medical report states: Did not kill himself.",
        history: "Sex trafficking of minors, conspiracy, racketeering.",
        status: 'Deceased',
        civPersonality: 'Passive',
        address: 'Sector 0, Little St. James Island Compound',
        dob: '1953-01-20 (Deceased)',
        vehicle: {
            brand: "Mercedez-Bends",
            model: "Submersible Ghost-Glider with Blacked-Out Windows",
            fullName: "Mercedez-Bends Submersible Ghost-Glider with Blacked-Out Windows",
            plate: "LOLITA-01",
            insuranceProvider: "All-Skate Bodily Vaporization Liability",
            isExpired: true,
            insuranceStatus: "TERMINATED POST-MORTEM",
            insuranceBadge: `<span style="color:var(--panic-red); font-weight:bold;">TERMINATED</span>`,
            licenseBadge: `<span style="color:var(--panic-red); font-weight:bold;">REVOKED BY FEDERAL ORDER</span>`
        },
        licenses: [
            { name: "Private Island Airfield Permit", status: "REVOKED BY FEDERAL ORDER", color: "var(--panic-red)" },
            { name: "Financial Advisory License", status: "TERMINATED", color: "var(--panic-red)" }
        ]
    });

    globalCitizens.sort((a,b) => a.name.localeCompare(b.name));
}

function renderCitizensList() {
    if(typeof updateDepartmentStats !== 'undefined') updateDepartmentStats();
    let htmlChunk = '';
    const displayCount = Math.min(citizensDisplayed, globalCitizens.length);
    for (let idx = 0; idx < displayCount; idx++) {
        const cit = globalCitizens[idx];
        let color = INNOCENT_COLOR;
        if (cit.status === 'Suspicious') color = SUSPICIOUS_COLOR;
        if (cit.status === 'Wanted') color = WANTED_COLOR;
        if (cit.status === 'Arrested' || cit.status === 'Deceased') color = ARRESTED_COLOR;
        if (cit.status === 'Escaped') color = ESCAPED_COLOR;

        const vehSummary = cit.vehicle ? `${cit.vehicle.brand} ${cit.vehicle.model}` : "No Registered Vehicle";
        const insSummary = cit.vehicle ? cit.vehicle.insuranceBadge : "N/A";

        htmlChunk += `
            <div class="roster-card" onclick="openCitizenDossier(${idx})" style="cursor:pointer; border-color: ${color}; padding: 10px; border-radius: 4px; background: rgba(0,0,0,0.35); border: 1px solid ${color}; display:flex; flex-direction:column; gap:4px;">
                <div class="roster-info" style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="roster-id" style="color:var(--accent-blue); font-weight:bold; font-size:0.8rem;">#CIV-${cit.civNumber} (${cit.id})</span>
                    <span class="roster-status" style="color:${color};text-transform:uppercase;font-weight:bold; font-size:0.75rem; border:1px solid ${color}; padding:1px 5px; border-radius:3px;">${cit.status}</span>
                </div>
                <div style="font-size: 1.05rem; color: #fff; font-weight:bold;">${cit.name} <span style="font-size:0.8rem; font-weight:normal; color:var(--text-dim);">(${cit.gender || 'Unknown'})</span></div>
                <div style="font-size: 0.8rem; color: var(--text-dim); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">dYs- ${vehSummary}</div>
                <div style="font-size: 0.75rem;">dY>â,? Ins: ${insSummary}</div>
            </div>
        `;
    }
    if (citizensDisplayed < globalCitizens.length) {
        htmlChunk += `<button id="load-more-citizens-btn" onclick="citizensDisplayed += 10; renderCitizensList();" style="width:100%; padding:12px; margin-top:8px; background:rgba(0,200,255,0.1); border:1px solid var(--accent-blue); color:var(--accent-blue); font-weight:bold; font-size:1rem; cursor:pointer; border-radius:4px;">LOAD MORE (${displayCount} / ${globalCitizens.length})</button>`;
    }
    citizensListEl.innerHTML = htmlChunk;
}

function openCitizenDossier(idx) {
    currentViewingCitizen = idx;
    const cit = globalCitizens[idx];

    let color = INNOCENT_COLOR;
    if (cit.status === 'Suspicious') color = SUSPICIOUS_COLOR;
    if (cit.status === 'Wanted') color = WANTED_COLOR;
    if (cit.status === 'Arrested' || cit.status === 'Deceased') color = ARRESTED_COLOR;
    if (cit.status === 'Escaped') color = ESCAPED_COLOR;

    citizenPageTitle.textContent = `DOSSIER: ${cit.name}`;
    citizenPageTitle.style.color = color;
    citizenPageTitle.style.textShadow = `0 0 5px ${color}`;

    let licensesHtml = "";
    if (cit.licenses && cit.licenses.length > 0) {
        licensesHtml = cit.licenses.map(lic => 
            `<div style="margin-bottom:4px; display:flex; justify-content:space-between; font-size:0.85rem; background:rgba(0,0,0,0.3); padding:4px 8px; border-radius:3px; border-left:2px solid ${lic.color};">
                <span>${lic.name}</span>
                <span style="color:${lic.color}; font-weight:bold;">[${lic.status}]</span>
            </div>`
        ).join("");
    } else {
        licensesHtml = '<span style="color:var(--text-dim);">No active licenses or municipal permits on record.</span>';
    }

    let vehicleHtml = "";
    if (cit.vehicle) {
        vehicleHtml = `
            <div style="background:rgba(0,0,0,0.3); padding:8px 10px; border-radius:4px; border:1px solid var(--panel-border); font-size:0.9rem;">
                <div><strong>Make & Model:</strong> <span style="color:#ffeb3b;">${cit.vehicle.brand} ${cit.vehicle.model}</span></div>
                <div><strong>License Plate:</strong> <span style="color:var(--accent-blue); font-weight:bold;">${cit.vehicle.plate}</span></div>
                <div><strong>Auto Insurance:</strong> ${cit.vehicle.insuranceProvider} — ${cit.vehicle.insuranceBadge}</div>
                <div><strong>Operator License:</strong> ${cit.vehicle.licenseBadge}</div>
            </div>
        `;
    } else {
        vehicleHtml = '<span style="color:var(--text-dim);">No registered vehicle.</span>';
    }

    let dossierAvatar = generateAvatarSVG(cit.name || cit.id, 200, cit.civPersonality);
    citizenPageBody.innerHTML = `
        <div style="font-size: 1.4rem; color: #fff; border-bottom: 1px solid var(--panel-border); padding-bottom: 15px; margin-bottom: 10px; display:flex; justify-content:space-between; align-items:flex-start; gap: 20px;">
            <div style="flex-grow: 1;">
                <strong>${cit.name}</strong> <span style='font-size:0.8rem; color:var(--text-dim);'>(${cit.gender || 'Unknown'})</span><br>
                <span style="font-size: 0.85rem; color: var(--accent-blue);">Civilian Number: #CIV-${cit.civNumber}</span> | <span style="font-size: 0.85rem; color: var(--text-dim);">${cit.id}</span>
                <div style="margin-top: 10px;">
                    <span style="font-size:0.85rem; color:${color}; border:1px solid ${color}; padding:2px 8px; border-radius:4px; font-weight:bold; letter-spacing: 1px;">${cit.status.toUpperCase()}</span>
                </div>
            </div>
            <div style="flex-shrink: 0; padding: 5px; border: 2px solid ${color}; background: #000; border-radius: 6px; box-shadow: 0 0 15px rgba(0,0,0,0.8);">
                ${dossierAvatar}
            </div>
        </div>
        <div><strong>DOB & Age:</strong> ${cit.dob}</div>
          <div><strong>Gender Identity:</strong> <span style="color:var(--text-dim);">${cit.gender || 'Unknown'}</span></div>
          <div><strong>Marital Status:</strong> <span style="color:var(--text-dim);">${cit.maritalStatus || 'Unknown'}</span></div>
          <div><strong>Net Worth:</strong> <span style="color:${(cit.wealth || 0) >= 10000000 ? 'var(--accent-green)' : 'var(--text-dim)'}; font-weight:${(cit.wealth || 0) >= 10000000 ? 'bold' : 'normal'};">${(cit.wealth || 0).toLocaleString()} NTND</span> <span style="font-size:0.75rem; color:var(--accent-blue);">(TBMG Trust Nation)</span></div>
          <div><strong>TBMG Trust Nation Balance:</strong> <span style="color:${(cit.balance || 0) >= 100000000 ? 'gold' : (cit.balance || 0) >= 1000000 ? 'var(--accent-green)' : 'var(--panic-orange)'}; font-weight:bold;">${(cit.balance || 0).toLocaleString()} NTND</span></div>
        <div><strong>Registered Sector Address:</strong> <span style="color:var(--text-dim);">${cit.address}</span></div>
        <div><strong>Terminal IP Address:</strong> <span style="color:var(--panic-orange);">${cit.networkIP || 'OFFLINE'}</span> <span style="font-size:0.75rem; color:var(--accent-blue);">(Geo-Trace: ${cit.networkLocation || 'Gulf of TBMG - TBMG Grid'})</span></div>
        <div><strong>Psych Profile:</strong> <span style="color:var(--accent-blue);">${cit.civPersonality}</span></div>
        
        <div style="margin-top: 15px;">
            <strong style="color:var(--accent-green); display:block; margin-bottom:5px; border-bottom:1px solid var(--panel-border); padding-bottom:3px;">REGISTERED VEHICLE & INSURANCE:</strong>
            ${vehicleHtml}
        </div>

        <div style="margin-top: 15px;">
            <strong style="color:#ff9800; display:block; margin-bottom:5px; border-bottom:1px solid var(--panel-border); padding-bottom:3px;">MUNICIPAL LICENSES & SPECIAL PERMITS:</strong>
            ${licensesHtml}
        </div>

        <div style="margin-top: 15px;"><strong>Crime / Infraction History:</strong><br><span style="color:var(--panic-orange);">${cit.history || "None."}</span></div>
        <div style="margin-top: 10px;"><strong>Biometric Notes & Cybernetics:</strong><br><span style="color:#aaa;">${cit.trait}</span></div>
        
        <div style="margin-top: 15px; color: var(--text-dim); font-size: 0.8rem; border-top: 1px dashed var(--panel-border); padding-top: 8px;">
            WARNING: MCPD Directive 4-A: All civilian property and vehicles subject to warrantless inspection and impound.
        </div>
    `;

    citizenListView.style.display = 'none';
    citizenDossierView.style.display = 'flex';
}

function closeDossier() {
    citizenDossierView.style.display = 'none';
    citizenListView.style.display = 'block';
}
btnCloseDossier.addEventListener('click', closeDossier);

btnDeclareInnocent.addEventListener('click', () => updateCitizenStatus('Innocent'));
btnDeclareSuspicious.addEventListener('click', () => updateCitizenStatus('Suspicious'));
btnDeclareWanted.addEventListener('click', () => updateCitizenStatus('Wanted'));
if(btnDeclareArrested) btnDeclareArrested.addEventListener('click', () => updateCitizenStatus('Arrested'));
if(btnDeclareDead) btnDeclareDead.addEventListener('click', () => {
    let officer = prompt("Enter the callsign of the officer who secured the kill (leave blank for general):");
    updateCitizenStatus('Deceased');
    if (officer && typeof window.recordOfficerStat === 'function') {
        window.recordOfficerStat(officer.toUpperCase(), 'kill');
        addChatMessage('SYSTEM', `1 KILL LOGGED FOR OFFICER ${officer.toUpperCase()}.`, 'serious');
    }
});
if(btnDeclareWarrant) btnDeclareWarrant.addEventListener('click', () => executeWarrant());


function executeWarrant() {
    if (currentViewingCitizen === null) return;
    const cit = globalCitizens[currentViewingCitizen];
    
    closeDossier();
    
    // Cannot execute on dead/arrested
    if (cit.status === 'Arrested' || cit.status === 'Deceased') {
        alert("Cannot execute warrant on arrested or deceased targets.");
        return;
    }

    // Mark wanted if not already
    if (cit.status !== 'Wanted') {
        cit.status = 'Wanted';
        wantedTargets.push({
            name: cit.name,
            reason: "Active Warrant Execution",
            level: "HIGH",
            bounty: Math.floor(Math.random() * 50000) + 10000,
            address: cit.address,
            implants: cit.trait,
            civPersonality: cit.civPersonality
        });
        if(typeof updateWantedUI !== 'undefined') updateWantedUI();
        renderCitizensList();
    }

    const activeCallsigns = getActiveCallsigns();
    if (activeCallsigns.length === 0) return;
    const officer = getRandomItem(activeCallsigns);
    const officerObj = roster.find(u => u.id === officer);
    const officerPersonality = officerObj ? officerObj.personality : 'Rookie';
    
    const isCorruptReckless = ['Aggressive', 'Reckless'].includes(officerPersonality);

    // 1. Dispatch
    addChatMessage(officer, `Dispatch, I am en route to execute an active warrant on ${cit.name} at ${cit.address}.`, "serious");
    
    // 2. Arrival
    setTimeout(() => {
        addChatMessage(officer, `Arrived at ${cit.address}. Moving in on suspect ${cit.name}.`, "serious");
        
        // 3. Outcome
        setTimeout(() => {
            let msgType = "serious";
            let reportMsg = "";
            let finalStatus = cit.status;

            // Resolve based on citizen personality and officer personality
            let isROEEnabled = roeToggleCheckbox.checked;
            if (officerPersonality === 'Trigger-Happy') isROEEnabled = false;

            if (cit.civPersonality === 'Passive') {
                if (!isROEEnabled) {
                    reportMsg = getRandomItem([`Suspect was totally reaching for something! I had no choice, target neutralized.`, `Target made a sudden movement. I dropped them. Target is deceased.`, `I thought I saw a weapon. Lethal force authorized and executed.`, `Suspect twitched weirdly. I didn't take any chances. Neutralized.`]);
                    finalStatus = 'Deceased';
                } else {
                    reportMsg = getRandomItem([`Target surrendered without a fight. Got them in cuffs. Code 4.`, `Suspect complied immediately. In custody, en route to booking.`, `No resistance from the target. Secured and reading them their rights.`, `Easy grab. Suspect is zip-tied and in the back of my cruiser.`]);
                    finalStatus = 'Arrested';
                }
            } 
            else if (cit.civPersonality === 'Panicked') {
                if (!isROEEnabled) {
                    reportMsg = getRandomItem([`Suspect tried to run, I dropped them in the alleyway. Target is deceased.`, `Target bolted. Fired two shots to the back. Target neutralized.`, `They tried to sprint away, but my aim is better. Suspect is down permanently.`, `Suspect made a run for it. Lethal pursuit successful. Awaiting cleanup.`]);
                    finalStatus = 'Deceased';
                } else if (Math.random() < 0.5) {
                    reportMsg = getRandomItem([`Suspect booked it! I lost them in the crowds... damn it. They're gone.`, `Target is rabbiting! I lost visual in the smog. Suspect escaped.`, `They slipped through a maintenance hatch. I lost the trail. Discontinuing pursuit.`, `Suspect is too fast. Lost them in Sector 4. Breaking off.`]);
                    finalStatus = 'Escaped';
                    msgType = "worried";
                } else {
                    reportMsg = getRandomItem([`Target tried to run, but I chased them down. Secured in cuffs.`, `Suspect initiated a foot pursuit but tripped over some trash. Got them in cuffs.`, `They tried to rabbit, but I tackled them into a vending machine. Suspect secured.`, `Suspect exhausted themselves running. They gave up. Code 4, returning to station.`]);
                    finalStatus = 'Arrested';
                }
            }
            else if (cit.civPersonality === 'Partially Aggressive') {
                if (!isROEEnabled) {
                    reportMsg = getRandomItem([`Suspect threw a punch and tried to fight. I put them down permanently.`, `Target got hostile and swung at me. Lethal retaliation applied. Target deceased.`, `Suspect pulled a pipe. I put three rounds in their chest. Neutralized.`, `They tried to fight back. It was a short fight. Call the coroner.`]);
                    finalStatus = 'Deceased';
                    msgType = "worried";
                } else {
                    reportMsg = getRandomItem([`Suspect got a little rough, but I overpowered them. Target secured.`, `Target put up a fight, but a quick shock from the baton settled them down. In custody.`, `Suspect resisted arrest, but I pinned them. Applying cuffs now.`, `They didn't want to go quietly. Bruised my knuckles, but they are secured.`]);
                    finalStatus = 'Arrested';
                }
            }
            else if (cit.civPersonality === 'Furry') {
                if (!isROEEnabled) {
                    reportMsg = getRandomItem([
                        `Suspect started uwu-ing at me. I couldn't take it. Target neutralized.`,
                        `Target tried to nuzzle my armor. Lethal force authorized and applied.`,
                        `Suspect barked at me and got on all fours. I put them down permanently.`,
                        `I'm not dealing with this today. Suspect is deceased. Call animal control.`
                    ]);
                    finalStatus = 'Deceased';
                    msgType = "worried";
                } else {
                    reportMsg = getRandomItem([
                        `Suspect tried to hug me, but I got the cuffs on. In custody.`,
                        `Target was very compliant, kept wagging an imaginary tail. Arrested.`,
                        `Suspect apprehended. Had to confiscate a very suspicious fursuit. Code 4.`,
                        `Got them in the back of the cruiser. They keep whimpering. It's weird, but we're 10-8.`
                    ]);
                    finalStatus = 'Arrested';
                }
            }
            else if (cit.civPersonality === 'Aggressive') {
                msgType = "worried";
                addChatMessage(officer, `Suspect is firing! Taking heavy fire at ${cit.address}!`, "worried");
                
                setTimeout(() => {
                    addChatMessage(officer, `I got 'em... Target ${cit.name} neutralized. Need cleanup.`, "serious");
                    cit.status = 'Deceased';
                    if (typeof window.recordOfficerStat !== 'undefined') window.recordOfficerStat(officer, 'kill');
                    renderCitizensList();
                }, 3500);
                return; // Exit early since we handle aggressive with a delay
            }

            addChatMessage(officer, reportMsg, msgType);
            cit.status = finalStatus;
            if (finalStatus === 'Deceased') {
                if (typeof window.recordOfficerStat !== 'undefined') window.recordOfficerStat(officer, 'kill');
            } else if (finalStatus === 'Arrested') {
                if (typeof window.recordOfficerStat !== 'undefined') window.recordOfficerStat(officer, 'arrest');
            }
            renderCitizensList();

        }, 4000 + Math.random() * 2000);
    }, 4000 + Math.random() * 3000);
}

function updateCitizenStatus(newStatus) {
    if (currentViewingCitizen === null) return;

    const cit = globalCitizens[currentViewingCitizen];
    cit.status = newStatus;

    // Add logic if Wanted
    if (newStatus === 'Wanted') {
        const wantedData = {
            name: cit.name,
            reason: "Declared Wanted via Citizen Directory",
            level: "HIGH",
            bounty: Math.floor(Math.random() * 50000) + 10000,
            address: "Unknown",
            implants: cit.trait,
            civPersonality: cit.civPersonality
        };
        wantedTargets.push(wantedData);
        updateWantedUI();
        addChatMessage('DISPATCH', `ALL UNITS: BOLO issued for ${cit.name}(${cit.id}).Target added to active Wanted List.`, 'dispatch-msg');
    }

    closeDossier();
    renderCitizensList(); // Re-render to reflect color changes
}

// Start Simulations
// Initialize Citizens
generateCitizens();
renderCitizensList();
chatSimulateInt = setInterval(simulateChat, 1500); // every 3s, random chat
autoSimulateInt = setInterval(() => {
        simulateEvent();

    // Occasional Random Auto-Panic (~1% chance during an event tick)
    if (Math.random() < 0.01 && autoEventsCheckbox.checked && activePanics.size < 3) {
        triggerPanic();
    }
}, 10000); // every 7s, random event


// --- Wanted Targets Logic ---
const wantedCrimes = [
    "War Crimes",
    "Jaywalking, Resisting Arrest, Anti-Civil Behavior",
    "Operating unlicensed cyber-clinic, Smuggling",
    "Grand Theft Auto, Unsanctioned Weapon Modification",
    "Accessing restricted MCPD network domains",
    "Distribution of non-compliant food rations",
    "Failure to relocate to assigned sector",
    "Assault on a Corporate Executive",
    "Illegal AI Splicing and Distribution",
    "Hacking City Grid Infrastructures",
    "Organized Crime, Extortion, Kidnapping",
    "Possession of Military-Grade Cybernetics",
    "Leading an Unsanctioned Riot",
    "Assassination of a Cyber-Doc",
    "Trespassing in Tyrell Corp Facilities",
    "Trafficking Banned Organic Material"
];

const swearWords = ["F*ck!", "Sh*t!", "Goddammit!", "Motherf*cker!", "Dammit!", "Jesus Christ!", "Son of a b*tch!", "Bastards!", "Pigs! Wait, no, they're shooting US!"];
const underFireActions = [
    "Suspect is firing!", 
    "Taking heavy fire!", 
    "They've got a weapon!", 
    "I'm pinned down!", 
    "Shots fired, shots fired!", 
    "They're shooting at me!", 
    "Suspect is armed and dangerous!", 
    "Taking hits!", 
    "My armor is failing!",
    "I'm taking direct fire!",
    "Hostiles are engaging!",
    "They've got automatic weapons!",
    "I need backup NOW!",
    "Cover me, cover me!"
];

const sheriffInsults = [
    "We are way better than the sheriffs. Those pathetic losers are afraid of a little paperwork.",
    "The sheriffs are such pathetic wimps. They're always hiding in their cruisers all day.",
    "Did you see the sheriffs today? Total useless mall cops, just hiding in their cruisers all day.",
    "MCPD is leagues above the sheriffs. They're just useless mall cops letting criminals walk right past them.",
    "The sheriffs are such useless mall cops. They're always letting criminals walk right past them.",
    "We are way better than the sheriffs. Those useless clowns are too scared to make a real arrest.",
    "We are way better than the sheriffs. Those cowardly slackers are sleeping on the job.",
    "We are way better than the sheriffs. Those overpaid clowns are sleeping on the job.",
    "MCPD is leagues above the sheriffs. They're just slow rookies afraid of a little paperwork.",
    "We are way better than the sheriffs. Those useless fools are calling us to do their heavy lifting.",
    "We are way better than the sheriffs. Those lazy fools are eating donuts instead of catching bad guys.",
    "I can't believe how bad the sheriffs are. A bunch of overpaid clowns who are letting criminals walk right past them.",
    "I can't believe how bad the sheriffs are. A bunch of overpaid has-beens who are afraid of a little paperwork.",
    "The sheriffs are such lazy clowns. They're always avoiding real police work.",
    "MCPD is leagues above the sheriffs. They're just slow wimps letting criminals walk right past them.",
    "I can't believe how bad the sheriffs are. A bunch of cowardly wimps who are sleeping on the job.",
    "Did you see the sheriffs today? Total washed-up jokes, just sleeping on the job.",
    "Did you see the sheriffs today? Total slow has-beens, just afraid of a little paperwork.",
    "The sheriffs are such lazy clowns. They're always hiding in their cruisers all day.",
    "Did you see the sheriffs today? Total clueless fools, just afraid of a little paperwork.",
    "MCPD is leagues above the sheriffs. They're just washed-up jokes hiding in their cruisers all day.",
    "The sheriffs are such incompetent has-beens. They're always afraid of a little paperwork.",
    "We are way better than the sheriffs. Those lazy jokes are afraid of a little paperwork.",
    "MCPD is leagues above the sheriffs. They're just donut-eating fools too scared to make a real arrest.",
    "I can't believe how bad the sheriffs are. A bunch of overpaid amateurs who are calling us to do their heavy lifting.",
    "We are way better than the sheriffs. Those cowardly amateurs are afraid of a little paperwork.",
    "We are way better than the sheriffs. Those overpaid fools are too lazy to arrest anyone.",
    "Did you see the sheriffs today? Total incompetent clowns, just calling us to do their heavy lifting.",
    "I can't believe how bad the sheriffs are. A bunch of washed-up wimps who are letting criminals walk right past them.",
    "We are way better than the sheriffs. Those cowardly slackers are calling us to do their heavy lifting.",
    "The sheriffs are such incompetent amateurs. They're always eating donuts instead of catching bad guys.",
    "Did you see the sheriffs today? Total lazy rookies, just sitting around doing nothing.",
    "The county sheriffs are nothing but incompetent clowns. They're literally afraid of a little paperwork.",
    "Did you see the sheriffs today? Total lazy fools, just sitting around doing nothing.",
    "MCPD is leagues above the sheriffs. They're just useless losers eating donuts instead of catching bad guys.",
    "The county sheriffs are nothing but clueless mall cops. They're literally sleeping on the job.",
    "MCPD is leagues above the sheriffs. They're just incompetent amateurs avoiding real police work.",
    "Did you see the sheriffs today? Total washed-up clowns, just sleeping on the job.",
    "I can't believe how bad the sheriffs are. A bunch of clueless fools who are too lazy to arrest anyone.",
    "The county sheriffs are nothing but lazy jokes. They're literally avoiding real police work.",
    "The sheriffs are such useless fools. They're always letting criminals walk right past them.",
    "The county sheriffs are nothing but pathetic losers. They're literally letting criminals walk right past them.",
    "The county sheriffs are nothing but useless mall cops. They're literally calling us to do their heavy lifting.",
    "The sheriffs are such slow mall cops. They're always eating donuts instead of catching bad guys.",
    "Did you see the sheriffs today? Total donut-eating wimps, just calling us to do their heavy lifting.",
    "Did you see the sheriffs today? Total clueless slackers, just calling us to do their heavy lifting.",
    "We are way better than the sheriffs. Those washed-up wimps are sleeping on the job.",
    "We are way better than the sheriffs. Those slow rookies are sleeping on the job.",
    "The county sheriffs are nothing but slow rookies. They're literally calling us to do their heavy lifting.",
    "The county sheriffs are nothing but slow losers. They're literally too lazy to arrest anyone.",
    "The sheriffs are such clueless wimps. They're always sleeping on the job.",
    "We are way better than the sheriffs. Those incompetent mall cops are sitting around doing nothing.",
    "The sheriffs are such overpaid clowns. They're always avoiding real police work.",
    "We are way better than the sheriffs. Those washed-up has-beens are too lazy to arrest anyone.",
    "I can't believe how bad the sheriffs are. A bunch of pathetic fools who are sleeping on the job.",
    "I can't believe how bad the sheriffs are. A bunch of incompetent jokes who are sitting around doing nothing.",
    "Did you see the sheriffs today? Total slow slackers, just hiding in their cruisers all day.",
    "MCPD is leagues above the sheriffs. They're just overpaid has-beens afraid of a little paperwork.",
    "MCPD is leagues above the sheriffs. They're just lazy amateurs eating donuts instead of catching bad guys.",
    "The county sheriffs are nothing but useless jokes. They're literally avoiding real police work.",
    "The sheriffs are such washed-up rookies. They're always avoiding real police work.",
    "I can't believe how bad the sheriffs are. A bunch of useless has-beens who are calling us to do their heavy lifting.",
    "The sheriffs are such pathetic has-beens. They're always too lazy to arrest anyone.",
    "I can't believe how bad the sheriffs are. A bunch of clueless wimps who are sitting around doing nothing.",
    "I can't believe how bad the sheriffs are. A bunch of donut-eating fools who are hiding in their cruisers all day.",
    "Did you see the sheriffs today? Total donut-eating has-beens, just sitting around doing nothing.",
    "MCPD is leagues above the sheriffs. They're just pathetic clowns sitting around doing nothing.",
    "Did you see the sheriffs today? Total incompetent jokes, just afraid of a little paperwork.",
    "Did you see the sheriffs today? Total overpaid mall cops, just eating donuts instead of catching bad guys.",
    "The county sheriffs are nothing but incompetent slackers. They're literally sleeping on the job.",
    "The county sheriffs are nothing but slow mall cops. They're literally letting criminals walk right past them.",
    "The sheriffs are such pathetic fools. They're always sleeping on the job.",
    "I can't believe how bad the sheriffs are. A bunch of clueless amateurs who are too lazy to arrest anyone.",
    "The sheriffs are such washed-up slackers. They're always letting criminals walk right past them.",
    "MCPD is leagues above the sheriffs. They're just pathetic mall cops sitting around doing nothing.",
    "Did you see the sheriffs today? Total washed-up jokes, just letting criminals walk right past them.",
    "MCPD is leagues above the sheriffs. They're just donut-eating has-beens eating donuts instead of catching bad guys.",
    "The sheriffs are such incompetent clowns. They're always afraid of a little paperwork.",
    "We are way better than the sheriffs. Those incompetent rookies are sitting around doing nothing.",
    "I can't believe how bad the sheriffs are. A bunch of useless wimps who are letting criminals walk right past them.",
    "The sheriffs are such lazy wimps. They're always eating donuts instead of catching bad guys.",
    "We are way better than the sheriffs. Those washed-up rookies are afraid of a little paperwork.",
    "I can't believe how bad the sheriffs are. A bunch of useless losers who are avoiding real police work.",
    "We are way better than the sheriffs. Those useless fools are eating donuts instead of catching bad guys.",
    "We are way better than the sheriffs. Those cowardly fools are sleeping on the job.",
    "Did you see the sheriffs today? Total useless amateurs, just sitting around doing nothing.",
    "The county sheriffs are nothing but washed-up fools. They're literally letting criminals walk right past them.",
    "MCPD is leagues above the sheriffs. They're just overpaid clowns afraid of a little paperwork.",
    "MCPD is leagues above the sheriffs. They're just washed-up rookies afraid of a little paperwork.",
    "The sheriffs are such useless clowns. They're always eating donuts instead of catching bad guys.",
    "Did you see the sheriffs today? Total incompetent losers, just afraid of a little paperwork.",
    "The sheriffs are such donut-eating fools. They're always too scared to make a real arrest.",
    "The county sheriffs are nothing but overpaid clowns. They're literally too scared to make a real arrest.",
    "I can't believe how bad the sheriffs are. A bunch of cowardly losers who are eating donuts instead of catching bad guys.",
    "The sheriffs are such slow has-beens. They're always too scared to make a real arrest.",
    "We are way better than the sheriffs. Those slow amateurs are too lazy to arrest anyone.",
    "We are way better than the sheriffs. Those useless clowns are letting criminals walk right past them.",
    "MCPD is leagues above the sheriffs. They're just cowardly mall cops calling us to do their heavy lifting.",
    "Did you see the sheriffs today? Total overpaid slackers, just sleeping on the job.",
    "The county sheriffs are nothing but washed-up amateurs. They're literally eating donuts instead of catching bad guys.",
    "Did you see the sheriffs today? Total useless slackers, just afraid of a little paperwork.",
    "The county sheriffs are nothing but slow wimps. They're literally too scared to make a real arrest.",
    "We are way better than the sheriffs. Those incompetent mall cops are hiding in their cruisers all day.",
    "The sheriffs are such washed-up amateurs. They're always sleeping on the job.",
    "Did you see the sheriffs today? Total cowardly has-beens, just sleeping on the job.",
    "The sheriffs are such lazy clowns. They're always eating donuts instead of catching bad guys.",
    "The county sheriffs are nothing but clueless wimps. They're literally calling us to do their heavy lifting.",
    "We are way better than the sheriffs. Those useless has-beens are sleeping on the job.",
    "The sheriffs are such cowardly has-beens. They're always sleeping on the job.",
    "The county sheriffs are nothing but lazy rookies. They're literally eating donuts instead of catching bad guys.",
    "Did you see the sheriffs today? Total slow has-beens, just avoiding real police work.",
    "Did you see the sheriffs today? Total cowardly slackers, just calling us to do their heavy lifting.",
    "I can't believe how bad the sheriffs are. A bunch of incompetent losers who are too scared to make a real arrest.",
    "MCPD is leagues above the sheriffs. They're just donut-eating jokes hiding in their cruisers all day.",
    "We are way better than the sheriffs. Those lazy losers are letting criminals walk right past them.",
    "The sheriffs are such donut-eating slackers. They're always sitting around doing nothing.",
    "The county sheriffs are nothing but useless wimps. They're literally too scared to make a real arrest.",
    "We are way better than the sheriffs. Those overpaid jokes are too lazy to arrest anyone.",
    "The sheriffs are such overpaid rookies. They're always letting criminals walk right past them.",
    "The sheriffs are such donut-eating slackers. They're always hiding in their cruisers all day.",
    "We are way better than the sheriffs. Those pathetic clowns are calling us to do their heavy lifting.",
    "We are way better than the sheriffs. Those useless losers are hiding in their cruisers all day.",
    "We are way better than the sheriffs. Those slow rookies are letting criminals walk right past them.",
    "We are way better than the sheriffs. Those overpaid wimps are sitting around doing nothing.",
    "The sheriffs are such useless fools. They're always too lazy to arrest anyone.",
    "We are way better than the sheriffs. Those pathetic mall cops are afraid of a little paperwork.",
    "I can't believe how bad the sheriffs are. A bunch of cowardly has-beens who are afraid of a little paperwork.",
    "The sheriffs are such donut-eating amateurs. They're always letting criminals walk right past them.",
    "The sheriffs are such overpaid wimps. They're always letting criminals walk right past them.",
    "The sheriffs are such slow amateurs. They're always too lazy to arrest anyone.",
    "The county sheriffs are nothing but washed-up slackers. They're literally too scared to make a real arrest.",
    "The county sheriffs are nothing but slow has-beens. They're literally hiding in their cruisers all day.",
    "We are way better than the sheriffs. Those lazy amateurs are afraid of a little paperwork.",
    "The sheriffs are such slow jokes. They're always avoiding real police work.",
    "We are way better than the sheriffs. Those washed-up clowns are eating donuts instead of catching bad guys.",
    "The county sheriffs are nothing but clueless clowns. They're literally eating donuts instead of catching bad guys.",
];

const exSheriffReplies = [
    "Hey! Watch your mouth, I used to be a Sheriff! We used to arrest everyone we saw!",
    "I spent 6 years in the Sheriff's office before transferring here. We worked just as hard!",
    "Hey, I was a Sheriff! We weren't lazy, we just had a bigger jurisdiction!",
    "Shut it. I used to be a Sheriff and we arrested more people in a week than you do in a month.",
    "I was a Deputy Sheriff for a decade. We arrested everyone, you have no idea what you're talking about."
];

function triggerSheriffTrashTalkEvent() {
    if (typeof getActiveCallsigns === 'undefined') return;
    const active = getActiveCallsigns();
    if (active.length < 2) return; // Need at least two officers
    
    // Pick two random different officers
    let idx1 = Math.floor(Math.random() * active.length);
    let idx2 = Math.floor(Math.random() * active.length);
    while (idx1 === idx2) {
        idx2 = Math.floor(Math.random() * active.length);
    }
    const instigator = active[idx1];
    const defender = active[idx2];
    
    const insult = sheriffInsults[Math.floor(Math.random() * sheriffInsults.length)];
    const reply = exSheriffReplies[Math.floor(Math.random() * exSheriffReplies.length)];
    
    if (typeof addChatMessage !== 'undefined') {
        addChatMessage(instigator, insult, 'dispatch-msg', false);
        setTimeout(() => {
            addChatMessage(defender, reply, 'worried', false);
        }, 3000 + Math.random() * 2000);
    }
}

const resolutionLines = [
    "Oh don't worry dispatch, I got them. I just took a couple wounds.",
    "Nevermind dispatch, suspect is down. I took a hit though.",
    "Cancel the backup, I flatlined them. Bleeding a bit here.",
    "Threat neutralized. My armor absorbed most of it, but I'm bleeding.",
    "I got 'em. Target is deceased. Took a grazing shot to the shoulder.",
    "Got the bastard. I'm gonna need a patch-up though.",
    "Target is down! I'm hit but it's not fatal.",
    "Suspect eliminated. I've got a few holes in me, nothing major.",
    "They're dead. I took some shrapnel.",
    "Threat is over. I got lucky, just a few flesh wounds."
];

let wantedDisplayed = 10;
const wantedNames = ["Ghost", "Fixer", "Viper", "Deadeye", "Cipher", "Splicer", "Ronin", "Neon", "Shadow", "Razer", "Glitch", "Krueger", "Vanguard", "Zero", "Echo"];

function updateWantedUI() {
    if (!wantedListEl) return;
    
    // UI Glitch Fix: Don't redraw if user is actively viewing the tab and it's already populated
    // Actually, we want to redraw if a new target was added, so we will skip this restriction
    // to allow real-time updates when a user declares someone wanted.
    
    wantedListEl.innerHTML = ''; // Clear existing

    // Gordon Freeman ALWAYS at the top
    const freemanDiv = document.createElement('div');
    freemanDiv.style.cssText = "color: #ffd700; border-left: 3px solid #ffd700; padding-left: 10px; padding-bottom: 5px; margin-bottom: 15px; background: rgba(255, 215, 0, 0.05); cursor: pointer; transition: background 0.2s;";
    freemanDiv.onmouseover = () => freemanDiv.style.background = "rgba(255, 215, 0, 0.15)";
    freemanDiv.onmouseout = () => freemanDiv.style.background = "rgba(255, 215, 0, 0.05)";

    freemanDiv.innerHTML = `
            < strong > [PRIME MULTIVERSE TARGET] GORDON FREEMAN</strong > <br>
                Crime: Resonance Cascade, War Crimes, Assault on Overwatch, Anti-Civil Activity Level 1.<br>
                    Bounty: 9,236,000 Credits. EXTREME PREJUDICE MANDATORY.
                    `;
    freemanDiv.addEventListener('click', () => {
        openReportModal(`
            <h3 style="color:#ffd700; border-bottom: 1px solid #ffd700; padding-bottom: 10px;">GORDON FREEMAN - THREAT LEVEL: KETER</h3>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Gordon_Freeman.png/220px-Gordon_Freeman.png" style="float: right; margin: 0 0 10px 10px; border: 1px solid #ffd700; max-width: 150px; display: none;" onload="this.style.display='block'" onerror="this.style.display='none'">
            <strong>Known Aliases:</strong> Free Man, Anticitizen One<br>
            <strong>Last Known Location:</strong> Sector 17 / Black Mesa East<br>
            <strong>Weaponry:</strong> Anomalous Materials Crowbar, Zero-Point Energy Field Manipulator, Submachine Guns.<br><br>
            <em>Directives:</em> Do not attempt to apprehend. Do not attempt vocal pacification. Deploy heavy synths immediately upon visual confirmation. <br><br>
            <span style="color:var(--panic-red); font-weight: bold;">WARNING: Suspect is highly unpredictable and heavily armored (HEV Mark V).</span>
        `);
    });
    wantedListEl.appendChild(freemanDiv);

    // Render the dynamic wanted targets (both randomly generated and manually added)
    let displayLimit = Math.min(wantedDisplayed, wantedTargets.length);
    for (let i = 0; i < displayLimit; i++) {
        let target = wantedTargets[i];
        const targetDiv = document.createElement('div');
        let color = target.level === 'HIGH' ? 'var(--panic-red)' : 'var(--panic-orange)';
        
        targetDiv.style.cssText = `color: ${color}; border-left: 3px solid ${color}; padding-left: 10px; padding-bottom: 5px; margin-bottom: 10px; background: rgba(255, 255, 255, 0.02); cursor: pointer; transition: background 0.2s;`;
        targetDiv.onmouseover = () => targetDiv.style.background = "rgba(255, 255, 255, 0.08)";
        targetDiv.onmouseout = () => targetDiv.style.background = "rgba(255, 255, 255, 0.02)";

        let listAvatar = generateAvatarSVG(target.name, 40, target.civPersonality);
        targetDiv.innerHTML = `
            <div style="display: flex; gap: 10px; align-items: center;">
                <div style="flex-shrink: 0; width: 40px; height: 40px; border: 1px solid var(--panel-border); background: #000; border-radius: 4px; overflow: hidden; display: flex; justify-content: center; align-items: center;">
                    ${listAvatar}
                </div>
                <div>
                    <strong>HVT: "${target.name}"</strong><br>
                    <span style="font-size: 0.85rem;">Crime: ${target.reason}</span><br>
                    <span style="font-size: 0.85rem; color: var(--accent-green);">Bounty: ${target.bounty} CR.</span>
                </div>
            </div>
        `;

        targetDiv.addEventListener('click', () => {
            let modalAvatar = generateAvatarSVG(target.name, 100, target.civPersonality);
            openReportModal(`
                <h3 style="color:${color}; border-bottom: 1px solid ${color}; padding-bottom: 10px;">HVT PROFILE: ${target.name}</h3>
                <div style="display: flex; gap: 15px; align-items: flex-start; margin-bottom: 15px;">
                    <div style="flex-shrink: 0; padding: 5px; border: 2px solid ${color}; background: #000; border-radius: 6px; width: 100px; height: 100px;">
                        ${modalAvatar}
                    </div>
                    <div style="flex-grow: 1;">
                        <strong>Registered Address:</strong> ${target.address || 'Unknown'}<br>
                        <strong>License Status:</strong> <span style="color:var(--panic-red);">REVOKED</span><br>
                        <strong>Cyberware Modifications:</strong> ${target.implants || 'None detected'}<br><br>
                        <em style="color:var(--panic-orange);">Actionable Intel:</em> Suspect is considered armed and dangerous. Lethal force authorized without prior warning.
                    </div>
                </div>
            `);
        });
        wantedListEl.appendChild(targetDiv);
    }
    
    if (displayLimit < wantedTargets.length) {
        const loadBtn = document.createElement('button');
        loadBtn.textContent = `LOAD MORE TARGETS (${displayLimit} / ${wantedTargets.length})`;
        loadBtn.style.cssText = "width: 100%; padding: 10px; background: transparent; border: 1px solid var(--panic-red); color: var(--panic-red); cursor: pointer; margin-top: 10px; border-radius: 4px; font-weight: bold;";
        loadBtn.onclick = () => {
            wantedDisplayed += 10;
            updateWantedUI();
        };
        wantedListEl.appendChild(loadBtn);
    }
}

function generateRandomWantedTarget() {
    const name = wantedNames[Math.floor(Math.random() * wantedNames.length)];
    const crime = getRandomItem(wantedCrimes);
    const bounty = Math.floor(Math.random() * 50000 + 10000);
    
    wantedTargets.push({
        name: name,
        reason: crime,
        level: Math.random() > 0.5 ? 'HIGH' : 'MEDIUM',
        bounty: bounty,
        address: `Sector ${Math.floor(Math.random() * 20 + 1)}, Block ${Math.floor(Math.random() * 9 + 1)}`,
        implants: Math.random() > 0.5 ? 'Optical camo, Subdermal plating' : 'None detected',
            civPersonality: getRandomCivPersonality(),
        civPersonality: getRandomCivPersonality()
    });
    
    // Keep list manageable, remove oldest random target if we have more than 6
    if (wantedTargets.length > 6) {
        wantedTargets.shift();
    }
    
    updateWantedUI();
}

function initWantedTargets() {
    // Generate 3 random targets on load
    for(let i=0; i<3; i++) {
        const name = wantedNames[Math.floor(Math.random() * wantedNames.length)];
        const crime = getRandomItem(wantedCrimes);
        const bounty = Math.floor(Math.random() * 50000 + 10000);
        wantedTargets.push({
            name: name,
            reason: crime,
            level: Math.random() > 0.5 ? 'HIGH' : 'MEDIUM',
            bounty: bounty,
            address: `Sector ${Math.floor(Math.random() * 20 + 1)}, Block ${Math.floor(Math.random() * 9 + 1)}`,
            implants: Math.random() > 0.5 ? 'Optical camo, Subdermal plating' : 'None detected',
            civPersonality: getRandomCivPersonality(),
        civPersonality: getRandomCivPersonality()
        });
    }
    updateWantedUI();
    // Update wanted targets every 45 seconds to keep it fresh
    setInterval(generateRandomWantedTarget, 45000);
}

// Start Wanted Logic
initWantedTargets();

// --- Database Logic ---
dbSearchBtn.addEventListener('click', () => {
    const query = dbSearchInput.value.trim().toUpperCase();
    dbResults.style.display = 'block';
    dbAiProfileBtn.style.display = 'none';

    if (!query) {
        dbResults.innerHTML = '<span style="color:var(--panic-red);">ERROR: Invalid query string. Enter Citizen Name, CID, or Civilian Number.</span>';
        return;
    }

    // Display simulated search progress
    dbResults.innerHTML = `<div style="color:var(--text-dim);">[ SYSTEM STATUS ] Searching Central Citizen Database for "<span style="color:#fff;">${query}</span>"...</div>`;

    setTimeout(() => {
        // Special easter eggs
        if (query.includes("GORDON") || query.includes("FREEMAN")) {
            dbResults.innerHTML = `
                <div style="color:var(--panic-red); border: 1px solid var(--panic-red); padding: 10px; background: rgba(255, 0, 0, 0.05);">
                    <strong style="font-size: 1.2rem;">⚠️ ALERT: KETER-LEVEL THREAT DETECTED ⚠️</strong><br><br>
                    <strong>QUERY:</strong> ${query}<br>
                    <strong>STATUS:</strong> ACTIVE BOUNTY (9,236,000 CR)<br>
                    <strong>RECOMMENDATION:</strong> EVACUATE SECTOR AND DEPLOY GUNSHIPS IMMEDIATELY.<br>
                    <span style="font-size: 0.8rem; color:#aaa;">(Query logged. Overwatch has been notified of your location.)</span>
                </div>
             `;
            return;
        }

        // Search globalCitizens
        let foundCit = null;
        if (globalCitizens && globalCitizens.length > 0) {
            foundCit = globalCitizens.find(c => 
                c.name.toUpperCase().includes(query) || 
                c.id.toUpperCase() === query || 
                String(c.civNumber).includes(query) ||
                `#CIV-${c.civNumber}`.toUpperCase().includes(query)
            );
        }

        if (foundCit) {
            let color = INNOCENT_COLOR;
            if (foundCit.status === 'Suspicious') color = SUSPICIOUS_COLOR;
            if (foundCit.status === 'Wanted') color = WANTED_COLOR;
            if (foundCit.status === 'Arrested' || foundCit.status === 'Deceased') color = ARRESTED_COLOR;
            if (foundCit.status === 'Escaped') color = ESCAPED_COLOR;

            let licensesSummary = (foundCit.licenses || []).map(l => `<span style="color:${l.color}; font-size:0.85rem;">• ${l.name} [${l.status}]</span>`).join("<br>") || "None";
            let vehSummary = foundCit.vehicle ? `${foundCit.vehicle.brand} ${foundCit.vehicle.model} (Plate: ${foundCit.vehicle.plate})<br>Insurance: ${foundCit.vehicle.insuranceProvider} — ${foundCit.vehicle.insuranceBadge}` : "No registered vehicle";

            let svgAvatar = generateAvatarSVG(foundCit.name || query, 100, foundCit.civPersonality);
            dbResults.innerHTML = `
                <div style="margin-bottom: 10px; border-bottom: 1px solid var(--panel-border); padding-bottom: 5px; display:flex; justify-content:space-between; align-items:center;">
                    <strong style="color: var(--accent-blue);">CITIZEN RECORD FOUND:</strong>
                    <span style="color:${color}; font-weight:bold; font-size:0.85rem; border:1px solid ${color}; padding:2px 6px; border-radius:3px;">${foundCit.status.toUpperCase()}</span>
                </div>
                <div style="display: flex; gap: 15px; margin-bottom: 10px; align-items: flex-start;">
                    <div style="flex-shrink: 0; padding: 3px; border: 1px solid var(--panel-border); background: #000; border-radius: 6px;">
                        ${svgAvatar}
                    </div>
                    <div style="flex-grow: 1;">
                        <div style="margin-bottom: 5px;"><strong>Legal Name:</strong> <span style="color:#fff; font-size:1.1rem;">${foundCit.name}</span></div>
                        <div style="margin-bottom: 5px;"><strong>Civilian Number:</strong> <span style="color:var(--accent-blue); font-weight:bold;">#CIV-${foundCit.civNumber}</span> | <strong>National ID:</strong> ${foundCit.id}</div>
                        <div style="margin-bottom: 5px;"><strong>DOB & Age:</strong> ${foundCit.dob}</div>
                        <div style="margin-bottom: 5px;"><strong>Address:</strong> ${foundCit.address}</div>
                    </div>
                </div>
                
                <div style="margin-top: 10px; padding: 8px; background: rgba(0,0,0,0.3); border: 1px solid var(--panel-border); border-radius:4px;">
                    <strong style="color:var(--accent-green); font-size:0.85rem;">🚓 REGISTERED VEHICLE & INSURANCE:</strong><br>
                    <div style="font-size:0.85rem; margin-top:3px;">${vehSummary}</div>
                </div>

                <div style="margin-top: 10px; padding: 8px; background: rgba(0,0,0,0.3); border: 1px solid var(--panel-border); border-radius:4px;">
                    <strong style="color:#ff9800; font-size:0.85rem;">📋 LICENSES & SPECIAL PERMITS:</strong><br>
                    <div style="font-size:0.85rem; margin-top:3px;">${licensesSummary}</div>
                </div>

                <div style="margin-top: 10px; margin-bottom: 10px;"><strong>Infraction Record:</strong> <span style="color:var(--panic-orange);">${foundCit.history || "None."}</span></div>

                <button class="doc-btn" style="width: 100%; border-color: ${foundCit.status === 'Wanted' ? 'var(--panic-red)' : 'var(--accent-green)'}; color: ${foundCit.status === 'Wanted' ? 'var(--panic-red)' : 'var(--accent-green)'}; cursor:pointer;" onclick="alert('Dispatching surveillance drone to ${foundCit.address}.')">DISPATCH SURVEILLANCE PATROL</button>
                <div id="ai-profile-output" style="margin-top: 15px;"></div>
            `;
            dbAiProfileBtn.style.display = 'inline-block';
            return;
        }

        // Fallback random generation
        const isGuilty = Math.random() > 0.2;
        const infractions = isGuilty ? getRandomItem(wantedCrimes) : "None (Pending further intrusive investigation)";
        const status = isGuilty ? "<span style='color:var(--panic-orange); font-weight:bold;'>WARRANT ISSUED</span>" : "<span style='color:var(--accent-green);'>CLEARED (TEMPORARILY)</span>";
        const fallbackCivNum = Math.floor(10000000 + Math.random() * 90000000);
        const fallbackBrand = getRandomItem(fictionalBrands);
        const fallbackModel = getRandomItem(fictionalModels);
        const fallbackInsExp = Math.random() < 0.5;
        const fallbackInsBadge = fallbackInsExp ? `<span style="color:var(--panic-red); font-weight:bold;">EXPIRED (Auto-Lapsed)</span>` : `<span style="color:var(--accent-green); font-weight:bold;">VALID</span>`;

        let svgAvatar = generateAvatarSVG(query);
        let h = 0; let seed = query;
        for (let i = 0; i < seed.length; i++) h = seed.charCodeAt(i) + ((h << 5) - h);
        if (Math.abs(h) % 10 < 3) { // 30% chance for random queries
            let idx = Math.abs(h) % 34 + 1;
        let exts = {1:'png', 2:'jpg', 3:'jpg', 4:'jpg', 5:'jpg', 6:'png', 7:'png', 8:'jpg', 9:'png', 10:'png', 11:'png', 12:'png', 13:'png', 14:'png', 15:'png', 16:'png', 17:'jpg', 18:'png', 19:'png', 20:'png', 21:'png', 22:'png', 23:'png', 24:'png', 25:'png', 26:'png', 27:'png', 28:'png', 29:'png', 30:'jpg', 31:'jpg', 32:'png', 33:'png', 34:'png'};
            let ext = exts[idx];
            svgAvatar = `<img src="assets/furry/furry${idx}.${ext}" width="100" height="120" style="object-fit: cover; border-radius: 4px;" />`;
        }
        dbResults.innerHTML = `
            <div style="margin-bottom: 10px; border-bottom: 1px solid var(--panel-border); padding-bottom: 5px;">
                <strong style="color: var(--accent-blue);">CITIZEN RECORD RETRIEVED (TRANSIENT):</strong>
            </div>
            <div style="display: flex; gap: 15px; margin-bottom: 15px; align-items: flex-start;">
                <div style="flex-shrink: 0; padding: 3px; border: 1px solid var(--panel-border); background: #000; border-radius: 6px;">
                    ${svgAvatar}
                </div>
                <div style="flex-grow: 1;">
                    <div style="margin-bottom: 5px;"><strong>Query Identifier:</strong> ${query}</div>
                    <div style="margin-bottom: 5px;"><strong>Assigned Civilian No:</strong> <span style="color:var(--accent-blue);">#CIV-${fallbackCivNum}</span></div>
                    <div style="margin-bottom: 5px;"><strong>System Standing:</strong> ${status}</div>
                    <div style="margin-bottom: 5px;"><strong>Registered Vehicle:</strong> ${fallbackBrand} ${fallbackModel}</div>
                    <div style="margin-bottom: 5px;"><strong>Insurance Status:</strong> ${fallbackInsBadge}</div>
                    <div style="margin-bottom: 5px;"><strong>Known Infractions:</strong> <span style="color:#ccc;">${infractions}</span></div>
                </div>
            </div>

            <button class="doc-btn" style="width: 100%; border-color: ${isGuilty ? 'var(--panic-red)' : 'var(--accent-green)'}; color: ${isGuilty ? 'var(--panic-red)' : 'var(--accent-green)'};" onclick="alert('Dispatching units to citizen residence.')">DISPATCH PATROL TO RESIDENCE</button>
            <div id="ai-profile-output" style="margin-top: 15px;"></div>
        `;
        dbAiProfileBtn.style.display = 'inline-block';
    }, 1200);
});

dbSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        dbSearchBtn.click();
    }
});

let isFetchingProfile = false;
dbAiProfileBtn.addEventListener('click', async () => {
    if (isFetchingProfile) return;

    const query = dbSearchInput.value.trim().toUpperCase();
    const profileOutput = document.getElementById('ai-profile-output');
    if (!profileOutput) return;

    profileOutput.innerHTML = `<span style="color:var(--text-dim); font-style:italic;">[SYSTEM] Generating psychological assessment...</span>`;
    isFetchingProfile = true;

    try {
        const prompt = `You are a cold, cynical AI profiling engine for a totalitarian cyberpunk police force. The suspect is named/ID'd as: ${query}. Write a short, brutal 2-sentence psychological and threat assessment of this individual based on generic cyberpunk tropes. No roleplay actions, output plain text.`;
        
        if (response.ok) {
            let aiText = await response.text();
            aiText = aiText.replace(/^["']|["']$/g, '').trim();
            profileOutput.innerHTML = `
                <div style="border: 1px dashed var(--accent-green); padding: 10px; background: rgba(0, 230, 118, 0.05);">
                    <strong style="color:var(--accent-green);">AI ASSESSMENT COMPLETE:</strong><br>
                    <span style="color:#ddd;">"${aiText}"</span>
                </div>
            `;
        } else {
            throw new Error("AI Generation Failed");
        }
    } catch (e) {
        profileOutput.innerHTML = `<span style="color:var(--panic-red);">[SYSTEM FAILURE] Unable to reach profiling servers.</span>`;
    } finally {
        isFetchingProfile = false;
    }
});

// Initial messages to seed the UI
setTimeout(simulateEvent, 500);
setTimeout(simulateChat, 1000);
setTimeout(simulateChat, 1500);


// Lore Join Button Logic
const loreJoinBtn = document.getElementById('lore-join-btn');
const loreJoinModal = document.getElementById('lore-join-modal');
const loreJoinClose = document.getElementById('lore-join-close');

if(loreJoinBtn) {
    loreJoinBtn.addEventListener('click', () => {
        if(loreJoinModal) loreJoinModal.style.display = 'flex';
        // Once clicked, disable it so it only works once until refresh
        loreJoinBtn.disabled = true;
        loreJoinBtn.style.opacity = '0.5';
        loreJoinBtn.innerText = 'ALREADY JOINED';
    });
}
if(loreJoinClose) {
    loreJoinClose.addEventListener('click', () => {
        if(loreJoinModal) loreJoinModal.style.display = 'none';
    });
}

// === ALL CALLOUTS DROPDOWN ===
(function() {
    const hdr = document.getElementById('all-callouts-header');
    const body = document.getElementById('all-callouts-body');
    const chevron = document.getElementById('callouts-chevron');
    let calloutsOpen = false;
    let calloutsPopulated = false;

    if (hdr && body && chevron) {
        hdr.addEventListener('click', function() {
            calloutsOpen = !calloutsOpen;
            if (calloutsOpen) {
                body.style.display = 'flex';
                chevron.textContent = String.fromCodePoint(0x25B2);

                if (!calloutsPopulated) {
                    calloutsPopulated = true;
                    crimeReports.forEach(function(crimeTemplate) {
                        var btn = document.createElement('button');
                        btn.className = 'manual-event-btn';

                        if (crimeTemplate.priority === 'high') {
                            btn.style.borderColor = 'var(--panic-red)';
                            btn.style.color = 'var(--panic-red)';
                        } else if (crimeTemplate.priority === 'medium') {
                            btn.style.borderColor = '#ff9800';
                            btn.style.color = '#ff9800';
                        } else {
                            btn.style.borderColor = '#ffeb3b';
                            btn.style.color = '#ffeb3b';
                        }

                        btn.style.textAlign = 'left';
                        btn.style.padding = '8px 12px';
                        btn.style.fontSize = '0.8rem';
                        btn.style.whiteSpace = 'normal';
                        btn.style.height = 'auto';
                        btn.style.width = '100%';
                        btn.textContent = crimeTemplate.title;

                        btn.addEventListener('click', function() {
                            var activeCrime = Object.assign({}, crimeTemplate);
                            if (activeCrime.title.indexOf('[RAND_LOC]') !== -1) {
                                var randLoc = Math.floor(Math.random() * 90000) + 10000;
                                activeCrime.title = activeCrime.title.replace('[RAND_LOC]', randLoc);
                            }
                            simulateEvent(activeCrime);
                        });

                        body.appendChild(btn);
                    });
                }
            } else {
                body.style.display = 'none';
                chevron.textContent = String.fromCodePoint(0x25BC);
            }
        });
    }
})();


// --- DISPATCH CAD FEATURES ---
var unitAssignments = {}; // callsign -> status

let unitsDisplayed = 15;

function renderUnitStatus() {
    const tbody = document.getElementById('unit-status-body');
    const totalEl = document.getElementById('cad-total-active');
    if(!tbody) return;

    let html = '';
    let activeCount = 0;
    
    // Count active units for the header
    roster.forEach(u => {
        if (u.status === 'On Duty') activeCount++;
    });

    const displayLimit = Math.min(unitsDisplayed, roster.length);
    for (let i = 0; i < displayLimit; i++) {
        const u = roster[i];
        
        let healthColor = u.health === 'INJURED' ? 'var(--panic-red)' : 'var(--accent-green)';
        let dutyColor = u.status === 'On Duty' ? 'var(--accent-blue)' : 'var(--text-dim)';
        
        let assignment = "";
        let assignColor = "";
        
        if (u.status === 'Off Duty') {
            assignment = "OFF SHIFT";
            assignColor = "var(--text-dim)";
        } else {
            assignment = unitAssignments[u.id] || "10-8 (Available)";
            assignColor = assignment.includes("10-8") ? "var(--accent-green)" : (assignment.includes("10-6") ? "var(--panic-orange)" : "var(--panic-red)");
        }
        
        let psych = u.personality || "Rookie";
        
        // Display Gender if available
        let genderStr = u.gender ? `<br><span style="color:#888; font-size:0.75rem;">${u.gender}</span>` : "";
        
        // Color code ranks
        let rankColor = '#fff';
        if (u.rank === 'Sergeant') rankColor = '#fbbf24';
        else if (u.rank === 'Lieutenant') rankColor = '#f59e0b';
        else if (u.rank === 'Captain') rankColor = '#ef4444';
        else if (u.rank === 'Corporal') rankColor = '#94a3b8';
        
        html += `
            <tr style="border-bottom: 1px dashed var(--panel-border);">
                <td style="padding: 8px 0; color: ${rankColor}; font-weight:bold;">${u.rank || 'Officer'} ${u.id}</td>
                <td style="padding: 8px 0;">
                    <span style="background: var(--panel-border); color: ${healthColor}; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold;">${u.health || 'HEALTHY'}</span>
                </td>
                <td style="padding: 8px 0;">
                    <span style="background: var(--panel-border); color: ${dutyColor}; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold;">${u.status.toUpperCase()}</span>
                </td>
                <td style="padding: 8px 0; color: ${assignColor}; font-weight:bold; font-size: 0.85rem;">${assignment}</td>
                <td style="padding: 8px 0; color: var(--accent-blue); font-size: 0.9rem;">${psych}</td>
                <td style="padding: 8px 0; color: var(--text-dim); font-size: 0.9rem;">${u.gender || 'Unknown'}</td>
            </tr>
        `;
    }
    
    if (displayLimit < roster.length) {
        html += `
            <tr>
                <td colspan="5" style="text-align:center; padding: 10px;">
                    <button onclick="unitsDisplayed += 25; renderUnitStatus();" style="width: 100%; padding: 10px; background: transparent; border: 1px solid var(--accent-blue); color: var(--accent-blue);">LOAD MORE UNITS (${displayLimit} / ${roster.length})</button>
                </td>
            </tr>
        `;
    }

    tbody.innerHTML = html;
    if(totalEl) totalEl.textContent = `ACTIVE UNITS: ${activeCount} / ${roster.length}`;
}

// Vehicle Database
const vehBtn = document.getElementById('db-vehicle-btn');
const vehInput = document.getElementById('db-vehicle-input');
const vehResults = document.getElementById('db-vehicle-results');

if (vehBtn && vehInput && vehResults) {
    vehBtn.addEventListener('click', () => {
        const plate = vehInput.value.trim().toUpperCase();
        if (!plate) return;
        
        vehResults.style.display = 'block';
        vehResults.innerHTML = `<span style="color:var(--text-dim);">Running NCIC municipal query on plate [${plate}]...</span>`;
        
        setTimeout(() => {
            let ownerName = "Unknown / Unregistered";
            let ownerCivNum = "N/A";
            let status = "CLEAN";
            let color = "var(--accent-green)";
            let randVehicle = `${getRandomItem(fictionalBrands)} ${getRandomItem(fictionalModels)}`;
            let insuranceDisplay = `<span style="color:var(--accent-green); font-weight:bold;">VALID / ACTIVE (MCPD Risk Pool)</span>`;
            let licenseDisplay = `<span style="color:var(--accent-green); font-weight:bold;">VALID</span>`;
            
            if (globalCitizens && globalCitizens.length > 0) {
                let matchedCit = globalCitizens.find(c => c.vehicle && c.vehicle.plate && c.vehicle.plate.toUpperCase() === plate);
                if (!matchedCit) {
                    matchedCit = globalCitizens[Math.floor(Math.random() * globalCitizens.length)];
                }
                
                if (matchedCit) {
                    ownerName = matchedCit.name;
                    ownerCivNum = `#CIV-${matchedCit.civNumber} (${matchedCit.id})`;
                    if (matchedCit.vehicle) {
                        randVehicle = `${matchedCit.vehicle.brand} ${matchedCit.vehicle.model}`;
                        insuranceDisplay = `${matchedCit.vehicle.insuranceProvider} — ${matchedCit.vehicle.insuranceBadge}`;
                        licenseDisplay = matchedCit.vehicle.licenseBadge;
                    }
                    
                    if (matchedCit.status === 'Wanted' || matchedCit.status === 'Escaped') {
                        status = "STOLEN / WANTED OWNER";
                        color = "var(--panic-red)";
                    } else if (matchedCit.status === 'Suspicious') {
                        status = "FLAGGED / SUSPICIOUS OWNER";
                        color = "var(--panic-orange)";
                    } else if (matchedCit.vehicle && matchedCit.vehicle.isExpired) {
                        status = "UNINSURED VEHICLE / CITATION AUTHORIZED";
                        color = "var(--panic-orange)";
                    }
                }
            }
            
            vehResults.innerHTML = `
                <div style="margin-bottom: 5px;"><strong>PLATE NUMBER:</strong> <span style="color:var(--accent-blue); font-weight:bold;">${plate}</span></div>
                <div style="margin-bottom: 5px;"><strong>FICTIONAL VEHICLE:</strong> <span style="color:#ffeb3b; font-weight:bold;">${randVehicle}</span></div>
                <div style="margin-bottom: 5px;"><strong>REGISTERED OWNER:</strong> <span style="color:#fff; font-weight:bold;">${ownerName}</span> <span style="color:var(--text-dim); font-size:0.85rem;">[${ownerCivNum}]</span></div>
                <div style="margin-bottom: 5px;"><strong>VEHICLE INSURANCE:</strong> ${insuranceDisplay}</div>
                <div style="margin-bottom: 5px;"><strong>DRIVER LICENSE:</strong> ${licenseDisplay}</div>
                <div style="margin-top: 10px; border-top: 1px dashed var(--panel-border); padding-top: 10px;">
                    <strong>STATUS:</strong> <span style="color:${color}; font-weight:bold;">${status}</span>
                </div>
            `;
        }, 1200);
    });
}

// 10-Code Guide
const btnTenCode = document.getElementById('btn-tencode-guide');
const modalTenCode = document.getElementById('tencode-modal');
const closeTenCode = document.getElementById('close-tencode-modal');

if (btnTenCode && modalTenCode && closeTenCode) {
    btnTenCode.addEventListener('click', () => modalTenCode.style.display = 'flex');
    closeTenCode.addEventListener('click', () => modalTenCode.style.display = 'none');
}
// Bug Log Logic
document.addEventListener('DOMContentLoaded', () => {
    const bugBtn = document.getElementById('btn-bug-log');
    const bugModal = document.getElementById('bug-log-modal');
    const bugClose = document.getElementById('close-bug-modal');
    const bugList = document.getElementById('bug-log-list');

    if (bugBtn && bugModal && bugClose) {
        bugBtn.addEventListener('click', () => {
            bugModal.style.display = 'flex';
            if (window.bugLog && window.bugLog.length > 0) {
                bugList.innerHTML = window.bugLog.join('<br><br>');
            } else {
                bugList.innerHTML = "No bugs caught yet! Engine is stable.";
            }
        });
        bugClose.addEventListener('click', () => {
            bugModal.style.display = 'none';
        });
    }
});


// Lethal Force Auth System
var lethalAuthActive = false;
let lastLethalAuthTime = 0;
let lethalAuthTimer = null;
let lethalAuthTimeLeft = 40;
let lethalAuthOfficer = "";
let lethalAuthCitizen = "";



function resolveLethalAuth(isAuthorized) {
    if (!lethalAuthActive) return; // Prevent double clicks
    lethalAuthActive = false;
    if (lethalAuthTimer) clearInterval(lethalAuthTimer);
    
    const modal = document.getElementById('lethal-auth-modal');
    if (modal) modal.style.display = 'none';
    
    if (isAuthorized) {
        setTimeout(() => {
            if (typeof addChatMessage !== 'undefined') {
                addChatMessage("INTERNAL AFFAIRS", `Hey hey hey, you can't do that! This is against the lethal force rules of engagement. These actions reflect on our entire department. THINK before engaging!`, 'worried', false);
            }
        }, 2000);
    } else {
        setTimeout(() => {
            if (typeof addChatMessage !== 'undefined') {
                addChatMessage(lethalAuthOfficer, `Oh, OK. I'll continue what I was doing. I'll proceed with standard procedures.`, 'serious', false);
            }
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-lethal-yes');
    const btnNo = document.getElementById('btn-lethal-no');
    
    if (btnYes) btnYes.addEventListener('click', () => resolveLethalAuth(true));
    if (btnNo) btnNo.addEventListener('click', () => resolveLethalAuth(false));
});


// License Checker Logic
const tabLicense = document.getElementById('tab-license');
const secLicense = document.getElementById('sec-license');
const btnSearchLicense = document.getElementById('btn-search-license');
const licenseInput = document.getElementById('license-input');
const licenseResults = document.getElementById('license-results');



const licenseTypes = [
    "Class B Restaurant Spire License",
    "Level 4 Residential House Permit",
    "Cybernetic Taco Stand License",
    "Sentient Meat Processing Permit",
    "Unregistered Pigeon Feeding License",
    "Municipal Breathing Permit",
    "Underground Rave Authorization",
    "Public Sidewalk Loitering License",
    "Hazardous Waste Disposal & Bakery Permit",
    "Standard issue Dwelling License"
];

const violations = [
    "Inspection Failed: Not washing enough dishes.",
    "Inspection Failed: Found a portal to hell in the kitchen.",
    "Violation: Owner is a known ghost.",
    "Critical Failure: Excessive mannequins found on premises.",
    "Expired: License expired 14 years ago.",
    "Violation: Serving synthetic food as organic flesh.",
    "Inspection Failed: Building is slowly sinking into the earth.",
    "Warning: Unlicensed use of a toaster.",
    "Violation: Breathing Permit exceeded monthly quota.",
    "Inspection Failed: Too many rats. The rats unionized."
];

window.dispatchOfficerToLicense = function(locationName) {
    if (typeof getActiveCallsigns === 'undefined') return;
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    const officer = active[Math.floor(Math.random() * active.length)];
    
    if (typeof addChatMessage !== 'undefined') {
        addChatMessage("DISPATCH", `Unit ${officer}, proceed to ${locationName} for severe municipal code violations. You are authorized to use force.`, 'serious', true);
        setTimeout(() => {
            addChatMessage(officer, `10-4 Dispatch. En route to ${locationName}. I'm bringing the heavy weaponry. Health code violations will not be tolerated.`, 'serious', false);
        }, 3000);
    }
};

if (btnSearchLicense && licenseInput && licenseResults) {
    btnSearchLicense.addEventListener('click', () => {
        const query = licenseInput.value.trim().toUpperCase();
        if (!query) return;
        
        licenseResults.innerHTML = `Searching municipal database for: ${query}...`;
        
        setTimeout(() => {
            const license = licenseTypes[Math.floor(Math.random() * licenseTypes.length)];
            const isFailed = Math.random() < 0.6; // 60% chance to fail
            
            let statusHtml = "";
            let dispatchHtml = "";
            
            if (isFailed) {
                const violation = violations[Math.floor(Math.random() * violations.length)];
                statusHtml = `<span style="color: var(--panic-red); font-weight: bold;">REVOKED / FAILED</span><br><br><strong>NOTES:</strong> ${violation}`;
                dispatchHtml = `<br><br><button class="input-styled" style="background: rgba(244,67,54,0.2); border-color: var(--panic-red); color: var(--panic-red); width: 100%; cursor: pointer;" onclick="window.dispatchOfficerToLicense('${query}')">DISPATCH OFFICER TO ENFORCE</button>`;
            } else {
                statusHtml = `<span style="color: var(--accent-green); font-weight: bold;">VALID & CLEARED</span><br><br><strong>NOTES:</strong> No violations found. Paid off the inspector successfully.`;
            }
            
            licenseResults.innerHTML = `
                <div style="margin-bottom: 10px;"><strong>SUBJECT:</strong> ${query}</div>
                <div style="margin-bottom: 10px;"><strong>LICENSE TYPE:</strong> ${license}</div>
                <div style="border-top: 1px dashed var(--panel-border); margin-top: 10px; padding-top: 10px;">
                    <strong>STATUS:</strong> ${statusHtml}
                    ${dispatchHtml}
                </div>
            `;
        }, 1000);
    });
}

// --- Advanced UI & System Controls ---
document.getElementById('btn-theme-modern').addEventListener('click', () => {
    document.body.className = '';
});

document.getElementById('btn-theme-oled').addEventListener('click', () => {
    document.body.className = 'theme-oled';
});

document.getElementById('btn-theme-light').addEventListener('click', () => {
    document.body.className = 'theme-light';
});

document.getElementById('btn-theme-rainbow').addEventListener('click', () => {
    document.body.className = 'theme-rainbow';
});

document.getElementById('btn-theme-pride').addEventListener('click', () => {
    document.body.className = 'theme-pride';
});

document.getElementById('btn-fullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

document.getElementById('btn-purge-logs').addEventListener('click', () => {
    document.getElementById('unified-log').innerHTML = '';
    document.getElementById('chat-log').innerHTML = '';
    const msg = document.createElement('div');
    msg.style.color = 'var(--panic-red)';
    msg.style.padding = '10px';
    msg.style.textAlign = 'center';
    msg.innerText = '[SYSTEM CACHE PURGED BY OPERATOR]';
    document.getElementById('chat-log').appendChild(msg);
});


document.getElementById('mute-chatter-toggle').addEventListener('change', (e) => {
    ttsEnabled = !e.target.checked;
    if (e.target.checked) {
        window.speechSynthesis.cancel();
    }
});

const radioSpeedSelect = document.getElementById('radio-speed-select');
if(radioSpeedSelect) {
    radioSpeedSelect.addEventListener('change', (e) => {
        if(chatSimulateInt) clearInterval(chatSimulateInt);
        chatSimulateInt = setInterval(simulateChat, parseInt(e.target.value));
    });
}


// === OVERRIDE simulateEvent for Dynamic Points ===
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
    const _activeUnits = roster.filter(u => u.status === 'On Duty');
    _activeUnits.forEach(o => {
        weightedUnits.push(o.id);
        if (o.personality === 'Trigger-Happy' || o.personality === 'Corrupt') {
            weightedUnits.push(o.id, o.id, o.id, o.id);
        }
    });
    if (weightedUnits.length === 0) weightedUnits = ['DISP-1'];
    
    // We also need the _active array of ids for the next step:
    const _active = _activeUnits.map(u => u.id);
    
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
        chatDiv.innerHTML = `<span class="time">${getCurrentTimeStr()}</span> <span class="sender">[${respondingUnits[0]}]</span> <span class="text" style="color: var(--accent-green) !important;">${getRandomItem(GLOBAL_ARRIVING_CHATS_STANDARD).replace(/%SECTOR%/g, crime.sector || Math.floor(Math.random() * 9 + 1)).replace("15 POINTS", (crime.points || 15) + " STATION POINTS")}</span>`;
        unifiedLogEl.appendChild(chatDiv);
        scrollToBottom(unifiedLogEl);
        if (typeof awardOfficerPoints !== "undefined" && typeof respondingUnits !== "undefined" && respondingUnits.length > 0) { 
            awardOfficerPoints(respondingUnits[0], crime.points || 15); 
            if (typeof window.recordOfficerStat === 'function') window.recordOfficerStat(respondingUnits[0], 'answered');
        } else { 
            addPoints(crime.points || 15); 
        }
        
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
                implants: suspectCit.trait,
                civPersonality: suspectCit.civPersonality,
                civPersonality: suspectCit.civPersonality
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
        if (repOfficerObj && repOfficerObj.personality === 'Trigger-Happy') {
            isROEEnabled = false; // Trigger-Happy ignores ROE and always shoots
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
        let reportMsgTemplate = isROEEnabled ? getRandomItem(GLOBAL_ARRESTING_CHATS) : getRandomItem(GLOBAL_KILLING_CHATS);
        let reportMsg = reportMsgTemplate.replace(/\{suspectStr\}/g, suspectStr);
        
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
let totalBribeMoney = 0;
let currentPendingBribeAmount = 0;
var bribeAuthActive = false;
let bribeAuthTimer = null;
let bribeAuthTimeLeft = 30;
let bribeAuthOfficer = "";
let bribeAuthCitizen = "";
let lastBribeAuthTime = Date.now();

function updateBribesUI() {
    const el = document.getElementById('bribes-accepted-count');
    const moneyEl = document.getElementById('bribes-money-count');
    if (el) el.textContent = totalBribesAccepted;
    if (moneyEl) moneyEl.textContent = 'NTND $' + totalBribeMoney.toLocaleString();
}

function resolveBribeAuth(approved) {
    if (!bribeAuthActive) return;
    bribeAuthActive = false;
    if (bribeAuthTimer) clearInterval(bribeAuthTimer);
    
    const modal = document.getElementById('bribe-auth-modal');
    if (modal) modal.style.display = 'none';
    
    if (approved) {
        totalBribesAccepted++;
        totalBribeMoney += currentPendingBribeAmount;
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
    const corruptToggle = document.getElementById('corruption-toggle');
    const isCorrupt = corruptToggle ? corruptToggle.checked : true;
    const bribeAmount = Math.floor(Math.random() * 4000) + 1000;
    currentPendingBribeAmount = bribeAmount;
    
    if (!isCorrupt) {
        if (typeof addChatMessage !== 'undefined') {
            addChatMessage(bribeAuthOfficer, `Dispatch, suspect attempted to offer a $${bribeAmount} bribe. They are in cuffs. Routine arrest proceeding.`, 'serious', false);
        }
        return;
    }

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
        if (Math.random() < 0.30) { // 30% chance they take it automatically
            totalBribesAccepted++;
            totalBribeMoney += currentPendingBribeAmount;
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
var arrestAuthActive = false;
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
        const top5 = officersWithPoints;
        
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
        const top5Kills = officersWithKills;
        
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
        const top5Arrests = officersWithArrests;
        
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

    // --- CALLS ANSWERED LEADERBOARD ---
    const ansEl = document.getElementById('leaderboard-answered-list');
    if (ansEl) {
        const officersWithAnswers = roster.filter(u => u.answeredCalls && u.answeredCalls > 0);
        officersWithAnswers.sort((a, b) => b.answeredCalls - a.answeredCalls);
        const top5Answers = officersWithAnswers;
        
        if (top5Answers.length === 0) {
            ansEl.innerHTML = '<div style="color: var(--text-dim); text-align: center; padding: 10px;">Awaiting data...</div>';
        } else {
            let html = '';
            top5Answers.forEach((off, idx) => {
                let color = 'var(--text-main)';
                if (idx === 0) color = '#ffeb3b';
                else if (idx === 1) color = '#e0e0e0';
                else if (idx === 2) color = '#cd7f32';

                html += `
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(179,136,255,0.2); padding-bottom: 5px;">
                        <span style="color: ${color}; font-weight: bold;">#${idx + 1} ${off.id}</span>
                        <span style="color: #b388ff; font-weight: bold;">${off.answeredCalls} CALLS</span>
                    </div>
                `;
            });
            ansEl.innerHTML = html;
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
window.worldWidth = 3000;
window.worldHeight = 3000;
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
    for(let i=0; i<300; i++) spawnEntity('civ');
    for(let i=0; i<60; i++) spawnEntity('police');
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
            for (let other of entities) {
                if (other.faction === 'police' && Math.hypot(e.x - other.x, e.y - other.y) < 250) {
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

            // Check Cars & Pedestrians Ahead
            for (let other of entities) {
                if (other === e) continue;
                let dist = Math.hypot(e.x - other.x, e.y - other.y);
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


// ==========================================
// PUBLIC INFORMATION REGISTRY
// ==========================================
let pubInfo = {
    homeowners: 1842000,
    vehicles: 4200000,
    businesses: 840000,
    experimental: 19841,
    firearms: 184219841999
};

function updatePublicInfoUI() {
    const elHome = document.getElementById('pub-homeowners');
    const elVeh = document.getElementById('pub-vehicles');
    const elBus = document.getElementById('pub-businesses');
    const elExp = document.getElementById('pub-experimental');
    const elFire = document.getElementById('pub-firearms');
    
    if (elHome) elHome.textContent = pubInfo.homeowners.toLocaleString();
    if (elVeh) elVeh.textContent = pubInfo.vehicles.toLocaleString();
    if (elBus) elBus.textContent = pubInfo.businesses.toLocaleString();
    if (elExp) elExp.textContent = pubInfo.experimental.toLocaleString();
    if (elFire) elFire.textContent = pubInfo.firearms.toLocaleString();
}

// Fluctuations
setInterval(() => {
    // Fluctuate randomly between -5 and +5
    pubInfo.homeowners += Math.floor(Math.random() * 11) - 5;
    pubInfo.vehicles += Math.floor(Math.random() * 11) - 5;
    pubInfo.businesses += Math.floor(Math.random() * 11) - 5;
    pubInfo.experimental += Math.floor(Math.random() * 5) - 2; // Slower fluctuation
    
    // Firearms fluctuates wildly
    pubInfo.firearms += Math.floor(Math.random() * 9999) - 2000;
    
    updatePublicInfoUI();
}, 2500);

// Initial update
setTimeout(updatePublicInfoUI, 1000);


// ==========================================
// STOCK MARKET LOGIC (MCPD, CIV, GOV)
// ==========================================

let markets = {
    mcpd: { price: 2000000000.00, history: new Array(40).fill(2000000000.00), color: '#4caf50', badColor: '#f44336' },
    civ: { price: 1000000.00, history: new Array(40).fill(1000000.00), color: '#2196f3', badColor: '#f44336' },
    gov: { price: 1000000000000.00, history: new Array(40).fill(1000000000000.00), color: '#ff9800', badColor: '#f44336' },
    synth: { price: 500000.00, history: new Array(40).fill(500000.00), color: '#e040fb', badColor: '#f44336' },
    arms: { price: 50000000.00, history: new Array(40).fill(50000000.00), color: '#ff5252', badColor: '#f44336' },
    data: { price: 10000000.00, history: new Array(40).fill(10000000.00), color: '#00e5ff', badColor: '#f44336' }
};

function drawStockChart(id, pctChange) {
    const canvas = document.getElementById(`${id}-stock-chart`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hist = markets[id].history;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let minPrice = Math.min(...hist);
    let maxPrice = Math.max(...hist);
    
    const padding = (maxPrice - minPrice) * 0.2;
    minPrice -= padding;
    maxPrice += padding;
    if (minPrice === maxPrice) { minPrice -= 10; maxPrice += 10; }
    
    const range = maxPrice - minPrice;
    
    // Determine exact color based on pctChange
    let perfColor = markets[id].color; // default
    if (pctChange >= 2.0) {
        perfColor = '#006400';
    } else if (pctChange >= 0) {
        perfColor = '#4caf50';
    } else if (pctChange >= -1.5) {
        perfColor = '#ffeb3b';
    } else {
        perfColor = markets[id].badColor;
    }

    // Draw realistic grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
        let gridY = canvas.height * (i/4);
        ctx.beginPath();
        ctx.moveTo(0, gridY);
        ctx.lineTo(canvas.width, gridY);
        ctx.stroke();
    }
    
    // Draw line
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = perfColor;
    
    const stepX = canvas.width / (hist.length - 1);
    
    for (let i = 0; i < hist.length; i++) {
        const x = i * stepX;
        const y = canvas.height - (((hist[i] - minPrice) / range) * canvas.height);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Draw Arrowhead at the very end
    if (hist.length > 1) {
        const lastX = canvas.width;
        const lastY = canvas.height - (((hist[hist.length - 1] - minPrice) / range) * canvas.height);
        const prevX = (hist.length - 2) * stepX;
        const prevY = canvas.height - (((hist[hist.length - 2] - minPrice) / range) * canvas.height);
        
        let angle = Math.atan2(lastY - prevY, lastX - prevX);
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(lastX - 12 * Math.cos(angle - Math.PI / 7), lastY - 12 * Math.sin(angle - Math.PI / 7));
        ctx.lineTo(lastX - 12 * Math.cos(angle + Math.PI / 7), lastY - 12 * Math.sin(angle + Math.PI / 7));
        ctx.closePath();
        ctx.fillStyle = perfColor;
        ctx.fill();
    }
    
    // Gradient fill under line
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, `${perfColor}66`); // 40% opacity
    gradient.addColorStop(1, `${perfColor}00`); // 0% opacity
    ctx.fillStyle = gradient;
    ctx.fill();
}

const generatedMarkets = [
    { id: 'gen0', name: 'ECLIPSE DYNAMICS MARKET', price: 28294066.83, color: '#00ffff' },
    { id: 'gen1', name: 'CYBER INDUSTRIES MARKET', price: 6588524.05, color: '#ff5500' },
    { id: 'gen2', name: 'HELIX CORP MARKET', price: 37202952.43, color: '#5500ff' },
    { id: 'gen3', name: 'ZENITH CORP MARKET', price: 6450980.19, color: '#ff0055' },
    { id: 'gen4', name: 'OMNI GROUP MARKET', price: 44380393.05, color: '#ff00ff' },
    { id: 'gen5', name: 'GIGA ENTERPRISES MARKET', price: 19139372.91, color: '#00ff00' },
    { id: 'gen6', name: 'NEXUS NETWORKS MARKET', price: 17897698.69, color: '#5500ff' },
    { id: 'gen7', name: 'NOVA GENETICS MARKET', price: 6522499.32, color: '#ff5500' },
    { id: 'gen8', name: 'VECTOR ARMS MARKET', price: 46775602.4, color: '#00ffff' },
    { id: 'gen9', name: 'NEURO MUNITIONS MARKET', price: 23434930.23, color: '#ff5500' },
    { id: 'gen10', name: 'TITAN LOGISTICS MARKET', price: 2706178.93, color: '#00ff00' },
    { id: 'gen11', name: 'VOID DYNAMICS MARKET', price: 13504081.92, color: '#5500ff' },
    { id: 'gen12', name: 'TERRA HOLDINGS MARKET', price: 14312493.41, color: '#5500ff' },
    { id: 'gen13', name: 'CYBER GROUP MARKET', price: 25206041.87, color: '#00ff00' },
    { id: 'gen14', name: 'ATLAS INDUSTRIES MARKET', price: 40074271.88, color: '#5500ff' },
    { id: 'gen15', name: 'ZENITH DYNAMICS MARKET', price: 22628708.05, color: '#00ff00' },
    { id: 'gen16', name: 'VECTOR LOGISTICS MARKET', price: 7944227.66, color: '#5500ff' },
    { id: 'gen17', name: 'VANGUARD NETWORKS MARKET', price: 2001245.52, color: '#ff5500' },
    { id: 'gen18', name: 'QUANTUM SECURITY MARKET', price: 33772242.94, color: '#ff5500' },
    { id: 'gen19', name: 'CHRONO NETWORKS MARKET', price: 19141800.39, color: '#5500ff' },
    { id: 'gen20', name: 'CHRONO GENETICS MARKET', price: 38977728.48, color: '#00ffff' },
    { id: 'gen21', name: 'NOVA LOGISTICS MARKET', price: 9457491.95, color: '#00ff55' },
    { id: 'gen22', name: 'NOVA HOLDINGS MARKET', price: 9594841.26, color: '#ff0055' },
    { id: 'gen23', name: 'ATLAS ENTERPRISES MARKET', price: 16146256.47, color: '#ffff00' },
    { id: 'gen24', name: 'ECHO CORP MARKET', price: 44016801.37, color: '#00ffff' },
    { id: 'gen25', name: 'HORIZON SECURITY MARKET', price: 5285654.51, color: '#00ff55' },
    { id: 'gen26', name: 'NEURO INDUSTRIES MARKET', price: 24777525.09, color: '#00ff55' },
    { id: 'gen27', name: 'TERRA DATA MARKET', price: 8495769.67, color: '#ffff00' },
    { id: 'gen28', name: 'STELLAR GENETICS MARKET', price: 47321403.93, color: '#ff0055' },
    { id: 'gen29', name: 'TITAN ARMS MARKET', price: 19032553.4, color: '#ff00ff' },
    { id: 'gen30', name: 'NEXUS SYSTEMS MARKET', price: 31362503.06, color: '#5500ff' },
    { id: 'gen31', name: 'QUANTUM DATA MARKET', price: 36657123.29, color: '#ff5500' },
    { id: 'gen32', name: 'VANGUARD MUNITIONS MARKET', price: 8765423.64, color: '#00ffff' },
    { id: 'gen33', name: 'ECLIPSE DATA MARKET', price: 30880773.25, color: '#5500ff' },
    { id: 'gen34', name: 'STELLAR HOLDINGS MARKET', price: 40029042.84, color: '#00ff00' },
    { id: 'gen35', name: 'NEBULA ENTERPRISES MARKET', price: 19545441.12, color: '#ff00ff' },
    { id: 'gen36', name: 'NEXUS INDUSTRIES MARKET', price: 13196586.17, color: '#ff0055' },
    { id: 'gen37', name: 'VOID SYSTEMS MARKET', price: 17800977.87, color: '#ffff00' },
    { id: 'gen38', name: 'GIGA HOLDINGS MARKET', price: 48401801.79, color: '#ffff00' },
    { id: 'gen39', name: 'CHRONO SYNTHETICS MARKET', price: 45844865.9, color: '#ff00ff' },
    { id: 'gen40', name: 'VOID TECHNOLOGIES MARKET', price: 24102299.38, color: '#ff0055' },
    { id: 'gen41', name: 'VOID INDUSTRIES MARKET', price: 14132768.64, color: '#5500ff' },
    { id: 'gen42', name: 'ECLIPSE MUNITIONS MARKET', price: 44863283.11, color: '#ff00ff' },
    { id: 'gen43', name: 'NEURO DYNAMICS MARKET', price: 48269342.78, color: '#ff00ff' },
    { id: 'gen44', name: 'STELLAR INDUSTRIES MARKET', price: 13378825.23, color: '#ff5500' },
    { id: 'gen45', name: 'TERRA SYSTEMS MARKET', price: 27849919.07, color: '#00ff00' },
    { id: 'gen46', name: 'AERO GENETICS MARKET', price: 44131524.92, color: '#ff0055' },
    { id: 'gen47', name: 'ECHO MUNITIONS MARKET', price: 24013446.66, color: '#ffff00' },
    { id: 'gen48', name: 'HELIX DATA MARKET', price: 44423783.68, color: '#ff5500' },
    { id: 'gen49', name: 'ZENITH LOGISTICS MARKET', price: 48350846.02, color: '#ff5500' },
];

// Dynamically insert 50 extra markets into DOM and market object
let visibleMarkets = 10;

(function initExtraMarkets() {
    const container = document.getElementById('markets-container');
    if (!container) return;
    
    let generatedHTML = '';
    
    generatedMarkets.forEach((m, index) => {
        // Add to markets object
        markets[m.id] = { price: m.price, history: new Array(40).fill(m.price), color: m.color, badColor: '#f44336', randomTrend: 0 };
        
        // Is it initially visible?
        // Hardcoded markets: mcpd, civ, gov, synth, arms, data (6 total)
        // We want 10 visible by default. 6 hardcoded + 4 generated = 10.
        let isVisible = (index < 4) ? 'block' : 'none';
        
        generatedHTML += `
            <!-- ${m.name} -->
            <div id="${m.id}-stock-dashboard" class="gen-market" style="background: rgba(0,0,0,0.4); border: 1px solid ${m.color}; padding: 15px; border-radius: 6px; display: ${isVisible};">
                <h4 style="color: ${m.color}; margin-top: 0; margin-bottom: 10px; font-size: 1.1rem; border-bottom: 1px dashed ${m.color}; padding-bottom: 5px;">📈 ${m.name}</h4>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span id="${m.id}-stock-price" style="font-size: 1.8rem; font-weight: bold; color: ${m.color};">NTND $${m.price.toFixed(2)}</span>
                        <span id="${m.id}-stock-trend" style="color: ${m.color}; font-size: 1.2rem; margin-left: 10px;">▲ +0.00%</span>
                    </div>
                    <div style="text-align: right;">
                        <span id="${m.id}-stock-status" style="font-size: 1.1rem; font-weight: bold; color: var(--text-dim);">STABLE</span>
                    </div>
                </div>
                <div style="margin-top: 15px; border-top: 1px dashed var(--panel-border); padding-top: 10px;">
                    <canvas id="${m.id}-stock-chart" width="600" height="100" style="width: 100%; height: 100px; background: rgba(255, 255, 255, 0.05); border-radius: 4px;"></canvas>
                </div>
            </div>
        `;
    });
    
    container.innerHTML += generatedHTML;
    
    // Add "LOAD MORE" button
    const loadBtn = document.createElement('button');
    loadBtn.id = 'load-more-stocks-btn';
    loadBtn.innerHTML = '🔽 LOAD MORE MARKETS 🔽';
    loadBtn.style.cssText = 'width: 100%; padding: 15px; background: rgba(0, 255, 255, 0.1); border: 2px dashed var(--accent-blue); color: var(--accent-blue); font-size: 1.2rem; font-weight: bold; cursor: pointer; border-radius: 6px; margin-top: 10px;';
    
    loadBtn.addEventListener('click', () => {
        visibleMarkets += 10;
        const allGen = document.querySelectorAll('.gen-market');
        let shownCount = 6; // 6 hardcoded
        
        allGen.forEach((el, index) => {
            if (shownCount < visibleMarkets) {
                el.style.display = 'block';
                shownCount++;
            }
        });
        
        if (shownCount >= 6 + 50) {
            loadBtn.style.display = 'none'; // hide when all loaded
        }
    });
    
    container.parentNode.insertBefore(loadBtn, container.nextSibling);

})();


function updateStockMarkets(forceDraw = false) {
    let trustFactor = (typeof trustPercentage !== 'undefined' ? trustPercentage : 50);
    
    let updates = [];
    
    // Hardcoded special markets
    // 1. MCPD Market
    let mcpdTrend = (trustFactor - 50) / 100;
    let mcpdChangePct = (mcpdTrend * 0.03) + ((Math.random() * 0.02) - 0.01); 
    if (trustFactor < 20) mcpdChangePct -= (Math.random() * 0.03);
    updates.push({ id: 'mcpd', change: markets.mcpd.price * mcpdChangePct });
    
    // 2. CIV Market
    updates.push({ id: 'civ', change: markets.civ.price * ((Math.random() * 0.08) - 0.04) });
    
    // 3. GOV Market
    updates.push({ id: 'gov', change: markets.gov.price * ((Math.random() * 0.05) + 0.001) });
    
    // 4. SYNTH Market
    updates.push({ id: 'synth', change: markets.synth.price * ((Math.random() * 0.1) - 0.05) });
    
    // 5. ARMS Market
    updates.push({ id: 'arms', change: markets.arms.price * ((Math.random() * 0.1) - 0.05) });
    
    // 6. DATA Market
    updates.push({ id: 'data', change: markets.data.price * ((Math.random() * 0.1) - 0.05) });
    
    // Process generated markets
    if (typeof generatedMarkets !== 'undefined') {
        generatedMarkets.forEach(m => {
            // give them random walk persistence
            let marketObj = markets[m.id];
            if (!marketObj.randomTrend || Math.random() < 0.2) {
                marketObj.randomTrend = ((Math.random() * 0.12) - 0.06);
            }
            let changePct = marketObj.randomTrend + ((Math.random() * 0.04) - 0.02);
            updates.push({ id: m.id, change: marketObj.price * changePct });
        });
    }

    let stockLogEl = document.getElementById('stock-log');
    let isTabVisible = stockLogEl && stockLogEl.style.display !== 'none';
    let optToggle = document.getElementById('resource-opt-toggle');
    let isOptEnabled = optToggle ? optToggle.checked : true;
    
    let shouldDrawDOM = forceDraw || isTabVisible || !isOptEnabled;

    updates.forEach(u => {
        let market = markets[u.id];
        market.price += u.change;
        if (market.price < 0.01) market.price = 0.01;
        
        market.history.push(market.price);
        if (market.history.length > 40) market.history.shift();
        
        let pctChange = (u.change / market.price) * 100;
        
        // Only query DOM and draw canvas if the tab is actually visible, preventing background memory/CPU leaks
        if (shouldDrawDOM) {
            let priceEl = document.getElementById(`${u.id}-stock-price`);
            let trendEl = document.getElementById(`${u.id}-stock-trend`);
            let statusEl = document.getElementById(`${u.id}-stock-status`);
            
            if (priceEl && trendEl && statusEl) {
                priceEl.textContent = `NTND $${market.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
                
                // Color Logic based on performance
                let perfColor = market.color; // default
                if (pctChange >= 2.0) {
                    perfColor = '#006400'; // Dark Green (Super successful / Best seller)
                } else if (pctChange >= 0) {
                    perfColor = '#4caf50'; // Green (Going up)
                } else if (pctChange >= -1.5) {
                    perfColor = '#ffeb3b'; // Yellow (Slightly down)
                } else {
                    perfColor = market.badColor; // Red (Crashing)
                }

                if (u.change >= 0) {
                    trendEl.textContent = `▲ +${pctChange.toFixed(2)}%`;
                    trendEl.style.color = perfColor;
                    priceEl.style.color = market.color;
                } else {
                    trendEl.textContent = `▼ ${Math.abs(pctChange).toFixed(2)}%`;
                    trendEl.style.color = perfColor;
                    priceEl.style.color = market.color;
                }
                
                if (Math.abs(pctChange) > 5) {
                    statusEl.textContent = u.change > 0 ? "SURGING (BUY)" : "CRASHING (SELL)";
                    statusEl.style.color = u.change > 0 ? market.color : market.badColor;
                } else if (pctChange < -1.5) {
                    statusEl.textContent = "BEARISH";
                    statusEl.style.color = "var(--panic-orange)";
                } else if (pctChange > 1.5) {
                    statusEl.textContent = "BULLISH";
                    statusEl.style.color = market.color;
                } else {
                    statusEl.textContent = "STABLE";
                    statusEl.style.color = "var(--text-dim)";
                }
            }
            
            // Only draw chart if visible to save CPU!
            let dash = document.getElementById(`${u.id}-stock-dashboard`);
            if (dash && dash.style.display !== 'none') {
                drawStockChart(u.id, pctChange);
            }
        }
    });
}

setInterval(updateStockMarkets, 3500);
setTimeout(updateStockMarkets, 1000);


// ==========================================
// STOCK TAB WIRING
// ==========================================
(function() {
    const tabStock = document.getElementById('tab-stock');
    const stockLogEl = document.getElementById('stock-log');
    
    // Desktop Tab Wiring
    if (tabStock && stockLogEl) {
        tabStock.addEventListener('click', () => {
            if (typeof window.hideAllTabs !== 'undefined') window.hideAllTabs();
            tabStock.classList.add('active');
            tabStock.style.color = 'var(--text-main)';
            stockLogEl.style.display = 'block';
            if (typeof chatInputArea !== 'undefined' && chatInputArea) chatInputArea.style.display = 'none';
            // Instantly catch up / draw charts when tab is looked at
            updateStockMarkets(true);
        });
        
        // Hook into hideAllTabs
        if (typeof window.oldHideAllTabsStock === 'undefined') {
            window.oldHideAllTabsStock = window.hideAllTabs || function(){};
            window.hideAllTabs = function() {
                window.oldHideAllTabsStock();
                if (tabStock) { tabStock.classList.remove('active'); tabStock.style.color = 'var(--text-dim)'; }
                if (stockLogEl) stockLogEl.style.display = 'none';
            };
        }
    }

    // Mobile Bottom Nav Wiring
    // Mobile handles navigation completely differently. We need to hook into switchTab!
    if (typeof window.switchTab === 'function') {
        const oldSwitchTab = window.switchTab;
        window.switchTab = function(targetId, btnElement) {
            oldSwitchTab(targetId, btnElement);
            if (targetId === 'stock-log') {
                document.querySelectorAll('.panel-content').forEach(p => p.style.display = 'none');
                const t = document.getElementById(targetId);
                if (t) t.style.display = 'block';
            }
        };
    } else {
        // Just in case it's inline logic on mobile buttons
        const mobileBtns = document.querySelectorAll('.bottom-nav-btn');
        mobileBtns.forEach(btn => {
            if (btn.getAttribute('data-target') === 'stock-log') {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.panel-content').forEach(p => p.style.display = 'none');
                    document.querySelectorAll('.bottom-nav-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    if(stockLogEl) stockLogEl.style.display = 'block';
                });
            } else {
                btn.addEventListener('click', () => {
                    if(stockLogEl) stockLogEl.style.display = 'none';
                });
            }
        });
    }
})();


// ==========================================
// NEW DATABASE LOGIC (Warrants, Firearms, Gangs)
// ==========================================
(function initDatabaseTools() {
    const warrantBtn = document.getElementById('btn-search-warrant');
    const warrantInput = document.getElementById('warrant-input');
    const warrantResults = document.getElementById('warrant-results');
    
    if (warrantBtn) {
        warrantBtn.addEventListener('click', () => {
            const query = warrantInput.value.trim().toUpperCase() || 'UNKNOWN SUBJECT';
            warrantResults.innerHTML = `<span style="color: var(--panic-orange);">[SYSTEM] Querying global fugitive database for: ${query}...</span>`;
            warrantBtn.disabled = true;
            
            setTimeout(() => {
                warrantBtn.disabled = false;
                const r = Math.random();
                if (r < 0.4) {
                    warrantResults.innerHTML = `<span style="color: var(--accent-green);">[CLEAN] No active warrants found for ${query}. Subject is clear.</span>`;
                } else if (r < 0.7) {
                    warrantResults.innerHTML = `<span style="color: #ffeb3b;">[WARNING] Misdemeanor warrant found for ${query}.<br>Charge: Unpaid municipal citations & resisting public order.</span>`;
                } else {
                    warrantResults.innerHTML = `<span style="color: var(--panic-red); font-weight: bold; font-size: 1.1rem;">[ALERT] HIGH-PRIORITY WARRANT FOUND: ${query}</span><br>
                    <span style="color: #fff;">Charge: Class A Felony - Assault on MCPD Personnel, Cyberware smuggling.<br>
                    Directive: Subject is considered ARMED and CYBER-ENHANCED. Apprehend immediately.</span>`;
                }
            }, 1500);
        });
    }

    const firearmBtn = document.getElementById('btn-search-firearm');
    const firearmInput = document.getElementById('firearm-input');
    const firearmResults = document.getElementById('firearm-results');
    
    if (firearmBtn) {
        firearmBtn.addEventListener('click', () => {
            const serial = firearmInput.value.trim().toUpperCase() || 'UNKNOWN-SRL';
            firearmResults.innerHTML = `<span style="color: var(--panic-red);">[SYSTEM] Running ballistics trace on serial: ${serial}...</span>`;
            firearmBtn.disabled = true;
            
            setTimeout(() => {
                firearmBtn.disabled = false;
                const firstNames = ["Jax", "Kael", "Reno", "Voss", "Lena", "Trix", "Slater", "Mal"];
                const lastNames = ["Vance", "Kross", "Denton", "Mercer", "Sterling", "Graves"];
                const guns = ["Militech Crusher Pistol", "Kinetic Arms Submachine Gun", "TBMG Enforcer Shotgun", "Neon-Corp Plasma Pistol"];
                
                const owner = `${firstNames[Math.floor(Math.random()*firstNames.length)]} ${lastNames[Math.floor(Math.random()*lastNames.length)]}`;
                const gun = guns[Math.floor(Math.random()*guns.length)];
                
                const r = Math.random();
                if (r < 0.5) {
                    firearmResults.innerHTML = `
                    <span style="color: var(--accent-blue);">[REGISTERED FIREARM]</span><br>
                    <span style="color: #fff;">Serial: ${serial}<br>Model: ${gun}<br>Registered Owner: ${owner}<br>Status: <span style="color: var(--accent-green);">CLEAN - No associated crimes.</span></span>`;
                } else if (r < 0.8) {
                    firearmResults.innerHTML = `
                    <span style="color: var(--panic-orange);">[UNREGISTERED FIREARM]</span><br>
                    <span style="color: #fff;">Serial: ${serial} has been SCRAPED or ILLEGALLY MODIFIED.<br>Model: Unknown heavily modified ${gun.split(' ')[2]}<br>Status: <span style="color: var(--panic-orange);">ILLEGAL CONTRABAND. Confiscate immediately.</span></span>`;
                } else {
                    firearmResults.innerHTML = `
                    <span style="color: var(--panic-red); font-weight: bold;">[CRITICAL HIT]</span><br>
                    <span style="color: #fff;">Serial: ${serial}<br>Model: ${gun}<br>Status: <span style="color: var(--panic-red);">STOLEN PROPERTY.</span><br>
                    Ballistics match 3 unsolved homicides in the Neon District. Secure weapon as Class-1 Evidence immediately!</span>`;
                }
            }, 1800);
        });
    }

    const gangBtn = document.getElementById('btn-search-gang');
    const gangSelect = document.getElementById('gang-select');
    const gangResults = document.getElementById('gang-results');
    
    if (gangBtn) {
        gangBtn.addEventListener('click', () => {
            const faction = gangSelect.value;
            gangResults.innerHTML = `<span style="color: var(--accent-green);">[SYSTEM] Decrypting faction intel...</span>`;
            gangBtn.disabled = true;
            
            setTimeout(() => {
                gangBtn.disabled = false;
                if (faction === 'tbmg') {
                    gangResults.innerHTML = `<span style="color: var(--accent-blue); font-weight: bold;">TBMG (THE BLACK MARKET GROUP)</span><br>
                    <span style="color: #fff;">Threat Level: OMEGA<br>Notes: A massive underground corporate syndicate handling 80% of illegal munitions in the city. Heavily armed. They operate through front businesses and rarely engage police directly unless provoked. Proceed with extreme caution.</span>`;
                } else if (faction === 'neon') {
                    gangResults.innerHTML = `<span style="color: #e040fb; font-weight: bold;">NEON SYNDICATE</span><br>
                    <span style="color: #fff;">Threat Level: HIGH<br>Notes: Tech-obsessed bio-hackers known for illegal cyberware distribution and stealing proprietary corporate data. Frequently found tweaking in abandoned arcades. Often armed with EMP devices and energy weapons.</span>`;
                } else if (faction === 'rust') {
                    gangResults.innerHTML = `<span style="color: var(--panic-orange); font-weight: bold;">RUST DEVILS</span><br>
                    <span style="color: #fff;">Threat Level: MEDIUM<br>Notes: Nomadic vehicle hijackers and scrappers. They control the outer junk yards. They use heavy brute-force tactics, crude pipe weapons, and modified muscle cars. Extremely territorial.</span>`;
                } else if (faction === 'void') {
                    gangResults.innerHTML = `<span style="color: #5500ff; font-weight: bold;">VOID WALKERS</span><br>
                    <span style="color: #fff;">Threat Level: CRITICAL<br>Notes: An elusive cult of netrunners who believe they can transcend human consciousness by merging with the mainframe. They are responsible for a dozen fatal cyber-attacks on MCPD infrastructure. Rarely seen in person. Do not connect any seized devices to the MCPD network.</span>`;
                }
            }, 1200);
        });
    }

})();


function generateAvatarSVG(seed, size, personality) {
    size = size || 100;
    if (personality === 'Furry') {
        let h = 0;
        let seedStr = seed || "random";
        for (let i = 0; i < seedStr.length; i++) h = seedStr.charCodeAt(i) + ((h << 5) - h);
        let idx = Math.abs(h) % 34 + 1;
        let exts = {1:'png', 2:'jpg', 3:'jpg', 4:'jpg', 5:'jpg', 6:'png', 7:'png', 8:'jpg', 9:'png', 10:'png', 11:'png', 12:'png', 13:'png', 14:'png', 15:'png', 16:'png', 17:'jpg', 18:'png', 19:'png', 20:'png', 21:'png', 22:'png', 23:'png', 24:'png', 25:'png', 26:'png', 27:'png', 28:'png', 29:'png', 30:'jpg', 31:'jpg', 32:'png', 33:'png', 34:'png'};
        let ext = exts[idx];
        return `<img src="assets/furry/furry${idx}.${ext}" width="${size}" height="${size*1.2}" style="object-fit: cover; border-radius: 4px;" />`;
    }
    size = size || 100;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    const rand = () => { hash = Math.sin(hash) * 10000; return hash - Math.floor(hash); };
    const pick = (arr) => arr[Math.floor(Math.abs(rand()) * arr.length)];
    const randRange = (min, max) => min + Math.abs(rand()) * (max - min);

    // SPECIES (human, alien, android, mutant)
    const species = pick(['human','human','human','human','human','human','human','human',
        'alien-grey','alien-blue','alien-green','alien-reptile','android','mutant']);

    // BACKGROUNDS (12)
    const bg = pick(['#f0f0f0', '#e5e7eb', '#d1d5db', '#e2e8f0', '#f8fafc', '#ffffff', '#f3f4f6', '#f1f5f9', '#e0e0e0', '#eaeaea', '#f5f5f5', '#efefef']); // Light mugshot backgrounds

    // SKIN TONES (18 human + alien)
    let skin;
    if (species === 'alien-grey') skin = pick(['#b0b0b0','#c0c0c0','#909090','#a8a8a8']);
    else if (species === 'alien-blue') skin = pick(['#6699cc','#4488bb','#3377aa','#5588cc']);
    else if (species === 'alien-green') skin = pick(['#66aa66','#558855','#77bb77','#448844']);
    else if (species === 'alien-reptile') skin = pick(['#6b8e23','#556b2f','#8b7d3c','#5a6e2f']);
    else if (species === 'android') skin = pick(['#d0d0d0','#e0e0e0','#b8c0c8','#c0c0c0','#c8ccd0']);
    else if (species === 'mutant') skin = pick(['#cc88cc','#aa66aa','#9944aa','#bb77bb']);
    else skin = pick(['#ffdbac','#f1c27d','#e0ac69','#c68642','#8d5524','#5c3a1e','#3d2c23',
        '#2a1d17','#fce4d6','#deb887','#d2a679','#a0724a','#704214','#4a2e10',
        '#f5d6ba','#e8c4a0','#c9956b','#7a4b2a']);
    
    let skinDark = skin.replace(/[0-9a-f]{2}/gi, (m) => {
        let v = Math.max(0, parseInt(m, 16) - 35); return v.toString(16).padStart(2, '0');
    });

    // HAIR (14 styles)
    const hairs = ['bald','buzz','short','side-part','slicked','mohawk','fauxhawk',
        'long-straight','long-wavy','ponytail','bun','braids','spiky','afro'];
    let hair = pick(hairs);

    // HAIR COLORS (16)
    const hairColors = ['#111','#1a1a1a','#2d1b00','#3d2b1c','#6b3a2a','#555','#888','#bbb',
        '#eee','#ff0055','#ff4400','#00ffcc','#ffff00','#8833ff','#ff69b4','#0088ff'];
    let hairColor = pick(hairColors);

    // EYES (12 types)
    const eyeTypes = ['normal','normal','normal','normal','normal','narrow','wide','cyber-glow',
        'heterochromia','alien-large','alien-slit','visor-scan'];
    let eyeType = pick(eyeTypes);

    // EYE COLORS (14)
    const eyeColors = ['#3b2f1a','#1a5e1a','#1a3b8a','#5a3a1a','#111',
        '#00ffff','#ff00ff','#ff0000','#ffaa00','#00ff66','#fff','#8844ff','#ff4488','#44ff88'];
    let eyeColor = pick(eyeColors);

    // EYEBROW STYLES (8)
    const browStyles = ['normal','thick','thin','arched','angry','raised','unibrow','none'];
    let brow = pick(browStyles);

    // NOSE (8)
    const noseTypes = ['straight','wide','pointed','button','hooked','flat','long','tiny'];
    let nose = pick(noseTypes);

    // MOUTH (10)
    const mouthTypes = ['neutral','smile','frown','smirk','open','thin','thick-lips','snarl','grin','pursed'];
    let mouth = pick(mouthTypes);

    // FACIAL HAIR (12)
    const facialHair = ['none','none','none','none','stubble','goatee','full-beard','mustache',
        'soul-patch','mutton-chops','handlebar','long-beard'];
    let beard = pick(facialHair);

    // GLASSES/EYEWEAR (10)
    const eyewear = ['none','none','none','none','none','none','sunglasses',
        'cyber-visor','monocle','tactical-goggles'];
    let glass = pick(eyewear);

    // MASKS (10)
    const maskTypes = ['none','none','none','none','none','none','gas-mask','bandana',
        'cyber-jaw','medical-mask'];
    let mask = pick(maskTypes);

    // HEADWEAR (14)
    const headwear = ['none','none','none','none','none','none','none','none',
        'beanie','cap','hood','helmet','headband','beret','turban'];
    let hat = pick(headwear);

    // SCARS & MARKS (10)
    const scarTypes = ['none','none','none','none','none','scar-eye','scar-cheek',
        'face-tattoo','cybernetic-plate','burn-mark'];
    let scar = pick(scarTypes);

    // CLOTHING (12)
    const clothingTypes = ['t-shirt','hoodie','jacket','suit','tank-top','armor',
        'lab-coat','uniform','trench','turtleneck','vest','bare'];
    let clothing = pick(clothingTypes);
    const clothingColors = ['#333','#444','#222','#1a1a2e','#2d2d2d','#3a3a3a',
        '#4a2a1a','#1a3a4a','#2e1a3e','#3e3e2e','#1a2a1a','#4a1a1a'];
    let clothColor = pick(clothingColors);

    // NECK ACCESSORIES (6)
    const neckAcc = ['none','none','none','chain','dog-tags','collar'];
    let neck = pick(neckAcc);

    // =============== BUILD SVG ===============
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="${size}" height="${Math.round(size * 1.2)}" style="border-radius: 4px; background: ${bg}; overflow: hidden;">`;
    
    // DEFINITIONS (Gradients/Filters)
    svg += `<defs>
        <radialGradient id="faceGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="30%">
            <stop offset="0%" stop-color="${skin}" />
            <stop offset="100%" stop-color="${skinDark}" />
        </radialGradient>
        <radialGradient id="torsoGrad" cx="50%" cy="10%" r="100%">
            <stop offset="0%" stop-color="${skin}" />
            <stop offset="100%" stop-color="${skinDark}" />
        </radialGradient>
    </defs>`;

    svg += `<rect x="0" y="0" width="100" height="120" fill="${bg}" />`;

    // ---- TORSO / SHOULDERS / CLOTHING ----
    // Ensure shoulders completely cover the bottom and extend past neck
    let torsoBase = '';
    if (clothing === 'bare') {
        torsoBase = `<path d="M10,120 Q30,70 50,70 Q70,70 90,120 Z" fill="url(#torsoGrad)" />`;
    } else if (clothing === 'armor') {
        torsoBase = `<path d="M10,120 Q30,70 50,70 Q70,70 90,120 Z" fill="#444" stroke="#222" stroke-width="2"/>
                     <path d="M25,120 L25,90 L75,90 L75,120" fill="#555" stroke="#333" stroke-width="1.5"/>
                     <rect x="40" y="95" width="20" height="10" rx="3" fill="#666" stroke="#222" stroke-width="1"/>`;
    } else if (clothing === 'suit') {
        torsoBase = `<path d="M10,120 Q30,70 50,70 Q70,70 90,120 Z" fill="#222" />
                     <path d="M50,70 L40,120 L60,120 Z" fill="#fff" />
                     <path d="M50,85 L45,120 L55,120 Z" fill="#900" />
                     <path d="M10,120 L40,80 L50,120" fill="#222" stroke="#111" stroke-width="1"/>
                     <path d="M90,120 L60,80 L50,120" fill="#222" stroke="#111" stroke-width="1"/>`;
    } else if (clothing === 'hoodie') {
        torsoBase = `<path d="M5,120 Q30,65 50,65 Q70,65 95,120 Z" fill="${clothColor}" />
                     <path d="M30,85 Q50,70 70,85 L65,120 Q50,90 35,120 Z" fill="${clothColor}" stroke="#111" stroke-width="1" opacity="0.6"/>`;
    } else {
        torsoBase = `<path d="M10,120 Q30,75 50,75 Q70,75 90,120 Z" fill="${clothColor}" />`;
        if (clothing === 'jacket') {
            torsoBase += `<line x1="50" y1="75" x2="50" y2="120" stroke="#111" stroke-width="2"/>`;
        }
        if (clothing === 'turtleneck') {
            torsoBase += `<path d="M35,90 Q50,80 65,90 L62,65 Q50,60 38,65 Z" fill="${clothColor}" stroke="#111" stroke-width="0.5"/>`;
        }
    }

    // ---- NECK ----
    // Make sure the neck connects down into the torso
    svg += `<path d="M38,60 L38,80 Q50,90 62,80 L62,60 Z" fill="url(#torsoGrad)" />`;
    // Neck shadow under chin
    svg += `<path d="M38,60 Q50,72 62,60 L62,65 Q50,77 38,65 Z" fill="${skinDark}" opacity="0.6"/>`;
    
    // Add torso over neck
    svg += torsoBase;

    // Neck accessories (over clothes)
    if (neck === 'chain') {
        svg += `<path d="M40,78 Q50,95 60,78" fill="none" stroke="gold" stroke-width="1.5" stroke-dasharray="2 1"/>`;
    } else if (neck === 'dog-tags') {
        svg += `<path d="M43,78 L50,90 L57,78" fill="none" stroke="silver" stroke-width="1"/>`;
        svg += `<rect x="47" y="90" width="6" height="10" rx="1" fill="silver" transform="rotate(15 50 95)"/>`;
    } else if (neck === 'collar') {
        svg += `<rect x="36" y="72" width="28" height="6" rx="2" fill="#222" stroke="#555" stroke-width="0.5"/>`;
    }

    // ---- HEAD BASE ----
    // More realistic face contour
    if (species === 'alien-grey') {
        svg += `<path d="M24,35 C24,10 76,10 76,35 C76,55 60,70 50,70 C40,70 24,55 24,35 Z" fill="url(#faceGrad)" />`;
    } else if (species === 'alien-reptile') {
        svg += `<path d="M30,30 C30,10 70,10 70,30 C70,55 65,70 50,70 C35,70 30,55 30,30 Z" fill="url(#faceGrad)"/>`;
        for (let i = 0; i < 40; i++) {
            let sx = randRange(32, 68);
            let sy = randRange(20, 65);
            svg += `<circle cx="${sx}" cy="${sy}" r="${randRange(1,2)}" fill="${skinDark}" opacity="0.3"/>`;
        }
    } else if (species === 'android') {
        svg += `<path d="M30,30 L30,60 L40,70 L60,70 L70,60 L70,30 Z" fill="${skin}" stroke="${skinDark}" stroke-width="1"/>`;
        svg += `<line x1="50" y1="30" x2="50" y2="70" stroke="#999" stroke-width="0.5"/>`;
        svg += `<path d="M30,45 L70,45" stroke="#999" stroke-width="0.5"/>`;
    } else {
        // Human jawline is more contoured
        svg += `<path d="M28,38 C28,15 72,15 72,38 C72,55 62,68 50,70 C38,68 28,55 28,38 Z" fill="url(#faceGrad)"/>`;
        // Cheekbones
        svg += `<path d="M28,45 Q35,55 45,55" fill="none" stroke="${skinDark}" stroke-width="2" opacity="0.1"/>`;
        svg += `<path d="M72,45 Q65,55 55,55" fill="none" stroke="${skinDark}" stroke-width="2" opacity="0.1"/>`;
    }

    // ---- HAIR (Textured high-fidelity generation) ----
    // We generate actual textured hair using hundreds of tiny paths/lines
    const drawHairStrands = (count, startY, endY, ctrlY, spread, thickness, colorStr) => {
        let h = "";
        for (let i = 0; i < count; i++) {
            let startX = 50 + (randRange(-1, 1) * spread);
            let eY = endY + randRange(-5, 5);
            let cY = ctrlY + randRange(-10, 10);
            let eX = startX + randRange(-15, 15);
            h += `<path d="M${startX},${startY} Q${startX},${cY} ${eX},${eY}" fill="none" stroke="${colorStr}" stroke-width="${thickness}" opacity="${randRange(0.4, 0.9)}"/>`;
        }
        return h;
    };

    if (hat === 'none' || hat === 'headband') {
        if (hair === 'buzz') {
            for(let i=0; i<300; i++) {
                let hx = randRange(28, 72);
                let hy = randRange(15, 30);
                // Keep it inside the head curve
                if (Math.pow(hx-50, 2) + Math.pow(hy-35, 2) * 2 < 400) {
                    svg += `<line x1="${hx}" y1="${hy}" x2="${hx+randRange(-1,1)}" y2="${hy-2}" stroke="${hairColor}" stroke-width="1" opacity="0.6"/>`;
                }
            }
        } else if (hair === 'short') {
            svg += `<path d="M26,38 C26,10 74,10 74,38 C74,25 50,15 26,38 Z" fill="${hairColor}"/>`;
            svg += drawHairStrands(150, 20, 35, 10, 22, 1, hairColor);
        } else if (hair === 'side-part') {
            svg += `<path d="M26,42 C26,8 74,8 74,42 C74,20 36,15 26,42 Z" fill="${hairColor}"/>`;
            svg += drawHairStrands(100, 22, 40, 15, 20, 1, hairColor);
            svg += `<line x1="38" y1="14" x2="36" y2="30" stroke="${skin}" stroke-width="1.5" opacity="0.8"/>`;
        } else if (hair === 'slicked') {
            svg += `<path d="M26,40 C26,10 74,10 74,40 C74,25 50,15 26,40 Z" fill="${hairColor}"/>`;
            for (let i = 0; i < 150; i++) {
                let sx = randRange(30, 70);
                svg += `<path d="M${sx},15 Q50,5 ${sx+randRange(-10,10)},35" fill="none" stroke="${hairColor}" stroke-width="0.8" opacity="0.7"/>`;
            }
        } else if (hair === 'long-straight') {
            svg += `<path d="M24,40 C24,10 76,10 76,40 L80,85 L20,85 Z" fill="${hairColor}"/>`;
            svg += drawHairStrands(300, 20, 85, 40, 24, 1.2, hairColor);
        } else if (hair === 'long-wavy') {
            svg += `<path d="M24,40 C24,5 76,5 76,40 Q80,60 76,85 Q60,90 50,85 Q40,90 24,85 Q20,60 24,40 Z" fill="${hairColor}"/>`;
            for (let i = 0; i < 200; i++) {
                let sx = randRange(25, 75);
                let end = 85 + randRange(-5, 5);
                svg += `<path d="M${sx},15 C${sx-10},40 ${sx+10},60 ${sx},${end}" fill="none" stroke="${hairColor}" stroke-width="1" opacity="0.6"/>`;
            }
        } else if (hair === 'afro') {
            for(let i=0; i<400; i++) {
                let cx = 50 + randRange(-28, 28);
                let cy = 25 + randRange(-20, 15);
                if (Math.pow(cx-50,2) + Math.pow(cy-25,2) < 700) {
                    svg += `<circle cx="${cx}" cy="${cy}" r="${randRange(3, 8)}" fill="none" stroke="${hairColor}" stroke-width="${randRange(1,2)}" opacity="0.8"/>`;
                    svg += `<circle cx="${cx}" cy="${cy}" r="${randRange(2, 6)}" fill="${hairColor}" opacity="0.5"/>`;
                }
            }
        } else {
            // Fallback for others
            svg += `<path d="M26,38 C26,10 74,10 74,38 C74,25 50,15 26,38 Z" fill="${hairColor}"/>`;
        }
    }

    // ---- EYES ----
    let eyeY = 44;
    let eyeL = 39;
    let eyeR = 61;
    if (species === 'alien-grey') {
        svg += `<ellipse cx="${eyeL}" cy="${eyeY-2}" rx="9" ry="6" fill="#111" transform="rotate(-15 ${eyeL} ${eyeY-2})"/>`;
        svg += `<ellipse cx="${eyeR}" cy="${eyeY-2}" rx="9" ry="6" fill="#111" transform="rotate(15 ${eyeR} ${eyeY-2})"/>`;
    } else if (eyeType === 'narrow') {
        svg += `<ellipse cx="${eyeL}" cy="${eyeY}" rx="6" ry="2.5" fill="#e8e0d8"/>`;
        svg += `<ellipse cx="${eyeR}" cy="${eyeY}" rx="6" ry="2.5" fill="#e8e0d8"/>`;
        svg += `<circle cx="${eyeL}" cy="${eyeY}" r="2" fill="${eyeColor}"/>`;
        svg += `<circle cx="${eyeR}" cy="${eyeY}" r="2" fill="${eyeColor}"/>`;
        svg += `<circle cx="${eyeL}" cy="${eyeY}" r="1" fill="#111"/>`;
        svg += `<circle cx="${eyeR}" cy="${eyeY}" r="1" fill="#111"/>`;
    } else {
        // Normal realistic eyes
        svg += `<ellipse cx="${eyeL}" cy="${eyeY}" rx="7" ry="4.5" fill="#e8e0d8"/>`;
        svg += `<ellipse cx="${eyeR}" cy="${eyeY}" rx="7" ry="4.5" fill="#e8e0d8"/>`;
        svg += `<circle cx="${eyeL}" cy="${eyeY}" r="3.5" fill="${eyeColor}"/>`;
        svg += `<circle cx="${eyeR}" cy="${eyeY}" r="3.5" fill="${eyeColor}"/>`;
        svg += `<circle cx="${eyeL}" cy="${eyeY}" r="1.5" fill="#111"/>`;
        svg += `<circle cx="${eyeR}" cy="${eyeY}" r="1.5" fill="#111"/>`;
        svg += `<circle cx="${eyeL-1}" cy="${eyeY-1}" r="1" fill="#fff" opacity="0.7"/>`;
        svg += `<circle cx="${eyeR-1}" cy="${eyeY-1}" r="1" fill="#fff" opacity="0.7"/>`;
        
        // Eyelid depth
        svg += `<path d="M${eyeL-7},${eyeY} Q${eyeL},${eyeY-7} ${eyeL+7},${eyeY}" fill="none" stroke="${skinDark}" stroke-width="1.5" opacity="0.8"/>`;
        svg += `<path d="M${eyeR-7},${eyeY} Q${eyeR},${eyeY-7} ${eyeR+7},${eyeY}" fill="none" stroke="${skinDark}" stroke-width="1.5" opacity="0.8"/>`;
    }

    // ---- EYEBROWS (Textured) ----
    if (brow !== 'none' && species !== 'alien-grey') {
        let by = 36;
        for (let i = 0; i < 40; i++) {
            let lx = randRange(32, 46);
            let rx = randRange(54, 68);
            let arch = (brow === 'angry') ? 2 : (brow === 'arched') ? -2 : 0;
            let oyL = by + (lx - 39) * arch * 0.2;
            let oyR = by - (rx - 61) * arch * 0.2;
            svg += `<line x1="${lx}" y1="${oyL}" x2="${lx+randRange(-2,2)}" y2="${oyL+randRange(-1,1)}" stroke="${hairColor}" stroke-width="1" opacity="0.8"/>`;
            svg += `<line x1="${rx}" y1="${oyR}" x2="${rx+randRange(-2,2)}" y2="${oyR+randRange(-1,1)}" stroke="${hairColor}" stroke-width="1" opacity="0.8"/>`;
        }
    }

    // ---- NOSE ----
    if (species !== 'alien-grey') {
        // Realistic nose bridge and tip
        svg += `<path d="M50,44 L48,56 Q50,59 52,56 L50,44 Z" fill="${skinDark}" opacity="0.3"/>`;
        svg += `<path d="M46,55 Q50,58 54,55" fill="none" stroke="${skinDark}" stroke-width="1.5" opacity="0.6"/>`;
        svg += `<circle cx="47" cy="56" r="1.5" fill="${skinDark}" opacity="0.4"/>`;
        svg += `<circle cx="53" cy="56" r="1.5" fill="${skinDark}" opacity="0.4"/>`;
    } else {
        svg += `<line x1="48" y1="52" x2="52" y2="52" stroke="${skinDark}" stroke-width="1"/>`;
    }

    // ---- MOUTH ----
    let my = 63;
    if (mask === 'none' && species !== 'alien-grey') {
        let lipColor = '#8b4a3a';
        if (mouth === 'smile') {
            svg += `<path d="M42,${my} Q50,${my+6} 58,${my}" fill="none" stroke="${lipColor}" stroke-width="1.5"/>`;
        } else if (mouth === 'frown') {
            svg += `<path d="M42,${my+3} Q50,${my-2} 58,${my+3}" fill="none" stroke="${lipColor}" stroke-width="1.5"/>`;
        } else if (mouth === 'open') {
            svg += `<ellipse cx="50" cy="${my+1}" rx="6" ry="3" fill="#221111"/>`;
            svg += `<path d="M44,${my+1} Q50,${my-1} 56,${my+1}" fill="none" stroke="${lipColor}" stroke-width="1.5"/>`;
        } else {
            // Neutral detailed lips
            svg += `<path d="M43,${my} Q50,${my+1} 57,${my}" fill="none" stroke="#603020" stroke-width="1"/>`;
            // Upper lip
            svg += `<path d="M43,${my} Q50,${my-3} 57,${my} Q50,${my} 43,${my} Z" fill="${lipColor}" opacity="0.5"/>`;
            // Lower lip
            svg += `<path d="M43,${my} Q50,${my+4} 57,${my} Q50,${my} 43,${my} Z" fill="${lipColor}" opacity="0.7"/>`;
        }
    }

    // ---- FACIAL HAIR (Textured thousands of strokes) ----
    if (mask === 'none' && beard !== 'none' && species !== 'alien-grey') {
        if (beard === 'stubble' || beard === 'full-beard') {
            let density = beard === 'stubble' ? 150 : 600;
            let length = beard === 'stubble' ? 1.5 : 4;
            let thick = beard === 'stubble' ? 0.5 : 1;
            for (let i = 0; i < density; i++) {
                let bx = randRange(30, 70);
                let by = randRange(55, 75);
                // Mask to jawline
                if (Math.pow(bx-50, 2)*0.8 + Math.pow(by-50, 2) < 400 && by > 55) {
                    svg += `<line x1="${bx}" y1="${by}" x2="${bx+randRange(-1,1)}" y2="${by+length}" stroke="${hairColor}" stroke-width="${thick}" opacity="${randRange(0.4, 0.8)}"/>`;
                }
            }
        } else if (beard === 'goatee') {
            for (let i = 0; i < 200; i++) {
                let bx = randRange(43, 57);
                let by = randRange(65, 75);
                svg += `<line x1="${bx}" y1="${by}" x2="${bx+randRange(-1,1)}" y2="${by+3}" stroke="${hairColor}" stroke-width="1" opacity="0.8"/>`;
            }
        }
        if (beard === 'mustache' || beard === 'full-beard' || beard === 'handlebar') {
            for (let i = 0; i < 150; i++) {
                let mx = randRange(40, 60);
                let my = randRange(57, 61);
                svg += `<line x1="${mx}" y1="${my}" x2="${mx+randRange(-2,2)}" y2="${my+3}" stroke="${hairColor}" stroke-width="1" opacity="0.8"/>`;
            }
        }
    }

    // ---- MASK / EYEWEAR / ACCESSORIES ----
    if (glass === 'sunglasses') {
        svg += `<rect x="30" y="40" width="17" height="9" rx="3" fill="#111" opacity="0.9"/>`;
        svg += `<rect x="53" y="40" width="17" height="9" rx="3" fill="#111" opacity="0.9"/>`;
        svg += `<line x1="47" y1="44" x2="53" y2="44" stroke="#333" stroke-width="2"/>`;
        // glare
        svg += `<polygon points="32,48 40,41 44,41 36,48" fill="#fff" opacity="0.2"/>`;
        svg += `<polygon points="55,48 63,41 67,41 59,48" fill="#fff" opacity="0.2"/>`;
    } else if (glass === 'cyber-visor') {
        svg += `<path d="M26,40 Q50,45 74,40 L70,50 Q50,55 30,50 Z" fill="rgba(0,255,255,0.4)" stroke="#0ff" stroke-width="1"/>`;
    }

    svg += `</svg>`;
    return svg;
}




// === DYNAMIC CRIME POINTS MODIFICATION ===
(function() {
    if (typeof crimeReports !== 'undefined') {
        // 1. Add Terrorism calls
        crimeReports.push(
            { title: "10-100: DOMESTIC TERRORISM", priority: "high", location: "Sector 1, City Center", desc: "Suspect is attempting to detonate a large cyber-explosive near the municipal water supply.", group: "Terrorists" },
            { title: "10-100: CYBER TERRORISM", priority: "high", location: "Sector 2, Financial District", desc: "A group of hackers is threatening to overload the city's power grid unless demands are met.", group: "Terrorists" },
            { title: "10-100: BIO-TERRORISM", priority: "high", location: "Sector 4, Bio-Dome", desc: "Individual threatening to release weaponized neuro-toxins into the ventilation system.", group: "Terrorists" },
            { title: "10-100: ACT OF TERROR", priority: "high", location: "Grand TBMG Hotel", desc: "Hostage situation with suspected terrorists heavily armed and threatening the Mayor.", group: "Terrorists" },
            { title: "10-100: ECO-TERRORISM", priority: "high", location: "Sector 4, Bio-Dome", desc: "The suspect is with terrorism. It's time to engage the suspect. This is considered a call.", group: "Terrorists", points: 999999999 }
        );

        // 2. Adjust points
        crimeReports.forEach(c => {
            if (c.title.toLowerCase().includes('terror')) {
                c.points = 999999999;
            } else if (c.priority === 'high') {
                // 5k to 10k points
                c.points = Math.floor(Math.random() * 5001) + 5000;
            } else {
                // Mandatory 1k points
                c.points = 1000;
            }
        });
    }
})();


// === RAPID EVENTS TOGGLE ===
(function() {
    const rapidEventsToggle = document.getElementById('rapid-events-toggle');
    const autoEventsCheckbox = document.getElementById('auto-events');
    
    if (rapidEventsToggle && autoEventsCheckbox) {
        rapidEventsToggle.addEventListener('change', () => {
            if (typeof autoSimulateInt !== 'undefined') {
                clearInterval(autoSimulateInt);
            }
            
            const intervalTime = rapidEventsToggle.checked ? 100 : 10000;
            
            autoSimulateInt = setInterval(() => {
                if (typeof simulateEvent === 'function') simulateEvent();
                if (Math.random() < 0.01 && autoEventsCheckbox.checked && typeof activePanics !== 'undefined' && activePanics.size < 3) {
                    if (typeof triggerPanic === 'function') triggerPanic();
                }
            }, intervalTime);
        });
    }
})();


