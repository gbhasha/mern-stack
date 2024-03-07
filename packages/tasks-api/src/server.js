const express = require("express");
const db = require("mongoose");
const { logger } = require("./middlewares/middleware");

const tasksRoute = require("./routes/tasksRoute");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(logger);
app.get("/", (req, res) => res.send("ok"));
app.use("/api/tasks", tasksRoute);

db.connect(process.env.DB_URI)
  .then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("Serving from PORT ", process.env.PORT);
    });
  })
  .catch((e) => console.log(e.message));
