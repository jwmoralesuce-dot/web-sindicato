import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Sindicato oficial
            </p>
            <h1 className="text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
              Unidos defendemos el trabajo, la dignidad y el futuro.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Somos la voz institucional de los trabajadores, comprometidos con
              la defensa de sus derechos, la información transparente y el
              acompañamiento permanente.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/afiliacion"
                className="rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Afiliarse
              </Link>
              <Link
                href="/documentacion"
                className="rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Ver documentación
              </Link>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <div className="rounded-2xl bg-blue-600 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white/15 p-1">
                  <Image
                    src="/logo.jpg"
                    alt="Logo del sindicato"
                    width={64}
                    height={64}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                    Nuestros ejes
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Compromiso, historia y defensa colectiva
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li>• Asesoramiento laboral y jurídico.</li>
                <li>• Capacitación y formación continua.</li>
                <li>• Participación y representación institucional.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
