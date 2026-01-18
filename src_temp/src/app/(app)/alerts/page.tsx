"use client";

import Link from "next/link";

import { appStore, useAppStore } from "@/lib/store";

const alertIcons = {
  system: { icon: "emergency_home", color: "text-primary", bg: "bg-primary/10" },
  security: { icon: "priority_high", color: "text-amber-600", bg: "bg-amber-100" },
  news: { icon: "alternate_email", color: "text-blue-600", bg: "bg-blue-100" },
} as const;

export default function AlertsHubPage() {
  const alerts = useAppStore((state) => state.alerts);

  const handleMarkAllRead = () => {
    alerts.forEach((alert) => appStore.markAlertRead(alert.id));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center px-4 py-3 justify-between">
          <div className="flex items-center gap-2">
            <Link className="material-symbols-outlined text-primary text-2xl" href="/home">
              arrow_back_ios
            </Link>
          </div>
          <h1 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Centro de Alertas</h1>
          <div className="flex items-center">
            {/* TODO: Confirm target for alerts configuration */}
            <Link
              className="text-primary text-sm font-bold tracking-tight px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-colors"
              href="/settings"
            >
              Configurar
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 bg-white dark:bg-background-dark">
        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
          <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700 has-[:checked]:shadow-sm transition-all text-[#85667f] dark:text-gray-400 has-[:checked]:text-primary text-sm font-semibold">
            <span className="truncate">Alertas del Sistema</span>
            <input checked className="hidden" name="view-toggle" type="radio" value="alerts" />
          </label>
          <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700 has-[:checked]:shadow-sm transition-all text-[#85667f] dark:text-gray-400 has-[:checked]:text-primary text-sm font-semibold">
            <span className="truncate">Notificaciones</span>
            <input className="hidden" name="view-toggle" type="radio" value="notifications" />
          </label>
        </div>
      </div>
      <main className="pb-20">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <h3 className="text-[#171216] dark:text-white text-base font-bold tracking-tight">Alertas Criticas</h3>
          <span className="bg-severity-critical/10 text-severity-critical text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
            En Vivo
          </span>
        </div>
        <div className="px-4 py-2">
          <div className="relative overflow-hidden flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm border-l-4 border-severity-critical">
            <div className="flex flex-[3_3_0px] flex-col gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-severity-critical text-sm">emergency_home</span>
                  <p className="text-severity-critical text-[11px] font-bold uppercase tracking-wider">Inactividad Detectada</p>
                </div>
                <p className="text-[#171216] dark:text-white text-[15px] font-bold leading-snug">
                  Territorio: Norte - Rama: Logistica
                </p>
                <p className="text-[#85667f] dark:text-gray-400 text-sm font-medium">
                  Sin actividad detectada hace <span className="text-severity-critical font-bold">3h 12m</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-semibold transition-transform active:scale-95"
                  href="/alerts/approval"
                >
                  Intervenir
                </Link>
                <button className="flex items-center justify-center rounded-lg h-9 px-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                  <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
              </div>
            </div>
            <div
              className="w-24 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden shrink-0 border border-gray-100 dark:border-gray-700"
              data-alt="Mapa satelital de zona logistica norte"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCBi-FYQlgtL16TZUshbL5fBuDvDwrr7IGXk5zzwf-ZyDHhqJVmuR7Jz53TKyiahnhYXv45sSxEfly3C9-iZL8WEcztm_eHdttZXiZfklwqNKRUm9N07zXkagXsI8GaoivYaeDGLrwa-pwRollLUqgiLPy3w2iKEsaCss_-sqE9TsjZbXsOslyeM6y0K9TMbOqDVUkvrTHpgclhmRwkpgLbceDEMd9yRvcXOqqLBHvyTr3WAYjknn6Xs8c5ZGIhxzdnLj_jtDVIQBU)",
              }}
            ></div>
          </div>
        </div>
        <h3 className="text-[#171216] dark:text-white text-base font-bold tracking-tight px-4 pt-6 pb-2">
          Advertencias Operativas
        </h3>
        <div className="px-4 py-2">
          <div className="relative overflow-hidden flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm border-l-4 border-severity-warning">
            <div className="flex flex-[3_3_0px] flex-col gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-severity-warning text-sm">timer</span>
                  <p className="text-severity-warning text-[11px] font-bold uppercase tracking-wider">Relevamiento Vencido</p>
                </div>
                <p className="text-[#171216] dark:text-white text-[15px] font-bold leading-snug">
                  Territorio: Sur - Rama: Ventas
                </p>
                <p className="text-[#85667f] dark:text-gray-400 text-sm font-medium">
                  Plazo excedido por <span className="text-severity-warning font-bold">1h 15m</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary/10 text-primary text-sm font-semibold transition-transform active:scale-95"
                  href="/alerts/review"
                >
                  Revisar
                </Link>
              </div>
            </div>
            <div
              className="w-24 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden shrink-0 border border-gray-100 dark:border-gray-700"
              data-alt="Grafico de metricas de ventas vencidas"
              style={{
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCryT9QQ875cHFmWqAAYHg5EkoHYXfYEfApogrxLlM1571qPiYLLNb01atITVDDktbMBu1hodVZ-m05AFXFi8V99_ropB7IjmYqrJg3vNaoPo2HbTYW4216yFM_d6HpxnBbb5URIj9RhNIqoZG88H3lFDM3X1i92P4zMbFqKlssEkt0X6_IolKmpY1cNgISFxhsb_2Dl_TTJhDvBSBTi4iqWUoUg0cfq-DZE0kYaROoo3PMdZGBXRzz9V0L9iFpNDH5GilK0I7tD0Q)",
              }}
            ></div>
          </div>
        </div>
        <div className="px-4 pt-8 pb-2 flex items-center justify-between">
          <h3 className="text-[#171216] dark:text-white text-base font-bold tracking-tight">Actividad Reciente</h3>
          <button className="text-primary text-[13px] font-semibold" onClick={handleMarkAllRead}>
            Marcar leidas
          </button>
        </div>
        <div className="px-4 space-y-3">
          {alerts.map((alert) => {
            const meta = alertIcons[alert.type];
            return (
              <div
                key={alert.id}
                className={`flex gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm items-start ${
                  alert.read ? "opacity-60" : ""
                }`}
              >
                <div className={`size-10 rounded-full ${meta.bg} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-outlined ${meta.color} text-[20px]`}>{meta.icon}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm text-[#171216] dark:text-white">
                    <span className="font-bold">{alert.title}</span> {alert.message}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                    {new Date(alert.createdAt).toLocaleTimeString("es-AR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
          {!alerts.length && (
            <div className="text-center text-sm text-gray-400 py-10">No hay alertas recientes.</div>
          )}
        </div>
        <div className="mt-8 px-4 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 dark:text-gray-500">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span className="text-[12px] font-medium tracking-wide uppercase">Monitoreo Seguro Activo</span>
          </div>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 pb-safe px-6 h-16 flex items-center justify-between">
        <Link className="flex flex-col items-center gap-0.5 text-gray-400" href="/map">
          <span className="material-symbols-outlined text-[24px]">map</span>
          <span className="text-[10px] font-medium">Mapa</span>
        </Link>
        <Link className="flex flex-col items-center gap-0.5 text-primary" href="/alerts">
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            notifications
          </span>
          <span className="text-[10px] font-bold">Alertas</span>
        </Link>
        <Link className="flex flex-col items-center gap-0.5 text-gray-400" href="/reports">
          <span className="material-symbols-outlined text-[24px]">analytics</span>
          <span className="text-[10px] font-medium">Reportes</span>
        </Link>
        <Link className="flex flex-col items-center gap-0.5 text-gray-400" href="/profile">
          <span className="material-symbols-outlined text-[24px]">person</span>
          <span className="text-[10px] font-medium">Perfil</span>
        </Link>
      </nav>
    </div>
  );
}
