"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RevokePage() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);

  const handleRevoke = () => {
    if (!confirmed) return;
    setIsRevoking(true);
    setTimeout(() => {
      setIsRevoking(false);
      alert("El acceso ha sido revocado y el usuario notificado.");
      router.push("/home");
    }, 2000);
  };

  return (
    <div className="bg-red-50 dark:bg-red-950/20 min-h-screen text-[#171216] dark:text-white flex flex-col">
      <header className="sticky top-0 z-50 p-4 flex justify-between items-center max-w-md mx-auto w-full">
        <button onClick={() => router.back()} className="text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined">close</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-full p-6 shadow-xl mb-6">
          <span className="material-symbols-outlined text-6xl text-red-500">gavel</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 dark:text-red-50 mb-2">REVOCAR ACCESO</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xs text-sm leading-relaxed">
          Esta acción bloqueará inmediatamente al usuario <strong>Juan Pérez</strong> del sistema y eliminará sus permisos territoriales.
        </p>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-left w-full mb-8 border border-red-100 dark:border-red-900/30">
          <h4 className="font-bold text-xs uppercase text-gray-400 mb-3">CONSECUENCIAS</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-red-500 text-lg">block</span>
              <span>Acceso denegado a la app</span>
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-red-500 text-lg">folder_off</span>
              <span>Wipe remoto de datos offline</span>
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-red-500 text-lg">mail</span>
              <span>Notificación legal enviada</span>
            </li>
          </ul>
        </div>

        <label className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl w-full cursor-pointer border-2 border-transparent has-[:checked]:border-red-500 transition-colors">
          <input
            type="checkbox"
            className="size-5 accent-red-600"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span className="text-sm font-bold">Entiendo y confirmo la acción</span>
        </label>
      </main>

      <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pb-8">
        <button
          disabled={!confirmed || isRevoking}
          onClick={handleRevoke}
          className="w-full bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-600/30 disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
        >
          {isRevoking ? 'Procesando...' : 'Ejecutar Baja Definitiva'}
        </button>
      </div>
    </div>
  );
}
