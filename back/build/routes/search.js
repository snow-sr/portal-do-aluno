var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { searchByText } from "../db/searchFunctions.js";
export const Search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let query = req.params.query;
    searchByText(query)
        .then((result) => {
        res.status(result.status).send(result.content);
    })
        .catch((err) => {
        console.log(err);
        res.status(500).send(err);
    });
});
//# sourceMappingURL=search.js.map