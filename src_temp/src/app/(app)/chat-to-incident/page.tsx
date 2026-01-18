"use client";

import Link from "next/link";

export default function ChatToIncidentPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-gray-100 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 ios-blur border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 h-16">
          <Link
            href="/chat"
            className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight">Convertir en Incidencia</h1>
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#85667f]">info</span>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto custom-scrollbar pb-32">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="material-symbols-outlined text-sm text-primary">chat_bubble</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#85667f] dark:text-gray-400">Mensaje Original</span>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">MA</div>
                <div>
                  <p className="text-sm font-bold leading-none">Miguel Á. Torres</p>
                  <p className="text-[10px] text-[#85667f] mt-1">Hoy, 10:42 AM</p>
                </div>
              </div>
              <blockquote className="text-[#171216] dark:text-gray-200 text-base leading-relaxed italic border-l-4 border-primary/30 pl-4 py-1">
                "Se ha detectado una filtración de agua en el sector norte de la plaza central. El pavimento está empezando a ceder."
              </blockquote>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#171216] dark:text-gray-200 px-1">Categoría</label>
              <div className="relative">
                <select className="appearance-none w-full h-14 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                  <option>Infraestructura Urbana</option>
                  <option>Suministros (Agua/Luz)</option>
                  <option>Seguridad Ciudadana</option>
                  <option>Medio Ambiente</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  unfold_more
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <label className="text-sm font-bold block mb-4">Severidad del Daño (1-5)</label>
                <div className="flex justify-between items-center gap-2">
                  <button className="flex-1 h-12 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold hover:bg-gray-50">
                    1
                  </button>
                  <button className="flex-1 h-12 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold hover:bg-gray-50">
                    2
                  </button>
                  <button className="flex-1 h-12 rounded-lg border border-primary bg-primary/5 text-primary flex items-center justify-center font-bold">
                    3
                  </button>
                  <button className="flex-1 h-12 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold hover:bg-gray-50">
                    4
                  </button>
                  <button className="flex-1 h-12 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold hover:bg-gray-50">
                    5
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <label className="text-sm font-bold block mb-4">Urgencia de Respuesta (1-5)</label>
                <div className="flex justify-between items-center gap-2">
                  <button className="flex-1 h-12 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold">
                    1
                  </button>
                  <button className="flex-1 h-12 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold">
                    2
                  </button>
                  <button className="flex-1 h-12 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold">
                    3
                  </button>
                  <button className="flex-1 h-12 rounded-lg border-2 border-primary bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">
                    4
                  </button>
                  <button className="flex-1 h-12 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold">
                    5
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#171216] dark:text-gray-200 px-1">Territorio (Detectado)</label>
              <div className="flex items-center gap-3 w-full h-14 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <input className="flex-1 bg-transparent border-none focus:ring-0 text-base" type="text" value="Plaza Central - Sector Norte" readOnly />
                <span className="material-symbols-outlined text-gray-400 text-sm">edit</span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-primary/5 dark:bg-primary/10 p-5 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">account_tree</span>
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight">Vincular a Proyecto</p>
                  <p className="text-xs text-[#85667f] dark:text-gray-400 mt-0.5">Asignar a 'Mantenimiento 2024'</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input checked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="px-4 pb-4 pt-2 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark to-transparent">
          <Link
            href="/incidents/new"
            className="w-full bg-[#851c74] hover:bg-[#6b165e] text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-primary/30 active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined">assignment_turned_in</span>
            Crear Incidencia formal
          </Link>
        </div>
        <nav className="bg-white/95 dark:bg-background-dark/95 ios-blur border-t border-gray-200 dark:border-gray-800 pb-8 pt-3 px-6">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <Link className="flex flex-col items-center gap-1 text-[#85667f] dark:text-gray-500" href="/home">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium">Inicio</span>
            </Link>
            <Link className="flex flex-col items-center gap-1 text-primary" href="/chat">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                chat
              </span>
              <span className="text-[10px] font-bold">Chat</span>
            </Link>
            <Link className="flex flex-col items-center gap-1 text-[#85667f] dark:text-gray-500" href="/map">
              <span className="material-symbols-outlined">map</span>
              <span className="text-[10px] font-medium">Mapa</span>
            </Link>
            <Link className="flex flex-col items-center gap-1 text-[#85667f] dark:text-gray-500" href="/profile">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-medium">Perfil</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
