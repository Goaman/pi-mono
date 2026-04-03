# Context Files

Pi automatically loads context from markdown files to provide the agent with project-specific instructions, conventions, and system prompts.

## AGENTS.md

At startup, pi searches for `AGENTS.md` (or `CLAUDE.md`) and concatenates their content to the user's initial prompt.

### Search Order

Pi walks up from the current working directory to the root, loading all matching files found along the path:

1. `~/.pi/agent/AGENTS.md` (Global instructions)
2. `../../AGENTS.md` (Parent directories)
3. `./AGENTS.md` (Current project directory)

### Usage

Use `AGENTS.md` to document:
- Project structure and architecture
- Coding conventions and style guides
- Common commands and build processes
- Known issues or "gotchas"

## System Prompt

You can replace or extend pi's default system prompt by creating specific markdown files.

### SYSTEM.md

Replaces the entire default system prompt.
- **Project**: `.pi/SYSTEM.md`
- **Global**: `~/.pi/agent/SYSTEM.md`

### APPEND_SYSTEM.md

Appends content to the default system prompt instead of replacing it.
- **Project**: `.pi/APPEND_SYSTEM.md`
- **Global**: `~/.pi/agent/APPEND_SYSTEM.md`

## Reloading

You can reload all context files mid-session by using the `/reload` command in interactive mode.
