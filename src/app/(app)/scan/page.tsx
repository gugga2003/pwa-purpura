"use client";

import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            className="text-primary flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
            onClick={() => router.push("/home")}
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <div className="flex-1 px-3">
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Escaneo rapido</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Modo QR</p>
          </div>
          <div className="w-10"></div>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-8 space-y-6">
        <section className="text-center space-y-3">
          <div className="mx-auto size-20 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-4xl">qr_code_scanner</span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight">Escanear codigo</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Alinea el codigo dentro del marco para registrar una accion.
          </p>
        </section>
        <section className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="relative w-full aspect-square rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 flex items-center justify-center">
            <div className="absolute inset-6 border border-primary/30 rounded-lg"></div>
            <span className="material-symbols-outlined text-primary text-5xl">qr_code</span>
          </div>
        </section>
        <section className="space-y-3">
          <button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            onClick={() => router.push("/incidents/new")}
          >
            Registrar incidencia manual
          </button>
          <button
            className="w-full bg-transparent border-2 border-primary/20 text-primary font-bold py-3.5 rounded-xl transition-all active:scale-[0.98]"
            onClick={() => router.push("/tasks")}
          >
            Ver tareas asignadas
          </button>
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 pt-3 pb-8 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/home")}
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Inicio</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              qr_code_scanner
            </span>
            <span className="text-[10px] font-bold">Scan</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/alerts")}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="text-[10px] font-bold">Alertas</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/profile")}
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
