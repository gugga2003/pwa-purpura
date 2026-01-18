"use client";

import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";

export default function MapPage() {
  const router = useRouter();
  const alerts = useAppStore((state) => state.alerts);
  const recentAlerts = alerts.slice(0, 2);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="text-primary flex size-10 items-center justify-center bg-primary/10 rounded-full">
              <span className="material-symbols-outlined">map</span>
            </div>
            <div>
              <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Mapa Territorial</h2>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Vista general</p>
            </div>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">search</span>
          </button>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
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
                className="bg-white dark:bg-gray-800 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2"
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
            <div
              key={alert.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-start gap-4"
            >
              <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">warning</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#171216] dark:text-white leading-snug">
                  <span className="font-bold">{alert.title}</span> - {alert.message}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">{alert.timeAgo}</p>
              </div>
            </div>
          ))}
          {!recentAlerts.length && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center text-sm text-gray-400">
              Sin alertas activas en este momento.
            </div>
          )}
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 pt-3 pb-8 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/home")}
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Inicio</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              map
            </span>
            <span className="text-[10px] font-bold">Mapa</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/tasks")}
          >
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-[10px] font-bold">Operativos</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => router.push("/profile")}
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
