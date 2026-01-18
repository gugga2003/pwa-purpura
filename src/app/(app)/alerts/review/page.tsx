"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AlertsReviewPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleReview = (id: string, name: string) => {
    // Mock navigation to detail or review action
    if (confirm(`¿Iniciar revisión para: ${name}?`)) {
      router.push(`/alerts/approval`);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#171216] dark:text-[#f4f1f3] antialiased pb-24">
      {/* Header handled by global layout, but keeping back button for specific context if needed, or remove if header exists */}

      <main className="max-w-md mx-auto pt-4">
        <div className="px-4 py-4">
          <label className="relative flex w-full group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#85667f] dark:text-[#a3879d] flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input
              className="w-full h-12 rounded-xl bg-white dark:bg-[#2d1b2a] shadow-sm focus:ring-2 focus:ring-primary/50 pl-12 pr-4 text-base font-medium placeholder:text-[#85667f]/60 dark:placeholder:text-[#a3879d]/40 transition-all"
              placeholder="Buscar por referente o territorio"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>

        <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-sm">
            <p className="text-sm font-semibold">Todos (12)</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#2d1b2a] text-[#171216] dark:text-[#f4f1f3] px-5 border border-gray-100 dark:border-white/5 shadow-sm">
            <p className="text-sm font-medium">Recibidos</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#2d1b2a] text-[#171216] dark:text-[#f4f1f3] px-5 border border-gray-100 dark:border-white/5 shadow-sm">
            <p className="text-sm font-medium">En Revisión</p>
          </button>
        </div>

        <div className="px-5 py-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#85667f] dark:text-[#a3879d]">Pendientes de acción</h3>
        </div>

        <div className="flex flex-col gap-4 px-4">
          <article className="group relative flex flex-col bg-white dark:bg-[#2d1b2a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-gray-50 dark:border-white/5 overflow-hidden">
            <div
              className="h-36 w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBbvoL3cb5Gd7RrrlYapChSDot2xz6qa_RlpP8ynbf9nFCWNQNmCA3_aMqluLuOJc-Dl4484VdDlYRaWlZQaN5x0lo503R4dcFiYJPtB-U9VWy86qH6RUr0DGGAmzNPsiTMmwtkzzS59oQCz2Cafv3YxcQ_2Aa81mw5jY9mivN6HCZt1QVpzx8KIlkwLpYuGNaRWc6UhfTqTGQMm185gN9tWYjGiPg8A0E1xpQXRARXdHxVMdRn6tkpslcR9t8I9efX-i1cGO9WKI')",
              }}
            ></div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                  Recibido
                </span>
                <div className="flex items-center text-[#85667f] dark:text-[#a3879d] text-xs font-medium">
                  <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                  15 min
                </div>
              </div>
              <h4 className="text-lg font-bold leading-tight text-[#171216] dark:text-white mb-3">
                Relevamiento de Precios Mensual
              </h4>
              <div className="space-y-2 mb-5">
                {[
                  ["person", "Juan Pérez"],
                  ["location_on", "Zona Sur - Lanús"],
                  ["category", "Rama: Almacén"],
                ].map(([icon, label]) => (
                  <div key={label} className="flex items-center text-sm text-[#5d4a59] dark:text-[#c5b3c2]">
                    <span className="material-symbols-outlined text-lg mr-2 text-primary/60">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleReview("1", "Relevamiento de Precios Mensual")}
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
              >
                <span>Revisar Relevamiento</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </article>

          <article className="group relative flex flex-col bg-white dark:bg-[#2d1b2a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-gray-50 dark:border-white/5 overflow-hidden">
            <div
              className="h-36 w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBE5bR9VbcbzPyYAaaQFXqaTr0W3B1vZcv5IS1l36eeO9ik0q7jMtDfxmjH3qRKZq4pdRxmKQug7diDDLT0mNp_Puy_Js5n3FhsTknTZ3G1OPR3hcmFwtB9H-wpZ_ymNj2sy92QhzJpH1bAQKbHr0BcelFlT2WKAWqfa1tyOkEv-jD9eO6m1HKbAjFGzlbeiAiBl9iE0ugnwKQ0IgcrgTR2y9ZyNiA0stZQQQ0iHBPji31xFd2j7l6hBHkXl8rGiunU6J8ZQakgPxY')",
              }}
            ></div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                  En Revisión
                </span>
                <div className="flex items-center text-[#85667f] dark:text-[#a3879d] text-xs font-medium">
                  <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                  2 horas
                </div>
              </div>
              <h4 className="text-lg font-bold leading-tight text-[#171216] dark:text-white mb-3">Censo de Infraestructura</h4>
              <div className="space-y-2 mb-5">
                {[
                  ["person", "María García"],
                  ["location_on", "Zona Oeste - Morón"],
                  ["diversity_3", "Rama: Sociocomunitaria"],
                ].map(([icon, label]) => (
                  <div key={label} className="flex items-center text-sm text-[#5d4a59] dark:text-[#c5b3c2]">
                    <span className="material-symbols-outlined text-lg mr-2 text-primary/60">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleReview("2", "Censo de Infraestructura")}
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
              >
                <span>Continuar Revisión</span>
                <span className="material-symbols-outlined text-xl">edit_note</span>
              </button>
            </div>
          </article>

          <div className="flex items-center p-4 bg-white dark:bg-[#2d1b2a] rounded-2xl shadow-sm border border-gray-50 dark:border-white/5">
            <div className="size-14 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center mr-4">
              <span className="material-symbols-outlined text-2xl text-[#85667f]">assignment_late</span>
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-bold text-[#171216] dark:text-white truncate">Relevamiento de Comedores</h5>
              <p className="text-xs text-[#85667f] dark:text-[#a3879d] truncate">Carlos Sosa • San Martín</p>
            </div>
            <button
              onClick={() => handleReview("3", "Relevamiento de Comedores")}
              className="ml-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg uppercase"
            >
              Revisar
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center pb-10">
          <p className="text-xs font-medium text-[#85667f]/60 dark:text-[#a3879d]/40 flex items-center gap-1">
            Desliza hacia abajo para actualizar
            <span className="material-symbols-outlined text-xs">south</span>
          </p>
        </div>
      </main>
    </div>
  );
}
