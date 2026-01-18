"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";

export default function IncidentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const incidents = useAppStore((state) => state.incidents);
  const incidentId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const incident = useMemo(
    () => incidents.find((item) => item.id === incidentId) ?? incidents[0],
    [incidentId, incidents]
  );

  const priorityLabel = (value: string) => {
    if (value === "critical" || value === "high") return "Alta";
    if (value === "medium") return "Media";
    return "Baja";
  };

  const statusLabel = (value: string) => {
    if (value === "open") return "Abierta";
    if (value === "in_review") return "En revisión";
    return "Cerrada";
  };

  if (!incident) {
    return (
      <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen flex items-center justify-center antialiased">
        <div className="text-center px-6">
          <h1 className="text-2xl font-bold">Incidencia no encontrada</h1>
          <p className="text-sm text-text-sub-light dark:text-text-sub-dark mt-2">
            La incidencia solicitada no existe o fue removida.
          </p>
          <button
            className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white font-bold"
            onClick={() => router.push("/incidents")}
          >
            Volver
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen font-display">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => router.push("/incidents")}
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight text-center flex-1">Detalle de Incidencia</h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 pb-24 space-y-6">
        <section className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">ID</p>
              <h2 className="text-xl font-extrabold text-[#171216] dark:text-white">{incident.id}</h2>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">
                {statusLabel(incident.status)}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                Prioridad {priorityLabel(incident.priority)}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{incident.title}</p>
          <div className="mt-4 space-y-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>{incident.territory}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">category</span>
              <span>{incident.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>{new Date(incident.createdAt).toLocaleString("es-AR")}</span>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Detalle</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{incident.description}</p>
        </section>

        <section className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Acciones rápidas</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/chat-to-incident"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 text-primary font-bold py-3"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Notificar
            </Link>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold py-3">
              <span className="material-symbols-outlined text-base">check_circle</span>
              Marcar resuelta
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
