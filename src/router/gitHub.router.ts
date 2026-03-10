import { Router } from "express";
import helloController from "../controller/hello.controller.js";

const gitHubRouter = Router();

gitHubRouter.get("/webhook", helloController.gitHubPRCreated);

export default gitHubRouter;
