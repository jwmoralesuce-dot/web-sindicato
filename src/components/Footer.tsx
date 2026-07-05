import Link from "next/link";
import { contactInfo, navigationItems } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0060AA]">
            Sindicato
          </p>
          <p className="mt-2 text-sm text-slate-600">
            © 2026 Sindicato. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#0060AA]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        {contactInfo.email} · {contactInfo.phone}
      </div>
    </footer>
  );
}
