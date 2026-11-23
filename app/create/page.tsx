import Link from "next/link";
import { createBook } from "../actions";

export default function CreatePage() {
  return (
    <div>
      <h1>Tambah Buku</h1>
      <form action={createBook}>
        <p>Judul</p>
        <input type="text" name="title" required />

        <p>Penulis</p>
        <input type="text" name="author" required />

        <p>Tahun</p>
        <input type="number" name="year" required />

        <br />
        <br />
        <button type="submit">Simpan</button>
        <Link href="/">
          <button type="button">Kembali</button>
        </Link>
      </form>
    </div>
  );
}