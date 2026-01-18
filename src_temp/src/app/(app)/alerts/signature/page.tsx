import Link from "next/link";

export default function SignaturePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white min-h-screen font-display flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between">
          <Link href="/alerts" className="text-primary flex items-center gap-2 text-sm font-semibold">
            <span className="material-symbols-outlined">arrow_back_ios</span>
            Volver
          </Link>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold leading-tight tracking-tight">Firma Digital</h1>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Módulo B3</span>
          </div>
          <div className="size-10 flex items-center justify-center rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-md mx-auto w-full px-4 pb-24">
        <div className="mt-6 mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Módulo B3</span>
              <span className="text-xs font-medium text-gray-500">Paso Final: Validación</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-full rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-extrabold text-center">Firma de Relevamiento</h3>
          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="font-bold text-primary">Declaración Jurada:</span> Al firmar, declara que los datos relevados son veraces. Esta firma tiene plena validez institucional.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-tight">Espacio para firma</span>
              <span className="material-symbols-outlined text-gray-400 text-lg">edit</span>
            </div>
            <div className="signature-canvas-area relative h-64 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-3 opacity-40">
                <span className="material-symbols-outlined text-4xl">draw</span>
                <p className="text-xs font-medium text-center px-8">Use su dedo o lápiz óptico dentro de este recuadro</p>
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 200">
                <path d="M50,150 Q100,50 150,120 T250,100 T350,130" fill="none" stroke="#171216" strokeWidth="3" strokeLinecap="round" className="opacity-20 dark:stroke-white"></path>
              </svg>
            </div>
            <button className="w-full flex items-center justify-center gap-2 h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined text-xl">ink_eraser</span>
              Limpiar trazo
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 px-2">
          <span className="material-symbols-outlined text-gray-400 mt-0.5">info</span>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
            Su ubicación y marca de tiempo se registrarán automáticamente junto con esta firma para asegurar trazabilidad institucional.
          </p>
        </div>

        <div className="mt-8 pb-2">
          <Link
            href="/alerts/receipt"
            className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/25 flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
          >
            <span>Confirmar y Enviar</span>
            <span className="material-symbols-outlined">send</span>
          </Link>
          <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold">La Púrpura Territorio v3.2</p>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-2 bg-background-light dark:bg-background-dark pointer-events-none"></div>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full md:hidden"></div>
    </div>
  );
}
