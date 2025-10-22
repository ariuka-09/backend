import bodyParser from "body-parser";
import express, { request } from "express";
const app = express();
app.use(bodyParser.json());
app.listen(3001, () => {});
app.get("/", async (request, response) => {
  response.send("hello world!");
});
app.post("/home", (request, response) => {
  console.log("working");
  response.send(request.body);
});
