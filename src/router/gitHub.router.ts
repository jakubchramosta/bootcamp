import express from "express";
import helloController from "../controller/hello.controller.ts";

const gitHubRouter = express.Router();

gitHubRouter.get("/webhook", helloController.gitHubPRCreated);

export default gitHubRouter;
