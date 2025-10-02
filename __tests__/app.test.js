const request = require("supertest");
const server = require("../app");

describe("Teste do servidor Node.js", () => {
  afterAll(() => {
    server.close(); // encerra o servidor após os testes
  });

  test("Deve retornar Hello, Node.js rodando no VS Code 🚀", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(400);
    expect(response.text).toBe("Hello, Node.js rodando no VS Code 🚀");
  });
});
