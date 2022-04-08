import chalk from "chalk";
import express from "express";
//Just testing
import './db/index';
const app = express();
const port = process.env.PORT || 8087;
app.get('/', (req, res) => {
    res.send('Hello World! This is the API of portal do aluno - ifc araquari');
});
app.post("/login", (req, res) => {
});
app.listen(port, () => {
    console.log(chalk.green(`Server started on port ${port}`));
});
//# sourceMappingURL=index.js.map