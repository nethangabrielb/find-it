const indexRouter = require("../../routes/indexRoutes");
const cors = require("cors");
const request = require("supertest");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

// 5 Days Character Coordinate Validation Testing

// TEST CHARACTER #1 COORDINATE VALIDATION
describe("wrong coordinates on character #1 on setting #2 ", () => {
  test("wrong random coordinates #1 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1000, y: 600 }, characterId: 7 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1400, y: 1000 }, characterId: 7 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1365, y: 849 }, characterId: 7 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1400, y: 900 }, characterId: 7 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #1 on setting #2", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1381, y: 853 }, characterId: 7 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1386, y: 911 }, characterId: 7 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1394, y: 875 }, characterId: 7 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1370, y: 874 }, characterId: 7 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1383, y: 871 }, characterId: 7 })
      .expect(200, done);
  });
});

// TEST CHARACTER #2 COORDINATE VALIDATION
describe("wrong coordinates on character #2 on setting #2 ", () => {
  test("wrong random coordinates #1 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 500, y: 700 }, characterId: 8 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 300, y: 500 }, characterId: 8 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 280, y: 620 }, characterId: 8 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 315, y: 685 }, characterId: 8 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #2 on setting #2", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 300, y: 625 }, characterId: 8 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 300, y: 682 }, characterId: 8 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 312, y: 650 }, characterId: 8 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 287, y: 649 }, characterId: 8 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 298, y: 638 }, characterId: 8 })
      .expect(200, done);
  });
});

// TEST CHARACTER #3 COORDINATE VALIDATION
describe("wrong coordinates on character #3 on setting #2 ", () => {
  test("wrong random coordinates #1 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 800, y: 90 }, characterId: 9 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 1000, y: 100 }, characterId: 9 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 940, y: 70 }, characterId: 9 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #2", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 980, y: 100 }, characterId: 9 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #3 on setting #2", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 963, y: 80 }, characterId: 9 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 963, y: 96 }, characterId: 9 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 972.99, y: 94 }, characterId: 9 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 951, y: 90 }, characterId: 9 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/2")
      .type("json")
      .send({ coordinates: { x: 963, y: 86 }, characterId: 9 })
      .expect(200, done);
  });
});
