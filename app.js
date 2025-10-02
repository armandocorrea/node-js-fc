const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js rodando no VS Code 🚀");
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

module.exports = server; // exporta para testes
