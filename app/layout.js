import { Bungee, Space_Mono } from "next/font/google";
import "./globals.css";

const bungee = Bungee({ subsets: ["latin"], variable: "--font-bungee", weight: "400" });
const spacemono = Space_Mono({ subsets: ["latin"], variable: "--font-spacemono", weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"MusicGroup","name":"DISKO PANDA","genre":"Funk Disco","url":"https://linkinbio-disko.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://linkinbio-disko.vercel.app"),
  title: { default: "Disko Panda — Band Funk-Disko dari Bandung", template: "%s — Disko Panda" },
  description: "Tautan Disko Panda, band funk-disko dari Bandung: tur \"Panas Dingin\" enam kota Oktober–Desember 2026, beli tiket, merch resmi, vinyl 7\", dan booking manggung.",
  applicationName: "DISKO PANDA",
  keywords: ["band funk bandung", "jadwal konser 2026", "merch band", "vinyl 7 inci", "link in bio band"],
  authors: [{ name: "DISKO PANDA" }],
  creator: "DISKO PANDA",
  publisher: "DISKO PANDA",
  alternates: { canonical: "https://linkinbio-disko.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-disko.vercel.app",
    siteName: "DISKO PANDA",
    title: "Disko Panda — Band Funk-Disko dari Bandung",
    description: "Tautan Disko Panda, band funk-disko dari Bandung: tur \"Panas Dingin\" enam kota Oktober–Desember 2026, beli tiket, merch resmi, vinyl 7\", dan booking manggung.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Disko Panda — Band Funk-Disko dari Bandung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disko Panda — Band Funk-Disko dari Bandung",
    description: "Tautan Disko Panda, band funk-disko dari Bandung: tur \"Panas Dingin\" enam kota Oktober–Desember 2026, beli tiket, merch resmi, vinyl 7\", dan booking manggung.",
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
    <html lang="id">
      <body className={`${bungee.variable} ${spacemono.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
