# 🚀 Repository Maintenance Protocols

## 1. README Synchronization
Whenever you implement new features, mechanic changes, or major UI overhauls, you **MUST** update the `README.md` file to showcase these modern changes before pushing the commit. The README must always serve as an up-to-date advertisement of the project's current capabilities.

## 2. GitHub Release Protocol
Whenever you run a `git commit` and `git tag` to push an update to this repository, you **MUST** immediately create an official GitHub Release for that tag using the GitHub API. 

### Protocol Constraints:
1. **Never forget the release:** The release must be created automatically without the user having to remind you.
2. **Lore-Friendly Tone:** The release notes must be written in the high-effort, dystopian cyberpunk "MCPD" persona. Use emojis, tactical headers, and flavor text.
3. **Execution Method:** You do not have the `gh` CLI tool installed. You must use a Python script with `urllib.request` and the provided authentication token to interact with the GitHub API (`POST /repos/michaelsweet612/MCPD-DISPATCH/releases`).

## 3. Strict Versioning & Cache Control
1. **GitHub Tags:** Pay strict attention to the version numbers when making releases. Always check the previous release tag to ensure semantic versioning is properly incremented. 
   * **FORMAT:** Format all versions using standard semantic versioning `vX.Y.Z` without forced zero-padding (e.g., incrementing `v4.11.5` to `v4.11.6`).
   * **INCREMENT STRATEGY:**
     * **Major (vX.0.0):** Massive changes, complete architectural overhauls, or full redesigns.
     * **Minor (v0.X.0):** General changes, medium-sized features, new UI mechanics, or notable content additions. (e.g., v4.11.5 becomes v4.12.0)
     * **Patch (v0.0.X):** Super small changes, typos, or bug fixes ONLY. Do not use this for features.
2. **Cache Busters:** Whenever JavaScript or CSS files are updated, you **MUST** manually update the cache buster query strings (e.g., ?v=04.08.10 to perfectly match the current GitHub Tag) inside both MCPD_DISPATCH_TERMINAL.html and MCPD_MOBILE_TERMINAL.html. Failing to do so causes stale state bugs for the user.

## 4. Execution & Interaction Protocols

### 4.1. Turn Completion & Idle State
- **NEVER use the `schedule` tool to wait for user input or idle standby.**
- When a task, release, or response is finished, simply output your text response to the user and conclude your turn. The system automatically waits for user input without needing timers.
- Always output clear, user-facing summary text when completing a turn. Never produce empty messages.

### 4.2. Terminal & PowerShell Script Execution
- **Avoid Inline Scripts with Complex Quotes:** In PowerShell, avoid inline `python -c "..."` or `node -e "..."` commands that nest quotes or handle multi-line strings.
- **Use Dedicated Temporary Files:** Always write helper scripts to a temporary file on disk (e.g., `temp_mod.py`), execute the file via the terminal, and delete it immediately after completion.

### 4.3. Cross-Platform DOM Safety (Desktop vs. Mobile)
- **Mandatory Null-Checking:** `MCPD_DISPATCH_TERMINAL.html` (desktop) and `MCPD_MOBILE_TERMINAL.html` (mobile) do not share identical DOM structures.
- Whenever querying or modifying elements in shared scripts (`app_core.js`, etc.), always verify the element exists before accessing properties or adding listeners:
  ```javascript
  const el = document.getElementById('target-id');
  if (el) {
      el.innerHTML = '';
  }
  ```

### 4.4. Tab Navigation Integration Checklist
Whenever introducing a new navigation tab:
1. Add the tab element in both Desktop and Mobile HTML files.
2. Add the corresponding panel container with `display: none` by default.
3. Wire up the click event listener in `app_core.js`.
4. Ensure `hideAllTabs()` explicitly deactivates and hides the new tab and its panel container.

## 5. Visual Immersion & Quality Verification

### 5.1. Cyberpunk Aesthetic & UI Cohesion
- **Strict Visual Cohesion:** Every new panel, card, button, modal, or input must look like it belongs natively inside the MCPD Dispatch Terminal.
- **Use Established Design Tokens:**
  - Leverage project CSS variables (`--bg-main`, `--panel-bg`, `--panel-border`, `--accent-blue`, `--accent-green`, `--panic-red`, `--text-main`, `--text-dim`).
  - Match typography, uppercase headers, tactical borders (solid, dashed, glowing), and retro terminal layouts.
  - Never introduce unstyled, stock browser, or generic UI elements that disrupt the immersion.

### 5.2. Post-Implementation Spelling & Identifier Verification
- **Text & Copy Review:** Review all newly written UI copy, labels, headers, dialogs, and lore text for spelling accuracy and professional polish before submitting.
- **Identifier Consistency:** Cross-check all element IDs, class names, and dataset attributes across both HTML files and JavaScript scripts to guarantee exact casing and spelling matches, preventing `null` property reference errors.

## 6. Project Structure & File Placement
- `js/core/` — Primary engine only (`app_core.js`). Do not place raw line banks or independent subsystems here.
- `js/dialogue/` — Static radio chatter, callout line banks, response dictionaries, and transcriptions.
- `js/events/` — Standalone procedural chat events (`trigger*()` functions: complaints, memes, profanity, debates).
- `js/systems/` — Feature subsystems (DMs, IT support, log exporter, image analyzer, system integrity, audio engine).
- `assets/` — Partitioned strictly into `assets/images/`, `assets/audio/`, and `assets/avatars/furry/`.
- `tools/tests/` — Automated smoke and test scripts. Never commit one-off debug or patch scripts to the root directory.
- `docs/wiki/` — Repository documentation and universe lore guides.
- **Script Order Constraint:** When adding new modules, ensure they are registered in both `MCPD_DISPATCH_TERMINAL.html` and `MCPD_MOBILE_TERMINAL.html` before `app_core.js` to preserve global dependency initialization.



