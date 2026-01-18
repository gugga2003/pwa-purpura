"use client";

import Link from "next/link";

import { appStore, useAppStore } from "@/lib/store";

function formatRelative(value: string) {
  const createdAt = new Date(value).getTime();
  if (Number.isNaN(createdAt)) return "Hace instantes";
  const diffMinutes = Math.max(1, Math.round((Date.now() - createdAt) / 60000));
  if (diffMinutes < 60) return `Hace ${diffMinutes} min`;
  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `Hace ${diffHours} h`;
  const diffDays = Math.round(diffHours / 24);
  return `Hace ${diffDays} d`;
}

export default function OfflineQueuePage() {
  const queue = useAppStore((state) => state.offlineQueue);
  const pendingCount = queue.filter((item) => item.status !== "synced").length;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#171216] dark:text-white">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link
            className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10"
            href="/sync-center"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Cola Offline
          </h2>
          <div className="w-10"></div>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 pb-24 space-y-6">
        <section className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Pendientes</p>
              <p className="text-3xl font-extrabold text-primary">{pendingCount}</p>
            </div>
            <Link className="text-primary text-xs font-bold uppercase tracking-wider" href="/offline-queue/guide">
              Como funciona
            </Link>
          </div>
        </section>
        <section className="space-y-3">
          {queue.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-gray-500">{formatRelative(item.createdAt)}</p>
                </div>
                <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full uppercase">
                  {item.status === "synced" ? "SINCRONIZADO" : "EN COLA"}
                </span>
              </div>
            </div>
          ))}
          {!queue.length && (
            <div className="text-center text-sm text-gray-400 py-10">No hay elementos en cola.</div>
          )}
        </section>
        <button
          className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
          onClick={() => appStore.syncOfflineQueue()}
        >
          Sincronizar ahora
        </button>
      </main>
    </div>
  );
}
