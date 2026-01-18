"use client";

import Link from "next/link";

export default function WikiPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center px-4 h-16 justify-between">
          <div className="flex items-center gap-3">
            <Link className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/settings/support">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight">Wiki de Ayuda</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">En línea</span>
          </div>
        </div>
      </header>
      <main className="pb-24">
        <section className="px-4 pt-6 pb-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1">Centro de Conocimiento</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Encuentra guías y documentación técnica para La Púrpura Territorio.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-primary">search</span>
            </div>
            <input
              className="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-900 border-none rounded-xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-primary text-base placeholder:text-slate-400"
              placeholder="Buscar tutoriales o artículos..."
              type="text"
            />
          </div>
        </section>
        <section className="px-4 py-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 px-1">
            Categorías Principales
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-start gap-4">
              <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">rocket_launch</span>
              </div>
              <span className="font-bold text-sm leading-tight">Primeros Pasos</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-start gap-4">
              <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">cloud_sync</span>
              </div>
              <span className="font-bold text-sm leading-tight">Sincronización Offline</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-start gap-4">
              <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">map</span>
              </div>
              <span className="font-bold text-sm leading-tight">Gestión de Relevamientos</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-start gap-4">
              <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
              </div>
              <span className="font-bold text-sm leading-tight">Seguridad y Roles</span>
            </div>
          </div>
        </section>
        <section className="px-4 py-4">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Artículos Destacados</h3>
            <button className="text-xs font-bold text-primary hover:underline">Ver todos</button>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4 active:scale-[0.98] transition-transform">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wide">Técnica</span>
                  <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span> 5 min
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100">Guía de Resolución de Conflictos de Datos</h4>
              </div>
              <span className="material-symbols-outlined text-slate-300">chevron_right</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4 active:scale-[0.98] transition-transform">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wide">Logística</span>
                  <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span> 3 min
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100">Optimización de Rutas en Territorio</h4>
              </div>
              <span className="material-symbols-outlined text-slate-300">chevron_right</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4 active:scale-[0.98] transition-transform">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wide">Ventas</span>
                  <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span> 8 min
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100">Protocolo de Cierre de Relevamiento Mensual</h4>
              </div>
              <span className="material-symbols-outlined text-slate-300">chevron_right</span>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-24 right-4 z-50">
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-95 transition-all">
          <span className="material-symbols-outlined">headset_mic</span>
          <span className="font-bold text-sm">Soporte en Vivo</span>
        </button>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between z-50">
        <Link className="flex flex-col items-center gap-1" href="/home">
          <span className="material-symbols-outlined text-slate-400">home</span>
          <span className="text-[10px] font-medium text-slate-400">Inicio</span>
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/map">
          <span className="material-symbols-outlined text-slate-400">explore</span>
          <span className="text-[10px] font-medium text-slate-400">Territorio</span>
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/wiki">
          <span className="material-symbols-outlined text-primary">menu_book</span>
          <span className="text-[10px] font-bold text-primary">Wiki</span>
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/alerts">
          <span className="material-symbols-outlined text-slate-400">notifications</span>
          <span className="text-[10px] font-medium text-slate-400">Alertas</span>
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/profile">
          <span className="material-symbols-outlined text-slate-400">account_circle</span>
          <span className="text-[10px] font-medium text-slate-400">Perfil</span>
        </Link>
      </nav>
    </div>
  );
}
