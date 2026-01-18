"use client";

import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";

export default function MapPage() {
  const router = useRouter();
  const alerts = useAppStore((state) => state.alerts);
  const recentAlerts = alerts.slice(0, 2);

  return (
    <main className="max-w-md mx-auto px-4 pt-6 space-y-6 pb-24">
      <section className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="relative h-40 w-full rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Mapa territorial con puntos de actividad"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqcyGJX9LOfEW-hz4cG26XjtheNk23scDQklBKLZIoEsykbUsSFzqSy9dO3GND0XxVYoTHfLxMiMTfO3SlBy76ZN2CKQb9JDfvQWtAjek2z2NZcV3W3U94fkoklQ7I-GykPrc1HHnG4yI0tnZGnO_H3HaDTgh7roioVrfo81MgYA5iwza-dd7S8VUOxb5sqvtGpvJOAd--P4eZgfcvSN21u5UtvOF5BHcnfemtXKQXpVP2YyvQAhF7IMWifPHxauuNfxIb1XaoW5g')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
            <button
              className="bg-white dark:bg-gray-800 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 active:scale-95 transition-transform"
              onClick={() => router.push("/territory")}
            >
              <span className="material-symbols-outlined text-sm">map</span>
              Abrir detalle territorial
            </button>
          </div>
        </div>
      </section>
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#171216] dark:text-white">Alertas recientes</h3>
          <button
            className="text-primary text-sm font-bold"
            onClick={() => router.push("/alerts")}
          >
            Ver todas
          </button>
        </div>
        {recentAlerts.map((alert) => (
          <button
            key={alert.id}
            onClick={() => useAppStore.getState().markAlertAsRead(alert.id)}
            className={`w-full text-left bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-start gap-4 active:scale-[0.98] transition-all ${alert.isRead ? 'opacity-60' : ''}`}
          >
            <div className={`size-10 rounded-full flex items-center justify-center flex-shrink-0 ${alert.isRead ? 'bg-gray-100 dark:bg-gray-700' : 'bg-primary/20'}`}>
              <span className={`material-symbols-outlined text-xl ${alert.isRead ? 'text-gray-400' : 'text-primary'}`}>warning</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#171216] dark:text-white leading-snug">
                <span className="font-bold">{alert.title}</span> - {alert.message}
              </p>
              <p className="text-xs text-gray-400 mt-1 font-medium">{alert.timeAgo || "Hace 2h"}</p>
            </div>
            {!alert.isRead && <div className="size-2 bg-red-500 rounded-full mt-2"></div>}
          </button>
        ))}
        {!recentAlerts.length && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center text-sm text-gray-400">
            Sin alertas activas en este momento.
          </div>
        )}
      </section>
    </main>
  );
}
