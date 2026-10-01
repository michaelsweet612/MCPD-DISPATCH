# 🚨 MCPD DISPATCH TERMINAL

> *"Main City Police Department: Protect. Serve. Sterilize."*

Welcome to the **MCPD DISPATCH TERMINAL**, a highly immersive, interactive, terminal-style simulation of a fictional, dystopian, and incredibly trigger-happy police force. Step into the shoes of a precinct Dispatcher and manage the chaos of a cyberpunk city on the brink of collapse.

📖 **[Read the Official MCPD Lore & Universe Wiki Here](https://github.com/michaelsweet612/MCPD-DISPATCH/wiki)**

🎮 **[LAUNCH MCPD DISPATCH TERMINAL](https://michaelsweet612.github.io/MCPD-DISPATCH/MCPD_DISPATCH_TERMINAL.html)**

---

## 📊 Project Stats (v4.22.0)
- **339+ Releases** across 4 major versions
- **5,000 Active Officers** simulated in real-time
- **1,000+ Citizens** in the Civilian Registry with full dossiers
- **59,999 Entities** on the Live City Map simultaneously
- **10,000+ Unique Voice Lines** across all dialogue systems
- **536+ Biometric Traits** in the procedural avatar engine
- **18 JavaScript Modules** powering the simulation
- **127KB+ of HTML** just for the terminal interface

---

## 💥 Core Features

### 📡 The Unified Dispatch Chat
A completely simulated, real-time chat interface where **5,000 active precinct officers** communicate, request backup, make arrests, and lose their minds on patrol. You can transmit orders, `/bolo` alerts, and chat directly with units.

### 🎙️ Dynamic Radio Chatter
The terminal features **thousands of unique voice lines** and interactions depending on the officer's personality:
- **Complain about their wives** extensively on the public radio channel, and dynamically ask other active units to go check if their spouse is cheating on them.
- **Jealous & Praising Officers:** Officers have distinct reactions to backup arriving — sometimes they'll compliment each other's outfits, other times they'll get jealous.
- **Brag about killing suspects** for massive corporate bounties.
- **Argue with Internal Affairs** in a dynamic 5-part radio sequence with over **100,000 unique argument permutations**.
- **Profanity Events, Meme Events, Gibberish, Department Complaints** — all powered by dedicated JavaScript modules.

### 💀 Lethal Force Authorization System
Routine patrols can escalate in seconds. When enabled, officers will randomly lock the dispatch terminal and request authorization to use lethal force on citizens. You have exactly **40 seconds** to click **AUTHORIZE** or **DENY**. If you authorize it, Internal Affairs will scream at you. A **30-second cooldown** prevents officers from spamming requests back-to-back. If you turn OFF the *Rules of Engagement* toggle, officers will simply execute suspects on sight.

### 🚔 Arrest Authorization System
A separate interactive modal — every once in a while, an officer will request permission to arrest a citizen. You decide whether the arrest is justified or not!

### 🚨 Panic System
Officers will randomly hit their **10-99 Panic Button** during patrol. When an officer is taking fire, there is a **40% chance** they will slam their panic button, triggering the full alarm with sound and flashing. Up to **3 simultaneous panics** can fire at once.

### 📋 Live Roster & Psych Profiles
The `UNIT STATUS` board dynamically tracks the status of all **5,000 precinct officers**, including a dedicated **GENDER** column, **CRUISER PLATE** assignments, and **Nicknames**.
- Tracks `Callsign`, `Medical Status`, `Shift`, `Psychological Profile`, `Gender Identity`, and `Cruiser Plate`.
- **Furry Officers (10% chance):** Spam the radio with "UwU" chat lines, beg for head rubs, and act incredibly weird on patrol.
- **Fabulous Officers (2% chance):** Talk about their cute uniform skirts, call everyone "bestie", and refer to themselves as "good boys".
- **Rare Species:** Officers and civilians can spawn as `Human`, `Seps`, `Over The Gone`, `Unidentified Species`, or the ultra-rare **1% chance** `Unidentified Gender`.

---

## 💬 Secure DMs System (v4.21+)
A full **iMessage-style** direct messaging interface:
- **Personal DMs Tab** with split-view roster + 1-on-1 chat.
- **Typing Indicators** (bouncing three dots), **Read Receipts** ("Delivered"), and **Smart Sorting** (newest conversations float to top).
- **Officer AI & Secrets:** Officers bypass main dispatch to DM you off-the-record secrets, requests, and complaints. Messages are personality-driven (Joker tells jokes, Paranoid sends conspiracies, Aggressive threatens you).
- **500+ DM Features** including Voice Memos, GPS Location Pings, Cyber-Credits Transfer, and more.
- **10,000+ Dialogue Lines** wired directly from the transmissions database.
- **Universal File Uploads** — send PDFs, ZIPs, audio/video, and any file type.

---

## 🏙️ The Living City Simulation (v4.15+)
The old static radar has been replaced by a massive, infinitely scrolling, fully simulated city:
- **59,999 Entities** — civilians and officers roaming a **15,000×15,000 coordinate island** simultaneously.
- **Camera Controls:** Mouse Wheel to zoom, Middle-Click Drag or Shift+Left-Click to pan.
- **Traffic AI & Avoidance** with Traffic Light emojis (`🚥`) at every intersection.
- **Permanent Landmarks:** Dynamically generated `🚓 Police Stations` and `🪖 Military Bases`.
- **Spatial Grid Optimization** prevents your browser from catching fire.

### ⚔️ Tactical Map Zoning (v4.12+)
Dispatchers can draw tactical zones directly on the map:
- **☣️ Quarantine Zone** — civilians get infected, turn green, crawl.
- **🚨 Riot Control** — police speed doubles, civilians instantly arrested.
- **🎯 Sniper Nest** — hostile civilians are instantly headshot.
- **🛑 Traffic Checkpoint** — all vehicles stop.
- **🏃 Evacuation Zone** — civilians sprint at 300% speed.
- **💥 EMP Blast** — vehicles disabled.
- **🪖 Military Base** — civilians entering are **instantly killed**.
- **And more** — 16 total zoning abilities.

### ⚔️ Martial Law & Civil War (v4.16+)
If you arrest too many innocents and City Trust drops below 40%, the system declares **Martial Law** and triggers a full **Civil War**. Military Units (`🪖`) deploy to "pacify" the streets. Civilians surrounded by 10+ units will panic and sprint away.

---

## 🗄️ Integrated Databases

- **Civilian Registry:** 1,000+ citizens with unique 8-digit Civilian Numbers (`#CIV-XXXXXXXX`), full First/Middle/Last names, detailed profiles, criminal statuses, cybernetic implants, and hardcoded VIP citizens.
- **Wanted Targets:** A dedicated bounty board with randomly generated infractions including **War Crimes**.
- **NCIC Vehicle Database:** Highly illogical parody vehicle models (e.g., Fjord Motor Co. Exploder Turbo-Glider Nuclear V8), insurance tracking, `STOLEN/FLAGGED` statuses, and **police cruiser plate lookups** (type `MCPD-XXXX` to find the assigned officer).
- **Municipal License Checker:** Absurd city licenses (e.g., Sentient Meat Processing Permit) and unhinged violations. Dispatch officers to failing locations.
- **Active Warrants Database**
- **Firearm Registry**
- **Syndicate Intel**

---

## 🧬 Biometric Engine v2.0 (v4.20+)
Every citizen gets a **procedurally generated SVG mugshot**:
- **536+ unique trait combinations** across 7 species (Human, Alien Grey, Alien Blue, Alien Green, Reptilian, Android, Mutant).
- **Hyper-realistic hair:** 100-400 individual strands generated per citizen.
- **Stubble, scales, panel lines, LEDs, antennae** — all mathematically computed.
- **Status-colored borders** on mugshots (Green = Innocent, Red = Wanted).

---

## 📈 Corporate Stock Market
A fully simulated stock market with **56 megacorporation dashboards** rendered on HTML5 Canvas:
- **2-column grid layout** with live price charts.
- **Geometric arrowheads** using `Math.atan2()` trigonometry.
- **Dynamic color interpolation** based on percentage change.
- Updates every 3.5 seconds.

---

## 📊 Additional Systems
- **📊 Public Opinion & Trust Ratings:** Live civilian feedback system that pulls reviews from actual citizens based on their criminal status.
- **📊 Officer Metrics & Leaderboards:** 4 leaderboards tracking kills, arrests, calls answered, and more.
- **💻 IT Support:** Officers submit hilarious IT tickets that you can resolve. Features a notification badge system.
- **📸 Image Analyzer:** Upload real images via the `📎` button — officers react dynamically based on what you send.
- **📻 Transmissions Database:** Thousands of unique voice lines in `transmissions.js` plus dedicated modules for chat lines, debates, reactions, profanity events, meme events, and department complaints.
- **🛡️ Check System Diagnostics:** Self-monitoring for syntax errors, unhandled rejections, and DOM corruption.
- **💾 Export System:** Export your dispatch logs to `.txt`, `.png`, or `.pdf`.
- **🎨 Theme Engine:** 6 themes — Modern Dark, OLED Black, Light Mode, Rainbow (Prismatic Protocol), Pride, and Custom.
- **📖 In-Terminal Operator Manual:** A full multi-page guide embedded directly in the terminal.
- **🔐 Cyberpunk Login Screen:** 3D perspective grid, scanning laser, glassmorphism UI, and MCPD eagle insignia.

---

## 🖥️ Usage
1. Open the terminal via the link below.
2. Select your device interface (Desktop/Mobile).
3. Enter any credentials into the Security Overlay to bypass the firewall. *(The login system is purely for roleplay immersion — type anything!)*
4. Sit back and watch the chaos unfold.
5. Use the bottom command line to chat directly with officers or issue global `/bolo` broadcasts.

## 🎮 Play Now
**[LAUNCH MCPD DISPATCH TERMINAL](https://michaelsweet612.github.io/MCPD-DISPATCH/MCPD_DISPATCH_TERMINAL.html)**

## 🛠️ Version History & Releases
This project is actively maintained with **339+ releases** and counting. Check the [Releases](https://github.com/michaelsweet612/MCPD-DISPATCH/releases) tab for detailed patch notes on every single update, hotfix, and new feature.

---

## 🔬 Deep Dive: Systems Architecture

For the engineers who demand to know exactly how this dystopian nightmare functions under the hood.

### 🧠 Biometric Engine v2.0 (Procedural SVG Avatar Generation)
* Constructs every citizen mathematically using inline `<svg>` elements injected directly into the DOM.
* **Skin Tones:** Mapped to a `<radialGradient>` with light source at `cx="30%" cy="30%"`, ensuring shadow falls across the lower right jawline.
* **Hair/Stubble Loops:** `for` loop generates 100-400 individual `<path>` strokes. Stubble calculates 150 random points constrained within `x: 35-65` and `y: 65-80`.
* **Alien Scales:** 150 overlapping `<ellipse>` tags across the forehead for reptilian textures.
* **Neck Anchoring:** Hardcoded `d="M40,75 Q50,90 60,75 L55,100 L45,100 Z"` curve to prevent the "floating head" glitch.

### 📈 Stock Market Canvas Rendering
* HTML5 `<canvas>` with 40-tick history array updating every 3.5 seconds.
* 3 horizontal grid lines at `canvas.height * (1/4)`, `(2/4)`, `(3/4)` using `rgba(255, 255, 255, 0.05)`.
* Arrowhead tip uses `Math.atan2()`, `Math.cos()`, `Math.sin()` with `Math.PI / 7` radian angle.
* Color interpolation: `> 2%` → `#006400`, `< -1.5%` → `#f44336`.

### 💀 Lethal Force Attribution
* `updateCitizenStatus('Deceased')` prompts for officer callsign via `window.prompt()`.
* Cross-referenced against the 5,000-man roster array. If matched, `u.kills` is incremented and the Top 5 Kills Leaderboard is rebuilt.
* Corrupt IA events secretly hook into `window.recordOfficerStat(sender, 'kill')` to auto-award kills.

### 🖥️ Chat Polling & DOM Management
* `unifiedLogEl.children.length` capped at 100 nodes. Excess triggers `removeChild(firstChild)` to prevent memory leaks.
* `/bolo` command applies `boxShadow: inset 0 0 50px rgba(244,67,54,0.5)` for 2,000ms tactical alert flash.

---

*Good luck, Dispatch. The city needs you.*

⚖️ Created and maintained by the MCPD Engineering Division.
