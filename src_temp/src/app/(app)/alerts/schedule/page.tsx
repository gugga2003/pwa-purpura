import Link from "next/link";

export default function AlertsSchedulePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#171216] dark:text-white antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between px-4 py-4">
            <Link href="/alerts" className="text-primary text-base font-medium">
              Cancelar
            </Link>
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center flex-1 px-4">
              Programar Notificación
            </h2>
            <div className="w-12"></div>
          </div>
        </header>

        <main className="flex-1 pb-24">
          <div className="px-4 pt-6 pb-2">
            <h3 className="text-[#171216] dark:text-white text-xl font-bold leading-tight tracking-tight">Contenido de la Alerta</h3>
          </div>

          <div className="mx-4 mb-6 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] space-y-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#171216] dark:text-gray-300 px-1">
                Título de la notificación
              </p>
              <input
                className="form-input w-full rounded-lg border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 text-base text-[#171216] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder:text-[#85667f]"
                placeholder="Ej: Importante: Cambio de Sede"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center px-1">
                <p className="text-sm font-semibold text-[#171216] dark:text-gray-300">Mensaje corto</p>
                <p className="text-xs font-normal text-[#85667f] dark:text-gray-400">0 / 120</p>
              </div>
              <textarea
                className="form-input w-full rounded-lg border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 text-base text-[#171216] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary min-h-[120px] px-4 py-3 placeholder:text-[#85667f] resize-none leading-tight"
                placeholder="Escribe el mensaje de la alerta..."
              />
            </div>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-lg font-bold text-[#171216] dark:text-white leading-tight">Interacción</h3>
          </div>
          <div className="mx-4 mb-6 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <p className="text-sm font-semibold text-[#171216] dark:text-gray-300 pb-3 px-1">Acción al pulsar</p>
            <div className="grid grid-cols-3 gap-2">
              <button className="flex flex-col items-center justify-center gap-1 rounded-lg border-2 border-primary bg-primary/5 text-primary py-3 text-[10px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">newspaper</span>
                Novedad
              </button>
              <button className="flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 py-3 text-[10px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Evento
              </button>
              <button className="flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 py-3 text-[10px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">assignment</span>
                Relevamiento
              </button>
            </div>
          </div>

          <div className="px-4 py-2">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-[#171216] dark:text-white leading-tight">Segmentación</h3>
              <span className="bg-red-100 text-red-600 text-[10px] uppercase tracking-tight px-1.5 py-0.5 rounded font-bold">Obligatorio</span>
            </div>
          </div>
          <div className="mx-4 mb-6 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] space-y-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#171216] dark:text-gray-300">Seleccionar Rama</p>
              <select className="form-select w-full rounded-lg border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 text-sm h-11 focus:border-primary focus:ring-1 focus:ring-primary">
                <option>Todas las Ramas</option>
                <option>Lobatos</option>
                <option>Scouts</option>
                <option>Caminantes</option>
                <option>Rovers</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#171216] dark:text-gray-300">Territorio / Zona</p>
              <select className="form-select w-full rounded-lg border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 text-sm h-11 focus:border-primary focus:ring-1 focus:ring-primary">
                <option>Seleccionar Zona/Distrito</option>
                <option>Zona 1 - Centro</option>
                <option>Zona 2 - Norte</option>
                <option>Zona 3 - Sur</option>
              </select>
            </div>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-lg font-bold text-[#171216] dark:text-white leading-tight">Programación</h3>
          </div>
          <div className="mx-4 mb-6 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-500">schedule</span>
                <span className="text-sm font-medium text-[#171216] dark:text-gray-300">Enviar ahora</span>
              </div>
              <div className="relative inline-block w-10 select-none">
                <input
                  checked
                  className="toggle-checkbox absolute block w-5 h-5 rounded-full border-4 border-gray-300 bg-white appearance-none cursor-pointer transition-all duration-300 right-5"
                  id="schedule-toggle"
                  name="schedule-toggle"
                  type="checkbox"
                />
                <label
                  className="toggle-label block h-5 rounded-full bg-gray-300 cursor-pointer"
                  htmlFor="schedule-toggle"
                ></label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-gray-800 mt-2 opacity-40">
              <div className="flex flex-col">
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1">Fecha</p>
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-2 text-sm text-gray-400">DD/MM/AAAA</div>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1">Hora</p>
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-2 text-sm text-gray-400">-- : --</div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 mt-4">
            <p className="text-center text-[#85667f] dark:text-gray-400 text-sm font-medium uppercase tracking-widest mb-3">
              Vista Previa Mobile
            </p>
            <div className="relative w-64 mx-auto aspect-[9/16] rounded-[2.5rem] border-[6px] border-[#171216] overflow-hidden bg-gradient-to-br from-[#1c1c1c] to-[#4a4a4a] p-3 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#171216] rounded-b-xl"></div>
              <div className="mt-20">
                <div className="lock-screen-glass rounded-2xl p-3 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="size-5 bg-primary rounded flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold">LP</span>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-800 uppercase tracking-wide">La Púrpura</span>
                    </div>
                    <span className="text-[9px] text-gray-500">ahora</span>
                  </div>
                  <p className="text-[11px] font-bold text-gray-900 mb-1">Título de la notificación</p>
                  <p className="text-[11px] text-gray-700 leading-snug">
                    Escribe el mensaje de la alerta... este texto se verá reflejado aquí en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 max-w-[480px] mx-auto z-50">
          <Link
            href="/alerts"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] text-center"
          >
            Programar Alerta
          </Link>
        </div>

        <div className="h-20 bg-transparent"></div>
      </div>
    </div>
  );
}
