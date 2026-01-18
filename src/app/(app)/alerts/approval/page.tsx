"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AlertApprovalPage() {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAction = (action: "approve" | "reject" | "changes") => {
    const actionText =
      action === "approve" ? "Aprobar" :
        action === "reject" ? "Rechazar" : "Solicitar Cambios";

    if (confirm(`¿Estás seguro de que deseas ${actionText.toLowerCase()} este relevamiento?`)) {
      setIsSubmitting(true);

      // Simulate API delay
      setTimeout(() => {
        setIsSubmitting(false);
        alert(`Acción realizada: ${actionText}`);
        router.push("/alerts/review");
      }, 1500);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#1F2937] dark:text-gray-100 min-h-screen">
      {/* Top Nav removed, relying on Layout or Back Button context */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center px-4 py-3 justify-between">
          <button onClick={() => router.back()} className="text-primary text-base font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">arrow_back_ios</span>
            Volver
          </button>
          <div className="flex flex-col items-center gap-0.5">
            <h1 className="text-lg font-bold leading-tight tracking-tight">Detalle de Aprobación</h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Módulo B3</p>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#171216] dark:text-white">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </nav>

      <main className="max-w-md mx-auto pb-32">
        <section className="px-4 pt-6 pb-2">
          <h2 className="text-base font-extrabold flex items-center gap-2 text-gray-900 dark:text-white">
            <span className="material-symbols-outlined text-primary text-xl">info</span>
            Información del Relevamiento
          </h2>
        </section>

        <section className="px-4 mb-6">
          <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm space-y-3">
            {[
              ["ID de Registro", "#LP-2023-7842"],
              ["Fecha de Carga", "12 Oct 2023, 14:30"],
              ["Ubicación", "Territorio Norte, Sector B"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <p className="font-medium">{label}</p>
                <p className="text-gray-900 dark:text-white font-semibold">{value}</p>
              </div>
            ))}
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <p className="font-medium">Responsable</p>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                  JP
                </div>
                <p className="text-gray-900 dark:text-white font-semibold">Juan Pérez</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-2 pb-2">
          <h3 className="text-base font-extrabold flex items-center gap-2 text-gray-900 dark:text-white">
            <span className="material-symbols-outlined text-primary text-xl">photo_library</span>
            Evidencias Adjuntas
          </h3>
        </section>

        <section className="grid grid-cols-2 gap-3 px-4 mb-6">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDzNFnVDUYCzjNUsmhVCj94D4sZ-kMpOzfa7B6Yvgsj2QyhFOkHku25iZAnG8nKMY7TNCNhjBBQmLq1HAN2Yi1UFQbfnXccIF5aiYJPtB-U9VWy86qH6RUr0DGGAmzNPsiTMmwtkzzS59oQCz2Cafv3YxcQ_2Aa81mw5jY9mivN6HCZt1QVpzx8KIlkwLpYuGNaRWc6UhfTqTGQMm185gN9tWYjGiPg8A0E1xpQXRARXdHxVMdRn6tkpslcR9t8I9efX-i1cGO9WKI",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6WG6RgpEUzpgp1YZcqVBn1KjmBbIjW01A37cvL50cSCLjDsDWD9NvA57GuxCA2PXmFQ3r4PqWk1Tur3a_-ajHUDn7fZAKnW4ke5KUEn0lDqnZtw3xzqpSJlzJCJn-OcDOY7Ry0UphqCPMRb5LbUO4zeUKJVr08kbyUhckfcHZ3PENwhoMPXYxQcWeteCyLZS42hEXO9eyC9786IQeMn1sU2oE160KRw85FpEAvszmjxbLTUdC-FM08SgFPuLoedADPrTlpOqyFk",
          ].map((src) => (
            <div key={src} className="relative group">
              <div
                className="w-full aspect-[4/3] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-cover bg-center"
                style={{ backgroundImage: `url("${src}")` }}
              ></div>
              <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white rounded-md p-1">
                <span className="material-symbols-outlined text-sm">zoom_in</span>
              </div>
            </div>
          ))}
          <div className="relative group col-span-2">
            <div
              className="w-full aspect-video rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_8qDarKZ6url9yLGPaNuI8i88o9rAd0VHtEqJEeWjdnd4aa8M-82XTRwaXS7VeNN-iJ49aQJOULQoxXg_Acn5sM07iv4Zccy_WmqHTTGryfwoOl7Zx7tgL4nE7SbvvtWPyMHdDEWWXNiy2mlYx9EC7HLpB-KDfCyh0FortPKRJpIItrFIFhvPGD8h1WUjd6COL7KZM4WF5hfGFGzXYKYm1kY4y6wcX9dK0IBXeQDV2vTDiKMupva7Ch_XNo-QTsj2SNyhnJ3nJ9Q')",
              }}
            ></div>
            <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white rounded-md p-1">
              <span className="material-symbols-outlined text-sm">zoom_in</span>
            </div>
          </div>
        </section>

        <section className="px-4 pt-2 pb-2">
          <h3 className="text-base font-extrabold leading-tight flex items-center gap-2 text-gray-900 dark:text-white">
            <span className="material-symbols-outlined text-primary text-xl">forum</span>
            Hilo de Revisión
          </h3>
        </section>

        <section className="px-4 space-y-4 mb-8">
          {[
            {
              initials: "JP",
              role: "Autor",
              time: "Hace 2 horas",
              body:
                "Se adjuntan las fotos solicitadas del sector norte. El material parece estar en buen estado a pesar del clima.",
              align: "start",
            },
            {
              initials: "RV",
              role: "Tú (Revisor)",
              time: "Hace 15 min",
              body:
                "¿Podrías confirmar si la segunda foto corresponde al lote 4 o al 5? No queda claro en la descripción.",
              align: "end",
            },
          ].map(({ initials, role, time, body, align }) => (
            <div key={role + time} className={`flex gap-3 ${align === "end" ? "flex-row-reverse" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${align === "start" ? "bg-gray-200 dark:bg-gray-700 text-gray-500" : "bg-primary/20 border border-primary text-primary"
                  }`}
              >
                {initials}
              </div>
              <div className={`flex-1 ${align === "end" ? "text-right" : ""}`}>
                <div
                  className={`p-3 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm ${align === "end" ? "bg-primary/5 dark:bg-primary/10 inline-block text-left" : "bg-white dark:bg-neutral-900"
                    }`}
                >
                  <div className="flex justify-between items-center mb-1 text-[10px] text-gray-400 uppercase tracking-wider">
                    <span className="font-bold">{role}</span>
                    <span>{time}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{body}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-2">
            <div className="relative">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-gray-100 dark:bg-neutral-800 border-none rounded-2xl py-3 px-4 text-sm placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:bg-white transition-all hide-scrollbar"
                placeholder="Escribir un comentario..."
                rows={1}
              ></textarea>
              <button
                disabled={!comment.trim()}
                className="absolute right-2 top-2 p-1.5 text-primary disabled:opacity-50"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl ios-shadow border-t border-gray-100 dark:border-gray-800 safe-area-bottom z-50">
        <div className="p-4 grid grid-cols-3 gap-3">
          <button
            onClick={() => handleAction("reject")}
            disabled={isSubmitting}
            className="flex flex-col items-center justify-center gap-1 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3 text-red-500 active:scale-95 transition-transform disabled:opacity-50"
          >
            <span className="material-symbols-outlined font-light">cancel</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Rechazar</span>
          </button>
          <button
            onClick={() => handleAction("changes")}
            disabled={isSubmitting}
            className="flex flex-col items-center justify-center gap-1 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3 text-blue-500 active:scale-95 transition-transform disabled:opacity-50"
          >
            <span className="material-symbols-outlined font-light">rule_folder</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Pedir Cambios</span>
          </button>
          <button
            onClick={() => handleAction("approve")}
            disabled={isSubmitting}
            className="flex flex-col items-center justify-center gap-1 bg-primary text-white rounded-xl py-3 shadow-lg shadow-primary/20 active:scale-95 transition-transform disabled:opacity-50"
          >
            <span className="material-symbols-outlined font-light">verified</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Aprobar</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
