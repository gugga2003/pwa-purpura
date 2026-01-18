import Link from "next/link";

export default function AlertReceiptPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white min-h-screen flex flex-col items-center">
      <nav className="w-full max-w-[480px] flex items-center justify-between p-4 bg-transparent">
        <Link
          href="/alerts"
          className="text-[#171216] dark:text-white p-2 bg-white dark:bg-background-dark rounded-full shadow-sm"
        >
          <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
        </Link>
        <h1 className="text-lg font-bold tracking-tight">Comprobante de Envío</h1>
        <div className="w-10"></div>
      </nav>
      <main className="w-full max-w-[480px] px-6 py-4 flex-1">
        <div className="relative bg-white dark:bg-[#2a2d34] rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <div className="p-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <span className="text-primary font-extrabold text-xl tracking-tighter uppercase">La Púrpura</span>
              <span className="text-xs font-bold text-[#85667f] tracking-widest uppercase">Territorio</span>
            </div>
          </div>
          <div className="px-8 pb-6 flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-inner">
              <img
                alt="Código QR de validación"
                className="w-48 h-48"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATl_9tRnyZcZ3ZSM8u88TUXdziuN1O4f1twz0OuWyper5gsYHd4zNHRlgx-LYMwZLqXTzRPlD3sxSlyQ4JUkMVMRD3aY1Awo6xnbJ4j8eVlcUoCyj-Idg8_yTn5j-1rEl-OkOfdPjCCSI3gcN1dZ0WyVEEw1saZx-DSPA7dLU2YRfo4iSd16iI1xp0WAp53GzafK93J4uvz0hLMIL0fs4TZSUQjerMhrKz6QLL2LPjtdDfRnP2fOGKpZmX0J8fig44N9fhECUWrCo"
              />
            </div>
            <p className="mt-4 text-[10px] text-gray-400 font-mono tracking-widest uppercase">
              Validación Digital Única
            </p>
          </div>
          <div className="relative h-6 flex items-center px-[-10px]">
            <div className="absolute left-[-12px] w-6 h-6 bg-background-light dark:bg-background-dark rounded-full shadow-inner"></div>
            <div className="w-full border-t-2 border-dashed border-[#e4dce3] dark:border-gray-600 mx-4"></div>
            <div className="absolute right-[-12px] w-6 h-6 bg-background-light dark:bg-background-dark rounded-full shadow-inner"></div>
          </div>
          <div className="p-8 space-y-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#85667f] dark:text-gray-400 font-bold">ID del Relevamiento</p>
                <p className="text-sm font-semibold text-[#171216] dark:text-white">#12345678</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-[#85667f] dark:text-gray-400 font-bold">Fecha y Hora</p>
                <p className="text-sm font-semibold text-[#171216] dark:text-white">24/10/2023 - 14:30 hs</p>
              </div>
            </div>
            <div className="h-px bg-[#f0ebef] dark:bg-gray-700"></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#85667f] dark:text-gray-400 font-bold">Territorio</p>
              <p className="text-sm font-semibold text-[#171216] dark:text-white">Buenos Aires - Zona Sur</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#85667f] dark:text-gray-400 font-bold">Rama</p>
              <p className="text-sm font-semibold text-[#171216] dark:text-white">Sociocomunitaria</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#85667f] dark:text-gray-400 font-bold">Nombre del Referente</p>
              <p className="text-sm font-semibold text-[#171216] dark:text-white">Juan Pérez</p>
            </div>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 p-4 text-center">
            <p className="text-[10px] text-primary font-medium italic">Documento emitido por el sistema oficial de La Púrpura</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span className="text-xs font-bold uppercase tracking-tight">Envío validado con éxito</span>
        </div>
      </main>
      <footer className="w-full max-w-[480px] p-6 space-y-3 bg-background-light dark:bg-background-dark">
        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
          <span className="material-symbols-outlined">download</span>
          Descargar Imagen
        </button>
        <button className="w-full bg-white dark:bg-gray-800 text-primary dark:text-primary border border-primary/20 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-sm active:scale-[0.98] transition-transform">
          <span className="material-symbols-outlined">share</span>
          Compartir Comprobante
        </button>
        <div className="h-4"></div>
      </footer>
    </div>
  );
}
