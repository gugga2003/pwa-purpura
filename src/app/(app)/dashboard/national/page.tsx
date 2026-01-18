"use client";

import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function NationalDashboardPage() {
    const router = useRouter();
    const kpis = useAppStore((state) => state.kpis);

    // Mock National Data
    const regions = [
        { name: "Cuyo", coverage: 85, active: 120, trend: "up" },
        { name: "NOA", coverage: 65, active: 80, trend: "up" },
        { name: "NEA", coverage: 40, active: 45, trend: "down" },
        { name: "Centro", coverage: 90, active: 200, trend: "stable" },
        { name: "Patagonia", coverage: 70, active: 60, trend: "up" },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 text-[#171216] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between max-w-md mx-auto">
                <button onClick={() => router.back()} className="text-primary">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h2 className="font-bold text-lg">Tablero Nacional</h2>
                <div className="w-6" />
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl text-white shadow-lg shadow-blue-900/20">
                        <p className="text-blue-100 text-xs font-bold uppercase mb-1">Total Nacional</p>
                        <h3 className="text-3xl font-black">12.4K</h3>
                        <p className="text-xs text-blue-200 mt-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            +12% esta semana
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-purple-800 p-4 rounded-2xl text-white shadow-lg shadow-primary/20">
                        <p className="text-purple-100 text-xs font-bold uppercase mb-1">Cobertura</p>
                        <h3 className="text-3xl font-black">76%</h3>
                        <p className="text-xs text-purple-200 mt-1">
                            Objetivo: 80%
                        </p>
                    </div>
                </div>

                <section>
                    <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">Rendimiento por Región</h3>
                    <div className="space-y-4">
                        {regions.map((region) => (
                            <div key={region.name} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">{region.name}</h4>
                                        <p className="text-xs text-gray-500">{region.active} activos</p>
                                    </div>
                                    <span className={`text-xs font-bold flex items-center gap-1 ${region.trend === 'up' ? 'text-green-500' :
                                            region.trend === 'down' ? 'text-red-500' : 'text-gray-400'
                                        }`}>
                                        {region.coverage}%
                                        <span className="material-symbols-outlined text-sm">
                                            {region.trend === 'up' ? 'trending_up' : region.trend === 'down' ? 'trending_down' : 'remove'}
                                        </span>
                                    </span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${region.coverage > 80 ? 'bg-green-500' :
                                                region.coverage > 50 ? 'bg-primary' : 'bg-red-500'
                                            }`}
                                        style={{ width: `${region.coverage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
