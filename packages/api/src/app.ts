import express from "express";
import dotenv from "dotenv";
import { PORT } from "./constants";

dotenv.config();

const app = express();

app.get("/*", (req, res) => {
  res.json(req.url);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
