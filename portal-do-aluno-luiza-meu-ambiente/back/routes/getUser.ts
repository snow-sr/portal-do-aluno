import { getUser } from "../db/postsFunctions.js";

export const getUserById = async (req: any, res: any) => {
  let user = await getUser(req.params.id);
  res.status(user.status).send(user.content);
};
