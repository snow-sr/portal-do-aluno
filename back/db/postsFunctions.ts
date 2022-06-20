import chalk from "chalk";
import { response } from "../lib/responseConstructor.js";
import PrismaImport from "@prisma/client";
const { PrismaClient } = PrismaImport;
const prisma = new PrismaClient();

export interface post {
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
  isArticle?: boolean;
}

export async function createKisk(toPost: post) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  let newPost = await prisma.post.create({
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

  await prisma.$disconnect();
  console.log(chalk.green("Post created"));
  return new response(200, "Post created");
}

export async function getKisks() {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  let kisks = await prisma.post.findMany({});

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

  // KISKS SORTIDOS são os kisks ordenados por data!
  await prisma.$disconnect();
  console.log(chalk.green("Posts found"));
  return new response(200, "Posts found", kisksSortidos);
}

export async function getUser(idUser: string) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma."));

  // Default ObjectId length is 24 characters.
  if (idUser.length == 24) {
    let user = await prisma.user.findUnique({
      where: {
        id: idUser,
      },
    });

    if (!user) {
      console.log(chalk.green(`User ${idUser} not found.`));
      prisma.$disconnect();
      return new response(503, `User ${idUser} not found.`);
    }

    await prisma.$disconnect();
    console.log(chalk.green(`User ${idUser} found.`));
    return new response(200, `User ${idUser} found.`, user);
  }

  console.log(chalk.green("Invalid id, it must have 24 characters."));
  prisma.$disconnect();
  return new response(503, "Invalid id, it must have 24 characters.");
}

export async function deleteKisk(id: string) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  let kisk = await prisma.post.delete({
    where: {
      id: id,
    },
  });

  if (!kisk) {
    console.log(chalk.green("Post not deleted or not found"));
    prisma.$disconnect();
    return { status: false, msg: "Post not deleted or not found" };
  }

  await prisma.$disconnect();
  console.log(chalk.green("Post deleted"));
  return { status: true, msg: "Post deleted" };
}
