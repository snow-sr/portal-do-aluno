import chalk from "chalk";
import PrismaImport from "@prisma/client";
const { PrismaClient } = PrismaImport;
const prisma = new PrismaClient();

export async function createUser(user: any) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  const newUser = await prisma.user.create({ data: user });
  console.log(newUser);
  return newUser;
}

export async function login(email:string, password:string) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  const userToLogin = await prisma.user.findUnique({
    where: {email: email}
  })

  if(!userToLogin) {
    console.log(chalk.red("User not found"));
    prisma.$disconnect();
    return null;
  }

  if(userToLogin.password !== password) {
    console.log(chalk.red("Wrong password"));
    prisma.$disconnect();
    return null;
  }

  prisma.$disconnect();
  console.log(chalk.yellow("User found! Logging in..."));
  return userToLogin;

}

