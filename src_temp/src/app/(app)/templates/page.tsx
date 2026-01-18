"use client";

import Link from "next/link";

export default function TemplatesPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen text-[#171216] dark:text-gray-100">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center p-4 pb-2 justify-between">
            <Link
              className="text-[#171216] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="/library"
            >
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </Link>
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Gestión B4</h2>
            <div className="flex w-10 items-center justify-end">
              <button className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-transparent text-[#171216] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 pb-24">
          <div className="px-4 py-5">
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-white gap-3 shadow-lg shadow-primary/30 active:scale-95 transition-transform duration-150">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="text-base font-bold tracking-tight">Crear Nueva Plantilla</span>
            </button>
          </div>
          <div className="flex items-center justify-between px-4 pb-2">
            <h3 className="text-[#171216] dark:text-white text-xl font-extrabold tracking-tight">Listado de Plantillas</h3>
            <span className="material-symbols-outlined text-primary">filter_list</span>
          </div>
          <div className="p-4">
            <div className="flex flex-col rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div
                className="w-full bg-center bg-no-repeat aspect-[21/9] bg-cover relative"
                data-alt="Ilustración abstracta de datos sociales"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkrUAW4ayHtuCIzyel_rIH-4tlY6yx8DFcPyTyhxZh8DCdjKo57z3ZG15QfGC-E91bfa6vM2RgRuvMXtXUtKh1BRWlfKAd2W9inYRmky0EvpBZ3pY4s-tgf2kukIstrnLVNNk_I4IKLORuDnTzFKUlVXNdw7j6r1afwsMar_qOsjNHwBb1kmRwuZ8p4DEFghZoYFLRHIhS25GYq2IHTokX5fO1vs8nLHzsk2VO9k4wkifg1cPm683SQAmDJd_CfjdVGO9GyjYRG3E')",
                }}
              >
                <div className="absolute top-3 right-3 bg-active-green text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  ACTIVA
                </div>
              </div>
              <div className="flex flex-col p-4 gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#171216] dark:text-white text-lg font-bold leading-tight">Censo Poblacional 2024</p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-branch-blue/10 text-branch-blue text-xs font-semibold">
                        <span className="material-symbols-outlined text-[14px]">diversity_3</span> Rama: Social
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold">
                        v2.4
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">content_copy</span>
                    </button>
                  </div>
                </div>
                <div className="mt-2 border-t border-gray-50 dark:border-gray-800 pt-3">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none text-primary text-sm font-bold">
                      <span>Ver Historial de Versiones</span>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="mt-3 flex flex-col gap-3">
                      <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border-l-4 border-primary/40">
                        <div className="material-symbols-outlined text-gray-400">history</div>
                        <div>
                          <p className="text-xs font-bold text-gray-800 dark:text-gray-200">v2.3 — <span className="font-normal">Juan Pérez</span></p>
                          <p className="text-[10px] text-gray-500 uppercase">12 May 2023 • Ajuste de campos</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border-l-4 border-gray-300">
                        <div className="material-symbols-outlined text-gray-400">history</div>
                        <div>
                          <p className="text-xs font-bold text-gray-800 dark:text-gray-200">v2.0 — <span className="font-normal">María G.</span></p>
                          <p className="text-[10px] text-gray-500 uppercase">01 Mar 2023 • Versión inicial</p>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mb-4">
            <div className="flex items-center gap-4 bg-white dark:bg-gray-900 px-4 py-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-center rounded-full bg-deprecated-orange/10 text-deprecated-orange shrink-0 size-12">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex items-center justify-between">
                  <p className="text-[#171216] dark:text-white text-base font-bold leading-none">Salud Barrial Q3</p>
                  <span className="text-[9px] bg-deprecated-orange text-white px-2 py-0.5 rounded-full font-bold">DEPRECADA</span>
                </div>
                <p className="text-gray-500 text-xs font-medium mt-1 leading-normal">Rama: Salud • v1.8</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Editado hace 2 meses</p>
              </div>
              <div className="shrink-0">
                <div className="text-[#171216] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="material-symbols-outlined">more_vert</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mb-4">
            <div className="flex flex-col rounded-xl bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 overflow-hidden opacity-80">
              <div className="flex flex-col p-4 gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#171216] dark:text-white text-lg font-bold">Relevamiento Infraestructura</p>
                    <div className="flex gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 text-xs font-semibold uppercase">
                        Rama: Técnica
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-draft-grey/20 text-draft-grey text-xs font-bold uppercase">
                        BORRADOR
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-400">v0.1</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button className="flex-1 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold hover:bg-primary/10 hover:text-primary transition-colors">
                    Continuar Editando
                  </button>
                  <button className="h-9 w-9 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-12 text-center opacity-40">
            <span className="material-symbols-outlined text-6xl mb-2 text-gray-300">inventory_2</span>
            <p className="text-sm font-medium text-gray-400">No hay más plantillas para mostrar</p>
          </div>
        </main>
        <nav className="fixed bottom-0 w-full max-w-md bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-3 flex justify-between items-center z-50">
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/home">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-primary" href="/templates">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-[10px] font-bold">Plantillas</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/team">
            <span className="material-symbols-outlined">group</span>
            <span className="text-[10px] font-bold">Equipos</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold">Ajustes</span>
          </Link>
        </nav>
        <div className="h-8 bg-white dark:bg-background-dark w-full fixed bottom-0 max-w-md"></div>
      </div>
    </div>
  );
}
