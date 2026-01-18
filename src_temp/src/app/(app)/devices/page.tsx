"use client";

import Link from "next/link";

export default function DevicesPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-background-light dark:bg-background-dark overflow-x-hidden">
        <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark/90 backdrop-blur-md p-4 border-b border-gray-200 dark:border-gray-800 justify-between">
          <div className="flex items-center gap-3">
            <Link
              aria-label="Volver"
              className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10"
              href="/settings"
            >
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Gestión de Dispositivos</h1>
          </div>
          <div className="flex w-10 items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#171216] dark:text-white">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </header>
        <main className="flex-1 pb-32">
          <div className="px-4 pt-6 pb-2">
            <h3 className="text-[#171216] dark:text-white text-sm font-bold uppercase tracking-wider opacity-60">Sesión actual</h3>
          </div>
          <div className="px-4 py-2">
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900 p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      En línea
                    </span>
                    <span className="text-[#85667f] dark:text-gray-400 text-xs font-medium">Último acceso: Ahora</span>
                  </div>
                  <p className="text-[#171216] dark:text-white text-lg font-bold leading-tight">Samsung Galaxy S23 Ultra</p>
                  <p className="text-[#85667f] dark:text-gray-400 text-sm font-medium">Chrome • Ciudad de México, MX</p>
                </div>
                <div className="size-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary overflow-hidden shrink-0">
                  <span className="material-symbols-outlined !text-3xl">smartphone</span>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button className="flex-1 flex items-center justify-center rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-[#171216] dark:text-white gap-2 text-sm font-bold transition-active active:scale-95">
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  <span>Cerrar sesión</span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 pt-8 pb-2">
            <h3 className="text-[#171216] dark:text-white text-sm font-bold uppercase tracking-wider opacity-60">Otras sesiones activas</h3>
          </div>
          <div className="px-4 py-2">
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900 p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Activa
                    </span>
                    <span className="text-[#85667f] dark:text-gray-400 text-xs font-medium">Hace 2 horas</span>
                  </div>
                  <p className="text-[#171216] dark:text-white text-lg font-bold leading-tight">iPhone 14 Pro Max</p>
                  <p className="text-[#85667f] dark:text-gray-400 text-sm font-medium">Safari • Madrid, España</p>
                </div>
                <div className="size-14 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 overflow-hidden shrink-0">
                  <span className="material-symbols-outlined !text-3xl">smartphone</span>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-lg h-10 bg-primary/10 text-primary gap-2 text-sm font-bold transition-active active:scale-95 border border-primary/20">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                <span>Cerrar sesión remota</span>
              </button>
            </div>
          </div>
          <div className="px-4 py-2">
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900 p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Activa
                    </span>
                    <span className="text-[#85667f] dark:text-gray-400 text-xs font-medium">Ayer, 18:45</span>
                  </div>
                  <p className="text-[#171216] dark:text-white text-lg font-bold leading-tight">MacBook Pro 16"</p>
                  <p className="text-[#85667f] dark:text-gray-400 text-sm font-medium">Firefox • Buenos Aires, AR</p>
                </div>
                <div className="size-14 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 overflow-hidden shrink-0">
                  <span className="material-symbols-outlined !text-3xl">laptop</span>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-lg h-10 bg-primary/10 text-primary gap-2 text-sm font-bold transition-active active:scale-95 border border-primary/20">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                <span>Cerrar sesión remota</span>
              </button>
            </div>
          </div>
          <div className="px-4 py-4 mt-4">
            <div className="rounded-xl overflow-hidden h-32 relative bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                data-alt="Mapa abstracto de ubicaciones de sesión"
                data-location="Madrid"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRJiX2hfrt4SbaZiHwuSw3XED6zS84fAEBNnhOZSFlXfrNm-_iWJCBBGGubLYTxCUjV4_ee5jhmFB5Fz_fm2dJZbj2yJhvsm42EtL1FocMiGsC9jYcU2bJVg57MydihuBiG9M_nCdARhNKcBviLIIgPN5lYV-gUkV_9FSHN4pjRtAS36MTgPNml2gqKortT6ZW1yjE5E4NVO8AUnXbGGuj6nlZeCN2jb_wK--IMW_e5JjbEhvLdIR9WbzmL8WNKZS9tRCYFodrGnk')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                <p className="text-white text-xs font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Visualización de seguridad basada en IP
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 max-w-[480px] mx-auto z-50">
          <button className="flex w-full items-center justify-center rounded-xl h-14 bg-primary text-white gap-3 text-base font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined">gpp_maybe</span>
            <span>Cerrar todas excepto la actual</span>
          </button>
          <p className="text-center text-[10px] text-[#85667f] dark:text-gray-400 mt-3 font-medium px-4">
            Al realizar esta acción, se cerrarán todas las sesiones en otros navegadores y dispositivos de forma inmediata.
          </p>
        </div>
      </div>
    </div>
  );
}

