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
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-cache, no-store, must-revalidate"
    });
    res.end(data);
  });
}

// Socket.io answers /socket.io/* requests itself; everything else lands here.
const server = http.createServer((req, res) => {
  let requestPath = decodeURIComponent(req.url.split("?")[0]);

  if (requestPath === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ok");
    return;
  }
  if (requestPath === "/") requestPath = "/index.html";

  const safePath = path.normalize(path.join(publicDir, requestPath));
  if (!safePath.startsWith(publicDir)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Forbidden");
    return;
  }
  sendFile(res, safePath);
});

const io = new Server(server, { cors: { origin: "*" } });

// ---------------------------------------------------------------
// Multiplayer (Block City v6 protocol, see README)
// ---------------------------------------------------------------
const PROXIMITY = 450; // world pixels for "Nearby" chat
const players = {};

function num(v) {
  v = Number(v);
  return Number.isFinite(v) ? v : 0;
}

// Can player b hear player a in "Nearby" mode?
function isNear(a, b) {
  if (!a || !b) return false;
  if (a.id === b.id) return true;
  if (a.scene !== b.scene) return false;
  if (a.scene === "apartment") {
    return (
      a.visiting === b.id ||
      b.visiting === a.id ||
      (a.visiting && a.visiting === b.visiting) ||
      (!a.visiting && !b.visiting)
    );
  }
  if (a.block !== b.block) return false;
  return Math.hypot(a.x - b.x, a.y - b.y) <= PROXIMITY;
}

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);

  socket.on("state", (s) => {
    if (!s || typeof s !== "object") return;
    const p = {
      id: socket.id,
      name: String(s.name || "Player").slice(0, 16),
      x: num(s.x),
      y: num(s.y),
      block: num(s.block),
      facing: s.facing || "down",
      sitting: !!s.sitting,
      inTaxi: !!s.inTaxi,
      address: String(s.address || "").slice(0, 40),
      color: String(s.color || "#e74c3c").slice(0, 20),
      scene: s.scene === "apartment" ? "apartment" : "street",
      visiting: s.visiting ? String(s.visiting) : null,
      taxi:
        s.taxi && typeof s.taxi === "object"
          ? { x: num(s.taxi.x), y: num(s.taxi.y), state: String(s.taxi.state || "") }
          : null
    };
    players[socket.id] = p;
    socket.broadcast.emit("state", p);
  });

  socket.on("chat", (m) => {
    const me = players[socket.id];
    if (!m || typeof m.text !== "string") return;
    const text = m.text.trim().slice(0, 140);
    if (!text) return;
    const mode = m.mode === "phone" ? "phone" : "proximity";
    const msg = {
      id: socket.id,
      name: me ? me.name : "Player",
      text,
      mode,
      x: me ? me.x : 0,
      y: me ? me.y : 0,
      color: me ? me.color : "#ffffff"
    };
    if (mode === "phone") {
      io.emit("chat", msg);
    } else {
      socket.emit("chat", msg); // always echo to the sender
      Object.keys(players).forEach((id) => {
        if (id !== socket.id && isNear(me, players[id])) io.to(id).emit("chat", msg);
      });
    }
  });

  socket.on("visit_req", (m) => {
    if (!m || !m.to || !players[m.to]) return;
    const me = players[socket.id];
    io.to(m.to).emit("visit_req", {
      from: socket.id,
      fromName: String(m.fromName || (me && me.name) || "Someone").slice(0, 16),
      fromAddress: String(m.fromAddress || (me && me.address) || "").slice(0, 40)
    });
  });

  socket.on("visit_accept", (m) => {
    if (!m || !m.to || !players[m.to]) return;
    const host = players[socket.id];
    const sp = m.aptSpawn || {};
    io.to(m.to).emit("visit_accept", {
      hostId: socket.id,
      hostName: host ? host.name : "Friend",
      hostAddress: host ? host.address : "",
      hostBlock: 0,
      aptSpawn: { x: num(sp.x), y: num(sp.y) }
    });
  });

  socket.on("visit_decline", (m) => {
    if (!m || !m.to) return;
    const host = players[socket.id];
    io.to(m.to).emit("visit_decline", { hostName: host ? host.name : "Host" });
  });

  socket.on("visit_leave", (m) => {
    if (!m || !m.hostId) return;
    const me = players[socket.id];
    io.to(m.hostId).emit("visit_leave", { visitorName: me ? me.name : "Visitor" });
  });

  socket.on("disconnect", () => {
    console.log(`Player disconnected: ${socket.id}`);
    delete players[socket.id];
    io.emit("left", { id: socket.id });
  });
});

server.listen(PORT, () => {
  console.log(`Block City server running on port ${PORT}`);
});
