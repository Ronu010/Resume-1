const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Banking System API</h1>');
});

app.listen(PORT, () => {
  console.log(`Banking API running on http://localhost:${PORT}`);
});
