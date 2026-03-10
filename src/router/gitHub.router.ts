import { Router } from "express";
import helloController from "../controller/hello.controller.js";

const gitHubRouter = Router();

gitHubRouter.post("/webhook", helloController.gitHubPRCreated);

export default gitHubRouter;
