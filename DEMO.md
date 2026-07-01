# Claude Code Live Demo Script

**Slot:** 11:30 – 12:30 (60 min)
**Goal:** Show the full potential of Claude Code — from project init to a running full-stack app with live MCP creation and integration.

---

## Before the session starts

- Ask all attendees to open `https://ntfy.sh/ai-for-tech-<date>` on their phone and subscribe (tap the bell icon)
- Have VS Code open and ready, Claude Code installed
- Have a terminal ready in an empty folder

---

## 1. Project init, CLAUDE.md and session principles (8 min)

```bash
mkdir taskboard && cd taskboard && git init
claude
```

Inside Claude Code:
```
/init
```

- Show the generated `CLAUDE.md` — explain it is the project memory Claude reads at every session
- Add one rule live: *"this is a React + Express monorepo — frontend in `/client`, backend in `/server`"*
- Explain: any convention, architecture decision, or constraint goes here and Claude will follow it

### Project folder — `.claude/`

Show the `.claude/` folder created at project root:
```
.claude/
  settings.json    ← permissions, allowed tools, hooks
  commands/        ← project-local slash commands
```
Explain: this folder is committed to git — the whole team shares the same Claude Code configuration.

### Session principles

Name the current session immediately:
```
/rename taskboard-v1
```

Explain the session model:
- Each conversation is a **session** with its own context window
- Sessions are named and stored — you can pick up exactly where you left off
- Next day, or after a context reset:
```
/resume
```
Claude lists recent sessions by name — select `taskboard-v1` and the full context is restored.

**Key message:** Claude Code is not a one-shot tool. It has memory of the project (CLAUDE.md), memory of the session (/resume), and shared team configuration (.claude/). You come back tomorrow and continue where you left off.

---

## 2. Build the app (25 min)

Prompt:
> *"Build a full-stack task board — Express REST API with GET / POST / DELETE /tasks endpoints, React frontend that lists tasks and adds new ones, both wired together and running locally"*

Let Claude run:
- Plans the file structure respecting the CLAUDE.md monorepo rule
- Scaffolds `/client` and `/server`
- Installs dependencies
- Starts both servers
- Self-corrects on any error without being asked

Show the running app in the browser. Add a second prompt:
> *"Add a priority field (low / medium / high) to each task and reflect it in the UI with a color badge"*

Claude patches the API, the model, and the React component in one shot.

**Key message:** Claude works across files, languages, and layers simultaneously. It reads its own errors and self-corrects without being asked.

---

## 3. Claude builds its own MCP server for ntfy.sh (12 min)

Prompt:
> *"Create a FastMCP server that exposes a single tool: post_notification(message: str) that POSTs to https://ntfy.sh/ai-for-tech-<date>. Start it on port 8002."*

Claude writes the server, starts it. Then connect it instantly:

```bash
claude mcp add --scope user --transport http ntfy http://localhost:8002/mcp
```

Immediately prompt:
> *"Use the ntfy tool to announce that the taskboard is live — include the local URL"*

Every attendee's phone buzzes simultaneously.

**Wow point:** Claude just built its own integration tool, connected it in one command, and used it immediately. This is what MCP is — Claude extending itself with any capability in minutes. In Exercise 09 this afternoon you will do exactly this.

---

## 4. Create the `/ship` skill using ntfy (15 min)

Now that the app and ntfy MCP exist, create a skill that chains everything:

Prompt:
> *"Create a Claude Code skill called /ship that: runs tests, lints, commits with a generated message, then uses the ntfy MCP tool to post a release notification with the commit summary"*

Trigger `/ship`:
- Claude runs tests → lints → commits → phones buzz with the release note

**Wow point:** one command replaces the full release workflow. The skill knows about the ntfy MCP tool because it was just connected. Skills and MCP compose naturally.

---

## Key messages to land

| Moment | Message |
|--------|---------|
| CLAUDE.md | Claude remembers your project conventions across sessions |
| Full-stack generation | Claude works across files, languages, and layers simultaneously |
| Self-correction | Claude reads its own errors and fixes them without being asked |
| ntfy MCP server | Claude can build and connect its own tools in minutes |
| `/ship` skill | Repetitive workflows become one command — and compose with MCP tools |
