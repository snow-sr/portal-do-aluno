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
export function createKisk(toPost) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        console.log(chalk.yellow("Connected to Prisma"));
        let newPost = yield prisma.post.create({
            data: {
                title: toPost.title,
                content: toPost.content,
                author: { connect: { id: toPost.author.id } },
                authorName: toPost.author.name,
                isArticle: toPost.isArticle,
            },
        });
        if (!newPost) {
            console.log(chalk.green("Post not created"));
            prisma.$disconnect();
            return new response(503, "Post not created");
        }
        yield prisma.$disconnect();
        console.log(chalk.green("Post created"));
        return new response(200, "Post created");
    });
}
export function getVisibleKisks() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        console.log(chalk.yellow("Connected to Prisma"));
        let kisks = yield prisma.post.findMany({ where: { isVisible: true } });
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
        // KISKS SORTIDOS são os kisks ordenados por data!
        yield prisma.$disconnect();
        console.log(chalk.green("Posts found"));
        return new response(200, "Posts found", kisksSortidos);
    });
}
//# sourceMappingURL=kisksFunctions.js.map