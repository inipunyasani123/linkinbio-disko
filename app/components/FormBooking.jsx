'use client';

import { useEffect, useState } from 'react';
import { hariIniWIB, tambahHari } from '@/lib/waktu';

export default function FormBooking() {
  const [selesai, setSelesai] = useState(false);
  // Booking paling cepat dua pekan lagi (WIB), dihitung di peramban supaya tidak basi.
  const [min, setMin] = useState('');
  useEffect(() => setMin(tambahHari(hariIniWIB(), 14)), []);
  const input = 'pop h-11 w-full rounded-lg bg-white px-3 font-mono';
  return (
    <section id="booking" aria-labelledby="booking-h" className="pop mt-10 scroll-mt-6 rounded-2xl bg-kuning p-6">
      <h2 id="booking-h" className="font-display text-2xl">BOOKING MANGGUNG</h2>
      <p className="mt-1 font-mono text-sm">Set 45 atau 90 menit. Kampus, kafe, pernikahan — asal ada lantai dansa.</p>
      {selesai ? (
        <div role="status" className="mt-4 font-mono text-sm">
          <p className="font-bold">Tercatat! Manajer kami membalas dalam 2 hari kerja.</p>
          <p className="mt-1">Ini purwarupa desain: tidak ada pesan yang benar-benar dikirim.</p>
          <button type="button" onClick={() => setSelesai(false)} className="pop mt-4 min-h-11 rounded-lg bg-white px-4 py-2 font-bold">Isi ulang</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-5 grid gap-4 font-mono text-sm sm:grid-cols-2">
          <div>
            <label htmlFor="b-acara" className="mb-1 block font-bold">Jenis acara</label>
            <select id="b-acara" className={input}><option>Pentas kampus</option><option>Kafe / bar</option><option>Pernikahan</option><option>Acara kantor</option></select>
          </div>
          <div>
            <label htmlFor="b-tanggal" className="mb-1 block font-bold">Tanggal</label>
            <input id="b-tanggal" type="date" required min={min || undefined} aria-describedby="b-tanggal-k" className={input} />
            <span id="b-tanggal-k" className="mt-1 block text-xs">Paling cepat dua pekan lagi</span>
          </div>
          <div>
            <label htmlFor="b-kota" className="mb-1 block font-bold">Kota</label>
            <input id="b-kota" required autoComplete="address-level2" className={input} />
          </div>
          <div>
            <label htmlFor="b-surel" className="mb-1 block font-bold">Surel</label>
            <input id="b-surel" type="email" required autoComplete="email" className={input} />
          </div>
          <button type="submit" className="pop rounded-xl bg-panda py-3 font-display text-white sm:col-span-2">KIRIM PERMINTAAN</button>
        </form>
      )}
    </section>
  );
}
