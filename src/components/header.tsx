'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-haze/70 backdrop-blur bg-ink/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label={site.name}>
          <div className="h-10 w-10 rounded-full border border-haze bg-gradient-to-br from-gold/70 via-gold/30 to-transparent shadow-glow" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-ivory/80">{site.name}</p>
            <p className="text-xs text-ivory/60">Uhren & Schmuck</p>
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-1 text-ivory/80 transition-colors hover:text-gold ${
                pathname === item.href ? "text-gold" : ""
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-[2px] w-full bg-gold"
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
