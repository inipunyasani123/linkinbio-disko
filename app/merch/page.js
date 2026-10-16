import { SITE } from '@/lib/disko';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import Merch from '../components/Merch';

export const metadata = {
  title: 'Merch Resmi',
  description: 'Merch resmi Disko Panda: kaos "Panas Dingin" dengan stok per ukuran, vinyl 7" "Goyang Kota", totebag, dan stiker — bisa diambil di konser.',
  alternates: { canonical: `${SITE}/merch` },
};

export default function MerchPage() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <Kembali />
        <h1 className="mt-8 font-display text-4xl leading-tight md:text-5xl">MERCH <span className="bg-kuning px-2">RESMI</span></h1>
        <p className="mt-3 font-mono text-sm">Ambil gratis ongkir di konser terdekat, atau kirim ke rumah.</p>
        <Merch hari={hariIniWIB()} />
        <p className="mt-10 text-center font-mono text-xs text-panda/75">Harga dan stok adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
