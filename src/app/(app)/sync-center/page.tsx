"use client";

import Link from "next/link";

import { useAppStore } from "@/lib/store";

const statusMeta = {
  pending: { label: "Waiting", tone: "warning", icon: "hourglass_empty" },
  syncing: { label: "Syncing", tone: "warning", icon: "hourglass_empty" },
  synced: { label: "Synced", tone: "success", icon: "check_circle" },
} as const;

export default function SyncCenterPage() {
  const queue = useAppStore((state) => state.offlineQueue);
  const clearQueue = useAppStore((state) => state.clearOfflineQueue);
  const removeFromOfflineQueue = useAppStore((state) => state.removeFromOfflineQueue);
  const pendingCount = queue.filter((item) => item.status !== "synced").length;

  const handleSync = () => {
    if (pendingCount === 0) return;
    alert("Sincronizando datos...");
    setTimeout(() => {
      clearQueue();
      alert("Sincronización completada con éxito.");
    }, 2000);
  };

  return (
    <main className="flex-1 px-4 py-6 space-y-8 overflow-y-auto pb-24">
      <div className="bg-white/10 dark:bg-primary/5 backdrop-blur-md rounded-xl p-4 flex items-center justify-between border border-primary/20 mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-icons-round text-warning text-2xl">wifi_off</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-warning"></span>
            </span>
          </div>
          <div>
            <p className="font-bold text-sm text-gray-800 dark:text-white">Modo Offline Activo</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Cola en espera. Sincroniza al recuperar conexión.</p>
          </div>
        </div>
        <button
          className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg active:scale-95 transition-all"
          onClick={handleSync}
        >
          Sincronizar
        </button>
      </div>

      <section>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="material-icons-round text-primary text-xl">backup</span>
            Cola de Envío
          </h2>
          <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
            {pendingCount} Pendientes
          </span>
        </div>
        <div className="space-y-3">
          {queue.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-warning"></div>
              <div className="flex justify-between items-start mb-2 pl-2">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Tipo: {item.type || "Relevamiento"}</p>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-bold text-warning uppercase bg-warning/10 px-2 py-1 rounded-md">
                  <span className="material-icons-round text-xs">hourglass_empty</span>
                  En espera
                </span>
              </div>
              <div className="flex justify-end gap-2 mt-3 pl-2">
                <button
                  onClick={() => removeFromOfflineQueue(item.id)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-400 hover:text-red-500 rounded-lg transition-colors">
                  <span className="material-icons-round text-sm">delete</span>
                  Descartar
                </button>
                <button
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-primary rounded-lg shadow-md"
                  onClick={handleSync}
                >
                  <span className="material-icons-round text-sm">refresh</span>
                  Reintentar
                </button>
              </div>
            </div>
          ))}
          {!queue.length && (
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-10 text-center">
              <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-2 block">cloud_done</span>
              <p className="text-sm text-gray-400 font-medium">Todo está al día. No hay elementos en cola.</p>
            </div>
          )}
        </div>
      </section>

      <div className="fixed bottom-24 right-6 z-20">
        <Link
          href="/tasks"
          className="bg-primary hover:bg-primary-dark text-white rounded-2xl p-4 shadow-xl shadow-primary/30 transition-transform active:scale-95 flex items-center justify-center font-bold gap-2"
        >
          <span className="material-icons-round text-2xl">add</span>
          <span className="text-sm">Nuevo Relevamiento</span>
        </Link>
      </div>
    </main>
  );
}
