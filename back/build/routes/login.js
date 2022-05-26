var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { login } from "../db/index.js";
export let loginRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    login(req.body.email, req.body.password)
        .then((result) => {
        res.status(result.status).send(result.content || result.message);
    })
        .catch((err) => {
        console.log(err);
        res.status(500).send(err);
    });
});
//# sourceMappingURL=login.js.map