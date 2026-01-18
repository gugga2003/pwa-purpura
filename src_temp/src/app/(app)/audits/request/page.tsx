"use client";

import Link from "next/link";

export default function AuditRequestPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="h-11 bg-white dark:bg-background-dark"></div>
      <nav className="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 px-4 py-3 justify-between">
        <div className="flex items-center gap-2">
          <Link href="/audits" className="material-symbols-outlined text-primary text-[28px] cursor-pointer">
            chevron_left
          </Link>
          <h1 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Protocolo D3</h1>
        </div>
        <div className="flex items-center">
          <span className="material-symbols-outlined text-gray-400">security</span>
        </div>
      </nav>
      <main className="pb-10">
        <header className="px-4 pt-6 pb-2">
          <h2 className="text-[#171216] dark:text-white text-2xl font-bold leading-tight tracking-tight">Solicitud de Auditoría</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Generación de paquete de datos auditable de alta integridad.
          </p>
        </header>
        <form className="space-y-4 px-4 mt-4">
          <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-50 dark:border-gray-800">
            <label className="block mb-4">
              <span className="text-[#171216] dark:text-gray-200 text-sm font-semibold uppercase tracking-wider mb-2 block">
                Entidad Solicitante
              </span>
              <input
                className="form-input w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-[#171216] dark:text-white focus:ring-primary focus:border-primary h-12 px-4 text-base"
                placeholder="Ej. Contraloría General de la República"
                type="text"
              />
            </label>
            <label className="block">
              <span className="text-[#171216] dark:text-gray-200 text-sm font-semibold uppercase tracking-wider mb-2 block">
                Motivo de la Auditoría
              </span>
              <textarea
                className="form-input w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-[#171216] dark:text-white focus:ring-primary focus:border-primary p-4 text-base resize-none"
                placeholder="Escriba la justificación legal o técnica..."
                rows={3}
              ></textarea>
            </label>
          </section>
          <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-50 dark:border-gray-800">
            <h3 className="text-[#171216] dark:text-gray-200 text-sm font-semibold uppercase tracking-wider mb-4">
              Periodo de Auditoría
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-xs text-gray-500 mb-1 ml-1">Fecha Inicio</span>
                <div className="relative">
                  <input
                    className="form-input w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-[#171216] dark:text-white h-11 px-3 text-sm focus:ring-primary focus:border-primary"
                    type="date"
                  />
                </div>
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-500 mb-1 ml-1">Fecha Fin</span>
                <div className="relative">
                  <input
                    className="form-input w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-[#171216] dark:text-white h-11 px-3 text-sm focus:ring-primary focus:border-primary"
                    type="date"
                  />
                </div>
              </label>
            </div>
          </section>
          <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-50 dark:border-gray-800">
            <h3 className="text-[#171216] dark:text-gray-200 text-sm font-semibold uppercase tracking-wider mb-4">
              Módulos a exportar
            </h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-400">group</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Gestión de Usuarios</span>
                </div>
                <input checked className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-400">account_tree</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Historial de Proyectos</span>
                </div>
                <input checked className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-400">chat_bubble</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Registros de Chat</span>
                </div>
                <input className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-400">terminal</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Logs de Sistema</span>
                </div>
                <input className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
              </label>
            </div>
          </section>
          <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-[#B32D2D] p-4 rounded-r-lg mt-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-[#B32D2D]">warning</span>
              <div>
                <p className="text-[#B32D2D] text-sm font-bold uppercase tracking-tight">Aviso de Seguridad Crítico</p>
                <p className="text-[#B32D2D]/80 text-xs mt-1 leading-relaxed">
                  Este proceso genera un registro inalterable en la matriz de trazabilidad nacional. La descarga y acceso a estos
                  datos será monitoreada y vinculada a su identidad digital.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 pb-8">
            <Link
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              href="/audits/confirmation"
            >
              <span className="material-symbols-outlined">data_object</span>
              Generar Paquete Auditable
            </Link>
            <p className="text-center text-xs text-gray-400 mt-4">Protocolo D3 Versión 2.4.1 - La Púrpura Territorio</p>
          </div>
        </form>
      </main>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 opacity-20"></div>
    </div>
  );
}


