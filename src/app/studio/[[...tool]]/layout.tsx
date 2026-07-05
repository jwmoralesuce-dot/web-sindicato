import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio de administración",
  description: "Panel de gestión del contenido del sitio",
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
