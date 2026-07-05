"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "../lib/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/15 shadow-sm">
            <Image
              src="/logo.jpg"
              alt="Logo del sindicato"
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Sindicato
            </p>
            <p className="text-xs text-gold">Trabajadores en acción</p>
          </div>
        </Link>

        <button
          type="button"
          className="rounded-md border border-white/25 px-3 py-2 text-sm font-semibold text-white md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? "Cerrar" : "Menú"}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/afiliacion"
            className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Afiliarse
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/20 bg-blue-600 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-navy transition hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/afiliacion"
              className="inline-flex w-fit rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Afiliarse
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
