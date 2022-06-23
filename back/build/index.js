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
// Kisks, retrieve all the kisks existing in the database
app.get("/kisks", retrieveKisks);
// User, retrieve a user by id
app.get("/user/:id", getUserById);
// Login, authenticates an user
app.post("/login", loginRoute);
// Kisk, create a new kisk
app.post("/createKisk/:debug", newKisk);
// Search Kisk and user, search for a kisk or user
app.post("/search/:query", Search);
app.listen(port, () => {
    console.log(chalk.green(`Server started on port ${port}`));
});
//# sourceMappingURL=index.js.map