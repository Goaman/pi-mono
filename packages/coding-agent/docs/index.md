---
sidebar: true
---

<p align="center">
  <img src="https://shittycodingagent.ai/logo.svg" alt="pi logo" width="128">
</p>

# pi

### Minimal terminal coding harness

Adapt pi to your workflows, not the other way around, without having to fork and modify pi internals. 

[Quick Start](/quick-start) | [GitHub](https://github.com/badlogic/pi-mono)

---

## Quick Start

Ready to try pi? Head over to our [Quick Start](/quick-start) guide to get installed and authenticated in minutes.

**Platform notes:** [Windows](/windows) | [Termux (Android)](/termux) | [tmux](/tmux) | [Terminal setup](/terminal-setup) | [Shell aliases](/shell-aliases)

---

## Providers & Models

For each built-in provider, pi maintains a list of tool-capable models, updated with every release. Authenticate via subscription (`/login`) or API key, then select any model from that provider via `/model` (or Ctrl+L).

**Subscriptions:**
- Anthropic Claude Pro/Max
- OpenAI ChatGPT Plus/Pro (Codex)
- GitHub Copilot
- Google Gemini CLI
- Google Antigravity

See [Providers](/providers) for detailed setup instructions.

**Custom providers & models:** Add providers via `~/.pi/agent/models.json` if they speak a supported API (OpenAI, Anthropic, Google). For custom APIs or OAuth, use extensions. See [Models](/models) and [Custom Provider](/custom-provider).

---

## Interactive Mode

<p align="center"><img src="./images/interactive-mode.png" alt="Interactive Mode" width="600"></p>

The interface from top to bottom:

- **Startup header** - Shows shortcuts (`/hotkeys` for all), loaded AGENTS.md files, prompt templates, skills, and extensions
- **Messages** - Your messages, assistant responses, tool calls and results, notifications, errors, and extension UI
- **Editor** - Where you type; border color indicates thinking level
- **Footer** - Working directory, session name, total token/cache usage, cost, context usage, current model

See [Interactive Mode](/tui) for more details.

---

## Sessions

Sessions are stored as JSONL files with a tree structure. Each entry has an `id` and `parentId`, enabling in-place branching without creating new files.

See [Session](/session) for more details.

---

## Settings

Use `/settings` to modify common options, or edit JSON files directly.

See [Settings](/settings) for all options.

---

## Context Files

Pi loads `AGENTS.md` (or `CLAUDE.md`) at startup from global and project-specific locations.

See [Context Files](/context-files) for more details.

---

## Customization

### Prompt Templates

Reusable prompts as Markdown files. Type `/name` to expand. See [Prompt Templates](/prompt-templates).

### Skills

On-demand capability packages following the [Agent Skills standard](https://agentskills.io). See [Skills](/skills).

### Extensions

TypeScript modules that extend pi with custom tools, commands, keyboard shortcuts, event handlers, and UI components. See [Extensions](/extensions).

### Themes

Built-in: `dark`, `light`. Themes hot-reload. See [Themes](/themes).

### Pi Packages

Bundle and share extensions, skills, prompts, and themes via npm or git. See [Packages](/packages).

---

## Programmatic Usage

### SDK

See [SDK](/sdk).

### RPC Mode

For non-Node.js integrations, use RPC mode over stdin/stdout. See [RPC](/rpc).

---

## Philosophy

Pi is aggressively extensible so it doesn't have to dictate your workflow. Features that other tools bake in can be built with [extensions](/extensions), [skills](/skills), or installed from third-party [pi packages](/packages).

See [Philosophy](/philosophy) for the full rationale.

---

## CLI Reference

Usage: `pi [options] [@files...] [messages...]`

See [CLI Reference](/cli-reference) for the complete list of options.

---

## License

MIT
