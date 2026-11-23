import { PrismaClient } from "@prisma/client";
import path from "path";

let prisma: PrismaClient;

if (process.env.VERCEL) {
  prisma = new PrismaClient({
    datasourceUrl: "file:" + path.join(process.cwd(), "prisma", "dev.db"),
  });
} else {
  prisma = new PrismaClient();
}

export default prisma;