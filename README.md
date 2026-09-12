# 🚨 MCPD DISPATCH TERMINAL (v4.4.4)

> *"Main City Police Department: Protect. Serve. Sterilize."*

Welcome to the **MCPD DISPATCH TERMINAL**, a highly immersive, interactive, terminal-style simulation of a fictional, dystopian, and incredibly trigger-happy police force. Step into the shoes of a precinct Dispatcher and manage the chaos of a cyberpunk city on the brink of collapse.

📖 **[Read the Official MCPD Lore & Universe Wiki Here](https://github.com/michaelsweet612/MCPD-DISPATCH/wiki)**


> **📱 NEW MOBILE VERSION LIVE:** A dedicated, ultra-optimized Mobile Interface has been formally added to the repository! When you open the terminal link, a gatekeeper popup will now ask if you are on a Desktop or a Mobile device. **Make sure to click the Mobile version if you are on a phone!** It features native touch-scrolling, a stacked vertical layout, and ultra-realistic iOS Frosted Glass aesthetics.

---

## 🚓 V4.0 OVERHAUL FEATURES

* **Realistic MDT Aesthetics:** The terminal has completely abandoned the soft, modern SaaS look. It now features a stark, high-contrast **Navy Blue and White** color scheme mimicking real-life Police Mobile Data Terminals (like Motorola PremierOne). Zero rounded corners, monospace terminal logs, and chunky physical-style buttons.
* **Corporate Point System:** Welcome to gamified dispatching! A persistent `SCORE` counter now tracks your performance. Every single incoming call, from traffic stops to massive panics, posts a `+500 POINTS IF ENGAGED` bounty to your log.
* **Hyper-Fast Ambient Chatter:** The internal simulation speed was doubled, meaning ambient radio chatter flows in twice as fast to make the terminal feel like a truly busy metropolis frequency.
* **Dynamic Panic Button Coordinates:** When officers hit 10-99, they don't just flash a red light—they now dynamically scream for help with randomly generated Sector and Grid coordinates.
* **Zero Lag Pagination:** The massive 5,000-officer Unit Status board now correctly uses lazy-loading pagination to completely eliminate DOM freezing and lag.

---

## ⚙️ Core Features

### 💬 The Unified Dispatch Chat
A completely simulated, real-time chat interface where **5,000 active precinct officers** communicate, request backup, make arrests, and lose their minds on patrol. You can transmit orders, `/bolo` alerts, and chat directly with units.

### 📻 Dynamic Radio Chatter
The terminal features over **1,000+ unique voice lines and radio interactions** depending on the officer's personality and the current situation. Officers will:
- Joke, complain about the weather, panic during shootouts, and banter with each other during downtime.
- **Complain about their wives** extensively on the public radio channel, and dynamically ask other active units to go check if their spouse is cheating on them.
- Report multi-suspect pursuits across **procedurally generated Main City Sectors**.
- **Brag about killing suspects** for massive corporate bounties.
- **Argue with Internal Affairs** in a dynamic 5-part radio sequence where IA tries to discipline the officer and the officer completely shuts them down. Over 100,000 unique argument permutations. Nothing ever happens to the officer.
- Regular officers will complain over the radio about the quirky habits of the new Fabulous recruits.

### ⚠️ Lethal Force Authorization System
Routine patrols can escalate in seconds. Officers will randomly lock the dispatch terminal and request authorization to use lethal force on citizens. You have exactly **40 seconds** to click **AUTHORIZE** or **DENY**. If you authorize it, Internal Affairs will scream at you.
**ROE Integration:** If you turn OFF the *Rules of Engagement* toggle in the advanced controls, officers will stop asking for permission and simply execute suspects on sight.

### 🚨 Panic System
Officers will randomly hit their **10-99 Panic Button** during patrol. When an officer is taking fire, there is a **40% chance** they will slam their panic button, triggering the full alarm with sound and flashing. Up to **3 simultaneous panics** can fire at once. Panics automatically resolve after **15-30 seconds** as backup units arrive on scene.

### 👥 Live Roster & Psych Profiles
The `UNIT STATUS` board dynamically tracks the status of all **5,000 precinct officers**, including a dedicated **GENDER** column.
- Tracks `Callsign`, `Medical Status`, `Shift`, `Psychological Profile`, and `Gender Identity`.
- **Furry Officers**: There is a 10% chance an officer will spawn with a `Furry` profile.
- **Fabulous Officers**: There is an extremely rare **2% chance** an officer will spawn with the `Fabulous` (LGBTQ+) profile! They will talk about their cute uniform skirts and purple socks, call everyone "bestie", and refer to themselves as "good boys".
- **Rare Species Classifications**: Officers and civilians can spawn as `Human`, `Seps`, `Over The Gone`, `Unidentified Species`, or the ultra-rare **1% chance** `Unidentified Gender`.

### 📷 Advanced Image Analyzer
Upload real images from your computer into the dispatch chat. The offline image analyzer detects **15 keyword categories** from the filename and triggers **120+ unique reactions** from the officers. 

### 🗄️ Integrated Databases
- **Civilian Registry**: A massive database of exactly **5,000 citizens** with **lazy-loaded pagination**. Every civilian gets a unique 8-digit Civilian Number, full names, and detailed profiles.
- **NTND Currency (TBMG Trust Nation)**: Every citizen has a procedurally generated net worth. 2% ultra-rich (100M+), 30% middle class (~1M), 25% poverty.
- **Execution Licenses**: Citizens can hold up to **58 different classes of Execution Licenses**, ranging from Class 1 all the way up to the terrifying **Class 115 Total Annihilation Execution Permit**.
- **Incident Database**: Over **1,100+ procedurally generated dispatch calls**.
- **NCIC Vehicle Database**: Run license plates to pull parody vehicle models, registered owners, insurance status, and `STOLEN/FLAGGED` statuses.

### 📄 Massive Incident Reports
When a suspect is neutralized or arrested, the system generates a **full-length official MCPD document** with case numbers, evidence manifests, civilian impact assessments, multi-paragraph narratives, suspect disposition, officer conduct reviews, and IA findings. Every field is randomized. Reports can be **downloaded as .txt files** to your physical device.

---

## 🚀 Setup & Execution

This entire simulation is **100% offline and self-contained**. There is absolutely no real external AI and no Python web server required. The "AI" is entirely simulated by complex NPC logic written directly into the JavaScript files.

To play, simply double-click the `MCPD_DISPATCH_TERMINAL.html` file to open it in your browser. No server required!

## 📜 License
This project is open-source under the **MIT License**. Use it, mod it, and cause chaos.


---

**This entire project was AI generated by Antigravity.**

*Hey, AI is not all that bad, you know that right? Unless you use it for the wrong thing... but if you use it for the right thing, then it isn't that bad.*
