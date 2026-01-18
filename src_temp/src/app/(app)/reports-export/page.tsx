"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { appStore } from "@/lib/store";

export default function ReportsExportPage() {
  const router = useRouter();

  const handleGenerate = () => {
    const payload = {
      title: "Dossier Territorial",
      status: "pending" as const,
      territory: "Reporte Ejecutivo",
      author: "Admin Central",
    };
    appStore.addReport(payload);
    void fetch("/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => null);
    router.push("/reports");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white transition-colors duration-300">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden border-x border-gray-100 dark:border-gray-800">
        <div className="flex items-center bg-white dark:bg-[#2d1a2a] p-4 pb-2 justify-between sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
          <Link href="/reports" className="text-[#171216] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Generar Reporte Ejecutivo
          </h2>
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">info</span>
          </div>
        </div>
        <div className="p-4 space-y-6">
          <div className="space-y-1">
            <h3 className="text-[#171216] dark:text-white tracking-light text-2xl font-bold leading-tight">Configuracion</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Seleccione los parametros para el reporte institucional.</p>
          </div>
          <div className="bg-white dark:bg-[#2d1a2a] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-50 dark:border-gray-800">
              <label className="flex flex-col w-full">
                <p className="text-[#171216] dark:text-white text-sm font-semibold leading-normal pb-2">Tipo de Reporte</p>
                <div className="relative">
                  <select className="form-input flex w-full rounded-lg text-[#171216] dark:text-white focus:outline-0 focus:ring-0 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#3d2a3a] h-12 px-4 appearance-none text-base font-normal leading-normal">
                    <option value="mensual">Mensual por Provincia</option>
                    <option value="dossier" selected>
                      Dossier Territorial
                    </option>
                    <option value="resumen">Resumen por Rama</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </div>
                </div>
              </label>
            </div>
            <div className="p-4 border-b border-gray-50 dark:border-gray-800">
              <p className="text-[#171216] dark:text-white text-sm font-semibold leading-normal pb-2">Rango de Fechas</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 flex items-center gap-2 p-3 bg-gray-50 dark:bg-[#3d2a3a] rounded-lg border border-gray-100 dark:border-gray-700">
                  <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                  <span className="text-sm">01 Oct 2023</span>
                </div>
                <span className="text-gray-400">/</span>
                <div className="flex-1 flex items-center gap-2 p-3 bg-gray-50 dark:bg-[#3d2a3a] rounded-lg border border-gray-100 dark:border-gray-700">
                  <span className="material-symbols-outlined text-primary text-sm">event</span>
                  <span className="text-sm">30 Oct 2023</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-[#3d2a3a] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                  <p className="text-xs font-bold uppercase tracking-wider">Octubre 2023</p>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </div>
                <div className="grid grid-cols-7 text-[10px] text-center font-bold text-gray-400 mb-1">
                  <div>L</div>
                  <div>M</div>
                  <div>M</div>
                  <div>J</div>
                  <div>V</div>
                  <div>S</div>
                  <div>D</div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full text-gray-300">25</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full text-gray-300">26</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full text-gray-300">27</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full text-gray-300">28</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full text-gray-300">29</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full text-gray-300">30</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full bg-primary text-white">1</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full bg-primary/20 text-primary">2</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full bg-primary/20 text-primary">3</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full bg-primary/20 text-primary">4</div>
                  <div className="h-6 flex items-center justify-center text-[10px] rounded-full bg-primary text-white">5</div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-[#171216] dark:text-white text-sm font-semibold leading-normal pb-2">Formato de Salida</p>
              <div className="flex h-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-[#3d2a3a] p-1">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-primary has-[:checked]:shadow-sm text-gray-500 dark:text-gray-400 has-[:checked]:text-primary dark:has-[:checked]:text-white text-sm font-bold transition-all">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">picture_as_pdf</span> PDF
                  </span>
                  <input checked className="hidden" name="format" type="radio" value="PDF" />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-primary has-[:checked]:shadow-sm text-gray-500 dark:text-gray-400 has-[:checked]:text-primary dark:has-[:checked]:text-white text-sm font-bold transition-all">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">table_chart</span> Excel
                  </span>
                  <input className="hidden" name="format" type="radio" value="Excel" />
                </label>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Vista Previa</h4>
              <span className="text-primary text-xs font-bold cursor-pointer">Ampliar diseno</span>
            </div>
            <div className="relative bg-white dark:bg-[#2d1a2a] p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center">
              <div className="w-48 aspect-[3/4] bg-gray-50 dark:bg-[#1a0f19] rounded shadow-lg border border-gray-100 dark:border-gray-800 p-4 flex flex-col gap-2 relative overflow-hidden">
                <div className="h-4 w-12 bg-primary/20 rounded-sm mb-2"></div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-2 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="mt-4 flex gap-2">
                  <div className="h-16 w-1/2 bg-primary/5 rounded border border-primary/10 flex flex-col p-1 gap-1">
                    <div className="h-full w-full bg-gradient-to-t from-primary/30 to-transparent rounded-t-sm"></div>
                  </div>
                  <div className="h-16 w-1/2 bg-gray-100 dark:bg-gray-800 rounded flex flex-col justify-end p-1">
                    <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                  </div>
                </div>
                <div className="mt-auto flex justify-between items-end">
                  <div className="h-4 w-4 bg-primary rounded-full"></div>
                  <div className="h-2 w-10 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none"></div>
              </div>
              <p className="mt-4 text-[10px] text-gray-400 text-center italic">Diseno institucional estandarizado - Rev. 2024</p>
            </div>
          </div>
          <button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
            onClick={handleGenerate}
          >
            <span className="material-symbols-outlined">download</span>
            Generar y Descargar
          </button>
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-400">history</span>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Trazabilidad de Reportes</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-[#2d1a2a] p-3 rounded-lg border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold">Dossier Territorial</p>
                    <span className="text-[10px] text-gray-400">12 Oct 2023</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Generado por Juan Perez</p>
                </div>
                <span className="material-symbols-outlined text-gray-300">more_vert</span>
              </div>
              <div className="bg-white dark:bg-[#2d1a2a] p-3 rounded-lg border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">table_view</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold">Mensual Provincia (XLS)</p>
                    <span className="text-[10px] text-gray-400">10 Oct 2023</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Generado por Maria G.</p>
                </div>
                <span className="material-symbols-outlined text-gray-300">more_vert</span>
              </div>
              <div className="bg-white dark:bg-[#2d1a2a] p-3 rounded-lg border border-gray-100 dark:border-gray-800 flex items-center gap-3 opacity-60">
                <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                  <span className="material-symbols-outlined">picture_as_pdf</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold">Resumen por Rama</p>
                    <span className="text-[10px] text-gray-400">08 Oct 2023</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Generado por Juan Perez</p>
                </div>
                <span className="material-symbols-outlined text-gray-300">more_vert</span>
              </div>
            </div>
          </div>
          <div className="h-10"></div>
        </div>
        <div className="mt-auto bg-white/80 dark:bg-[#2d1a2a]/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 flex justify-around p-3 sticky bottom-0">
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/home">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px]">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-primary" href="/reports">
            <span className="material-symbols-outlined">description</span>
            <span className="text-[10px] font-bold">Reportes</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/map">
            <span className="material-symbols-outlined">map</span>
            <span className="text-[10px]">Mapa</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px]">Ajustes</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
