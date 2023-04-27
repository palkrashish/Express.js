import express from "express";
import connectdb from "./db/connectdb.js";
const app = express();

const port = process.env.PORT || "3000";

const DATABASE_URL = "mongodb://127.0.0.1:27017/schholdb";
connectdb(DATABASE_URL);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
