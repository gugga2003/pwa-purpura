"use client";

import Link from "next/link";

export default function NationalDashboardPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171217] dark:text-gray-100 font-display transition-colors duration-300">
      <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl overflow-x-hidden pb-24">
        <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary text-2xl">leaderboard</span>
            </div>
            <div>
              <h1 className="text-xl font-extrabold leading-tight tracking-tight text-[#171217] dark:text-white">Dashboard Nacional</h1>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">E1 • La Púrpura</p>
            </div>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">account_circle</span>
          </button>
        </header>
        <main className="px-4 py-6 space-y-6">
          <section className="bento-grid">
            <div className="bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between aspect-square">
              <div>
                <span className="material-symbols-outlined text-primary text-xl">groups</span>
                <p className="text-[13px] font-semibold text-gray-500 dark:text-gray-400 mt-2">Referentes Activos</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">1,240</p>
                <div className="flex items-center gap-1 text-[#078850] text-xs font-bold mt-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span>+5.2%</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between aspect-square">
              <div>
                <span className="material-symbols-outlined text-secondary text-xl">map</span>
                <p className="text-[13px] font-semibold text-gray-500 dark:text-gray-400 mt-2">Cobertura</p>
              </div>
              <div className="relative flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold tracking-tight">68%</p>
                  <p className="text-[10px] font-medium text-gray-400 uppercase">Total Territorio</p>
                </div>
                <div className="w-8 h-8 rounded-full border-4 border-gray-100 dark:border-gray-800 border-t-secondary flex items-center justify-center"></div>
              </div>
            </div>
            <div className="bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between aspect-square">
              <div>
                <span className="material-symbols-outlined text-amber-500 text-xl">assignment</span>
                <p className="text-[13px] font-semibold text-gray-500 dark:text-gray-400 mt-2">Proyectos</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">42</p>
                <p className="text-[10px] font-medium text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded-md inline-block">
                  12 Finalizan hoy
                </p>
              </div>
            </div>
            <div className="bg-primary text-white p-4 rounded-xl shadow-md flex flex-col justify-between aspect-square">
              <div>
                <span className="material-symbols-outlined text-white/80 text-xl">report_problem</span>
                <p className="text-[13px] font-semibold text-white/70 mt-2">Críticas</p>
              </div>
              <div>
                <p className="text-3xl font-black tracking-tight">08</p>
                <p className="text-[10px] font-bold text-white/90 uppercase tracking-wider">Acción requerida</p>
              </div>
            </div>
          </section>
          <section className="bg-white dark:bg-card-dark p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-base font-bold text-[#171217] dark:text-white">Actividad por Rama</h2>
                <p className="text-xs text-gray-400">Distribución de relevamientos mensual</p>
              </div>
              <button className="text-primary text-xs font-bold uppercase tracking-wider">Ver Más</button>
            </div>
            <div className="flex items-end justify-between h-40 gap-4 px-2">
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-t-lg relative overflow-hidden" style={{ height: "45%" }}>
                  <div className="absolute bottom-0 w-full bg-secondary opacity-80 h-full"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors">MADRE</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-t-lg relative overflow-hidden" style={{ height: "25%" }}>
                  <div className="absolute bottom-0 w-full bg-secondary opacity-60 h-full"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors">PYME</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-t-lg relative overflow-hidden" style={{ height: "85%" }}>
                  <div className="absolute bottom-0 w-full bg-primary h-full"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors">DEPORTES</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-t-lg relative overflow-hidden" style={{ height: "60%" }}>
                  <div className="absolute bottom-0 w-full bg-secondary opacity-90 h-full"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors">PROF.</span>
              </div>
            </div>
          </section>
          <section className="space-y-4 pb-12">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">notifications_active</span>
                <h2 className="text-base font-bold text-[#171217] dark:text-white">Alertas Automáticas</h2>
              </div>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">3 NUEVAS</span>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border-l-4 border-primary flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-lg">event_busy</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold">Territorios sin actividad</h3>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase">Hace 2h</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-snug">
                    Zona Sur (Chubut, Santa Cruz) sin reportes en los últimos 15 días.
                  </p>
                  <button className="mt-3 text-xs font-extrabold text-primary flex items-center gap-1">
                    ASIGNAR REVISIÓN <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border-l-4 border-secondary flex items-start gap-4">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-lg">data_thresholding</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold">Baja Cobertura PyME</h3>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase">Ayer</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-snug">
                    La rama PyME en NOA presenta un déficit del 12% vs objetivo Q3.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border-l-4 border-amber-500 flex items-start gap-4">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-amber-500 text-lg">priority_high</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold">Actualización Pendiente</h3>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase">Hoy</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-snug">
                    5 referentes de Córdoba no han actualizado su perfil trimestral.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-card-dark/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 flex justify-around items-center h-20 px-6 z-50">
          <Link className="flex flex-col items-center gap-1 text-primary" href="/dashboard/national">
            <span className="material-symbols-outlined font-bold">grid_view</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/map">
            <span className="material-symbols-outlined">map</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Mapa</span>
          </Link>
          <div className="relative -top-6">
            <Link className="bg-primary size-14 rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-white" href="/new-task">
              <span className="material-symbols-outlined text-3xl">add</span>
            </Link>
          </div>
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/reports">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Reportes</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Más</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
