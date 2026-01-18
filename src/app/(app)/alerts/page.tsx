"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppStore } from "@/lib/store";

const alertIcons = {
  system: { icon: "emergency_home", color: "text-primary", bg: "bg-primary/10" },
  security: { icon: "priority_high", color: "text-amber-600", bg: "bg-amber-100" },
  news: { icon: "alternate_email", color: "text-blue-600", bg: "bg-blue-100" },
} as const;

export default function AlertsHubPage() {
  const alerts = useAppStore((state) => state.alerts);
  const markAlertAsRead = useAppStore((state) => state.markAlertAsRead);

  const handleMarkAllRead = () => {
    alerts.forEach((alert) => markAlertAsRead(alert.id));
  };

  const [activeTab, setActiveTab] = useState<"alerts" | "notifications">("alerts");

  const filteredAlerts = alerts.filter(a => {
    if (activeTab === "alerts") return a.type === "warning" || a.type === "error" || a.type === "security";
    return a.type === "info" || a.type === "news" || a.type === "system";
  });

  return (
    <main className="pb-24">
      <div className="px-4 py-4 bg-white dark:bg-background-dark">
        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
          <button
            onClick={() => setActiveTab("alerts")}
            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all text-sm font-semibold ${activeTab === 'alerts' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary' : 'text-[#85667f] dark:text-gray-400'}`}
          >
            <span className="truncate">Alertas del Sistema</span>
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all text-sm font-semibold ${activeTab === 'notifications' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary' : 'text-[#85667f] dark:text-gray-400'}`}
          >
            <span className="truncate">Notificaciones</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h3 className="text-[#171216] dark:text-white text-base font-bold tracking-tight">
          {activeTab === "alerts" ? "Alertas Críticas" : "Novedades"}
        </h3>
        {activeTab === "alerts" && (
          <span className="bg-red-500/10 text-red-500 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
            En Vivo
          </span>
        )}
      </div>

      {activeTab === "alerts" && (
        <div className="px-4 py-2">
          <div className="relative overflow-hidden flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm border-l-4 border-primary">
            <div className="flex flex-[3_3_0px] flex-col gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-sm">emergency_home</span>
                  <p className="text-primary text-[11px] font-bold uppercase tracking-wider">Inactividad Detectada</p>
                </div>
                <p className="text-[#171216] dark:text-white text-[15px] font-bold leading-snug">
                  Territorio: Norte - Rama: Logística
                </p>
                <p className="text-[#85667f] dark:text-gray-400 text-sm font-medium">
                  Sin actividad detectada hace <span className="text-primary font-bold">3h 12m</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-semibold transition-transform active:scale-95 shadow-md shadow-primary/20"
                  href="/incidents/new"
                >
                  Intervenir
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 pt-8 pb-2 flex items-center justify-between">
        <h3 className="text-[#171216] dark:text-white text-base font-bold tracking-tight">Actividad Reciente</h3>
        <button className="text-primary text-[13px] font-semibold" onClick={handleMarkAllRead}>
          Marcar leídas
        </button>
      </div>

      <div className="px-4 space-y-3">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert) => (
            <button
              key={alert.id}
              onClick={() => markAlertAsRead(alert.id)}
              className={`w-full text-left flex gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm items-start active:scale-[0.98] transition-transform ${alert.isRead ? "opacity-60 grayscale-[0.5]" : ""}`}
            >
              <div className={`size-10 rounded-full flex items-center justify-center shrink-0 ${alert.type === 'error' ? 'bg-red-100 text-red-600' :
                alert.type === 'warning' ? 'bg-amber-100 text-amber-600' :
                  'bg-blue-100 text-blue-600'}`}>
                <span className="material-symbols-outlined text-[20px]">
                  {alert.type === 'error' ? 'report' : alert.type === 'warning' ? 'priority_high' : 'info'}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm text-[#171216] dark:text-white">
                  <span className="font-bold">{alert.title}</span> {alert.message && <span>- {alert.message}</span>}
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium lowercase">
                  {alert.date} {alert.isRead ? "(Leído)" : ""}
                </p>
              </div>
            </button>
          ))
        ) : (
          <div className="text-center text-sm text-gray-400 py-10 font-medium">No hay alertas en esta categoría.</div>
        )}
      </div>

      <div className="mt-8 px-4 text-center">
        <div className="inline-flex items-center gap-2 text-gray-400 dark:text-gray-500 opacity-50">
          <span className="material-symbols-outlined text-sm">verified_user</span>
          <span className="text-[10px] font-black tracking-widest uppercase">Monitoreo Seguro Activo</span>
        </div>
      </div>
    </main>
  );
}
