import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes'
const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Norton" }];
  res.status(StatusCodes.OK).json(users);
});

usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    res.status(StatusCodes.OK).json({ uuid });
  }
);
export default usersRoute;
