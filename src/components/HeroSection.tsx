import Link from "next/link";

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#0060AA]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,96,170,0.95) 0%, rgba(0,0,128,0.75) 100%), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C7973B]">
            Sindicato institucional
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Defendemos el trabajo con claridad, organización y compromiso.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            Una institución sólida, cercana y moderna que acompaña a los
            trabajadores con información, representación y respaldo constante.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contacto"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#000080] transition hover:bg-slate-100"
            >
              Solicitar información
            </Link>
            <Link
              href="#historia"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Conocer nuestra esencia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
