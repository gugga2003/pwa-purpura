"use client";

import Link from "next/link";

export default function AuditsTraceabilityPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white pb-24">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 ios-blur border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Link
            href="/audits"
            className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-[#171216] dark:text-white text-lg font-extrabold leading-tight tracking-tight flex-1 text-center">
            Trazabilidad D3
          </h1>
          <div className="flex w-10 items-center justify-end">
            <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
        <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 transition-all shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider">Actor</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#171216] dark:text-gray-300 px-4 transition-all">
            <span className="text-xs font-bold uppercase tracking-wider">Rama</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#171216] dark:text-gray-300 px-4 transition-all">
            <span className="text-xs font-bold uppercase tracking-wider">Territorio</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#171216] dark:text-gray-300 px-4 transition-all">
            <span className="text-xs font-bold uppercase tracking-wider">Gravedad</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
        </div>
      </header>
      <main className="max-w-screen-md mx-auto">
        <section className="px-4 py-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#171216] dark:text-white text-base font-bold">Distribución de Acciones</h2>
              <span className="text-primary text-xs font-bold">Semana Actual</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold tracking-tight">2,482</span>
                <span className="text-emerald-500 text-sm font-bold flex items-center">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span> 14%
                </span>
              </div>
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter text-gray-500 mb-1">
                    <span>Seguridad</span>
                    <span>42%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter text-gray-500 mb-1">
                    <span>Relevamientos</span>
                    <span>28%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter text-gray-500 mb-1">
                    <span>Accesos</span>
                    <span>18%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "18%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-xl font-bold tracking-tight">Eventos Críticos</h2>
            <Link className="text-primary text-sm font-bold flex items-center gap-1" href="/audits/recovery">
              <span className="material-symbols-outlined text-[18px]">history</span>
              Historial
            </Link>
          </div>
          <div className="space-y-4">
            <div className="group relative bg-white dark:bg-background-dark border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">security_update_good</span>
                  </div>
                  <div className="w-px h-full bg-gray-100 dark:bg-gray-800 mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-[15px] leading-tight text-primary">Cambio de Rol Elevado</h3>
                    <span className="text-[11px] font-medium text-gray-400">Hace 12 min</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Admin_Master</strong> modificó permisos de{" "}
                    <span className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded italic">Supervisor_T1</span> a
                    "Administrador de Rama".
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded-lg border border-gray-100 dark:border-gray-800">
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">IP de Origen</p>
                      <p className="text-xs font-mono font-medium">192.168.1.142</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded-lg border border-gray-100 dark:border-gray-800">
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">Dispositivo</p>
                      <p className="text-xs font-medium truncate">iOS App • iPhone 15 Pro</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-primary text-xs font-extrabold flex items-center gap-1 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10"
                      href="/audits/recovery"
                    >
                      ID: AUD-99283-XP
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-background-dark border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                    <span className="material-symbols-outlined">database_upload</span>
                  </div>
                  <div className="w-px h-full bg-gray-100 dark:bg-gray-800 mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-[15px] leading-tight text-amber-700">Exportación de Datos</h3>
                    <span className="text-[11px] font-medium text-gray-400">Hace 2 horas</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>User_Analyst_04</strong> solicitó exportación masiva de "Rama Centro" (842 registros).
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded-lg border border-gray-100 dark:border-gray-800">
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">IP de Origen</p>
                      <p className="text-xs font-mono font-medium">10.0.4.12</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded-lg border border-gray-100 dark:border-gray-800">
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">Formato</p>
                      <p className="text-xs font-medium">CSV/Encrypted</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-primary text-xs font-extrabold flex items-center gap-1 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10"
                      href="/audits/recovery"
                    >
                      ID: AUD-99102-EX
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </Link>
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                      Alta Prioridad
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-background-dark border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <span className="material-symbols-outlined">person_cancel</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-[15px] leading-tight text-red-700">Acceso Revocado</h3>
                    <span className="text-[11px] font-medium text-gray-400">Ayer, 23:45</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    El sistema revocó automáticamente el acceso de <strong>Voluntario_B2</strong> por inactividad prolongada
                    (&gt;90 días).
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-primary text-xs font-extrabold flex items-center gap-1 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10"
                      href="/audits/recovery"
                    >
                      ID: AUD-98441-SYS
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-24 right-6 z-40">
        <Link
          href="/audits/confirmation"
          className="bg-primary hover:bg-primary/90 text-white size-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-2xl">download</span>
        </Link>
      </div>
      <nav className="fixed bottom-0 w-full bg-white/90 dark:bg-background-dark/90 ios-blur border-t border-gray-100 dark:border-gray-800 px-6 pt-3 pb-8 z-50">
        <div className="flex justify-between items-center max-w-screen-md mx-auto">
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/home">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-primary" href="/audits/traceability">
            <span className="material-symbols-outlined fill-[1]">analytics</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Auditoría</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/map">
            <span className="material-symbols-outlined">map</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Mapa</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Ajustes</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

