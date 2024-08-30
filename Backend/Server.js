import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
dotenv.config();
app.use(cors());

const port = process.env.PORT || 8086;

app.listen(port, () => {
    console.log("=================================");
    console.log(`** Server is running on ${port} **`);
  });

  const url = process.env.MONGODB_URL;

mongoose.connect(url, {});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("***** MongoDB connected *****");
  console.log("=================================");
});

import UserRouter from "./router/Signup.js";
app.use("/user", UserRouter);