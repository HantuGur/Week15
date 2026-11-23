import Link from "next/link";
import prisma from "@/lib/prisma";
import { updateBook } from "../../actions";

export const dynamic = "force-dynamic";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = await prisma.book.findUnique({
    where: { id: Number(id) },
  });

  if (!book) {
    return <p>Buku tidak ditemukan</p>;
  }

  return (
    <div>
      <h1>Edit Buku</h1>
      <form action={updateBook}>
        <input type="hidden" name="id" value={book.id} />

        <p>Judul</p>
        <input type="text" name="title" defaultValue={book.title} required />

        <p>Penulis</p>
        <input type="text" name="author" defaultValue={book.author} required />

        <p>Tahun</p>
        <input type="number" name="year" defaultValue={book.year} required />

        <br />
        <br />
        <button type="submit">Update</button>
        <Link href="/">
          <button type="button">Kembali</button>
        </Link>
      </form>
    </div>
  );
}