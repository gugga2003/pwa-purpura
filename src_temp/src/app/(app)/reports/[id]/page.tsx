"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { useAppStore } from "@/lib/store";

const findings = [
  {
    title: "Puerta trasera bloqueada",
    time: "10:45 AM",
    description:
      "Obstruccion por cajas de carton en salida de emergencia sur. Se requiere limpieza inmediata.",
    color: "red",
    icon: "door_back",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCULvrR1lJtnenGqB79xkiuRj2qOA2D48XL7jFKelvG_hPnWd8_WfCMlVuM9_44OfTPad5vw85XebOQEP3LTZZecwrInZVgBqvAfJ2LiBTfdiIKVwyLEyLv49DTKrjKFDpE3WQrNIjW2ZC3M-h4W3BiDkSOxgMhnok3_oLi23k1Yxu2yRHjcumH6w2ulqcsJQY-3qRocc17kNkA5ZHMaIXRL4PIRXAKR4Dz0XcrbvMCYuRD353Kf5FyfVEQ_8eJcJPqrs_XB_GU0RI",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMMVWED96hMATNNY6V1hR7AnmkvygXeXbc2VqIlkMADNOkIZroOjfDwcYhPc9eI8sLCLSiIKptAeY4g4uZsX53Trwo26F6v2Dak2-ha-LzG4G8ZTqcP39D-0XvnMYpsPmGgvaQ5op8eNMG-RyJ2-xozW7S22o7Lc-sRLBtjkTmJ8cF7fKPuKe9neghZD8rbfLu3V85WSvwNQebGG-K3NOPm8t480n-970jJ88z2hfXE6JDnspwDCUbgLAtloMlQG9IYAu-bpRsCIc",
    ],
  },
  {
    title: "Extintor vencido",
    time: "11:02 AM",
    description: "Fecha de caducidad pasada en equipo #402. Ultima revision fue hace 14 meses.",
    color: "orange",
    icon: "fire_extinguisher",
  },
  {
    title: "Luces parpadeantes",
    time: "11:15 AM",
    description: "Pasillo central, riesgo de corto. Se reporto a mantenimiento electrico.",
    color: "yellow",
    icon: "electric_bolt",
  },
  {
    title: "Senalizacion Correcta",
    time: "11:30 AM",
    description: "Todas las senales de seguridad en la zona de carga estan visibles y en buen estado.",
    color: "green",
    icon: "check_circle",
  },
];

const colorMap: Record<string, string> = {
  red: "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  orange: "border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  yellow: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  green: "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300",
};

const statusBadge = {
  resolved: {
    label: "Completado",
    badge: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300",
  },
  pending: {
    label: "Pendiente",
    badge: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300",
  },
  critical: {
    label: "Critico",
    badge: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300",
  },
} as const;

export default function ReportDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";
  const report = useAppStore((state) => state.reports.find((item) => item.id === id));
  const badge = report ? statusBadge[report.status] : statusBadge.pending;

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 pb-24">
      <header className="sticky top-0 z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center justify-between transition-colors duration-300">
        <Link
          href="/reports"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-800 dark:text-white"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <h1 className="text-base font-bold text-slate-900 dark:text-white truncate mx-2">Detalle de Reporte</h1>
        <button className="text-primary font-bold text-sm tracking-wide hover:opacity-80 transition-opacity">Ayuda</button>
      </header>

      <main className="flex-1 px-4 pt-6 space-y-6 max-w-lg mx-auto w-full">
        <section className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-soft relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[120px] leading-none text-primary">assignment_turned_in</span>
          </div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badge.badge}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {badge.label}
              </span>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">ID: {report?.id ?? id}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
              {report?.title ?? "Reporte no encontrado"}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {report?.territory ?? "Territorio sin datos"}
            </p>
            <div className="mt-6 flex gap-3">
              <button
                className="flex-1 flex items-center justify-center gap-2 h-11 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-xl transition-all shadow-sm shadow-primary/20"
                onClick={() => router.push("/reports-export")}
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                Exportar PDF
              </button>
              <button className="flex-none flex items-center justify-center w-11 h-11 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-3 gap-3">
            <StatCard title="Hallazgos" value="12" />
            <StatCard title="Duracion" value="45m" sub="text-sm" />
            <PriorityCard />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Detalles del Recorrido</h3>
            <Link className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors" href="/map">
              Ver mapa
            </Link>
          </div>
          {findings.map((finding) => (
            <FindingCard key={finding.title} finding={finding} />
          ))}
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 pb-safe pt-2 px-6 z-40">
        <div className="flex justify-between items-center max-w-lg mx-auto h-16">
          <NavItem icon="grid_view" label="Inicio" href="/home" />
          <NavItem icon="description" label="Reportes" active href="/reports" />
          <Link
            href="/reports-export"
            className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 -mt-8 hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-white text-[28px]">add</span>
          </Link>
          <NavItem icon="notifications" label="Alertas" href="/alerts" />
          <NavItem icon="person" label="Perfil" href="/profile" />
        </div>
        <div className="h-5 w-full bg-transparent"></div>
      </nav>
    </div>
  );
}

function StatCard({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-soft flex flex-col items-center justify-center text-center gap-1 border border-transparent dark:border-slate-800">
      <span className="text-primary text-3xl font-extrabold tracking-tight">{value}</span>
      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wide">{title}</span>
      {sub && <span className={`text-slate-500 dark:text-slate-400 ${sub}`}></span>}
    </div>
  );
}

function PriorityCard() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-soft flex flex-col items-center justify-center text-center gap-1 border border-transparent dark:border-slate-800">
      <div className="flex items-center gap-1">
        <span className="material-symbols-outlined text-orange-500 text-[20px]">priority_high</span>
        <span className="text-slate-900 dark:text-slate-100 text-xl font-bold">Alta</span>
      </div>
      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wide">Prioridad</span>
    </div>
  );
}

function FindingCard({ finding }: { finding: (typeof findings)[number] }) {
  return (
    <article
      className={`group bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-card hover:shadow-md transition-shadow cursor-pointer border-l-4 ${
        colorMap[finding.color] || ""
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-white/70 dark:bg-white/10">
            <span className="material-symbols-outlined text-[18px]">{finding.icon}</span>
          </span>
          <h4 className="font-bold text-slate-900 dark:text-white text-base">{finding.title}</h4>
        </div>
        <span className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-md">
          {finding.time}
        </span>
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-[42px]">
        {finding.description}
      </p>
      {finding.images && (
        <div className="mt-3 pl-[42px] flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {finding.images.map((src) => (
            <div key={src} className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
              <img className="h-full w-full object-cover" src={src} alt={finding.title} />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function NavItem({ icon, label, active, href }: { icon: string; label: string; active?: boolean; href: string }) {
  const base = "flex flex-col items-center gap-1 w-16 text-[10px] font-medium transition-colors";
  const activeStyle = "text-primary";
  const defaultStyle = "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200";
  return (
    <Link className={`${base} ${active ? activeStyle : defaultStyle}`} href={href}>
      <span className="material-symbols-outlined text-[26px]">{icon}</span>
      <span className="font-bold">{label}</span>
    </Link>
  );
}
