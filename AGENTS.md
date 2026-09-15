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
   * **MANDATORY FORMAT:** You **MUST** format all versions strictly as `v00.00.00`. Every number (major, minor, patch) must be zero-padded to two digits (e.g., incrementing `v04.08.09` to `v04.08.10`). Never use unpadded numbers like `v4.8.9`.
   * **INCREMENT STRATEGY:**
     * **First Number (vXX.00.00):** Massive changes, complete architectural overhauls, or full redesigns.
     * **Middle Number (v00.XX.00):** General changes, medium-sized features, new UI mechanics, or notable content additions. (e.g., v04.08.35 becomes v04.09.00)
     * **Last Number (v00.00.XX):** Super small changes, typos, or bug fixes ONLY. Do not use this for features.
2. **Cache Busters:** Whenever JavaScript or CSS files are updated, you **MUST** manually update the cache buster query strings (e.g., ?v=04.08.10 to perfectly match the current GitHub Tag) inside both MCPD_DISPATCH_TERMINAL.html and MCPD_MOBILE_TERMINAL.html. Failing to do so causes stale state bugs for the user.
