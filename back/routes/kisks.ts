import { post, createKisk, getKisks, getUser } from "../db/postsFunctions.js";

export const retrieveKisks = async (req: any, res: any) => {
  let kisks = await getKisks();
  res.status(kisks.status).send(kisks.content);
};

export const newKisk = async (req: any, res: any) => {
  createKisk(req.body)
    .then((result) => {
      res.status(result.status).send(result.message);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
