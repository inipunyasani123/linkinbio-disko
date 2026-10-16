import { Bungee, Space_Mono } from "next/font/google";
import "./globals.css";

const bungee = Bungee({ subsets: ["latin"], variable: "--font-bungee", weight: "400" });
const spacemono = Space_Mono({ subsets: ["latin"], variable: "--font-spacemono", weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"MusicGroup","name":"DISKO PANDA","genre":"Funk Disco","url":"https://linkinbio-disko.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://linkinbio-disko.pintuweb.id"),
  title: { default: "Disko Panda — Band Funk-Disko dari Bandung", template: "%s — Disko Panda" },
  description: "Tautan Disko Panda, band funk-disko dari Bandung: jadwal tur \"Panas Dingin\" di enam kota, beli tiket, merch resmi, vinyl 7\", dan booking manggung.",
  applicationName: "DISKO PANDA",
  keywords: ["band funk bandung", "jadwal konser 2026", "merch band", "vinyl 7 inci", "link in bio band"],
  authors: [{ name: "DISKO PANDA" }],
  creator: "DISKO PANDA",
  publisher: "DISKO PANDA",
  alternates: { canonical: "https://linkinbio-disko.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-disko.pintuweb.id",
    siteName: "DISKO PANDA",
    title: "Disko Panda — Band Funk-Disko dari Bandung",
    description: "Tautan Disko Panda, band funk-disko dari Bandung: jadwal tur \"Panas Dingin\" di enam kota, beli tiket, merch resmi, vinyl 7\", dan booking manggung.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Disko Panda — Band Funk-Disko dari Bandung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disko Panda — Band Funk-Disko dari Bandung",
    description: "Tautan Disko Panda, band funk-disko dari Bandung: jadwal tur \"Panas Dingin\" di enam kota, beli tiket, merch resmi, vinyl 7\", dan booking manggung.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${bungee.variable} ${spacemono.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=disko" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
