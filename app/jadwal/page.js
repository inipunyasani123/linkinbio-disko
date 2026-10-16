import { SITE } from '@/lib/disko';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import Tiket from '../components/Tiket';
import FormBooking from '../components/FormBooking';

export const metadata = {
  title: 'Tur "Panas Dingin"',
  description: 'Jadwal tur "Panas Dingin" Disko Panda di Jakarta, Bandung, Yogyakarta, Malang, Surabaya, dan Denpasar: pilih kota, jumlah tiket, dan booking manggung.',
  alternates: { canonical: `${SITE}/jadwal` },
};

export default function Jadwal() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <Kembali />
        <h1 className="mt-8 font-display text-4xl leading-tight md:text-5xl">TUR <span className="bg-magenta px-2">PANAS DINGIN</span></h1>
        <p className="mt-3 font-mono text-sm">Enam Sabtu, enam kota. Pintu dibuka pukul 19.00, panggung pukul 20.00.</p>
        <Tiket hari={hariIniWIB()} />
        <FormBooking />
        <p className="mt-10 text-center font-mono text-xs text-panda/75">Venue, harga, dan sisa tiket adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
