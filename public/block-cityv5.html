<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="theme-color" content="#0b0b10">
  <title>Block City</title>
  <link rel="manifest" href="data:application/manifest+json,{"name":"Block%20City","short_name":"BlockCity","start_url":".","display":"standalone","background_color":"%230b0b10","theme_color":"%230b0b10","orientation":"any"}">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
    html, body {
      width: 100%; height: 100%;
      background: #0b0b10; color: #e0e0e0;
      font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
      overflow: hidden;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
    }
    #app {
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      position: relative;
    }
    #topBar {
      flex-shrink: 0;
      padding: 0.35rem 0.6rem;
      padding-top: max(0.35rem, env(safe-area-inset-top));
      display: flex; align-items: center; justify-content: space-between;
      background: #12121a;
      border-bottom: 1px solid #2a2a35;
      z-index: 10;
    }
    #topBar h1 {
      font-size: 0.95rem;
      background: linear-gradient(90deg, #ff8c42, #ffd56b);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    #topBar .addr {
      font-size: 0.65rem; color: #888;
    }
    #gameWrap {
      flex: 1;
      position: relative;
      overflow: hidden;
      min-height: 0;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
      background: #14141c;
    }
    .hud {
      position: absolute; top: 8px; left: 10px;
      font-size: 0.7rem; color: #ccc; text-shadow: 0 1px 4px #000;
      pointer-events: none; line-height: 1.35; max-width: 60%;
    }
    .mode-badge {
      position: absolute; top: 8px; right: 10px;
      background: rgba(0,0,0,0.6); padding: 3px 9px; border-radius: 6px;
      font-size: 0.68rem; color: #bbb; pointer-events: none;
    }

    /* Touch controls */
    #controls {
      position: absolute; inset: 0;
      pointer-events: none;
      z-index: 5;
    }
    .stick-zone {
      position: absolute;
      bottom: max(12px, env(safe-area-inset-bottom));
      left: 12px;
      width: 130px; height: 130px;
      pointer-events: auto;
    }
    .stick-base {
      width: 110px; height: 110px;
      border-radius: 50%;
      background: rgba(255,255,255,0.08);
      border: 2px solid rgba(255,255,255,0.15);
      position: absolute; bottom: 0; left: 0;
    }
    .stick-knob {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: rgba(255,255,255,0.25);
      border: 2px solid rgba(255,255,255,0.35);
      position: absolute;
      left: 31px; top: 31px;
      transition: none;
    }
    .action-btns {
      position: absolute;
      bottom: max(16px, env(safe-area-inset-bottom));
      right: 14px;
      display: flex; flex-direction: column; gap: 10px;
      pointer-events: auto;
    }
    .action-btn {
      width: 56px; height: 56px;
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.2);
      background: rgba(30,30,40,0.85);
      color: #eee;
      font-size: 0.7rem;
      font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      pointer-events: auto;
      cursor: pointer;
    }
    .action-btn:active, .action-btn.active {
      background: rgba(255,107,53,0.7);
      border-color: #ff6b35;
    }
    .action-btn.phone-btn-float {
      background: rgba(40,40,60,0.9);
    }

    /* Phone panel — full sheet on mobile */
    #phone {
      display: none;
      position: absolute;
      left: 0; right: 0; bottom: 0;
      max-height: 70%;
      background: #16161f;
      border-top: 2px solid #3a3a4a;
      border-radius: 16px 16px 0 0;
      padding: 12px 14px;
      padding-bottom: max(14px, env(safe-area-inset-bottom));
      z-index: 30;
      overflow-y: auto;
      box-shadow: 0 -8px 40px rgba(0,0,0,0.5);
    }
    #phone.open { display: block; }
    .phone-header {
      font-size: 0.75rem; color: #888; text-align: center;
      margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px solid #333;
    }
    .phone-btn {
      display: block; width: 100%; padding: 12px;
      margin-bottom: 6px; border: none; border-radius: 10px;
      background: #2a2a38; color: #ddd;
      font-size: 0.9rem; font-weight: 600; cursor: pointer; text-align: left;
    }
    .phone-btn:active { background: #353545; }
    .phone-btn.taxi { background: #3d3a1a; color: #f1c40f; }
    .phone-btn.chat { background: #1a2a3a; color: #5dade2; }
    .phone-btn.friends { background: #1a2e1a; color: #6dce6d; }
    .phone-status { font-size: 0.72rem; color: #888; margin-top: 6px; min-height: 1.8em; }
    .phone-close {
      position: absolute; top: 10px; right: 14px;
      background: none; border: none; color: #888;
      font-size: 1.2rem; cursor: pointer; padding: 4px 8px;
    }
    .friend-item {
      background: #1e1e2a; border-radius: 8px; padding: 10px;
      margin-bottom: 6px; font-size: 0.8rem;
      display: flex; justify-content: space-between; align-items: center;
    }
    .friend-item .addr { color: #888; font-size: 0.7rem; }
    .friend-item button {
      padding: 6px 12px; font-size: 0.75rem; border: none; border-radius: 6px;
      background: #2a4a6a; color: #8af; cursor: pointer;
    }
    .section-label {
      font-size: 0.68rem; color: #666; text-transform: uppercase;
      letter-spacing: 0.05em; margin: 10px 0 6px;
    }

    #nameModal {
      display: none; position: absolute; inset: 0;
      background: rgba(0,0,0,0.8); z-index: 50;
      align-items: center; justify-content: center;
      padding: 1rem;
    }
    #nameModal.show { display: flex; }
    .modal-box {
      background: #1a1a24; border: 1px solid #3a3a4a; border-radius: 14px;
      padding: 1.4rem 1.3rem; width: 100%; max-width: 320px; text-align: center;
    }
    .modal-box h2 { font-size: 1.1rem; margin-bottom: 0.5rem; color: #ffb060; }
    .modal-box input {
      width: 100%; padding: 0.7rem; margin-bottom: 0.8rem;
      background: #101018; border: 1px solid #333; border-radius: 8px;
      color: #eee; font-size: 1rem; text-align: center;
    }
    .modal-box button {
      padding: 0.65rem 1.3rem; background: #ff6b35; color: #111;
      border: none; border-radius: 8px; font-weight: 700; font-size: 0.95rem;
      cursor: pointer; margin: 0.25rem;
    }
    .modal-box button.skip { background: #333; color: #aaa; font-weight: 500; }

    #installBanner {
      display: none;
      position: absolute; top: 0; left: 0; right: 0;
      background: #1a2a3a; color: #8af; font-size: 0.75rem;
      padding: 8px 12px; text-align: center; z-index: 40;
    }
    #installBanner.show { display: block; }
    #installBanner button {
      margin-left: 8px; padding: 4px 10px; border: none; border-radius: 4px;
      background: #5b8def; color: #fff; font-size: 0.72rem; cursor: pointer;
    }

    /* Desktop: hide touch stick if mouse present and wide */
    @media (min-width: 900px) and (hover: hover) {
      .stick-zone { opacity: 0.35; }
    }
  </style>
</head>
<body>
  <div id="app">
    <div id="topBar">
      <div>
        <h1>🧱 Block City</h1>
        <div class="addr" id="topAddr">—</div>
      </div>
      <div style="font-size:0.65rem;color:#666" id="mpStatus"></div>
    </div>

    <div id="gameWrap">
      <canvas id="c"></canvas>
      <div class="hud" id="hud">Loading…</div>
      <div class="mode-badge" id="modeBadge">On foot</div>

      <div id="controls">
        <div class="stick-zone" id="stickZone">
          <div class="stick-base">
            <div class="stick-knob" id="stickKnob"></div>
          </div>
        </div>
        <div class="action-btns">
          <button class="action-btn phone-btn-float" id="btnPhoneFloat">📱</button>
          <button class="action-btn" id="btnActionE">E</button>
        </div>
      </div>

      <div id="installBanner">
        Install Block City on your home screen
        <button id="btnInstall">Install</button>
        <button id="btnInstallDismiss" style="background:#333">✕</button>
      </div>

      <div id="nameModal">
        <div class="modal-box">
          <h2>Welcome to Block City</h2>
          <p style="font-size:0.8rem;color:#999;margin-bottom:0.7rem">Choose a display name</p>
          <input type="text" id="nameInput" maxlength="16" placeholder="Your name" value="Player" autocomplete="off" autocorrect="off">
          <br>
          <button id="nameOk">Enter City</button>
          <button class="skip" id="nameSkip">Skip</button>
        </div>
      </div>

      <div id="phone">
        <button class="phone-close" id="phoneClose">✕</button>
        <div class="phone-header">📱 BlockPhone</div>
        <div id="phoneMain">
          <button class="phone-btn friends" id="btnFriends">👥 Friends</button>
          <button class="phone-btn taxi" id="btnTaxi">🚕 Call Taxi</button>
          <button class="phone-btn chat" id="btnChat">💬 Chat (soon)</button>
          <button class="phone-btn" id="btnExitTaxi" style="display:none">🚪 Exit Taxi</button>
          <button class="phone-btn" id="btnAddress">🏠 My Address</button>
        </div>
        <div id="phoneFriends" style="display:none">
          <button class="phone-btn" id="btnBackMain">← Back</button>
          <div class="section-label">Online nearby</div>
          <div id="friendsList"></div>
          <div class="section-label">Your address</div>
          <div id="myAddressBox" style="font-size:0.8rem;color:#aaa;padding:4px 0"></div>
        </div>
        <div class="phone-status" id="phoneStatus">Ready.</div>
      </div>
    </div>
  </div>

  <script>
    // ============================================================
    // CANVAS RESIZE
    // ============================================================
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const gameWrap = document.getElementById('gameWrap');

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = gameWrap.clientWidth;
      const h = gameWrap.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', () => setTimeout(resizeCanvas, 100));

    // ============================================================
    // IDENTITY + MULTIPLAYER
    // ============================================================
    const hud = document.getElementById('hud');
    const modeBadge = document.getElementById('modeBadge');
    const phoneEl = document.getElementById('phone');
    const phoneStatus = document.getElementById('phoneStatus');

    const MY_ID = 'p_' + Math.random().toString(36).slice(2, 9);
    let myName = '';
    try { myName = localStorage.getItem('bc_name') || ''; } catch(e) {}
    const MY_STREET_NUM = 10 + Math.floor(Math.random() * 40);
    const MY_ADDRESS = MY_STREET_NUM + ' Maple Block';
    const playerColor = '#5b8def';
    const otherPlayers = {};
    let multiplayerOk = false;
    let channel = null;

    try {
      channel = new BroadcastChannel('block_city_v1');
      multiplayerOk = true;
      channel.onmessage = (ev) => {
        const msg = ev.data;
        if (!msg || msg.id === MY_ID) return;
        if (msg.type === 'state') {
          otherPlayers[msg.id] = {
            name: msg.name, x: msg.x, y: msg.y, block: msg.block,
            facing: msg.facing, sitting: msg.sitting, inTaxi: msg.inTaxi,
            address: msg.address, color: msg.color || '#e74c3c',
            lastSeen: Date.now()
          };
        } else if (msg.type === 'hello') broadcastState();
        else if (msg.type === 'visit_req' && msg.to === MY_ID) {
          phoneStatus.textContent = (msg.fromName || 'Someone') + ' wants to visit!';
        }
      };
      channel.postMessage({ type: 'hello', id: MY_ID });
      document.getElementById('mpStatus').textContent = 'MP ready';
    } catch (e) {
      document.getElementById('mpStatus').textContent = 'Solo';
    }

    function broadcastState() {
      if (!channel || !multiplayerOk) return;
      try {
        channel.postMessage({
          type: 'state', id: MY_ID, name: myName || 'Player',
          x: player.x, y: player.y, block: currentBlock,
          facing: player.facing, sitting: sitting,
          inTaxi: (taxiState === 'riding' || taxiState === 'driving'),
          address: MY_ADDRESS, color: playerColor
        });
      } catch (e) {}
    }

    // ============================================================
    // GAME STATE
    // ============================================================
    const TILE = 36;
    const PLAYER_SIZE = 24;
    const SPEED = 2.8;
    const TAXI_SPEED = 3.1;
    const BLOCK_W = 36;
    const BLOCK_H = 26;

    let currentBlock = 0;
    let scene = 'street';
    let keys = {};
    let time = 0;
    let camX = 0, camY = 0;
    let phoneOpen = false;
    let sitting = false;
    let tvOn = false;
    let moveTarget = null;
    let taxiState = 'none';
    let playerTaxi = null;
    let taxiWaypoint = null;
    let lastBroadcast = 0;
    let gameStarted = false;

    // Virtual stick
    let stickDX = 0, stickDY = 0;
    let stickActive = false;

    const player = {
      x: 15 * TILE, y: 11 * TILE,
      facing: 'down', walking: false
    };

    let streetMap = [];
    let trees = [], signs = [], trafficLights = [], cars = [], streetLamps = [];

    function generateBlock(blockId) {
      streetMap = []; trees = []; signs = []; trafficLights = []; cars = []; streetLamps = [];
      for (let y = 0; y < BLOCK_H; y++) {
        streetMap[y] = [];
        for (let x = 0; x < BLOCK_W; x++) {
          if (y === 0 || y === BLOCK_H-1 || x === 0 || x === BLOCK_W-1) streetMap[y][x] = 1;
          else if ((y >= 3 && y <= 7) || (y >= 16 && y <= 20)) streetMap[y][x] = 1;
          else if ((x >= 5 && x <= 9) || (x >= 25 && x <= 29)) streetMap[y][x] = 1;
          else if ((y === 2 || y === 8 || y === 15 || y === 21) || (x === 4 || x === 10 || x === 24 || x === 30)) streetMap[y][x] = 2;
          else streetMap[y][x] = 0;
        }
      }
      for (let x = 1; x < BLOCK_W-1; x++) {
        streetMap[5][x] = 0; streetMap[6][x] = 0;
        streetMap[17][x] = 0; streetMap[18][x] = 0;
      }
      for (let y = 1; y < BLOCK_H-1; y++) {
        streetMap[y][7] = 0; streetMap[y][8] = 0;
        streetMap[y][27] = 0; streetMap[y][28] = 0;
      }
      for (let x = 1; x < BLOCK_W-1; x++) {
        if (streetMap[4][x] === 1) streetMap[4][x] = 2;
        if (streetMap[7][x] === 1) streetMap[7][x] = 2;
        if (streetMap[16][x] === 1) streetMap[16][x] = 2;
        if (streetMap[19][x] === 1) streetMap[19][x] = 2;
      }
      for (let y = 5; y <= 6; y++) {
        streetMap[y][0] = 0;
        streetMap[y][BLOCK_W-1] = 0;
      }
      if (blockId === 0) {
        streetMap[8][15] = 3; streetMap[8][16] = 3;
        streetMap[8][12] = 5; streetMap[8][19] = 5;
        streetMap[15][12] = 5; streetMap[15][19] = 5;
        streetMap[8][6] = 4; streetMap[8][7] = 4;
        streetMap[15][29] = 4; streetMap[15][30] = 4;
      } else if (blockId === -1) {
        for (let y = 9; y <= 14; y++)
          for (let x = 12; x <= 22; x++)
            streetMap[y][x] = 1;
        streetMap[14][16] = 10; streetMap[14][17] = 10;
        for (let x = 12; x <= 22; x++) streetMap[15][x] = 2;
      }
      trees = [
        {x:3.5*TILE,y:9.5*TILE},{x:12*TILE,y:10*TILE},{x:18*TILE,y:9.8*TILE},
        {x:31*TILE,y:11*TILE},{x:4*TILE,y:13*TILE},{x:32*TILE,y:20*TILE},
        {x:13*TILE,y:22*TILE},{x:21*TILE,y:3.5*TILE}
      ];
      signs = [
        {x:10.3*TILE,y:8.2*TILE,type:'stop'},
        {x:24.3*TILE,y:15.2*TILE,type:'stop'},
        {x:9.2*TILE,y:7.3*TILE,type:'yield'}
      ];
      if (blockId === -1) signs.push({x:16*TILE,y:15.5*TILE,type:'parking'});
      trafficLights = [
        {x:9.6*TILE,y:7.6*TILE,phase:0},{x:24.6*TILE,y:7.6*TILE,phase:35},
        {x:9.6*TILE,y:18.6*TILE,phase:70},{x:24.6*TILE,y:18.6*TILE,phase:105}
      ];
      streetLamps = [
        {x:11*TILE,y:9*TILE},{x:20*TILE,y:9*TILE},{x:11*TILE,y:14*TILE},
        {x:20*TILE,y:14*TILE},{x:5*TILE,y:11*TILE},{x:31*TILE,y:14*TILE}
      ];
      const types = ['sedan','taxi','suv','van'];
      const cols = ['#c0392b','#2980b9','#27ae60','#8e44ad','#e67e22','#1abc9c'];
      for (let i = 0; i < 6; i++) {
        cars.push({
          x: Math.random()*BLOCK_W*TILE, y: (5.25+(i%2)*1.0)*TILE,
          dir: i%2===0?1:-1, axis:'x', speed:0.9+Math.random()*0.8,
          type: types[i%types.length], color: cols[i%cols.length], w:40, h:18, npc:true
        });
      }
      for (let i = 0; i < 4; i++) {
        cars.push({
          x: (7.25+(i%2)*1.0)*TILE, y: Math.random()*BLOCK_H*TILE,
          dir: i%2===0?1:-1, axis:'y', speed:0.85+Math.random()*0.7,
          type: types[(i+1)%types.length], color: cols[(i+2)%cols.length], w:18, h:40, npc:true
        });
      }
    }

    const APT_W = 14, APT_H = 10;
    let aptMap = [];
    let aptSpawn = { x: 6.5*TILE, y: 8*TILE };
    const couchSit = { x: 4.2*TILE, y: 5.5*TILE };

    function generateApartment() {
      aptMap = [];
      for (let y = 0; y < APT_H; y++) {
        aptMap[y] = [];
        for (let x = 0; x < APT_W; x++) {
          aptMap[y][x] = (y===0||y===APT_H-1||x===0||x===APT_W-1) ? 1 : 0;
        }
      }
      aptMap[APT_H-1][6] = 2; aptMap[APT_H-1][7] = 2;
      aptMap[2][2] = 4; aptMap[2][3] = 4;
      aptMap[1][10] = 5; aptMap[2][10] = 5;
      aptMap[2][12] = 6;
      aptMap[7][10] = 7; aptMap[7][11] = 7;
      aptMap[5][3] = 8; aptMap[5][4] = 8;
      aptMap[6][3] = 8; aptMap[6][4] = 8;
      aptMap[5][8] = 9; aptMap[5][9] = 9;
    }

    // ============================================================
    // TOUCH JOYSTICK
    // ============================================================
    const stickZone = document.getElementById('stickZone');
    const stickKnob = document.getElementById('stickKnob');
    const STICK_MAX = 36;

    function setStick(dx, dy) {
      const len = Math.hypot(dx, dy);
      if (len > STICK_MAX) {
        dx = dx / len * STICK_MAX;
        dy = dy / len * STICK_MAX;
      }
      stickKnob.style.transform = `translate(${dx}px, ${dy}px)`;
      if (len > 8) {
        stickDX = dx / STICK_MAX;
        stickDY = dy / STICK_MAX;
        stickActive = true;
      } else {
        stickDX = 0; stickDY = 0; stickActive = false;
      }
    }
    function resetStick() {
      stickKnob.style.transform = 'translate(0,0)';
      stickDX = 0; stickDY = 0; stickActive = false;
    }

    function stickPos(e) {
      const rect = stickZone.getBoundingClientRect();
      const cx = rect.left + 55;
      const cy = rect.top + 55;
      const t = e.touches ? e.touches[0] : e;
      return { dx: t.clientX - cx, dy: t.clientY - cy };
    }

    stickZone.addEventListener('touchstart', e => {
      e.preventDefault();
      const p = stickPos(e);
      setStick(p.dx, p.dy);
    }, { passive: false });
    stickZone.addEventListener('touchmove', e => {
      e.preventDefault();
      const p = stickPos(e);
      setStick(p.dx, p.dy);
    }, { passive: false });
    stickZone.addEventListener('touchend', e => { e.preventDefault(); resetStick(); });
    stickZone.addEventListener('touchcancel', () => resetStick());

    // Mouse support for stick (desktop testing)
    let mouseStick = false;
    stickZone.addEventListener('mousedown', e => {
      mouseStick = true;
      const p = stickPos(e);
      setStick(p.dx, p.dy);
    });
    window.addEventListener('mousemove', e => {
      if (!mouseStick) return;
      const p = stickPos(e);
      setStick(p.dx, p.dy);
    });
    window.addEventListener('mouseup', () => { if (mouseStick) { mouseStick = false; resetStick(); } });

    // Action buttons
    document.getElementById('btnActionE').addEventListener('touchstart', e => {
      e.preventDefault();
      tryInteract();
    }, { passive: false });
    document.getElementById('btnActionE').addEventListener('click', () => tryInteract());
    document.getElementById('btnPhoneFloat').addEventListener('touchstart', e => {
      e.preventDefault();
      togglePhone();
    }, { passive: false });
    document.getElementById('btnPhoneFloat').addEventListener('click', () => togglePhone());

    // Tap-to-move on canvas
    canvas.addEventListener('click', onCanvasPointer);
    canvas.addEventListener('touchend', e => {
      if (phoneOpen || !gameStarted) return;
      // Ignore if touch was on controls
      const t = e.changedTouches[0];
      const rect = stickZone.getBoundingClientRect();
      if (t.clientX >= rect.left && t.clientX <= rect.right && t.clientY >= rect.top && t.clientY <= rect.bottom) return;
      onCanvasPointer(t);
    });

    function onCanvasPointer(e) {
      if (!gameStarted || phoneOpen) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = (canvas.width / (window.devicePixelRatio||1)) / rect.width;
      const scaleY = (canvas.height / (window.devicePixelRatio||1)) / rect.height;
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const worldX = mx + camX;
      const worldY = my + camY;

      if (taxiState === 'riding' || taxiState === 'driving') {
        taxiWaypoint = { x: worldX, y: worldY };
        taxiState = 'driving';
        modeBadge.textContent = 'Taxi → dest';
        phoneStatus.textContent = 'Driving…';
        return;
      }
      if (sitting) return;
      moveTarget = { x: worldX - PLAYER_SIZE/2, y: worldY - PLAYER_SIZE/2 };
    }

    // Keyboard still works
    window.addEventListener('keydown', e => {
      keys[e.code] = true;
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)) e.preventDefault();
      if (!gameStarted) return;
      if (e.code === 'KeyP') togglePhone();
      if (e.code === 'KeyE') tryInteract();
      if (e.code === 'Escape') {
        if (phoneOpen) togglePhone();
        else if (sitting) standUp();
      }
    });
    window.addEventListener('keyup', e => { keys[e.code] = false; });

    // ============================================================
    // UI HANDLERS
    // ============================================================
    function startGame(name) {
      myName = (name || 'Player').slice(0, 16);
      try { localStorage.setItem('bc_name', myName); } catch(e) {}
      document.getElementById('nameModal').classList.remove('show');
      document.getElementById('topAddr').textContent = MY_ADDRESS;
      gameStarted = true;
      updateHudStreet();
      broadcastState();
    }
    document.getElementById('nameOk').onclick = () => startGame(document.getElementById('nameInput').value.trim());
    document.getElementById('nameSkip').onclick = () => startGame('Player');
    document.getElementById('nameInput').addEventListener('keydown', e => {
      if (e.code === 'Enter') startGame(document.getElementById('nameInput').value.trim());
    });

    document.getElementById('phoneClose').onclick = togglePhone;
    document.getElementById('btnTaxi').onclick = callTaxi;
    document.getElementById('btnExitTaxi').onclick = exitTaxi;
    document.getElementById('btnChat').onclick = () => { phoneStatus.textContent = 'Chat later.'; };
    document.getElementById('btnFriends').onclick = showFriends;
    document.getElementById('btnBackMain').onclick = showPhoneMain;
    document.getElementById('btnAddress').onclick = () => { phoneStatus.textContent = 'Address: ' + MY_ADDRESS; };

    function togglePhone() {
      if (!gameStarted) return;
      phoneOpen = !phoneOpen;
      phoneEl.classList.toggle('open', phoneOpen);
      if (phoneOpen) {
        showPhoneMain();
        document.getElementById('btnExitTaxi').style.display =
          (taxiState === 'riding' || taxiState === 'driving') ? 'block' : 'none';
      }
    }
    function showPhoneMain() {
      document.getElementById('phoneMain').style.display = 'block';
      document.getElementById('phoneFriends').style.display = 'none';
    }
    function showFriends() {
      document.getElementById('phoneMain').style.display = 'none';
      document.getElementById('phoneFriends').style.display = 'block';
      document.getElementById('myAddressBox').textContent = MY_ADDRESS;
      renderFriendsList();
    }
    function renderFriendsList() {
      const list = document.getElementById('friendsList');
      if (!multiplayerOk) {
        list.innerHTML = '<div style="color:#888;font-size:0.75rem">Open in two browser tabs for local multiplayer.</div>';
        return;
      }
      const now = Date.now();
      const ids = Object.keys(otherPlayers).filter(id => now - otherPlayers[id].lastSeen < 4000);
      if (!ids.length) {
        list.innerHTML = '<div style="color:#666;font-size:0.75rem">No one else online</div>';
        return;
      }
      list.innerHTML = '';
      ids.forEach(id => {
        const p = otherPlayers[id];
        const div = document.createElement('div');
        div.className = 'friend-item';
        div.innerHTML = '<div><b>' + esc(p.name) + '</b><div class="addr">' + esc(p.address) + ' · Block ' + p.block + '</div></div><button data-id="' + id + '">Visit</button>';
        list.appendChild(div);
      });
      list.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
          const p = otherPlayers[btn.dataset.id];
          if (!p || !channel) return;
          channel.postMessage({ type: 'visit_req', from: MY_ID, fromName: myName, to: btn.dataset.id });
          phoneStatus.textContent = 'Visit request sent to ' + p.name;
        };
      });
    }
    function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

    function callTaxi() {
      if (scene !== 'street') { phoneStatus.textContent = 'Go outside first.'; return; }
      if (taxiState !== 'none') { phoneStatus.textContent = 'Taxi already active.'; return; }
      taxiState = 'called';
      phoneStatus.textContent = 'Taxi on the way…';
      const side = Math.random() > 0.5 ? -220 : 220;
      playerTaxi = { x: player.x + side, y: player.y + (Math.random()-0.5)*40, w: 42, h: 18 };
    }
    function tryInteract() {
      if (!gameStarted) return;
      if (scene === 'apartment') {
        if (sitting) { standUp(); return; }
        if (Math.hypot(player.x - couchSit.x, player.y - couchSit.y) < 44) { sitDown(); return; }
      }
      if (scene === 'street' && taxiState === 'arrived' && playerTaxi) {
        if (Math.hypot(player.x - playerTaxi.x, player.y - playerTaxi.y) < 55) { enterTaxi(); return; }
      }
      if (taxiState === 'riding' || taxiState === 'driving') { exitTaxi(); return; }
      if (scene === 'street' && currentBlock === -1 && getTileUnder(player.x, player.y) === 10) {
        phoneStatus.textContent = 'Supermarket interior coming soon.';
      }
    }
    function enterTaxi() {
      taxiState = 'riding'; moveTarget = null;
      modeBadge.textContent = 'In taxi';
      phoneStatus.textContent = 'Tap map to set destination.';
      hud.innerHTML = 'In taxi<br><span style="color:#8af">Tap destination · E to exit</span>';
      document.getElementById('btnExitTaxi').style.display = 'block';
    }
    function exitTaxi() {
      if (!playerTaxi) return;
      player.x = playerTaxi.x + 28; player.y = playerTaxi.y + 8;
      taxiState = 'none'; playerTaxi = null; taxiWaypoint = null;
      modeBadge.textContent = 'On foot';
      phoneStatus.textContent = 'Left the taxi.';
      updateHudStreet();
      document.getElementById('btnExitTaxi').style.display = 'none';
    }
    function sitDown() {
      sitting = true; tvOn = true; moveTarget = null;
      player.x = couchSit.x; player.y = couchSit.y;
      player.facing = 'right'; player.walking = false;
      hud.innerHTML = 'Watching TV<br><span style="color:#8af">E to stand</span>';
    }
    function standUp() {
      sitting = false; tvOn = false;
      player.x = couchSit.x - 22; player.y = couchSit.y + 12;
      hud.innerHTML = 'Your Apartment — ' + MY_ADDRESS + '<br><span style="color:#999">E near couch · Phone button</span>';
    }
    function updateHudStreet() {
      const blockName = currentBlock === 0 ? 'Maple Block (Home)' : currentBlock === -1 ? 'Market Block' : 'Block ' + currentBlock;
      hud.innerHTML = blockName + '<br><span style="color:#999">Tap to move · joystick · E</span>';
    }
    function switchBlock(newBlock, enterFrom) {
      currentBlock = newBlock;
      generateBlock(currentBlock);
      if (enterFrom === 'right') player.x = BLOCK_W * TILE - PLAYER_SIZE - 50;
      else if (enterFrom === 'left') player.x = 50;
      if (playerTaxi) { playerTaxi.x = player.x - 20; playerTaxi.y = player.y; }
      moveTarget = null; taxiWaypoint = null;
      if (taxiState === 'driving') taxiState = 'riding';
      updateHudStreet();
      phoneStatus.textContent = currentBlock === -1 ? 'Entered Market Block' : 'Back on Maple Block';
      broadcastState();
    }

    // ============================================================
    // COLLISION
    // ============================================================
    function isSolid(map, tx, ty, w, h) {
      if (ty < 0 || ty >= h || tx < 0 || tx >= w) return true;
      const t = map[ty][tx];
      return t === 1 || t === 4 || t === 6 || t === 7 || t === 8 || t === 9;
    }
    function canWalk(map, px, py, w, h) {
      if (sitting || taxiState === 'riding' || taxiState === 'driving') return false;
      const m = 5;
      const l = Math.floor((px+m)/TILE), r = Math.floor((px+PLAYER_SIZE-m)/TILE);
      const t = Math.floor((py+m)/TILE), b = Math.floor((py+PLAYER_SIZE-m)/TILE);
      return !isSolid(map,l,t,w,h)&&!isSolid(map,r,t,w,h)&&!isSolid(map,l,b,w,h)&&!isSolid(map,r,b,w,h);
    }
    function getTileUnder(px, py) {
      const map = scene==='street'?streetMap:aptMap;
      const w = scene==='street'?BLOCK_W:APT_W;
      const h = scene==='street'?BLOCK_H:APT_H;
      const tx = Math.floor((px+PLAYER_SIZE/2)/TILE);
      const ty = Math.floor((py+PLAYER_SIZE/2)/TILE);
      if (ty<0||ty>=h||tx<0||tx>=w) return 0;
      return map[ty][tx];
    }

    // ============================================================
    // DRAW (same style as before, uses css-pixel coords via transform)
    // ============================================================
    function viewW() { return gameWrap.clientWidth; }
    function viewH() { return gameWrap.clientHeight; }

    function drawDepth(x,y,w,h,color,depth=5) {
      ctx.fillStyle='rgba(0,0,0,0.32)'; ctx.fillRect(x+2,y+depth,w,h);
      ctx.fillStyle=color; ctx.fillRect(x,y,w,h);
      ctx.fillStyle='rgba(255,255,255,0.08)'; ctx.fillRect(x,y,w,2);
    }
    function drawTree(wx,wy) {
      const x=wx-camX,y=wy-camY;
      ctx.fillStyle='rgba(0,0,0,0.22)';
      ctx.beginPath();ctx.ellipse(x+5,y+13,13,4.5,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#4e342e';ctx.fillRect(x-3.5,y-4,7,16);
      ctx.fillStyle='#1b5e20';ctx.beginPath();ctx.arc(x,y-12,15,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#2e7d32';ctx.beginPath();ctx.arc(x-6,y-16,11,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(x+7,y-15,10,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#43a047';ctx.beginPath();ctx.arc(x,y-20,9,0,Math.PI*2);ctx.fill();
    }
    function drawLamp(wx,wy) {
      const x=wx-camX,y=wy-camY;
      ctx.fillStyle='#333';ctx.fillRect(x-2,y-28,4,32);
      ctx.fillStyle='#222';ctx.beginPath();ctx.arc(x,y-30,6,0,Math.PI*2);ctx.fill();
      const g=ctx.createRadialGradient(x,y-30,2,x,y-30,26);
      g.addColorStop(0,'rgba(255,220,140,0.32)');g.addColorStop(1,'rgba(255,220,140,0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y-30,26,0,Math.PI*2);ctx.fill();
    }
    function drawSign(s) {
      const x=s.x-camX,y=s.y-camY;
      ctx.fillStyle='#444';ctx.fillRect(x-1.5,y,3,18);
      if(s.type==='stop'){
        ctx.fillStyle='#c0392b';
        ctx.beginPath();
        for(let i=0;i<8;i++){const a=(i/8)*Math.PI*2-Math.PI/8;const px=x+Math.cos(a)*11,py=y-9+Math.sin(a)*11;i===0?ctx.moveTo(px,py):ctx.lineTo(px,py);}
        ctx.closePath();ctx.fill();
        ctx.fillStyle='#fff';ctx.font='bold 7px sans-serif';ctx.textAlign='center';ctx.fillText('STOP',x,y-7);
      } else if(s.type==='yield'){
        ctx.fillStyle='#f1c40f';
        ctx.beginPath();ctx.moveTo(x,y-19);ctx.lineTo(x+11,y-1);ctx.lineTo(x-11,y-1);ctx.closePath();ctx.fill();
      } else if(s.type==='parking'){
        ctx.fillStyle='#2980b9';ctx.fillRect(x-9,y-17,18,15);
        ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.fillText('P',x,y-5);
      }
    }
    function drawTrafficLight(tl) {
      const x=tl.x-camX,y=tl.y-camY;
      ctx.fillStyle='#2a2a2a';ctx.fillRect(x-2.5,y,5,24);
      ctx.fillStyle='#1a1a1a';ctx.fillRect(x-7,y-30,14,30);
      const phase=Math.floor((time*0.018+tl.phase)%130);
      let r=0.18,g=0.18,yel=0.18;
      if(phase<55)r=1;else if(phase<70)yel=1;else g=1;
      ctx.fillStyle=`rgba(230,50,50,${r})`;ctx.beginPath();ctx.arc(x,y-23,4.5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=`rgba(230,190,40,${yel})`;ctx.beginPath();ctx.arc(x,y-14,4.5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=`rgba(50,210,70,${g})`;ctx.beginPath();ctx.arc(x,y-5,4.5,0,Math.PI*2);ctx.fill();
    }
    function drawCarEntity(car) {
      const x=car.x-camX,y=car.y-camY;
      const vw=viewW(),vh=viewH();
      if(x<-80||y<-80||x>vw+80||y>vh+80)return;
      ctx.save();
      ctx.translate(x+car.w/2,y+car.h/2);
      if(car.axis==='y')ctx.rotate(car.dir>0?Math.PI/2:-Math.PI/2);
      else if(car.dir<0)ctx.scale(-1,1);
      const w=car.axis==='x'?car.w:car.h,h=car.axis==='x'?car.h:car.w;
      ctx.fillStyle='rgba(0,0,0,0.3)';ctx.fillRect(-w/2+3,-h/2+4,w,h);
      ctx.fillStyle=car.color;ctx.fillRect(-w/2,-h/2,w,h);
      ctx.fillStyle='rgba(20,30,50,0.7)';ctx.fillRect(-w/2+7,-h/2+3,w-18,h-6);
      if(car.type==='taxi'){ctx.fillStyle='#1a1a1a';ctx.fillRect(-w/2,-h/2+5,w,5);ctx.fillStyle='#f1c40f';ctx.fillRect(-5,-h/2-6,10,6);}
      ctx.fillStyle='#ffeaa7';ctx.fillRect(w/2-5,-h/2+2,5,5);ctx.fillRect(w/2-5,h/2-7,5,5);
      ctx.fillStyle='#111';
      ctx.fillRect(-w/2+5,-h/2-3,8,4);ctx.fillRect(w/2-14,-h/2-3,8,4);
      ctx.fillRect(-w/2+5,h/2-1,8,4);ctx.fillRect(w/2-14,h/2-1,8,4);
      ctx.restore();
    }
    function drawPlayerTaxi() {
      if(!playerTaxi)return;
      const t=playerTaxi,x=t.x-camX,y=t.y-camY;
      ctx.fillStyle='rgba(0,0,0,0.32)';ctx.fillRect(x+3,y+4,t.w,t.h);
      ctx.fillStyle='#f1c40f';ctx.fillRect(x,y,t.w,t.h);
      ctx.fillStyle='#1a1a1a';ctx.fillRect(x,y+5,t.w,5);
      ctx.fillStyle='#f1c40f';ctx.fillRect(x+t.w/2-5,y-7,10,7);
      ctx.fillStyle='rgba(20,30,50,0.7)';ctx.fillRect(x+7,y+3,t.w-16,t.h-6);
      if(taxiState==='arrived'){
        ctx.fillStyle='rgba(0,0,0,0.55)';ctx.fillRect(x+t.w/2-55,y-22,110,16);
        ctx.fillStyle='#fff';ctx.font='11px sans-serif';ctx.textAlign='center';
        ctx.fillText('Your taxi — E',x+t.w/2,y-10);
      }
      if(taxiState==='driving'&&taxiWaypoint){
        const wx=taxiWaypoint.x-camX,wy=taxiWaypoint.y-camY;
        ctx.strokeStyle='#f1c40f';ctx.lineWidth=2.5;
        ctx.beginPath();ctx.arc(wx,wy,12+Math.sin(time*0.1)*3,0,Math.PI*2);ctx.stroke();
        ctx.strokeStyle='rgba(241,196,15,0.35)';ctx.setLineDash([6,4]);
        ctx.beginPath();ctx.moveTo(x+t.w/2,y+t.h/2);ctx.lineTo(wx,wy);ctx.stroke();
        ctx.setLineDash([]);
      }
    }
    function drawBuildingTile(sx,sy,t,bx,by) {
      const palette=['#3a4555','#2e3848','#454e5e','#353e4c','#4a5568'];
      const col=palette[(bx*7+by*13)%palette.length];
      if(t===1){
        drawDepth(sx,sy-14,TILE,TILE+14,col,8);
        ctx.fillStyle='#151c28';
        ctx.fillRect(sx+7,sy-4,10,12);ctx.fillRect(sx+20,sy-4,10,12);
        if((bx+by)%3===0){ctx.fillStyle='rgba(255,200,100,0.3)';ctx.fillRect(sx+7,sy-4,10,12);}
      } else if(t===3){
        ctx.fillStyle='#3a3a48';ctx.fillRect(sx,sy,TILE,TILE);
        const pulse=0.55+Math.sin(time*0.012)*0.3;
        ctx.fillStyle=`rgba(255,150,40,${pulse})`;
        ctx.fillRect(sx+4,sy+1,TILE-8,TILE-5);
        ctx.fillStyle='#1a1008';ctx.fillRect(sx+8,sy+5,TILE-16,TILE-13);
        ctx.fillStyle='rgba(255,200,100,0.9)';ctx.font='bold 9px sans-serif';ctx.textAlign='center';
        ctx.fillText('YOU',sx+TILE/2,sy-5);
      } else if(t===4){
        ctx.fillStyle='#3a3a48';ctx.fillRect(sx,sy,TILE,TILE);
        drawDepth(sx+2,sy+3,TILE-4,TILE-7,'#4a4a58',3);
      } else if(t===5){
        ctx.fillStyle='#3a3a48';ctx.fillRect(sx,sy,TILE,TILE);
        ctx.fillStyle='#5c4030';ctx.fillRect(sx+5,sy+2,TILE-10,TILE-6);
        ctx.fillStyle='#3a2818';ctx.fillRect(sx+8,sy+5,TILE-16,TILE-12);
      } else if(t===10){
        ctx.fillStyle='#2a4a3a';ctx.fillRect(sx,sy,TILE,TILE);
        const pulse=0.5+Math.sin(time*0.015)*0.25;
        ctx.fillStyle=`rgba(80,200,120,${pulse})`;
        ctx.fillRect(sx+3,sy+2,TILE-6,TILE-6);
        ctx.fillStyle='#0a2010';ctx.fillRect(sx+7,sy+6,TILE-14,TILE-12);
        if(bx===16){
          ctx.fillStyle='#8f8';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
          ctx.fillText('MARKET',sx+TILE,sy-6);
        }
      }
    }
    function drawOtherPlayer(p) {
      if (p.block !== currentBlock || p.inTaxi) return;
      const px = p.x - camX, py = p.y - camY;
      const vw=viewW(),vh=viewH();
      if (px < -40 || py < -40 || px > vw+40 || py > vh+40) return;
      ctx.fillStyle = 'rgba(0,0,0,0.28)';
      ctx.beginPath(); ctx.ellipse(px+12, py+PLAYER_SIZE, 11, 4, 0, 0, Math.PI*2); ctx.fill();
      drawDepth(px+3, py+7, 18, 15, p.color || '#e74c3c', 4);
      drawDepth(px+5, py-1, 14, 12, '#e8c4a2', 3);
      ctx.fillStyle = '#222';
      ctx.fillRect(px+8, py+3, 3, 3); ctx.fillRect(px+13, py+3, 3, 3);
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      const nw = ctx.measureText(p.name).width + 8;
      ctx.fillRect(px+12-nw/2, py-16, nw, 13);
      ctx.fillStyle = '#fff'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(p.name, px+12, py-6);
    }

    function drawStreet() {
      const vw = viewW(), vh = viewH();
      const grad = ctx.createLinearGradient(0,0,0,vh);
      grad.addColorStop(0,'#0e1018'); grad.addColorStop(1,'#16141e');
      ctx.fillStyle = grad; ctx.fillRect(0,0,vw,vh);

      for (let y = 0; y < BLOCK_H; y++) {
        for (let x = 0; x < BLOCK_W; x++) {
          const sx = x*TILE-camX, sy = y*TILE-camY;
          if (sx < -TILE-30 || sy < -TILE-30 || sx > vw+30 || sy > vh+30) continue;
          const t = streetMap[y][x];
          if (t === 0) {
            ctx.fillStyle = '#28282f'; ctx.fillRect(sx,sy,TILE,TILE);
            if ((y===5||y===17) && x%2===0) { ctx.fillStyle='#55553a'; ctx.fillRect(sx+11,sy+15,14,3); }
            if ((x===7||x===27) && y%2===0) { ctx.fillStyle='#55553a'; ctx.fillRect(sx+15,sy+11,3,14); }
          } else if (t === 2) {
            ctx.fillStyle = '#3c3c48'; ctx.fillRect(sx,sy,TILE,TILE);
            ctx.strokeStyle = '#4a4a58'; ctx.strokeRect(sx+0.5,sy+0.5,TILE-1,TILE-1);
          } else if (t === 1 || t === 3 || t === 4 || t === 5 || t === 10) {
            drawBuildingTile(sx,sy,t,x,y);
          }
        }
      }
      streetLamps.forEach(l => drawLamp(l.x,l.y));
      trees.forEach(t => drawTree(t.x,t.y));
      signs.forEach(s => drawSign(s));
      trafficLights.forEach(tl => drawTrafficLight(tl));
      cars.forEach(c => drawCarEntity(c));
      drawPlayerTaxi();
      Object.values(otherPlayers).forEach(p => {
        if (Date.now() - p.lastSeen < 4000) drawOtherPlayer(p);
      });

      if (currentBlock === 0) {
        ctx.fillStyle = 'rgba(100,180,255,0.15)'; ctx.fillRect(0,0,8,vh);
        ctx.fillStyle = 'rgba(100,180,255,0.6)'; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('← Market', 12, vh/2);
      } else if (currentBlock === -1) {
        ctx.fillStyle = 'rgba(255,180,80,0.15)'; ctx.fillRect(vw-8,0,8,vh);
        ctx.fillStyle = 'rgba(255,180,80,0.6)'; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText('Home →', vw-12, vh/2);
      }
      if (moveTarget && taxiState === 'none') {
        const tx = moveTarget.x+PLAYER_SIZE/2-camX, ty = moveTarget.y+PLAYER_SIZE/2-camY;
        ctx.strokeStyle = 'rgba(100,190,255,0.75)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tx,ty,9+Math.sin(time*0.12)*2.5,0,Math.PI*2); ctx.stroke();
      }
    }

    function drawApartment() {
      const vw = viewW(), vh = viewH();
      ctx.fillStyle = '#18141c'; ctx.fillRect(0,0,vw,vh);
      for (let y = 0; y < APT_H; y++) {
        for (let x = 0; x < APT_W; x++) {
          const sx = x*TILE-camX, sy = y*TILE-camY;
          if (sx < -TILE || sy < -TILE || sx > vw || sy > vh) continue;
          const t = aptMap[y][x];
          if (t === 0) {
            ctx.fillStyle = (x+y)%2===0 ? '#2a2430' : '#25202a';
            ctx.fillRect(sx,sy,TILE,TILE);
          } else if (t === 1) {
            drawDepth(sx,sy-7,TILE,TILE+7,'#3a3042',5);
          } else if (t === 2) {
            ctx.fillStyle = '#2a2430'; ctx.fillRect(sx,sy,TILE,TILE);
            const pulse = 0.5+Math.sin(time*0.012)*0.3;
            ctx.fillStyle = `rgba(90,170,255,${pulse})`;
            ctx.fillRect(sx+4,sy+2,TILE-8,TILE-6);
            ctx.fillStyle = '#0a1520'; ctx.fillRect(sx+8,sy+6,TILE-16,TILE-14);
          } else if (t === 4) {
            ctx.fillStyle = '#2a2430'; ctx.fillRect(sx,sy,TILE,TILE);
            drawDepth(sx+2,sy+6,TILE-4,18,'#5a4060',4);
            ctx.fillStyle = '#8a7090'; ctx.fillRect(sx+4,sy+4,14,8);
          } else if (t === 5) {
            drawDepth(sx,sy-7,TILE,TILE+7,'#3a3042',5);
            ctx.fillStyle = '#1a2838'; ctx.fillRect(sx+4,sy+4,TILE-8,TILE-10);
          } else if (t === 6) {
            ctx.fillStyle = '#2a2430'; ctx.fillRect(sx,sy,TILE,TILE);
            drawDepth(sx+3,sy+1,TILE-6,32,'#7a8a9a',4);
          } else if (t === 7) {
            ctx.fillStyle = '#2a2430'; ctx.fillRect(sx,sy,TILE,TILE);
            drawDepth(sx+2,sy+10,TILE-4,14,'#5a4030',4);
          } else if (t === 8) {
            ctx.fillStyle = '#2a2430'; ctx.fillRect(sx,sy,TILE,TILE);
            if (x === 3) {
              drawDepth(sx+2,sy+8,TILE*2-6,22,'#4a3548',5);
              drawDepth(sx+2,sy+2,TILE*2-6,12,'#5a4558',3);
              ctx.fillStyle = '#6a5568';
              ctx.fillRect(sx+6,sy+12,26,12); ctx.fillRect(sx+TILE+2,sy+12,26,12);
            }
          } else if (t === 9) {
            ctx.fillStyle = '#2a2430'; ctx.fillRect(sx,sy,TILE,TILE);
            if (x === 8) {
              drawDepth(sx+4,sy+22,TILE*2-10,8,'#333',3);
              drawDepth(sx+6,sy+4,TILE*2-14,20,'#1a1a22',4);
              if (tvOn) {
                const fl = 0.72+Math.sin(time*0.14)*0.14;
                ctx.fillStyle = `rgba(70,140,230,${fl})`;
                ctx.fillRect(sx+10,sy+7,TILE*2-22,14);
              } else {
                ctx.fillStyle = '#0a0a12';
                ctx.fillRect(sx+10,sy+7,TILE*2-22,14);
              }
            }
          }
        }
      }
    }

    function drawPlayer(px, py) {
      if (taxiState === 'riding' || taxiState === 'driving') return;
      if (sitting) {
        const y = py+4;
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.beginPath(); ctx.ellipse(px+12,py+20,11,3.5,0,0,Math.PI*2); ctx.fill();
        drawDepth(px+2,y+8,20,12,playerColor,3);
        drawDepth(px+4,y,16,11,'#e8c4a2',2);
        ctx.fillStyle = '#222';
        ctx.fillRect(px+8,y+3,3,3); ctx.fillRect(px+13,y+3,3,3);
        return;
      }
      const bob = player.walking ? Math.sin(time*0.032)*3 : 0;
      const y = py + bob;
      ctx.fillStyle = 'rgba(0,0,0,0.32)';
      ctx.beginPath(); ctx.ellipse(px+PLAYER_SIZE/2,py+PLAYER_SIZE,12,4.5,0,0,Math.PI*2); ctx.fill();
      drawDepth(px+3,y+7,18,15,playerColor,4);
      drawDepth(px+5,y-1,14,12,'#e8c4a2',3);
      ctx.fillStyle = '#222';
      if (player.facing==='down'||player.facing==='up') {
        ctx.fillRect(px+8,y+3,3,3); ctx.fillRect(px+13,y+3,3,3);
      } else if (player.facing==='left') ctx.fillRect(px+7,y+3,3,3);
      else ctx.fillRect(px+14,y+3,3,3);
      if (player.walking) {
        const leg = Math.sin(time*0.032)*4;
        ctx.fillStyle = '#3a5a9a';
        ctx.fillRect(px+6,y+20,5,5+leg); ctx.fillRect(px+13,y+20,5,5-leg);
      }
      if (myName) {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        const nw = ctx.measureText(myName).width + 8;
        ctx.fillRect(px+12-nw/2, y-18, nw, 13);
        ctx.fillStyle = '#ffc878';
        ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(myName, px+12, y-8);
      }
    }

    // ============================================================
    // UPDATE
    // ============================================================
    function update() {
      time++;
      if (!gameStarted) return;

      cars.forEach(c => {
        if (c.axis==='x') {
          c.x += c.dir*c.speed;
          if (c.x > BLOCK_W*TILE+60) c.x = -60;
          if (c.x < -60) c.x = BLOCK_W*TILE+60;
        } else {
          c.y += c.dir*c.speed;
          if (c.y > BLOCK_H*TILE+60) c.y = -60;
          if (c.y < -60) c.y = BLOCK_H*TILE+60;
        }
      });

      if (taxiState === 'called' && playerTaxi) {
        const dx = (player.x-25)-playerTaxi.x, dy = player.y-playerTaxi.y;
        const dist = Math.hypot(dx,dy);
        if (dist < 10) {
          taxiState = 'arrived';
          phoneStatus.textContent = 'Taxi arrived! Press E.';
          hud.innerHTML = 'Taxi is here<br><span style="color:#8af">Press E / tap E button</span>';
        } else {
          playerTaxi.x += (dx/dist)*2.5;
          playerTaxi.y += (dy/dist)*2.5;
        }
      }

      if (playerTaxi && taxiWaypoint && (taxiState==='driving'||taxiState==='riding')) {
        const dx = taxiWaypoint.x-(playerTaxi.x+playerTaxi.w/2);
        const dy = taxiWaypoint.y-(playerTaxi.y+playerTaxi.h/2);
        const dist = Math.hypot(dx,dy);
        if (dist < 14) {
          taxiState = 'riding'; taxiWaypoint = null;
          modeBadge.textContent = 'In taxi';
          phoneStatus.textContent = 'Arrived.';
        } else {
          taxiState = 'driving';
          playerTaxi.x += (dx/dist)*TAXI_SPEED;
          playerTaxi.y += (dy/dist)*TAXI_SPEED;
          player.x = playerTaxi.x+10;
          player.y = playerTaxi.y+2;
        }
      } else if (taxiState==='riding' && playerTaxi) {
        player.x = playerTaxi.x+10;
        player.y = playerTaxi.y+2;
      }

      if (!sitting && taxiState !== 'riding' && taxiState !== 'driving') {
        let dx=0, dy=0;
        if (keys['KeyW']||keys['ArrowUp']) { dy-=1; player.facing='up'; }
        if (keys['KeyS']||keys['ArrowDown']) { dy+=1; player.facing='down'; }
        if (keys['KeyA']||keys['ArrowLeft']) { dx-=1; player.facing='left'; }
        if (keys['KeyD']||keys['ArrowRight']) { dx+=1; player.facing='right'; }
        if (stickActive) {
          dx = stickDX; dy = stickDY;
          if (Math.abs(dx) > Math.abs(dy)) player.facing = dx > 0 ? 'right' : 'left';
          else if (Math.abs(dy) > 0.2) player.facing = dy > 0 ? 'down' : 'up';
        }

        if (dx===0 && dy===0 && moveTarget) {
          const tdx = moveTarget.x-player.x, tdy = moveTarget.y-player.y;
          const dist = Math.hypot(tdx,tdy);
          if (dist < 5) moveTarget = null;
          else {
            dx = tdx/dist; dy = tdy/dist;
            if (Math.abs(tdx)>Math.abs(tdy)) player.facing = tdx>0?'right':'left';
            else player.facing = tdy>0?'down':'up';
          }
        } else if (dx!==0||dy!==0) {
          if (!stickActive) moveTarget = null;
        }

        player.walking = Math.abs(dx)>0.05 || Math.abs(dy)>0.05;
        const len = Math.hypot(dx, dy);
        if (len > 1) { dx /= len; dy /= len; }

        const map = scene==='street'?streetMap:aptMap;
        const mw = scene==='street'?BLOCK_W:APT_W;
        const mh = scene==='street'?BLOCK_H:APT_H;

        const nx = player.x+dx*SPEED;
        if (canWalk(map,nx,player.y,mw,mh)) player.x = nx;
        const ny = player.y+dy*SPEED;
        if (canWalk(map,player.x,ny,mw,mh)) player.y = ny;

        const tile = getTileUnder(player.x,player.y);
        if (scene==='street' && currentBlock===0 && tile===3) {
          scene = 'apartment';
          player.x = aptSpawn.x; player.y = aptSpawn.y;
          moveTarget = null;
          hud.innerHTML = 'Your Apartment — ' + MY_ADDRESS + '<br><span style="color:#999">E near couch</span>';
        } else if (scene==='apartment' && tile===2) {
          scene = 'street';
          player.x = 15.5*TILE; player.y = 9.2*TILE;
          sitting = false; tvOn = false; moveTarget = null;
          updateHudStreet();
        }
      }

      if (scene === 'street') {
        const edgeX = (taxiState==='riding'||taxiState==='driving') && playerTaxi ? playerTaxi.x : player.x;
        if (edgeX < 22 && currentBlock === 0) switchBlock(-1, 'right');
        else if (edgeX > BLOCK_W*TILE - PLAYER_SIZE - 22 && currentBlock === -1) switchBlock(0, 'left');
      }

      const fx = (taxiState==='riding'||taxiState==='driving')&&playerTaxi ? playerTaxi.x : player.x;
      const fy = (taxiState==='riding'||taxiState==='driving')&&playerTaxi ? playerTaxi.y : player.y;
      camX += (fx - viewW()/2 + PLAYER_SIZE/2 - camX) * 0.12;
      camY += (fy - viewH()/2 + PLAYER_SIZE/2 - camY) * 0.12;

      if (time - lastBroadcast > 6) { broadcastState(); lastBroadcast = time; }
      const now = Date.now();
      Object.keys(otherPlayers).forEach(id => {
        if (now - otherPlayers[id].lastSeen > 6000) delete otherPlayers[id];
      });
    }

    function render() {
      if (scene === 'street') drawStreet();
      else drawApartment();
      if (gameStarted) drawPlayer(player.x - camX, player.y - camY);
    }

    function loop() { update(); render(); requestAnimationFrame(loop); }

    // PWA install prompt
    let deferredPrompt = null;
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      deferredPrompt = e;
      document.getElementById('installBanner').classList.add('show');
    });
    document.getElementById('btnInstall').onclick = async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      document.getElementById('installBanner').classList.remove('show');
    };
    document.getElementById('btnInstallDismiss').onclick = () => {
      document.getElementById('installBanner').classList.remove('show');
    };

    // INIT
    resizeCanvas();
    generateBlock(0);
    generateApartment();
    document.getElementById('nameModal').classList.add('show');
    setTimeout(() => document.getElementById('nameInput').focus(), 200);
    loop();
  </script>
</body>
</html>
