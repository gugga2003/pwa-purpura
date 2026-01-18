"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Question {
    id: string;
    text: string;
    type: "text" | "choice";
    options?: string[];
}

export default function SurveyBuilderPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentType, setCurrentType] = useState<"text" | "choice">("text");

    const addQuestion = () => {
        const newQ: Question = {
            id: Math.random().toString(36).substr(2, 9),
            text: "",
            type: currentType,
            options: currentType === "choice" ? [""] : undefined,
        };
        setQuestions([...questions, newQ]);
    };

    const updateQuestionText = (id: string, text: string) => {
        setQuestions(questions.map((q) => (q.id === id ? { ...q, text } : q)));
    };

    const addOption = (qId: string) => {
        setQuestions(
            questions.map((q) =>
                q.id === qId ? { ...q, options: [...(q.options || []), ""] } : q
            )
        );
    };

    const updateOptionText = (qId: string, optIndex: number, text: string) => {
        setQuestions(
            questions.map((q) =>
                q.id === qId && q.options
                    ? {
                        ...q,
                        options: q.options.map((o, i) => (i === optIndex ? text : o)),
                    }
                    : q
            )
        );
    };

    const removeQuestion = (id: string) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    const handleSave = () => {
        if (!title.trim()) return alert("El título es obligatorio");
        if (questions.length === 0) return alert("Agrega al menos una pregunta");

        // Mock saving template
        console.log({ title, questions });
        alert("Plantilla guardada correctamente (Local)");
        router.push("/tasks");
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 text-[#171216] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between max-w-md mx-auto">
                <button onClick={() => router.back()} className="text-primary">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h2 className="font-bold text-lg">Constructor de Relevamiento</h2>
                <div className="w-6" />
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
                <div className="space-y-4">
                    <label className="block">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Título del Formulario</span>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ej. Censo Comercial 2024"
                            className="mt-1 w-full px-4 py-3 rounded-xl border-none bg-white dark:bg-gray-800 shadow-sm focus:ring-2 focus:ring-primary"
                        />
                    </label>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">Preguntas ({questions.length})</h3>
                        <div className="flex gap-2 text-xs">
                            <button
                                onClick={() => { setCurrentType("text"); addQuestion(); }}
                                className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg font-bold hover:bg-primary/20"
                            >
                                + Texto
                            </button>
                            <button
                                onClick={() => { setCurrentType("choice"); addQuestion(); }}
                                className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg font-bold hover:bg-primary/20"
                            >
                                + Opción
                            </button>
                        </div>
                    </div>

                    {questions.map((q, index) => (
                        <div key={q.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative group">
                            <div className="flex justify-between items-start gap-2 mb-2">
                                <span className="text-xs font-bold text-gray-400">P{index + 1} • {q.type === 'text' ? 'Texto Libre' : 'Opción Múltiple'}</span>
                                <button onClick={() => removeQuestion(q.id)} className="text-gray-400 hover:text-red-500">
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                </button>
                            </div>
                            <input
                                type="text"
                                value={q.text}
                                onChange={(e) => updateQuestionText(q.id, e.target.value)}
                                placeholder="Escribe la pregunta..."
                                className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-2 font-medium focus:outline-none focus:border-primary placeholder:text-gray-400"
                            />

                            {q.type === 'choice' && (
                                <div className="mt-3 space-y-2 pl-2 border-l-2 border-gray-100 dark:border-gray-700">
                                    {q.options?.map((opt, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-gray-400 text-sm">radio_button_unchecked</span>
                                            <input
                                                type="text"
                                                value={opt}
                                                onChange={(e) => updateOptionText(q.id, i, e.target.value)}
                                                placeholder={`Opción ${i + 1}`}
                                                className="flex-1 bg-transparent text-sm py-1 focus:outline-none text-gray-600 dark:text-gray-300"
                                            />
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => addOption(q.id)}
                                        className="text-xs text-primary font-bold pl-6 mt-1 hover:underline"
                                    >
                                        + Agregar opción
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}

                    {questions.length === 0 && (
                        <div className="text-center py-10 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                            <p className="text-gray-400 text-sm">Empieza agregando una pregunta</p>
                        </div>
                    )}
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 p-4 border-t border-gray-100 dark:border-gray-800 z-50 backdrop-blur-md">
                <button
                    onClick={handleSave}
                    className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                >
                    Guardar Plantilla
                </button>
            </div>
        </div>
    );
}
