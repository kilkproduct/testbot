# Functioning Discord bot

This bot only includes commands that are actually implemented.

## Setup
1. Install Node.js 18+
2. Run `npm install`
3. Copy `.env.example` to `.env`
4. Put your bot token in `.env`
5. Enable **Message Content Intent** and **Server Members Intent** in the Discord Developer Portal
6. Run `npm start`

## Included commands

### General
`help`, `ping`, `status`, `prefix`

### Info
`avatar`, `userinfo`, `serverinfo`, `roleinfo`, `channelinfo`, `membercount`

### Fun
`choose`, `rps`, `randomhex`, `color`, `poll`

### Moderation
`say`, `embed`, `purge`, `kick`, `ban`, `unban`, `timeout`, `untimeout`, `nick`, `lock`, `unlock`, `slowmode`, `roleadd`, `roleremove`

### Server config
`welcome`, `goodbye`, `autoresponder`, `sticky`

## Notes
- The bot stores guild settings in `data/store.json`.
- Welcome/goodbye/autoresponder/sticky messages persist across restarts.
- This is intentionally smaller than the original Bleed command list, but every included command is wired to actual code.
