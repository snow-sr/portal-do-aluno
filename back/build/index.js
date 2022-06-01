var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from "chalk";
import express from "express";
import "dotenv/config";
import { login } from "./db/index.js";
import { createKisk, getKisks } from "./db/postsFunctions.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8087;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World! This is the API of portal do aluno - ifc araquari");
});
app.get("/kisks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let kisks = yield getKisks();
    res.status(kisks.status).send(kisks.content);
}));
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
app.listen(port, () => {
    console.log(chalk.green(`Server started on port ${port}`));
});
//# sourceMappingURL=index.js.map