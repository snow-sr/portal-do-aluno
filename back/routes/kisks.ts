import { createKisk, getKisks, deleteKisk } from "../db/postsFunctions.js";

export const retrieveKisks = async (req: any, res: any) => {
  let kisks = await getKisks();
  res.status(kisks.status).send(kisks.content);
};

export const newKisk = async (req: any, res: any) => {
  let debug = req.params.debug;

  //Delete kisk if debug is true
  if (debug == "true") {
    console.log("debug");
    createKisk(req.body)
      .then(async (result) => {
        let kisk = await deleteKisk(result.content.id);
        res.status(result.status).send(kisk.msg);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  }

  createKisk(req.body)
    .then((result) => {
      console.log("NOT DEBUGGING");
      res.status(result.status).send(result.message);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
