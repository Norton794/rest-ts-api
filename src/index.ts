import express, { Request, Response, NextFunction } from "express";
import usersRoute from './routes/users.route.ts'

const app = express();

app.use(usersRoute)

app.listen(3010, ()=>{
    console.log("Aplicação na porta 3010")
})