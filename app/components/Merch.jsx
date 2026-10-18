'use client';

import { useState } from 'react';
import { MERCH, rp, tur } from '@/lib/disko';
import useHariIni from './useHariIni';
import Gambar from './Gambar';

export default function Merch({ hari: awal }) {
  const hari = useHariIni(awal);
  const konser = tur(hari).find((t) => !t.lewat);
  const [ukuran, setUkuran] = useState('M');
  const [tas, setTas] = useState([]);
  const [ambil, setAmbil] = useState('kirim');
  const [selesai, setSelesai] = useState(false);
  const tambah = (m) => setTas((t) => [...t, { id: `${m.id}-${t.length}`, nama: m.ukuran ? `${m.nama} (${ukuran})` : m.nama, harga: m.harga }]);
  const hapus = (id) => setTas((t) => t.filter((x) => x.id !== id));
  const subtotal = tas.reduce((s, x) => s + x.harga, 0);
  const ongkir = tas.length && ambil === 'kirim' ? 20000 : 0;
  const kaos = MERCH.find((m) => m.ukuran);

  return (
    <>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {MERCH.map((m, i) => (
          <li key={m.id} id={m.id} className={`pop flex scroll-mt-6 flex-col rounded-2xl p-5 ${m.bg} ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}>
            <Gambar src={m.gambar} alt={m.alt} width={176} height={176} className="mx-auto h-44 w-44" />
            <h2 className="mt-2 font-display text-lg leading-tight">{m.nama}</h2>
            <p className="font-mono text-lg font-bold">{rp(m.harga)}</p>
            {m.catatan && <p className="mt-1 font-mono text-xs">{m.catatan}</p>}
            {m.ukuran ? (
              <fieldset className="mt-3">
                <legend className="font-mono text-xs font-bold">Ukuran (stok)</legend>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {Object.entries(m.ukuran).map(([u, n]) => (
                    <label key={u} className={`pop inline-flex min-h-10 min-w-12 cursor-pointer items-center justify-center rounded-md px-2.5 font-mono text-xs font-bold has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-panda ${!n ? 'cursor-not-allowed bg-white/60 line-through' : ukuran === u ? 'bg-panda text-white' : 'bg-white'}`}>
                      <input type="radio" name="ukuran" value={u} disabled={!n} checked={ukuran === u} onChange={() => setUkuran(u)} className="sr-only" />
                      {u} <span className="font-normal">({n})</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : <p className="mt-3 font-mono text-xs font-bold">stok {m.stok}</p>}
            <div className="mt-auto pt-4">
              <button type="button" onClick={() => { tambah(m); setSelesai(false); }} disabled={m.ukuran && !kaos.ukuran[ukuran]} className="pop min-h-11 w-full rounded-lg bg-white py-2 font-mono text-sm font-bold disabled:opacity-50">
              + Tas<span className="sr-only"> — {m.nama}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <section aria-labelledby="tas-h" className="pop mt-8 rounded-2xl bg-panda p-6 font-mono text-krem">
        <h2 id="tas-h" className="font-display text-2xl text-white">TAS BELANJA</h2>
        {selesai ? (
          <div role="status" className="mt-3 text-sm">
            <p className="text-kuning">Pesanan tercatat!</p>
            <p className="mt-1 text-krem/80">Ini purwarupa desain: tidak ada pembayaran atau pengiriman sungguhan.</p>
            <button type="button" onClick={() => { setSelesai(false); setTas([]); }} className="pop mt-4 min-h-11 rounded-lg bg-kuning px-4 py-2 font-bold text-panda">Belanja lagi</button>
          </div>
        ) : tas.length ? (
          <>
            <ul className="mt-3 space-y-2 text-sm">
              {tas.map((x) => (
                <li key={x.id} className="flex items-center justify-between gap-3">
                  <span>{x.nama}</span>
                  <span className="flex items-center gap-2">{rp(x.harga)}<button type="button" onClick={() => hapus(x.id)} className="min-h-10 px-2 text-kuning underline" aria-label={`Hapus ${x.nama}`}>hapus</button></span>
                </li>
              ))}
            </ul>
            <fieldset className="mt-4 text-sm">
              <legend className="font-bold">Pengambilan</legend>
              <label className="flex min-h-10 cursor-pointer items-center gap-2"><input type="radio" name="ambil" checked={ambil === 'kirim'} onChange={() => setAmbil('kirim')} className="h-4 w-4 accent-[#ff4fa3]" /> Kirim ke rumah (+{rp(20000)})</label>
              <label className="flex min-h-10 cursor-pointer items-center gap-2"><input type="radio" name="ambil" checked={ambil === 'konser'} onChange={() => setAmbil('konser')} className="h-4 w-4 accent-[#ff4fa3]" /> Ambil di konser {konser.kota}, {konser.pendek} (gratis)</label>
            </fieldset>
            <p className="mt-4 flex justify-between border-t border-krem/20 pt-3 font-display text-xl text-white"><span>TOTAL</span><span aria-live="polite">{rp(subtotal + ongkir)}</span></p>
            <button type="button" onClick={() => setSelesai(true)} className="pop mt-4 w-full rounded-xl bg-magenta py-3 font-display text-lg text-panda">BAYAR</button>
          </>
        ) : (
          <p className="mt-2 text-sm text-krem/80">Masih kosong. Tekan &ldquo;+ Tas&rdquo; di barang yang kamu mau.</p>
        )}
      </section>
    </>
  );
}
