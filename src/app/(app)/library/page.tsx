import Link from "next/link";

export default function LibraryPage() {
  return (
    <div className="bg-[#f7f7f7] dark:bg-[#1f1f1f] text-[#171216] dark:text-white font-manrope antialiased selection:bg-[#871d75] selection:text-white min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-[#f7f7f7]/95 dark:bg-[#1f1f1f]/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/home"
            className="flex w-10 h-10 items-center justify-center rounded-full active:bg-gray-200 dark:active:bg-gray-700 transition-colors text-[#171216] dark:text-white"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight text-center flex-1">Biblioteca</h1>
          <button className="flex w-10 h-10 items-center justify-center rounded-full active:bg-gray-200 dark:active:bg-gray-700 transition-colors text-[#871d75] dark:text-[#871d75]" aria-label="Sincronizar">
            <span className="material-symbols-outlined">cloud_sync</span>
          </button>
        </div>
      </header>

      <section className="px-4 py-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <span className="material-symbols-outlined text-[#871d75]/60 group-focus-within:text-[#871d75] transition-colors">search</span>
          </div>
          <input
            className="block w-full h-12 rounded-2xl border-none bg-white dark:bg-[#2d2d2d] py-3 pl-12 pr-14 text-base text-[#171216] dark:text-white placeholder:text-[#85667f] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-[#871d75] focus:ring-offset-2 dark:focus:ring-offset-[#1f1f1f] transition-all"
            placeholder="Buscar manuales, formatos..."
            type="text"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button className="p-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-[#85667f] hover:text-[#871d75] transition-colors" aria-label="Filtros">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="text-lg font-bold leading-tight">Categorías</h3>
          <button className="text-sm font-semibold text-[#871d75] hover:text-[#5e1452]">Ver todo</button>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-3">
          <button className="group flex flex-col justify-between h-32 p-4 rounded-2xl bg-white dark:bg-[#2d2d2d] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#871d75]/20 active:scale-[0.98] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-5xl text-[#871d75]">menu_book</span>
            </div>
            <div className="size-10 rounded-full bg-[#871d75]/10 flex items-center justify-center text-[#871d75] mb-2 group-hover:bg-[#871d75] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <div className="text-left z-10">
              <span className="block text-2xl font-bold leading-none mb-1">12</span>
              <span className="text-sm font-medium text-[#85667f]">Manuales</span>
            </div>
          </button>

          <button className="group flex flex-col justify-between h-32 p-4 rounded-2xl bg-white dark:bg-[#2d2d2d] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#871d75]/20 active:scale-[0.98] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-5xl text-[#871d75]">shield_lock</span>
            </div>
            <div className="size-10 rounded-full bg-[#871d75]/10 flex items-center justify-center text-[#871d75] mb-2 group-hover:bg-[#871d75] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">shield_lock</span>
            </div>
            <div className="text-left z-10">
              <span className="block text-2xl font-bold leading-none mb-1">08</span>
              <span className="text-sm font-medium text-[#85667f]">Protocolos</span>
            </div>
          </button>

          <button className="col-span-2 sm:col-span-1 group flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-between h-20 sm:h-32 p-4 rounded-2xl bg-white dark:bg-[#2d2d2d] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#871d75]/20 active:scale-[0.98] transition-all relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 p-3 opacity-10 group-hover:opacity-20 transition-opacity hidden sm:block">
              <span className="material-symbols-outlined text-6xl text-[#871d75]">assignment</span>
            </div>
            <div className="flex items-center gap-3 sm:block sm:w-full">
              <div className="size-10 rounded-full bg-[#871d75]/10 flex items-center justify-center text-[#871d75] mb-0 sm:mb-2 group-hover:bg-[#871d75] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">assignment</span>
              </div>
              <div className="text-left z-10 sm:hidden">
                <span className="text-sm font-medium text-[#85667f]">Formatos</span>
                <span className="block text-lg font-bold text-[#171216] dark:text-white leading-none">24 archivos</span>
              </div>
            </div>
            <div className="text-left z-10 hidden sm:block">
              <span className="block text-2xl font-bold leading-none mb-1">24</span>
              <span className="text-sm font-medium text-[#85667f]">Formatos</span>
            </div>
            <div className="sm:hidden text-[#871d75]">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </button>
        </div>
      </section>

      <section className="flex-1">
        <div className="flex items-center justify-between px-4 mb-2 pt-2">
          <h3 className="text-lg font-bold leading-tight">Archivos Recientes</h3>
          <div className="flex gap-2">
            <button className="p-1 text-[#85667f] hover:text-[#871d75]"><span className="material-symbols-outlined text-[20px]">grid_view</span></button>
            <button className="p-1 text-[#871d75]"><span className="material-symbols-outlined text-[20px]">view_list</span></button>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 pb-4">
          <div className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d2d2d] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#871d75]/20 transition-all">
            <div className="relative shrink-0">
              <div className="size-12 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                <span className="material-symbols-outlined">picture_as_pdf</span>
              </div>
              <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-green-500 border-2 border-white dark:border-[#2d2d2d] flex items-center justify-center" title="Disponible Offline">
                <span className="material-symbols-outlined text-white text-[10px] font-bold">check</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-[#171216] dark:text-white truncate">Protocolo_Seguridad_v2.pdf</h4>
              <p className="text-xs text-[#85667f] flex items-center gap-1 mt-0.5">
                <span>4.5 MB</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>12 Oct 2023</span>
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button className="size-9 rounded-full flex items-center justify-center text-[#85667f] hover:bg-gray-100 hover:text-[#871d75] dark:hover:bg-gray-700 transition-colors" aria-label="Ver">
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="size-9 rounded-full flex items-center justify-center text-[#871d75] bg-[#871d75]/5 hover:bg-[#871d75]/10 transition-colors" aria-label="Descargar">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d2d2d] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#871d75]/20 transition-all">
            <div className="relative shrink-0">
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined">description</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-[#171216] dark:text-white truncate">Formulario_Visita_Campo.docx</h4>
              <p className="text-xs text-[#85667f] flex items-center gap-1 mt-0.5">
                <span>1.2 MB</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>10 Oct 2023</span>
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button className="size-9 rounded-full flex items-center justify-center text-[#85667f] hover:bg-gray-100 hover:text-[#871d75] dark:hover:bg-gray-700 transition-colors" aria-label="Ver">
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="size-9 rounded-full flex items-center justify-center text-[#85667f] hover:text-[#871d75] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Descargar para offline">
                <span className="material-symbols-outlined">download_for_offline</span>
              </button>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d2d2d] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#871d75]/20 transition-all">
            <div className="relative shrink-0">
              <div className="size-12 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                <span className="material-symbols-outlined">picture_as_pdf</span>
              </div>
              <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-green-500 border-2 border-white dark:border-[#2d2d2d] flex items-center justify-center" title="Disponible Offline">
                <span className="material-symbols-outlined text-white text-[10px] font-bold">check</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-[#171216] dark:text-white truncate">Manual_Operativo_2024.pdf</h4>
              <p className="text-xs text-[#85667f] flex items-center gap-1 mt-0.5">
                <span>12.0 MB</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>01 Sep 2023</span>
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button className="size-9 rounded-full flex items-center justify-center text-[#85667f] hover:bg-gray-100 hover:text-[#871d75] dark:hover:bg-gray-700 transition-colors" aria-label="Ver">
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="size-9 rounded-full flex items-center justify-center text-[#871d75] bg-[#871d75]/5 hover:bg-[#871d75]/10 transition-colors" aria-label="Descargar">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d2d2d] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#871d75]/20 transition-all">
            <div className="relative shrink-0">
              <div className="size-12 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined">table_view</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-[#171216] dark:text-white truncate">Inventario_Sedes_Norte.xlsx</h4>
              <p className="text-xs text-[#85667f] flex items-center gap-1 mt-0.5">
                <span>800 KB</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>Yesterday</span>
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button className="size-9 rounded-full flex items-center justify-center text-[#85667f] hover:bg-gray-100 hover:text-[#871d75] dark:hover:bg-gray-700 transition-colors" aria-label="Ver">
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="size-9 rounded-full flex items-center justify-center text-[#85667f] hover:text-[#871d75] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Descargar para offline">
                <span className="material-symbols-outlined">download_for_offline</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 w-full bg-white dark:bg-[#2d2d2d] border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-6 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] z-40">
        <div className="flex items-center justify-between max-w-md mx-auto h-16">
          <Link
            className="flex flex-col items-center justify-center gap-1 w-16 group text-[#85667f] hover:text-[#871d75] transition-colors"
            href="/home"
          >
            <span className="material-symbols-outlined group-hover:-translate-y-0.5 transition-transform duration-200">home</span>
            <span className="text-[10px] font-medium">Inicio</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center gap-1 w-16 group text-[#871d75] relative"
            href="/library"
          >
            <div className="absolute -top-12 w-12 h-12 bg-[#871d75] rounded-full shadow-lg shadow-[#871d75]/30 flex items-center justify-center border-4 border-[#f7f7f7] dark:border-[#1f1f1f] transform transition-transform group-active:scale-95">
              <span className="material-symbols-outlined text-white">folder_open</span>
            </div>
            <span className="text-[10px] font-bold mt-6">Biblioteca</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center gap-1 w-16 group text-[#85667f] hover:text-[#871d75] transition-colors"
            href="/alerts"
          >
            <span className="material-symbols-outlined group-hover:-translate-y-0.5 transition-transform duration-200">notifications</span>
            <span className="text-[10px] font-medium">Alertas</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center gap-1 w-16 group text-[#85667f] hover:text-[#871d75] transition-colors"
            href="/profile"
          >
            <span className="material-symbols-outlined group-hover:-translate-y-0.5 transition-transform duration-200">person</span>
            <span className="text-[10px] font-medium">Perfil</span>
          </Link>
        </div>
        <div className="h-4 w-full"></div>
      </nav>
    </div>
  );
}

