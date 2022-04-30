import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users.route.ts";
import statusRoute from "./routes/status.route.ts";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRoute);
app.use(usersRoute);

app.listen(3010, () => {
  console.log("Aplicação na porta 3010");
});
