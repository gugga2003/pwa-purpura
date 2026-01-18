"use client";

import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SupportPage() {
    const router = useRouter();
    const user = useAppStore((state) => state.user);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!subject.trim() || !message.trim()) return;

        setSending(true);
        // Simulate API call
        setTimeout(() => {
            setSending(false);
            alert("Ticket creado con éxito. Te contactaremos pronto.");
            router.back();
        }, 1500);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 text-[#171216] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between max-w-md mx-auto">
                <button onClick={() => router.back()} className="text-primary">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h2 className="font-bold text-lg">Ayuda y Soporte</h2>
                <div className="w-6" />
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">headset_mic</span>
                    <div>
                        <h3 className="font-bold text-blue-900 dark:text-blue-100">¿Necesitas ayuda?</h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                            Completa el formulario y nuestro equipo de soporte técnico revisará tu caso.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Asunto</label>
                        <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                            required
                        >
                            <option value="" disabled>Selecciona un motivo...</option>
                            <option value="access">Problemas de acceso / Login</option>
                            <option value="sync">Error de sincronización</option>
                            <option value="bug">Reportar un error (Bug)</option>
                            <option value="feature">Sugerencia de mejora</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Describe tu problema con el mayor detalle posible..."
                            className="w-full h-32 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                            required
                        ></textarea>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-xs text-gray-500 font-mono border border-dashed border-gray-200 dark:border-gray-700">
                        <p>Datos adjuntos automáticos:</p>
                        <ul className="list-disc list-inside mt-1">
                            <li>User ID: {user?.id}</li>
                            <li>Territory: {user?.territory}</li>
                            <li>App Version: 1.0.0-beta</li>
                        </ul>
                    </div>

                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:active:scale-100"
                    >
                        {sending ? "Enviando Ticket..." : "Enviar Reporte"}
                    </button>
                </form>
            </main>
        </div>
    );
}
