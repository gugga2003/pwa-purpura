import Link from "next/link";

export default function TerritoryHierarchyPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="relative mx-auto flex h-full min-h-screen max-w-[480px] flex-col overflow-x-hidden">
        <header className="sticky top-0 z-20 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-4 border-b border-gray-200/50 dark:border-gray-800/50">
          <Link
            href="/territory"
            className="text-[#171216] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">menu</span>
          </Link>
          <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight flex-1 text-center">Jerarquia Territorial</h2>
          <Link
            href="/territory/contacts"
            className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
          >
            <span className="material-symbols-outlined">search</span>
          </Link>
        </header>
        <main className="flex-1 px-4 py-6">
          <div className="mb-6 px-1">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Estructura Actual</p>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium overflow-x-auto whitespace-nowrap pb-2">
              <span>Nacion</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span>Provincia</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span>Municipio</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-gray-900 dark:text-gray-100">Barrio</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">public</span>
                    </div>
                    <div>
                      <h3 className="text-primary font-extrabold text-lg">Argentina</h3>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Nivel: Nacion</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Link
                      href="/territory/profile"
                      className="p-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                    </Link>
                    <Link
                      href="/territory/branch-selector"
                      className="p-2 text-primary font-bold"
                    >
                      <span className="material-symbols-outlined">add_circle</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-4 ml-8 relative">
                <div className="tree-line"></div>
                <div className="tree-branch"></div>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">map</span>
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-bold text-base">Buenos Aires</h4>
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Nivel: Provincia</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Link
                        href="/territory/profile"
                        className="p-2 text-gray-400"
                      >
                        <span className="material-symbols-outlined text-[20px]">polyline</span>
                      </Link>
                      <Link
                        href="/territory/branch-selector"
                        className="p-2 text-primary"
                      >
                        <span className="material-symbols-outlined text-[20px]">add_circle</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4 ml-8 relative">
                  <div className="tree-line"></div>
                  <div className="tree-branch"></div>
                  <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">location_city</span>
                        </div>
                        <div>
                          <h4 className="text-gray-900 dark:text-white font-bold text-base">La Matanza</h4>
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Nivel: Municipio</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Link
                          href="/territory/profile"
                          className="p-2 text-gray-400"
                        >
                          <span className="material-symbols-outlined text-[20px]">polyline</span>
                        </Link>
                        <Link
                          href="/territory/branch-selector"
                          className="p-2 text-primary"
                        >
                          <span className="material-symbols-outlined text-[20px]">add_circle</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 ml-8 relative">
                    <div className="tree-line !bottom-[50%]"></div>
                    <div className="tree-branch"></div>
                    <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border-2 border-primary/20 bg-primary/[0.02]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[20px]">home_pin</span>
                          </div>
                          <div>
                            <h4 className="text-gray-900 dark:text-white font-bold text-base">Ramos Mejia</h4>
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Nivel: Barrio</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Link
                            href="/territory/profile"
                            className="p-2 text-gray-400 hover:text-primary transition-colors"
                          >
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </Link>
                          <Link
                            href="/territory/profile"
                            className="p-2 text-primary"
                          >
                            <span className="material-symbols-outlined text-[20px]">monitoring</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative opacity-60">
                <div className="ml-8 relative">
                  <div className="tree-branch !left-[-20px]"></div>
                  <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                          <span className="material-symbols-outlined text-[20px]">map</span>
                        </div>
                        <div>
                          <h4 className="text-gray-900 dark:text-white font-bold text-base">Cordoba</h4>
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Nivel: Provincia</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-gray-300">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="fixed bottom-8 right-6 z-30">
          <Link
            href="/territory/branch-selector"
            className="size-14 bg-primary text-white rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-3xl font-bold">add</span>
          </Link>
        </div>
        <div className="mt-auto pb-4 flex justify-center">
          <div className="w-32 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
}
