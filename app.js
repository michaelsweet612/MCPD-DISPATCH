// OS Simulator Logic

// Setup Audio Context for procedural synthetic sound (Panic Alarm)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let panicOsc = null;
let panicLFO = null;
let panicGain = null;

// DOM Elements
const timeEl = document.getElementById('current-time');
const unifiedLogEl = document.getElementById('unified-log');
const documentLogEl = document.getElementById('document-log');
const chatInputArea = document.getElementById('chat-input-area');
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
      for(let i=0; i<20; i++) {
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

const jokes = [
    "Just unloaded a full clip into a suspicious garbage can. Area secure.",
    "Anyone else craving donuts right now? I shot a pigeon on the way here.",
    "My trigger finger is getting itchy, any action yet?",
    "If they didn't want to get tased, they shouldn't have looked at me funny.",
    "Current status: drawing weapon on a suspicious shadow.",
    "To the rookie who left their safety on: I'm confiscating your coffee.",
    "Did anyone capture that stray dog? It looked at me aggressive so I deployed less-lethal.",
    "Pick up that can. Haha, always wanted to say that.",
    "Is it just me or does the Chief owe us all a pizza party for the body count this week?",
    "Outbreak, outbreak, outbreak... oh wait, just someone sneezing. Never mind.",
    "My cruiser is making a weird noise. I might just shoot the engine.",
    "If I have to fill out one more use-of-force form today, I'm using force on the printer.",
    "Suspect tripped and fell on my baton. Five times. It was wild.",
    "I'm pretty sure my body cam 'accidentally' turned off again. Standard procedure.",

    // Bizarre Quotes
    "Sometimes, I dream about cheese.",
    "Is the sky actually a holograph? Just wondering while I beat this perp.",
    "I swear my radio just whispered my middle name.",
    "The pavement tastes like pennies today.",
    "Who left a toaster in the evidence locker?",
    "Dispatch, my shadow is moving independently. Please advise.",
    "I think the crows are wiretapping my cruiser.",
    "Do you ever think about how we are all just meat inside a metal cage?",
    "My left shoe has been vibrating for an hour. Code 3.",
    "There's a man made entirely of bees on 3rd street. I'm going to shoot it.",
    "Dispatch, can you confirm if gravity was turned off in sector 7?",
    "I just gave a speeding ticket to a horse.",
    "Can someone bring me a spatula? Tactical reasons.",
    "My reflection just blinked at me.",
    "The suspect turned into a cloud of glitter. Requesting backup.",

    // Half-Life 2 / Combine Random Chatter
    "Anticitizen one located. Prepare for extraction.",
    "Target is infected. Requesting authorization to cauterize the block.",
    "Warning. Primary target has engaged. Returning fire.",
    "Suspect exhibits anti-civil behavior. Sterilizing the area.",
    "Block is hot. Code 3 response authorized.",
    "Confirmed visual on the HVT. Taking the shot.",
    "Overwatch, acknowledge. We are sweeping the sector.",
    "Protection team, alert! We have a containment failure!",
    "Attention ground units. Anti-citizen reported in this community.",
    "Code: isolate, expose, administer.",
    "Amputate.",
    "Cauterize.",
    "Sterilize.",
    "Outland secure is compromised! Repeat, compromised!",
    "Overwatch, requesting reserve activation.",
    "Objective failed. Deploying autonomous units.",
    "Infected zone detected. Containment protocol active.",
    "Despatch, priority target is evading. Send Hunter-Chopper.",
    "All units, converge on position. Expose and amputate.",
    "Suspect is sub-prime. Execute.",
    "You have been convicted of multiple anti-civil violations. Implicit citizenship revoked.",
    "I'm keeping my stun baton charged. Just in case.",
    "Did you hear the new orders? Free fire zone.",
    "I've got a standard issue ration if anyone wants it.",
    "Don't drink the water. They put something in it to make you forget.",

    // Extended Bizarre Quotes
    "I'm currently engaged in a staring contest with a fire hydrant. Backup requested.",
    "Is it protocol to shoot the clouds if it looks like it's going to rain?",
    "Dispatch, my cruiser's steering wheel just turned into a snake. Please advise.",
    "I think the mayor is actually three raccoons in a trench coat. Firing warning shots.",
    "Can someone bring me a net? I'm trying to catch yesterday.",
    "My taser is making a humming noise that sounds like a 90s boy band.",
    "There's a mime resisting arrest in sector 4. I'm trapped in an invisible box!",
    "Dispatch, my coffee is looking at me funny. Permission to neutralize.",
    "I pulled over a guy but he handed me a Monopoly 'Get Out of Jail Free' card. Letting him go.",
    "Does anyone else hear boss music?",
    "I told the perp to freeze, and he threw ice at me. Send backup.",
    "I accidentally handcuffed myself to the steering wheel. Again.",
    "Dispatch, has the sky always been blue or is this a simulation glitch?",
    "Requesting a SWAT team for this spider in my vehicle.",
    "The suspect is throwing existential dread at me. My shields are failing.",
    "My badge just dissolved. Am I still a cop?",
    "I'm responding to a 10-50, but it's just two pigeons fighting over a french fry.",
    "Who replaced my ammo with jellybeans? The suspect is very confused.",
    "I think my shadow is plotting to arrest me.",
    "Dispatch, I shot the sheriff, but I did not shoot the deputy. Awaiting orders.",
    "The suspect's aura is highly illegal. Deploying spiritual crystals.",
    "Has anyone seen my sanity? I think I dropped it near 5th and Main.",
    "I arrested a toaster for burning my bagel. It's doing 5 to 10 now.",

    // Extended Half-Life 2 Quotes
    "Memory replacement is the first step toward true citizenship.",
    "Attention please. Evasion of containment is a capital offense.",
    "Citizen notice: Failure to cooperate will result in permanent off-world relocation.",
    "You have been charged with socio-endangerment level 5.",
    "Prepare to receive civil judgment.",
    "Individual, you are charged with multiple counts of anti-civil behavior.",
    "Security alert. Illegal broadcast detected.",
    "Overwatch acknowledges critical existence failure.",
    "Viscerator deployed. Searching.",
    "Contact with malignant virus confirmed.",
    "Attention ground units. Anti-citizen reported in this community.",
    "All units, code: sacrifice, coagulate, plan.",
    "Report all socio-behavioral anomalies to your local Civil Protection team.",
    "Your implicit citizenship has been revoked.",
    "Unit down. Requesting heavily armed response.",
    "We have a localized bio-hazard. Sterilize the sector.",
    "Non-compliant citizens will be processed and re-educated.",
    "Target is infected. Purging.",
    "Overwatch, we have a breach in the perimeter.",
    "Attention residents. This block contains potential infection. Stay in your homes.",
    "Civil Protection reminds you that unauthorized reproductive simulation is a level 3 offense.",
    "Overwatch reports possible hostiles in the underground sub-levels.",
    "Code: amputate, zero, confirm.",
    "Executing standard pacification protocol.",
    "Malignant engagement resolved. Sector is returning to standard civil index.",
    "Miscount detected in your block. Co-operation with your Civil Protection team permits full ration reward."
];

const seriousChats = [
    "Subject reached for waistband, suspect neutralized. Send EMS and the cleanup crew.",
    "Deploying less-lethal... scratch that, deploying lethal.",
    "Perimeter secure. 4 suspects down. Looks like they resisted arrest.",
    "We have a 10-50, driver was non-compliant, vehicle disabled via gunfire.",
    "Copy that dispatch, weapons drawn, proceeding to target.",
    "I have visual on the described vehicle. Requesting authorization to pit and fire.",
    "Requesting backup for a high-risk stop, Highway 4. Bring the heavy ordinance.",
    "Overwatch, acknowledge. We are sweeping the sector."
];

const worriedChats = [
    "What the hell is going on out there? I need more ammo over here!",
    "Dispatch, are we under attack? I'm firing at everything that moves.",
    "I'm out of clips! We need a resupply drop right now!",
    "This is getting insane. I've never seen so many officers triggering distress.",
    "Do we have MaxTac on standby? Because we need them immediately.",
    "I'm pinned down! Authorize use of orbital strike?",
    "Everybody stay sharp, free fire zone authorized in Sector 4.",
    "Chief needs to get down here right now. We are losing control of the streets.",
    "Dispatch, send every available unit. Tell them to come out with guns blazing.",
    "Protection team, alert! We have a containment failure!",
    "Sector is lost! Requesting immediate air support!",
    "They're everywhere! I'm falling back, covering fire!",
    "Outland secure is compromised! Repeat, compromised!",
    "Requesting reinforcement! My squad is wiped out!",
    "I don't want to die doing paperwork! Send the heavy synths!"
];

const reactionNormalChats = [
    "10-4, Dispatch. Weapons hot.",
    "Copy that. Engaging.",
    "Understood, Dispatch. Lock and load.",
    "10-4, showing received. Going tactical.",
    "Loud and clear. Target acquired.",
    "Copy, proceeding with extreme prejudice.",
    "Affirmative. Sterilizing area now.",
    "Roger that. Containment team moving in."
];

const reactionCrazyChats = [
    "Dispatch, are you okay? Should I shoot the terminal?",
    "10-9 Dispatch, your transmission was garbled. Authorization to use force unclear.",
    "Did you just have a stroke on the keyboard, Dispatch? Do I shoot or not?",
    "Uh, Dispatch... do you need us to send EMS or a SWAT team to the comms center?",
    "Who is operating the console right now? Sounded like a cyber-psycho.",
    "Dispatch, please lay off the stims.",
    "I think the dispatch terminal has a virus. Let me shoot it.",
    "10-9? Sounded like you were just mashing buttons. I'm taking cover.",
    "Warning: anomalous communication detected. Preparing to purge the network.",
    "Dispatch, is this a loyalty test? Because I'll shoot whoever you want."
];

const voreChats = [
    "Dispatch... what is happening? The walls are breathing.",
    "I don't feel safe out here anymore. Something is hunting us.",
    "Did anyone just see the sky blink?",
    "My cruiser's dashboard is melting... or am I going crazy?",
    "I need backup! Not for criminals... for the shadows. They're moving.",
    "Dispatch, my reflection in the mirror just smiled at me. I'm leaving.",
    "Is anyone else hearing that low hum? It's inside my skull.",
    "I swear the pavement just swallowed a stray dog.",
    "I want to go home, Dispatch. Please let us go home.",
    "They told us we'd be protecting the city. They didn't tell us from what.",
    "I'm locking myself in the trunk. Do not send anyone.",
    "The streetlights are all pointing at me.",
    "My sidearm just whispered my name.",
    "There are teeth in the concrete. Huge teeth.",
    "I'm staring into the alleyway and it's staring back.",
    "Dispatch, please wake me up. I know this is a dream. Wake me up!",
    "The rain smells like copper today.",
    "I just saw my own corpse walking down 4th street.",
    "Something is under the city. It's waking up.",
    "My partner vanished when I blinked.",
    "I'm not shooting anyone. I don't want to make it angry.",
    "Every civilian face is completely blank. No eyes. No mouths.",
    "The radio static sounds like screaming... is that you, Dispatch?",
    "I can't remember my own name anymore. Where am I?",
    "Did the sun just turn black?",
    "We are not in control. We never were.",
    "I found a door in the middle of the street. It's open.",
    "Gravity feels... optional right now.",
    "They're coming from the sewers. Millions of them. But they look like us.",
    "I just arrested a shadow. My cuffs went right through it.",
    "Who is Gordon Freeman? Why does my brain hurt when I say it?",
    "My blood is turning cold. I think I died yesterday.",
    "I beg you, send an extraction team! But don't let them look at the sky!",
    "The neon signs are spelling out my sins.",
    "I'm hiding under the cruiser. Tell my family to forget me.",
    "My weapon is useless against this.",
    "I fired a full mag into it... it just absorbed the bullets.",
    "We breached the apartment, but the geometry inside is all wrong. Endless hallways.",
    "There's a knock on the patrol car window. But I'm parked on a bridge. Over the water.",
    "The sirens sound like laughing.",
    "I'm taking off my badge. This is not our city anymore.",
    "The birds. Look at the birds. They're completely frozen in mid-air.",
    "I tried to run, but everywhere I go, I end up back here.",
    "It's too quiet. Even the wind stopped.",
    "My heart isn't beating, Dispatch. I checked three times.",
    "We're just food. That's all we are.",
    "The buildings are leaning over, trying to crush us.",
    "I can hear the city thinking.",
    "Don't trust unit 47. He has entirely too many joints in his arms now.",
    "I'm dropping my weapon and walking into the fog. Good luck."
];

const greetingChats = [
    "Hey! Anyone want to grab coffee near Sector 4?",
    "Yo, how's the patrol going?",
    "Just clocked in. What did I miss?",
    "Sup guys, another beautiful day in the dystopia.",
    "Hello from the east district. Quiet tonight.",
    "Greetings, fellow enforcers.",
    "Hey! Stop hogging the radio.",
    "Anyone got eyes on that stolen hover-car?",
    "Morning! If you can call it morning through the smog.",
    "Howdy! Watch out for the potholes on 9th ave.",
    "Hey man, I heard you got promoted!",
    "Yo! Just got a fresh supply of stun batons.",
    "Hello everyone! Keep your heads down today.",
    "Hey! Need backup over here just to eat my donut in peace.",
    "Sup! Did you finish that paperwork from yesterday?",
    "Greetings from the holding cells. It's loud in here.",
    "Hey, buddy! Long time no see on the dispatch channel.",
    "Yo! Who's buying lunch today?",
    "Hi guys! Stay alert out there.",
    "Hey! My cruiser's AC is broken again.",
    "Sup! Just chasing down some petty thieves.",
    "Hello! Anybody else bored out of their mind?",
    "Hey man, watch your six in the industrial zone.",
    "Yo! Let's wrap this shift up quick.",
    "Hi! Checking in from the rooftop patrol.",
    "Hey! Have you seen the new rookie? Absolute mess.",
    "Sup! I need a coffee IV drip right now.",
    "Hello from the traffic division! Send help, it's terrible.",
    "Hey! Don't let the captain catch you sleeping.",
    "Yo! What's the bounty on Freeman up to now?",
    "Hi guys, keep the chatter down, I have a headache.",
    "Hey! Anyone want to swap shifts on Friday?",
    "Sup! Just cleared a squatter camp.",
    "Hello! This radio is full of static.",
    "Hey man, keep your vest tight.",
    "Yo! First one back to the precinct wins a prize.",
    "Hi! My taser is acting up today.",
    "Hey! Let's go bust some skulls.",
    "Sup! Anyone else feel like we're just pawns in a simulation?",
    "Hello! Ready for some action.",
    "Hey! Got my eyes peeled.",
    "Yo! Check out the cyberware on that guy.",
    "Hi! Reporting for duty.",
    "Hey! Let's make this city safe.",
    "Sup! Another day, another dollar... wait, we use credits.",
    "Hello! Stay safe out there.",
    "Hey! Keep your comms linked.",
    "Yo! See you at the briefing.",
    "Hi! Over and out for a coffee break.",
    "Hey! Good luck on patrol."
];

let voreMode = false;

const crimeReports = [
    { title: "10-24: Abandoned Vehicle", priority: "low" },
    { title: "10-31: Crime In Progress - Robbery", priority: "high", group: "Downtown Syndicate" },
    { title: "10-43: Information - Suspicious Activity", priority: "medium" },
    { title: "10-54: Possible Dead Body / Homicide", priority: "high", group: "Northside Kings" },
    { title: "10-85: Delay due to arrest", priority: "low" },
    { title: "10-32: Person with a gun", priority: "high" },
    { title: "10-15: Civil Disturbance", priority: "medium" },
    { title: "10-66: Illegal Cyberware Installation", priority: "high", group: "Ripperdoc Cartel" },
    { title: "10-99: Officer needs assistance", priority: "high" },
    { title: "11-44: Bio-Hazard Spill", priority: "high", group: "Tyrell Corp" },
    { title: "10-11: Animal Problem - Synthetic Dog", priority: "low" },
    { title: "10-71: Shooting in Sector 4", priority: "high", group: "Neon Vipers" },
    { title: "10-34: Riot in Progress", priority: "high", group: "Anti-Corp Protesters" },
    { title: "10-62: Kidnapping / Hostage Situation", priority: "high", group: "The Splicers" },
    { title: "11-82: Traffic Accident - Hovercar Collision", priority: "medium" },
    { title: "10-09: Unsanctioned AI Core Detected", priority: "high" },
    { title: "10-89: Bomb Threat", priority: "high", group: "Cyber-Luddites" },
    { title: "10-21: Corporate Espionage in Progress", priority: "medium", group: "Militech Operatives" },
    { title: "10-53: Smuggling Contraband", priority: "medium", group: "The Nomads" },
    { title: "10-59: VIP Escort Required", priority: "low", group: "City Council" }
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
      if (restModeToggle.checked) return;
      if (!autoEventsCheckbox.checked) return;
      if (isFetchingChat) return;

      const activeCallsigns = getActiveCallsigns();
      if (activeCallsigns.length < 2) return; // Need at least 2 for banter

      let sender = getRandomItem(activeCallsigns);
      
      // Very rare 1% chance to say good boy
      if (Math.random() < 0.01) {
          addChatMessage(sender, "Good boy.", 'joking');
          return;
      }
      let msgTypeClass = 'serious';
      let scenario = '';
      
      // Banter State Machine Update
      if (offTopicCooldown > 0) offTopicCooldown--;

      if (radioState === 'on-topic') {
          if (offTopicCooldown === 0 && Math.random() < 0.05) { // 5% chance to go off-topic
              radioState = 'off-topic';
              offTopicUnit1 = getRandomItem(activeCallsigns);
              offTopicUnit2 = getRandomItem(activeCallsigns.filter(u => u !== offTopicUnit1));
              sender = offTopicUnit1;
          }
      }

      let actualPersonality = roster.find(u => u.id === sender)?.personality || 'Rookie';

      if (radioState === 'off-topic') {
          // 25% chance someone interrupts them
          if (Math.random() < 0.25) {
              const strictUnit = roster.find(u => u.status === 'On Duty' && (u.personality === 'By-The-Book' || u.personality === 'Veteran'))?.id || getRandomItem(activeCallsigns.filter(u => u !== offTopicUnit1 && u !== offTopicUnit2));
              sender = strictUnit;
              actualPersonality = roster.find(u => u.id === sender)?.personality || 'Veteran';
              scenario = `You are furiously interrupting ${offTopicUnit1} and ${offTopicUnit2}'s casual conversation. Yell at them to stay on topic, clear the radio channel, and act like professional police officers.`;
              msgTypeClass = 'worried'; // red/orange text
              
              radioState = 'on-topic';
              offTopicCooldown = 20; // Enforce on-topic for the next 20 chat ticks (approx 1 minute)
          } else {
              // Continue the casual conversation
              sender = Math.random() < 0.5 ? offTopicUnit1 : offTopicUnit2;
              const target = sender === offTopicUnit1 ? offTopicUnit2 : offTopicUnit1;
              actualPersonality = roster.find(u => u.id === sender)?.personality || 'Rookie';
              scenario = `You are having a highly unprofessional, casual, off-topic conversation with ${target} over the main police radio. Talk about mundane NPC things: bad food, video games, complaining about your shift, or sports.`;
              msgTypeClass = 'joking'; // yellow/casual text
          }
      } else {
          // Standard ON-TOPIC logic
          if (voreMode) {
              msgTypeClass = 'worried';
              scenario = "You are terrified of a giant mouth in the sky. Express extreme surreal panic about being eaten.";
          } else if (activePanics.size >= 3) {
              msgTypeClass = 'worried';
              scenario = "The city is falling apart. Multiple officers have triggered panic buttons. Express extreme stress and fear.";
          } else {
              const rand = Math.random();
              if (rand < 0.3) {
                  scenario = "You are requesting a routine status check on a suspicious vehicle or civilian.";
              } else if (rand < 0.6) {
                  scenario = "You are giving a standard patrol status update for your sector. Keep it professional.";
              } else if (rand < 0.8) {
                  scenario = "You are officially reporting a minor crime or citing a civilian for a low-level infraction.";
              } else {
                  msgTypeClass = 'worried';
                  scenario = "You are expressing concern about heavily armed gang members in your sector, but maintaining professional radio discipline.";
              }
          }
      }

      isFetchingChat = true;

      try {
          const prompt = `You are a cyberpunk police officer named ${sender} speaking over the radio. Your personality is: ${actualPersonality}. Context: ${scenario}. Keep it to 1 concise, gritty sentence. No roleplay actions, no asterisks, no quotes.`;
          const response = await fetch('https://text.pollinations.ai/' + encodeURIComponent(prompt));


        if (response.ok) {
            let msgText = await response.text();
            msgText = msgText.replace(/^["']|["']$/g, '').trim();

            

            addChatMessage(sender, msgText, msgTypeClass, false);

            // 5% chance to pin to Radio Important Logs
            if (Math.random() < 0.05) {
                pinRadioLog(sender, msgText);
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
async function processDispatchChat() {
    const text = dispatchChatInput.value.trim();
    if (!text) return;

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
        const actualPersonality = senderUnit ? senderUnit.personality : 'Aggressive';
        
        const prompt = "You are a hardened cyberpunk police officer in a dystopian megacity. The dispatcher just radioed: '" + text + "'. Respond briefly (1-2 sentences max) over the radio. Your personality is " + actualPersonality + " (act like it!). If the dispatcher is saying weird/unhinged things, act concerned or confused. Keep it gritty, use cop lingo, no asterisks, no roleplay actions.";


        const response = await fetch('https://text.pollinations.ai/' + encodeURIComponent(prompt));
        if (response.ok) {
            let reactionText = await response.text();
            reactionText = reactionText.replace(/^["']|["']$/g, '').trim(); // Remove surrounding quotes if any
            typingDiv.querySelector('.text').innerHTML = reactionText;
            typingDiv.querySelector('.text').style.fontStyle = 'normal';
            typingDiv.querySelector('.text').style.color = 'inherit';
        } else {
            throw new Error("API Failed");
        }
    } catch (e) {
        // Fallback to static reaction if AI fails
        typingDiv.querySelector('.text').innerHTML = getRandomItem(reactionNormalChats);
        typingDiv.querySelector('.text').style.fontStyle = 'normal';
        typingDiv.querySelector('.text').style.color = 'inherit';
    }
}


// Emulate Dispatch Event
function simulateEvent(specificCrime = null) {
    if (restModeToggle.checked && !specificCrime) return; // Pause all auto events if rest mode is on

    let crime = specificCrime;
    if (!crime) {
        if (!autoEventsCheckbox.checked) return;
        crime = getRandomItem(crimeReports);
    }

    const div = document.createElement('div');
    const prioClass = crime.priority === 'high' ? 'high-priority' : (crime.priority === 'medium' ? 'medium-priority' : '');

    const respondingUnits = [getRandomItem(getActiveCallsigns()), getRandomItem(getActiveCallsigns())];

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
    if(eventCountEl) eventCountEl.textContent = `${eventCount} Events`;
    scrollToBottom(unifiedLogEl);

    if (unifiedLogEl.children.length > 100) {
        unifiedLogEl.removeChild(unifiedLogEl.firstChild);
    }

    // Delay the resolution to simulate travel, conflict, and radio reporting
    setTimeout(async () => {
        const reportingUnit = respondingUnits[0];
        const isROEEnabled = roeToggleCheckbox.checked;

        const arrestingChats = [
            "10-4, Dispatch. Suspect apprehended non-lethally. Requesting transport.",
            "Target secured after minor struggle. Disarming and filing report.",
            "Suspect detained successfully. Code 4. No serious casualties.",
            "We have the suspect in cuffs. Transporting to booking now.",
            "Perp gave up without a fight. Miraculous.",
            "Target in custody. Only had to use the stun baton twice.",
            "Suspect pacified and restrained. Requesting medical for minor lacerations.",
            "He tried to run, but the net gun got him. Secured.",
            "Subject is crying but otherwise unhurt. Heading back to station.",
            "Suspect decided the holding cell was better than fighting. Detained."
        ];

        const killingChats = [
            "Target neutralized. Call the meat wagon. Filing report now.",
            "Threat eliminated. No survivors. Returning to patrol.",
            "Suspect resisted. Lethal force applied. Area is red but quiet.",
            "Subject down. Send bio-hazard cleanup to our coordinates.",
            "Target was hostile. Problem solved permanently.",
            "Lethal measures authorized and executed. Target deceased.",
            "Suspect eradicated. No vital signs.",
            "Threat neutralized with extreme prejudice.",
            "Code 4. Suspect is no longer a problem.",
            "Target terminated. Requesting cleanup crew."
        ];

        let reportMsg = "";
        
        try {
            const outcomeType = isROEEnabled ? "You apprehended the suspect using non-lethal pacification. They are alive and in cuffs." : "You neutralized the suspect using lethal force. They are dead.";
            const prompt = `You are a cyberpunk police officer named ${reportingUnit} reporting the conclusion of an incident: ${crime.title}. ${outcomeType} Provide a single, gritty, cynical 1-sentence radio report. No roleplay actions, no quotes.`;
            const response = await fetch('https://text.pollinations.ai/' + encodeURIComponent(prompt));
            if (response.ok) {
                let aiText = await response.text();
                reportMsg = aiText.replace(/^["']|["']$/g, '').trim();
            } else {
                throw new Error("AI Generation Failed");
            }
        } catch (e) {
            // Fallback
            if (isROEEnabled) {
                reportMsg = getRandomItem(arrestingChats);
            } else {
                reportMsg = getRandomItem(killingChats);
            }
        }

        // Emulate the officer speaking in the radio channel
        addChatMessage(reportingUnit, reportMsg, "serious");

        // Generate the document AFTER they report it
        mockAddDocument(crime, respondingUnits, isROEEnabled);

    }, 4000 + Math.random() * 6000); // 4 to 10 seconds later
}

async function mockAddDocument(crime, respondingUnits, isROEEnabled) {
    const doc = document.createElement('div');
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

        const response = await fetch('https://text.pollinations.ai/' + encodeURIComponent(prompt));
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

function playPanicSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    // Prevent multiple overlapping sirens
    if (panicOsc) return;

    panicOsc = audioCtx.createOscillator();
    panicLFO = audioCtx.createOscillator();
    panicGain = audioCtx.createGain();

    // Main tone - Sawtooth is harsh/brassy like a siren
    panicOsc.type = 'sawtooth';
    panicOsc.frequency.value = 750; // Base frequency

    // LFO to modulate the pitch (Hi-Lo European style oscillation)
    panicLFO.type = 'square';
    panicLFO.frequency.value = 2.5; // ~2.5 Hz oscillation

    // Gain node to control modulation depth
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.value = 250; // Modulates +/- 250 Hz (from 500Hz to 1000Hz)

    panicLFO.connect(lfoGain);
    lfoGain.connect(panicOsc.frequency); // Modulates the pitch of panicOsc

    // Main volume control
    panicGain.gain.value = 0.3; // Loud enough but not deafening

    panicOsc.connect(panicGain);
    panicGain.connect(audioCtx.destination);

    panicOsc.start();
    panicLFO.start();
}

function stopPanicSound() {
    if (panicOsc) {
        panicOsc.stop();
        panicOsc.disconnect();
        panicOsc = null;
    }
    if (panicLFO) {
        panicLFO.stop();
        panicLFO.disconnect();
        panicLFO = null;
    }
    if (panicGain) {
        panicGain.disconnect();
        panicGain = null;
    }
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
const tabPersonnel = document.getElementById('tab-personnel');
const tabCitizens = document.getElementById('tab-citizens');
const databaseLogEl = document.getElementById('database-log');
const wantedLogEl = document.getElementById('wanted-log');
const personnelLogEl = document.getElementById('personnel-log');
const citizensLogEl = document.getElementById('citizens-log');
      const rosterListEl = document.getElementById('roster-list');

// Citizen Page Elements
const citizenListView = document.getElementById('citizens-list-view');
const citizenDossierView = document.getElementById('citizen-dossier-view');
const citizenPageTitle = document.getElementById('citizen-page-title');
const citizenPageBody = document.getElementById('citizen-page-body');
const btnCloseDossier = document.getElementById('btn-close-dossier');
const btnDeclareInnocent = document.getElementById('btn-declare-innocent-page');
const btnDeclareSuspicious = document.getElementById('btn-declare-suspicious-page');
const btnDeclareWanted = document.getElementById('btn-declare-wanted-page');
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
    tabPersonnel.classList.remove('active');
    tabPersonnel.style.color = 'var(--text-dim)';
      if(tabRecruitment) { tabRecruitment.classList.remove('active'); tabRecruitment.style.color = 'var(--text-dim)'; }
    tabCitizens.classList.remove('active');
    tabCitizens.style.color = 'var(--text-dim)';
    
    unifiedLogEl.style.display = 'none';
    chatInputArea.style.display = 'none';
    documentLogEl.style.display = 'none';
    databaseLogEl.style.display = 'none';
    wantedLogEl.style.display = 'none';
    personnelLogEl.style.display = 'none';
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

tabPersonnel.addEventListener('click', () => {
    hideAllTabs();
    tabPersonnel.classList.add('active');
    tabPersonnel.style.color = 'var(--text-main)';
    personnelLogEl.style.display = 'block';
    renderRoster();
});
  if(tabRecruitment) {
      tabRecruitment.addEventListener('click', () => {
          hideAllTabs();
          tabRecruitment.classList.add('active');
          tabRecruitment.style.color = 'var(--text-main)';
          recruitmentLogEl.style.display = 'block';
          if(currentApplicants.length === 0) generateApplicants();
      });
  }


tabCitizens.addEventListener('click', () => {
    hideAllTabs();
    tabCitizens.classList.add('active');
    tabCitizens.style.color = 'var(--text-main)';
    citizensLogEl.style.display = 'block';
    if (citizenDossierView) citizenDossierView.style.display = 'none';
    if (citizenListView) citizenListView.style.display = 'block';
});

  
// Personnel & PM Logic
function renderRoster() {
    rosterListEl.innerHTML = '';
    roster.forEach((unit, idx) => {
        const card = document.createElement('div');
        card.className = 'roster-card';
        const statusClass = unit.status.toLowerCase().replace(' ', '-');

        card.innerHTML = `
            <div class="roster-info">
                <span class="roster-id">${unit.id}</span>
                <span class="roster-status ${statusClass}">${unit.status}</span>
            </div>
            <div class="roster-actions">
                
                <button class="roster-btn suspend-unit" data-idx="${idx}">${unit.status === 'Suspended' ? 'Un-Suspend' : 'Suspend'}</button>
                
                
            </div>
        `;
        rosterListEl.appendChild(card);
    });

    

    

    
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
      if (onDuty.length < 20) {
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

function generateCitizens() {
    const firstNames = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Elena", "Marcus", "Sophia", "Viktor", "Aaliyah", "Desmond", "Fiona", "Gideon", "Haley", "Ivan", "Jocelyn", "Kael", "Lana", "Malik", "Nia", "Orion", "Penelope", "Quinn", "Rowan", "Serena", "Tariq", "Uma", "Vance", "Wren", "Xavier", "Yara", "Zane"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Chen", "Lee", "Kim", "Patel", "Singh", "Nguyen", "Ali", "Hassan", "Kovacs", "Novak", "Silva", "Costa", "Rossi", "Conti", "Dubois", "Lefevre", "Muller", "Schmidt", "Ivanov", "Sokolov", "Gomez", "Ruiz", "Tanaka", "Yamamoto", "Okafor", "Adebayo", "Cohen", "Levi"];
    const traits = ["No known modifications.", "Optical cyberware detected.", "Sub-dermal armor present.", "Neural link active.", "Prosthetic limb (Left Arm).", "Prosthetic limb (Right Leg).", "Voice modulator installed.", "No prior record.", "Known associate of local gangs.", "Frequent traveler to off-world colonies.", "Employed at Tyrell Corporation.", "Unemployed.", "Student at City University.", "Works in Sector 4 Industrial Zone."];

    for (let i = 0; i < 1000; i++) {
        const first = getRandomItem(firstNames);
        const last = getRandomItem(lastNames);
        const randId = `CID-${Math.floor(Math.random() * 900000) + 100000}`;

        globalCitizens.push({
            id: randId,
            name: `${first} ${last}`,
            status: 'Innocent', // Default
            trait: getRandomItem(traits),
            dob: `20${Math.floor(Math.random() * 80) + 10}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}` // Random DOB between 2010 and 2089
        });
    }
}

function renderCitizensList() {
    // Only render a chunk to not kill the dom, or just render all 1000
    // 1000 divs is usually okay for modern browsers, but let's be efficient.
    let htmlChunk = '';

    globalCitizens.forEach((cit, idx) => {
        let color = INNOCENT_COLOR;
        if (cit.status === 'Suspicious') color = SUSPICIOUS_COLOR;
        if (cit.status === 'Wanted') color = WANTED_COLOR;

        htmlChunk += `
            <div class="roster-card" onclick="openCitizenDossier(${idx})" style="cursor:pointer; border-color: ${color};">
                <div class="roster-info">
                    <span class="roster-id">${cit.id}</span>
                    <span class="roster-status" style="color:${color};text-transform:uppercase;">${cit.status}</span>
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

    citizenPageTitle.textContent = `DOSSIER: ${cit.id}`;
    citizenPageTitle.style.color = color;
    citizenPageTitle.style.textShadow = `0 0 5px ${color}`;

    citizenPageBody.innerHTML = `
        <div style="font-size: 1.5rem; color: #fff; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 10px;">
            ${cit.name}
        </div>
        <div><strong>DOB:</strong> ${cit.dob}</div>
        <div><strong>Standing:</strong> <span style="color:${color};text-transform:uppercase;">${cit.status}</span></div>
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
chatSimulateInt = setInterval(simulateChat, 5000); // every 3s, random chat
autoSimulateInt = setInterval(() => {
        simulateEvent();

    // Occasional Random Auto-Panic (very rare, ~1% chance during an event tick)
    if (Math.random() < 0.01 && autoEventsCheckbox.checked && activePanics.size === 0) {
        triggerPanic();
    }
}, 7000); // every 7s, random event

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
const wantedNames = ["Ghost", "Fixer", "Viper", "Deadeye", "Cipher", "Splicer", "Ronin", "Neon", "Shadow", "Razer", "Glitch", "Krueger", "Vanguard", "Zero", "Echo"];

function generateWantedTargets() {
      // UI Glitch Fix: Don't redraw if user is actively viewing the tab
      if (tabWanted && tabWanted.classList.contains('active') && wantedListEl.innerHTML !== '') return;

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

    // Generate 3 random targets
    const shuffledNames = [...wantedNames].sort(() => 0.5 - Math.random());
    for (let i = 0; i < 3; i++) {
        const name = shuffledNames[i];
        const crime = getRandomItem(wantedCrimes);
        const bounty = Math.floor(Math.random() * 50000 + 10000);

        const targetDiv = document.createElement('div');
        const color = Math.random() > 0.5 ? 'var(--panic-red)' : 'var(--panic-orange)';
        targetDiv.style.cssText = `color: ${color}; border-left: 3px solid ${color}; padding-left: 10px; padding-bottom: 5px; margin-bottom: 10px; background: rgba(255, 255, 255, 0.02); cursor: pointer; transition: background 0.2s;`;
        targetDiv.onmouseover = () => targetDiv.style.background = "rgba(255, 255, 255, 0.08)";
        targetDiv.onmouseout = () => targetDiv.style.background = "rgba(255, 255, 255, 0.02)";

        targetDiv.innerHTML = `
                    <strong>HVT: "${name}"</strong><br>
                        Crime: ${crime}<br>
                            Bounty: ${bounty} Credits. DEAD OR ALIVE.
                            `;

        targetDiv.addEventListener('click', () => {
            openReportModal(`
                <h3 style="color:${color}; border-bottom: 1px solid ${color}; padding-bottom: 10px;">HVT PROFILE: ${name}</h3>
                <strong>Registered Address:</strong> Sector ${Math.floor(Math.random() * 20 + 1)}, Block ${Math.floor(Math.random() * 9 + 1)}<br>
                <strong>License Status:</strong> REVOKED<br>
                <strong>Cyberware Modifications:</strong> ${Math.random() > 0.5 ? 'Optical camo, Subdermal plating' : 'None detected'}<br><br>
                <em>Actionable Intel:</em> Suspect is considered armed and dangerous. Lethal force authorized without prior warning.
            `);
        });
        wantedListEl.appendChild(targetDiv);
    }
}

// Update wanted targets every 45 seconds to keep it fresh
setInterval(generateWantedTargets, 45000);
generateWantedTargets(); // Initial call
  
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
