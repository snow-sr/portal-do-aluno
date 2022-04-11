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
import { response } from "../lib/index.js";
import PrismaImport from "@prisma/client";
const { PrismaClient } = PrismaImport;
const prisma = new PrismaClient();
export function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        console.log(chalk.yellow("Connected to Prisma"));
        const newUser = yield prisma.user.create({ data: user });
        console.log(newUser);
        return newUser;
    });
}
export function login(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        console.log(chalk.yellow("Connected to Prisma"));
        const userToLogin = yield prisma.user.findUnique({
            where: { email: email },
        });
        if (!userToLogin) {
            console.log(chalk.red("User not found"));
            prisma.$disconnect();
            return new response(401, "User not found");
        }
        if (userToLogin.password !== password) {
            console.log(chalk.red("Wrong password"));
            prisma.$disconnect();
            return new response(401, "Wrong password");
        }
        prisma.$disconnect();
        console.log(chalk.yellow("User found! Logging in..."));
        return new response(200, userToLogin);
    });
}
//# sourceMappingURL=index.js.map