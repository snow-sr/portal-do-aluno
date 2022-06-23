var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createKisk, getKisks, deleteKisk } from "../db/postsFunctions.js";
export const retrieveKisks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let kisks = yield getKisks();
    res.status(kisks.status).send(kisks.content);
});
export const newKisk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let debug = req.params.debug;
    //Delete kisk if debug is true
    if (debug == "true") {
        console.log("debug");
        createKisk(req.body)
            .then((result) => __awaiter(void 0, void 0, void 0, function* () {
            let kisk = yield deleteKisk(result.content.id);
            res.status(result.status).send(kisk.msg);
        }))
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
});
//# sourceMappingURL=kisks.js.map