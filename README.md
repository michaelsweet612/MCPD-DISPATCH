# 🚨 MCPD DISPATCH TERMINAL (v6.4.0)

> *"Main City Police Department: Protect. Serve. Sterilize."*

Welcome to the **MCPD DISPATCH TERMINAL**, a highly immersive, interactive, terminal-style simulation of a fictional, dystopian, and incredibly corrupt cyberpunk police force. Step into the shoes of a precinct Dispatcher and manage the chaos of a city on the brink of collapse.

📖 **[Read the Official MCPD Lore & Universe Wiki Here](https://github.com/michaelsweet612/MCPD-DISPATCH/wiki)**

> **📱 MOBILE & DESKTOP ARCHITECTURE:** We utilize an immersive Single Page Application (SPA) architecture. The main `index.html` portal serves as a Smart Hardware Selector. Clicking your platform will lock your screen behind a secure, fullscreen **Terminal Authentication Overlay**. Enter your dispatcher credentials to bypass firewalls and boot directly into the live grid!

---

## 📈 MCPD EMPLOYEE STOCK OWNERSHIP & AUTO-VESTED PORTFOLIO (v6.4.0)

* **Automatic Department Equity Grant (536 Shares):** Every precinct dispatcher now automatically starts with **536 shares** of official `📈 MCPD STOCK` already in their portfolio on boot. Because dispatchers are the backbone of the department, starting with zero shares made no sense—equity is automatically vested to your terminal.
* **Synchronized Live Portfolio Valuation:** The Stock Account Dashboard now dynamically calculates total portfolio value based on live fluctuating stock prices ($1.072+ Trillion NTND), updating in real-time as market conditions shift.
* **Fully Integrated Trading & Ledger Audit:** Buying and selling functions seamlessly scale from your 536 baseline shares. The official public stock ledger logs the initial Employee Stock Ownership Plan (ESOP) grant on startup.
* **Cross-Platform Parity:** Fully synced across both Desktop and Mobile dispatch terminals.

---

## 🦅 COMPACT OS HEADER & TWO-TIER NAVIGATION DOCK (v6.3.0)

* **Two-Layer Tactical Tab Dock:** Organized all 12 operational dispatch modules across two dedicated 6-tab tiers (Tier 1: `📡 DISPATCH LOG`, `⚨ UNIT STATUS`, `📜 LOGS`, `📋 JOIN MCPD`, `💾 DATABASE`, `💲 STOCK MARKET`; Tier 2: `🗺️ LIVE MAP`, `🆔 CITIZENS`, `🎯 WANTED TARGETS`, `📦 EVIDENCE LOCKER`, `💬 DMs`, `💻 IT SUPPORT`). Guarantees generous click targets, zero clipping, no label abbreviation, and clean alignment across both Desktop and Mobile viewports.
* **Streamlined OS Title Bar:** Vertically compacted `.os-header` banner and HUD status indicators (reducing header height from ~80px to 44px) to maximize real-time viewport height for live dispatch simulations, active CAD unit status trackers, and incident feeds.
* **Synchronized Responsive Viewports:** Desktop delivers full-width dual-tier distribution with custom neon active indicators, while mobile features smooth horizontal glide rails on both tiers with hidden scrollbars for flawless thumb navigation.

---

## 🎯 ERGONOMIC TACTICAL TABS & RADIO MUTE DOCK (v6.2.1)

* **Taller, Click-Friendly Tab Targets:** Expanded vertical tab height to a comfortable 42px touch/click target (`padding: 11px 9px`, `font-size: 0.82rem`) with high-readability typography, eliminating cramped click boxes while maintaining zero scrollbar overflow.
* **Direct Chat Bar Mute Control (`🔇` / `🔊`):** Relocated incoming radio chatter audio controls out of nested Advanced Settings directly into the primary dispatch message bar (`#chat-input-area`). Dispatchers can instantly toggle incoming radio voice broadcasts (Text-to-Speech & tactical squelch) with a single tap directly beside the message prompt.
* **Silent Patrol Default:** Incoming radio chatter defaults automatically to Muted (`🔇`) on system boot to prevent unexpected audio output until explicitly unmuted by the operator.
* **Bi-Directional Command Sync:** Fully synchronized with `/audio on` and `/audio off` terminal commands and visual HUD indicators across both Desktop and Mobile dispatch terminals.

---

## 🗂️ CONSOLIDATED REPOSITORY ARCHITECTURE & UI POLISH

* **Zero-Scrollbar High-Density Tab Bar:** Compacted tab header geometry removes native horizontal scrollbars ("white volume") while tightly condensing spacing across all 12 operational dispatch modules (`DISPATCH LOG`, `UNIT STATUS`, `LOGS`, `JOIN MCPD`, `DATABASE`, `STOCK MARKET`, `LIVE MAP`, `CITIZENS`, `WANTED TARGETS`, `EVIDENCE LOCKER`, `DMs`, `IT SUPPORT`) with zero truncated titles or lost labels across desktop and mobile viewports.

* **Single Dedicated Resource Directory (`project_resources/`):** To eliminate repository clutter and present a minimalist, clean front page on GitHub, all supporting code, assets, styles, documentation, and tooling have been consolidated into a single dedicated folder:
  * `project_resources/js/core/` — Dedicated exclusively to the main dispatch engine (`app_core.js`).
  * `project_resources/js/dialogue/` — Holds all structured chatter line banks, procedural dictionaries, and radio response matrices (`radio_transmissions.js`, `arrival_chatter.js`, `arrest_and_kill_chatter.js`, `gibberish_responses.js`, `chat_reactions.js`, `npc_ai_dictionary.js`, `late_responses.js`).
  * `project_resources/js/events/` — Standalone procedural chat events and department drama (`department_complaints.js`, `meme_events.js`, `profanity_events.js`, `realistic_debates.js`).
  * `project_resources/js/systems/` — Feature subsystems (`audio_engine.js`, `direct_messages.js`, `it_support.js`, `image_analyzer.js`, `log_exporter.js`, `system_integrity.js`).
  * `project_resources/assets/` — Partitioned into typed subfolders (`images/`, `audio/`, `avatars/furry/`).
  * `project_resources/docs/` — Consolidated offline Markdown archive of all universe lore, operations manuals, and contributor guidelines.
  * `project_resources/tools/tests/` — Automated headless Puppeteer verification test suite.
* **Streamlined Front Page:** The repository root is kept strictly focused on the core simulation entry points (`MCPD_DISPATCH_TERMINAL.html`, `MCPD_MOBILE_TERMINAL.html`, `index.html`), essential licensing, and documentation.
* **Audio Subsystem Restoration:** `audio_engine.js` is now officially wired into both Desktop and Mobile dispatch terminals. Dispatchers can toggle live synthesized tactical radio clicks, alert tones, and audio squelch using `/audio on` and `/audio off`.


---

## 🛠️ LATEST MEGACITY & MARTIAL LAW UPDATES

* **The Megacity Expansion:** The physical boundaries of the city map have been increased 5-fold to a massive 15,000x15,000 grid! The Live Map now actively generates and simulates exactly **59,999 individual entities** roaming the island simultaneously. Powered by a new Spatial Partitioning Grid algorithm to render thousands of cars and pedestrians at a flawless 60 FPS.
* **Civil War & Martial Law Event:** If you abuse your citizens and the City Trust Level drops below 40%, the system will automatically declare Martial Law and trigger a Civil War. Heavily armed Military Units (`🪖`) will continuously pour out of the Military Base to pacify the streets until you restore Trust above 80%.
* **Civilian Panic Swarm Logic:** Civilians dynamically react to police presence. If any civilian finds themselves surrounded by a massive cluster of 10 or more Officers or Military units, they will immediately break down in panic and begin sprinting away (`🏃`) at 2.5x speed.
* **The "Corrupt" Officer Personality:** A new archetype joins the force. 'Corrupt' officers completely ignore Rules of Engagement, share a 5x elevated dispatch priority, and have a 100% bribe acceptance rate. If you explicitly deny their bribe request, they will disobey your command in the chat log and take the money anyway.
* **Bizarre Dispatch Overhaul:** The system now generates 236 brand-new, bizarre, and hilarious dispatch events. Look out for "Tickle Tickle McGee" attacking toilets with a pipe wrench, suspects aggressively snapping crayons inside the Bio-Dome trees, or unauthorized Crown Victorias glitch-parking themselves entirely inside solid concrete walls. 
* **Public Information Registry:** A glowing new dashboard inside the Database Tab that tracks live, fluctuating stats for the Megacity population, including Homeowners, Businesses, Alien/Bio-Splicing Experimental Licenses, and an absurdly large counter for Personal Firearms Owned that scales into the hundreds of billions.
* **Dispatch Metrics Leaderboards:** Four massive live leaderboards dynamically track the Top 5 performing officers in the entire 5,000-man precinct. Track top performers by **Points Earned**, **Total Arrests**, **Suspects Killed**, and a brand new purple dashboard for **Total Calls Answered**.
* **Permanent Live Map Landmarks:** The megacity dynamically generates massive permanent `🚓 Police Station` and `🪖 Military Base` zones onto random blocks. Roads have been upgraded with literal Traffic Light emojis (`🚥`) at every intersection!


---

## ⚙️ Core Features

### 📡 The Unified Dispatch Chat
A completely simulated, real-time chat interface where **5,000 active precinct officers** communicate, request backup, make arrests, and lose their minds on patrol. You can transmit orders, `/bolo` alerts, and chat directly with units.

### 🎙️ Dynamic Radio Chatter
The terminal features thousands of unique voice lines and interactions depending on the officer's personality:
- **Complain about their wives** extensively on the public radio channel, and dynamically ask other active units to go check if their spouse is cheating on them.
- **Jealous & Praising Officers:** Officers now have distinct reactions to backup arriving. Sometimes they'll compliment each other's outfits, other times they'll get jealous and angry when another unit beats them to a call.
- **Brag about killing suspects** for massive corporate bounties.
- **Argue with Internal Affairs** in a dynamic 5-part radio sequence where IA tries to discipline the officer and the officer completely shuts them down. Over 100,000 unique argument permutations. Nothing ever happens to the officer.
- Regular officers will complain over the radio about the quirky habits of the new Fabulous recruits.

### 💀 Lethal Force Authorization System
Routine patrols can escalate in seconds. When enabled, officers will randomly lock the dispatch terminal and request authorization to use lethal force on citizens. You have exactly **40 seconds** to click **AUTHORIZE** or **DENY**. If you authorize it, Internal Affairs will scream at you. If you turn OFF the *Rules of Engagement* toggle, officers will simply execute suspects on sight.

### 🚨 Panic System
Officers will randomly hit their **10-99 Panic Button** during patrol. When an officer is taking fire, there is a **40% chance** they will slam their panic button, triggering the full alarm with sound and flashing. Up to **3 simultaneous panics** can fire at once. Panics automatically resolve after **15-30 seconds** as backup units arrive on scene.

### 📋 Live Roster & Psych Profiles
The `UNIT STATUS` board dynamically tracks the status of all **5,000 precinct officers**, including a dedicated **GENDER** column.
- Tracks `Callsign`, `Medical Status`, `Shift`, `Psychological Profile`, and `Gender Identity`.
- **Furry Officers**: There is a 10% chance an officer will spawn with a `Furry` profile.
- **Fabulous Officers**: There is an extremely rare **2% chance** an officer will spawn with the `Fabulous` (LGBTQ+) profile! They will talk about their cute uniform skirts and purple socks, call everyone "bestie", and refer to themselves as "good boys".
- **Rare Species Classifications**: Officers and civilians can spawn as `Human`, `Seps`, `Over The Gone`, `Unidentified Species`, or the ultra-rare **1% chance** `Unidentified Gender`.

---

## 🖥️ Usage
1. Open `index.html` in any modern web browser to access the Hardware Selector.
2. Select your device interface (Desktop/Mobile).
3. Enter any generic dispatch credentials into the Security Overlay to bypass the firewall. *(Note: The login system is purely for roleplay immersion—it is not restricted. You can type absolutely anything into the username and password fields to gain access, as long as they aren't blank!)*
4. Sit back and watch the chaos unfold.
5. Use the bottom command line to chat directly with officers or issue global `/bolo` broadcasts.

## ⚖️ Credits
Created and maintained by the MCPD Engineering Division.
