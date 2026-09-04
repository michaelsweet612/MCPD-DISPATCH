# 🚓 MCPD DISPATCH TERMINAL

> *"Main City Police Department: Protect. Serve. Sterilize."*

Welcome to the **MCPD DISPATCH TERMINAL**, a highly immersive, interactive, terminal-style simulation of a fictional, dystopian, and incredibly trigger-happy police force. Step into the shoes of a precinct Dispatcher and manage the chaos of a cyberpunk city on the brink of collapse.

📚 **[Read the Official MCPD Lore & Universe Wiki Here](https://github.com/michaelsweet612/MCPD-DISPATCH/wiki)**

---

## ⭐ Core Features (v2.57+)

### 💬 The Unified Dispatch Chat
A completely simulated, real-time chat interface where **5,000 active precinct officers** communicate, request backup, make arrests, and lose their minds on patrol. You can transmit orders, `/bolo` alerts, and chat directly with units.

### 📻 Dynamic Radio Chatter
The terminal features over **700+ unique voice lines and radio interactions** depending on the officer's personality and the current situation. Officers will:
- Joke, complain about the weather, panic during shootouts, and banter with each other during downtime.
- **Complain about their wives** extensively on the public radio channel, and dynamically ask other active units to go check if their spouse is cheating on them.
- Report multi-suspect pursuits across **procedurally generated Main City Sectors** (e.g., "Multiple suspects fleeing through Main City Sector 78421").
- Regular officers will complain over the radio about the quirky habits of the new Fabulous recruits.

### ⚠️ Lethal Force Authorization System
Routine patrols can escalate in seconds. Officers will randomly lock the dispatch terminal and request authorization to use lethal force on citizens. You have exactly **40 seconds** to click **AUTHORIZE** or **DENY**. If you authorize it, Internal Affairs will scream at you.
**ROE Integration:** If you turn OFF the *Rules of Engagement* toggle in the advanced controls, officers will stop asking for permission and simply execute suspects on sight.

### 👥 Live Roster & Psych Profiles
The `UNIT STATUS` board dynamically tracks the status of all **5,000 precinct officers**, including a dedicated **GENDER** column.
- Tracks `Callsign`, `Medical Status`, `Shift`, `Psychological Profile`, and `Gender Identity`.
- **Furry Officers**: There is a 10% chance an officer will spawn with a `Furry` profile.
- **Fabulous Officers**: There is an extremely rare **2% chance** an officer will spawn with the `Fabulous` (LGBTQ+) profile! They will talk about their cute uniform skirts and purple socks, call everyone "bestie", and refer to themselves as "good boys".
- **Rare Species Classifications**: Officers and civilians can spawn as `Human`, `Seps`, `Over The Gone`, `Unidentified Species`, or the ultra-rare **1% chance** `Unidentified Gender`.

### 📷 Simulated Image Analyzer
The dispatch terminal features an integrated file upload system (`+` button) allowing you to upload real images from your computer into the chat. Our offline `imageAnalyzer.js` system scans your uploads and dynamically triggers hilarious, unhinged reactions from the officers.

### 🗄️ Integrated Databases
- **Civilian Registry**: A massive, auto-generating database of exactly **5,000 citizens**. Every civilian gets a unique 8-digit Civilian Number (`#CIV-XXXXXXXX`), full First/Middle/Last names, and detailed profiles tracking **Gender Identity**, **Marital Status**, **Terminal IP Address** (Geo-Traced to the Gulf of TBMG), home addresses, careers, criminal statuses, and cybernetic implants.
- **Execution Licenses**: Citizens can hold up to **58 different classes of Execution Licenses**, ranging from Class 1 all the way up to the terrifying **Class 115 Total Annihilation Execution Permit**.
- **Incident Database**: Over **1,100+ procedurally generated dispatch calls**, including bank heists, vehicle pile-ups, 25+ absurd parking violations, and utterly ridiculous calls like "Robbing a rock" and "Holding a puddle of water hostage".
- **Wanted Targets**: A dedicated bounty board tracking actively wanted suspects and their bounties.
- **NCIC Vehicle Database**: Run license plates to pull parody vehicle models, registered owners, insurance status, and `STOLEN/FLAGGED` statuses.

### 🌐 TBMG Grid Geo-Tracking
Every civilian is assigned a procedurally generated, zero-padded terminal IP address (e.g., `005.412.091.992`). Running a Geo-Trace on any IP will route them to a randomized offshore structure in the **Gulf of TBMG**, such as `Deep Sea Server Alpha`, `Offshore Data Rig 7`, or `Floating Server Barge`.

---

## 🎨 Styling
The terminal UI utilizes the **"P Diddy" Luxury Color Palette** (Diddy White, Platinum Gold, Ciroc Blue, and Bad Boy Red) built right into the core CSS variables.

## 🚀 Setup & Execution

This entire simulation is **100% offline and self-contained**. There is absolutely no real external AI and no Python web server required. The "AI" is entirely simulated by complex NPC logic written directly into the JavaScript files.

To play, simply double-click the `MCPD_DISPATCH_TERMINAL.html` file to open it in your browser. No server required!

## 📜 License
This project is open-source under the **MIT License**. Use it, mod it, and cause chaos.
