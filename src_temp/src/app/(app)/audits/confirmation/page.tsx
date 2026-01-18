"use client";

import Link from "next/link";

export default function AuditConfirmationPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white transition-colors duration-300">
      <div className="relative flex h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto shadow-2xl bg-white dark:bg-background-dark">
        <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
          <Link href="/audits/request" className="text-[#171216] dark:text-white flex size-12 shrink-0 items-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Confirmación de Auditoría
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: "48px" }}>
                encrypted
              </span>
            </div>
            <h4 className="text-primary text-xl font-extrabold leading-normal tracking-tight text-center">Paquete de Auditoría Listo</h4>
          </div>
          <div className="mb-8">
            <p className="text-[#4A4A4A] dark:text-gray-300 text-base font-normal leading-relaxed text-center max-w-xs mx-auto">
              El paquete de datos ha sido generado y encriptado exitosamente para su descarga.
            </p>
          </div>
          <div className="w-full mb-6">
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-zinc-900 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="bg-primary/5 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary">download_for_offline</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#171216] dark:text-white text-sm font-bold leading-tight">Enlace de descarga temporal</p>
                  <p className="text-[#85667f] dark:text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Válido por 24 horas</p>
                </div>
              </div>
              <button className="w-full flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all">
                <span className="material-symbols-outlined">cloud_download</span>
                <span className="truncate">Descargar Archivo .ZIP</span>
              </button>
            </div>
          </div>
          <div className="w-full mb-8">
            <div className="flex flex-col gap-3 rounded-xl bg-gray-50 dark:bg-zinc-800/50 p-5 border-2 border-dashed border-gray-200 dark:border-zinc-700">
              <div className="flex justify-between items-center">
                <p className="text-[#85667f] dark:text-gray-400 text-xs font-bold uppercase tracking-widest">Clave de Encriptación Única</p>
                <span className="material-symbols-outlined text-gray-400 text-sm">info</span>
              </div>
              <div className="flex items-center justify-between bg-white dark:bg-zinc-900 p-3 rounded-lg border border-gray-100 dark:border-zinc-800">
                <code className="text-primary font-mono font-bold text-sm tracking-widest select-all">LP-AUD-2023-X9K2</code>
                <button className="text-primary p-1 hover:bg-primary/5 rounded">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                    content_copy
                  </span>
                </button>
              </div>
              <p className="text-[10px] text-gray-400 text-center italic leading-tight">
                Esta clave es necesaria para abrir el archivo. No la comparta.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 mt-auto">
            <Link
              className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 bg-primary/10 text-primary text-base font-bold transition-colors hover:bg-primary/20 border border-primary/20"
              href="/audits/traceability"
            >
              <span className="material-symbols-outlined mr-2">timeline</span>
              <span className="truncate">Ver Registro en Trazabilidad</span>
            </Link>
            <Link
              className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 bg-transparent text-[#171216] dark:text-white text-base font-bold transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800"
              href="/audits/traceability"
            >
              <span className="truncate">Finalizar</span>
            </Link>
          </div>
        </div>
        <div className="h-8 w-full flex items-center justify-center pb-2">
          <div className="w-32 h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full"></div>
        </div>
      </div>
      <div className="fixed top-0 left-0 -z-10 opacity-5 dark:opacity-10 pointer-events-none overflow-hidden h-screen w-screen">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px]"></div>
      </div>
    </div>
  );
}

