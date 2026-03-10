import { Request, Response, NextFunction} from "express";

const helloController = {
  async gitHubPRCreated(req: Request, res: Response, next: NextFunction) {
    console.log("GitHub response", req.body);
    res.status(200).json({ message: "GitHub PR created event received" });
  },
};

export default helloController;
