import Link from "next/link";

export default function TeamUserSuspendConfirmationPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <div className="flex items-center bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10 p-4 justify-between border-b border-gray-100 dark:border-white/10">
        <Link
          href="/team"
          className="text-[#171216] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Confirmacion
        </h2>
      </div>
      <main className="flex-1 flex flex-col items-center justify-center p-6 @container">
        <div className="w-full max-w-md bg-white dark:bg-[#2d1b2a] rounded-xl shadow-sm border border-[#e4dce3] dark:border-white/5 p-8 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center bg-primary/10 dark:bg-primary/20 p-5 rounded-full">
            <span className="material-symbols-outlined text-primary text-5xl">lock_person</span>
          </div>
          <h3 className="text-[#171216] dark:text-white text-2xl font-bold leading-tight mb-3">
            Usuario Suspendido Correctamente
          </h3>
          <p className="text-[#645260] dark:text-gray-300 text-base font-normal leading-relaxed mb-8">
            El acceso ha sido bloqueado temporalmente hasta su revision manual. El usuario ya no podra iniciar sesion en la plataforma.
          </p>
          <div className="w-full flex flex-col items-start gap-4 rounded-lg border border-[#e4dce3] dark:border-white/10 bg-background-light/50 dark:bg-black/20 p-5 mb-8">
            <div className="flex flex-col gap-1 text-left w-full">
              <p className="text-[#171216] dark:text-white text-xs font-bold uppercase tracking-wider opacity-70">
                ID de evento de auditoria
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#851c74] dark:text-[#d14da7] text-lg font-mono font-bold">#74829-X-TRZ</p>
                <button className="flex items-center gap-1 text-primary dark:text-pink-300 text-sm font-bold hover:underline">
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  Copiar
                </button>
              </div>
            </div>
          </div>
          <div className="w-full space-y-3">
            <Link
              href="/team"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-all active:scale-[0.98] shadow-md shadow-primary/20 block"
            >
              Volver a Gestion de Equipo
            </Link>
            <Link
              href="/audits/traceability"
              className="w-full bg-transparent border-2 border-primary/20 hover:border-primary/40 dark:border-white/20 text-[#171216] dark:text-white font-bold py-4 px-6 rounded-lg transition-all active:scale-[0.98] block"
            >
              Ver Matriz de Auditoria
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center opacity-40">
          <div className="text-[#171216] dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined">security</span>
            <span className="font-bold tracking-tighter text-sm">LA PURPURA TERRITORIO</span>
          </div>
          <p className="text-[10px] mt-1 text-[#171216] dark:text-white">SISTEMA DE GESTION CENTRALIZADO</p>
        </div>
      </main>
      <div className="h-8 bg-transparent"></div>
    </div>
  );
}
