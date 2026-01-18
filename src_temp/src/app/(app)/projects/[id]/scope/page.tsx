import Link from "next/link";

export default function ProjectScopePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#171216] dark:text-white">
      <div className="max-w-md mx-auto min-h-screen flex flex-col pb-10">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800">
          <div className="flex items-center p-4 justify-between h-16">
            <Link href="/projects/kanban" className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer">
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </Link>
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
              Ambito del Proyecto
            </h2>
            <Link href="/projects/kanban" className="flex w-10 items-center justify-end cursor-pointer">
              <p className="text-primary text-base font-bold leading-normal tracking-tight">Guardar</p>
            </Link>
          </div>
        </header>
        <main className="flex-1 px-4 pt-4 space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 ios-shadow border border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <span className="material-symbols-outlined">assignment</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Proyecto B5</p>
                <h1 className="text-xl font-bold leading-tight">Censo Operativo Norte</h1>
              </div>
            </div>
          </div>
          <section>
            <h3 className="text-[#171216] dark:text-white tracking-tight text-2xl font-bold leading-tight pb-1">
              Configuracion de Alcance
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
              Defina las ramas y el territorio para determinar la visibilidad y permisos automaticos del proyecto.
            </p>
          </section>
          <section className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden ios-shadow border border-gray-100 dark:border-zinc-800">
            <div className="p-4 border-b border-gray-50 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-800/30">
              <h3 className="text-[#171216] dark:text-white text-base font-bold leading-tight">
                Ramas Vinculadas <span className="text-primary italic text-xs ml-1 font-medium">(Obligatorio)</span>
              </h3>
            </div>
            <div className="px-4 custom-checkbox">
              <label className="flex gap-x-3 py-3.5 flex-row-reverse justify-between border-b border-gray-50 dark:border-zinc-800 last:border-0 cursor-pointer">
                <input
                  defaultChecked
                  className="h-6 w-6 rounded-full border-[#e4dce3] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all"
                  type="checkbox"
                />
                <p className="text-[#171216] dark:text-gray-200 text-base font-medium">Madre</p>
              </label>
              <label className="flex gap-x-3 py-3.5 flex-row-reverse justify-between border-b border-gray-50 dark:border-zinc-800 last:border-0 cursor-pointer">
                <input
                  defaultChecked
                  className="h-6 w-6 rounded-full border-[#e4dce3] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all"
                  type="checkbox"
                />
                <p className="text-[#171216] dark:text-gray-200 text-base font-medium">PyME</p>
              </label>
              <label className="flex gap-x-3 py-3.5 flex-row-reverse justify-between border-b border-gray-50 dark:border-zinc-800 last:border-0 cursor-pointer">
                <input
                  className="h-6 w-6 rounded-full border-[#e4dce3] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all"
                  type="checkbox"
                />
                <p className="text-[#171216] dark:text-gray-200 text-base font-medium">Microemprendimiento</p>
              </label>
              <label className="flex gap-x-3 py-3.5 flex-row-reverse justify-between border-b border-gray-50 dark:border-zinc-800 last:border-0 cursor-pointer">
                <input
                  className="h-6 w-6 rounded-full border-[#e4dce3] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all"
                  type="checkbox"
                />
                <p className="text-[#171216] dark:text-gray-200 text-base font-medium">Autonomos</p>
              </label>
            </div>
          </section>
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-[#171216] dark:text-white text-lg font-bold leading-tight">Alcance Territorial</h3>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">Nivel: Municipio</span>
            </div>
            <div className="grid gap-3">
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-gray-100 dark:border-zinc-800 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-transform">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-400">map</span>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Provincia</p>
                    <p className="font-semibold">Buenos Aires</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-300">expand_more</span>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-primary/30 ring-2 ring-primary/5 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-transform">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">location_city</span>
                  <div>
                    <p className="text-xs text-primary font-bold uppercase">Municipio</p>
                    <p className="font-semibold">General Pueyrredon</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary">expand_more</span>
              </div>
              <div className="bg-gray-100/50 dark:bg-zinc-800/50 p-4 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700 flex items-center justify-between cursor-not-allowed opacity-60">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-400">home_pin</span>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Barrio</p>
                    <p className="font-semibold">Seleccion Global</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-400">lock</span>
              </div>
            </div>
          </section>
          <section className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden ios-shadow border border-gray-100 dark:border-zinc-800">
            <div className="p-4 border-b border-gray-50 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="text-[#171216] dark:text-white text-base font-bold leading-tight tracking-tight">Acceso Automatico</h3>
              <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded">12 usuarios</span>
            </div>
            <div className="divide-y divide-gray-50 dark:divide-zinc-800">
              <div className="flex items-center p-4 gap-3">
                <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-pink-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white dark:ring-zinc-800 shadow-sm">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#171216] dark:text-white">Juana Delgado</p>
                  <p className="text-xs text-gray-500">Coordinadora Regional (PyME)</p>
                </div>
                <div className="text-primary">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
              </div>
              <div className="flex items-center p-4 gap-3">
                <div className="size-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white dark:ring-zinc-800 shadow-sm">
                  MR
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#171216] dark:text-white">Marcos Rodriguez</p>
                  <p className="text-xs text-gray-500">Administrador Local (Madre)</p>
                </div>
                <div className="text-primary">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
              </div>
              <div className="flex items-center p-4 gap-3">
                <div className="size-10 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white dark:ring-zinc-800 shadow-sm">
                  LP
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#171216] dark:text-white">Lucia Peralta</p>
                  <p className="text-xs text-gray-500">Operador Territorial (PyME)</p>
                </div>
                <div className="text-primary">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
              </div>
            </div>
            <Link href="/team" className="w-full py-3 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors block text-center">
              Ver todos los usuarios
            </Link>
          </section>
          <div className="flex gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-xs text-primary leading-tight font-medium">
              Los cambios en el ambito se aplicaran instantaneamente. Los usuarios listados recibiran una notificacion de nuevos permisos.
            </p>
          </div>
        </main>
        <footer className="mt-8 px-4 pb-8">
          <Link
            href="/projects/kanban"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] block text-center"
          >
            Confirmar Configuracion
          </Link>
        </footer>
      </div>
    </div>
  );
}
