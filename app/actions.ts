"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createBook(formData: FormData) {
  await prisma.book.create({
    data: {
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      year: Number(formData.get("year")),
    },
  });
  revalidatePath("/");
  redirect("/");
}

export async function updateBook(formData: FormData) {
  await prisma.book.update({
    where: { id: Number(formData.get("id")) },
    data: {
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      year: Number(formData.get("year")),
    },
  });
  revalidatePath("/");
  redirect("/");
}

export async function deleteBook(formData: FormData) {
  await prisma.book.delete({
    where: { id: Number(formData.get("id")) },
  });
  revalidatePath("/");
}