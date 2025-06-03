import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Hello World");
});

app.get("/haider", (req: Request, res: Response) => {
  res.json({ key: "Hello I am Haider" });
});
app.get("/cakes/cakeID", (req: Request, res: Response) => {});

app.listen(8000, () => {
  console.log("Server iis running on Port 8000");
});
