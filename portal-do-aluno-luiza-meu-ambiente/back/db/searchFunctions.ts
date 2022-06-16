import chalk from "chalk";
import { response } from "../lib/responseConstructor.js";
import PrismaImport from "@prisma/client";
const { PrismaClient } = PrismaImport;
const prisma = new PrismaClient();

export async function searchByText(query: string) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  if (query.startsWith("@")) {
    console.log("Searching for users, not posts!");
    let users = await prisma.user.findMany({
      where: {
        name: {
          contains: query.substring(1),
          mode: "insensitive",
        },
      },
    });

    if (!users) {
      prisma.$disconnect();
      return new response(503, "No users found");
    }

    prisma.$disconnect();
    return new response(200, "Users found", users);
  }
  console.log("Searching for posts, not for users!");
  let kisks = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: query,
            mode: "insensitive",
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
    if (a.data > b.data) return -1;
    if (a.data < b.data) return 1;
    return 0;
  });

  return new response(200, "Posts found", kisksSortidos);
}
