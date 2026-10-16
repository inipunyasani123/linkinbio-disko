import Link from 'next/link';
import { Disc3, Flame, Mic2, ShoppingBag, Ticket } from 'lucide-react';
import { LINKS, SINGLE } from '@/lib/disko';
import { hariIniWIB } from '@/lib/waktu';
import TanggalTur from './components/TanggalTur';

const IKON = { tiket: Ticket, api: Flame, tas: ShoppingBag, piringan: Disc3, mic: Mic2 };
const BARS = [0.9, 1.4, 0.7, 1.2, 1.0, 1.5, 0.8];

export default function Home() {
  const hari = hariIniWIB();
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-14">
      <div className="wiggle absolute left-6 top-10 h-16 w-16 rounded-full border-[6px] border-magenta" aria-hidden="true" />
      <div className="absolute right-8 top-24 h-14 w-14 rotate-12 bg-kuning pop" aria-hidden="true" />
      <div className="wiggle absolute bottom-16 left-10 hidden text-5xl font-bold text-biru sm:block" aria-hidden="true">✚</div>
      <div className="absolute -right-6 bottom-24 hidden h-20 w-20 rounded-full bg-hijau pop sm:block" aria-hidden="true" />
      <svg className="absolute left-1/2 top-6 -translate-x-1/2" width="120" height="16" aria-hidden="true"><polyline points="0,12 15,4 30,12 45,4 60,12 75,4 90,12 105,4 120,12" fill="none" stroke="#ff4fa3" strokeWidth="4" /></svg>

      <div className="relative z-10 w-full max-w-md lg:max-w-3xl">
        <header className="turun pop -rotate-2 rounded-2xl bg-panda p-6 text-center text-krem lg:p-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-kuning">🕺 Funk · Disco · Bandung</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            DISKO<span className="text-magenta">PANDA</span>
          </h1>
          <div className="eq mt-3 flex h-8 items-end justify-center gap-1.5" aria-hidden="true">
            {BARS.map((s, i) => (
              <span key={i} style={{ height: `${s * 20}px`, background: ['#ff4fa3', '#ffc933', '#3b82f6', '#22c55e'][i % 4], animation: `eq ${0.7 + (i % 3) * 0.2}s ease-in-out ${i * 0.1}s infinite` }} />
            ))}
          </div>
          <p className="mt-3 font-mono text-xs text-krem/85">Single terbaru &ldquo;{SINGLE.judul}&rdquo; ({SINGLE.durasi}) — sudah ada di semua platform musik.</p>
        </header>

        <nav className="mt-7 space-y-4 lg:mt-9 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 lg:[&>*:last-child:nth-child(odd)]:col-span-2" aria-label="Tautan band">
          {LINKS.map((l, i) => {
            const Ikon = IKON[l.ikon];
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`rise pop pop-hover flex items-center gap-4 rounded-2xl p-4 text-panda ${l.bg} ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}
                style={{ animationDelay: `${0.12 + i * 0.06}s` }}
              >
                <span className="pop grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-panda"><Ikon size={19} aria-hidden="true" /></span>
                <span className="flex-1">
                  <span className="block font-bold leading-tight">{l.label}</span>
                  <span className="block font-mono text-xs">{l.tanggal ? <TanggalTur id={l.tanggal} hari={hari} /> : null}{l.sub}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        <p className="rise mt-8 text-center font-mono text-xs text-panda/75" style={{ animationDelay: '0.5s' }}>
          band fiktif untuk purwarupa desain · venue & harga hanya contoh
        </p>
      </div>
    </main>
  );
}
