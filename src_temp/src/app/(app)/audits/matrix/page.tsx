"use client";

import Link from "next/link";

export default function AuditsMatrixPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-[#f8f6f8] min-h-screen">
      <div className="h-12 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 flex items-end px-6 pb-2">
        <div className="flex justify-between w-full items-center">
          <span className="text-sm font-bold">9:41</span>
          <div className="flex gap-1.5 items-center">
            <span className="material-symbols-outlined text-[18px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[18px]">wifi</span>
            <span className="material-symbols-outlined text-[18px]">battery_full</span>
          </div>
        </div>
      </div>
      <header className="bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-12 z-40 border-b border-gray-100 dark:border-white/10">
        <div className="px-4 py-3 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">shield_person</span>
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight">Matriz de Auditoría</h1>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Módulo D3 • Trazabilidad Total</p>
              </div>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary text-white px-4 shadow-sm shadow-primary/20">
              <span className="text-xs font-bold tracking-wide">Actor</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4">
              <span className="text-xs font-semibold">Acción</span>
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4">
              <span className="text-xs font-semibold">Territorio</span>
              <span className="material-symbols-outlined text-[18px]">location_on</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4">
              <span className="text-xs font-semibold">Fecha</span>
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </button>
          </div>
        </div>
      </header>
      <main className="p-4 flex flex-col gap-4 pb-24">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Eventos de Gobernanza</h2>
          <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">LIVE</span>
        </div>
        <div className="bg-white dark:bg-white/5 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600">
                <span className="material-symbols-outlined text-[28px]">no_accounts</span>
              </div>
              <div>
                <h3 className="font-bold text-base">Carlos Mendoza</h3>
                <p className="text-xs text-gray-500 font-medium">Supervisora Regional • Rama Adultos</p>
              </div>
            </div>
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[10px] font-black px-2 py-1 rounded">
              CRÍTICO
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm leading-relaxed">
              Acceso <span className="text-primary font-extrabold">REVOCADO</span> a Referente en{" "}
              <span className="font-bold border-b-2 border-primary/20">Quilmes, Buenos Aires</span>.
            </p>
            <p className="text-[11px] text-gray-400 italic">Motivo: Incumplimiento de protocolo de seguridad territorial.</p>
          </div>
          <div className="pt-3 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">ID SESIÓN: 9823-XQ</span>
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">12 Oct 2023 - 14:22:05</span>
            </div>
            <Link className="flex items-center gap-1 text-primary font-bold text-xs bg-primary/5 px-3 py-1.5 rounded-lg" href="/alerts/revoke/confirmation">
              Detalles <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </Link>
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">manage_accounts</span>
              </div>
              <div>
                <h3 className="font-bold text-base">Elena Ruiz</h3>
                <p className="text-xs text-gray-500 font-medium">Admin Central • Operaciones</p>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-black px-2 py-1 rounded">
              ESTRUCTURA
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm leading-relaxed">
              Cambio de Rol: <span className="font-bold">Referente</span> a{" "}
              <span className="text-primary font-extrabold uppercase tracking-tight">Coordinador</span> en{" "}
              <span className="font-bold border-b-2 border-primary/20">La Plata</span>.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">ID SESIÓN: 9810-AB</span>
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">12 Oct 2023 - 13:45:10</span>
            </div>
            <Link className="flex items-center gap-1 text-primary font-bold text-xs bg-primary/5 px-3 py-1.5 rounded-lg" href="/audits/recovery">
              Detalles <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Mapa minimalista de Buenos Aires con puntos marcados"
            data-location="Quilmes, Argentina"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHQ4ZfjLo3jvRdQcfhmUf-4Tg8IuR-NYbOhXi2hYqDqVjV0R6UQ1IQcfP3jwOODzhhhoPQirT5D3zci4BYl5XJ9jVtRuFjPYLFADOTkNDmjSo73DKEfIBK9QL0R6XPcZeMUp2Ha8vDZjrMZzcxGIvpUCn4bGxH4aBDBmFXpI8Pr9-srKWlcxtR_hTY4lhdDQtCueLdFScukK0g5ppPwPeUnBH3JzRK9CTEvNR2w66DgAKS6k-hCr3uxf7-awlPzfN-hclfLcr_PXY')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-4">
            <p className="text-white text-[10px] font-bold uppercase tracking-widest">Actividad Territorial Reciente</p>
            <p className="text-white text-sm font-bold">Foco: Conurbano Sur</p>
          </div>
          <div className="absolute top-3 right-3 flex gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-primary"></span>
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined text-[28px]">person_add</span>
              </div>
              <div>
                <h3 className="font-bold text-base">Roberto Gómez</h3>
                <p className="text-xs text-gray-500 font-medium">Logística • Rama Sanidad</p>
              </div>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-black px-2 py-1 rounded">
              NUEVO
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm leading-relaxed">
              Alta de <span className="text-primary font-extrabold tracking-tight">Identidad Territorial</span> vínculo verificado en{" "}
              <span className="font-bold border-b-2 border-primary/20">Avellaneda</span>.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">ID SESIÓN: 9755-LL</span>
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">12 Oct 2023 - 11:20:00</span>
            </div>
            <Link className="flex items-center gap-1 text-primary font-bold text-xs bg-primary/5 px-3 py-1.5 rounded-lg" href="/team/invite">
              Detalles <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </Link>
          </div>
        </div>
        <div className="py-8 flex flex-col items-center justify-center text-gray-400 opacity-50">
          <span className="material-symbols-outlined text-[48px] mb-2">history</span>
          <p className="text-xs font-medium">Fin del historial de hoy</p>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 flex justify-around items-center px-6 pb-4 z-50">
        <Link className="flex flex-col items-center gap-1 text-primary" href="/audits/matrix">
          <span className="material-symbols-outlined text-[26px] font-variation-fill">dashboard</span>
          <span className="text-[10px] font-bold">Matriz</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-gray-400" href="/alerts">
          <span className="material-symbols-outlined text-[26px]">notifications</span>
          <span className="text-[10px] font-bold">Alertas</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-gray-400" href="/territory">
          <span className="material-symbols-outlined text-[26px]">groups</span>
          <span className="text-[10px] font-bold">Territorio</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-gray-400" href="/settings">
          <span className="material-symbols-outlined text-[26px]">settings</span>
          <span className="text-[10px] font-bold">Ajustes</span>
        </Link>
      </nav>
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 dark:bg-white/20 rounded-full z-[60]"></div>
    </div>
  );
}

