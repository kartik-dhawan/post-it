import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postRoutes from "./Routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://shelby:shelby101@cluster0.fbb80.mongodb.net/post-it?retryWrites=true&w=majority";

const PORT = 3001;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Listening on port: " + PORT));
  })
  .catch((err) => console.log(err));

app.use("/posts", postRoutes);
