var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from "chalk";
import { response } from "../lib/responseConstructor.js";
import PrismaImport from "@prisma/client";
const { PrismaClient } = PrismaImport;
const prisma = new PrismaClient();
export function searchByText(query) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        console.log(chalk.yellow("Connected to Prisma"));
        //if query starts with @
        if (query.startsWith("@")) {
            let user = yield prisma.user.findMany({
                where: {
                    name: {
                        contains: query,
                    },
                },
            });
        }
        let kisks = yield prisma.post.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: query,
                        },
                    },
                    {
                        content: {
                            contains: query,
                        },
                    },
                ],
            },
        });
        if (!kisks) {
            console.log(chalk.green("No posts found"));
            prisma.$disconnect();
            return new response(503, "No posts found");
        }
        let kisksSortidos = kisks.sort((a, b) => {
            if (a.data > b.data)
                return -1;
            if (a.data < b.data)
                return 1;
            return 0;
        });
        return new response(200, "Posts found", kisksSortidos);
    });
}
//# sourceMappingURL=searchFunctions.js.map