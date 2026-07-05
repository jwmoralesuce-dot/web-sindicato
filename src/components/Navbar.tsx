"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "../lib/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <Image
              src="/logo.jpg"
              alt="Logo del sindicato"
              width={48}
              height={48}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0060AA]">
              Sindicato
            </p>
            <p className="text-xs text-[#C7973B]">Representación institucional</p>
          </div>
        </Link>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-[#000080] md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? "Cerrar" : "Menú"}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#000080] transition hover:text-[#0060AA]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#000080] transition hover:text-[#0060AA]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
