const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.post('/analyze', async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch('https://kooye7u703.execute-api.us-east-1.amazonaws.com/NLPAnalyzer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    console.log("🔎 NLP API Response:", data);
    res.json(data);
  } catch (error) {
    console.error('❌ Error calling NLP API:', error);
    res.status(500).json({ error: 'Could not analyze text' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
