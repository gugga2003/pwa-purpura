"use client";

import Link from "next/link";

export default function TwoFactorSetupPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
        <Link className="text-[#171216] dark:text-white flex size-12 shrink-0 items-center justify-start" href="/settings">
          <span className="material-symbols-outlined cursor-pointer">arrow_back_ios</span>
        </Link>
        <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Seguridad de la Cuenta
        </h2>
      </div>
      <main className="flex-1 flex flex-col max-w-md mx-auto w-full px-4">
        <div className="flex flex-col gap-3 py-6">
          <div className="flex gap-6 justify-between items-end">
            <p className="text-[#171216] dark:text-white text-base font-semibold leading-normal">Paso 1: Vincular App</p>
            <p className="text-[#171216] dark:text-gray-400 text-sm font-normal leading-normal">1 de 2</p>
          </div>
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden h-2">
            <div className="h-2 rounded-full bg-primary" style={{ width: "50%" }}></div>
          </div>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-[#171216] dark:text-white tracking-tight text-2xl font-bold leading-tight pb-2">Configuración 2FA</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed px-4">
            Instala una aplicación como Google Authenticator o Authy en tu teléfono y escanea el código siguiente.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 flex flex-col items-center gap-6">
          <div className="p-4 bg-white rounded-lg border-2 border-primary/10 shadow-inner">
            <div
              className="w-48 h-48 bg-center bg-no-repeat bg-contain"
              data-alt="Modern QR code for 2FA authentication"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTCPS0CB3bRDK2qm55qbq1BDYe-OhLPGk7dRuU4mNfvwvLtRtBV0myJ5jnc49SPQe4p79IrwZNR2dr_p8CJ10IYWjOfs5YYS_E7Z5Hwf5zwz7UC82SLJo0nhDgLfItk9b2fRojGfrvdRQYMFThFh69yCRdKDzMajH3p4Wudn0fbBvP8Al6s0DhFdaLP7HU2uIO9HXyZa448h-JQ1jqOnL0BSAeju3D2FEtTF_k9UYQAuBt4SiYlZFAZ7SyuCfihBzpsny7lVtNDeY')",
              }}
            ></div>
          </div>
          <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">¿No puedes escanear?</p>
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <code className="text-primary dark:text-primary/80 font-mono font-bold text-sm tracking-widest">A7BK - 9L32 - X90Q</code>
              <button className="flex items-center text-primary">
                <span className="material-symbols-outlined text-xl">content_copy</span>
              </button>
            </div>
          </div>
        </div>
        <div className="py-8 text-center px-6">
          <div className="flex items-center justify-center gap-2 text-primary/60 dark:text-primary/40 mb-2">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Encriptación de grado militar</span>
          </div>
        </div>
        <div className="mt-auto pb-8">
          <Link
            className="w-full bg-[#851c74] hover:bg-[#761966] text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            href="/alerts/two-factor"
          >
            <span>Siguiente</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-4">Administración - La Púrpura Territorio</p>
        </div>
      </main>
    </div>
  );
}
