import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="PreetSidhuDesigns home">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-primary)] font-extrabold text-lg text-white transition-transform group-hover:scale-105">
        P
      </span>
      <span className="text-lg font-extrabold tracking-tight">
        Preet<span className="text-[var(--color-primary)]">Sidhu</span>Designs
      </span>
    </Link>
  );
}
