import Link from "next/link";

export default function TwoFactorPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center text-[#171216] dark:text-gray-100">
      <header className="w-full max-w-md flex items-center justify-between p-4">
        <Link href="/alerts" className="text-primary p-2 rounded-full hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-xl">arrow_back</span>
        </Link>
        <h2 className="text-lg font-bold tracking-tight">Verificación</h2>
        <div className="w-10"></div>
      </header>

      <main className="w-full max-w-md px-6 py-8 flex flex-col items-center">
        <div className="mb-8 p-6 bg-primary/10 rounded-full">
          <span
            className="material-symbols-outlined text-primary text-6xl"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}
          >
            encrypted
          </span>
        </div>
        <div className="text-center mb-4">
          <h1 className="text-2xl font-extrabold tracking-tight">Verificación de Seguridad</h1>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">Paso Obligatorio</p>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 px-2">
          Ingresá el código de 6 dígitos generado por tu aplicación de autenticación
          <span className="font-bold text-primary"> (Google Authenticator o similar)</span>.
        </p>

        <div className="w-full bg-white dark:bg-[#252525] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-8">
          <div className="flex justify-between gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <input
                key={i}
                className="otp-input w-11 h-14 text-center text-xl font-bold bg-gray-50 dark:bg-gray-800 border-0 border-b-2 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-0 focus:bg-white dark:focus:bg-gray-700 transition-all"
                inputMode="numeric"
                maxLength={1}
                type="text"
              />
            ))}
          </div>
        </div>

        <Link href="/alerts" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mb-4"><span>Verificar y Acceder</span>
          <span className="material-symbols-outlined text-sm">login</span></Link>
        <Link href="/settings/support" className="text-primary font-semibold text-sm hover:underline decoration-2 underline-offset-4">¿No tenés acceso a tu código?</Link>
      </main>

      <footer className="w-full max-w-md p-4 mb-6">
        <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">
            La Púrpura Territorio
          </span>
        </div>
      </footer>
    </div>
  );
}

