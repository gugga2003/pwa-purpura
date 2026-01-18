"use client";

import Link from "next/link";

export default function AuditLogsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center px-4 h-16 justify-between">
          <div className="flex items-center gap-2">
            <Link className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/audits">
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">arrow_back_ios</span>
            </Link>
            <h1 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">Logs de Errores</h1>
          </div>
          <div className="flex items-center gap-1">
            <button className="flex size-10 items-center justify-center rounded-full text-primary hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-md mx-auto pb-24">
        <div className="px-4 pt-4">
          <label className="relative block w-full group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </span>
            <input
              className="block w-full h-12 pl-12 pr-4 bg-white dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary shadow-sm text-sm placeholder:text-slate-400 dark:text-white"
              placeholder="Buscar por código, mensaje o stack trace..."
              type="text"
            />
          </label>
        </div>
        <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 text-white shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-[18px]">list</span>
            <span className="text-sm font-semibold">Todos</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-800 px-5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-error-red transition-all">
            <span className="material-symbols-outlined text-error-red text-[18px] font-fill">error</span>
            <span className="text-sm font-medium">Crítico</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-800 px-5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-warning-amber transition-all">
            <span className="material-symbols-outlined text-warning-amber text-[18px]">warning</span>
            <span className="text-sm font-medium">Aviso</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-800 px-5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-info-blue transition-all">
            <span className="material-symbols-outlined text-info-blue text-[18px]">info</span>
            <span className="text-sm font-medium">Info</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 px-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-4 border-l-4 border-error-red">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-error-red bg-error-red/10 px-2 py-0.5 rounded">Crítico</span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">ERR_IDB_SYNC_042</h3>
                </div>
                <span className="text-xs font-medium text-slate-400">Hace 2 min</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                Fallo de persistencia en IndexedDB: El sistema no pudo escribir la transacción debido a espacio insuficiente en disco del
                dispositivo.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-4">
                <p className="monospace-text text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  at SyncManager.save (sync.js:45:12)
                  <br />
                  at indexedDB.request.onerror (db-provider.js:102:4)
                  <br />
                  at ZoneDelegate.invokeTask (polyfills.js:12:31)
                </p>
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-[12px] border-t border-slate-100 dark:border-slate-700 pt-3">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">person</span>
                  <span>Usuario: ID_9821</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">screenshot</span>
                  <span>Home/Ventas</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">signal_cellular_connected_no_internet_4_bar</span>
                  <span className="text-error-red font-semibold">Offline</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">battery_3_bar</span>
                  <span>Batería: 14%</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">content_copy</span>
                  Copiar Log
                </button>
                <button className="flex-[1.5] flex items-center justify-center gap-2 h-10 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Enviar a Soporte
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-4 border-l-4 border-warning-amber">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-warning-amber bg-warning-amber/10 px-2 py-0.5 rounded">Advertencia</span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">API_TIMEOUT_WARN</h3>
                </div>
                <span className="text-xs font-medium text-slate-400">Hace 15 min</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                La petición a /api/v1/products excedió el tiempo límite de 5000ms. Se utilizó el caché local.
              </p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-[12px] border-t border-slate-100 dark:border-slate-700 pt-3">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">person</span>
                  <span>Usuario: ID_9821</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">screenshot</span>
                  <span>Catálogo</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[16px]">wifi</span>
                  <span className="text-emerald-500 font-semibold">Online (4G)</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">content_copy</span>
                  Copiar Log
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-4 border-l-4 border-info-blue">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-info-blue bg-info-blue/10 px-2 py-0.5 rounded">Info</span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">SYS_REBOOT_TRIGGER</h3>
                </div>
                <span className="text-xs font-medium text-slate-400">Hace 1 hora</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                Reinicio preventivo del Service Worker detectado tras actualización de manifiesto v2.4.1.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">content_copy</span>
                  Copiar Log
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 text-center">
          <p className="text-slate-400 text-xs italic">Mostrando los últimos 50 registros de la sesión actual.</p>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/90 dark:via-background-dark/90 to-transparent">
        <div className="max-w-md mx-auto">
          <button className="w-full flex items-center justify-center gap-3 h-14 bg-primary text-white rounded-2xl shadow-xl shadow-primary/30 font-bold text-base hover:scale-[0.98] transition-transform active:scale-95">
            <span className="material-symbols-outlined">share_reviews</span>
            Enviar Reporte Completo a Central
          </button>
        </div>
      </div>
    </div>
  );
}

