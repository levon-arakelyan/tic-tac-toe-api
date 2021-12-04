import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config();
const port = process.env.SERVER_PORT;

const app = express();


app.get("/", (req, res) => {
  res.send("Hello my  world!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});