"use client";

import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function SignaturePage() {
  const router = useRouter();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [signed, setSigned] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSign = () => {
    // Mock signature action
    setSigned(true);
  };

  const handleClear = () => {
    setSigned(false);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Documento firmado correctamente.");
      router.push("/alerts");
    }, 1500);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 text-[#171216] dark:text-white flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between max-w-md mx-auto w-full">
        <button onClick={() => router.back()} className="text-primary">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="font-bold text-lg">Firma Digital</h2>
        <div className="w-6" />
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-6 flex-1 flex flex-col w-full">
        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl flex gap-3 text-sm text-blue-700 dark:text-blue-300">
          <span className="material-symbols-outlined text-xl">draw</span>
          <p>Por favor, ingrese su firma a continuación para validar el documento <strong>#DOC-8839</strong> de conformidad.</p>
        </div>

        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 relative overflow-hidden flex items-center justify-center">
          {!signed ? (
            <button
              onClick={handleSign}
              className="text-gray-400 flex flex-col items-center gap-2 hover:text-primary transition-colors py-20 w-full"
            >
              <span className="material-symbols-outlined text-4xl">gesture</span>
              <span className="text-sm font-bold uppercase tracking-widest">Tocar para Firmar</span>
            </button>
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <p className="font-dancing-script text-6xl text-blue-600 dark:text-blue-400 rotate-[-5deg]">Juan Perez</p>
              <button
                onClick={handleClear}
                className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-700 p-2 rounded-full text-gray-500 hover:text-red-500"
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            disabled={!signed || isSubmitting}
            onClick={handleSubmit}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar Firma'}
            {!isSubmitting && <span className="material-symbols-outlined">verified_user</span>}
          </button>
        </div>
      </main>
    </div>
  );
}
