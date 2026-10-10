const http = require("http");
const fs = require("fs");
const path = require("path");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "..", "public");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  const requestPath = req.url === "/" ? "/block-city.html" : req.url.split("?")[0];
  const safePath = path.normalize(path.join(publicDir, requestPath));

  if (!safePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(safePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream"
    });
    res.end(data);
  });
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
