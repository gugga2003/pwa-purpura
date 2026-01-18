"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SurveyResultsPage() {
  const router = useRouter();

  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-text-main dark:text-gray-100 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="flex items-center justify-between px-4 py-3 h-14">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full active:bg-gray-100 dark:active:bg-gray-700 transition-colors text-text-main dark:text-white"
            onClick={() => router.back()}
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold text-center flex-1 truncate px-2">Resultados</h1>
          <button className="flex items-center justify-center w-10 h-10 rounded-full active:bg-gray-100 dark:active:bg-gray-700 transition-colors text-primary dark:text-primary-light">
            <span className="material-symbols-outlined text-[24px]">filter_list</span>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 pb-24 pt-4 space-y-6">
        <section className="space-y-1 animate-fade-in-up">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-text-main dark:text-white leading-tight">
                Evaluación de Servicio
              </h2>
              <p className="text-primary font-medium text-sm">Zona Norte</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mt-1">
              Completada
            </span>
          </div>
          <p className="text-text-muted dark:text-gray-400 text-sm flex items-center gap-1.5 pt-1">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            Finalizada: 14 Oct 2023
          </p>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2 bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-card border border-gray-50 dark:border-gray-800 flex items-center justify-between">
            <div>
              <p className="text-text-muted dark:text-gray-400 text-sm font-medium mb-1">Total Respuestas</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-text-main dark:text-white">1,240</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">+12%</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">groups</span>
            </div>
          </div>
          <MetricCard
            icon="percent"
            value="85%"
            label="Participación"
            color="bg-secondary/10 text-secondary"
          />
          <MetricCard
            icon="timer"
            value="4m 12s"
            label="Tiempo Promedio"
            color="bg-accent/20 text-primary"
          />
        </section>

        <section className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-card border border-gray-50 dark:border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-text-main dark:text-white">Distribución por Preferencia</h3>
            <button className="text-primary hover:bg-primary/5 rounded-full p-1 transition-colors">
              <span className="material-symbols-outlined text-[20px]">more_horiz</span>
            </button>
          </div>
          <div className="relative flex justify-center items-center py-2 h-48">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#f0f2f5" strokeWidth="12" fill="transparent" className="dark:stroke-gray-700" />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#4CCCA8"
                strokeDasharray="62.8 251.2"
                strokeWidth="12"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#CC91C2"
                strokeDasharray="75.4 251.2"
                strokeDashoffset="-62.8"
                strokeWidth="12"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#871d75"
                strokeDasharray="113 251.2"
                strokeDashoffset="-138.2"
                strokeWidth="12"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-text-main dark:text-white">45%</span>
              <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Opción A</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <LegendDot color="bg-primary" label="Opción A" />
            <LegendDot color="bg-accent" label="Opción B" />
            <LegendDot color="bg-secondary" label="Opción C" />
          </div>
        </section>

        <section className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-card border border-gray-50 dark:border-gray-800">
          <h3 className="font-bold text-lg text-text-main dark:text-white mb-6">Nivel de Satisfacción</h3>
          <div className="space-y-5">
            <Bar label="Muy Satisfecho" value="62%" width="62%" color="bg-primary" />
            <Bar label="Satisfecho" value="28%" width="28%" color="bg-accent" />
            <Bar label="Neutral" value="7%" width="7%" color="bg-secondary" />
            <Bar label="Insatisfecho" value="3%" width="3%" color="bg-gray-300 dark:bg-gray-600" />
          </div>
        </section>

        <div className="pt-2">
          <button
            className="w-full bg-primary hover:bg-primary-light active:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-float flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
            onClick={() => router.push("/reports-export")}
          >
            <span className="material-symbols-outlined">download</span>
            Descargar Reporte
          </button>
          <p className="text-center text-xs text-text-muted dark:text-gray-500 mt-3 pb-4">Exportar en formato PDF o CSV</p>
        </div>
      </main>

      <nav className="fixed bottom-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6 z-40 h-20">
        <div className="flex justify-between items-center max-w-md mx-auto h-full pb-4">
          <NavButton icon="home" label="Inicio" href="/home" />
          <NavButton icon="assignment" label="Encuestas" href="/surveys/preview" />
          <button className="flex flex-col items-center gap-1 text-primary dark:text-primary-light relative">
            <div className="absolute -top-10 bg-primary rounded-full p-3 shadow-float border-4 border-background-light dark:border-background-dark">
              <span className="material-symbols-outlined text-white text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                bar_chart
              </span>
            </div>
            <span className="text-[10px] font-bold mt-6">Resultados</span>
          </button>
          <NavButton icon="notifications" label="Avisos" href="/alerts" />
          <NavButton icon="person" label="Perfil" href="/profile" />
        </div>
      </nav>
      <div className="h-6 w-full bg-transparent" />
    </div>
  );
}

const MetricCard = ({
  icon,
  value,
  label,
  color,
}: {
  icon: string;
  value: string;
  label: string;
  color: string;
}) => (
  <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-card border border-gray-50 dark:border-gray-800 flex flex-col justify-between h-28">
    <div className={`${color} w-8 h-8 rounded-full flex items-center justify-center mb-2`}>
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
    </div>
    <div>
      <span className="text-2xl font-bold text-text-main dark:text-white">{value}</span>
      <p className="text-text-muted dark:text-gray-400 text-xs font-medium uppercase tracking-wide">{label}</p>
    </div>
  </div>
);

const LegendDot = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <span className={`w-3 h-3 rounded-full ${color}`}></span>
    <span className="text-sm text-text-muted dark:text-gray-300 font-medium">{label}</span>
  </div>
);

const Bar = ({ label, value, width, color }: { label: string; value: string; width: string; color: string }) => (
  <div>
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-semibold text-text-main dark:text-gray-200">{label}</span>
      <span className="font-bold text-text-muted dark:text-gray-400">{value}</span>
    </div>
    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width }}></div>
    </div>
  </div>
);

const NavButton = ({ icon, label, href }: { icon: string; label: string; href: string }) => (
  <Link href={href} className="flex flex-col items-center gap-1 text-text-muted dark:text-gray-400 hover:text-primary transition-colors group">
    <span
      className="material-symbols-outlined group-hover:scale-110 transition-transform"
      style={{ fontVariationSettings: "'FILL' 0" }}
    >
      {icon}
    </span>
    <span className="text-[10px] font-medium">{label}</span>
  </Link>
);
