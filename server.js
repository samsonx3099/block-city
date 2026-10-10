const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the README.md as index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'README.md'), { 
    contentType: 'text/html; charset=utf-8' 
  });
});

// Serve any static files from public/
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`🧱 Block City running on port ${PORT}`);
});