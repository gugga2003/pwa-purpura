"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { appStore } from "@/lib/store";

export default function SurveyBuilderPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);

  const handleAddQuestion = () => {
    if (!question.trim()) return;
    setQuestions((prev) => [...prev, question.trim()]);
    setQuestion("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;
    if (!questions.length) return;

    appStore.addSurvey({
      title: title.trim(),
      status: "draft",
      questionsCount: questions.length,
    });
    void fetch("/api/surveys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title.trim(),
        status: "draft",
        questionsCount: questions.length,
      }),
    }).catch(() => null);
    appStore.enqueueOffline({
      type: "draft",
      title: `Encuesta: ${title.trim()}`,
    });
    router.push("/surveys/confirmation");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#171216] dark:text-white">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link
            href="/surveys/preview"
            className="text-primary flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <div className="flex-1 px-3">
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Constructor de Encuestas</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Modulo D1</p>
          </div>
          <div className="w-10"></div>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 pb-24 space-y-6">
        <section>
          <h3 className="text-2xl font-extrabold tracking-tight">Nueva encuesta</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Define el formulario y estructura las preguntas principales.
          </p>
        </section>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Titulo de la encuesta</label>
              <input
                className="h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Ej. Evaluacion territorial"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Descripcion</label>
              <textarea
                className="min-h-[120px] px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                placeholder="Objetivo general y alcance del relevamiento"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Preguntas</h4>
              <span className="text-xs font-bold text-primary">{questions.length}</span>
            </div>
            <div className="space-y-3">
              {questions.map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-semibold">{item}</p>
                  <button
                    type="button"
                    onClick={() => setQuestions((prev) => prev.filter((_, i) => i !== index))}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Agregar pregunta</label>
              <div className="flex gap-2">
                <input
                  className="flex-1 h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Escribe una nueva pregunta"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                />
                <button
                  type="button"
                  onClick={handleAddQuestion}
                  className="h-12 px-4 rounded-lg bg-primary text-white font-bold"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">publish</span>
            Guardar encuesta
          </button>
        </form>
      </main>
    </div>
  );
}
