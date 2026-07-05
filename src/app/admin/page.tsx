"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        setError(result.message || "Credenciales incorrectas.");
        setLoading(false);
        return;
      }

      // Si todo es correcto, redirigimos al Studio
      // Usamos replace para que no se quede el login en el historial
      router.replace("/studio");
    } catch (err) {
      setError("Error de conexión al servidor.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4 py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0060AA]">
          Acceso administrador
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[#000080]">
          Ingrese la clave de administración
        </h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Solo el administrador autorizado puede acceder al panel de gestión de documentos.
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Clave de acceso"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0060AA]"
            required
          />
          {error && <p className="text-sm text-[#CC0000]">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#0060AA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004f86] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Validando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}