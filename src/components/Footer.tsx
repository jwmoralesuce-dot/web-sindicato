import Link from "next/link";
import { contactInfo, navigationItems } from "../lib/site";

export function Footer() {
  return (
    <footer className="bg-blue-600 text-navy">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Sindicato
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Defendemos derechos, construimos futuro.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/90">
            Somos una organización comprometida con la dignidad laboral, la
            capacitación y el acompañamiento de nuestros afiliados.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Contacto
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-white/90">
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Secciones
            </h3>
            <ul className="mt-2 flex flex-wrap gap-3 text-sm text-white/90">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-4 text-center text-sm text-white/80 sm:px-6 lg:px-8">
        © 2026 Sindicato. Todos los derechos reservados.
      </div>
    </footer>
  );
}
