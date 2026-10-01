const SITE = "https://linkinbio-disko.vercel.app";

export default function sitemap() {
  const now = new Date();
  return ["", "/jadwal", "/merch"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
