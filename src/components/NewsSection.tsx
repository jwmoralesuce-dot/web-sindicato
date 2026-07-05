import Link from "next/link";

const ADMIN_ACCESS_PATH = "/admin";

type Comunicado = {
  _id: string;
  titulo?: string;
  fecha?: string;
  url?: string;
  nombreArchivo?: string;
  imagenUrl?: string;
};

function formatDate(value?: string) {
  if (!value) return "Sin fecha";

  const date = new Date(value);
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function NewsSection({ comunicados }: { comunicados: Comunicado[] }) {
  const isAdminMode = process.env.NEXT_PUBLIC_ADMIN_MODE === "true";

  return (
    <section id="comunicados" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0060AA]">
              Comunicados y documentos
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#000080] sm:text-4xl">
              Información institucional clara, ordenada y accesible.
            </h2>
          </div>

          {isAdminMode ? (
            <Link
              href={ADMIN_ACCESS_PATH}
              className="inline-flex rounded-full border border-[#0060AA] px-5 py-3 text-sm font-semibold text-[#0060AA] transition hover:bg-[#0060AA] hover:text-white"
            >
              Subir documentos
            </Link>
          ) : null}
        </div>

        {comunicados.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {comunicados.map((item) => (
              <article
                key={item._id}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
              >
                {item.imagenUrl ? (
                  <img
                    src={item.imagenUrl}
                    alt={item.titulo || "Imagen del comunicado"}
                    className="mb-4 h-40 w-full rounded-2xl object-cover"
                  />
                ) : null}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C7973B]">
                  {formatDate(item.fecha)}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#000080]">
                  {item.titulo || "Comunicado sin título"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Documento disponible para consulta y descarga institucional.
                </p>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex text-sm font-semibold text-[#0060AA] transition hover:text-[#000080]"
                  >
                    Ver documento · {item.nombreArchivo || "PDF"}
                  </a>
                ) : (
                  <p className="mt-6 text-sm font-medium text-slate-400">
                    Documento pendiente de publicación.
                  </p>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 p-10 text-center text-slate-600">
            {isAdminMode
              ? "Aún no hay comunicados publicados. Puedes subirlos desde el panel de gestión."
              : "Aún no hay comunicados publicados para mostrar en la web institucional."}
          </div>
        )}
      </div>
    </section>
  );
}
