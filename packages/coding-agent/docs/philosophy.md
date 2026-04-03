# Philosophy

Pi is aggressively extensible so it doesn't have to dictate your workflow. Features that other tools bake in can be built with [extensions](/extensions), [skills](/skills), or installed from third-party [pi packages](/packages). This keeps the core minimal while letting you shape pi to fit how you work.

## Core Principles

- **No MCP.** Build CLI tools with READMEs (see [Skills](/skills)), or build an extension that adds MCP support.
- **No sub-agents.** There's many ways to do this. Spawn pi instances via tmux, or build your own with [extensions](/extensions), or install a package that does it your way.
- **No permission popups.** Run in a container, or build your own confirmation flow with [extensions](/extensions) inline with your environment and security requirements.
- **No plan mode.** Write plans to files, or build it with [extensions](/extensions), or install a package.
- **No built-in to-dos.** They confuse models. Use a TODO.md file, or build your own with [extensions](/extensions).
- **No background bash.** Use tmux. Full observability, direct interaction.

## Rationale

Pi is designed to be a minimal terminal coding harness. We believe that a coding agent should adapt to your existing workflow, not the other way around. By keeping the core simple and providing powerful extension points, we enable a diverse ecosystem of tools and behaviors without the bloat of a one-size-fits-all approach.
