import { login } from "../db/index.js";

export let loginRoute = async (req: any, res: any) => {
  login(req.body.email, req.body.password)
    .then((result) => {
      res.status(result.status).send(result.content || result.message);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
