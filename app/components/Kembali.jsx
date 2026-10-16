import Link from 'next/link';

export default function Kembali() {
  return (
    <Link href="/" className="pop pop-hover inline-flex min-h-11 -rotate-1 items-center gap-2 rounded-xl bg-panda px-4 py-2 font-display text-sm text-white">
      ← DISKO<span className="text-magenta">PANDA</span>
    </Link>
  );
}
