# 🚀 Repository Maintenance Protocols

## 1. README Synchronization
Whenever you implement new features, mechanic changes, or major UI overhauls, you **MUST** update the `README.md` file to showcase these modern changes before pushing the commit. The README must always serve as an up-to-date advertisement of the project's current capabilities.

## 2. GitHub Release Protocol
Whenever you run a `git commit` and `git tag` to push an update to this repository, you **MUST** immediately create an official GitHub Release for that tag using the GitHub API. 

### Protocol Constraints:
1. **Never forget the release:** The release must be created automatically without the user having to remind you.
2. **Lore-Friendly Tone:** The release notes must be written in the high-effort, dystopian cyberpunk "MCPD" persona. Use emojis, tactical headers, and flavor text.
3. **Execution Method:** You do not have the `gh` CLI tool installed. You must use a Python script with `urllib.request` and the provided authentication token to interact with the GitHub API (`POST /repos/michaelsweet612/MCPD-DISPATCH/releases`).
