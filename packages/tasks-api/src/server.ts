import express, { Request, Response } from 'express'; 
import db from "mongoose";
// const morgan = require("morgan");
import { logger, setCache } from "./middlewares/middleware";

import tasksRoute from "./routes/tasksRoute";

import dotenv from "dotenv";
dotenv.config();

const app = express();
// Parses incoming JSON payloads in request bodies, making them accessible through req.body.
app.use(express.json());
// Parses incoming URL-encoded request bodies (form data), making them accessible through req.body.
app.use(express.urlencoded());

app.use(logger);
// app.use(morgan("combined"));
app.use(setCache);

app.get("/", (req: Request, res: Response) => res.send("ok"));
app.use("/api/tasks", tasksRoute);

db.connect(process.env.DB_URI!)
  .then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT!, () => {
      console.log("Serving from PORT ", process.env.PORT);
    });
  })
  .catch((e: Error) => console.log(e.message));
