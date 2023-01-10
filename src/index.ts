import express, { Express, Request, Response} from "express";

const PORT = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello From express")
});

app.listen(PORT, ()=> {
  console.log(`now listening on port ${PORT}`)
})