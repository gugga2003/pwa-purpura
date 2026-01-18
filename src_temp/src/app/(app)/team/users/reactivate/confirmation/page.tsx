import Link from "next/link";

export default function TeamUserReactivateConfirmationPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white transition-colors duration-300">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
          <Link
            href="/team"
            className="text-primary flex size-12 shrink-0 items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Reactivacion de Cuenta
          </h2>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          <div className="w-full max-w-sm bg-white dark:bg-[#252a33] rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: "48px", fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
            </div>
            <div className="mb-2">
              <h4 className="text-primary text-sm font-extrabold uppercase tracking-widest px-4 py-1">
                Operacion Exitosa
              </h4>
            </div>
            <div className="flex flex-col items-center gap-3 mt-2">
              <h1 className="text-[#171216] dark:text-white text-2xl font-extrabold leading-tight tracking-tight">
                Cuenta Reactivada
              </h1>
              <p className="text-[#5c5c5c] dark:text-gray-400 text-base font-normal leading-relaxed max-w-[280px]">
                El usuario ya puede operar nuevamente en la plataforma de La Purpura Territorio.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-50 dark:border-gray-700 w-full">
              <div className="inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-xs text-[#85667f]">fingerprint</span>
                <p className="text-[#85667f] dark:text-gray-400 text-[11px] font-medium tracking-wider uppercase">
                  ID Auditoria: #AUD-851C74-X
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm mt-8">
            <Link
              href="/team"
              className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
            >
              <span className="truncate">Volver a Gestion de Equipo</span>
            </Link>
            <p className="mt-4 text-center text-[#85667f] dark:text-gray-500 text-xs font-medium">
              Trazabilidad total garantizada
            </p>
          </div>
        </main>
        <div className="h-8 w-full flex items-end justify-center pb-2">
          <div className="w-32 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  );
}
