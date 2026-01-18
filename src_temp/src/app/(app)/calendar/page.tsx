"use client";

import Link from "next/link";

export default function CalendarPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white min-h-screen">
      <header className="bg-white dark:bg-[#262626] border-b border-[#e4dce3] dark:border-white/10 safe-area-top sticky top-0 z-50">
        <div className="flex items-center p-4 justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#171216] dark:text-white">calendar_month</span>
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Calendario Interno</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
              <span className="material-symbols-outlined text-[#171216] dark:text-white">search</span>
            </button>
            <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
              <span className="material-symbols-outlined text-[#171216] dark:text-white">tune</span>
            </button>
          </div>
        </div>
        <div className="flex border-b border-[#e4dce3] dark:border-white/10 px-4 justify-between">
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-2 flex-1" href="#">
            <p className="text-sm font-bold leading-normal tracking-wide">Vista Mensual</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 pb-[13px] pt-2 flex-1"
            href="#"
          >
            <p className="text-sm font-bold leading-normal tracking-wide">Vista Semanal</p>
          </a>
        </div>
      </header>
      <main className="pb-24">
        <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#333] border border-[#e4dce3] dark:border-white/10 px-4 ios-shadow">
            <span className="text-sm font-semibold">Rama: Todas</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#333] border border-[#e4dce3] dark:border-white/10 px-4 ios-shadow">
            <span className="text-sm font-semibold">Territorio: Central</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
        <div className="mx-4 mb-6 p-4 bg-white dark:bg-[#262626] rounded-xl ios-shadow">
          <div className="flex items-center mb-4 justify-between">
            <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <p className="text-base font-bold flex-1 text-center">Octubre 2023</p>
            <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="grid grid-cols-7 text-center mb-2">
            <p className="text-gray-400 text-xs font-bold uppercase py-2">Lun</p>
            <p className="text-gray-400 text-xs font-bold uppercase py-2">Mar</p>
            <p className="text-gray-400 text-xs font-bold uppercase py-2">Mié</p>
            <p className="text-gray-400 text-xs font-bold uppercase py-2">Jue</p>
            <p className="text-gray-400 text-xs font-bold uppercase py-2">Vie</p>
            <p className="text-gray-400 text-xs font-bold uppercase py-2">Sáb</p>
            <p className="text-gray-400 text-xs font-bold uppercase py-2">Dom</p>
            <div className="h-12 flex flex-col items-center justify-center opacity-30 text-sm">25</div>
            <div className="h-12 flex flex-col items-center justify-center opacity-30 text-sm">26</div>
            <div className="h-12 flex flex-col items-center justify-center opacity-30 text-sm">27</div>
            <div className="h-12 flex flex-col items-center justify-center opacity-30 text-sm">28</div>
            <div className="h-12 flex flex-col items-center justify-center opacity-30 text-sm">29</div>
            <div className="h-12 flex flex-col items-center justify-center opacity-30 text-sm">30</div>
            <div className="h-12 flex flex-col items-center justify-center text-sm">1</div>
            <div className="h-12 flex flex-col items-center justify-center text-sm">2</div>
            <div className="h-12 flex flex-col items-center justify-center text-sm relative">
              3
              <div className="absolute bottom-1 flex gap-0.5">
                <span className="size-1 rounded-full bg-rama-madre"></span>
              </div>
            </div>
            <div className="h-12 flex flex-col items-center justify-center text-sm">4</div>
            <div className="h-12 flex flex-col items-center justify-center text-sm relative bg-primary/10 rounded-lg font-bold border border-primary/20">
              5
              <div className="absolute bottom-1 flex gap-0.5">
                <span className="size-1 rounded-full bg-rama-pyme"></span>
                <span className="size-1 rounded-full bg-rama-profesional"></span>
              </div>
            </div>
            <div className="h-12 flex flex-col items-center justify-center text-sm">6</div>
            <div className="h-12 flex flex-col items-center justify-center text-sm">7</div>
            <div className="h-12 flex flex-col items-center justify-center text-sm">8</div>
          </div>
        </div>
        <div className="px-4 flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold tracking-tight">Eventos: Jueves 5 de Octubre</h3>
          <span className="text-primary text-sm font-semibold">2 Eventos</span>
        </div>
        <div className="px-4 space-y-4">
          <div className="bg-white dark:bg-[#262626] rounded-xl overflow-hidden ios-shadow border-l-4 border-rama-pyme">
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-base font-bold leading-tight">Capacitación Operativa PyME</h4>
                <span className="text-xs font-bold uppercase px-2 py-1 rounded bg-rama-pyme/10 text-rama-pyme">PyME</span>
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-1.5">
                  <span className="material-symbols-outlined text-base">schedule</span>
                  <span>09:00 - 11:30</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-1.5">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  <span>Territorio Central - Sala B</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-primary text-white text-sm font-bold">Asistiré</button>
                <button className="flex-1 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 text-sm font-bold">
                  No asistiré
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#262626] rounded-xl overflow-hidden ios-shadow border-l-4 border-rama-profesional">
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-base font-bold leading-tight">Networking Profesional Regional</h4>
                <span className="text-xs font-bold uppercase px-2 py-1 rounded bg-rama-profesional/10 text-rama-profesional">
                  Profesional
                </span>
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-1.5">
                  <span className="material-symbols-outlined text-base">schedule</span>
                  <span>14:00 - 16:00</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-1.5">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  <span>Auditorio Principal</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg border border-primary text-primary text-sm font-bold">Asistiré</button>
                <button className="flex-1 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-400 text-sm font-bold">No asistiré</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <button className="fixed right-6 bottom-24 size-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#262626] border-t border-[#e4dce3] dark:border-white/10 safe-area-bottom z-50">
        <div className="flex h-16 items-center justify-around px-4">
          <Link className="flex flex-col items-center gap-1 text-primary" href="/calendar">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              calendar_today
            </span>
            <span className="text-[10px] font-bold">Calendario</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/calendar">
            <span className="material-symbols-outlined">event_available</span>
            <span className="text-[10px] font-bold">Mis Eventos</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/territory">
            <span className="material-symbols-outlined">hub</span>
            <span className="text-[10px] font-bold">Ramas</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold">Ajustes</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

