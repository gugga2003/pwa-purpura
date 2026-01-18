"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAppStore } from "@/lib/store";

const statusConfig = {
  resolved: {
    label: "Resuelto",
    icon: "check_circle",
    badge: "bg-success/10 text-success",
    iconWrap: "bg-success/10 text-success",
  },
  pending: {
    label: "Pendiente",
    icon: "pending_actions",
    badge: "bg-warning/10 text-warning",
    iconWrap: "bg-warning/10 text-warning",
  },
  critical: {
    label: "Critico",
    icon: "warning",
    badge: "bg-danger/10 text-danger",
    iconWrap: "bg-danger/10 text-danger",
  },
} as const;

export default function ReportsPage() {
  const router = useRouter();
  const reports = useAppStore((state) => state.reports);
  const total = reports.length || 1;
  const resolvedCount = reports.filter((report) => report.status === "resolved").length;
  const pendingCount = reports.filter((report) => report.status === "pending").length;
  const criticalCount = reports.filter((report) => report.status === "critical").length;
  const resolvedPercent = Math.round((resolvedCount / total) * 100);
  const pendingPercent = Math.round((pendingCount / total) * 100);
  const criticalPercent = Math.max(0, 100 - resolvedPercent - pendingPercent);

  return (
    <div className="bg-[#f7f7f7] dark:bg-[#1f1f1f] font-manrope text-[#171216] dark:text-gray-100 flex flex-col min-h-screen overflow-x-hidden selection:bg-[#871d75]/20">
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#1f1f1f]/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="flex items-center justify-between px-4 h-[60px]">
          <Link
            href="/home"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 active:scale-95 transition-all text-[#171216] dark:text-white"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <h1 className="text-base font-bold text-[#171216] dark:text-white tracking-tight">Reportes y Auditoria</h1>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#871d75]/5 hover:bg-[#871d75]/10 text-[#871d75] active:scale-95 transition-all relative"
            aria-label="Filtros"
          >
            <span className="material-symbols-outlined text-[22px]">filter_list</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#871d75] rounded-full ring-2 ring-white dark:ring-[#1f1f1f]"></span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-md mx-auto p-4 gap-6 pb-28">
        <div className="flex justify-center -mt-2">
          <button className="group flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-[#2a2a2a] rounded-full shadow-sm border border-gray-100 dark:border-gray-800 hover:border-[#871d75]/30 transition-all">
            <span className="material-symbols-outlined text-gray-400 text-[18px] group-hover:text-[#871d75] transition-colors">
              calendar_month
            </span>
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Noviembre 2024</span>
            <span className="material-symbols-outlined text-gray-400 text-[16px]">expand_more</span>
          </button>
        </div>

        <section className="bg-white dark:bg-[#2a2a2a] rounded-3xl p-6 shadow-soft dark:shadow-none border border-white dark:border-gray-800 relative overflow-hidden group/chart">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#871d75]/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <h2 className="text-lg font-bold text-[#171216] dark:text-white leading-tight">
                Estado de
                <br />
                Incidencias
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">Ultimos 30 dias</p>
            </div>
            <div className="flex bg-[#f4f1f3] dark:bg-gray-800 p-1 rounded-xl">
              <button className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#2a2a2a] shadow-sm text-[11px] font-bold text-[#871d75] transition-all">
                Estado
              </button>
              <button className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 transition-all">
                Zona
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6">
            <div className="relative w-36 h-36 shrink-0 group-hover/chart:scale-105 transition-transform duration-500 ease-out">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-[#f4f1f3] dark:text-gray-700"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                ></path>
                <path
                  className="text-success drop-shadow-sm"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={`${resolvedPercent}, 100`}
                  strokeLinecap="round"
                  strokeWidth="2.5"
                ></path>
                <path
                  className="text-warning drop-shadow-sm"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={`${pendingPercent}, 100`}
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  style={{ transform: "rotate(216deg)", transformOrigin: "50% 50%" }}
                ></path>
                <path
                  className="text-danger drop-shadow-sm"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={`${criticalPercent}, 100`}
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  style={{ transform: "rotate(306deg)", transformOrigin: "50% 50%" }}
                ></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center transform rotate-90">
                <span className="text-3xl font-extrabold text-[#171216] dark:text-white tracking-tighter">
                  {reports.length}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-success ring-2 ring-success/20 group-hover:ring-success/40 transition-all"></span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Resuelto</span>
                </div>
                <span className="text-xs font-bold text-[#171216] dark:text-white">{resolvedPercent}%</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-warning ring-2 ring-warning/20 group-hover:ring-warning/40 transition-all"></span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Pendiente</span>
                </div>
                <span className="text-xs font-bold text-[#171216] dark:text-white">{pendingPercent}%</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-danger ring-2 ring-danger/20 group-hover:ring-danger/40 transition-all"></span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Critico</span>
                </div>
                <span className="text-xs font-bold text-[#171216] dark:text-white">{criticalPercent}%</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-50 dark:border-gray-800 flex items-start gap-2">
            <span className="material-symbols-outlined text-[#871d75] text-[18px]">auto_awesome</span>
            <p className="text-xs text-gray-500 leading-relaxed">
              La eficiencia de resolucion mejoro un <span className="font-bold text-success">+12%</span> comparado
              con el mes anterior.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <Link
            href="/reports-export"
            className="relative overflow-hidden flex flex-col items-start justify-between h-24 p-4 bg-white dark:bg-[#2a2a2a] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-[#871d75]/30 transition-all group"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-[#871d75] rotate-12">picture_as_pdf</span>
            </div>
            <div className="p-2 bg-[#f4f1f3] dark:bg-gray-800 rounded-lg text-[#871d75] mb-2">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </div>
            <div>
              <span className="block text-sm font-bold text-[#171216] dark:text-white">Exportar PDF</span>
              <span className="text-[10px] text-gray-400 font-medium">Reporte General</span>
            </div>
          </Link>
          <Link
            href="/reports-export"
            className="relative overflow-hidden flex flex-col items-start justify-between h-24 p-4 bg-white dark:bg-[#2a2a2a] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-[#871d75]/30 transition-all group"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-green-600 rotate-12">table_view</span>
            </div>
            <div className="p-2 bg-[#f4f1f3] dark:bg-gray-800 rounded-lg text-[#171216] dark:text-gray-300 mb-2">
              <span className="material-symbols-outlined text-[20px]">grid_on</span>
            </div>
            <div>
              <span className="block text-sm font-bold text-[#171216] dark:text-white">Excel / CSV</span>
              <span className="text-[10px] text-gray-400 font-medium">Datos Crudos</span>
            </div>
          </Link>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-base font-bold text-[#171216] dark:text-white">Reportes Recientes</h3>
            <button className="text-xs font-bold text-[#871d75] hover:text-[#5e1452] transition-colors px-2 py-1 rounded-md hover:bg-[#871d75]/5">
              Ver todo
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {reports.map((report) => {
              const config = statusConfig[report.status];
              return (
                <article
                  key={report.id}
                  className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.99] transition-transform cursor-pointer"
                  onClick={() => router.push(`/reports/${report.id}`)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-md bg-[#f4f1f3] dark:bg-gray-800 text-[10px] font-bold text-gray-600 dark:text-gray-300 tracking-wide font-mono">
                        {report.id}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-xs text-gray-500">
                        {new Date(report.createdAt).toLocaleDateString("es-AR")}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-[18px]">more_horiz</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${config.iconWrap} flex items-center justify-center shrink-0`}>
                      <span className="material-symbols-outlined">{config.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#171216] dark:text-white truncate">{report.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                        {report.territory}
                      </p>
                    </div>
                    <div className="shrink-0 self-center">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-lg ${config.badge} text-[10px] font-bold uppercase`}
                      >
                        {config.label}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
            {!reports.length && (
              <div className="text-center text-sm text-gray-400 py-10">No hay reportes disponibles.</div>
            )}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 w-full bg-white dark:bg-[#1f1f1f] border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-2 flex justify-around items-end z-50">
        <Link className="flex flex-col items-center gap-1 p-2 w-16 group" href="/home">
          <span className="material-symbols-outlined text-2xl text-gray-400 group-hover:text-[#871d75] dark:group-hover:text-white transition-colors">
            grid_view
          </span>
          <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#871d75] dark:group-hover:text-white transition-colors">
            Inicio
          </span>
        </Link>
        <Link className="flex flex-col items-center gap-1 p-2 w-16 group" href="/map">
          <span className="material-symbols-outlined text-2xl text-gray-400 group-hover:text-[#871d75] dark:group-hover:text-white transition-colors">
            map
          </span>
          <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#871d75] dark:group-hover:text-white transition-colors">
            Mapa
          </span>
        </Link>
        <Link className="flex flex-col items-center gap-1 p-2 w-16 relative" href="/reports">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#871d75] rounded-b-lg shadow-[0_0_10px_rgba(135,29,117,0.5)]"></div>
          <span className="material-symbols-outlined text-2xl text-[#871d75] font-bold fill-current">analytics</span>
          <span className="text-[10px] font-bold text-[#871d75]">Reportes</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 p-2 w-16 group" href="/team">
          <span className="material-symbols-outlined text-2xl text-gray-400 group-hover:text-[#871d75] dark:group-hover:text-white transition-colors">
            groups
          </span>
          <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#871d75] dark:group-hover:text-white transition-colors">
            Equipos
          </span>
        </Link>
        <Link className="flex flex-col items-center gap-1 p-2 w-16 group" href="/settings">
          <span className="material-symbols-outlined text-2xl text-gray-400 group-hover:text-[#871d75] dark:group-hover:text-white transition-colors">
            settings
          </span>
          <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#871d75] dark:group-hover:text-white transition-colors">
            Ajustes
          </span>
        </Link>
      </nav>
    </div>
  );
}
