import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAButton({
  href = "/booking",
  children,
  variant = "primary",
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-base font-bold tracking-tight transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:scale-[1.03] shadow-[0_8px_30px_-8px_rgba(255,74,23,0.6)]"
      : "border border-white/25 text-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
