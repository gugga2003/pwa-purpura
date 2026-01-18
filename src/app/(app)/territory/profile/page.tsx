"use client";

import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function TerritoryProfilePage() {
    const user = useAppStore((state) => state.user);
    const router = useRouter();

    // Mock data specifically for territory profile
    const stats = [
        { label: "Población", value: "12,450" },
        { label: "Manzanas", value: "45" },
        { label: "Referentes", value: "8" },
        { label: "Instituciones", value: "12" },
    ];

    const referents = [
        { name: "Lucia Mendes", role: "Coord. Barrial", phone: "+54 9 261 555-0012" },
        { name: "Carlos Saez", role: "Enlace Municipal", phone: "+54 9 261 555-0034" },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 text-[#171216] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between max-w-md mx-auto">
                <button onClick={() => router.back()} className="text-primary">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h2 className="font-bold text-lg">Perfil del Territorio</h2>
                <div className="w-6" />
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
                <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 text-white shadow-xl shadow-primary/30">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="size-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="material-symbols-outlined text-3xl">map</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{user?.territory || "Territorio General"}</h2>
                            <p className="text-white/80 text-sm font-medium">Zona Operativa Activa</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                            <p className="text-xs text-white/70 uppercase font-bold">Estado</p>
                            <p className="text-lg font-bold flex items-center gap-1">
                                <span className="size-2 rounded-full bg-green-400 animate-pulse"></span>
                                Operativo
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                            <p className="text-xs text-white/70 uppercase font-bold">Cobertura</p>
                            <p className="text-lg font-bold">85%</p>
                        </div>
                    </div>
                </div>

                <section>
                    <h3 className="font-bold text-lg mb-3 px-1 text-gray-800 dark:text-gray-200">Indicadores Clave</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <p className="text-gray-500 text-xs font-bold uppercase">{stat.label}</p>
                                <p className="text-2xl font-black text-primary mt-1">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-3 px-1">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Referentes de Zona</h3>
                        <button className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded-md">Ver todos</button>
                    </div>
                    <div className="space-y-3">
                        {referents.map((ref, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 font-bold">
                                        {ref.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-gray-900 dark:text-gray-100">{ref.name}</p>
                                        <p className="text-xs text-gray-500">{ref.role}</p>
                                    </div>
                                </div>
                                <a href={`tel:${ref.phone}`} className="size-9 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-lg">call</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
