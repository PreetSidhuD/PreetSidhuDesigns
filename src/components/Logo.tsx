import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="PreetSidhuDesigns home">
      <Image
        src="/logo.png"
        alt="PreetSidhuDesigns logo"
        width={36}
        height={36}
        className="h-9 w-9 transition-transform group-hover:scale-105"
        priority
      />
      <span className="text-lg font-extrabold tracking-tight">
        Preet<span className="text-[var(--color-primary)]">Sidhu</span>Designs
      </span>
    </Link>
  );
}
