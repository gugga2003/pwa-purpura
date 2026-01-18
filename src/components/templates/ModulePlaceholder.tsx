"use client";

import { useAppStore } from "@/lib/store";

export default function GenericModulePage({ title = "Módulo en Desarrollo" }) {
    const user = useAppStore((state) => state.user);

    return (
        <div className="p-6 flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-4xl text-primary animate-pulse">construction</span>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-[#171216] dark:text-white">{title}</h1>
                <p className="text-sm text-gray-500 max-w-xs mx-auto mt-2">
                    Estamos preparando esta sección para {user?.territory || "tu zona"}.
                    Vuelve pronto para ver las novedades.
                </p>
            </div>
            <button
                onClick={() => window.history.back()}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-full font-bold shadow-lg active:scale-95 transition-all text-sm"
            >
                Regresar
            </button>
        </div>
    );
}
