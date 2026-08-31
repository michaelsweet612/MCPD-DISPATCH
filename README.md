# MCPD DISPATCH TERMINAL

Welcome to the **MCPD DISPATCH TERMINAL**. 

This project is a terminal-style simulation of the Main City Police Department (MCPD) - a highly fictionalized, dystopian, and incredibly trigger-happy police force. 

For more detailed information and lore about the MCPD universe, please visit this link:
[MCPD Lore & Information](https://notebook.google.com/notebook/64b934e5-bbc4-4658-8f94-57d2184adaf2)

## 🏢 Features & How It Works

The MCPD DISPATCH TERMINAL runs entirely in your browser and simulates a live, chaotic police dispatch radio channel. It has been massively expanded with deep, interlocking systems.

### 📻 The Radio Chatter & NPC Engine
- **Live Radio Chatter:** Exactly 58 active-duty officers patrol the city simultaneously. Officers will automatically respond to dispatch calls, request backup, and complain about their shifts over the radio.
- **Dynamic Personalities:** Every officer has a unique psychological profile (Aggressive, Rookie, Veteran, Lazy, Paranoid, Sarcastic, By-The-Book, Idealistic). Their personality dictates how they respond to you, how they handle suspects, and what they talk about.
- **Officer Cross-Talk:** If you talk to an officer, there is a 55% chance a DIFFERENT officer on the channel will jump in and react to the conversation based on their own personality!

### 🕵️ The Citizen Database
- **1,000 Fully Tracked Citizens:** The terminal tracks 1,000 unique citizens. Each has a generated name, Citizen ID (CID), Date of Birth, Registered Address, and Cyberware Traits.
- **Psych Profiles:** Every citizen has a hidden Psychological Profile (Passive, Panicked, Partially Aggressive, Aggressive) that dictates how they will react if confronted by the police.
- **Crime Histories:** Citizens have dynamic crime histories. Citizens with multiple warrants are automatically flagged as "Wanted" by the system when you boot it up.
- **Background Encounters:** Officers on patrol will randomly stop citizens in the database. Aggressive cops might randomly flag a citizen as Suspicious or Wanted, while Nice cops will just let them go.

### 🚨 Crime Events & Warrants
- **Automated Crime Events:** Over 100 unique crime reports (from traffic accidents to temporal anomalies) will flash across the terminal.
- **Suspect Integration:** A random citizen from the database is pulled into every major crime event as the prime suspect.
- **4-Part Shootouts:** If a crime escalates into a firefight, it triggers a massive 4-part radio conversation. The primary officer screams they are under fire, their backup checks in, the primary officer gives a highly detailed resolution of the gunfight, and the backup calls for EMS.
- **Live Arrests & Casualties:** When an officer resolves a crime, they will specifically name the citizen they arrested or killed, and that citizen's status will instantly update to 'Arrested' or 'Deceased' in the database!
- **Interactive Warrant Execution:** You can open a citizen's dossier and click **EXECUTE WARRANT**. This will dispatch an officer to their house. The outcome is totally unpredictable and depends on the Citizen's Psych Profile crossed with the Officer's Morality (e.g., Corrupt/Reckless cops might shoot a fleeing suspect in the back, while a Rookie will arrest them safely).

### 🖥️ Dispatcher Controls
- **Dispatch Input:** You act as the dispatcher. You can type commands into the bottom input field to communicate with the units. Be careful—if you type gibberish, they will call you out.
- **10-99 Panics:** If an officer gets into a massive firefight or you trigger a manual panic, a realistic siren will blare and the terminal will flash red until the panic is manually cleared.
- **Master Callout Override:** An advanced dropdown menu allows you to manually trigger any of the 100+ specific crimes at will.

## ⚙️ Usage

Simply open `index.html` in any modern web browser to start the simulation. 
