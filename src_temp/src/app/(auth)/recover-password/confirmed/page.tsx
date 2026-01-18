import Link from "next/link";

export default function RecoverPasswordConfirmedPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 font-manrope flex flex-col">
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[380px] bg-card-light dark:bg-card-dark rounded-2xl shadow-card overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-primary/80 to-primary" />
          <div className="px-8 py-10 flex flex-col items-center text-center">
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 animate-pulse" />
              <div className="relative w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-card-dark">
                <span className="material-symbols-outlined text-primary text-[48px]">check_circle</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-text-main dark:text-white mb-3">Contrasena actualizada</h1>
            <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed mb-8 px-2">
              Tu acceso fue restablecido correctamente. Ya puedes iniciar sesion con tu nueva clave.
            </p>
            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-semibold h-12 rounded-xl transition-all shadow-soft"
            >
              <span>Ir al Login</span>
              <span className="material-symbols-outlined text-[20px]">login</span>
            </Link>
          </div>
        </div>
      </main>
      <footer className="p-6 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-600 font-medium">La Purpura 2024 - Seguridad Operativa</p>
      </footer>
    </div>
  );
}
