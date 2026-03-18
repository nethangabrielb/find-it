const indexRouter = require("../../routes/indexRoutes");
const cors = require("cors");
const request = require("supertest");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

// Gamerverse Character Coordinate Validation Testing

// TEST CHARACTER #1 COORDINATE VALIDATION
describe("wrong coordinates on character #1 on setting #1 ", () => {
  test("wrong random coordinates #1 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 87, y: 705 }, characterId: 1 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 100, y: 500 }, characterId: 1 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 38, y: 312 }, characterId: 1 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 97, y: 406 }, characterId: 1 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #1 on setting #1", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 66.3, y: 316.72 }, characterId: 1 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 75.41, y: 402.69 }, characterId: 1 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 95, y: 405.69 }, characterId: 1 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 39, y: 313.7 }, characterId: 1 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 50, y: 350 }, characterId: 1 })
      .expect(200, done);
  });
});

// TEST CHARACTER #2 COORDINATE VALIDATION
describe("wrong coordinates on character #2 on setting #1 ", () => {
  test("wrong random coordinates #1 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1000, y: 2000 }, characterId: 2 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 25, y: 3000 }, characterId: 2 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1837, y: 3009 }, characterId: 2 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1893, y: 3107 }, characterId: 2 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #2 on setting #1", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1863.77, y: 3013.16 }, characterId: 2 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1873.37, y: 3105.05 }, characterId: 2 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1891.2, y: 3061.16 }, characterId: 2 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1839.08, y: 3066.02 }, characterId: 2 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1850, y: 3050 }, characterId: 2 })
      .expect(200, done);
  });
});

// TEST CHARACTER #3 COORDINATE VALIDATION
describe("wrong coordinates on character #3 on setting #1 ", () => {
  test("wrong random coordinates #1 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 500, y: 1000 }, characterId: 3 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1000, y: 1500 }, characterId: 3 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1255, y: 2500 }, characterId: 3 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #1", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1308, y: 2680 }, characterId: 3 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #3 on setting #1", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1294.62, y: 2605.83 }, characterId: 3 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1291.88, y: 2666.17 }, characterId: 3 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1306, y: 2642.86 }, characterId: 3 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1261.71, y: 2633.259 }, characterId: 3 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/1")
      .type("json")
      .send({ coordinates: { x: 1290.51, y: 2630.51 }, characterId: 3 })
      .expect(200, done);
  });
});
