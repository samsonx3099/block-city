# 🧱 Block City

A top-down 2D city game that runs in the browser (desktop and mobile). Walk around Maple Block, call a taxi, visit the Market Block, relax in your apartment, and meet other players online.

This is **v6**. It adds online multiplayer through Socket.io, so it needs the Node server to run. It will not work as a plain static site.

## Features

- Two blocks: **Maple Block** (home) and **Market Block**. Walk off the left edge of Maple to reach the market, and off the right edge of the market to return.
- Your own apartment (walk into the glowing door marked YOU) with a couch and TV.
- **BlockPhone** with Friends, Messages, Call Taxi and My Address.
- **Taxi**: call one, press E to get in, then tap anywhere to set a destination.
- **Online multiplayer**: see other players on the street, in taxis and in apartments.
- **Chat**: iMessage-style messages, either *Nearby* or *City-wide*, with speech bubbles above players and toast notifications.
- **Visits**: ask a friend to visit; they accept or decline, and you teleport into their apartment. Walk into the door to leave.
- Installable as a PWA on mobile (home-screen banner).

## Controls

| Action | Desktop | Mobile |
| --- | --- | --- |
| Move | WASD / arrow keys, or click to walk | Joystick, or tap to walk |
| Interact (couch, taxi) | E | E button |
| Phone | P | 📱 button |
| Open Messages | T | Phone → Messages |
| Close phone / stand up | Esc | ✕ |

## Project layout

```
block-city/
├── server/
│   └── index.js       # Node + Socket.io server (also serves public/)
├── public/
│   ├── index.html     # the v6 game, served at /
│   └── block-cityv5.html   # older version, kept for reference
├── package.json       # `npm start` runs server/index.js
├── render.yaml        # Render web service config
└── README.md          # this file (documentation only, not served)
```

The game page lives in **`public/index.html`**. The server serves it at `/`. `README.md` is documentation only. To release a new game version, replace `public/index.html`.

The page loads Socket.io from `/socket.io/socket.io.js`, which the Node server provides automatically, and connects back to the same origin. If you ever host the page separately from the server, set `SERVER_URL` near the top of the script in `index.html` to your server's address.

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000` in two browser tabs or devices to test multiplayer.

## Deploy on Render

1. Push the repo to GitHub.
2. In Render, use a **Web Service** (not a Static Site) connected to the repo. `render.yaml` already describes it.
3. Build command: `npm install`
4. Start command: `npm start` (runs `node server/index.js`)
5. The server listens on `process.env.PORT`. A `/health` endpoint is available for health checks.

Every redeploy picks up the latest `public/index.html`.

## Server events (client ↔ server contract)

The v6 client expects the server to handle and relay these Socket.io events. Player ids are socket ids.

**Client → server**

| Event | Payload |
| --- | --- |
| `state` | `{ name, x, y, block, facing, sitting, inTaxi, address, color, scene, visiting, taxi }` |
| `chat` | `{ text, mode }` where mode is `proximity` or `phone` |
| `visit_req` | `{ to, fromName, fromAddress }` |
| `visit_accept` | `{ to, aptSpawn: { x, y } }` |
| `visit_decline` | `{ to }` |
| `visit_leave` | `{ hostId }` |

**Server → client**

| Event | Payload |
| --- | --- |
| `state` | the sender's state plus `id` (broadcast to other players) |
| `left` | `{ id }` when a player disconnects |
| `chat` | `{ id, name, text, mode, x, y, color }`; proximity messages should only reach nearby players, phone messages go city-wide |
| `visit_req` | `{ from, fromName, fromAddress }`, sent to the host |
| `visit_accept` | `{ hostId, hostName, hostAddress, hostBlock, aptSpawn }`, sent to the visitor |
| `visit_decline` | `{ hostName }`, sent to the visitor |
| `visit_leave` | `{ visitorName }`, sent to the host |

## Troubleshooting

- **Status shows "Solo (no socket.io)"**: the page is not being served by the Node server. Check that `/socket.io/socket.io.js` loads.
- **Status shows "Offline" or "Reconnecting…"**: the server is down or asleep (Render free instances sleep when idle). Wait a few seconds and reload.
- **Still seeing the old game after deploying**: confirm `public/index.html` is the v6 file and trigger a redeploy. Also hard-refresh the browser or clear the site's cached data.
- **Chat only appears on your own screen**: you are offline, so messages are shown locally but not sent.
