import Link from "next/link";

const branches = [
  "Madre",
  "PyME",
  "Deportes",
  "Profesional",
  "Social",
  "Logistica",
];

export default function TerritoryBranchSelectorPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <Link
          href="/territory"
          className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined text-[#171216] dark:text-white">arrow_back_ios</span>
        </Link>
        <h1 className="text-lg font-bold tracking-tight flex-1 text-center">Seleccionar Rama</h1>
        <div className="w-10"></div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 pb-24 space-y-6">
        <section>
          <h2 className="text-2xl font-extrabold tracking-tight">Ramas disponibles</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Define la rama para filtrar responsables y recursos del territorio.
          </p>
        </section>
        <section className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {branches.map((branch) => (
              <button
                key={branch}
                className="flex h-9 items-center justify-center rounded-full bg-primary/10 text-primary px-4 text-xs font-bold uppercase tracking-wide"
              >
                {branch}
              </button>
            ))}
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
            Contexto actual
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Territorio</span>
              <span className="text-sm font-bold">Zona Norte Metropolitana</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Nivel</span>
              <span className="text-sm font-bold">Municipio</span>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 p-4 pb-8">
        <div className="max-w-md mx-auto">
          <Link
            href="/territory"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">check</span>
            Confirmar seleccion
          </Link>
        </div>
      </div>
    </div>
  );
}
