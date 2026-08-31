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
const autoEventsCheckbox = document.getElementById('auto-events');
  const tabRecruitment = document.getElementById('tab-recruitment');
  const recruitmentLogEl = document.getElementById('recruitment-log');
  const applicantListEl = document.getElementById('applicant-list');
  const refreshApplicantsBtn = document.getElementById('refresh-applicants-btn');
    const rosterTotalCountEl = document.getElementById('roster-total-count');

  const PERSONALITIES = ['Aggressive', 'Rookie', 'Veteran', 'Paranoid', 'Sarcastic', 'By-The-Book', 'Lazy', 'Reckless', 'Idealistic'];
  let currentApplicants = [];

const roeToggleCheckbox = document.getElementById('roe-toggle');
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
let activePanics = new Map(); // Store maps of unit -> { timeoutVisual, timeoutSound }
let autoSimulateInt = null;
let chatSimulateInt = null;

// Mock Data
let roster = [];
  function initRoster() {
      for(let i=0; i<58; i++) {
          roster.push({
              id: `Unit-${Math.floor(10000 + Math.random() * 90000)}`,
              status: 'On Duty',
              personality: PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
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
    { title: "10-71: Shots fired reported by civilian", priority: "high", group: "Local Gangs" },
    { title: "10-16: Domestic Disturbance", priority: "medium" },
    { title: "10-50: Motor vehicle collision", priority: "medium" },
    { title: "10-54: Possible dead body", priority: "high" },
    { title: "10-33: Alarm sounding (Commercial)", priority: "medium" },
    { title: "10-33: Alarm sounding (Residential)", priority: "low" },
    { title: "10-43: Suspicious person reported by civilian", priority: "low" },
    { title: "10-89: Bomb threat", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-90: Bank alarm", priority: "high" },
    { title: "10-15: Civil Disturbance", priority: "medium" },
    { title: "10-14: Prowler", priority: "medium" },
    { title: "10-31: Burglary in progress", priority: "high", group: "The Splicers" },
    { title: "10-32: Person with a gun", priority: "high" },
    { title: "10-32: Person with a knife", priority: "medium" },
    { title: "10-39: Disturbance (Loud music)", priority: "low" },
    { title: "10-44: Public intoxication", priority: "low" },
    { title: "10-45: Bio-waste in roadway", priority: "low" },
    { title: "10-46: Motorist assist", priority: "low" },
    { title: "10-49: Traffic grid infrastructure failure", priority: "medium" },
    { title: "10-51: Tow drone requested", priority: "low" },
    { title: "10-52: Med-Evac requested", priority: "high" },
    { title: "10-55: Intoxicated hover-driver", priority: "high" },
    { title: "10-56: Intoxicated pedestrian", priority: "low" },
    { title: "10-57: Hit and run accident", priority: "medium" },
    { title: "10-58: Direct traffic", priority: "low" },
    { title: "10-62: Attempted kidnapping", priority: "high", group: "Downtown Syndicate" },
    { title: "10-66: Suspicious vehicle", priority: "low" },
    { title: "10-72: Fire reported by civilian", priority: "high" },
    { title: "10-80: Chase in progress", priority: "high" },
    { title: "10-91: Cyber-animal bite", priority: "medium" },
    { title: "10-96: Mental subject / Cyberpsychosis", priority: "high", group: "Unaffiliated" },
    { title: "10-100: Dead body", priority: "high" },
    { title: "10-103: Disturbance (Brawl)", priority: "medium" },
    { title: "Civilian requesting assistance (Non-emergency)", priority: "low" },
    { title: "Civilian requesting wellness check", priority: "low" },
    { title: "Shoplifting reported by store owner", priority: "low" },
    { title: "Vandalism in progress", priority: "low", group: "Neon Vipers" },
    { title: "Loitering complaint", priority: "low" },
    { title: "Trespassing on Tyrell Corp private property", priority: "medium", group: "Tyrell Corp Security" },
    { title: "Reckless driving reported", priority: "medium" },
    { title: "10-56: Unidentified Aerial Phenomenon reported by civilian", priority: "low" },
    { title: "10-99: Temporal displacement anomaly", priority: "high" },
    { title: "10-66: Illegal Cyberware Installation", priority: "high", group: "Ripperdoc Cartel" },
    { title: "11-44: Bio-Hazard Spill", priority: "high", group: "Tyrell Corp" },
    { title: "10-11: Animal Problem - Rogue Synthetic Dog", priority: "medium" },
    { title: "10-10: Civilian reports being followed by a corporate drone", priority: "low" },
    { title: "10-96: Individual claims to be from the past", priority: "low" },
    { title: "10-31: Android malfunction / Rogue unit", priority: "high" },
    { title: "10-89: Cyber-attack on local infrastructure", priority: "high" },
    { title: "10-15: Cult gathering in sewers", priority: "medium", group: "The Awakened" },
    { title: "10-34: Riot in Progress", priority: "high", group: "Anti-Corp Protesters" },
    { title: "10-43: Information - Suspicious Activity", priority: "medium" },
    { title: "10-24: Abandoned Vehicle", priority: "low" },
    { title: "10-85: Delay due to arrest", priority: "low" },
    { title: "10-99: Officer needs assistance", priority: "high" }
,
{ title: "10-53: Unauthorized public intercourse at location [RAND_LOC]", priority: "low" },
    { title: "10-14: Suspicious individual loitering near checkpoint [RAND_LOC]", priority: "low" },
    { title: "10-33: Silent alarm triggered at commercial facility [RAND_LOC]", priority: "medium" },
    { title: "10-73: Unsanctioned cybernetics discharge in sector [RAND_LOC]", priority: "high", group: "Ripperdoc Cartel" },
    { title: "10-45: Biological waste dumped at intersection [RAND_LOC]", priority: "low" },
    { title: "10-16: Domestic dispute involving heavily augmented individuals", priority: "medium" },
    { title: "10-66: Stolen corporate hover-vehicle sighted at [RAND_LOC]", priority: "high", group: "Tyrell Corp" },
    { title: "10-31: Robbery in progress at synthetic organ clinic [RAND_LOC]", priority: "high", group: "The Splicers" },
    { title: "10-10: Civilian reports malfunctioning android at [RAND_LOC]", priority: "medium" },
    { title: "10-89: Unidentified package ticking at transit hub [RAND_LOC]", priority: "high" },
    { title: "10-54: Possible dead body found in maintenance shaft [RAND_LOC]", priority: "high" },
    { title: "10-34: Illegal street race detected in sector [RAND_LOC]", priority: "medium", group: "Neon Vipers" },
    { title: "10-15: Civil disturbance - Anti-synth protest at [RAND_LOC]", priority: "medium", group: "Anti-Corp Protesters" },
    { title: "10-91: Stray genetically modified animal reported at [RAND_LOC]", priority: "low" },
    { title: "10-44: Public intoxication - Subject leaking coolant at [RAND_LOC]", priority: "low" },
    { title: "10-50: Hover-vehicle collision at level 4 overpass [RAND_LOC]", priority: "medium" },
    { title: "10-71: Shots fired near automated factory [RAND_LOC]", priority: "high" },
    { title: "10-32: Subject brandishing thermal katana at [RAND_LOC]", priority: "high" },
    { title: "10-62: Hostage situation reported in block [RAND_LOC]", priority: "high", group: "Downtown Syndicate" },
    { title: "10-39: Noise complaint - Illegal sonic weapon testing at [RAND_LOC]", priority: "medium" },
    { title: "11-44: Corrosive fluid spill at industrial zone [RAND_LOC]", priority: "high" },
    { title: "10-43: Suspicious drone activity over residential sector [RAND_LOC]", priority: "low" },
    { title: "10-96: Cyberpsychosis incident in progress at [RAND_LOC]", priority: "high", group: "Unaffiliated" },
    { title: "10-55: Hover-driver heavily intoxicated on synthetic opioids", priority: "high" },
    { title: "10-11: Swarm of rogue delivery drones at [RAND_LOC]", priority: "medium" },
    { title: "10-80: High-speed pursuit heading towards block [RAND_LOC]", priority: "high" },
    { title: "10-24: Abandoned heavily armored transport at [RAND_LOC]", priority: "medium" },
    { title: "10-90: Unauthorized network breach at corporate node [RAND_LOC]", priority: "high" },
    { title: "10-46: Civilian vehicle stalled in active traffic lane [RAND_LOC]", priority: "low" },
    { title: "10-103: Brawl involving corporate security at [RAND_LOC]", priority: "medium", group: "Tyrell Corp Security" },
    { title: "10-51: Tow requested for disabled enforcement mech at [RAND_LOC]", priority: "low" },
    { title: "10-57: Hit and run involving automated taxi at [RAND_LOC]", priority: "medium" },
    { title: "10-72: Structural fire reported at sector [RAND_LOC]", priority: "high" },
    { title: "10-99: Temporal anomaly detected - Proceed with caution", priority: "high" },
    { title: "10-100: Multiple casualties found in alleyway [RAND_LOC]", priority: "high", group: "Northside Kings" },
    { title: "10-14: Prowler on rooftops near sector [RAND_LOC]", priority: "medium" },
    { title: "10-58: Traffic control grid failure at intersection [RAND_LOC]", priority: "low" },
    { title: "10-32: Subject armed with military-grade explosives at [RAND_LOC]", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Civilian requesting assistance with malfunctioning neural link", priority: "low" },
    { title: "Shoplifting of black-market cyberware at [RAND_LOC]", priority: "low" },
    { title: "Vandalism of corporate holograms at [RAND_LOC]", priority: "low", group: "Neon Vipers" },
    { title: "Loitering complaint - Suspected gang members at [RAND_LOC]", priority: "low" },
    { title: "Trespassing on restricted Tyrell Corp property [RAND_LOC]", priority: "medium", group: "Tyrell Corp Security" },
    { title: "10-56: Unidentified Aerial Phenomenon approaching [RAND_LOC]", priority: "low" },
    { title: "10-66: Illegal Cyberware Installation clinic discovered at [RAND_LOC]", priority: "high", group: "Ripperdoc Cartel" },
    { title: "10-10: Civilian reports being tracked by orbital laser [RAND_LOC]", priority: "low" },
    { title: "10-96: Subject claims to be a rogue AI in a human body at [RAND_LOC]", priority: "low" },
    { title: "10-31: Android malfunction / Rogue combat unit at [RAND_LOC]", priority: "high" },
    { title: "10-15: Unsanctioned cult gathering in the lower sewers [RAND_LOC]", priority: "medium", group: "The Awakened" },
    { title: "10-85: Officer delayed - Hovercar power failure at [RAND_LOC]", priority: "low" }
,
    { title: "10-15: Disruptive gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "10-15: Minor unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "10-15: Unsanctioned anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "Code 2: Unsanctioned protest located on block [RAND_LOC].", priority: "high" },
    { title: "Warning: Minor gathering forming at sector [RAND_LOC].", priority: "low" },
    { title: "Incident: Large barricades being erected at block [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Code 3: Unsanctioned mob harassing citizens at [RAND_LOC].", priority: "low" },
    { title: "BOLO: Hostile protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "10-15: Aggressive riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Incident: Violent anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "Warning: Aggressive unlawful assembly detected at [RAND_LOC].", priority: "low" },
    { title: "Sector Alert: Minor civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "Warning: Organized protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Rowdy protest located on block [RAND_LOC].", priority: "medium" },
    { title: "10-22: Growing civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Rowdy citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "BOLO: Hostile mob harassing citizens at [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Warning: Large anti-government strike identified at [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Dispatch: Violent citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "10-15: Unruly riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Code 2: Rowdy protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Growing citizens blocking traffic at block [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Code 3: Growing crowd chanting anti-corp slogans at [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Unruly riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "10-15: Large group distributing banned literature at [RAND_LOC].", priority: "low" },
    { title: "10-22: Large citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "BOLO: Large unlicensed public speech occurring at sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Dispatch: Disruptive protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Minor unlawful assembly detected at [RAND_LOC].", priority: "low" },
    { title: "Code 3: Minor gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Unauthorized gathering forming at sector [RAND_LOC].", priority: "low" },
    { title: "BOLO: Rowdy riot breaking out on street [RAND_LOC].", priority: "medium" },
    { title: "Alert: Aggressive anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Massive unlicensed public speech occurring at sector [RAND_LOC].", priority: "low" },
    { title: "Warning: Minor citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Incident: Unruly protest located on block [RAND_LOC].", priority: "high" },
    { title: "Incident: Disruptive citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Organized unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Rowdy gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Hostile unlawful assembly detected at [RAND_LOC].", priority: "low" },
    { title: "Sector Alert: Violent crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "10-15: Rowdy gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "10-15: Violent riot breaking out on street [RAND_LOC].", priority: "medium" },
    { title: "Warning: Massive gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Code 3: Aggressive barricades being erected at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Incident: Growing march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "Alert: Unauthorized anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Minor barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Hostile civil disobedience reported at block [RAND_LOC].", priority: "low" },
    { title: "Warning: Hostile protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "10-22: Unauthorized protest located on block [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Unruly anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Aggressive protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Organized anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "10-15: Organized citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "Code 3: Organized unlicensed public speech occurring at sector [RAND_LOC].", priority: "high" },
    { title: "Alert: Large barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Warning: Massive protest located on block [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "BOLO: Disruptive gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Violent civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Incident: Hostile group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Incident: Rowdy group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "10-15: Unsanctioned gathering forming at sector [RAND_LOC].", priority: "low" },
    { title: "Incident: Unauthorized anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "Incident: Rowdy anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "Code 2: Hostile anti-government strike identified at [RAND_LOC].", priority: "low" },
    { title: "Warning: Aggressive riot breaking out on street [RAND_LOC].", priority: "medium" },
    { title: "10-15: Massive march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "10-22: Organized riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "BOLO: Massive citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Incident: Unruly anti-civil demonstration near [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Sector Alert: Unsanctioned mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "Alert: Growing anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Large gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Disruptive mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "10-22: Unruly citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "Incident: Large protest located on block [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Rowdy unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Violent crowd chanting anti-corp slogans at [RAND_LOC].", priority: "low" },
    { title: "Code 2: Large citizens blocking traffic at block [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Dispatch: Rowdy protest located on block [RAND_LOC].", priority: "low" },
    { title: "Code 2: Unauthorized barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Code 3: Disruptive gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Violent unlicensed public speech occurring at sector [RAND_LOC].", priority: "low" },
    { title: "Code 3: Growing crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "BOLO: Minor unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Incident: Organized protest located on block [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-22: Unsanctioned gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Rowdy group distributing banned literature at [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Disruptive unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Large unlicensed public speech occurring at sector [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Unauthorized gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Minor anti-civil demonstration near [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-15: Unsanctioned mob harassing citizens at [RAND_LOC].", priority: "low" },
    { title: "10-22: Unsanctioned crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Unruly citizens blocking traffic at block [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "10-22: Growing march proceeding down sector [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "10-15: Massive protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Aggressive citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "10-22: Unruly protest located on block [RAND_LOC].", priority: "high" },
    { title: "BOLO: Massive mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Rowdy gathering forming at sector [RAND_LOC].", priority: "low" },
    { title: "Alert: Violent anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Warning: Aggressive civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Rowdy unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "BOLO: Small group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "10-15: Aggressive unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "Alert: Large citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Incident: Organized gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Violent citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Minor mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Rowdy anti-civil demonstration near [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-15: Aggressive barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Unsanctioned gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Warning: Large riot breaking out on street [RAND_LOC].", priority: "low" },
    { title: "10-22: Massive protest located on block [RAND_LOC].", priority: "high" },
    { title: "Alert: Minor gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Organized gathering forming at sector [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Dispatch: Disruptive mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Small gathering forming at sector [RAND_LOC].", priority: "low" },
    { title: "Incident: Organized citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "Code 3: Organized barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Violent crowd chanting anti-corp slogans at [RAND_LOC].", priority: "low" },
    { title: "Code 3: Aggressive anti-government strike identified at [RAND_LOC].", priority: "low" },
    { title: "Alert: Minor anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "10-22: Organized protest located on block [RAND_LOC].", priority: "low" },
    { title: "BOLO: Disruptive group distributing banned literature at [RAND_LOC].", priority: "low" },
    { title: "Sector Alert: Unauthorized crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Aggressive civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Code 3: Disruptive riot breaking out on street [RAND_LOC].", priority: "medium" },
    { title: "Incident: Small citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Code 3: Unsanctioned civil disobedience reported at block [RAND_LOC].", priority: "low" },
    { title: "10-22: Growing group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Unauthorized unlicensed public speech occurring at sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Code 2: Large protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Alert: Unauthorized protest located on block [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Organized civil disobedience reported at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "10-15: Organized citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Unruly anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "10-22: Large protest located on block [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Aggressive march proceeding down sector [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Minor march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "Code 3: Rowdy unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "10-15: Hostile group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "Warning: Unruly group distributing banned literature at [RAND_LOC].", priority: "low" },
    { title: "Code 2: Unruly mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Disruptive mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Alert: Organized unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Violent anti-civil demonstration near [RAND_LOC].", priority: "low" },
    { title: "Warning: Large protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Large civil disobedience reported at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Warning: Minor anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "10-22: Aggressive barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Code 2: Unruly mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Hostile civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Alert: Massive civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "10-22: Unauthorized march proceeding down sector [RAND_LOC].", priority: "low" },
    { title: "Code 3: Massive barricades being erected at block [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Code 3: Unruly civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Code 3: Aggressive unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Aggressive protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "Incident: Unsanctioned riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Unruly protesters defacing corporate property at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Incident: Minor unlawful assembly detected at [RAND_LOC].", priority: "low" },
    { title: "BOLO: Unauthorized gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "10-15: Large protest located on block [RAND_LOC].", priority: "high" },
    { title: "Code 2: Unauthorized unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Warning: Unauthorized unlawful assembly detected at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Code 3: Unruly protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "Incident: Minor civil disobedience reported at block [RAND_LOC].", priority: "low" },
    { title: "Code 3: Disruptive barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "10-22: Massive crowd chanting anti-corp slogans at [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Code 3: Rowdy protest located on block [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Minor march proceeding down sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Code 2: Unsanctioned unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Unauthorized protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Rowdy citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "10-22: Unauthorized gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "10-22: Organized gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Incident: Unauthorized citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "BOLO: Small gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "BOLO: Minor anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "10-22: Massive group distributing banned literature at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Incident: Minor unlicensed public speech occurring at sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Code 2: Aggressive riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Code 3: Massive group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Aggressive anti-government strike identified at [RAND_LOC].", priority: "low" },
    { title: "Code 3: Violent unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Violent anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Violent protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Incident: Unruly protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Alert: Minor march proceeding down sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "BOLO: Organized protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Warning: Organized unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "Warning: Rowdy anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Unauthorized citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Warning: Disruptive group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Rowdy crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "10-22: Hostile citizens blocking traffic at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Incident: Unauthorized civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Unauthorized group distributing banned literature at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Alert: Minor anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Warning: Violent group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "Warning: Hostile protest located on block [RAND_LOC].", priority: "high" },
    { title: "Code 2: Hostile protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Hostile civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "10-22: Violent protest located on block [RAND_LOC].", priority: "high" },
    { title: "Code 3: Growing citizens blocking traffic at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Sector Alert: Rowdy protest located on block [RAND_LOC].", priority: "medium" },
    { title: "10-22: Minor barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Alert: Unsanctioned protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Small group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "BOLO: Unauthorized group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Violent crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Incident: Rowdy anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Unsanctioned unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "10-22: Large riot breaking out on street [RAND_LOC].", priority: "medium" },
    { title: "Incident: Unauthorized mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Aggressive group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "10-22: Aggressive riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Alert: Violent anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Small civil disobedience reported at block [RAND_LOC].", priority: "low" },
    { title: "Alert: Growing gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Large citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Incident: Unruly protest located on block [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Growing mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "10-22: Unauthorized protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Organized gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Alert: Disruptive group distributing banned literature at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "10-15: Unruly march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "Incident: Growing citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Unruly civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Incident: Aggressive anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Massive citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Warning: Massive anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "BOLO: Unruly civil disobedience reported at block [RAND_LOC].", priority: "low" },
    { title: "Code 2: Growing crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium" },
    { title: "Warning: Massive protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Unruly protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "10-15: Violent protest located on block [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Alert: Unsanctioned protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Violent unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Alert: Aggressive citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Hostile citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Aggressive anti-civil demonstration near [RAND_LOC].", priority: "low" },
    { title: "Incident: Unruly riot breaking out on street [RAND_LOC].", priority: "low" },
    { title: "Code 3: Minor riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Incident: Hostile protest located on block [RAND_LOC].", priority: "low" },
    { title: "Incident: Aggressive citizens blocking traffic at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Incident: Small barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Organized anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "10-22: Large unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Unruly protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Massive mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Rowdy group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Unruly civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "Alert: Disruptive anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Organized citizens blocking traffic at block [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Code 3: Large unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "10-22: Hostile protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "10-15: Massive group distributing banned literature at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Warning: Minor march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "Code 3: Unruly crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Growing group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Disruptive barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Alert: Unruly protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Unsanctioned protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Unsanctioned civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Minor civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Code 2: Massive protest located on block [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Organized group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Unsanctioned barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Unauthorized crowd chanting anti-corp slogans at [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Warning: Unauthorized group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Violent protest located on block [RAND_LOC].", priority: "high" },
    { title: "Code 2: Unruly citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "10-22: Rowdy riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Code 3: Organized group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Massive unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "10-15: Unsanctioned mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Incident: Aggressive march proceeding down sector [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "10-15: Hostile barricades being erected at block [RAND_LOC].", priority: "low" },
    { title: "Code 3: Unauthorized gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Disruptive crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium" },
    { title: "Incident: Small protest located on block [RAND_LOC].", priority: "low" },
    { title: "Incident: Massive unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Incident: Unauthorized protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "Warning: Violent gathering forming at sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-22: Unruly march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "10-22: Unsanctioned barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Code 2: Organized unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Unsanctioned gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Alert: Large crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Alert: Massive barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "10-22: Violent unlicensed public speech occurring at sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-22: Unauthorized march proceeding down sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Sector Alert: Unruly mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Organized unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Rowdy citizens blocking traffic at block [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-15: Organized gathering forming at sector [RAND_LOC].", priority: "low" },
    { title: "BOLO: Violent unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "10-15: Rowdy march proceeding down sector [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Unsanctioned march proceeding down sector [RAND_LOC].", priority: "medium" },
    { title: "Warning: Unruly march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "10-22: Organized protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Alert: Organized unlicensed public speech occurring at sector [RAND_LOC].", priority: "low" },
    { title: "Incident: Massive gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Aggressive group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "Warning: Disruptive unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Incident: Unruly civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Violent mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "Incident: Massive gathering forming at sector [RAND_LOC].", priority: "low" },
    { title: "Code 2: Growing citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Alert: Massive unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Alert: Unruly barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "10-15: Unauthorized unlicensed public speech occurring at sector [RAND_LOC].", priority: "low" },
    { title: "Code 3: Unsanctioned protesters defacing corporate property at [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Incident: Unauthorized gathering forming at sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Code 2: Large gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Warning: Disruptive unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Disruptive gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Warning: Unauthorized protest located on block [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Aggressive anti-government strike identified at [RAND_LOC].", priority: "low" },
    { title: "Code 2: Disruptive protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "10-22: Violent crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium" },
    { title: "Alert: Unsanctioned unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Massive anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "Incident: Aggressive anti-civil demonstration near [RAND_LOC].", priority: "low" },
    { title: "Warning: Small anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Organized riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "10-15: Unauthorized barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Incident: Violent protest located on block [RAND_LOC].", priority: "low" },
    { title: "Code 3: Minor barricades being erected at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Incident: Organized anti-civil demonstration near [RAND_LOC].", priority: "low" },
    { title: "Code 3: Large anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Organized unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "10-15: Small barricades being erected at block [RAND_LOC].", priority: "low" },
    { title: "Incident: Unruly anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Unauthorized citizens blocking traffic at block [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Warning: Disruptive crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Unauthorized unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Code 3: Unsanctioned crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Incident: Small citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Incident: Aggressive barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Alert: Organized anti-civil demonstration near [RAND_LOC].", priority: "low" },
    { title: "Warning: Growing march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "Code 2: Massive civil disobedience reported at block [RAND_LOC].", priority: "low" },
    { title: "Incident: Unruly citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Warning: Organized mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Organized citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Warning: Minor unlawful assembly detected at [RAND_LOC].", priority: "low" },
    { title: "Code 2: Small crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Unauthorized crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium" },
    { title: "Alert: Aggressive civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "10-15: Disruptive unlicensed public speech occurring at sector [RAND_LOC].", priority: "high" },
    { title: "10-22: Small unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "Warning: Organized unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "Incident: Aggressive protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Large barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Violent barricades being erected at block [RAND_LOC].", priority: "low" },
    { title: "10-15: Minor anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "10-22: Violent riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Alert: Hostile anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Growing anti-government strike identified at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Alert: Disruptive citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Sector Alert: Small unlawful assembly detected at [RAND_LOC].", priority: "low" },
    { title: "10-22: Rowdy crowd chanting anti-corp slogans at [RAND_LOC].", priority: "low" },
    { title: "Sector Alert: Unauthorized group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Disruptive riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Alert: Hostile anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Hostile protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Disruptive citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Disruptive unlicensed public speech occurring at sector [RAND_LOC].", priority: "low" },
    { title: "Code 3: Unruly unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Massive anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Large civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Disruptive crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Growing riot breaking out on street [RAND_LOC].", priority: "medium" },
    { title: "Sector Alert: Hostile crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Warning: Massive anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Incident: Growing anti-government strike identified at [RAND_LOC].", priority: "low" },
    { title: "10-22: Minor unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Alert: Growing gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "10-22: Unsanctioned protesters defacing corporate property at [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Dispatch: Unauthorized gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Large barricades being erected at block [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Incident: Unauthorized anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Small crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Unruly march proceeding down sector [RAND_LOC].", priority: "low" },
    { title: "Sector Alert: Unsanctioned mob harassing citizens at [RAND_LOC].", priority: "low" },
    { title: "10-15: Rowdy march proceeding down sector [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Massive anti-civil demonstration near [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "BOLO: Violent anti-government strike identified at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Alert: Hostile anti-government strike identified at [RAND_LOC].", priority: "low" },
    { title: "Sector Alert: Large protest located on block [RAND_LOC].", priority: "medium" },
    { title: "10-22: Massive anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "BOLO: Growing protest located on block [RAND_LOC].", priority: "low" },
    { title: "Code 3: Small anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Violent unlicensed public speech occurring at sector [RAND_LOC].", priority: "low" },
    { title: "Warning: Small citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "Incident: Growing riot breaking out on street [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Incident: Unauthorized crowd chanting anti-corp slogans at [RAND_LOC].", priority: "low" },
    { title: "BOLO: Massive unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Unsanctioned unlawful assembly detected at [RAND_LOC].", priority: "low" },
    { title: "BOLO: Unauthorized gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Massive unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "10-22: Rowdy unlawful assembly detected at [RAND_LOC].", priority: "low" },
    { title: "BOLO: Unauthorized march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Disruptive riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Growing barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Unruly citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "Code 2: Violent mob harassing citizens at [RAND_LOC].", priority: "low" },
    { title: "Sector Alert: Massive group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Incident: Aggressive anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "10-15: Small protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "BOLO: Rowdy anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "Alert: Unruly barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "10-22: Unauthorized barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "10-22: Massive barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Code 2: Hostile group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Incident: Disruptive barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Alert: Organized riot breaking out on street [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Disruptive group distributing banned literature at [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Code 2: Hostile protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Code 2: Unsanctioned citizens blocking traffic at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Dispatch: Minor gathering forming at sector [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Sector Alert: Violent anti-civil demonstration near [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Disruptive march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Minor group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "10-22: Small mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Unruly mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Massive citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Hostile unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "BOLO: Growing unlicensed public speech occurring at sector [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Rowdy anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "Alert: Organized unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Unruly protest located on block [RAND_LOC].", priority: "medium" },
    { title: "Incident: Small anti-civil demonstration near [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Code 3: Violent crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Code 2: Rowdy barricades being erected at block [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Warning: Rowdy mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "10-22: Minor civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Growing anti-civil demonstration near [RAND_LOC].", priority: "low" },
    { title: "Incident: Unruly unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "10-22: Unruly group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Massive group distributing banned literature at [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "10-15: Unruly barricades being erected at block [RAND_LOC].", priority: "medium" },
    { title: "Warning: Rowdy barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Incident: Unauthorized group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Unauthorized protest located on block [RAND_LOC].", priority: "high" },
    { title: "Incident: Disruptive unlicensed public speech occurring at sector [RAND_LOC].", priority: "high" },
    { title: "10-15: Minor march proceeding down sector [RAND_LOC].", priority: "low" },
    { title: "Incident: Small protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Minor civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Unauthorized group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Aggressive unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "Alert: Rowdy barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Disruptive anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Warning: Unsanctioned group distributing banned literature at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Code 3: Unruly anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Warning: Aggressive protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "10-22: Disruptive unlawful assembly detected at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Warning: Organized anti-civil demonstration near [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Small protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Aggressive unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Organized protest located on block [RAND_LOC].", priority: "medium" },
    { title: "10-22: Rowdy group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Hostile crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Aggressive protest located on block [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Growing civil disobedience reported at block [RAND_LOC].", priority: "low" },
    { title: "Warning: Violent civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Large civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "BOLO: Minor march proceeding down sector [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Large unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "Alert: Hostile march proceeding down sector [RAND_LOC].", priority: "high" },
    { title: "10-22: Unsanctioned protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Code 3: Small group distributing banned literature at [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-22: Unruly march proceeding down sector [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Large gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "Alert: Massive citizens blocking traffic at block [RAND_LOC].", priority: "low" },
    { title: "BOLO: Aggressive protesters defacing corporate property at [RAND_LOC].", priority: "high" },
    { title: "Incident: Violent citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "10-22: Unauthorized citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "Code 3: Unauthorized protesters defacing corporate property at [RAND_LOC].", priority: "medium" },
    { title: "Incident: Disruptive barricades being erected at block [RAND_LOC].", priority: "low" },
    { title: "Warning: Rowdy riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Warning: Large unlawful assembly detected at [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Warning: Disruptive protest located on block [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "10-22: Disruptive crowd chanting anti-corp slogans at [RAND_LOC].", priority: "medium" },
    { title: "10-22: Unsanctioned group distributing banned literature at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Code 2: Unauthorized protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "10-22: Organized gathering forming at sector [RAND_LOC].", priority: "high" },
    { title: "Code 3: Large gathering forming at sector [RAND_LOC].", priority: "medium" },
    { title: "10-15: Unauthorized unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "Alert: Organized anti-government strike identified at [RAND_LOC].", priority: "low" },
    { title: "10-22: Disruptive protesters defacing corporate property at [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Warning: Massive mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "BOLO: Violent mob harassing citizens at [RAND_LOC].", priority: "low" },
    { title: "Code 2: Hostile crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "10-15: Minor citizens blocking traffic at block [RAND_LOC].", priority: "high" },
    { title: "Code 3: Minor riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Hostile crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Alert: Minor mob harassing citizens at [RAND_LOC].", priority: "high" },
    { title: "10-15: Minor anti-government strike identified at [RAND_LOC].", priority: "high" },
    { title: "Warning: Disruptive riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Sector Alert: Unsanctioned crowd chanting anti-corp slogans at [RAND_LOC].", priority: "low" },
    { title: "10-15: Unsanctioned unlicensed public speech occurring at sector [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Hostile crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Incident: Disruptive crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high" },
    { title: "Dispatch: Growing mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "10-22: Disruptive group distributing banned literature at [RAND_LOC].", priority: "low" },
    { title: "Code 2: Rowdy group distributing banned literature at [RAND_LOC].", priority: "medium", group: "Anti-Corp Extremists" },
    { title: "Code 3: Violent crowd chanting anti-corp slogans at [RAND_LOC].", priority: "high", group: "Anti-Corp Extremists" },
    { title: "Incident: Small group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Unsanctioned civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "10-15: Unauthorized unlawful assembly detected at [RAND_LOC].", priority: "high" },
    { title: "10-15: Minor riot breaking out on street [RAND_LOC].", priority: "high" },
    { title: "Incident: Small group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "Code 3: Unsanctioned riot breaking out on street [RAND_LOC].", priority: "low", group: "Anti-Corp Extremists" },
    { title: "Incident: Unauthorized anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Unsanctioned civil disobedience reported at block [RAND_LOC].", priority: "medium" },
    { title: "Code 2: Unruly barricades being erected at block [RAND_LOC].", priority: "high" },
    { title: "10-15: Hostile civil disobedience reported at block [RAND_LOC].", priority: "low" },
    { title: "Code 2: Organized group distributing banned literature at [RAND_LOC].", priority: "high" },
    { title: "10-15: Unsanctioned protesters defacing corporate property at [RAND_LOC].", priority: "low" },
    { title: "Code 3: Rowdy march proceeding down sector [RAND_LOC].", priority: "medium" },
    { title: "BOLO: Unauthorized mob harassing citizens at [RAND_LOC].", priority: "medium" },
    { title: "Code 3: Violent riot breaking out on street [RAND_LOC].", priority: "low" },
    { title: "Dispatch: Rowdy gathering forming at sector [RAND_LOC].", priority: "low" },
    { title: "Alert: Hostile protest located on block [RAND_LOC].", priority: "low" },
    { title: "Code 3: Unruly civil disobedience reported at block [RAND_LOC].", priority: "high" },
    { title: "BOLO: Disruptive group distributing banned literature at [RAND_LOC].", priority: "medium" },
    { title: "Dispatch: Small unlawful assembly detected at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Aggressive anti-government strike identified at [RAND_LOC].", priority: "medium" },
    { title: "10-15: Organized citizens blocking traffic at block [RAND_LOC].", priority: "medium" },
    { title: "Alert: Unsanctioned gathering forming at sector [RAND_LOC].", priority: "high" }
];

// Initialize Clock
function updateClock() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" });
}
setInterval(updateClock, 1000);
updateClock();

// Helpers
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function scrollToBottom(container) {
    container.scrollTop = container.scrollHeight;
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
async function simulateChat() {
    console.log('SIMULATE CHAT RUNNING');
    if (restModeToggle.checked) return;
    if (!autoEventsCheckbox.checked) return;
    if (isFetchingChat) return;

    const activeCallsigns = getActiveCallsigns();
    if (activeCallsigns.length < 2) return;

    let sender = getRandomItem(activeCallsigns);
    
    if (Math.random() < 0.01) {
        addChatMessage(sender, "Good boy.", 'joking');
        return;
    }
    if (Math.random() < 0.05 && !lethalAuthActive) {
        triggerLethalAuthEvent();
        return;
    }

    if (Math.random() < 0.04) {
        addChatMessage(sender, "Suspect is non-compliant! OPEN FIRE!", 'worried', false);
        setTimeout(() => {
            addChatMessage(sender, "SHOTS FIRED! SHOTS FIRED! I'M BEING FUCKING SHOT AT!", 'worried', false);
            pinRadioLog(sender, "10-71 SHOTS FIRED / OFFICER UNDER FIRE");
            
            // Optionally trigger a panic overlay
            if (typeof triggerPanic !== 'undefined') {
                // Not triggering global panic, just UI flair
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
                            implants: randCit.trait
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
        const isGibberish = /^[a-zA-Z]{0,4}$/i.test(text.replace(/[^a-zA-Z]/g, '')) && text.length > 8 || /(alien|ghost|pizza|asdf|qwerty)/i.test(text);
        if(isGibberish) {
            setTimeout(() => {
                typingDiv.querySelector('.text').innerHTML = `Dispatch, are you having a stroke? Repeat last transmission, you're making zero sense.`;
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
        
        // === MASSIVE NPC PERSONALITY ENGINE v2 ===
        const responses = {
            status: {
                Aggressive: [
                    "I'm good, dispatch. Real good. Just itching for some action out here.",
                    "Still breathing. Which is more than I can say for the last guy who tested me.",
                    "Yeah I'm fine. Why, you worried about me? That's sweet.",
                    "Status is green. Bored as hell though. Send me something to do.",
                    "I'm operational. Fully loaded. Ready to go."
                ],
                Lazy: [
                    "Ugh... yeah I'm here. Barely. This shift is killing me.",
                    "Still alive, unfortunately. How much longer til I clock out?",
                    "I'm fine I guess. Just sitting here. Watching traffic. Exciting stuff.",
                    "*yawns* Yeah dispatch, I'm... I'm here. What do you need?",
                    "Surviving. Barely. Could use a coffee though. Or twelve."
                ],
                Rookie: [
                    "I-I'm doing okay! Just a little jumpy, that's all. First week jitters, you know?",
                    "All good here, dispatch! Keeping my eyes peeled and my weapon holstered!",
                    "Yes sir! I'm doing great! Well... mostly great. This neighborhood is kinda scary.",
                    "Holding steady! Though uh, is that shadow over there supposed to be moving?",
                    "10-4 dispatch, I'm fine! Thank you for checking in, that means a lot actually."
                ],
                Paranoid: [
                    "Why are you asking?! Did something happen? Did someone report me?!",
                    "I'm... I'm okay. I think. There's been a van circling my block for the last hour though.",
                    "Status is... uncertain. I keep hearing noises. Could be nothing. Could be everything.",
                    "Define okay. Because physically? Sure. Mentally? This city is getting to me.",
                    "I'm watching everything, dispatch. EVERYTHING. Nobody's getting the drop on me."
                ],
                Sarcastic: [
                    "Oh you know, living the absolute dream out here in paradise.",
                    "I'm fantastic. Nothing says great day like patrolling a warzone for minimum wage.",
                    "Status: questioning every life choice that led me to this exact moment.",
                    "Peachy keen, dispatch. Just absolutely thrilled to be here. Again.",
                    "Let me check... yep, still stuck in this hellhole. So about the same as yesterday."
                ],
                Veteran: [
                    "10-4. All clear on my end. Twenty years on the job, same old story.",
                    "I'm good, dispatch. Seen worse. Much worse. This is a quiet night.",
                    "Holding position. Nothing I can't handle.",
                    "Status green. Keeping the peace, such as it is.",
                    "Copy that. Still here, still standing. That's all you can ask for."
                ],
                'By-The-Book': [
                    "10-4 dispatch, officer status is code green per protocol 3-Alpha.",
                    "Current status: fully operational. All equipment accounted for.",
                    "Affirmative dispatch. Operating within normal parameters.",
                    "Status report: weapon secured, vehicle operational, patrol grid on schedule.",
                    "10-2, dispatch. Signal is clear. No issues at this time."
                ],
                Idealistic: [
                    "I'm alright! Just had a nice conversation with a shop owner. Community policing!",
                    "Doing well! I helped a lost kid find their parents earlier. Good day so far.",
                    "All good here. Days like this remind me why I joined the force.",
                    "Status is great! The neighborhood seems calm. Maybe we're making a difference.",
                    "I'm good, dispatch. Trying to be a positive presence today."
                ]
            },
            thanks: {
                Aggressive: [
                    "Don't thank me. Just keep the targets coming.",
                    "Save it. I don't do this for the praise.",
                    "Yeah yeah. You can thank me by getting me a transfer to the action district.",
                    "Whatever. Just make sure my overtime gets approved this time."
                ],
                Lazy: [
                    "Cool. Does that come with a raise? No? Then I don't care.",
                    "Thanks? I'll take an extra break instead, if you don't mind.",
                    "Appreciate it. Now can I go back to doing absolutely nothing?",
                    "Sure thing. Now where was I... oh right. Napping."
                ],
                Rookie: [
                    "Oh wow, thank you dispatch! That really means a lot to me!",
                    "Thank you sir! I'm trying so hard to do well! This made my day!",
                    "R-really? You mean it? I was worried I messed up earlier. Thanks!",
                    "Gee thanks! I'm gonna tell my mom you said that! She worries about me."
                ],
                Sarcastic: [
                    "Wow, verbal appreciation. I'll add it to my collection of things that don't pay rent.",
                    "Thanks? In this economy? I'd prefer hazard pay.",
                    "Oh stop, you're making me blush. Not really. But thanks I guess.",
                    "Dispatch being nice? Mark the calendar, folks. Historic moment."
                ],
                Veteran: [
                    "Copy. Just another day on the job.",
                    "Appreciate it, dispatch. We all do our part.",
                    "Roger that. Let's keep the momentum going."
                ],
                Paranoid: [
                    "Wait... why are you being nice? What do you want? What's going on?",
                    "Thanks? That's... suspicious. Nobody thanks us unless something bad is coming."
                ]
            },
            location: {
                Aggressive: [
                    "I'm at Sector %SECTOR%, block %LOC%. If anyone wants to find me, they can try.",
                    "Sector %SECTOR%. Why? Got something that needs hitting?",
                    "Posted up at %LOC% in Sector %SECTOR%. Daring someone to start something."
                ],
                Lazy: [
                    "Uhhh... I'm around Sector %SECTOR% somewhere. Behind a building. The big one.",
                    "Hold on let me check... yeah Sector %SECTOR%, block %LOC%. Parked. Resting my eyes.",
                    "Sector %SECTOR%. Don't ask me to move. I just got comfortable."
                ],
                Rookie: [
                    "I'm at Sector %SECTOR%, block %LOC%, dispatch! Right where I'm supposed to be!",
                    "Currently at Sector %SECTOR%! I double-checked my map and everything!",
                    "Block %LOC%, Sector %SECTOR%! Am I in the right place? I hope so."
                ],
                Paranoid: [
                    "You want my EXACT location? On an open channel?! Nice try. Sector %SECTOR% area.",
                    "I'm not broadcasting that! Anyone could be listening! Sector %SECTOR%, that's all.",
                    "Negative on exact coords, dispatch. They could be intercepting our comms."
                ],
                Veteran: [
                    "Sector %SECTOR%, block %LOC%. Holding position.",
                    "10-20 is Sector %SECTOR%, grid reference %LOC%. All quiet.",
                    "Patrolling block %LOC%, Sector %SECTOR%. Nothing out of the ordinary."
                ],
                'By-The-Book': [
                    "Current 10-20: Sector %SECTOR%, block %LOC%. Per GPS log.",
                    "Reporting position: Sector %SECTOR%, grid %LOC%. On scheduled patrol route."
                ],
                Sarcastic: [
                    "I'm right where you told me to be. Sector %SECTOR%. Shocking, I know.",
                    "GPS says Sector %SECTOR%, block %LOC%. Technology. Amazing stuff."
                ]
            },
            combat: {
                Aggressive: [
                    "FINALLY! Weapons hot! Point me at em, dispatch!",
                    "Oh hell yes. Green light to engage? This is what I live for!",
                    "Copy that! Locked and loaded! Let's GO!",
                    "You don't gotta tell me twice! Moving to engage NOW!"
                ],
                Lazy: [
                    "Ugh, really? Can't someone else handle it? Fine. FINE. Moving.",
                    "Do I HAVE to? Alright... deploying. Slowly.",
                    "*heavy sigh* Copy. I'll deal with it. Eventually."
                ],
                Rookie: [
                    "W-weapons free?! Oh god. Okay. Okay I can do this. Remember the training.",
                    "Copy dispatch! I'm... I'm moving in! My hands are shaking but I'm GOING!",
                    "Oh man oh man. Okay. Safety off. This is really happening."
                ],
                Idealistic: [
                    "Dispatch, can we try talking to them first? There might be a peaceful solution.",
                    "Acknowledged but I want to try de-escalation first. Lethal force is the LAST resort.",
                    "Copy, but let me attempt verbal contact before we go weapons hot. Please."
                ],
                'By-The-Book': [
                    "Affirmative. Engaging per ROE section 4. Use of force is justified.",
                    "Copy. Confirming authorization to use lethal force. Body cam recording.",
                    "10-4. Deploying in accordance with MCPD standard engagement protocol."
                ],
                Veteran: [
                    "Copy that. Moving to engage. Done this a thousand times.",
                    "Roger. Weapons free. Watch the crossfire, people.",
                    "Understood. Going in. Cover the exits."
                ],
                Sarcastic: [
                    "Oh great, violence. My favorite part of the shift. Moving in.",
                    "Sure, why not. Another day, another gunfight. On my way."
                ],
                Paranoid: [
                    "Engaging! But this feels like a trap! It always feels like a trap!",
                    "Moving in! But I swear if this is an ambush, I called it!"
                ]
            },
            greeting: {
                Aggressive: [
                    "What do you want? Make it quick.",
                    "This better be important, dispatch.",
                    "Yeah? I'm listening. Barely."
                ],
                Lazy: [
                    "Hmm? Oh. Hey dispatch. What's up?",
                    "Oh hey. I was almost asleep. What is it?",
                    "Yo. What do you need? Keep it short, I'm busy doing nothing."
                ],
                Rookie: [
                    "Hi dispatch! Good to hear from you! What can I do?",
                    "Oh! Hello! I wasn't expecting to hear from you directly!",
                    "Hey dispatch! Everything okay? Do you need something?"
                ],
                Sarcastic: [
                    "Oh wonderful, dispatch wants to chat. My favorite thing.",
                    "Hey there. Miss me already?",
                    "Well hello. To what do I owe this tremendous honor?"
                ],
                Veteran: [
                    "Go ahead, dispatch.",
                    "This is %UNIT%, you're coming in clear. What do you need?",
                    "Receiving you loud and clear. Go ahead."
                ],
                Paranoid: [
                    "Who is this?! Is this actually dispatch? What's the verification code?!",
                    "H-hello? Why are you contacting me directly? Is something wrong?!"
                ],
                'By-The-Book': [
                    "This is %UNIT%, receiving. State your traffic, dispatch.",
                    "Go ahead dispatch. Channel is clear."
                ],
                Idealistic: [
                    "Hey dispatch! How's it going up there? Keeping busy?",
                    "Hi there! Always happy to chat. What do you need?"
                ]
            },
            insult: {
                Aggressive: [
                    "SAY THAT AGAIN. I DARE YOU. I'll come up there myself!",
                    "Oh you think you're tough behind that desk?! Come say that to my face!",
                    "One more word dispatch. ONE. MORE. WORD."
                ],
                Lazy: [
                    "Cool. I'll add that to the list of things I don't care about.",
                    "Mm. Sure. Whatever you say, boss.",
                    "That's nice. Anyway, I'm going back to sleep."
                ],
                Rookie: [
                    "I-I'm sorry! What did I do wrong? I'll do better, I promise!",
                    "Oh no... did I mess up again? I'm really trying my best here...",
                    "Please don't fire me dispatch, I need this job!"
                ],
                Sarcastic: [
                    "Wow, solid leadership skills there. They teach you that at dispatch academy?",
                    "Ouch. My feelings. All zero of them. Devastated.",
                    "Keep it coming, I'm writing these down for my complaint to HR."
                ],
                Veteran: [
                    "...You done? Can we get back to work now?",
                    "I've been called worse by better people. Maintain channel discipline.",
                    "Copy. Filing that under things I'll forget in five seconds."
                ],
                'By-The-Book': [
                    "That language violates MCPD comms protocol 12-B. Noted and logged.",
                    "Unprofessional conduct on a recorded line. This will be in my report."
                ],
                Paranoid: [
                    "Why are you hostile?! Are you compromised? Has someone gotten to dispatch?!",
                    "This feels personal. What have I done? WHAT DO YOU KNOW?!"
                ],
                Idealistic: [
                    "Hey, there's no need for that. We're all in this together.",
                    "That hurt, dispatch. I thought we were a team."
                ]
            },
            help: {
                Aggressive: [
                    "Help? I don't need help. Send help to whoever I'm about to find.",
                    "Backup? For what? I AM the backup.",
                    "I got this handled. Save the cavalry for someone who needs it."
                ],
                Lazy: [
                    "Oh god please send help. Not for a crime, just from this shift. Save me.",
                    "Help with what? If it involves moving, the answer is no.",
                    "Sure, send whoever. They can take over my patrol while they're at it."
                ],
                Rookie: [
                    "Y-yes please! I could use some backup! I don't want to mess this up!",
                    "Backup would be great! I can handle it alone but... please send someone?",
                    "Help is always appreciated! The manual says no shame in requesting assistance!"
                ],
                Veteran: [
                    "If you've got units to spare, send them. Otherwise I'll manage.",
                    "I'll take backup if available, but I won't hold my breath.",
                    "Wouldn't mind an extra set of eyes. Your call, dispatch."
                ],
                Sarcastic: [
                    "Help? Like, emotional help? Because yeah, I could use some therapy.",
                    "Sure, send the whole precinct. Maybe someone will actually be useful."
                ],
                Paranoid: [
                    "YES. Send everyone. ALL of them. I don't like how quiet it is out here.",
                    "Backup would be... yeah. Yeah send backup. I've got a bad feeling."
                ]
            },
            weather: {
                Aggressive: ["I don't care about the weather, dispatch. I care about CRIMINALS.",
                    "Raining, snowing, who gives a damn. I'm still out here."],
                Lazy: ["It's miserable out here. Another reason I should be inside. In bed.",
                    "Can I go home if it's raining? No? Worth a shot."],
                Rookie: ["It's pretty cold out here! But I'm not complaining! Well... maybe a little.",
                    "The weather's actually nice! Or at least, I'm trying to stay positive!"],
                Sarcastic: ["Oh the weather? Let me check... yep, still apocalyptic. Lovely as always.",
                    "Beautiful day in the wasteland. Five stars. Would patrol again. Not."],
                Veteran: ["Weather's weather. You learn to ignore it after a few decades.",
                    "I've worked through worse. Much worse. This is nothing."],
                Paranoid: ["The weather feels wrong today. Unusually calm. That worries me.",
                    "Is this weather natural? Something feels off about the atmosphere today."]
            },
            food: {
                Aggressive: ["I don't eat on duty. I consume JUSTICE. ...And sometimes a burrito.",
                    "The vending machine in sector 4 stole my money again. I shot it."],
                Lazy: ["Oh man don't talk about food. I'm starving. Anyone got a pizza number?",
                    "I've been thinking about that taco place on 5th for three hours straight."],
                Rookie: ["I brought a sandwich from home! My mom made it! ...Don't judge me.",
                    "Is there a good place to eat around here? I'm new to this district."],
                Sarcastic: ["Food? You mean the mystery meat from the precinct vending machine? Delicious.",
                    "I had a granola bar six hours ago. Living my best life out here."],
                Veteran: ["Haven't eaten in eight hours. Comes with the territory.",
                    "I'll grab something when the shift's over. Work first."],
                Paranoid: ["I only eat sealed packaged food. Can't trust anything else out here.",
                    "Who's asking about food? Is someone trying to drug our meals again?!"]
            },
            tired: {
                Aggressive: ["Tired? I don't get tired. I get ANGRY. Then I get MORE ANGRY.",
                    "Sleep is for the weak. And the off-duty. Which I apparently never am."],
                Lazy: ["You have NO idea how tired I am. Basically sleepwalking right now.",
                    "Exhausted. Dead on my feet. Can barely keep my eyes open. The usual."],
                Rookie: ["I'm a little tired but it's okay! The adrenaline keeps me going! Mostly!",
                    "I've been running on energy drinks for 14 hours. Is that bad?"],
                Sarcastic: ["Me? Tired? After a mere 16-hour shift? What gave it away?",
                    "I transcended tired four hours ago. New dimension of exhaustion."],
                Veteran: ["Been pulling doubles for a week. But that's the job. Push through.",
                    "Could use some rack time, but I'll survive. Done longer stretches."],
                Paranoid: ["I can't sleep anyway. Not with everything going on. Too dangerous to rest.",
                    "Tired? YES. But closing my eyes in this city? Not happening."]
            },
            report: {
                Aggressive: ["Nothing to report except my overwhelming desire to punch something.",
                    "All quiet. Disappointingly quiet. Suspiciously quiet."],
                Lazy: ["Report? Uh... nothing happened. Because I didn't go anywhere. So yeah.",
                    "All quiet. Blissfully, beautifully, boringly quiet."],
                Rookie: ["Nothing major to report, sir! I did see a suspicious cat though!",
                    "All clear! I've been keeping detailed notes just in case!"],
                Veteran: ["Negative on activity. Sector's been quiet. Maybe too quiet.",
                    "No incidents in my AO. Continuing standard patrol operations."],
                Sarcastic: ["Oh let me check my extensive incident report... nope. Still nothing.",
                    "Breaking news: absolutely nothing happened. Film at eleven."],
                Paranoid: ["Officially? Nothing to report. Unofficially? I've seen THINGS out here.",
                    "Nothing confirmed but I've logged 47 suspicious observations in my notebook."]
            }
        };

        function pickResponse(category, personality) {
            const cat = responses[category];
            if (!cat) return null;
            const lines = cat[personality] || cat['Veteran'] || cat['Aggressive'];
            if (!lines || lines.length === 0) return null;
            let line = lines[Math.floor(Math.random() * lines.length)];
            if (senderUnit) {
                line = line.replace(/%SECTOR%/g, senderUnit.sector || 'Unknown');
                line = line.replace(/%UNIT%/g, reactionSender);
            }
            line = line.replace(/%LOC%/g, String(Math.floor(Math.random() * 900) + 100));
            return line;
        }

        if (lowerText.includes("are you ok") || lowerText.includes("you okay") || lowerText.includes("status") || lowerText.includes("how are you") || lowerText.includes("you alright") || lowerText.includes("you good") || lowerText.includes("doing ok") || lowerText.includes("check in")) {
            reply = pickResponse('status', p);
        }
        else if (lowerText.includes("good job") || lowerText.includes("thanks") || lowerText.includes("thank you") || lowerText.includes("well done") || lowerText.includes("nice work") || lowerText.includes("great work") || lowerText.includes("appreciate")) {
            reply = pickResponse('thanks', p);
        }
        else if (lowerText.includes("where are you") || lowerText.includes("location") || lowerText.includes("position") || lowerText.includes("10-20") || lowerText.includes("what sector")) {
            reply = pickResponse('location', p);
        }
        else if (lowerText.includes("shoot") || lowerText.includes("kill") || lowerText.includes("fire") || lowerText.includes("engage") || lowerText.includes("weapons free") || lowerText.includes("take them out") || lowerText.includes("neutralize")) {
            reply = pickResponse('combat', p);
        }
        else if (lowerText.includes("hello") || lowerText.includes("anyone there") || lowerText.includes("hey") || lowerText.match(/^hi$/) || lowerText.includes("good morning") || lowerText.includes("good evening") || lowerText.includes("what's up") || lowerText.includes("howdy")) {
            reply = pickResponse('greeting', p);
        }
        else if (lowerText.includes("idiot") || lowerText.includes("stupid") || lowerText.includes("wtf") || lowerText.includes("dumb") || lowerText.includes("useless") || lowerText.includes("shut up") || lowerText.includes("fuck") || lowerText.includes("damn")) {
            reply = pickResponse('insult', p);
        }
        else if (lowerText.includes("help") || lowerText.includes("backup") || lowerText.includes("assist") || lowerText.includes("support") || lowerText.includes("send units")) {
            reply = pickResponse('help', p);
        }
        else if (lowerText.includes("weather") || lowerText.includes("rain") || lowerText.includes("cold") || lowerText.includes("hot outside")) {
            reply = pickResponse('weather', p);
        }
        else if (lowerText.includes("food") || lowerText.includes("eat") || lowerText.includes("hungry") || lowerText.includes("lunch") || lowerText.includes("dinner") || lowerText.includes("coffee") || lowerText.includes("pizza") || lowerText.includes("taco")) {
            reply = pickResponse('food', p);
        }
        else if (lowerText.includes("tired") || lowerText.includes("sleep") || lowerText.includes("exhausted") || lowerText.includes("rest") || lowerText.includes("break")) {
            reply = pickResponse('tired', p);
        }
        else if (lowerText.includes("report") || lowerText.includes("anything") || lowerText.includes("what's happening") || lowerText.includes("sitrep") || lowerText.includes("update")) {
            reply = pickResponse('report', p);
        }
        else {
            const defaults = {
                Aggressive: [
                    "Yeah, I heard you. Is there a point to this?",
                    "Copy. Whatever. Just point me at the bad guys.",
                    "Got it dispatch. Anything else or can I get back to work?",
                    "10-4. You done? Good.",
                    "Message received. If you need someone punched, let me know."
                ],
                Lazy: [
                    "Mhm. Sure. Noted. ...Were you saying something?",
                    "Copy dispatch... *yawns* ...sorry, what was the second part?",
                    "Uh huh. Okay. I'll get right on that. Probably. Maybe.",
                    "10-4 I think? Honestly I zoned out for a sec there.",
                    "Roger. Filing that under things to deal with later. Much later."
                ],
                Rookie: [
                    "Copy dispatch! I'm on it! ...What exactly am I on, again?",
                    "10-4! Yes sir! I will figure out what you meant! Give me a second!",
                    "Understood! I think! Let me write that down so I don't forget!",
                    "Got it! Or... wait, did I get it? Can you repeat the important parts?",
                    "Message received dispatch! I'll do my absolute best!"
                ],
                Paranoid: [
                    "Copy... but that sounded like a coded message. Is someone else listening?",
                    "Received. But why did you phrase it like that? That was weird.",
                    "10-4... I think. Unless that was a test. Was that a test?!",
                    "Okay dispatch. Noting the time and content of this transmission. Just in case.",
                    "Message received. I don't like it. But received."
                ],
                Sarcastic: [
                    "Wow, truly riveting communication. Shakespeare would be proud.",
                    "Cool story. Tell it again at the Christmas party.",
                    "Noted. I'll treasure this transmission forever. Not really.",
                    "10-4. Adding that to my memoir. Chapter: Things That Don't Matter.",
                    "Fascinating. Groundbreaking. I'm deeply moved. Can I go now?"
                ],
                Veteran: [
                    "Copy that, dispatch. Noted.",
                    "Roger. I'll keep that in mind.",
                    "10-4. Understood. Continuing patrol.",
                    "Received and acknowledged.",
                    "Copy. Proceeding as normal."
                ],
                'By-The-Book': [
                    "Affirmative dispatch. Message logged per standard operating procedure.",
                    "Copy. Will comply with any directives per MCPD protocol.",
                    "10-4. Noted for the record. Continuing assigned duties.",
                    "Acknowledged. Awaiting further instructions per chain of command."
                ],
                Idealistic: [
                    "Copy that! If there's anything I can do to help the community, let me know!",
                    "Received, dispatch. Just trying to make a difference out here.",
                    "10-4. Keeping the peace and keeping positive!",
                    "Understood! Every little bit counts, right?"
                ]
            };
            const pLines = defaults[p] || defaults['Veteran'];
            reply = pLines[Math.floor(Math.random() * pLines.length)];
        }

        // Show the main reply after a human-like delay
        const replyDelay = 1200 + Math.random() * 2000;
        setTimeout(() => {
            typingDiv.querySelector('.text').innerHTML = reply;
            typingDiv.querySelector('.text').style.fontStyle = 'normal';
            typingDiv.querySelector('.text').style.color = 'inherit';
        }, replyDelay);

        // === OFFICER CROSS-TALK: A second officer reacts ===
        if (Math.random() < 0.55) {
            const allCallsigns = getActiveCallsigns().filter(cs => cs !== reactionSender);
            if (allCallsigns.length > 0) {
                const reactor = getRandomItem(allCallsigns);
                const reactorUnit = roster.find(u => u.id === reactor);
                const rp = reactorUnit ? reactorUnit.personality : 'Veteran';

                const crosstalk = {
                    status: {
                        Aggressive: ["Same here dispatch. Still alive. Still dangerous.", "I'm code green too. Wish I wasn't. Boring as hell."],
                        Lazy: ["Oh we're doing status checks? *sigh* Yeah I'm here too I guess.", "Ditto. Alive. Barely functioning. The usual."],
                        Rookie: ["Me too dispatch! I'm okay too! Just wanted you to know!", "Oh! Should I report in too? I'm doing great over here!"],
                        Sarcastic: ["Nobody asked about MY status but sure, I'm fine too. Thanks for caring.", "I'm also alive, in case anyone was wondering. Which they weren't."],
                        Veteran: ["All units, keep your status reports brief. Channel needs to stay clear.", "Copy that. Keep your sector locked down."],
                        Paranoid: ["Wait, why is dispatch checking on everyone? What do they know that we don't?!", "If dispatch is asking how we are, something BAD is about to happen."]
                    },
                    thanks: {
                        Aggressive: ["What about ME?! I did the heavy lifting!", "Hey dispatch, I exist too you know."],
                        Sarcastic: ["Oh cool, they get the praise. Classic.", "Wow, teacher's pet much?"],
                        Rookie: ["That's so nice! You deserved it!", "Great job! We make a good team!"],
                        Veteran: ["Good work out there. Keep it up, all units.", "Solid work. We could use more dedication like that."]
                    },
                    combat: {
                        Aggressive: ["DID SOMEONE SAY WEAPONS FREE?! I'm on my way!", "Oh I want in on this! Hold up, wait for me!"],
                        Rookie: ["Oh gosh, be careful out there! I'll cover your flank!", "Should I move in too? I-I can do it! I think!"],
                        Veteran: ["Watch your fire out there. And watch each other's backs.", "All units in the vicinity, be aware we have an active engagement."],
                        Lazy: ["Good luck with that. I'll uh... provide moral support. From here.", "Better you than me. Better you than me."],
                        'By-The-Book': ["Be advised, all engagements must be recorded per protocol 7-C.", "Reminder: discharge your weapon only within ROE parameters."]
                    },
                    insult: {
                        Aggressive: ["Hey dispatch, leave them alone! That's MY job to be mean!", "Dispatch is on one today, huh? Don't take it personal."],
                        Sarcastic: ["Ooh, dispatch is SPICY today. Get the popcorn.", "Drama on the radio! Love it. Better than TV."],
                        Rookie: ["Dispatch! That was mean! We're all on the same team!", "Hey, they're doing their best! Go easy!"],
                        Veteran: ["Enough. Both of you. Keep the channel professional.", "Cut the chatter. This is a tactical frequency, not a playground."],
                        Lazy: ["Heh. Glad that wasn't aimed at me for once.", "Whoa. Dispatch woke up and chose violence today."]
                    },
                    greeting: {
                        Sarcastic: ["Oh are we doing roll call? Present. Unfortunately.", "Dispatch is lonely tonight, huh? I feel that."],
                        Rookie: ["Hi dispatch! Oh wait, they weren't talking to me. Sorry!", "Hello! ...Oh. Nevermind!"],
                        Lazy: ["Ugh, now everyone's gonna start chatting. There goes my quiet night.", "Oh great, the radio's about to blow up with small talk."],
                        Veteran: ["Keep non-essential comms to a minimum. Dispatch, state your purpose.", "Channel's getting busy. Keep it brief, people."]
                    }
                };

                let reactCategory = 'greeting';
                if (lowerText.includes("are you ok") || lowerText.includes("status") || lowerText.includes("how are you") || lowerText.includes("you okay") || lowerText.includes("you good")) reactCategory = 'status';
                else if (lowerText.includes("thanks") || lowerText.includes("good job") || lowerText.includes("well done")) reactCategory = 'thanks';
                else if (lowerText.includes("shoot") || lowerText.includes("kill") || lowerText.includes("fire") || lowerText.includes("engage")) reactCategory = 'combat';
                else if (lowerText.includes("idiot") || lowerText.includes("stupid") || lowerText.includes("wtf") || lowerText.includes("shut up") || lowerText.includes("fuck")) reactCategory = 'insult';
                else if (lowerText.includes("hello") || lowerText.includes("hey") || lowerText.includes("hi") || lowerText.includes("good morning")) reactCategory = 'greeting';

                const reactCat = crosstalk[reactCategory] || {};
                const reactLines = reactCat[rp] || reactCat['Veteran'] || ["10-4, copy.", "Roger that."];
                let reactReply = reactLines[Math.floor(Math.random() * reactLines.length)];

                setTimeout(() => {
                    addChatMessage(reactor, reactReply, 'serious', false);
                }, replyDelay + 1500 + Math.random() * 2000);
            }
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

function simulateEvent(specificCrime = null) {
    if (restModeToggle.checked && !specificCrime) return;

    let crime = specificCrime;
    if (!crime) {
        if (!autoEventsCheckbox.checked) return;
        crime = { ...getRandomItem(crimeReports) };
        if (crime.title.includes('[RAND_LOC]')) {
            const randLoc = Math.floor(Math.random() * 90000) + 10000;
            crime.title = crime.title.replace('[RAND_LOC]', randLoc);
        }
    }

    const div = document.createElement('div');
    const prioClass = crime.priority === 'high' ? 'high-priority' : (crime.priority === 'medium' ? 'medium-priority' : '');
    const respondingUnits = [getRandomItem(getActiveCallsigns()), getRandomItem(getActiveCallsigns())];
    unitAssignments[respondingUnits[0]] = '10-6 (On Scene)';
    unitAssignments[respondingUnits[1]] = '10-6 (On Scene)';
    if(typeof renderUnitStatus !== 'undefined' && (document.getElementById('tab-unit-status') && document.getElementById('tab-unit-status').classList.contains('active'))) renderUnitStatus();


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
        const isROEEnabled = roeToggleCheckbox.checked;

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
            `Got them. ${suspectStr} is in cuffs.`
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

        addChatMessage(reportingUnit, reportMsg, "serious");
        mockAddDocument(crime, respondingUnits, isROEEnabled);
        unitAssignments[respondingUnits[0]] = '10-8 (Available)';
        unitAssignments[respondingUnits[1]] = '10-8 (Available)';
        if(typeof renderUnitStatus !== 'undefined' && (document.getElementById('tab-unit-status') && document.getElementById('tab-unit-status').classList.contains('active'))) renderUnitStatus();


    }, 4000 + Math.random() * 6000);
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
// const response = await fetch('https://text.pollinations.ai/' + encodeURIComponent(prompt));
        if (response.ok) {
            let aiText = await response.text();
            aiText = aiText.replace(/^["']|["']$/g, '').trim();

            const fullReport = `INCIDENT TYPE: ${crime.title}
TIME FILED: ${dateStr}
RESPONDING OFFICERS: ${officersStr}
TOTAL UNITS DEPLOYED: ${respondingUnits.length}
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
        const fallbackText = isROEEnabled ? "Suspect apprehended non-lethally." : "Suspect neutralized via lethal force.";
        const fullReport = `INCIDENT TYPE: ${crime.title}\nTIME FILED: ${dateStr}\nRESPONDING OFFICERS: ${officersStr}\n-- NARRATIVE --\n${fallbackText}`;
        doc.innerHTML = `
            <span class="time">${getCurrentTimeStr()}</span>
            <div class="title" style="color:var(--accent-blue); display:flex; justify-content:space-between;">
                <span>📌 PINNED TRANSMISSION: ${crime.title.split(':')[0]}</span>
                <span style="font-size:0.8rem; color:var(--text-dim);">Units: ${officersStr}</span>
            </div>
            <div style="color: #fff; font-size: 0.95rem; font-style: italic; margin-top:5px; border-left: 2px solid rgba(255,255,255,0.2); padding-left: 8px;">
                "${fallbackText}"
            </div>
            <button class="doc-btn" style="margin-top: 10px; padding: 5px;" onclick="openReportModal(\`${fullReport}\`)">VIEW AUTOMATED REPORT EXTRACT</button>
        `;
    }
}

// Global function to open modal
window.openReportModal = function (reportHTML) {
    document.getElementById('modal-body').innerHTML = reportHTML;
    document.getElementById('report-modal').style.display = 'flex';
};

// --- Panic System ---

const panicAudioElement = new Audio('panic-button.mp3');
panicAudioElement.loop = true;

function playPanicSound() {
    panicAudioElement.currentTime = 0;
    panicAudioElement.play().catch(e => console.log("Audio block", e));
}

function stopPanicSound() {
    panicAudioElement.pause();
    panicAudioElement.currentTime = 0;
}

function triggerPanic(unitName = null) {
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

    // Add to unified log immediately with localized flashing class
    const div = document.createElement('div');
    div.className = `event-item high-priority panic-log-flash`;
    div.style.width = "100%";
    div.id = `panic-log-${unit}-${Date.now()}`; // Unique ID
    div.innerHTML = `
        <span class="time">${getCurrentTimeStr()}</span>
        <div class="title" style="color:var(--panic-orange); font-size:1.1rem; text-shadow:0 0 10px var(--panic-red);">🚨 10-99: OFFICER PANIC BUTTON 🚨</div>
        <div style="color: #fff; font-size: 0.9rem;">Unit ${unit} reported distress. Priority 1 response required.</div>
    `;
    unifiedLogEl.appendChild(div);
    scrollToBottom(unifiedLogEl);

    unifiedLogEl.classList.add('panic-container-glow');
    playPanicSound();
    clearPanicBtn.style.display = 'inline-block';

    // Set auto-resolve for panic sound (5 seconds)
    panicData.soundTimeout = setTimeout(() => {
        // Only stop the sound, don't auto-resolve the entire panic state
        stopPanicSound();
    }, 5000); // 5 seconds

    // Visual flashing remains forever until resolveSpecificPanic is called manually via Clear Panics button
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

manualPanicBtn.addEventListener('click', () => triggerPanic());
btnEvtRobbery.addEventListener('click', () => simulateEvent(crimeReports.find(c => c.title.includes("Robbery"))));
btnEvtSuspicious.addEventListener('click', () => simulateEvent(crimeReports.find(c => c.title.includes("Suspicious"))));
btnEvtTraffic.addEventListener('click', () => simulateEvent({ title: "10-50: Traffic Stop", priority: "medium" }));
btnEvtRandom.addEventListener('click', () => simulateEvent());
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
const tabCitizens = document.getElementById('tab-citizens');
const databaseLogEl = document.getElementById('database-log');
const wantedLogEl = document.getElementById('wanted-log');
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
const citizensListEl = document.getElementById('citizens-list');

function hideAllTabs() {
    tabUnified.classList.remove('active');
    tabUnified.style.color = 'var(--text-dim)';
    tabDocuments.classList.remove('active');
    tabDocuments.style.color = 'var(--text-dim)';
    tabDatabase.classList.remove('active');
    tabDatabase.style.color = 'var(--text-dim)';
    tabWanted.classList.remove('active');
    tabWanted.style.color = 'var(--text-dim)';
          if(tabRecruitment) { tabRecruitment.classList.remove('active'); tabRecruitment.style.color = 'var(--text-dim)';     if(document.getElementById('unit-status-log')) document.getElementById('unit-status-log').style.display = 'none';
    if(document.getElementById('tab-unit-status')) document.getElementById('tab-unit-status').classList.remove('active');

    if(typeof tabUnitStatus !== 'undefined' && tabUnitStatus) { tabUnitStatus.classList.remove('active'); tabUnitStatus.style.color = 'var(--text-dim)'; }
    if(typeof unitStatusLogEl !== 'undefined' && unitStatusLogEl) unitStatusLogEl.style.display = 'none';
}
    tabCitizens.classList.remove('active');
    tabCitizens.style.color = 'var(--text-dim)';
    
    unifiedLogEl.style.display = 'none';
    chatInputArea.style.display = 'none';
    documentLogEl.style.display = 'none';
    databaseLogEl.style.display = 'none';
    wantedLogEl.style.display = 'none';
          if(recruitmentLogEl) recruitmentLogEl.style.display = 'none';
    citizensLogEl.style.display = 'none';
    }

tabUnified.addEventListener('click', () => {
    hideAllTabs();
    tabUnified.classList.add('active');
    tabUnified.style.color = 'var(--text-main)';
    unifiedLogEl.style.display = 'flex';
    chatInputArea.style.display = 'flex';
});

tabDocuments.addEventListener('click', () => {
    hideAllTabs();
    tabDocuments.classList.add('active');
    tabDocuments.style.color = 'var(--text-main)';
    
        if(typeof tabUnitStatus !== 'undefined' && tabUnitStatus) { tabUnitStatus.classList.remove('active'); tabUnitStatus.style.color = 'var(--text-dim)'; }
        if(typeof unitStatusLogEl !== 'undefined' && unitStatusLogEl) unitStatusLogEl.style.display = 'none';
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
              personality: PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
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
      if (onDuty.length < 58) {
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
                  personality: PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
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
    const civPersonalities = ["Passive", "Passive", "Partially Aggressive", "Aggressive", "Panicked", "Panicked"];

    for (let i = 0; i < 1000; i++) {
        const first = getRandomItem(firstNames);
        const last = getRandomItem(lastNames);
        const randId = `CID-${Math.floor(Math.random() * 900000) + 100000}`;
        const hist = getRandomItem(histories);
        
        let initialStatus = 'Innocent';
        if (hist.includes("MULTIPLE WARRANTS") || hist.includes("KNOWN SYNDICATE")) {
            initialStatus = 'Wanted';
        } else if (hist.includes("Prior conviction")) {
            initialStatus = Math.random() > 0.5 ? 'Suspicious' : 'Innocent';
        }

        const cit = {
            id: randId,
            name: `${first} ${last}`,
            status: initialStatus,
            trait: getRandomItem(traits),
            history: hist,
            civPersonality: getRandomItem(civPersonalities),
            address: `Sector ${Math.floor(Math.random() * 20 + 1)}, Block ${Math.floor(Math.random() * 9 + 1)}`,
            dob: `20${Math.floor(Math.random() * 80) + 10}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
        };
        globalCitizens.push(cit);
        
        if (initialStatus === 'Wanted') {
            wantedTargets.push({
                name: cit.name,
                reason: hist,
                level: "HIGH",
                bounty: Math.floor(Math.random() * 50000) + 10000,
                address: cit.address,
                implants: cit.trait
            });
        }
    }
}

function renderCitizensList() {
    if(typeof updateDepartmentStats !== 'undefined') updateDepartmentStats();
    let htmlChunk = '';
    globalCitizens.forEach((cit, idx) => {
        let color = INNOCENT_COLOR;
        if (cit.status === 'Suspicious') color = SUSPICIOUS_COLOR;
        if (cit.status === 'Wanted') color = WANTED_COLOR;
        if (cit.status === 'Arrested' || cit.status === 'Deceased') color = ARRESTED_COLOR;
        if (cit.status === 'Escaped') color = ESCAPED_COLOR;

        htmlChunk += `
            <div class="roster-card" onclick="openCitizenDossier(${idx})" style="cursor:pointer; border-color: ${color};">
                <div class="roster-info">
                    <span class="roster-id">${cit.id}</span>
                    <span class="roster-status" style="color:${color};text-transform:uppercase;font-weight:bold;">${cit.status}</span>
                </div>
                <div style="font-size: 1.1rem; color: #fff; margin-top: 5px;">${cit.name}</div>
            </div>
        `;
    });
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

    citizenPageTitle.textContent = `DOSSIER: ${cit.id}`;
    citizenPageTitle.style.color = color;
    citizenPageTitle.style.textShadow = `0 0 5px ${color}`;

    citizenPageBody.innerHTML = `
        <div style="font-size: 1.5rem; color: #fff; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 10px;">
            ${cit.name}
        </div>
        <div><strong>DOB:</strong> ${cit.dob}</div>
        <div><strong>Standing:</strong> <span style="color:${color};text-transform:uppercase;font-weight:bold;">${cit.status}</span></div>
        <div style="margin-top: 15px;"><strong>Registered Address:</strong><br><span style="color:var(--text-dim);">${cit.address}</span></div>
        <div style="margin-top: 15px;"><strong>Psych Profile:</strong><br><span style="color:var(--accent-blue);">${cit.civPersonality}</span></div>
        <div style="margin-top: 15px;"><strong>Crime History:</strong><br><span style="color:var(--panic-orange);">${cit.history || "None"}</span></div>
        <div style="margin-top: 15px;"><strong>Notes:</strong><br>${cit.trait}</div>
        <div style="margin-top: 15px; color: var(--text-dim); font-size: 0.85rem; border-top: 1px dashed var(--border-color); padding-top: 10px;">
            WARNING: Falsifying citizen records is a Class A Felony. Authorized personnel only.
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
            implants: cit.trait
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
            if (cit.civPersonality === 'Passive') {
                if (isCorruptReckless && Math.random() < 0.2) {
                    reportMsg = `Suspect was totally reaching for something! I had no choice, target neutralized.`;
                    finalStatus = 'Deceased';
                } else {
                    reportMsg = `Target surrendered without a fight. Got them in cuffs. Code 4.`;
                    finalStatus = 'Arrested';
                }
            } 
            else if (cit.civPersonality === 'Panicked') {
                if (isCorruptReckless && Math.random() < 0.3) {
                    reportMsg = `Suspect tried to run, I dropped them in the alleyway. Target is deceased.`;
                    finalStatus = 'Deceased';
                } else if (Math.random() < 0.5) {
                    reportMsg = `Suspect booked it! I lost them in the crowds... damn it. They're gone.`;
                    finalStatus = 'Escaped';
                    msgType = "worried";
                } else {
                    reportMsg = `Target tried to run, but I chased them down. Secured in cuffs.`;
                    finalStatus = 'Arrested';
                }
            }
            else if (cit.civPersonality === 'Partially Aggressive') {
                if (Math.random() < 0.5) {
                    reportMsg = `Suspect threw a punch and tried to fight. I put them down permanently.`;
                    finalStatus = 'Deceased';
                    msgType = "worried";
                } else {
                    reportMsg = `Suspect got a little rough, but I overpowered them. Target secured.`;
                    finalStatus = 'Arrested';
                }
            }
            else if (cit.civPersonality === 'Aggressive') {
                msgType = "worried";
                addChatMessage(officer, `Suspect is firing! Taking heavy fire at ${cit.address}!`, "worried");
                
                setTimeout(() => {
                    addChatMessage(officer, `I got 'em... Target ${cit.name} neutralized. Need cleanup.`, "serious");
                    cit.status = 'Deceased';
                    renderCitizensList();
                }, 3500);
                return; // Exit early since we handle aggressive with a delay
            }

            addChatMessage(officer, reportMsg, msgType);
            cit.status = finalStatus;
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
            implants: cit.trait
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
chatSimulateInt = setInterval(simulateChat, 3000); // every 3s, random chat
autoSimulateInt = setInterval(() => {
        simulateEvent();

    // Occasional Random Auto-Panic (very rare, ~1% chance during an event tick)
    if (Math.random() < 0.01 && autoEventsCheckbox.checked && activePanics.size === 0) {
        triggerPanic();
    }
}, 10000); // every 7s, random event


// --- Wanted Targets Logic ---
const wantedCrimes = [
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
                Crime: Resonance Cascade, Assault on Overwatch, Anti-Civil Activity Level 1.<br>
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
    wantedTargets.forEach(target => {
        const targetDiv = document.createElement('div');
        let color = target.level === 'HIGH' ? 'var(--panic-red)' : 'var(--panic-orange)';
        
        targetDiv.style.cssText = `color: ${color}; border-left: 3px solid ${color}; padding-left: 10px; padding-bottom: 5px; margin-bottom: 10px; background: rgba(255, 255, 255, 0.02); cursor: pointer; transition: background 0.2s;`;
        targetDiv.onmouseover = () => targetDiv.style.background = "rgba(255, 255, 255, 0.08)";
        targetDiv.onmouseout = () => targetDiv.style.background = "rgba(255, 255, 255, 0.02)";

        targetDiv.innerHTML = `
            <strong>HVT: "${target.name}"</strong><br>
                Crime: ${target.reason}<br>
                    Bounty: ${target.bounty} Credits. DEAD OR ALIVE.
        `;

        targetDiv.addEventListener('click', () => {
            openReportModal(`
                <h3 style="color:${color}; border-bottom: 1px solid ${color}; padding-bottom: 10px;">HVT PROFILE: ${target.name}</h3>
                <strong>Registered Address:</strong> ${target.address || 'Unknown'}<br>
                <strong>License Status:</strong> REVOKED<br>
                <strong>Cyberware Modifications:</strong> ${target.implants || 'None detected'}<br><br>
                <em>Actionable Intel:</em> Suspect is considered armed and dangerous. Lethal force authorized without prior warning.
            `);
        });
        wantedListEl.appendChild(targetDiv);
    });
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
        implants: Math.random() > 0.5 ? 'Optical camo, Subdermal plating' : 'None detected'
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
            implants: Math.random() > 0.5 ? 'Optical camo, Subdermal plating' : 'None detected'
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
        dbResults.innerHTML = '<span style="color:var(--panic-red);">ERROR: Invalid query string. Enter Citizen ID or Name.</span>';
        return;
    }

    // Display simulated search progress
    dbResults.innerHTML = `<div style="color:var(--text-dim);">[ SYSTEM STATUS ] Searching Central Citizen Database for "<span style="color:#fff;">${query}</span>"...</div>`;

    setTimeout(() => {
        // Special easter eggs
        if (query.includes("GORDON") || query.includes("FREEMAN")) {
            dbResults.innerHTML = `
                <div style="color:var(--panic-red); border: 1px solid var(--panic-red); padding: 10px; background: rgba(255, 0, 0, 0.05);">
                    <strong style="font-size: 1.2rem;">🚨 ALERT: KETER-LEVEL THREAT DETECTED 🚨</strong><br><br>
                    <strong>QUERY:</strong> ${query}<br>
                    <strong>STATUS:</strong> ACTIVE BOUNTY (9,236,000 CR)<br>
                    <strong>RECOMMENDATION:</strong> EVACUATE SECTOR AND DEPLOY GUNSHIPS IMMEDIATELY.<br>
                    <span style="font-size: 0.8rem; color:#aaa;">(Query logged. Overwatch has been notified of your location.)</span>
                </div>
             `;
            return;
        }

        const isGuilty = Math.random() > 0.2; // 80% chance of being "guilty" of something (trigger-happy cops)
        const infractions = isGuilty ? getRandomItem(wantedCrimes) : "None (Pending further intrusive investigation)";
        const status = isGuilty ? "<span style='color:var(--panic-orange); font-weight:bold;'>WARRANT ISSUED</span>" : "<span style='color:var(--accent-green);'>CLEARED (TEMPORARILY)</span>";

        dbResults.innerHTML = `
                            <div style="margin-bottom: 10px; border-bottom: 1px solid var(--border-color); padding-bottom: 5px;">
                                <strong style="color: var(--accent-blue);">CITIZEN RECORD RETRIEVED:</strong>
                            </div>
                            <div style="margin-bottom: 5px;"><strong>Name/ID:</strong> ${query}</div>
                            <div style="margin-bottom: 5px;"><strong>System Status:</strong> ${status}</div>
                            <div style="margin-bottom: 15px;"><strong>Known Infractions:</strong> <span style="color:#ccc;">${infractions}</span></div>

                            <button class="doc-btn" style="width: 100%; border-color: ${isGuilty ? 'var(--panic-red)' : 'var(--accent-green)'}; color: ${isGuilty ? 'var(--panic-red)' : 'var(--accent-green)'};" onclick="alert('Dispatching units to citizen residence.')">DISPATCH PATROL TO RESIDENCE</button>
                            <br><br>
                                <em style="color:#aaa; font-size:0.85rem;">[Directive 4-A Applied: All citizens subject to random pacification patrols and warrantless search.]</em>
                                <div id="ai-profile-output" style="margin-top: 15px;"></div>
                        `;
        dbAiProfileBtn.style.display = 'inline-block';
    }, 1200); // 1.2 second "search" delay for realism
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
        const response = await fetch('https://text.pollinations.ai/' + encodeURIComponent(prompt));
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
let unitAssignments = {}; // callsign -> status

function renderUnitStatus() {
    const tbody = document.getElementById('unit-status-body');
    const totalEl = document.getElementById('cad-total-active');
    if(!tbody) return;

    let html = '';
    let activeCount = 0;

    roster.forEach(u => {
        if (u.status === 'On Duty') activeCount++;
        
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
        
        html += `
            <tr style="border-bottom: 1px dashed var(--panel-border);">
                <td style="padding: 8px 0; color: #fff; font-weight:bold;">${u.id}</td>
                <td style="padding: 8px 0;">
                    <span style="background: rgba(0,0,0,0.4); border: 1px solid ${healthColor}; color: ${healthColor}; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">${u.health}</span>
                </td>
                <td style="padding: 8px 0;">
                    <span style="background: rgba(0,0,0,0.4); border: 1px solid ${dutyColor}; color: ${dutyColor}; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">${u.status.toUpperCase()}</span>
                </td>
                <td style="padding: 8px 0; color: ${assignColor}; font-weight:bold; font-size: 0.85rem;">${assignment}</td>
                <td style="padding: 8px 0; color: #b3e5fc; font-size: 0.9rem;">${psych}</td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
    if(totalEl) totalEl.textContent = activeCount;
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
        vehResults.innerHTML = `<span style="color:var(--text-dim);">Running NCIC query on plate [${plate}]...</span>`;
        
        setTimeout(() => {
            // Assign a random owner from database if citizens exist
            let ownerName = "Unknown / Unregistered";
            let status = "CLEAN";
            let color = "var(--accent-green)";
            
            if (globalCitizens.length > 0) {
                const randOwner = globalCitizens[Math.floor(Math.random() * globalCitizens.length)];
                ownerName = randOwner.name + ` (CID: ${randOwner.id})`;
                if (randOwner.status === 'Wanted' || randOwner.status === 'Escaped') {
                    status = "STOLEN / WANTED OWNER";
                    color = "var(--panic-red)";
                } else if (randOwner.status === 'Suspicious') {
                    status = "FLAGGED";
                    color = "var(--panic-orange)";
                }
            }
            
            const makes = ["Chevillon", "Thorton", "Quadra", "Archer", "Villefort", "Mizutani", "Brennan"];
            const models = ["Emperor", "Colby", "Turbo-R", "Hella", "Cortes", "Shion", "Apollo"];
            const randVehicle = `${makes[Math.floor(Math.random()*makes.length)]} ${models[Math.floor(Math.random()*models.length)]}`;
            
            vehResults.innerHTML = `
                <div style="margin-bottom: 5px;"><strong>PLATE:</strong> ${plate}</div>
                <div style="margin-bottom: 5px;"><strong>VEHICLE:</strong> ${randVehicle}</div>
                <div style="margin-bottom: 5px;"><strong>REGISTERED OWNER:</strong> ${ownerName}</div>
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
let lethalAuthActive = false;
let lethalAuthTimer = null;
let lethalAuthTimeLeft = 20;
let lethalAuthOfficer = "";
let lethalAuthCitizen = "";

function triggerLethalAuthEvent() {
    if (lethalAuthActive) return;
    
    if (typeof getActiveCallsigns === 'undefined') return;
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    lethalAuthOfficer = active[Math.floor(Math.random() * active.length)];
    
    lethalAuthCitizen = "a suspicious citizen";
    if (typeof globalCitizens !== 'undefined' && globalCitizens.length > 0) {
        lethalAuthCitizen = globalCitizens[Math.floor(Math.random() * globalCitizens.length)].name;
    }

    lethalAuthActive = true;
    lethalAuthTimeLeft = 20;
    
    if (typeof addChatMessage !== 'undefined') {
        addChatMessage(lethalAuthOfficer, `Dispatch, a kill has been requested by a civilian... I am requesting to authorize lethal force against ${lethalAuthCitizen}. Am I clear to engage?`, 'worried', false);
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
                clearInterval(lethalAuthTimer);
                modal.style.display = 'none';
                resolveLethalAuth(Math.random() < 0.5); // Random choice
            }
        }, 1000);
    }
}

function resolveLethalAuth(isAuthorized) {
    if (!lethalAuthActive) return; // Prevent double clicks
    lethalAuthActive = false;
    if (lethalAuthTimer) clearInterval(lethalAuthTimer);
    
    const modal = document.getElementById('lethal-auth-modal');
    if (modal) modal.style.display = 'none';
    
    if (isAuthorized) {
        setTimeout(() => {
            if (typeof addChatMessage !== 'undefined') {
                addChatMessage("INTERNAL AFFAIRS", `WHAT THE HELL ARE YOU DOING?! This is against the lethal force rules of engagement! These actions reflect our entire force. THINK before engaging!`, 'worried', false);
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
