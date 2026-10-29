/* DISKO PANDA — band funk-disko Bandung (fiktif). Satu sumber isi untuk
   halaman tautan, jadwal tur, dan merch. Venue, harga, dan stok adalah
   contoh purwarupa desain. */

import { hariBerikut, tambahHari, tgl } from './waktu';

export const SITE = 'https://linkinbio-disko.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const SINGLE = { judul: 'Goyang Kota', durasi: '3:42', kredit: 'Ditulis Disko Panda · direkam di Bandung' };

export const LINKS = [
  { ikon: 'tiket', label: 'Tur "Panas Dingin"', sub: '6 kota · enam Sabtu malam', href: '/jadwal', bg: 'bg-magenta' },
  { ikon: 'api', label: 'Bandung hampir habis', sub: 'sisa 40 tiket', tanggal: 'bandung', href: '/jadwal#bandung', bg: 'bg-kuning' },
  { ikon: 'tas', label: 'Merch resmi', sub: 'Kaos · totebag · stiker', href: '/merch', bg: 'bg-biru' },
  { ikon: 'piringan', label: 'Vinyl 7" "Goyang Kota"', sub: 'Pre-order, dikirim bulan depan', href: '/merch#vinyl', bg: 'bg-hijau' },
  { ikon: 'mic', label: 'Booking manggung', sub: 'Kampus, kafe, pernikahan', href: '/jadwal#booking', bg: 'bg-krem' },
];

// Jadwal tur dihitung dari Sabtu terdekat (WIB) supaya demo tidak pernah basi:
// satu konser sudah lewat (tampil "selesai"), Bandung Sabtu ini, sisanya menyusul.
const POLA_TUR = [
  { id: 'jakarta', kota: 'Jakarta', pekan: -2, venue: 'Gedung Musik Kemang (fiktif)', harga: 150000, sisa: 0 },
  { id: 'bandung', kota: 'Bandung', pekan: 0, venue: 'Aula Dago Lama (fiktif)', harga: 120000, sisa: 40 },
  { id: 'yogyakarta', kota: 'Yogyakarta', pekan: 1, venue: 'Pendopo Seni Utara (fiktif)', harga: 110000, sisa: 0 },
  { id: 'malang', kota: 'Malang', pekan: 3, venue: 'Gudang Kopi Ijen (fiktif)', harga: 100000, sisa: 180 },
  { id: 'surabaya', kota: 'Surabaya', pekan: 5, venue: 'Balai Pemuda Timur (fiktif)', harga: 130000, sisa: 220 },
  { id: 'denpasar', kota: 'Denpasar', pekan: 7, venue: 'Lapangan Seni Renon (fiktif)', harga: 140000, sisa: 300 },
];
export function tur(hari) {
  const sabtu = hariBerikut(hari, 6, 0);
  return POLA_TUR.map((t) => {
    const iso = tambahHari(sabtu, t.pekan * 7);
    return { ...t, iso, tanggal: tgl(iso), pendek: tgl(iso, 'hari'), lewat: iso < hari };
  });
}

export const MERCH = [
  { id: 'kaos', gambar: '/images/merch/kaos.webp', alt: 'Kaos hitam bersablon matahari dan kepingan salju dengan tulisan Panas Dingin', emoji: '👕', nama: 'Kaos "Panas Dingin"', harga: 160000, bg: 'bg-magenta', ukuran: { S: 6, M: 14, L: 9, XL: 0, XXL: 3 } },
  { id: 'vinyl', gambar: '/images/merch/vinyl.webp', alt: 'Piringan hitam vinyl dengan label kuning polos, difoto dari atas dengan sudut miring', foto: true, emoji: '💿', nama: 'Vinyl 7" "Goyang Kota"', harga: 250000, bg: 'bg-kuning', catatan: 'Sisi B: "Lampu Merah" — pre-order, dikirim bulan depan', stok: 150 },
  { id: 'tote', gambar: '/images/merch/tote.webp', alt: 'Totebag kanvas krem bersablon panda berkacamata yang berjoget dan tulisan Joget', emoji: '👜', nama: 'Totebag Panda Joget', harga: 85000, bg: 'bg-hijau', stok: 40 },
  { id: 'stiker', gambar: '/images/merch/stiker.webp', alt: 'Enam stiker: kepala panda berkacamata, piringan hitam, tulisan Disko, petir, equalizer, dan bola disko', emoji: '🐼', nama: 'Stiker pack (6)', harga: 25000, bg: 'bg-biru', stok: 200 },
];
