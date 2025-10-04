const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, Node.js rodando no VS Code 🚀");
  } 
  else if (req.url === "/status" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Status: Servidor está rodando ✅");
  } 
  else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Sobre: Exemplo de aplicação Node.js com rotas básicas");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Rota não encontrada ❌");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

module.exports = server; // exporta para testes