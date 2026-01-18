"use client";

import Link from "next/link";
import { useState } from "react";

export default function MilestonesPage() {
  const [activeTab, setActiveTab] = useState<"milestones" | "risks">("milestones");

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#171216] dark:text-white">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center p-4 justify-between max-w-md mx-auto">
            <Link
              href="/tasks"
              className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 px-4">Hitos y Riesgos</h2>
            <div className="flex items-center">
              <Link
                href="/new-task"
                className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30"
              >
                <span className="material-symbols-outlined">add</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-md mx-auto pb-10 w-full px-4">
          <div className="px-4 pt-4">
            <div className="flex bg-white dark:bg-[#242428] p-1 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
              <button
                onClick={() => setActiveTab("milestones")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 transition-all ${activeTab === 'milestones' ? 'bg-primary text-white' : 'text-gray-500 dark:text-gray-400'}`}
              >
                <span className="material-symbols-outlined text-[18px]">event_upcoming</span>
                <p className="text-sm font-bold">Hitos</p>
              </button>
              <button
                onClick={() => setActiveTab("risks")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 transition-all ${activeTab === 'risks' ? 'bg-primary text-white' : 'text-gray-500 dark:text-gray-400'}`}
              >
                <span className="material-symbols-outlined text-[18px]">warning</span>
                <p className="text-sm font-bold">Riesgos</p>
              </button>
            </div>
          </div>

          {activeTab === "milestones" && (
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-2">
              <div className="px-4 flex items-center justify-between mb-4">
                <h2 className="text-[#171216] dark:text-white text-xl font-extrabold tracking-tight">Línea de Tiempo</h2>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Módulo B5</span>
              </div>

              <div className="px-4 space-y-0">
                <div className="grid grid-cols-[48px_1fr] gap-x-2">
                  <div className="flex flex-col items-center">
                    <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 border-4 border-white dark:border-background-dark z-10">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    </div>
                    <div className="w-[2px] bg-green-200 dark:bg-green-900 h-full -mt-1"></div>
                  </div>
                  <div className="pb-8 pt-1">
                    <div className="bg-white dark:bg-[#242428] p-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-50 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-[#171216] dark:text-white text-base font-bold">Entrega de Diagnóstico</p>
                        <span className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-[10px] uppercase font-bold px-2 py-1 rounded-md">
                          Completado
                        </span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">15 Oct 2023 • Validado por supervisión</p>
                      <div className="flex items-center gap-3 bg-background-light dark:bg-background-dark/50 p-2 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                        <div className="text-primary bg-white dark:bg-[#242428] p-1.5 rounded shadow-sm">
                          <span className="material-symbols-outlined text-[18px]">description</span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-[#171216] dark:text-gray-200 text-xs font-medium truncate">Informe_Tecnico_V1.pdf</p>
                        </div>
                        <Link className="text-primary text-xs font-bold px-2 py-1" href="/read-report">
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[48px_1fr] gap-x-2">
                  <div className="flex flex-col items-center">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border-4 border-white dark:border-background-dark z-10">
                      <span className="material-symbols-outlined text-[20px]">motion_photos_on</span>
                    </div>
                    <div className="w-[2px] bg-gray-200 dark:bg-gray-800 h-full -mt-1"></div>
                  </div>
                  <div className="pb-8 pt-1">
                    <div className="bg-white dark:bg-[#242428] p-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-primary/20">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-[#171216] dark:text-white text-base font-bold">Desarrollo Operativo</p>
                        <span className="bg-primary text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md">En curso</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Finaliza 20 Nov • Progreso actual 65%</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[48px_1fr] gap-x-2">
                  <div className="flex flex-col items-center">
                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 border-4 border-white dark:border-background-dark z-10">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                    </div>
                  </div>
                  <div className="pb-2 pt-1">
                    <div className="bg-white dark:bg-[#242428] p-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-50 dark:border-gray-800 opacity-60">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-[#171216] dark:text-white text-base font-bold">Cierre de Proyecto</p>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-[10px] uppercase font-bold px-2 py-1 rounded-md">
                          Pendiente
                        </span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Previsto para Dic 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "risks" && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-2">
              <div className="px-4 mb-4">
                <h2 className="text-[#171216] dark:text-white text-xl font-extrabold tracking-tight">Matriz de Riesgos</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Amenazas identificadas y planes de mitigación</p>
              </div>

              <div className="px-4 space-y-4">
                <div className="bg-white dark:bg-[#242428] rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border-l-4 border-red-500">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-[#171216] dark:text-white font-bold text-base leading-tight">Retraso en Suministros</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="flex items-center text-[10px] font-bold text-red-600 uppercase">
                          <span className="material-symbols-outlined text-[14px] mr-1">priority_high</span> Impacto Alto
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase">Probabilidad Media</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
                    <p className="text-[11px] font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-1">Plan de Mitigación</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Búsqueda de proveedores alternativos locales y diversificación de stock crítico en bodega central.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#242428] rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border-l-4 border-orange-400">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-[#171216] dark:text-white font-bold text-base leading-tight">Condiciones Climáticas</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="flex items-center text-[10px] font-bold text-orange-600 uppercase">
                          <span className="material-symbols-outlined text-[14px] mr-1">warning</span> Impacto Medio
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase">Probabilidad Alta</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg">
                    <p className="text-[11px] font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider mb-1">Plan de Mitigación</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Ajuste de calendario operativo según pronósticos estacionales y protocolos de seguridad en terreno.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#242428] rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border-l-4 border-green-500">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-[#171216] dark:text-white font-bold text-base leading-tight">Rotación de Personal</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="flex items-center text-[10px] font-bold text-green-600 uppercase">
                          <span className="material-symbols-outlined text-[14px] mr-1">info</span> Impacto Bajo
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase">Probabilidad Baja</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/10 p-3 rounded-lg">
                    <p className="text-[11px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wider mb-1">Plan de Mitigación</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Manuales de inducción rápida y banco de currículums actualizado para reemplazos inmediatos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 mt-8">
                <Link href="/new-task" className="w-full bg-primary/10 border border-primary/20 text-primary font-bold py-4 rounded-2xl flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">add_alert</span>
                  Añadir Nuevo Riesgo
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
      <div className="h-20 bg-transparent"></div>
    </div>
  );
}

