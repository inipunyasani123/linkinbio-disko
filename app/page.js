'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Disc3, Flame, Mic2, ShoppingBag, Ticket } from 'lucide-react';
import { LINKS, SINGLE } from '@/lib/disko';

const IKON = { tiket: Ticket, api: Flame, tas: ShoppingBag, piringan: Disc3, mic: Mic2 };
const BARS = [0.9, 1.4, 0.7, 1.2, 1.0, 1.5, 0.8];
const MotionLink = motion.create(Link);

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-14">
      <div className="wiggle absolute left-6 top-10 h-16 w-16 rounded-full border-[6px] border-magenta" aria-hidden="true" />
      <div className="absolute right-8 top-24 h-14 w-14 rotate-12 bg-kuning pop" aria-hidden="true" />
      <div className="wiggle absolute bottom-16 left-10 text-5xl font-bold text-biru" aria-hidden="true">✚</div>
      <div className="absolute -right-6 bottom-24 h-20 w-20 rounded-full bg-hijau pop" aria-hidden="true" />
      <svg className="absolute left-1/2 top-6 -translate-x-1/2" width="120" height="16" aria-hidden="true"><polyline points="0,12 15,4 30,12 45,4 60,12 75,4 90,12 105,4 120,12" fill="none" stroke="#ff4fa3" strokeWidth="4" /></svg>

      <div className="relative z-10 w-full max-w-md">
        <motion.header initial={{ opacity: 0, y: -14, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -2 }} transition={{ duration: 0.5 }} className="pop rounded-2xl bg-panda p-6 text-center text-krem">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-kuning">🕺 Funk · Disco · Bandung</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-white md:text-5xl">
            DISKO<span className="text-magenta">PANDA</span>
          </h1>
          <div className="eq mt-3 flex h-8 items-end justify-center gap-1.5" aria-hidden="true">
            {BARS.map((s, i) => (
              <span key={i} style={{ height: `${s * 20}px`, background: ['#ff4fa3', '#ffc933', '#3b82f6', '#22c55e'][i % 4], animation: `eq ${0.7 + (i % 3) * 0.2}s ease-in-out ${i * 0.1}s infinite` }} />
            ))}
          </div>
          <p className="mt-3 font-mono text-xs text-krem/85">Single baru &ldquo;{SINGLE.judul}&rdquo; ({SINGLE.durasi}) — rilis {SINGLE.rilis}, ada di semua platform musik.</p>
        </motion.header>

        <nav className="mt-7 space-y-4" aria-label="Tautan band">
          {LINKS.map((l, i) => {
            const Ikon = IKON[l.ikon];
            return (
              <MotionLink
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                className={`pop pop-hover flex items-center gap-4 rounded-2xl p-4 text-panda ${l.bg} ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}
              >
                <span className="pop grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-panda"><Ikon size={19} aria-hidden="true" /></span>
                <span className="flex-1">
                  <span className="block font-bold leading-tight">{l.label}</span>
                  <span className="block font-mono text-xs">{l.sub}</span>
                </span>
              </MotionLink>
            );
          })}
        </nav>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="mt-8 text-center font-mono text-xs text-panda/75">
          band fiktif untuk purwarupa desain · venue & harga hanya contoh
        </motion.p>
      </div>
    </main>
  );
}
