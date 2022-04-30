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

  await prisma.$disconnect();
  console.log(chalk.green("Posts found"));
  return new response(200, "Posts found", kisks);
}
