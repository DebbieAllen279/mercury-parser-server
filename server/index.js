const express = require('express');
const Mercury = require('@postlight/mercury-parser');
const app = express();
const port = process.env.PORT || 3000;

app.get('/parser', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send({ error: 'Missing url parameter' });
  }
  try {
    const result = await Mercury.parse(url);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Mercury Parser server running on port ${port}`);
});
