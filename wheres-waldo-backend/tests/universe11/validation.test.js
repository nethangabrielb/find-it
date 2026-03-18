const indexRouter = require("../../routes/indexRoutes");
const cors = require("cors");
const request = require("supertest");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

// Universe 11 Character Coordinate Validation Testing

// TEST CHARACTER #1 COORDINATE VALIDATION
describe("wrong coordinates on character #1 on setting #3 ", () => {
  test("wrong random coordinates #1 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 800, y: 300 }, characterId: 4 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1500, y: 600 }, characterId: 4 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1100, y: 439 }, characterId: 4 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1151, y: 479 }, characterId: 4 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #1 on setting #3", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1125.57, y: 441.62 }, characterId: 4 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1128.91, y: 478.43 }, characterId: 4 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1145.64, y: 460.03 }, characterId: 4 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1103, y: 461.7 }, characterId: 4 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1127.24, y: 461.7 }, characterId: 4 })
      .expect(200, done);
  });
});

// TEST CHARACTER #2 COORDINATE VALIDATION
describe("wrong coordinates on character #2 on setting #3 ", () => {
  test("wrong random coordinates #1 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 300, y: 2000 }, characterId: 5 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 700, y: 2500 }, characterId: 5 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 465, y: 505 }, characterId: 5 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 511, y: 2345 }, characterId: 5 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #2 on setting #3", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 488.36, y: 2320.22 }, characterId: 5 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 498.29, y: 2340.3 }, characterId: 5 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 506.75, y: 2323.57 }, characterId: 5 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 476.65, y: 2338.629 }, characterId: 5 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 493.37, y: 2326.91 }, characterId: 5 })
      .expect(200, done);
  });
});

// TEST CHARACTER #3 COORDINATE VALIDATION
describe("wrong coordinates on character #3 on setting #3 ", () => {
  test("wrong random coordinates #1 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 2000, y: 2000 }, characterId: 6 })
      .expect(404, done);
  });
  test("wrong random coordinates #2 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 500, y: 1500 }, characterId: 6 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #1 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1130, y: 1300 }, characterId: 6 })
      .expect(404, done);
  });
  test("wrong coordinates that is near click coordinates #2 on photo #3", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 2000, y: 1430 }, characterId: 6 })
      .expect(404, done);
  });
});

describe("correct coordinates on character #3 on setting #3", () => {
  test("correct coordinates on top edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1152.33, y: 1304.81 }, characterId: 6 })
      .expect(200, done);
  });
  test("correct coordinates on bottom edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1157.35, y: 1421.91 }, characterId: 6 })
      .expect(200, done);
  });
  test("correct coordinates on right edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1192.47, y: 1338.27 }, characterId: 6 })
      .expect(200, done);
  });
  test("correct coordinates on left edge", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1133.93, y: 1353.32 }, characterId: 6 })
      .expect(200, done);
  });
  test("correct coordinates on random area", (done) => {
    request(app)
      .post("/photos/3")
      .type("json")
      .send({ coordinates: { x: 1150.66, y: 1360.01 }, characterId: 6 })
      .expect(200, done);
  });
});
