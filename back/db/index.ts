import chalk from "chalk";
import { response } from "../lib/responseConstructor.js";
import PrismaImport from "@prisma/client";
const { PrismaClient } = PrismaImport;
const prisma = new PrismaClient();

export async function login(email: string, password: string) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  const userToLogin = await prisma.user.findUnique({
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
  return new response(200, "Authorized", userToLogin);
}

export interface createUser {
  name: string;
  email: string;
  password: string;
}

export async function createUser(userToBeCreated: createUser) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  let newUser = await prisma.user.create({
    data: {
      name: userToBeCreated.name,
      email: userToBeCreated.email,
      password: userToBeCreated.password,
    },
  });

  if (!newUser) {
    console.log(chalk.red("User not created"));
    prisma.$disconnect();
    return new response(503, "User not created");
  }

  await prisma.$disconnect();
  console.log(chalk.green("User created"));
  return new response(200, "User created");
}
