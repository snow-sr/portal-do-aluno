import chalk from "chalk";
<<<<<<< HEAD
import express, { application } from "express";
import "dotenv/config";

import { getUserById } from "./routes/getUser.js";
import { retrieveKisks, newKisk } from "./routes/kisks.js";
import { Search } from "./routes/search.js";
import { loginRoute } from "./routes/login.js";

=======
import express from "express";
import "dotenv/config";
import { login } from "./db/index.js";
import { post, createKisk, getKisks } from "./db/postsFunctions.js";
>>>>>>> origin/vini
import cors from "cors";

const app = express();
const port = process.env.PORT || 8087;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

<<<<<<< HEAD
// General
=======
>>>>>>> origin/vini
app.get("/", (req, res) => {
  res.send("Hello World! This is the API of portal do aluno - ifc araquari");
});

<<<<<<< HEAD
// Kisk
app.get("/kisks", retrieveKisks);

// User
app.get("/user/:id", getUserById);

// Login
app.post("/login", loginRoute);

// Kisk
app.post("/createKisk", newKisk);

// Search Kisk and user
app.post("/search/:query", Search);
=======
app.get("/kisks", async (req, res) => {
  let kisks = await getKisks();
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
>>>>>>> origin/vini

app.listen(port, () => {
  console.log(chalk.green(`Server started on port ${port}`));
});
