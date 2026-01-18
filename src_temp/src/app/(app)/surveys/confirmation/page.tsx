"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const actions = [
  { label: "Volver al Inicio", icon: "home", filled: true },
  { label: "Ver mis respuestas", icon: "checklist", filled: false },
];

export default function SurveyConfirmationPage() {
  const router = useRouter();
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope min-h-screen text-text-main dark:text-white flex flex-col relative overflow-hidden selection:bg-primary/20 selection:text-primary">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <main className="flex flex-col items-center justify-center flex-1 px-6 pb-24 min-h-screen relative z-10">
        <div className="relative w-full max-w-md text-center">
          <div className="relative w-full flex flex-col items-center justify-center mb-8">
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-b from-primary/10 to-transparent flex items-center justify-center" />
            <div className="w-full h-48 mb-[-40px] z-10 opacity-90 flex justify-center">
              <div
                className="w-48 h-48 bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6HJ5n2oRlAYz_7JBXSfDtAi8dgr5v9sfynTAB8s9k5_5kitGdJTwRXfbEMu8qIoOnBiNaWChrZfqr1VuexDK0ahnT-Z3QHNvbawh5VpsZJ9aXLMXdOJ-oJ3dOS4-2PWX2-8zTIM3p2L9r3WihXcRQ9XiBm0P1hWMCqx2tJPq4zIxO-aZnGdpFSb7iXD4d6cfTBhLpuiu8ATDdiAUmtoVbs7zh_KsbM3Z1-EmCJnb1Ok4aN5fqNJXQwqV68l56zmxUoRDcgA26x8s');",
                  maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
                }}
              />
            </div>
          </div>
          <div className="relative z-20 animate-bounce-in">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-soft-glow ring-8 ring-background-light dark:ring-background-dark">
              <span className="material-symbols-outlined text-[64px] text-primary" style={{ fontVariationSettings: "'wght' 700" }}>
                check
              </span>
            </div>
          </div>
          <div className="mt-6 space-y-3 animate-fade-up">
            <h1 className="text-[32px] font-extrabold leading-tight">¡Muchas gracias por tu participación!</h1>
            <p className="text-lg text-text-secondary dark:text-gray-400 leading-relaxed">
              Tus datos han sido guardados y sincronizados correctamente.
            </p>
          </div>
        </div>
      </main>

      <footer className="relative z-20 w-full px-6 pb-8 pt-4 space-y-4 max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          <button
            className="group relative flex w-full items-center justify-center rounded-xl h-14 bg-primary text-white shadow-lg shadow-primary/25 transition-all active:scale-[0.98] hover:bg-[#7a1a69]"
            onClick={() => router.push("/home")}
          >
            <span className="material-symbols-outlined absolute left-6 text-white/70 group-hover:left-5 transition-all">
              home
            </span>
            <span className="text-[17px] font-bold tracking-[0.015em]">Volver al Inicio</span>
          </button>
          <Link
            className="flex w-full items-center justify-center py-2 text-primary font-bold text-sm hover:opacity-80 transition-opacity"
            href="/surveys/results"
          >
            <span className="material-symbols-outlined text-[18px] mr-1">checklist</span>
            Ver mis respuestas
          </Link>
        </div>
      </footer>
    </div>
  );
}
