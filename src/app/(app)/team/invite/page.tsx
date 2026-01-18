"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InviteTeamPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("field_officer");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInvite = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setIsSubmitting(true);
        // Mock invite delay
        setTimeout(() => {
            setIsSubmitting(false);
            alert(`Invitación enviada a ${email}`);
            router.push("/team");
        }, 1500);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#171216] dark:text-white antialiased flex flex-col">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between px-4 py-4">
                    <Link href="/team" className="text-primary text-base font-medium">
                        Cancelar
                    </Link>
                    <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-12">
                        Invitar Miembro
                    </h2>
                </div>
            </header>

            <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
                <form onSubmit={handleInvite} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Correo Electrónico</label>
                        <input
                            type="email"
                            required
                            placeholder="ejemplo@lapurpura.com"
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-base focus:border-primary focus:ring-1 focus:ring-primary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Rol Asignado</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setRole("field_officer")}
                                className={`py-3 rounded-xl border-2 text-xs font-bold uppercase tracking-wider transition-all ${role === 'field_officer' ? 'border-primary bg-primary/5 text-primary' : 'border-transparent bg-gray-100 dark:bg-gray-800 text-gray-500'}`}
                            >
                                Operativo
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole("admin")}
                                className={`py-3 rounded-xl border-2 text-xs font-bold uppercase tracking-wider transition-all ${role === 'admin' ? 'border-primary bg-primary/5 text-primary' : 'border-transparent bg-gray-100 dark:bg-gray-800 text-gray-500'}`}
                            >
                                Administrador
                            </button>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex gap-3 text-sm text-blue-700 dark:text-blue-300">
                        <span className="material-icons-round text-xl">info</span>
                        <p>El usuario recibirá un correo con un enlace temporal para activar su cuenta y configurar su contraseña.</p>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className={`w-full py-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 transition-all ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:scale-[1.02] active:scale-95'}`}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Invitación'}
                    </button>
                </form>
            </main>
        </div>
    );
}
