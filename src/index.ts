import express from "express";
import helloRouter from "./router/hello.router.js";
import gitHubRouter from "./router/gitHub.router.js";
import "reflect-metadata";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/hello", helloRouter);

app.use("/github", gitHubRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
