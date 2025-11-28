const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar pasta public
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rota teste IA
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    const botReply = `IA: Recebi sua mensagem -> "${userMessage}"`;
    res.json({ reply: botReply });
});

app.listen(PORT, () => {
    console.log(`CloneMaster rodando em http://localhost:${PORT}`);
});
