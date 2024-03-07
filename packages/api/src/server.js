const express = require("express");
const db = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("ok"));

db.connect(process.env.DB_URI)
  .then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("Serving from PORT ", process.env.PORT);
    });
  })
  .catch((e) => console.log(e.message));
