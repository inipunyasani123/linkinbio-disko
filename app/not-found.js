import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="pop w-full max-w-sm -rotate-2 rounded-2xl bg-magenta p-8 text-center">
        <p className="font-display text-6xl">404</p>
        <h1 className="mt-2 font-display text-2xl">LAGUNYA TIDAK ADA DI SETLIST</h1>
        <p className="mt-2 font-mono text-sm">Halaman ini tidak ditemukan. Mungkin dibawakan di tur berikutnya.</p>
        <Link href="/" className="pop mt-6 inline-flex min-h-11 items-center rounded-xl bg-panda px-5 py-2.5 font-display text-white">← KEMBALI</Link>
      </div>
    </main>
  );
}
