const build = require('../src/app');
const app = build();

describe("testing-server-routes", () => {
    it("GET /api - success", async () => {
      const res = await app.inject({
        url: "/api",
      });
      expect(res.json()).toEqual({
        msg: "OK",
        success: true
      });
    });
  });
