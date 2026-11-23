import Link from "next/link";
import prisma from "@/lib/prisma";
import { deleteBook } from "./actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const books = await prisma.book.findMany();

  return (
    <div>
      <h1>Daftar Buku</h1>
      <Link href="/create">
        <button>Tambah Buku</button>
      </Link>

      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Tahun</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <Link href={"/edit/" + book.id}>
                  <button>Edit</button>
                </Link>
                <form action={deleteBook} style={{ display: "inline" }}>
                  <input type="hidden" name="id" value={book.id} />
                  <button type="submit">Hapus</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}