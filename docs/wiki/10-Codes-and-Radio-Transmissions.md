# 📻 10-Codes & Radio Transmissions

## 📢 MCPD 10-Code Reference

| Code | Meaning | Severity |
|------|---------|----------|
| **10-4** | Acknowledged / Copy | Standard |
| **10-6** | Busy / On Scene | Low |
| **10-7** | Out of Service / Off Shift | Routine |
| **10-8** | In Service / Available | Routine |
| **10-15** | Civil Disturbance / Riot | Medium |
| **10-31** | Robbery in Progress | Medium |
| **10-33** | Officer in Distress / Emergency | High |
| **10-43** | Suspicious Person / Activity | Low |
| **10-50** | Motor Vehicle Collision | Medium |
| **10-54** | Possible Dead Body | High |
| **10-71** | Shots Fired / Active Gunfire | High |
| **10-89** | Bomb Threat | Critical |
| **10-99** | OFFICER DOWN / PANIC | Emergency |

---

## 🚨 Panic System (v2.68+)
- Officers randomly hit their **10-99 Panic Button** during patrol.
- When an officer takes fire ("SHOTS FIRED!"), there is a **40% chance** they slam their panic button.
- Up to **3 simultaneous panics** can fire at once.
- Panics **auto-resolve after 15-30 seconds** as a backup unit arrives on scene.

---

## 📸 Advanced Image Analyzer (v2.70+)
Dispatchers can click the **`+` Upload Button** in the chat bar to attach images from their local computer:
- The offline `imageAnalyzer.js` system detects **15 keyword categories** from filenames including: weapons, vehicles, suspects, crime scenes, animals, food, selfies, memes, landscapes, screenshots, maps, dark/creepy images, people, inappropriate content, and generic.
- Each category has **8 unique reactions**, plus 25 generic fallbacks — totaling **120+ unique officer responses**.
- **40% chance** a second officer chimes in with their own take.
- **15% chance** a third officer adds something completely off-topic (usually about their wife).

---

## 🩸 Corrupt Officer Chatter (v2.65+)
Officers will openly brag about killing suspects for massive corporate bounties on the public radio channel:
- *"Hell yeah, just zeroed a suspect. Corporate is gonna pay me 50 billion NTND for this one."*
- *"Target neutralized. Invoice sent to Corporate. I love this job."*

## 🚨 Internal Affairs Arguments (v2.67+)
When a corrupt officer brags about a kill, a **5-part argument sequence** triggers:
1. **Officer** brags about the kill.
2. **Internal Affairs** scolds them ("These actions reflect our entire force!").
3. **Officer** refuses ("Hell no, I get paid 2 billion NTND to do this.").
4. **IA** weakly responds ("Well you can't do that, we don't like it.").
5. **Officer** shuts them down ("What are you going to do, idiot?").

Over **100,000 unique argument permutations**. Nothing ever happens to the officer.

---

## 📻 Transmissions Engine
Driven by `transmissions.js`, officers feature over **1,000+ dynamic radio voice lines** including:
- Standard patrol chatter and 10-code callouts
- Multi-suspect Main City pursuit reports with dynamic sector numbers
- Wife complaints and spouse surveillance requests
- Complete unhinged nonsense (e.g. *"I am requesting permission to arrest the concept of time."*)
- Corporate bounty bragging after kills

## 📄 Incident Report System (v2.69+)
When a suspect is neutralized or arrested, the system generates a **full-length official MCPD document** including:
- Case number, precinct, district, sector, date/time
- Multi-paragraph incident narrative (3 lethal variants, 3 non-lethal variants)
- Evidence manifest (5-12 randomized items with serial numbers)
- Civilian impact assessment (witnesses, injuries, property damage in NTND)
- Suspect disposition (booking info or cause of death)
- Officer conduct review and IA findings (always dismissed)
- Reports can be **downloaded as .txt files** to your physical device via the DOWNLOAD button.


## 🗣️ Text-To-Speech Dispatch Alerts (v2.73+)
Whenever a new priority call drops into the system, an automated robotic female dispatch voice will read out the call details over your computer's audio. The system announces the sector, the crime, the required number of units, and the 15-point corporate bonus for engaging the call.

## 💬 Dynamic Banter & Insults (v2.73+)
Added thousands of new dynamic conversation permutations to the radio system:
- **Compliments:** Officers will randomly praise each other's uniforms, boots, and tactical gear, frequently calling each other 'good boy' or praising their superiors.
- **Sergeant Insults:** There is a 30% chance a banter sequence turns hostile. An officer will openly insult a Sergeant (e.g. 'Sgt. Harrison is completely useless'). The Sergeant will reply: 'Hey, you know why I'm better than you? Because I outrank you.' The officer will then give up: 'I'm not going to continue with this.'
