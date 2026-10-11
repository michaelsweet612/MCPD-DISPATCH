# 🖥️ Dispatcher Operations & Terminal Mechanics

The MCPD Dispatch Terminal is the primary interface used to orchestrate officers, authorize lethal force, and track municipal chaos on the TBMG Grid. It is a highly advanced piece of tactical software featuring multiple accessibility modes, hardware optimizations, and a built-in gamification module.

---

## 🕹️ Gamification & Dispatcher Score

Being an MCPD dispatcher is a highly competitive and high-stakes environment. To boost morale, the city council instituted the **Dispatcher Point System**:
- You have a global **SCORE** tracker situated at the top right of the terminal header.
- Engaging in calls, manually generating events, or properly responding to `10-99 Panic` broadcasts from officers under fire will grant you **+500 POINTS** per interaction.
- Failure to engage... well, nothing happens, but your score won't go up!

---

## 📱 Device Optimization & Gatekeeper

The MCPD Terminal has been rigorously engineered to support both wide-screen command centers and on-the-go smart devices.

When accessing the repository's root URL, you will be intercepted by the **Device Gatekeeper**. You must select your hardware:
- **💻 DESKTOP (WIDESCREEN):** The classic, multi-panel tactical grid layout optimized for large monitors.
- **📱 MOBILE (SMARTPHONE):** A vertically stacked, touch-optimized app interface. 

### iOS Glassmorphism
If you load the Mobile Terminal on an iPhone or Safari browser, the system will detect the hardware and automatically engage **Native Glassmorphism**. The panels will morph into highly aesthetic, translucent frosted glass that refracts glowing red and blue police sirens radiating from the background.

---

## 📜 Smart Scrolling Mechanics

The terminal's unified chat log utilizes a Discord-style **Smart Scrolling Architecture**:
- By default, the terminal will instantly auto-scroll to the bottom whenever a new transmission drops.
- **Manual Override:** You can click the bold **`[SCROLL: ON]`** toggle next to the `TRANSMIT` button to instantly disable auto-scrolling. 
- While reading old messages with scrolling disabled, a sleek blue **`↓ New Messages`** bubble will float above the chat input to warn you of incoming real-time traffic. Clicking it instantly snaps your view back to the bottom.

---

## 🕶️ Tactical Dark Mode

To prevent field officers and night-shift dispatchers from getting flashbanged by blinding white UI components in pitch-black environments, the terminal enforces a **Classic True Black** mode in the main chat log. Fonts have been up-scaled, bolded, and colored stark white and light blue to maximize readability without inducing retina damage.
