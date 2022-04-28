import chalk from "chalk";
import { response } from "../lib/responseConstructor.js";
import PrismaImport from "@prisma/client";
const { PrismaClient } = PrismaImport;
const prisma = new PrismaClient();

interface post {
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
}

export async function createPost(toPost: post) {
  await prisma.$connect();
  console.log(chalk.yellow("Connected to Prisma"));

  let newPost = await prisma.post.create({
    data: {
      title: toPost.title,
      content: toPost.content,
      authorId: toPost.author.id,
    },
  });
}
