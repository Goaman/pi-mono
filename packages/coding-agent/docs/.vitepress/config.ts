import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/pi-mono/',
  title: 'pi',
  description: 'Minimal terminal coding harness',
  ignoreDeadLinks: true,
  themeConfig: {
    outline: 'deep',
    logo: 'https://shittycodingagent.ai/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'Docs', link: '/providers' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Providers & Models', link: '/providers' },
          { text: 'Interactive Mode', link: '/tui' },
          { text: 'Sessions', link: '/session' },
          { text: 'Settings', link: '/settings' },
          { text: 'Context Files', link: '/context-files' },
        ]
      },
      {
        text: 'Providers',
        items: [
          { text: 'Overview', link: '/providers' },
          { text: 'Models', link: '/models' },
          { text: 'Custom Providers', link: '/custom-provider' },
        ]
      },
      {
        text: 'Sessions',
        items: [
          { text: 'Overview', link: '/session' },
          { text: 'Tree Navigation', link: '/tree' },
          { text: 'Compaction', link: '/compaction' },
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: 'Prompt Templates', link: '/prompt-templates' },
          { text: 'Skills', link: '/skills' },
          { text: 'Extensions', link: '/extensions' },
          { text: 'Themes', link: '/themes' },
          { text: 'Pi Packages', link: '/packages' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'SDK', link: '/sdk' },
          { text: 'RPC Mode', link: '/rpc' },
          { text: 'JSON Output', link: '/json' },
          { text: 'CLI Reference', link: '/cli-reference' },
          { text: 'Philosophy', link: '/philosophy' },
        ]
      },

      {
        text: 'Platforms',
        items: [
          { text: 'Windows', link: '/windows' },
          { text: 'Termux (Android)', link: '/termux' },
          { text: 'tmux', link: '/tmux' },
          { text: 'Terminal Setup', link: '/terminal-setup' },
          { text: 'Shell Aliases', link: '/shell-aliases' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Development Setup', link: '/development' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/badlogic/pi-mono' },
      { icon: 'discord', link: 'https://discord.com/invite/3cU7Bz4UPx' }
    ]
  }
})
