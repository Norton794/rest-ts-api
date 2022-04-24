import express, { Request, Response, NextFunction } from "express";

const app = express();
app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foi: 'Sucesso' });
});

app.listen(3010, ()=>{
    console.log("Aplicação na porta 3010")
})