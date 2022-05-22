import chalk from "chalk";
import express from "express";
import "dotenv/config";
import { login } from "./db/index.js";
import { post, createKisk, getKisks, getUser } from "./db/postsFunctions.js"; 
import cors from "cors";

const app = express();
const port = process.env.PORT || 8087;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// General
app.get("/", (req, res) => {
  res.send("Hello World! This is the API of portal do aluno - ifc araquari");
});

// Kisk
app.get("/kisks", async (req, res) => {
  let kisks = await getKisks();
  res.status(kisks.status).send(kisks.content);
});

// User
app.get("/user/:id", async (req: any, res: any) => {
  let user = await getUser(req.params.id);
  res.status(user.status).send(user.content);
});

// Login
app.post("/login", (req, res) => {
  login(req.body.email, req.body.password)
    .then((result) => {
      res.status(result.status).send(result.content || result.message);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

// Kisk
app.post("/createKisk", (req, res) => {
  createKisk(req.body)
    .then((result) => {
      res.status(result.status).send(result.message);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(chalk.green(`Server started on port ${port}`));
});
