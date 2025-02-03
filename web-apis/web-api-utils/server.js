import express from 'express';
import { lowercase, uppercase } from './textUtils.js';
import { minimum, maximum } from './numberUtils.js';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para解析 JSON do corpo da requisição

// Rotas para utilitário de texto
app.post('/text', (req, res) => {
  const { action, input } = req.body;

  switch (action) {
    case 'lowercase':
      res.send(lowercase(input));
      break;
    case 'uppercase':
      res.send(uppercase(input));
      break;
    default:
      res.status(400).send('Ação inválida');
  }
});

// Rotas para utilitário de número
app.get('/number', (req, res) => {
  const { action, input } = req.query;
  const numbers = input.split(',').map(Number);

  switch (action) {
    case 'minimum':
      res.send(String(minimum(numbers)));
      break;
    case 'maximum':
      res.send(String(maximum(numbers)));
      break;
    default:
      res.status(400).send('Ação inválida');
  }
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});