"use client";

import Link from "next/link";

export default function SyncConflictPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-gray-100 font-display min-h-screen pb-40">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 ios-blur border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            href="/sync-center"
          >
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">close</span>
          </Link>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Resolución de Conflicto</h2>
          <div className="flex w-10 items-center justify-end">
            <p className="text-primary text-sm font-bold tracking-tight cursor-pointer">Ayuda</p>
          </div>
        </div>
      </nav>
      <main className="max-w-md mx-auto px-4">
        <div className="pt-6 pb-2">
          <h3 className="text-[#171216] dark:text-white tracking-tight text-2xl font-extrabold leading-tight">Conflicto de sincronización</h3>
          <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed mt-2">
            Se han detectado cambios en el servidor realizados por otro usuario mientras trabajabas offline. Selecciona los datos que deseas conservar.
          </p>
        </div>
        <div className="flex py-6">
          <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1.5 gap-1">
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-gray-500 dark:text-gray-400 text-sm font-bold transition-all">
              <span className="truncate">Usar Local</span>
              <input checked className="hidden" name="resolution-mode" type="radio" value="local" />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-gray-500 dark:text-gray-400 text-sm font-bold transition-all">
              <span className="truncate">Usar Servidor</span>
              <input className="hidden" name="resolution-mode" type="radio" value="server" />
            </label>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-widest opacity-60">Comparativa de campos</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 py-1 flex items-center gap-2">
              <span className="h-px bg-gray-200 dark:border-gray-700 flex-1"></span>
              <span className="text-xs font-bold text-gray-400">Título del Registro</span>
              <span className="h-px bg-gray-200 dark:border-gray-700 flex-1"></span>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border-2 border-primary shadow-sm">
              <p className="text-[10px] font-bold text-primary uppercase mb-1">Tu versión</p>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Revisión Mensual <span className="diff-highlight">Zona Norte</span>
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm opacity-60">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Servidor</p>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Revisión Mensual <span className="diff-highlight text-gray-400 font-bold">Territorio A</span>
              </p>
            </div>
            <div className="col-span-2 py-1 flex items-center gap-2 mt-2">
              <span className="h-px bg-gray-200 dark:border-gray-700 flex-1"></span>
              <span className="text-xs font-bold text-gray-400">Responsable</span>
              <span className="h-px bg-gray-200 dark:border-gray-700 flex-1"></span>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border-2 border-primary shadow-sm">
              <p className="text-[10px] font-bold text-primary uppercase mb-1">Tu versión</p>
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">MC</span>
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">M. Castillo</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm opacity-60">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Servidor</p>
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-gray-400">JS</span>
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">J. Sánchez</p>
              </div>
            </div>
            <div className="col-span-2 py-1 flex items-center gap-2 mt-2">
              <span className="h-px bg-gray-200 dark:border-gray-700 flex-1"></span>
              <span className="text-xs font-bold text-gray-400">Estado</span>
              <span className="h-px bg-gray-200 dark:border-gray-700 flex-1"></span>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border-2 border-primary shadow-sm">
              <p className="text-[10px] font-bold text-primary uppercase mb-1">Tu versión</p>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-yellow-500"></span>
                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">En Progreso</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm opacity-60">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Servidor</p>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-green-500"></span>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Completado</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-primary text-xl">info</span>
            <p className="text-sm text-primary/80 leading-snug">
              Si eliges una versión, los cambios de la otra se perderán permanentemente a menos que selecciones <strong>"Guardar como copia"</strong>.
            </p>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 ios-blur border-t border-gray-200 dark:border-gray-800 px-4 pt-4 pb-8 z-50">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-xl">check_circle</span>
            Resolver Conflicto
          </button>
          <button className="w-full bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold py-3.5 rounded-xl transition-all active:bg-gray-50 dark:active:bg-gray-800 flex items-center justify-center gap-2 text-sm">
            <span className="material-symbols-outlined text-xl">content_copy</span>
            Guardar como copia de conflicto (ConflictCopy)
          </button>
        </div>
      </footer>
    </div>
  );
}
