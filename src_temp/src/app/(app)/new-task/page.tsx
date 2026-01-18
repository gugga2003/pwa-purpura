"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { appStore } from "@/lib/store";

export default function NewTaskPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [territory, setTerritory] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("high");
  const [dueDate, setDueDate] = useState("");
  const [subtasksTotal, setSubtasksTotal] = useState("3");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !territory.trim() || !assignee.trim()) {
      alert("Completa titulo, territorio y responsable.");
      return;
    }

    const taskPayload = {
      title: title.trim(),
      status: "pending" as const,
      priority: priority as "low" | "medium" | "high",
      dueDate: dueDate || new Date().toISOString(),
      category: category || "Operativos",
      territory,
      assignee,
      subtasksDone: 0,
      subtasksTotal: Number(subtasksTotal) || 1,
    };

    appStore.addTask(taskPayload);
    appStore.enqueueOffline({
      type: "task",
      title: title.trim(),
    });
    void fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskPayload),
    });
    router.push("/tasks");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#171216] dark:text-white pb-24">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => router.push("/tasks")}
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Nueva Tarea
          </h2>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
        <section>
          <h3 className="text-[#171216] dark:text-white tracking-tight text-2xl font-extrabold leading-tight">
            Crear Operativo
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-normal mt-2">
            Completa los datos para registrar una nueva tarea territorial.
          </p>
        </section>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-5 space-y-4">
            <label className="flex flex-col w-full">
              <p className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-1.5 ml-1">Titulo</p>
              <input
                className="form-input w-full rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-gray-400 p-3 text-sm transition-all"
                placeholder="Ej. Relevamiento Barrio San Juan"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label className="flex flex-col w-full">
              <p className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-1.5 ml-1">Categoria</p>
              <input
                className="form-input w-full rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-gray-400 p-3 text-sm transition-all"
                placeholder="Ej. Urbanizacion"
                type="text"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </label>
            <label className="flex flex-col w-full">
              <p className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-1.5 ml-1">Territorio</p>
              <input
                className="form-input w-full rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-gray-400 p-3 text-sm transition-all"
                placeholder="Ej. Zona Norte"
                type="text"
                value={territory}
                onChange={(event) => setTerritory(event.target.value)}
              />
            </label>
            <label className="flex flex-col w-full">
              <p className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-1.5 ml-1">Responsable</p>
              <input
                className="form-input w-full rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-gray-400 p-3 text-sm transition-all"
                placeholder="Ej. Ana P."
                type="text"
                value={assignee}
                onChange={(event) => setAssignee(event.target.value)}
              />
            </label>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-5 space-y-4">
            <div className="flex flex-col">
              <p className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-3 ml-1">Prioridad</p>
              <div className="grid grid-cols-3 gap-3">
                {["high", "medium", "low"].map((level) => (
                  <label key={level} className="cursor-pointer">
                    <input
                      className="hidden peer"
                      type="radio"
                      name="priority"
                      value={level}
                      checked={priority === level}
                      onChange={() => setPriority(level)}
                    />
                    <div className="text-center py-3 rounded-lg border border-gray-200 dark:border-gray-700 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                      <p className="text-xs font-bold text-gray-700 dark:text-gray-300 peer-checked:text-primary">
                        {level === "high" ? "Alta" : level === "medium" ? "Media" : "Baja"}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col">
                <p className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-2 ml-1">Fecha limite</p>
                <input
                  className="form-input w-full rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-gray-400 p-3 text-sm transition-all"
                  type="date"
                  value={dueDate}
                  onChange={(event) => setDueDate(event.target.value)}
                />
              </label>
              <label className="flex flex-col">
                <p className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-2 ml-1">Subtareas</p>
                <input
                  className="form-input w-full rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-gray-400 p-3 text-sm transition-all"
                  type="number"
                  min={1}
                  value={subtasksTotal}
                  onChange={(event) => setSubtasksTotal(event.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-5">
            <p className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-3 ml-1">Descripcion</p>
            <textarea
              className="form-input w-full resize-none rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 min-h-[120px] placeholder:text-gray-400 p-3 text-sm transition-all"
              placeholder="Agregar notas del operativo..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>

          <button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
            type="submit"
          >
            <span className="material-symbols-outlined">add_task</span>
            Crear Operativo
          </button>
        </form>
      </main>
    </div>
  );
}
