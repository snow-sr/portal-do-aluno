import chalk from "chalk";
import express from "express";
import "dotenv/config";
import { login, createUser } from "./db/index.js";
import {
  createKisk,
  getVisibleKisks,
  searchKisksById,
  changeKiskVisibility,
} from "./db/kisksFunctions.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8087;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! This is the API of portal do aluno - ifc araquari");
});

app.get("/kisks", async (req, res) => {
  let kisks = await getVisibleKisks();
  res.status(kisks.status).send(kisks.content);
});

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

app.post("/createUser", (req, res) => {
  createUser(req.body)
    .then((result) => {
      res.status(result.status).send(result.message);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.post("/getKisksByUser", (req, res) => {
  searchKisksById(req.body.userId)
    .then((result) => {
      res.status(result.status).send(result.content || result.message);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.post("/changeKiskVisibility", (req, res) => {
  changeKiskVisibility(req.body.kiskId, req.body.isVisible)
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
