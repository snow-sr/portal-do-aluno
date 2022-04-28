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
import PrismaImport from "@prisma/client";
const { PrismaClient } = PrismaImport;
const prisma = new PrismaClient();
export function createPost(toPost) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        console.log(chalk.yellow("Connected to Prisma"));
        let newPost = yield prisma.post.create({
            data: {
                title: toPost.title,
                content: toPost.content,
                authorId: toPost.author.id,
            },
        });
    });
}
//# sourceMappingURL=postsFunctions.js.map