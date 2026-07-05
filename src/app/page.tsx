import { client } from "@/lib/sanity";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { NewsSection } from "../components/NewsSection";
import { contactInfo } from "../lib/site";

// Esta función va al "almacén" y trae los comunicados
async function getComunicados() {
  const query = `*[_type == "comunicado"]|order(fecha desc){_id, titulo, fecha, "url": archivo.asset->url, "nombreArchivo": archivo.asset->originalFilename, "imagenUrl": imagen.asset->url}`;
  return await client.fetch(query);
}

async function getHistoria() {
  const query = `*[_type == "historia"][0]{titulo, descripcion, subtitulo}`;
  return await client.fetch(query);
}

export default async function Home() {
  const [comunicados, historia] = await Promise.all([getComunicados(), getHistoria()]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#000080]">
      <Navbar />

      <main>
        <HeroSection />

        <section id="historia" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0060AA]">
              Nuestra esencia
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#000080] sm:text-4xl lg:text-5xl">
              {historia?.titulo || "Una organización que acompaña a los trabajadores con seriedad, continuidad y mirada institucional."}
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-700">
              {historia?.descripcion || "Desde nuestros inicios, el sindicato ha sido un referente en la defensa colectiva, promoviendo condiciones de trabajo justas y un vínculo cercano con cada afiliado."}
            </p>
          </div>
        </section>

        <NewsSection comunicados={comunicados} />

        <section id="contacto" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0060AA]">
                Contacto directo
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#000080] sm:text-4xl">
                Estamos disponibles para responder tus consultas.
              </h2>
              <ul className="mt-8 space-y-4 text-base leading-7 text-slate-700">
                <li>
                  <span className="font-semibold text-[#000080]">Correo:</span> {contactInfo.email}
                </li>
                <li>
                  <span className="font-semibold text-[#000080]">Teléfono:</span> {contactInfo.phone}
                </li>
                <li>
                  <span className="font-semibold text-[#000080]">Dirección:</span> {contactInfo.address}
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] bg-[#000080] p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C7973B]">
                Afiliación simple
              </p>
              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Nombre y apellido"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-300"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-300"
                />
                <textarea
                  rows={4}
                  placeholder="Mensaje breve"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-300"
                />
                <button
                  type="button"
                  className="rounded-full bg-[#CC0000] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a30000]"
                >
                  Enviar consulta
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}