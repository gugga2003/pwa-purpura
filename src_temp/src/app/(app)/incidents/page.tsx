"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import IncidentsBottomNav from "@/components/layout/IncidentsBottomNav";
import { useAppStore } from "@/lib/store";

export default function IncidentsPage() {
  const incidents = useAppStore((state) => state.incidents);
  const [query, setQuery] = useState("");

  const filteredIncidents = useMemo(() => {
    if (!query.trim()) return incidents;
    const needle = query.toLowerCase();
    return incidents.filter((incident) => {
      return (
        incident.id.toLowerCase().includes(needle) ||
        incident.title.toLowerCase().includes(needle) ||
        incident.territory.toLowerCase().includes(needle) ||
        incident.description.toLowerCase().includes(needle)
      );
    });
  }, [incidents, query]);

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
    <div className="bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      <header className="sticky top-0 z-20 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-border-light dark:border-border-dark px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              alt="La P\u00farpura Wolf Logo"
              className="h-8 w-8 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Y2SI5ra4PfIAi5wsjlxGqfPRBaLdt4lxx46h88_3S465XJYgDPi-BIzOhYwYSrypNJ_WYDUPc8lvCKqtwuydHwiFQ_ZrGs_sJD7OWbC6p0nqCQH4q8dLX-qzDQmlXS5VVZNDersg1VQacIuXb-D2lYEHx824jojlCs30hw09v5r0CC3OXBt_VMEwrAbBUW1Uke5GiW6ddyN4OHLjpTSiq0-QrBnOchU4rXJN4OXcq3o4fz5RT5vm0ZPEItUAMbuxBVA7uWJVMmk"
            />
            <h1 className="text-xl font-bold tracking-tight text-primary dark:text-purple-400">
              La P\u00farpura
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
              aria-label="Notifications"
            >
              <span className="material-icons-round text-xl">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md border border-white dark:border-gray-700">
              JS
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold">Incidents</h2>
          <button className="p-2 text-primary dark:text-purple-400 font-semibold text-sm flex items-center">
            <span className="material-icons-round text-lg mr-1">filter_list</span>
            Filter
          </button>
        </div>
        <div className="relative mb-3">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
            <span className="material-icons-round">search</span>
          </span>
          <input
            className="w-full py-2.5 pl-10 pr-4 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary dark:focus:ring-purple-500 transition-shadow text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="Search ID, territory, description..."
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto hide-scrollbar pb-2">
          <button className="flex-shrink-0 px-4 py-1.5 bg-primary text-white rounded-full text-sm font-medium shadow-sm transition-transform active:scale-95">
            Open ({openCount})
          </button>
          <button className="flex-shrink-0 px-4 py-1.5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-border-light dark:border-border-dark rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors active:scale-95">
            Assigned to me
          </button>
          <button className="flex-shrink-0 px-4 py-1.5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-border-light dark:border-border-dark rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors active:scale-95">
            Closed
          </button>
          <button className="flex-shrink-0 px-4 py-1.5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-border-light dark:border-border-dark rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors active:scale-95">
            High Priority
          </button>
        </div>
      </header>
      <main className="flex-1 px-4 py-4 space-y-4 pb-24 overflow-y-auto">
        <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/50 rounded-lg text-sm text-yellow-800 dark:text-yellow-200 mb-4">
          <span className="material-icons-round mr-2 text-yellow-600 dark:text-yellow-400">
            wifi_off
          </span>
          <span>You are currently offline. Changes will sync when online.</span>
        </div>
        {filteredIncidents.map((incident) => {
          const meta = priorityMeta(incident.priority);
          return (
            <Link
              key={incident.id}
              href={`/incidents/${incident.id}`}
              className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark active:scale-[0.99] transition-transform cursor-pointer relative overflow-hidden group block"
            >
              <div className={`absolute top-0 left-0 w-1.5 h-full ${meta.bar}`}></div>
              <div className="flex justify-between items-start mb-2 pl-2">
                <div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide ${meta.badge}`}>
                    {meta.label}
                  </span>
                  <h3 className="font-bold text-lg mt-1 text-gray-900 dark:text-white">
                    {incident.id}
                  </h3>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {formatTime(incident.createdAt)}
                </span>
              </div>
              <div className="pl-2 mb-3 flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="material-icons-round text-base mr-1.5 text-gray-400">
                  place
                </span>
                <span className="font-medium">Territory: {incident.territory}</span>
              </div>
              <p className="pl-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {incident.description}
              </p>
              <div className="pl-2 mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] text-gray-500 font-bold">
                    {incident.status === "open" ? "Open" : incident.status === "in_review" ? "Review" : "Closed"}
                  </div>
                </div>
                <span className="text-primary dark:text-purple-400 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  View Details <span className="material-icons-round text-base ml-1">chevron_right</span>
                </span>
              </div>
            </Link>
          );
        })}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark animate-pulse opacity-60">
          <div className="flex justify-between items-start mb-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
          </div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </main>
      <Link
        href="/incidents/new"
        className="fixed bottom-20 right-4 bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#6a155c] active:scale-95 transition-all z-30 ring-4 ring-white/20 dark:ring-black/20"
        aria-label="Create incident"
      >
        <span className="material-icons-round text-2xl">add</span>
      </Link>
      <IncidentsBottomNav active="incidents" />
    </div>
  );
}
