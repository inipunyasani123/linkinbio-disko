/* DISKO PANDA — band funk-disko Bandung (fiktif). Satu sumber isi untuk
   halaman tautan, jadwal tur, dan merch. Venue, harga, dan stok adalah
   contoh purwarupa desain. */

export const SITE = 'https://linkinbio-disko.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const SINGLE = { judul: 'Goyang Kota', durasi: '3:42', rilis: '18 September 2026', kredit: 'Ditulis Disko Panda · direkam di Bandung' };

export const LINKS = [
  { ikon: 'tiket', label: 'Tur "Panas Dingin"', sub: '6 kota · Oktober–Desember 2026', href: '/jadwal', bg: 'bg-magenta' },
  { ikon: 'api', label: 'Bandung hampir habis', sub: 'Sabtu, 24 Okt · sisa 40 tiket', href: '/jadwal#bandung', bg: 'bg-kuning' },
  { ikon: 'tas', label: 'Merch resmi', sub: 'Kaos · totebag · stiker', href: '/merch', bg: 'bg-biru' },
  { ikon: 'piringan', label: 'Vinyl 7" "Goyang Kota"', sub: 'Pre-order, dikirim November', href: '/merch#vinyl', bg: 'bg-hijau' },
  { ikon: 'mic', label: 'Booking manggung', sub: 'Kampus, kafe, pernikahan', href: '/jadwal#booking', bg: 'bg-krem' },
];

// Tanggal dicek: 10, 24, 31 Okt; 14, 28 Nov; 12 Des 2026 = Sabtu.
export const TUR = [
  { id: 'jakarta', kota: 'Jakarta', tanggal: 'Sabtu, 10 Okt 2026', venue: 'Gedung Musik Kemang (fiktif)', harga: 150000, sisa: 120 },
  { id: 'bandung', kota: 'Bandung', tanggal: 'Sabtu, 24 Okt 2026', venue: 'Aula Dago Lama (fiktif)', harga: 120000, sisa: 40 },
  { id: 'yogyakarta', kota: 'Yogyakarta', tanggal: 'Sabtu, 31 Okt 2026', venue: 'Pendopo Seni Utara (fiktif)', harga: 110000, sisa: 0 },
  { id: 'malang', kota: 'Malang', tanggal: 'Sabtu, 14 Nov 2026', venue: 'Gudang Kopi Ijen (fiktif)', harga: 100000, sisa: 180 },
  { id: 'surabaya', kota: 'Surabaya', tanggal: 'Sabtu, 28 Nov 2026', venue: 'Balai Pemuda Timur (fiktif)', harga: 130000, sisa: 220 },
  { id: 'denpasar', kota: 'Denpasar', tanggal: 'Sabtu, 12 Des 2026', venue: 'Lapangan Seni Renon (fiktif)', harga: 140000, sisa: 300 },
];

export const MERCH = [
  { id: 'kaos', emoji: '👕', nama: 'Kaos "Panas Dingin"', harga: 160000, bg: 'bg-magenta', ukuran: { S: 6, M: 14, L: 9, XL: 0, XXL: 3 } },
  { id: 'vinyl', emoji: '💿', nama: 'Vinyl 7" "Goyang Kota"', harga: 250000, bg: 'bg-kuning', catatan: 'Sisi B: "Lampu Merah" — dikirim mulai 16 November', stok: 150 },
  { id: 'tote', emoji: '👜', nama: 'Totebag Panda Joget', harga: 85000, bg: 'bg-hijau', stok: 40 },
  { id: 'stiker', emoji: '🐼', nama: 'Stiker pack (6)', harga: 25000, bg: 'bg-biru', stok: 200 },
];
