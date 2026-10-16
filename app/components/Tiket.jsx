'use client';

import { useState } from 'react';
import { rp, tur } from '@/lib/disko';
import useHariIni from './useHariIni';

const WARNA = ['bg-magenta', 'bg-kuning', 'bg-biru', 'bg-hijau'];

export default function Tiket({ hari: awal }) {
  const hari = useHariIni(awal);
  const TUR = tur(hari);
  const [pilih, setPilih] = useState('bandung');
  const [jml, setJml] = useState(2);
  const [selesai, setSelesai] = useState(false);
  const bisa = TUR.filter((t) => !t.lewat && t.sisa > 0);
  const s = bisa.find((t) => t.id === pilih) || bisa[0];
  const maks = Math.min(6, s.sisa);
  const n = Math.min(jml, maks);
  const pilihKota = (id) => {
    setPilih(id);
    setSelesai(false);
    const halus = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('beli')?.scrollIntoView({ behavior: halus ? 'smooth' : 'auto', block: 'center' });
  };

  return (
    <>
      <ol className="mt-8 space-y-4">
        {TUR.map((t, i) => {
          const tutup = t.lewat || !t.sisa;
          return (
            <li key={t.id} id={t.id} className={`pop scroll-mt-6 rounded-2xl p-4 ${tutup ? 'bg-white' : WARNA[i % WARNA.length]} ${i % 2 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]'}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-xs font-bold uppercase">{t.tanggal}</p>
                  <h2 className={`font-display text-2xl leading-tight ${t.lewat ? 'line-through decoration-2' : ''}`}>{t.kota.toUpperCase()}</h2>
                  <p className="font-mono text-xs">{t.venue}</p>
                </div>
                <p className="shrink-0 text-right font-display text-xl">{rp(t.harga)}</p>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs font-bold">{t.lewat ? 'SELESAI · terima kasih!' : !t.sisa ? 'HABIS' : t.sisa <= 50 ? `HAMPIR HABIS · sisa ${t.sisa}` : `sisa ${t.sisa} tiket`}</p>
                {!tutup && (
                  <button type="button" onClick={() => pilihKota(t.id)} aria-pressed={s.id === t.id} className={`pop min-h-11 rounded-lg px-4 font-mono text-xs font-bold ${s.id === t.id ? 'bg-panda text-white' : 'bg-white'}`}>
                    {s.id === t.id ? '✓ dipilih' : 'Pilih kota ini'}<span className="sr-only"> — {t.kota}</span>
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <section id="beli" aria-labelledby="beli-h" className="pop mt-8 scroll-mt-6 rounded-2xl bg-panda p-6 text-krem">
        <h2 id="beli-h" className="font-display text-2xl text-white">BELI TIKET</h2>
        {selesai ? (
          <div role="status" className="mt-3 font-mono text-sm">
            <p className="text-kuning">{n} tiket {s.kota} · {s.tanggal} tercatat!</p>
            <p className="mt-1 text-krem/80">Ini purwarupa desain: tidak ada pembayaran atau tiket sungguhan.</p>
            <button type="button" onClick={() => setSelesai(false)} className="pop mt-4 min-h-11 rounded-lg bg-kuning px-4 py-2 font-bold text-panda">Beli lagi</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-4 font-mono">
            <p className="text-sm">{s.kota} · {s.tanggal}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <label htmlFor="t-jml" className="text-sm">Jumlah</label>
              <select id="t-jml" value={n} onChange={(e) => setJml(Number(e.target.value))} className="h-11 rounded-lg bg-krem px-3 font-bold text-panda">
                {Array.from({ length: maks }, (_, i) => i + 1).map((k) => <option key={k} value={k}>{k}</option>)}
              </select>
              <p className="ml-auto font-display text-2xl text-kuning" aria-live="polite">{rp(s.harga * n)}</p>
            </div>
            <label htmlFor="t-surel" className="mt-4 block text-sm">Surel untuk e-tiket</label>
            <input id="t-surel" type="email" required autoComplete="email" className="mt-1 h-11 w-full rounded-lg bg-krem px-3 text-panda" />
            <button type="submit" className="pop mt-5 w-full rounded-xl bg-magenta py-3 font-display text-lg text-panda">BAYAR {rp(s.harga * n)}</button>
            <p className="mt-2 text-[11px] text-krem/75">Maksimal 6 tiket per surel. Purwarupa — tidak ada transaksi.</p>
          </form>
        )}
      </section>
    </>
  );
}
