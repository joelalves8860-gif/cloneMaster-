const express = require("express");
const fetch = require("node-fetch"); // ou npm i node-fetch se não tiver
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // para servir index.html e script.js

// Rota para buscar HTML de qualquer URL
app.post("/get-html", async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).send("URL não fornecida");

    try {
        const response = await fetch(url);
        const html = await response.text();
        res.send(html);
    } catch (err) {
        res.status(500).send("Erro ao buscar HTML: " + err.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server rodando na porta ${PORT}));
