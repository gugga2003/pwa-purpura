"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { appStore } from "@/lib/store";

export default function DraftNewPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const safeTitle = title.trim();
    const safeContent = content.trim();
    if (!safeTitle || !safeContent) {
      return;
    }

    appStore.addDraft({ title: safeTitle, content: safeContent });
    appStore.enqueueOffline({ type: "draft", title: safeTitle });
    void fetch("/api/drafts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: safeTitle, content: safeContent }),
    });
    router.push("/drafts");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link
            href="/drafts"
            className="text-primary flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <div className="flex-1 px-3 text-center">
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">
              Nuevo borrador
            </h2>
          </div>
          <button
            className="text-primary text-sm font-bold"
            onClick={() => formRef.current?.requestSubmit()}
          >
            Guardar
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
        <section className="space-y-2">
          <h3 className="text-2xl font-extrabold tracking-tight">Redactar borrador</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Guarda avances y continua mas tarde desde la lista de borradores.
          </p>
        </section>

        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 space-y-4">
            <label className="flex flex-col w-full">
              <span className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-2">
                Titulo del borrador
              </span>
              <input
                className="form-input w-full rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-gray-400 p-3 text-sm transition-all"
                placeholder="Ej. Informe territorial Octubre"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label className="flex flex-col w-full">
              <span className="text-[#171216] dark:text-gray-300 text-sm font-semibold pb-2">
                Contenido
              </span>
              <textarea
                className="form-input w-full resize-none rounded-lg text-[#171216] dark:text-white focus:ring-2 focus:ring-primary/20 border border-[#e4dce3] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary min-h-[160px] placeholder:text-gray-400 p-3 text-sm transition-all"
                placeholder="Escribe el contenido del borrador..."
                value={content}
                onChange={(event) => setContent(event.target.value)}
              ></textarea>
            </label>
          </div>

          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-xl">info</span>
            <p className="text-xs text-primary leading-relaxed">
              Los borradores se guardan localmente y se sincronizan cuando tengas conexion.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
