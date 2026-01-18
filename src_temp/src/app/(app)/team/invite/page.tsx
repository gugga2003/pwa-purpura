"use client";

import { useState } from "react";
import Link from "next/link";

import { appStore, useAppStore } from "@/lib/store";

export default function TeamInvitePage() {
  const invites = useAppStore((state) => state.invites);
  const [emails, setEmails] = useState("");
  const [role, setRole] = useState("Colaborador");
  const [territory, setTerritory] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const list = emails
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    if (!list.length) return;

    list.forEach((email) => {
      appStore.addInvite({
        email,
        role: role || "Colaborador",
        territory: territory || "Zona Norte",
      });
    });
    setEmails("");
    void fetch("/api/invites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emails: list, role, territory }),
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-main font-manrope antialiased">
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 px-4 py-3">
        <div className="flex items-center justify-between max-w-lg mx-auto w-full">
          <Link
            href="/team"
            className="flex items-center justify-center p-2 -ml-2 text-text-main dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight text-text-main dark:text-white text-center">
            Invitar al Equipo
          </h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="flex-1 w-full max-w-lg mx-auto px-4 pb-8 overflow-y-auto no-scrollbar space-y-6">
        <div className="w-full flex justify-center py-6">
          <div className="relative w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center overflow-hidden">
            <div
              className="w-24 h-24 bg-contain bg-center bg-no-repeat opacity-90"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_nGXEH2AWRlN04Y7Si0D-S84QN7BQ3lOB8CoAfQ--dQp9lqzpWv0wnheG2qcQQd4FZJmltcu1lqaweGic4GWXRugCI4MYhoO_0DqE5IyeKRDR18JM0kY3aEhO1DV2Pb_eECRqk_-UwA31bgc9cg_-hKnKf0G_rqPUSxftiWFwT51hdpC6xnEi-ex6kLJAw3Mn2ld8wvrv_qhJActgn0KuUoGHHt9MVvYo-aDlKbU3wbUPv59RjlRzjRTSS09fuA3VVRjJZ3Wy4ic')",
              }}
            />
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl shadow-soft p-6 border border-white/50 dark:border-gray-700">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-text-main dark:text-gray-200" htmlFor="emails">
                Correos electronicos
              </label>
              <div className="relative">
                <textarea
                  id="emails"
                  rows={2}
                  placeholder="ejemplo@lapurpura.com, usuario@email.com..."
                  className="w-full bg-background-light dark:bg-background-dark border-0 rounded-xl px-4 py-3 text-base text-text-main dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 transition-all resize-none"
                  value={emails}
                  onChange={(event) => setEmails(event.target.value)}
                />
                <span className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </span>
              </div>
              <p className="text-xs text-gray-500 px-1">Separa multiples correos con comas.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Select label="Rol" options={["Colaborador", "Admin", "Observador"]} value={role} onChange={setRole} />
              <Select
                label="Territorio"
                options={["Seleccionar...", "Zona Norte", "Zona Centro", "Zona Sur", "Zona Global"]}
                value={territory}
                onChange={setTerritory}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <span>Enviar Invitacion</span>
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-base font-bold text-text-main dark:text-white">Invitaciones Pendientes</h3>
            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">{invites.length}</span>
          </div>
          <div className="flex flex-col gap-3">
            {invites.map((invite) => (
              <PendingInvite key={invite.id} invite={invite} />
            ))}
            {!invites.length && (
              <div className="text-center text-sm text-gray-400 py-6">No hay invitaciones pendientes.</div>
            )}
          </div>
        </section>
      </main>

      <nav className="bg-white dark:bg-[#232730] border-t border-gray-200 dark:border-gray-800 px-6 pb-6 pt-3 flex justify-between items-center text-xs font-medium z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08)]">
        <NavLink href="/home" icon="home" label="Inicio" />
        <NavLink href="/team" icon="group" label="Equipo" active />
        <Link href="/scan" className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
          <div className="size-12 -mt-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/25 border-4 border-background-light dark:border-background-dark">
            <span className="material-symbols-outlined text-[28px]">qr_code_scanner</span>
          </div>
        </Link>
        <NavLink href="/tasks" icon="assignment" label="Tareas" />
        <NavLink href="/profile" icon="person" label="Perfil" />
      </nav>
    </div>
  );
}

const Select = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-text-main dark:text-gray-200">{label}</label>
    <select
      className="w-full bg-background-light dark:bg-background-dark border-0 rounded-xl px-4 py-3 text-base text-text-main dark:text-white focus:ring-2 focus:ring-primary transition-all"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option
          key={option}
          value={option === "Seleccionar..." ? "" : option}
          disabled={option === "Seleccionar..."}
          className="text-text-main dark:text-white"
        >
          {option}
        </option>
      ))}
    </select>
  </div>
);

const PendingInvite = ({
  invite,
}: {
  invite: { id: string; email: string; role: string; sentAt: string };
}) => (
  <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-card flex items-center justify-between border border-gray-100 dark:border-gray-800">
    <div className="flex items-center gap-3 overflow-hidden">
      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0 text-gray-500 dark:text-gray-300">
        <span className="material-symbols-outlined text-[20px]">person_outline</span>
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-bold text-text-main dark:text-white truncate">{invite.email}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Enviado: {invite.sentAt} • {invite.role}
        </span>
      </div>
    </div>
    <div className="flex items-center gap-1 pl-2">
      <button className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors" title="Reenviar">
        <span className="material-symbols-outlined text-[20px]">restart_alt</span>
      </button>
      <button
        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
        title="Cancelar"
      >
        <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
  </div>
);

type NavLinkProps = {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
};

function NavLink({ href, icon, label, active }: NavLinkProps) {
  const base = "flex flex-col items-center gap-1 text-[10px] font-medium transition-colors";
  const style = active ? "text-primary" : "text-gray-400 hover:text-primary transition-colors";
  return (
    <Link href={href} className={`${base} ${style}`}>
      <span className="material-symbols-outlined text-[24px]">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
