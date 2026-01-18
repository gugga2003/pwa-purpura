"use client";

import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function KanbanPage() {
    const projects = useAppStore((state) => state.projects);
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"planning" | "in_progress" | "completed">("in_progress");

    const columns = {
        planning: { label: "Planificación", items: projects.filter((p) => p.status === "planning" || p.status === "on_hold") },
        in_progress: { label: "En Curso", items: projects.filter((p) => p.status === "in_progress") },
        completed: { label: "Finalizados", items: projects.filter((p) => p.status === "completed") },
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 text-[#171216] dark:text-white flex flex-col">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between max-w-md mx-auto w-full">
                <button onClick={() => router.back()} className="text-primary">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h2 className="font-bold text-lg">Tablero de Proyectos</h2>
                <div className="w-6" />
            </header>

            <div className="px-4 py-3 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 sticky top-[60px] z-40">
                <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    {(Object.keys(columns) as Array<keyof typeof columns>).map((colKey) => (
                        <button
                            key={colKey}
                            onClick={() => setActiveTab(colKey)}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === colKey ? "bg-white dark:bg-gray-700 text-primary shadow-sm" : "text-gray-500"}`}
                        >
                            {columns[colKey].label}
                            <span className="ml-1 opacity-60">({columns[colKey].items.length})</span>
                        </button>
                    ))}
                </div>
            </div>

            <main className="flex-1 max-w-md mx-auto w-full px-4 pt-4 space-y-4">
                {columns[activeTab].items.length === 0 ? (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 text-center border-2 border-dashed border-gray-100 dark:border-gray-700">
                        <p className="text-gray-400 font-medium">No hay proyectos en esta etapa.</p>
                    </div>
                ) : (
                    columns[activeTab].items.map((project) => (
                        <div key={project.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 group active:scale-[0.98] transition-transform">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${project.status === 'in_progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                        project.status === 'planning' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' :
                                            'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                    }`}>
                                    {project.status === 'in_progress' ? 'En Curso' : project.status === 'planning' ? 'Planificando' : 'Finalizado'}
                                </span>
                                <span className="text-xs text-gray-400 font-medium">Vence: {project.deadline}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                            <div className="space-y-1">
                                <div className="flex justify-between text-xs font-bold text-gray-500">
                                    <span>Progreso</span>
                                    <span>{Math.round((project.kpis.completed / project.kpis.total) * 100)}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: `${(project.kpis.completed / project.kpis.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </main>

            <div className="fixed bottom-24 right-5 z-50">
                <button className="bg-primary hover:bg-primary-dark text-white p-4 rounded-2xl shadow-xl shadow-primary/30 active:scale-95 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined">add</span>
                    <span className="font-bold text-sm">Nuevo Proyecto</span>
                </button>
            </div>
        </div>
    );
}
