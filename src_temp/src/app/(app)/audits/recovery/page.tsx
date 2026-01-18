"use client";

import Link from "next/link";

export default function AuditRecoveryPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center px-4 h-16 justify-between">
          <div className="flex items-center gap-3">
            <Link className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/audits">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back_ios_new</span>
            </Link>
            <div>
              <h1 className="text-base font-bold tracking-tight leading-none">Recuperación de Auditoría</h1>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">Módulo D3 • Forense</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">security</span>
          </div>
        </div>
      </header>
      <main className="pb-32 max-w-md mx-auto">
        <section className="px-4 pt-6 pb-4">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-1">Búsqueda por ID</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Ingrese el identificador único (UUID) para recuperar el registro histórico del evento.
            </p>
          </div>
          <div className="space-y-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-primary">fingerprint</span>
              </div>
              <input
                className="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-900 border-none rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-primary text-sm font-mono placeholder:text-slate-400 placeholder:font-sans"
                placeholder="ej. 550e8400-e29b-41d4-a716-446655440000"
                type="text"
                defaultValue="8f4b2e1a-9c3d-4e5f-a1b2-c3d4e5f6g7h8"
              />
            </div>
            <button className="w-full bg-primary text-white h-12 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-xl">search</span>
              Buscar Registro
            </button>
          </div>
        </section>
        <section className="px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-4 px-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Resultado de la búsqueda</span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="p-5 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
              <div className="flex justify-between items-start mb-3">
                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] font-bold rounded-md uppercase tracking-wide">
                  Modificación de Registro
                </span>
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span className="text-[11px] font-bold uppercase">Sincronizado</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="material-symbols-outlined text-slate-400 text-lg translate-y-0.5">calendar_today</span>
                <h3 className="text-lg font-bold">14 Oct 2023, 15:42:08</h3>
              </div>
            </div>
            <div className="p-5 border-b border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Responsable del Evento</p>
                  <p className="font-bold text-slate-800 dark:text-slate-100">Ing. Alejandro Benítez</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="space-y-0.5">
                  <p className="text-[10px] text-slate-400 font-medium">Rol</p>
                  <p className="text-xs font-semibold">Supervisor Regional</p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] text-slate-400 font-medium">Dirección IP</p>
                  <p className="text-xs font-mono">192.168.10.142</p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] text-slate-400 font-medium">Dispositivo</p>
                  <p className="text-xs font-semibold">iPhone 14 Pro Max</p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] text-slate-400 font-medium">Versión App</p>
                  <p className="text-xs font-semibold">v3.4.2-build.89</p>
                </div>
              </div>
            </div>
            <div className="p-5 border-b border-slate-50 dark:border-slate-800">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mb-3">Comparativa de Valores</p>
              <div className="space-y-3">
                <div className="rounded-lg border border-slate-100 dark:border-slate-800 overflow-hidden">
                  <div className="bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Estado del Relevamiento</span>
                    <span className="material-symbols-outlined text-xs text-slate-400">info</span>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded">ANTES</span>
                      <p className="text-xs font-medium italic text-slate-500 line-through">En Proceso de Carga</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-green-100 text-green-700 rounded">AHORA</span>
                      <p className="text-xs font-bold text-slate-800 dark:text-white">Validado por Supervisor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 bg-slate-50/30 dark:bg-slate-800/20">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">ID de Sesión</span>
                  <span className="text-[11px] font-mono text-slate-700 dark:text-slate-300">SES-9923-FF-01</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Rama Ejecutiva</span>
                  <span className="text-[11px] font-semibold text-primary">Logística Central</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Territorio</span>
                  <span className="text-[11px] font-semibold">Zona Norte - Sector 4</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-primary text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.97] transition-transform">
                <span className="material-symbols-outlined text-lg">verified_user</span>
                Descargar Certificado de Auditoría
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] text-slate-400 px-8">
            Este registro está protegido por criptografía de extremo a extremo y es válido para procesos legales de auditoría
            técnica.
          </p>
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between z-50">
        <Link className="flex flex-col items-center gap-1" href="/home">
          <span className="material-symbols-outlined text-slate-400">home</span>
          <span className="text-[10px] font-medium text-slate-400">Inicio</span>
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/territory">
          <span className="material-symbols-outlined text-slate-400">explore</span>
          <span className="text-[10px] font-medium text-slate-400">Territorio</span>
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/audits/traceability">
          <span className="material-symbols-outlined text-primary">history_edu</span>
          <span className="text-[10px] font-bold text-primary">Auditoría</span>
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/reports">
          <span className="material-symbols-outlined text-slate-400">analytics</span>
          <span className="text-[10px] font-medium text-slate-400">Métricas</span>
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/profile">
          <span className="material-symbols-outlined text-slate-400">account_circle</span>
          <span className="text-[10px] font-medium text-slate-400">Perfil</span>
        </Link>
      </nav>
    </div>
  );
}


