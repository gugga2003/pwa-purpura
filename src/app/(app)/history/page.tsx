"use client";

import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";

export default function HistoryPage() {
  const router = useRouter();
  const alerts = useAppStore((state) => state.alerts);
  const tasks = useAppStore((state) => state.tasks);

  const timeline = [
    ...alerts.slice(0, 3).map((alert) => ({
      id: `alert-${alert.id}`,
      title: alert.title,
      detail: alert.message,
      time: alert.timeAgo,
      icon: "notifications",
    })),
    ...tasks.slice(0, 2).map((task) => ({
      id: `task-${task.id}`,
      title: task.title,
      detail: `Responsable: ${task.assignee}`,
      time: task.dueDate,
      icon: "assignment_turned_in",
    })),
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            className="text-primary flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
            onClick={() => router.push("/home")}
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <div className="flex-1 px-3">
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Historial</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Registro operativo</p>
          </div>
          <button
            className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
            onClick={() => router.push("/audits/traceability")}
          >
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">history</span>
          </button>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
        <section className="space-y-2">
          <h3 className="text-2xl font-extrabold tracking-tight">Actividad reciente</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Acciones sincronizadas en los ultimos eventos.
          </p>
        </section>
        <section className="space-y-3">
          {timeline.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-start gap-4"
            >
              <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#171216] dark:text-white leading-snug">
                  <span className="font-bold">{item.title}</span> - {item.detail}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">{item.time}</p>
              </div>
            </div>
          ))}
          {!timeline.length && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center text-sm text-gray-400">
              No hay eventos recientes.
            </div>
          )}
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 pt-3 pb-8 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/home")}
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Inicio</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              history
            </span>
            <span className="text-[10px] font-bold">Historial</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/alerts")}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="text-[10px] font-bold">Alertas</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/profile")}
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
