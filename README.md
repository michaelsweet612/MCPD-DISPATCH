# 🚓 MCPD DISPATCH TERMINAL

> *"Main City Police Department: Protect. Serve. Sterilize."*

Welcome to the **MCPD DISPATCH TERMINAL**, a highly immersive, interactive, terminal-style simulation of a fictional, dystopian, and incredibly trigger-happy police force. Step into the shoes of a precinct Dispatcher and manage the chaos of a cyberpunk city on the brink of collapse.

📚 **[Read the Official MCPD Lore & Universe Wiki Here](https://github.com/michaelsweet612/MCPD-DISPATCH/wiki)**

---

## ⭐ Core Features (v2.40+)

### 💬 The Unified Dispatch Chat
A completely simulated, real-time chat interface where 58 active precinct officers communicate, request backup, make arrests, and lose their minds on patrol. You can transmit orders, `/bolo` alerts, and chat directly with units.

### 📻 Dynamic Radio Chatter
The terminal features over **340+ unique voice lines and radio interactions** depending on the officer's personality and the current situation. Officers will joke, complain about the weather, panic during shootouts, banter with each other during downtime, and act completely unhinged during high-stress situations. Regular officers will even complain over the radio about the quirky habits of the new recruits.

### ⚠️ Lethal Force Authorization System
Routine patrols can escalate in seconds. Officers will randomly lock the dispatch terminal and request authorization to use lethal force on citizens (either because a citizen requested it, or simply because the officer is annoyed). You have exactly **40 seconds** to click **AUTHORIZE** or **DENY**. If you authorize it, Internal Affairs will scream at you. 
**ROE Integration:** If you turn OFF the *Rules of Engagement* toggle in the advanced controls, officers will stop asking for permission and simply execute suspects on sight.

### 👥 Live Roster & Psych Profiles
The `UNIT STATUS` board dynamically tracks the status of all 58 precinct officers, now including a dedicated **GENDER** column.
- Tracks `Callsign`, `Medical Status`, `Shift`, `Psychological Profile`, and `Gender Identity`.
- **Furry Officers**: There is a 10% chance an officer will spawn with a `Furry` profile! They will spam the radio with "UwU" chat lines, beg for head rubs, and act incredibly weird on patrol.
- **Fabulous Officers**: There is an extremely rare **2% chance** an officer will spawn with the `Fabulous` (LGBTQ+) profile! They will talk about their cute uniform skirts and purple socks, call everyone "bestie", hit on the male officers, and refer to themselves as "good boys". Regular officers will complain about them in the idle banter chat.
- Strict **54/4 Shift Mandate**: Exactly 4 officers are mandated to be off-duty at any given time. Shifts automatically rotate every 60 seconds as officers clock in and out.

### 📷 Simulated Image Analyzer
The dispatch terminal features an integrated file upload system (`+` button) allowing you to upload real images from your computer into the chat. Our offline `imageAnalyzer.js` system scans your uploads and dynamically triggers hilarious, unhinged reactions from the officers based on what you send them. 

### 🗄️ Integrated Databases
- **Civilian Registry**: A massive, auto-generating database of exactly 1,000 citizens. Every civilian gets a unique 8-digit Civilian Number (`#CIV-XXXXXXXX`), full First/Middle/Last names, and detailed profiles tracking **Gender Identity**, home addresses, careers, criminal statuses, and cybernetic implants. 
- **Incident Database**: Over **1,100+ procedurally generated dispatch calls**, ranging from intense Bank Heists, Jewelry store robberies, and complex vehicle pile-ups, to utterly ridiculous calls like "Robbing a rock", "Holding a puddle of water hostage", and "Illegal distribution of unauthorized purple knee-socks".
- **Wanted Targets**: A dedicated bounty board tracking actively wanted suspects and their bounties.

---

## 🎨 Styling
The terminal UI utilizes the **"P Diddy" Luxury Color Palette** (Diddy White, Platinum Gold, Cîroc Blue, and Bad Boy Red) built right into the core CSS variables.

## 🚀 Setup & Execution

Since the system heavily relies on `fetch()` to load the localized `crimes.json` and AI dependencies, it **must be run on a local web server**. You cannot simply double-click the `MCPD_DISPATCH_TERMINAL.html` file in your browser.

**Using Python:**
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000/MCPD_DISPATCH_TERMINAL.html`.

## 📜 License
This project is open-source under the **MIT License**. Use it, mod it, and cause chaos.
