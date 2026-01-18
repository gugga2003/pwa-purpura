"use client";

import { useRouter } from "next/navigation";

export default function UserDeactivatePage() {
  const router = useRouter();

  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope min-h-screen text-text-primary dark:text-white flex">
      <div className="relative flex h-screen w-full flex-col">
        <div className="flex-1 bg-background-light dark:bg-background-dark" />
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1" />
          <div className="relative z-50 flex-1">
            <div className="absolute inset-0 bg-[#161217]/70 backdrop-blur-custom flex items-center justify-center p-6">
              <div className="relative w-full max-w-[340px] bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-modal p-6 flex flex-col items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/30 blur-xl rounded-full opacity-50"></div>
                  <div className="relative size-16 rounded-full bg-warning-soft dark:bg-[#3d2514] flex items-center justify-center text-warning-icon">
                    <span className="material-symbols-outlined text-[32px] font-variation-settings-FILL-0">warning</span>
                  </div>
                </div>
                <div className="text-center space-y-2 w-full">
                  <h3 className="text-[#161217] dark:text-white text-[19px] font-bold tracking-tight">¿Confirmas la desactivación?</h3>
                  <p className="text-[#7f6685] dark:text-gray-400 text-[15px] leading-[1.5] px-1">
                    El usuario ya no podrá acceder a la plataforma, pero sus datos y reportes se mantendrán guardados.
                  </p>
                </div>
                <div className="flex w-full gap-3">
                  <button
                    className="flex-1 h-11 rounded-xl bg-surface-light dark:bg-white/5 hover:bg-[#eaeaea] dark:hover:bg-white/10 text-text-primary dark:text-gray-200 text-[15px] font-bold border border-transparent dark:border-white/5 transition-colors"
                    onClick={() => router.back()}
                  >
                    Cancelar
                  </button>
                  <button
                    className="flex-1 h-11 rounded-xl bg-primary-action hover:bg-[#6e155f] text-white text-[15px] font-bold shadow-md shadow-[#851c74]/20 transition-all active:scale-[0.98]"
                    onClick={() => router.push("/team")}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
