'use client';

import { useState } from 'react';
import { TUR, rp } from '@/lib/disko';

const WARNA = ['bg-magenta', 'bg-kuning', 'bg-biru', 'bg-hijau'];

export default function Tiket() {
  const [pilih, setPilih] = useState('bandung');
  const [jml, setJml] = useState(2);
  const [selesai, setSelesai] = useState(false);
  const s = TUR.find((t) => t.id === pilih);
  const maks = Math.min(6, s.sisa);
  const n = Math.min(jml, maks);

  return (
    <>
      <ol className="mt-8 space-y-4">
        {TUR.map((t, i) => (
          <li key={t.id} id={t.id} className={`pop scroll-mt-6 rounded-2xl p-4 ${t.sisa ? WARNA[i % WARNA.length] : 'bg-white'} ${i % 2 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]'}`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs font-bold uppercase">{t.tanggal}</p>
                <h2 className="font-display text-2xl leading-tight">{t.kota.toUpperCase()}</h2>
                <p className="font-mono text-xs">{t.venue}</p>
              </div>
              <div className="text-right">
                <p className="font-display text-xl">{rp(t.harga)}</p>
                <p className="font-mono text-xs font-bold">{t.sisa ? (t.sisa <= 50 ? `HAMPIR HABIS · sisa ${t.sisa}` : `sisa ${t.sisa}`) : 'HABIS'}</p>
              </div>
            </div>
            {t.sisa > 0 && (
              <button type="button" onClick={() => { setPilih(t.id); setSelesai(false); document.getElementById('beli')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }} aria-pressed={pilih === t.id} className={`pop mt-3 rounded-lg px-3 py-1.5 font-mono text-xs font-bold ${pilih === t.id ? 'bg-panda text-white' : 'bg-white'}`}>
                {pilih === t.id ? '✓ dipilih' : 'Pilih kota ini'}<span className="sr-only"> — {t.kota}</span>
              </button>
            )}
          </li>
        ))}
      </ol>

      <section id="beli" aria-labelledby="beli-h" className="pop mt-8 rounded-2xl bg-panda p-6 text-krem">
        <h2 id="beli-h" className="font-display text-2xl text-white">BELI TIKET</h2>
        {selesai ? (
          <div role="status" className="mt-3 font-mono text-sm">
            <p className="text-kuning">{n} tiket {s.kota} · {s.tanggal} tercatat!</p>
            <p className="mt-1 text-krem/80">Ini purwarupa desain: tidak ada pembayaran atau tiket sungguhan.</p>
            <button type="button" onClick={() => setSelesai(false)} className="pop mt-4 rounded-lg bg-kuning px-4 py-2 font-bold text-panda">Beli lagi</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-4 font-mono">
            <p className="text-sm">{s.kota} · {s.tanggal}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <label htmlFor="t-jml" className="text-sm">Jumlah</label>
              <select id="t-jml" value={n} onChange={(e) => setJml(Number(e.target.value))} className="rounded-lg bg-krem px-3 py-2 font-bold text-panda">
                {Array.from({ length: maks }, (_, i) => i + 1).map((k) => <option key={k} value={k}>{k}</option>)}
              </select>
              <p className="ml-auto font-display text-2xl text-kuning" aria-live="polite">{rp(s.harga * n)}</p>
            </div>
            <label htmlFor="t-surel" className="mt-4 block text-sm">Surel untuk e-tiket</label>
            <input id="t-surel" type="email" required autoComplete="email" className="mt-1 w-full rounded-lg bg-krem px-3 py-2 text-panda" />
            <button type="submit" className="pop mt-5 w-full rounded-xl bg-magenta py-3 font-display text-lg text-panda">BAYAR {rp(s.harga * n)}</button>
            <p className="mt-2 text-[11px] text-krem/75">Maksimal 6 tiket per surel. Purwarupa — tidak ada transaksi.</p>
          </form>
        )}
      </section>
    </>
  );
}
