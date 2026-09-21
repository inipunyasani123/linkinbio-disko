export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://linkinbio-disko.vercel.app/sitemap.xml",
    host: "https://linkinbio-disko.vercel.app",
  };
}
