const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/indexRoutes");
const dotenv = require('dotenv');


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send({
    error: err.message || "Internal Server Error",
  });
});

app.listen(PORT);
