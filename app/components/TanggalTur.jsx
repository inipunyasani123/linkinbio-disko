'use client';

import { tur } from '@/lib/disko';
import useHariIni from './useHariIni';

// Tanggal satu konser tur (mis. Bandung), dihitung dari hari ini (WIB).
// data-tanggal: penanda teks yang bergantung tanggal (disembunyikan saat membuat og.jpg statis).
export default function TanggalTur({ id, hari: awal }) {
  const hari = useHariIni(awal);
  return <span data-tanggal="">{tur(hari).find((t) => t.id === id)?.pendek} · </span>;
}
