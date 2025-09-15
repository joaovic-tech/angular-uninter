// Aula 2 - Prática: Criando um servidor HTTP básico com Node.js

import http from 'http';

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === '/') {
    res.end(JSON.stringify({ mensagem: "Olá, mundo!" }));
  } else if (req.url === '/about') {
    res.end(JSON.stringify({ mensagem: "Sobre nós" }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ mensagem: "Rota não encontrada" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}`);
});