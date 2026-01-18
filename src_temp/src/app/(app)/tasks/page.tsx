"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";

export default function TasksPage() {
  const router = useRouter();
  const tasks = useAppStore((state) => state.tasks);

  const { highPriority, completed } = useMemo(() => {
    const highPriorityTasks = tasks.filter(
      (task) => task.priority === "high" && task.status !== "done"
    );
    const completedTasks = tasks.filter((task) => task.status === "done");
    return { highPriority: highPriorityTasks, completed: completedTasks };
  }, [tasks]);

  const formatDueDate = (value: string) => {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
    });
  };

  const statusBadge = (status: string) => {
    if (status === "in_progress") {
      return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100";
    }
    if (status === "pending") {
      return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-100";
    }
    return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300";
  };

  const statusLabel = (status: string) => {
    if (status === "in_progress") return "En Proceso";
    if (status === "pending") return "Pendiente";
    return "Finalizado";
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white min-h-screen">
      <header className="sticky top-0 z-50 ios-blur border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">account_tree</span>
            <h1 className="text-xl font-extrabold tracking-tight">Tareas y Operativos</h1>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
          <div className="flex h-9 shrink-0 items-center justify-center rounded-full bg-primary text-white px-5 shadow-sm">
            <p className="text-sm font-semibold">Todas</p>
          </div>
          <div className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-5 shadow-sm">
            <p className="text-sm font-medium">Urgentes</p>
          </div>
          <div className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-5 shadow-sm">
            <p className="text-sm font-medium">Territorio</p>
          </div>
          <div className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-5 shadow-sm">
            <p className="text-sm font-medium">Asignadas</p>
          </div>
        </div>
      </header>
      <main className="pb-24 pt-4 px-4 space-y-6">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 px-1">
            Prioridad Alta
          </h3>
          <div className="space-y-4">
            {highPriority.map((task) => {
              const percent = task.subtasksTotal
                ? Math.round((task.subtasksDone / task.subtasksTotal) * 100)
                : 0;
              return (
                <div
                  key={task.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-50 dark:border-gray-700"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${statusBadge(
                          task.status
                        )}`}
                      >
                        {statusLabel(task.status)}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        Vence: {formatDueDate(task.dueDate)}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold leading-snug mb-3">{task.title}</h4>
                    <div className="grid grid-cols-2 gap-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined text-sm">domain</span>
                        <span className="text-sm">{task.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span className="text-sm">{task.territory}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined text-sm">person</span>
                        <span className="text-sm">{task.assignee}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-gray-500">Progreso</span>
                        <span className="text-primary">
                          {task.subtasksDone}/{task.subtasksTotal} subtareas
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${percent}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Hecho</h3>
            <span className="text-[10px] px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full font-bold">
              {completed.length}
            </span>
          </div>
          {completed.map((task) => (
            <div
              key={task.id}
              className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4 border border-dashed border-gray-300 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-md font-semibold text-gray-400 dark:text-gray-500 line-through">
                    {task.title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    Finalizado por {task.assignee} - {formatDueDate(task.dueDate)}
                  </p>
                </div>
                <span className="material-symbols-outlined text-green-500">check_circle</span>
              </div>
            </div>
          ))}
        </section>
      </main>
      <button
        className="fixed right-6 bottom-24 size-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        onClick={() => router.push("/new-task")}
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
      <nav className="fixed bottom-0 left-0 right-0 ios-blur border-t border-gray-200 dark:border-gray-800 px-6 pb-6 pt-3 flex justify-between items-center z-50">
        <div
          className="flex flex-col items-center gap-1 group"
          role="button"
          tabIndex={0}
          onClick={() => router.push("/home")}
          onKeyDown={(event) => event.key === "Enter" && router.push("/home")}
        >
          <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">home</span>
          <span className="text-[10px] font-bold text-gray-400">Inicio</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-primary">assignment</span>
          <span className="text-[10px] font-bold text-primary">Operativos</span>
        </div>
        <div
          className="flex flex-col items-center gap-1 group"
          role="button"
          tabIndex={0}
          onClick={() => router.push("/map")}
          onKeyDown={(event) => event.key === "Enter" && router.push("/map")}
        >
          <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">map</span>
          <span className="text-[10px] font-bold text-gray-400">Mapa</span>
        </div>
        <div
          className="flex flex-col items-center gap-1 group"
          role="button"
          tabIndex={0}
          onClick={() => router.push("/profile")}
          onKeyDown={(event) => event.key === "Enter" && router.push("/profile")}
        >
          <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">person</span>
          <span className="text-[10px] font-bold text-gray-400">Perfil</span>
        </div>
      </nav>
      <div className="fixed bottom-20 right-4">
        <button
          className="bg-primary/20 backdrop-blur-md text-primary p-3 rounded-full shadow-lg border border-primary/20 active:scale-90 transition-transform"
          onClick={() => router.push("/map")}
        >
          <span className="material-symbols-outlined">near_me</span>
        </button>
      </div>
    </div>
  );
}
