import chalk from "chalk";
import express from "express";
import "dotenv/config";
import { login } from "./db/index.js";
const app = express();
const port = process.env.PORT || 8087;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World! This is the API of portal do aluno - ifc araquari");
});
app.post("/login", (req, res) => {
    login(req.body.email, req.body.password)
        .then((result) => {
        res.status(result.status).send(result.user || result.message);
    })
        .catch((err) => {
        console.log(err);
        res.status(500).send(err);
    });
});
app.listen(port, () => {
    console.log(chalk.green(`Server started on port ${port}`));
});
//# sourceMappingURL=index.js.map