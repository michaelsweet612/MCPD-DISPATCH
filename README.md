# 🚨 MCPD DISPATCH TERMINAL (v4.20.2)

> *"Main City Police Department: Protect. Serve. Sterilize."*

Welcome to the **MCPD DISPATCH TERMINAL**, a highly immersive, interactive, terminal-style simulation of a fictional, dystopian, and incredibly corrupt cyberpunk police force. Step into the shoes of a precinct Dispatcher and manage the chaos of a city on the brink of collapse.

📖 **[Read the Official MCPD Lore & Universe Wiki Here](https://github.com/michaelsweet612/MCPD-DISPATCH/wiki)**

> **📱 MOBILE & DESKTOP ARCHITECTURE:** We utilize an immersive Single Page Application (SPA) architecture. The main `index.html` portal serves as a Smart Hardware Selector. Clicking your platform will lock your screen behind a secure, fullscreen **Terminal Authentication Overlay**. Enter your dispatcher credentials to bypass firewalls and boot directly into the live grid!

---

## 🛠️ LATEST MEGACITY & MARTIAL LAW UPDATES (v4.20.2)

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


---

## 🔬 DEEP DIVE SYSTEMS ARCHITECTURE & MINUTIAE

For the engineers who demand to know exactly how this dystopian nightmare functions under the hood, here are the most excruciatingly microscopic details of the simulation's backend. Nobody will read this, but the corporate overlords mandated it be documented to pass ISO-9001 compliance.

### 🧠 The Biometric Engine v2.0 (Procedural SVG Avatar Generation)
* The new 536-trait Biometric Engine does not use pre-rendered PNGs. It constructs every citizen mathematically using inline `<svg>` elements injected directly into the DOM.
* **Skin Tones:** The skin tone array (`#FFE0BD`, `#FFCD94`, `#EAC086`, `#FFAD60`, `#FFE39F`, `#D3A87C`, `#C68642`, `#8D5524`, `#3E2723`, `#263238`, `#1B5E20`) is mapped to a radial gradient (`<radialGradient>`) that places the light source strictly at `cx="30%" cy="30%"`, ensuring that the shadow realistically falls across the lower right jawline. 
* **Procedural Hair/Stubble Loops:** Hair isn't a polygon. The engine runs a `for` loop that generates between `100` and `400` individual `<path>` strokes or `<circle>` elements. If the citizen rolls the `Stubble` trait, the engine painstakingly calculates `150` random coordinate points constrained precisely within `x: 35-65` and `y: 65-80` to simulate a 5 o'clock shadow. 
* **Alien Scales:** If a citizen is classified as an Extraterrestrial, the skin color forces a green/blue palette and the system generates `150` overlapping `<ellipse>` tags across the forehead to simulate reptilian scales.
* **Neck Anchoring Alignment:** To prevent the horrific "floating head" glitch of v4.19, the neck SVG `<path>` is hardcoded with a `d="M40,75 Q50,90 60,75 L55,100 L45,100 Z"` curve, perfectly anchoring the clavicle to the torso bounding box.

### 📈 Stock Market Canvas Rendering
* The corporate stock charts are rendered on a standard HTML5 `<canvas>`.
* The `drawStockChart()` function utilizes a 40-tick history array that updates exactly every 3.5 seconds (`setInterval(updateStockMarkets, 3500)`).
* **Grid Lines:** The chart renders exactly 3 horizontal background grid lines using `rgba(255, 255, 255, 0.05)`. They are mathematically spaced at `canvas.height * (1/4)`, `(2/4)`, and `(3/4)`.
* **The Arrowhead:** The tip of the stock chart line isn't just a blunt vector. It uses trigonometric functions (`Math.atan2()`, `Math.cos()`, `Math.sin()`) to calculate the exact slope angle between the 39th and 40th tick. It then draws an isosceles triangle extending exactly `12` pixels backward at a precise angle of `Math.PI / 7` radians to form the arrowhead.
* **Color Interpolation:** The stock chart gradient dynamically adjusts its color based on percentage change (`pctChange`). `> 2%` triggers `#006400`, `< -1.5%` triggers `#f44336`. The gradient fill sets the top opacity stop to `66` (approx. 40% hex opacity) and the bottom to `00` (transparent).

### 💀 Lethal Force Attribution Mechanics
* The `updateCitizenStatus('Deceased')` function doesn't just change text. It prompts the dispatcher via a synchronous `window.prompt()` for the exact alphanumeric `Callsign` of the officer who secured the kill.
* This is cross-referenced against the 5,000-man `roster` array in memory. If a match is found using `.find(x => x.id === callsign.toUpperCase())`, the `u.kills` property is incremented and the Top 5 Kills Leaderboard HTML is entirely rebuilt via `window.updateOfficerLeaderboard()`.
* **Corrupt IA Auto-Increment:** When the 5% chance `triggerCorruptIASequence()` event fires (where an officer boasts "Hell yeah, I just killed somebody"), the system secretly hooks into `window.recordOfficerStat(sender, 'kill')` at the exact millisecond the chat is printed, awarding them points on the board.

### 🖥️ Dispatch Terminal Chat Polling
* The `unifiedLogEl.children.length` is strictly capped at `100` nodes. The moment it hits 101, `unifiedLogEl.removeChild(unifiedLogEl.firstChild)` fires to prevent severe DOM memory leaks during high-traffic 10-999 Mayhem events.
* When the user types `/bolo [message]`, the system applies an inline CSS `boxShadow: inset 0 0 50px rgba(244,67,54,0.5)` to the entire chat container for exactly 2,000 milliseconds to simulate a red tactical alert flash.

