"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";

export default function IncidentNewPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const addIncident = useAppStore((state) => state.addIncident);
  const addToOfflineQueue = useAppStore((state) => state.addToOfflineQueue);

  const [priority, setPriority] = useState("high");
  const [territory, setTerritory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!territory.trim() || !description.trim()) {
      alert("Completa territorio y descripción para continuar.");
      return;
    }

    const title = description.trim().split(".")[0] || "Incidencia registrada";
    const payload = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      status: "open" as const,
      priority: priority as "low" | "medium" | "high" | "critical",
      severity: priority as "low" | "medium" | "high" | "critical",
      territory: territory.trim(),
      location: territory.trim(), // Using territory as location placeholder for now
      date: new Date().toISOString().split("T")[0],
      description: description.trim(),
      createdAt: new Date().toISOString(),
    };

    addIncident(payload);
    addToOfflineQueue({ id: payload.id, type: "incident", title });

    // Mock API call
    /* 
    void fetch("/api/incidents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    */
    router.push("/incidents");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-body text-gray-900 dark:text-gray-100 min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50 safe-top shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 h-14">
          <Link
            href="/incidents"
            className="flex items-center text-primary -ml-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <span className="material-icons text-[24px]">arrow_back_ios_new</span>
            <span className="text-base font-medium ml-1">Cancel</span>
          </Link>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white absolute left-1/2 transform -translate-x-1/2">
            New Incident
          </h1>
          <button
            className="text-primary font-bold text-base px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => formRef.current?.requestSubmit()}
          >
            Save
          </button>
        </div>
      </header>
      <main className="flex-1 px-4 py-6 w-full max-w-md mx-auto space-y-6 safe-bottom">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-md p-2 flex items-center justify-center">
            <img
              alt="La Púrpura Wolf Logo"
              className="w-full h-full object-contain filter drop-shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAohEn6it78ObiWplZDOJaOAVxibzpjpxwRUyFdZVu-Qdmz0s_tDg5TTkYkQ4YMd9UDGVqBzzZ_L9o7uN8bviyJnKck1xOzvOfM_9sLvRgiUggifLPHL8RAZWSPfVftcbjA-XGBveghpIeMDs9ax8S8cqdvxNYV4oFsV-IMYpyVkF8DUELU7sY2nCacwWD48K6uqUbnQY2ELCkX5rZRdYocIlgS_pOkCSDex74W4-huJ-J2h1XNgPLoDQDICbETO2Q-s916KVI08-Y"
            />
          </div>
        </div>
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-subtle p-5 space-y-5 border border-border-light dark:border-border-dark">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Details
            </h2>
            <div className="space-y-1.5">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="priority"
              >
                Priority Level
              </label>
              <div className="relative">
                <select
                  className="block w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-primary focus:ring-primary sm:text-base py-3 pl-3 pr-10"
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={(event) => setPriority(event.target.value)}
                >
                  <option disabled value="">
                    Select priority...
                  </option>
                  <option className="text-red-600 font-semibold" value="critical">
                    Crítica
                  </option>
                  <option className="text-orange-500" value="high">
                    High
                  </option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="territory"
              >
                Territory / Zone
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="material-icons text-gray-400 text-[20px]">map</span>
                </div>
                <input
                  className="block w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-base py-3 pl-10"
                  id="territory"
                  name="territory"
                  placeholder="e.g. Zone 4 - North Sector"
                  type="text"
                  value={territory}
                  onChange={(event) => setTerritory(event.target.value)}
                />
              </div>
              <p className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center hidden">
                <span className="material-icons text-[14px] mr-1">check_circle</span>
                Territory verified
              </p>
            </div>
            <div className="space-y-1.5">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="date"
              >
                Date &amp; Time
              </label>
              <input
                className="block w-full rounded-lg border-border-light dark:border-border-dark bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 cursor-not-allowed shadow-sm focus:border-primary focus:ring-primary sm:text-base py-3"
                disabled
                id="date"
                name="date"
                type="datetime-local"
                value="2023-10-27T14:30"
              />
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-subtle p-5 space-y-5 border border-border-light dark:border-border-dark">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Observations
            </h2>
            <div className="space-y-1.5">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="description"
              >
                Incident Description
              </label>
              <div className="relative">
                <textarea
                  className="block w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-base py-3 px-3 resize-none"
                  id="description"
                  name="description"
                  placeholder="Describe the incident in detail..."
                  rows={5}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
                <div className="absolute bottom-2 right-2 text-xs text-gray-400 dark:text-gray-500">
                  0/500
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Attachments
              </span>
              <button
                className="w-full flex justify-center items-center px-6 py-4 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-primary hover:bg-purple-50 dark:hover:bg-gray-700/50 transition-colors group"
                type="button"
              >
                <div className="space-y-1 text-center">
                  <span className="material-icons text-gray-400 group-hover:text-primary text-3xl mx-auto mb-1 block">
                    add_a_photo
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary">
                    Tap to add photo evidence
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="pt-2">
            <button
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors shadow-lg shadow-purple-900/20"
              type="submit"
            >
              Submit Incident Report
            </button>
          </div>
        </form>
        <div className="fixed bottom-6 left-0 right-0 flex justify-center pointer-events-none safe-bottom z-40">
          <div className="bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-100 text-xs px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 backdrop-blur-sm bg-opacity-90">
            <span className="material-icons text-[14px] text-green-400">cloud_done</span>
            <span>Draft saved locally</span>
          </div>
        </div>
      </main>
    </div>
  );
}
