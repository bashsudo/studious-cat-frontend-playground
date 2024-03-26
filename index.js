const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for serving my-meetings-example.html
app.get('/my-meetings', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'my-meetings-example.html'));
});

// Route for serving playground.html
app.get('/playground', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'playground.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
