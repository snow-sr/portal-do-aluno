import { createKisk, getKisks, deleteKisk } from "../db/postsFunctions.js";

export const retrieveKisks = async (req: any, res: any) => {
  let kisks = await getKisks();
  res.status(kisks.status).send(kisks.content);
};

export const newKisk = async (req: any, res: any) => {
  let debug = req.params.debug;

  if (debug == "true") {
    console.log("debug mode");
    createKisk(req.body)
      .then(async (result) => {
        await deleteKisk(result.content.id)
          .then((result) => {
            res.status(result.status).send(result.msg);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });

    //delete kisk after testing
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
