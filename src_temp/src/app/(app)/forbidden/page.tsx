"use client";

import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 p-4 border-b border-gray-200 dark:border-gray-800 justify-between">
          <Link href="/home" className="text-primary flex size-10 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            La Púrpura Territorio
          </h2>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full">
          <div className="relative mb-8 flex flex-col items-center">
            <div className="absolute inset-0 scale-150 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <span className="material-symbols-outlined text-primary text-7xl" style={{ fontVariationSettings: "'wght' 200" }}>
                    map
                  </span>
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-primary rotate-[45deg] rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-xl shadow-lg border-2 border-white dark:border-gray-800">
                  <span className="material-symbols-outlined text-white text-2xl">lock</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-[#171216] dark:text-white text-2xl font-bold leading-tight text-center mb-4 px-2">
            Acceso no permitido para este territorio
          </h3>
          <div className="space-y-4 mb-10">
            <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed text-center px-4">
              Tu rol actual solo tiene permisos para operar en la zona asignada.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                <span className="text-primary font-bold text-sm tracking-wide uppercase">Zona Norte Metropolitana</span>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm italic leading-relaxed text-center px-6">
              Si necesitas acceso a esta sección, por favor contactá con tu Administrador Nacional para actualizar tus credenciales.
            </p>
          </div>
          <div className="w-full space-y-3">
            <Link
              className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary text-white text-base font-bold transition-all active:scale-95 shadow-lg shadow-primary/20"
              href="/home"
            >
              <span className="truncate">Volver al Inicio</span>
            </Link>
            <Link
              className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-transparent text-primary text-sm font-semibold hover:bg-primary/5"
              href="/settings/support"
            >
              <span className="truncate">Solicitar Permiso</span>
            </Link>
          </div>
        </main>
        <div className="h-8 bg-transparent"></div>
        <nav className="mt-auto flex border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-3 justify-between items-center">
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/home">
            <span className="material-symbols-outlined text-2xl">home</span>
            <span className="text-[10px] font-medium">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-primary" href="/map">
            <span className="material-symbols-outlined text-2xl">explore</span>
            <span className="text-[10px] font-medium">Mapas</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/tasks">
            <span className="material-symbols-outlined text-2xl">assignment</span>
            <span className="text-[10px] font-medium">Tareas</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/profile">
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="text-[10px] font-medium">Perfil</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
