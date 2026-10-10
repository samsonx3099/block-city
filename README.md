# Block City

A tiny 2.5D HTML city game with Socket.io multiplayer support.

## Features
- Real-time multiplayer gameplay
- Simple 2.5D isometric camera
- Player movement synchronization
- Dynamic player count display

## Local Development

1. Clone the repository
2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
4. Open http://localhost:3000 in your browser

## Controls
- **W / Arrow Up**: Move forward
- **S / Arrow Down**: Move backward
- **A / Arrow Left**: Move left
- **D / Arrow Right**: Move right

## Deploy to Render

1. Push this repository to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect this repository
4. Set build and start commands:
   - **Build command**: `npm install --prefix server`
   - **Start command**: `node server/index.js`
5. Deploy
6. Once deployed, share the public URL with others to play together!

## Project Structure

```
block-city/
├── server/
│   ├── package.json
│   └── index.js          (Socket.io server)
├── public/
│   └── block-city.html   (Game client)
└── README.md
```

## How Multiplayer Works

- Server maintains a map of connected players
- On join: broadcast all current players to new player
- On move: broadcast movement to other players
- On disconnect: remove player and notify others
