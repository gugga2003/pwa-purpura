"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import IncidentsBottomNav from "@/components/layout/IncidentsBottomNav";
import { useAppStore } from "@/lib/store";

export default function IncidentsPage() {
  const incidents = useAppStore((state) => state.incidents);
  const [activeFilter, setActiveFilter] = useState("all");
  const user = useAppStore((state) => state.user);

  const [query, setQuery] = useState("");

  const filteredIncidents = useMemo(() => {
    let result = incidents;

    // 1. Text Search
    if (query.trim()) {
      const needle = query.toLowerCase();
      result = result.filter((incident) =>
        incident.id.toLowerCase().includes(needle) ||
        incident.title.toLowerCase().includes(needle) ||
        incident.territory.toLowerCase().includes(needle) ||
        incident.description.toLowerCase().includes(needle)
      );
    }

    // 2. Chip Filter using extended logic
    if (activeFilter === "open") {
      result = result.filter(i => i.status === "open" || i.status === "in_review");
    } else if (activeFilter === "assigned") {
      result = result.filter(i => i.territory === user?.territory);
    } else if (activeFilter === "closed") {
      result = result.filter(i => i.status === "resolved");
    }

    return result;
  }, [incidents, query, activeFilter, user]);

  const openCount = incidents.filter((incident) => incident.status === "open").length;

  const formatTime = (value: string) => {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return "Hace minutos";
    const diff = Date.now() - parsed.getTime();
    const minutes = Math.max(1, Math.round(diff / 60000));
    if (minutes < 60) return `Hace ${minutes} min`;
    const hours = Math.round(minutes / 60);
    if (hours < 24) return `Hace ${hours} h`;
    const days = Math.round(hours / 24);
    return `Hace ${days} d`;
  };

  const priorityMeta = (priority: string) => {
    if (priority === "critical" || priority === "high") {
      return {
        bar: "bg-accent-red",
        badge: "text-accent-red bg-red-50 dark:bg-red-900/20",
        label: "High Priority",
      };
    }
    if (priority === "medium") {
      return {
        bar: "bg-accent-yellow",
        badge: "text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20",
        label: "Medium Priority",
      };
    }
    return {
      bar: "bg-accent-green",
      badge: "text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
      label: "Low Priority",
    };
  };

  return (
    <main className="flex-1 px-4 py-4 space-y-4 pb-24 overflow-y-auto">
      <div className="flex space-x-2 overflow-x-auto hide-scrollbar pb-2 mb-2">
        <button
          onClick={() => setActiveFilter("all")}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-transform active:scale-95 ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700'}`}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveFilter("open")}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-transform active:scale-95 ${activeFilter === 'open' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700'}`}
        >
          Abiertos ({openCount})
        </button>
        <button
          onClick={() => setActiveFilter("assigned")}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors active:scale-95 ${activeFilter === 'assigned' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700'}`}
        >
          Mi Territorio
        </button>
        <button
          onClick={() => setActiveFilter("closed")}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors active:scale-95 ${activeFilter === 'closed' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700'}`}
        >
          Cerrados
        </button>
      </div>

      <div className="relative mb-3">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
          <span className="material-icons-round">search</span>
        </span>
        <input
          className="w-full py-2.5 pl-10 pr-4 bg-white dark:bg-gray-800 border-none rounded-xl text-sm shadow-soft focus:ring-2 focus:ring-primary dark:focus:ring-purple-500 transition-shadow text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Buscar ID, territorio..."
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/50 rounded-lg text-sm text-yellow-800 dark:text-yellow-200 mb-4">
        <span className="material-icons-round mr-2 text-yellow-600 dark:text-yellow-400">
          wifi_off
        </span>
        <span>Estás offline. Los cambios se sincronizarán al conectar.</span>
      </div>

      {filteredIncidents.map((incident) => {
        const meta = priorityMeta(incident.priority);
        return (
          <div
            key={incident.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 active:scale-[0.99] transition-transform cursor-pointer relative overflow-hidden group block"
          >
            <div className={`absolute top-0 left-0 w-1.5 h-full ${meta.bar}`}></div>
            <div className="flex justify-between items-start mb-2 pl-2">
              <div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide ${meta.badge}`}>
                  {meta.label}
                </span>
                <h3 className="font-bold text-lg mt-1 text-gray-900 dark:text-white">
                  {incident.id}
                </h3>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded">
                {formatTime(incident.createdAt)}
              </span>
            </div>
            <div className="pl-2 mb-3 flex items-center text-sm text-gray-600 dark:text-gray-300">
              <span className="material-icons-round text-base mr-1.5 text-gray-400">
                place
              </span>
              <span className="font-bold text-xs">Territorio: {incident.territory}</span>
            </div>
            <p className="pl-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {incident.description}
            </p>
            <div className="pl-2 mt-4 flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] text-gray-500 font-bold">
                  {incident.status === "open" ? "OP" : incident.status === "in_review" ? "RE" : "CL"}
                </div>
              </div>
              <Link href={`/incidents/${incident.id}`} className="text-primary dark:text-purple-400 text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                Ver Detalles <span className="material-icons-round text-base ml-1">chevron_right</span>
              </Link>
            </div>
          </div>
        );
      })}

      <div className="fixed bottom-24 right-4 z-40">
        <Link
          href="/incidents/new"
          className="bg-primary text-white size-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <span className="material-icons-round text-2xl">add</span>
        </Link>
      </div>
    </main>
  );
}
