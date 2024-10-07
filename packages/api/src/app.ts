import express from "express";
import dotenv from "dotenv";
import { PORT } from "./constants";
import {} from "app-domain"

dotenv.config();

const app = express();

app.get("/*", (req, res) => {
  res.json(req.url);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
