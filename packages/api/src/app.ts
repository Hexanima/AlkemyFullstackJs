import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { PORT } from "./constants";

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
