const request = require("supertest");
const server = require("../app");

describe("Teste do servidor Node.js", () => {
  afterAll(() => {
    server.close(); // encerra o servidor após os testes
  });

  test("Deve retornar Hello, Node.js rodando no VS Code 🚀", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, Node.js rodando no VS Code 🚀");
  });

  test("Deve retornar Status: Servidor está rodando ✅", async () => {
    const response = await request(server).get("/status");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Status: Servidor está rodando ✅");
  });

  test("Deve retornar Sobre: Exemplo de aplicação Node.js com rotas básicas", async () => {
    const response = await request(server).get("/about");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Sobre: Exemplo de aplicação Node.js com rotas básicas");
  });

  test("Deve retornar Rota não encontrada ❌", async () => {
    const response = await request(server).get("/not-found");
    expect(response.status).toBe(404);
    expect(response.text).toBe("Rota não encontrada ❌");
  });
});
