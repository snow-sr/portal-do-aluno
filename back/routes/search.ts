import { searchByText } from "../db/searchFunctions.js";

export const Search = async (req: any, res: any) => {
  let query = req.params.query;
  searchByText(query)
    .then((result) => {
      res.status(result.status).send(result.content);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
