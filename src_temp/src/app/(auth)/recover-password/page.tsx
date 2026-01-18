"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RecoverPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    router.push("/recover-password/sent");
  };
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-text-main dark:text-white min-h-screen flex flex-col items-center justify-center p-6 selection:bg-primary/20 selection:text-primary">
      <div className="w-full max-w-sm flex flex-col gap-8 animate-fade-in-up">
        <div className="flex justify-center">
          <div className="h-20 w-20 bg-white dark:bg-[#333] rounded-2xl shadow-sm flex items-center justify-center p-4">
            <div className="w-full h-full bg-primary rounded-xl flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-4xl">local_florist</span>
            </div>
          </div>
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold tracking-tight">Recuperar Contraseña</h1>
          <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed max-w-[280px] mx-auto">
            Ingresa tu correo electrónico institucional. Te enviaremos un enlace para restablecer tu acceso.
          </p>
        </div>
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="relative group">
            <label className="sr-only" htmlFor="email">
              Correo electrónico
            </label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 transition-colors group-focus-within:text-primary">
                mail
              </span>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="usuario@lapurpura.com"
              className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-[#2c2c2e] border-0 ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl text-base placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none transition-all shadow-sm"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#721560] active:scale-[0.98] transition-all text-white font-bold h-14 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            <span>Enviar enlace de recuperación</span>
            <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
          </button>
        </form>
        <div className="text-center mt-2">
          <Link
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            href="/"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>
    </div>
  );
}
