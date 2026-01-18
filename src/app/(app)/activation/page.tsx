"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppStore } from "@/lib/store";

export default function ActivationPage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useAppStore((state) => state.user);

  const handleActivate = () => {
    if (code.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Cuenta activada con éxito para el territorio: " + (user?.territory || "Mendoza"));
    }, 1500);
  };

  return (
    <main className="flex-1 px-5 py-10 flex flex-col items-center justify-center space-y-8">
      <div className="text-center space-y-2">
        <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
        </div>
        <h1 className="text-2xl font-bold text-[#171216] dark:text-white">Activación de Cuenta</h1>
        <p className="text-sm text-gray-500 max-w-xs mx-auto">
          Ingresa el código de 6 dígitos enviado por tu coordinador territorial para activar todas las funciones.
        </p>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <div className="relative">
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="CÓDIGO"
            className="w-full h-16 bg-white dark:bg-gray-800 border-none rounded-2xl shadow-soft text-center text-3xl font-black tracking-[0.5em] text-primary placeholder:text-gray-200 dark:placeholder:text-gray-700 focus:ring-2 focus:ring-primary/30 transition-all uppercase"
          />
        </div>

        <button
          onClick={handleActivate}
          disabled={code.length < 6 || loading}
          className="w-full h-14 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="material-symbols-outlined animate-spin">sync</span>
          ) : (
            <>
              <span className="material-symbols-outlined">bolt</span>
              Activar Ahora
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-gray-400 font-medium">
          ¿No recibiste el código? <button className="text-primary font-bold" onClick={() => alert("Código reenviado a tu correo.")}>Reenviar</button>
        </p>
      </div>

      <div className="pt-10">
        <Link href="/home" className="text-gray-400 text-sm font-bold flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
