import Link from "next/link";

export default function AlertsLibraryPage() {
  const categories = [
    { title: "Manuales", count: "12 VIGENTES", icon: "menu_book", progress: "w-4/5" },
    { title: "Plantillas", count: "8 VIGENTES", icon: "description", progress: "w-1/2" },
    { title: "Comunicados", count: "15 VIGENTES", icon: "campaign", progress: "w-full" },
    { title: "Branding", count: "5 VIGENTES", icon: "palette", progress: "w-1/3" },
    { title: "Legales", count: "20 VIGENTES", icon: "gavel", progress: "w-[90%]" },
    { title: "Operativos", count: "10 VIGENTES", icon: "settings_suggest", progress: "w-3/5" },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#171216] dark:text-white flex flex-col">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur px-4 pt-4 pb-2 border-b border-gray-100 dark:border-zinc-800">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary text-[28px]">account_tree</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight tracking-tight">Biblioteca</h1>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Módulo A2</p>
            </div>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-gray-100 dark:border-zinc-700">
            <span className="material-symbols-outlined text-[#171216] dark:text-white">search</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <section className="px-4 pt-6 pb-2">
          <h2 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-3">Filtrar por Rama</h2>
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {["Madre", "PyME", "Deportes", "Profesional"].map((label, idx) => (
              <button
                key={label}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-5 ${
                  idx === 0
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 soft-shadow text-[#171216] dark:text-zinc-300"
                } text-sm font-semibold`}
              >
                <span className="material-symbols-outlined text-[20px]">{idx === 0 ? "folder" : "folder_open"}</span>
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="px-4 pt-4 flex items-end justify-between">
          <h3 className="text-lg font-bold leading-tight">Categorías Oficiales</h3>
          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">6 Categorías</span>
        </section>

        <section className="grid grid-cols-2 gap-4 p-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="flex flex-col gap-3 p-4 bg-white dark:bg-zinc-800 rounded-xl soft-shadow border border-gray-50 dark:border-zinc-700/50"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined text-[32px]">{category.icon}</span>
              </div>
              <div>
                <p className="text-base font-bold text-[#171216] dark:text-white leading-tight">{category.title}</p>
                <p className="text-primary text-[11px] font-bold mt-1">{category.count}</p>
              </div>
              <div className="mt-2 w-full bg-gray-100 dark:bg-zinc-700 h-1.5 rounded-full overflow-hidden">
                <div className={`${category.progress} h-full bg-primary rounded-full`}></div>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-4 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-4">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="text-xs text-primary leading-relaxed">
            La documentación aquí presentada corresponde a la normativa oficial vigente para la rama seleccionada. Use los filtros superiores para cambiar de contexto institucional.
          </p>
        </section>
      </main>

      <nav className="fixed bottom-0 w-full max-w-[480px] bg-background-light/90 dark:bg-background-dark/90 ios-blur border-t border-gray-200 dark:border-zinc-800 pb-8 pt-2">
        <div className="flex items-center justify-around px-2">
          <Link className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400 dark:text-zinc-500" href="/home">
            <span className="material-symbols-outlined">home</span>
            <p className="text-[10px] font-bold">Inicio</p>
          </Link>
          <Link className="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="/alerts/library">
            <div className="relative">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                folder_open
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
            </div>
            <p className="text-[10px] font-bold">Biblioteca</p>
          </Link>
          <Link className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400 dark:text-zinc-500" href="/tasks">
            <span className="material-symbols-outlined">fact_check</span>
            <p className="text-[10px] font-bold">Tareas</p>
          </Link>
          <Link className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400 dark:text-zinc-500" href="/profile">
            <span className="material-symbols-outlined">person</span>
            <p className="text-[10px] font-bold">Perfil</p>
          </Link>
        </div>
      </nav>
      <div className="h-6 bg-background-light dark:bg-background-dark"></div>
    </div>
  );
}
