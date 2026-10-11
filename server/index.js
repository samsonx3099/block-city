const http = require("http");
const fs = require("fs");
const path = require("path");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;
const rootDir = path.join(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const readmePath = path.join(rootDir, "README.md");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".md": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    
    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache, no-store, must-revalidate"
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const requestPath = req.url.split("?")[0];

  // Serve README.md as the game for root paths
  if (requestPath === "/" || requestPath === "/index.html" || requestPath === "/block-cityv5.html") {
    return sendFile(res, readmePath);
  }

  // Try to serve from public directory
  const safePath = path.normalize(path.join(publicDir, requestPath));

  if (!safePath.startsWith(publicDir)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Forbidden");
    return;
  }

  sendFile(res, safePath);
});

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const players = new Map();

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);

  socket.on("join", ({ name }) => {
    players.set(socket.id, {
      id: socket.id,
      name: name || "Player",
      x: 0,
      y: 0,
      z: 0
    });

    console.log(`${name || "Player"} joined. Total players: ${players.size}`);
    io.emit("players", Array.from(players.values()));
  });

  socket.on("move", ({ x, y, z }) => {
    const player = players.get(socket.id);
    if (!player) return;

    player.x = x;
    player.y = y;
    player.z = z;
    socket.broadcast.emit("playerMove", player);
  });

  socket.on("disconnect", () => {
    const player = players.get(socket.id);
    if (player) {
      console.log(`${player.name} disconnected. Total players: ${players.size - 1}`);
    }
    players.delete(socket.id);
    io.emit("players", Array.from(players.values()));
    socket.broadcast.emit("playerLeft", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Block City server running on port ${PORT}`);
});
