"use client";

import Link from "next/link";

export default function MaintenancePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 text-[#171216] dark:text-[#f4f1f3]">
      <div className="w-full max-w-md bg-white dark:bg-[#2d1b29] rounded-xl shadow-xl shadow-primary/5 overflow-hidden border border-primary/10">
        <div className="relative w-full h-48 bg-primary/5 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>
                build_circle
              </span>
            </div>
            <div className="absolute top-4 right-8 w-12 h-12 bg-white/80 dark:bg-primary/20 rounded-full flex items-center justify-center blur-sm"></div>
            <div className="absolute bottom-4 left-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center blur-md"></div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-[#171216] dark:text-white text-2xl font-bold leading-tight tracking-tight">Mantenimiento del Sistema</h1>
            <p className="text-[#171216]/70 dark:text-white/60 text-sm font-normal px-4">
              Estamos realizando mejoras en nuestra infraestructura para brindarte un mejor servicio en <b>La Púrpura Territorio</b>.
            </p>
          </div>
          <div className="flex items-center justify-between px-4 py-3 bg-background-light dark:bg-white/5 rounded-lg border border-primary/5">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Inicio</span>
              <span className="text-sm font-semibold">22:00hs</span>
            </div>
            <div className="h-8 w-px bg-primary/20"></div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Fin estimado</span>
              <span className="text-sm font-semibold">02:00hs</span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-center text-[10px] uppercase tracking-widest text-[#171216]/40 dark:text-white/40 font-bold">
              Tiempo restante estimado
            </p>
            <div className="flex gap-3 justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-14 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                  <p className="text-xl font-bold leading-tight tracking-tight">03</p>
                </div>
                <p className="text-[10px] font-medium text-[#171216]/60 dark:text-white/60 uppercase">Horas</p>
              </div>
              <div className="flex items-center pb-6">
                <span className="text-primary font-bold text-xl">:</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <p className="text-xl font-bold leading-tight tracking-tight">45</p>
                </div>
                <p className="text-[10px] font-medium text-[#171216]/60 dark:text-white/60 uppercase">Min</p>
              </div>
              <div className="flex items-center pb-6">
                <span className="text-primary font-bold text-xl">:</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <p className="text-xl font-bold leading-tight tracking-tight">12</p>
                </div>
                <p className="text-[10px] font-medium text-[#171216]/60 dark:text-white/60 uppercase">Seg</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-primary/5 dark:bg-primary/20 rounded-xl border border-primary/10">
            <div className="text-primary size-10 shrink-0 flex items-center justify-center bg-white dark:bg-[#20121d] rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-2xl">sync_saved_locally</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs leading-relaxed text-[#171216] dark:text-white/90">
                Podrás seguir <span className="font-bold">cargando datos offline</span>, los cuales se sincronizarán al finalizar el
                mantenimiento.
              </p>
            </div>
          </div>
          <Link href="/home" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/25 active:scale-[0.98] text-center">Entendido</Link>
          <div className="flex items-center justify-center gap-2 pt-2 pb-1 opacity-40">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-[10px] font-bold uppercase tracking-tighter">La Púrpura</span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-1 opacity-20">
        <span className="material-symbols-outlined">info</span>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em]">Estado del Servidor</p>
      </div>
    </div>
  );
}


