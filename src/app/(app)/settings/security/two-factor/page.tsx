"use client";

import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TwoFactorPage() {
    const router = useRouter();
    const [enabled, setEnabled] = useState(false);
    const [step, setStep] = useState<"initial" | "qr" | "verify">("initial");
    const [code, setCode] = useState("");

    const handleEnable = () => {
        setStep("qr");
    };

    const handleVerify = () => {
        if (code.length !== 6) return alert("Código inválido");
        // Mock verification
        setTimeout(() => {
            setEnabled(true);
            setStep("initial");
            alert("Autenticación de dos pasos activada correctamente.");
        }, 1000);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 text-[#171216] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between max-w-md mx-auto">
                <button onClick={() => router.back()} className="text-primary">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h2 className="font-bold text-lg">Seguridad</h2>
                <div className="w-6" />
            </header>

            <main className="max-w-md mx-auto px-4 pt-6 space-y-6">

                {step === "initial" && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center space-y-4">
                        <div className={`size-20 mx-auto rounded-full flex items-center justify-center ${enabled ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                            <span className="material-symbols-outlined text-4xl">lock</span>
                        </div>
                        <h3 className="text-xl font-bold">Autenticación de Dos Pasos</h3>
                        <p className="text-sm text-gray-500">
                            {enabled
                                ? "Tu cuenta está protegida. Se solicitará un código adicional al iniciar sesión."
                                : "Añade una capa extra de seguridad a tu cuenta requiriendo un código al ingresar."}
                        </p>

                        {enabled ? (
                            <button
                                onClick={() => setEnabled(false)}
                                className="w-full py-3 border-2 border-red-100 text-red-600 font-bold rounded-xl hover:bg-red-50"
                            >
                                Desactivar
                            </button>
                        ) : (
                            <button
                                onClick={handleEnable}
                                className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30"
                            >
                                Activar Ahora
                            </button>
                        )}
                    </div>
                )}

                {step === "qr" && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center space-y-6">
                        <h3 className="font-bold text-lg">Escanea este código QR</h3>
                        <div className="size-48 bg-gray-200 mx-auto rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-gray-400 text-6xl">qr_code_2</span>
                        </div>
                        <p className="text-xs text-gray-500 px-4">Utiliza Google Authenticator o Authy para escanear este código y generar tu token.</p>
                        <button
                            onClick={() => setStep("verify")}
                            className="w-full py-3 bg-primary text-white font-bold rounded-xl"
                        >
                            Continuar
                        </button>
                    </div>
                )}

                {step === "verify" && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center space-y-6">
                        <h3 className="font-bold text-lg">Verifica el código</h3>
                        <p className="text-sm text-gray-500">Ingresa el código de 6 dígitos generado por tu aplicación.</p>

                        <input
                            type="text"
                            maxLength={6}
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full text-center text-3xl tracking-[0.5em] font-bold border-b-2 border-gray-200 focus:border-primary outline-none py-2 bg-transparent"
                            placeholder="000000"
                        />

                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep("qr")}
                                className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-600"
                            >
                                Atrás
                            </button>
                            <button
                                onClick={handleVerify}
                                disabled={code.length < 6}
                                className="flex-1 py-3 bg-primary text-white font-bold rounded-xl disabled:opacity-50"
                            >
                                Verificar
                            </button>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}
