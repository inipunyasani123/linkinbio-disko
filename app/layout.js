import { Bungee, Space_Mono } from "next/font/google";
import "./globals.css";

const bungee = Bungee({ subsets: ["latin"], variable: "--font-bungee", weight: "400" });
const spacemono = Space_Mono({ subsets: ["latin"], variable: "--font-spacemono", weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"MusicGroup","name":"DISKO PANDA","genre":"Funk Disco","url":"https://linkinbio-disko.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://linkinbio-disko.vercel.app"),
  title: "DISKO PANDA — Dengarkan & Tonton",
  description: "Link in bio band funk-disco DISKO PANDA dari Bandung: single baru, jadwal manggung, dan merch resmi.",
  applicationName: "DISKO PANDA",
  keywords: ["link in bio", "band", "funk disco", "musik", "merch"],
  authors: [{ name: "DISKO PANDA" }],
  creator: "DISKO PANDA",
  publisher: "DISKO PANDA",
  alternates: { canonical: "https://linkinbio-disko.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-disko.vercel.app",
    siteName: "DISKO PANDA",
    title: "DISKO PANDA — Dengarkan & Tonton",
    description: "Link in bio band funk-disco DISKO PANDA dari Bandung: single baru, jadwal manggung, dan merch resmi.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "DISKO PANDA — Dengarkan & Tonton" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DISKO PANDA — Dengarkan & Tonton",
    description: "Link in bio band funk-disco DISKO PANDA dari Bandung: single baru, jadwal manggung, dan merch resmi.",
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
