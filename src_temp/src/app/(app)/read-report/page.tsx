"use client";

import Link from "next/link";

export default function ReadReportPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#171216] dark:text-white">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/reports" className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined text-[#171216] dark:text-white">arrow_back_ios_new</span>
            </Link>
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight">Reporte de Lectura</h2>
          </div>
          <div className="flex gap-1">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#171216] dark:text-white">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#171216] dark:text-white">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
      </div>
      <main className="max-w-md mx-auto pb-32">
        <div className="p-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover"
              data-alt="Digital professional document and security shield graphic"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDo2_YGr_zDsxSypfZZ1VPeIm_XXBQnf2NzXcjd5Bpo4b1HQs3Pea4lKXvsZLTMnZzMlGSH238BDW2yGLXsOp-FJ-ifLALksVaJG0fAvr-mxsp115h43CsyuelUMvGLJegAFw7X7SstZ-EemPknS-g8ba_0UzabtllDsGVLFb5O7fUB0rxgtYbu7j7OVYDh0UVVuTWQBBA2G85yMqB1Gjvx49tPc20E_JMRW01Vx-bOkkzHmvBtQZ1d5RsBtaxzPQQBn4D65F_XLaI')",
              }}
            ></div>
            <div className="flex w-full flex-col p-4 gap-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Módulo A1
                </span>
                <p className="text-[#85667f] dark:text-gray-400 text-xs font-normal">Comunicación Institucional</p>
              </div>
              <p className="text-[#171216] dark:text-white text-xl font-extrabold leading-tight tracking-tight">
                Actualización de Protocolos de Seguridad
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="material-symbols-outlined text-sm text-[#85667f]">calendar_today</span>
                <p className="text-[#85667f] dark:text-gray-400 text-xs font-normal leading-normal">Publicado el 24 de Octubre, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pt-2">
          <h3 className="text-[#171216] dark:text-white text-base font-bold leading-tight">Progreso de Lectura</h3>
        </div>
        <div className="p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 flex items-center justify-around shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col items-center gap-3">
              <div className="relative flex items-center justify-center">
                <svg className="ring-chart w-24 h-24">
                  <circle
                    className="text-gray-100 dark:text-gray-800"
                    cx="48"
                    cy="48"
                    fill="transparent"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                  ></circle>
                  <circle
                    className="text-emerald-500"
                    cx="48"
                    cy="48"
                    fill="transparent"
                    r="40"
                    stroke="currentColor"
                    strokeDasharray="251.2"
                    strokeDashoffset="37.68"
                    strokeLinecap="round"
                    strokeWidth="8"
                  ></circle>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-xl font-extrabold text-[#171216] dark:text-white">85%</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[13px] font-bold text-emerald-600 dark:text-emerald-400">Leído</p>
                <p className="text-[11px] text-[#85667f] dark:text-gray-400">425 Usuarios</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative flex items-center justify-center">
                <svg className="ring-chart w-24 h-24">
                  <circle
                    className="text-gray-100 dark:text-gray-800"
                    cx="48"
                    cy="48"
                    fill="transparent"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                  ></circle>
                  <circle
                    className="text-rose-500"
                    cx="48"
                    cy="48"
                    fill="transparent"
                    r="40"
                    stroke="currentColor"
                    strokeDasharray="251.2"
                    strokeDashoffset="213.52"
                    strokeLinecap="round"
                    strokeWidth="8"
                  ></circle>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-xl font-extrabold text-[#171216] dark:text-white">15%</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[13px] font-bold text-rose-600 dark:text-rose-400">Pendiente</p>
                <p className="text-[11px] text-[#85667f] dark:text-gray-400">75 Usuarios</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pt-4 flex items-center justify-between">
          <h3 className="text-[#171216] dark:text-white text-base font-bold leading-tight">Filtros de Auditoría</h3>
          <button className="text-primary text-xs font-bold">Limpiar</button>
        </div>
        <div className="flex overflow-x-auto gap-2 px-4 py-3 no-scrollbar">
          <button className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-base">account_tree</span>
            Rama: Todas
          </button>
          <button className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-gray-900 text-[#171216] dark:text-white border border-gray-100 dark:border-gray-800 rounded-full text-sm font-medium">
            <span className="material-symbols-outlined text-base">map</span>
            Territorio
          </button>
          <button className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-gray-900 text-[#171216] dark:text-white border border-gray-100 dark:border-gray-800 rounded-full text-sm font-medium">
            <span className="material-symbols-outlined text-base">group</span>
            Equipo
          </button>
        </div>
        <div className="px-4 pt-4">
          <div className="flex border-b border-gray-100 dark:border-gray-800 mb-4">
            <button className="flex-1 py-2 text-sm font-bold border-b-2 border-primary text-primary">Leído (425)</button>
            <button className="flex-1 py-2 text-sm font-bold text-[#85667f] dark:text-gray-400">Pendiente (75)</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171216] dark:text-white">Juan Pérez</p>
                  <p className="text-[11px] text-[#85667f] dark:text-gray-400">Coordinador Territorial • Zona A</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-emerald-600">Leído</p>
                <p className="text-[10px] text-[#85667f] dark:text-gray-400">Hoy, 10:45 AM</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171216] dark:text-white">Ana Martínez</p>
                  <p className="text-[11px] text-[#85667f] dark:text-gray-400">Responsable Rama Jóvenes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-emerald-600">Leído</p>
                <p className="text-[10px] text-[#85667f] dark:text-gray-400">Ayer, 08:30 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border-l-4 border-l-rose-500 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600">
                  <span className="material-symbols-outlined">person_off</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171216] dark:text-white">Carlos Ruiz</p>
                  <p className="text-[11px] text-[#85667f] dark:text-gray-400">Voluntario • Zona C</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-rose-600 uppercase">Pendiente</p>
                <p className="text-[10px] text-[#85667f] dark:text-gray-400">Sin lectura</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/95 dark:via-background-dark/95 to-transparent">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-[#851c74] hover:bg-[#6d175f] text-white font-extrabold py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined">send_time_extension</span>
            Reenviar Notificación a Pendientes
          </button>
          <div className="h-4"></div>
        </div>
      </div>
      <div className="h-6 bg-transparent"></div>
    </div>
  );
}
