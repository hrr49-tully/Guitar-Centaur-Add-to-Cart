const request = require("supertest");
const app = require('./app');

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/api/values")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });

  test("It should have a POST method", done => {
    request(app)
      .post("/api/values")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
});


// "test": "echo \"Error: no test specified\" && exit 1"