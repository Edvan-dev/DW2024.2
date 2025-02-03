// server.js
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(minhaFuncao());
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// minhaFuncao.js
export function minhaFuncao() {
    return 'Hello World!!';
}