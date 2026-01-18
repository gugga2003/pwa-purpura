"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useAppStore } from "@/lib/store";

const columnLabels: Record<string, string> = {
  pending: "Pendiente",
  in_progress: "En progreso",
  done: "Hecho",
};

export default function ProjectKanbanPage() {
  const tasks = useAppStore((state) => state.tasks);

  const grouped = useMemo(() => {
    return tasks.reduce(
      (acc, task) => {
        acc[task.status].push(task);
        return acc;
      },
      {
        pending: [] as typeof tasks,
        in_progress: [] as typeof tasks,
        done: [] as typeof tasks,
      }
    );
  }, [tasks]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white min-h-screen pb-32">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link
            href="/home"
            className="text-primary flex size-10 items-center justify-center bg-primary/10 rounded-full"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <div className="flex-1 px-3">
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Kanban de Proyectos</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Modulo B5</p>
          </div>
          <Link
            href="/projects/PRJ-001"
            className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          >
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">work</span>
          </Link>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
        <section className="bg-white dark:bg-gray-800 p-5 rounded-xl ios-shadow border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold">Proyecto Principal</h3>
              <p className="text-xs text-gray-500">Infraestructura Comunitaria: Zona 4</p>
            </div>
            <Link
              href="/projects/PRJ-001"
              className="text-primary text-xs font-bold uppercase tracking-widest"
            >
              Ver detalle
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">schedule</span>
            <p className="text-sm text-gray-500">Progreso general 65%</p>
          </div>
        </section>
        <section className="space-y-4">
          {Object.entries(grouped).map(([status, list]) => (
            <div key={status} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-[#171216] dark:text-white">{columnLabels[status]}</h4>
                <span className="text-[10px] text-gray-400 font-bold">{list.length} items</span>
              </div>
              <div className="space-y-3">
                {list.length === 0 ? (
                  <div className="text-xs text-gray-400 italic">Sin tareas asignadas</div>
                ) : (
                  list.map((task) => (
                    <Link
                      key={task.id}
                      href="/tasks"
                      className="block bg-background-light dark:bg-background-dark/30 rounded-lg p-3 border border-gray-100 dark:border-gray-700"
                    >
                      <p className="text-sm font-bold text-[#171216] dark:text-white">{task.title}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                          {task.territory}
                        </span>
                        <span className="text-[10px] text-gray-400 font-semibold">{task.dueDate}</span>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
      <div className="fixed bottom-20 left-0 right-0 px-4 z-40">
        <Link
          href="/new-task"
          className="w-full bg-primary text-white font-extrabold py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">add</span>
          Crear nueva tarea
        </Link>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 glass-nav border-t border-primary/10 px-6 py-3 flex justify-between items-center z-50">
        <Link href="/home" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined text-[26px]">home</span>
          <span className="text-[10px] font-bold">Inicio</span>
        </Link>
        <Link href="/map" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined text-[26px]">explore</span>
          <span className="text-[10px] font-bold">Mapa</span>
        </Link>
        <Link href="/projects/kanban" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[26px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
          <span className="text-[10px] font-bold">Proyectos</span>
        </Link>
        <Link href="/alerts" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined text-[26px]">notifications</span>
          <span className="text-[10px] font-bold">Avisos</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined text-[26px]">person</span>
          <span className="text-[10px] font-bold">Perfil</span>
        </Link>
      </nav>
    </div>
  );
}
