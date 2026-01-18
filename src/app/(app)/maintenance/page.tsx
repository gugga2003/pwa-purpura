"use client";

import Link from "next/link";

export default function MaintenancePage() {
    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 text-center antialiased">
            <div className="size-24 bg-amber-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <span className="material-symbols-outlined text-5xl text-amber-600">engineering</span>
            </div>
            <h1 className="text-2xl font-black text-[#171216] dark:text-white mb-2">Mantenimiento</h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-xs mx-auto mb-8">
                Estamos realizando mejoras en la plataforma. Volveremos a estar operativos en breve.
            </p>

            <div className="w-full max-w-xs bg-white dark:bg-gray-800 p-4 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 text-left">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase">Estado</span>
                    <span className="text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-md">En Progreso</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[60%] rounded-full"></div>
                </div>
                <p className="text-[10px] text-gray-400 mt-2 text-right font-medium">Estimado: 45 min</p>
            </div>

            <div className="mt-12">
                <Link href="/" className="text-primary font-bold text-sm hover:underline">
                    Intentar reconectar
                </Link>
            </div>
        </main>
    );
}
