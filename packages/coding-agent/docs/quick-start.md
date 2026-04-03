# Quick Start

Get up and running with pi in minutes.

## Installation

Install pi globally via npm:

```bash
npm install -g @mariozechner/pi-coding-agent
```

## Authentication

Pi supports several ways to authenticate with LLM providers.

### API Keys

The simplest way is to set an environment variable:

```bash
export ANTHROPIC_API_KEY=sk-ant-...
pi
```

See [Providers](/providers) for the list of supported environment variables.

### Subscriptions

If you have a subscription (Claude Pro, ChatGPT Plus, GitHub Copilot, etc.), you can log in directly:

```bash
pi
/login  # Then select your provider
```

## First Steps

Once started, just talk to pi. By default, pi gives the model four tools: `read`, `write`, `edit`, and `bash`. The model uses these to fulfill your requests.

### Basic Usage

- Type your request in the editor and press **Enter**.
- Use `@` to fuzzy-search and include project files in your prompt.
- Use `!` to run bash commands directly from the editor.

### Adding Capabilities

You can extend pi with:
- [Skills](/skills): On-demand capability packages.
- [Prompt Templates](/prompt-templates): Reusable Markdown prompts.
- [Extensions](/extensions): TypeScript modules for custom tools and UI.
- [Pi Packages](/packages): Bundled resources shared via npm or git.

## Platform Notes

Pi runs on all major platforms, but some require minor setup for the best experience:

- [Windows](/windows)
- [Termux (Android)](/termux)
- [tmux](/tmux)
- [Terminal Setup](/terminal-setup)
- [Shell Aliases](/shell-aliases)
