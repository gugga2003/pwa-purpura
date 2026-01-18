"use client";

import Link from "next/link";
import { useAppStore } from "@/lib/store";

export default function DraftsPage() {
  const drafts = useAppStore((state) => state.drafts);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link
            href="/reports"
            className="text-primary flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <div className="flex-1 px-3">
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Borradores</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Contenido pendiente</p>
          </div>
          <Link
            href="/drafts/new"
            className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30"
          >
            <span className="material-symbols-outlined">add</span>
          </Link>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
        <section className="space-y-2">
          <h3 className="text-2xl font-extrabold tracking-tight">Listado de borradores</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Retoma documentos pendientes o crea uno nuevo.
          </p>
        </section>
        <section className="space-y-3">
          {drafts.map((draft) => (
            <Link
              key={draft.id}
              href={`/drafts/${draft.id}`}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-bold text-[#171216] dark:text-white">{draft.title}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                  Actualizado {new Date(draft.updatedAt).toLocaleDateString("es-AR")}
                </p>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
          ))}
          {!drafts.length && (
            <div className="text-center text-sm text-gray-400 py-10">No hay borradores guardados.</div>
          )}
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 pt-3 pb-8 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/home">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-primary" href="/drafts">
            <span className="material-symbols-outlined">description</span>
            <span className="text-[10px] font-bold">Borradores</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/reports">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-[10px] font-bold">Reportes</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/profile">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
