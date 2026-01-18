"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const user = useAppStore((state) => state.user);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) return null;

  // Lógica para determinar el título del Header según la ruta
  const getHeaderInfo = () => {
    if (pathname.startsWith("/tasks")) return { title: "Relevamientos", subtitle: "Operación de Campo" };
    if (pathname.startsWith("/alerts")) return { title: "Centro de Alertas", subtitle: "Monitoreo Territorial" };
    if (pathname.startsWith("/team")) return { title: "Mi Equipo", subtitle: "Red de Territorio" };
    if (pathname.startsWith("/profile")) return { title: "Mi Perfil", subtitle: user.name };
    if (pathname.startsWith("/settings")) return { title: "Configuración", subtitle: "Ajustes de la PWA" };
    if (pathname.startsWith("/news")) return { title: "Novedades", subtitle: "Módulo de Comunicación" };
    if (pathname.startsWith("/map")) return { title: "Mapa en Tiempo Real", subtitle: "Vista Territorial" };
    if (pathname.includes("dashboard")) return { title: "Dashboard Administrativo", subtitle: "Gestión E2" };
    if (pathname.includes("home")) return { title: "Territorio", subtitle: user.territory };

    return { title: "La Púrpura", subtitle: user.territory };
  };

  const headerInfo = getHeaderInfo();
  const isSpecialPage = pathname === "/home" || pathname === "/dashboard";

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <Header
        title={headerInfo.title}
        subtitle={headerInfo.subtitle}
        showBack={!isSpecialPage}
      />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
