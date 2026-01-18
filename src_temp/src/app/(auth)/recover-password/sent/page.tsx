import Link from "next/link";

export default function RecoverPasswordSentPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 font-manrope flex flex-col">
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[380px] bg-card-light dark:bg-card-dark rounded-2xl shadow-card overflow-hidden transform transition-all duration-300">
          <div className="h-1.5 bg-gradient-to-r from-primary/80 to-primary" />
          <div className="px-8 py-10 flex flex-col items-center text-center">
            <div className="mb-8 relative group cursor-default">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 animate-pulse" />
              <div className="relative w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-card-dark transition-all duration-500 group-hover:scale-105">
                <span className="material-symbols-outlined text-primary text-[48px] transform -rotate-12 translate-x-1">forward_to_inbox</span>
                <div className="absolute top-5 right-5 w-3 h-3 bg-red-400 rounded-full border-2 border-white dark:border-card-dark" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-text-main dark:text-white mb-3">¡Revisa tu bandeja de entrada!</h1>
            <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed mb-8 px-2">
              Hemos enviado las instrucciones a tu correo. No olvides revisar la carpeta de spam si no lo recibes en unos minutos.
            </p>
            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-semibold h-12 rounded-xl transition-all shadow-soft"
            >
              <span>Volver al Login</span>
              <span className="material-symbols-outlined text-[20px]">login</span>
            </Link>
            <div className="mt-6">
              <Link
                href="/recover-password"
                className="text-sm text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px] text-gray-400">refresh</span>
                <span className="underline decoration-transparent hover:decoration-primary/30 underline-offset-4">
                  ¿No recibiste el correo? Reenviar
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-6 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-600 font-medium">La Púrpura © 2024 • Seguridad Operativa</p>
      </footer>
    </div>
  );
}
