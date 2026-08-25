# Session Summary

- **2026-08-25**: Implemented full Basement Dwellers Wiki from `.agents/plans/plan.md` via sub-agents. Astro v5 + Tailwind v4 static site, 7 pages (`/`, `/tutorial`, `/blue-map`, `/faq`, `/about`, `/tabs`, `/features`), lamplit-basement theme (umber bg + lantern amber + moss), zero JS except CopyField clipboard snippet; tabs/accordions/hamburger are pure CSS. Tutorial content sourced from `~/Project/BasementWeb/install-guide-mods.txt`. Build + astro check pass; desktop/mobile QA via Playwright screenshots. Live values set: serverIp `basement.atbp.fun`, blueMapUrl `http://basement.atbp.fun:26122`, discordUrl `discord.gg/M3t4ttvFBe`, githubUrl `github.com/RenderHam/Basement-Dwellers-Wiki`. Crew updated to real members (Keyam/Owner, ALovelyTrash/Admin, Hikari/Mod) + 1 vacant hiring slot. 7 server features added with `astro:assets` placeholder system (drop `.webp` matching feature id in `src/assets/features/` to auto-swap). **Remaining TODOs**: drop real feature screenshots; review FAQ/rules copy in `src/data/*.ts`.

# CRITICAL RULES - MUST FOLLOW

## RESPONSES

- Keep responses concise and to the point - unless the user asks otherwise

## PLANNING MODE

- Always ask clarifying questions
- Never assume design, tech stack or features
- Use deep-dive sub-agents to assist with research
- Use deep-dive sub-agents to review the different aspects of your plan before presenting to the user

## CHANGE / EDIT MODE

- Never implement features yourself when possible - use sub-agents!
- Identify changes from the plan that can be implemented in parallel, and use sub-agents to implement the features efficiently
- When using sub-agents to implement features, act as a coordinator only
- Use the best model for the task - premium models for complex tasks (like coding) and mid-tier models for simpler tasks, like documentation

## GIT (user-owned, token-saving rule)

- The agent NEVER runs `git add`, `git commit`, `git push`, `git tag`, rewrite/force-push, or any release command — the user stages, commits, tags, and pushes manually unless the user personally ask to.
- After finishing code, summarize the change (files touched, and a suggested commit message if useful) and stop. The user decides when/what to commit.
- Exception: the agent runs `git status`/`git diff`/`git log` (read-only inspection) whenever needed to answer questions.

## TESTING

- The project has no test framework configured; before adding tests, ask the user whether to add one
- Never assume your changes simply work — code-review carefully, then let the user compile and playtest (agent may scratch-compile in /tmp when unsure)
- If the user can't verify, say so explicitly

## SESSION MEMORY

- Keep the "Session Summary" section at the top of this file up to date
- Record newly learned lessons with `/remember`
