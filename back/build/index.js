import chalk from "chalk";
import express from "express";
import "dotenv/config";
import { getUserById } from "./routes/getUser.js";
import { retrieveKisks, newKisk } from "./routes/kisks.js";
import { Search } from "./routes/search.js";
import { loginRoute } from "./routes/login.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8087;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// General
app.get("/", (req, res) => {
    res
        .status(200)
        .send("Hello World! This is the API of portal do aluno - ifc araquari");
});
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
app.listen(port, () => {
    console.log(chalk.green(`Server started on port ${port}`));
});
//# sourceMappingURL=index.js.map