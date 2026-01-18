"use client";

import Link from "next/link";

import { appStore, useAppStore } from "@/lib/store";

const statusMeta = {
  pending: { label: "Waiting", tone: "warning", icon: "hourglass_empty" },
  syncing: { label: "Syncing", tone: "warning", icon: "hourglass_empty" },
  synced: { label: "Synced", tone: "success", icon: "check_circle" },
} as const;

export default function SyncCenterPage() {
  const queue = useAppStore((state) => state.offlineQueue);
  const drafts = useAppStore((state) => state.drafts);
  const pendingCount = queue.filter((item) => item.status !== "synced").length;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 min-h-screen flex flex-col antialiased transition-colors duration-200">
      <header className="bg-primary pt-12 pb-6 px-4 shadow-lg relative z-10 rounded-b-[24px]">
        <div className="flex justify-between items-center mb-4">
          <Link
            href="/home"
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Back"
          >
            <span className="material-icons-round text-3xl">chevron_left</span>
          </Link>
          <h1 className="text-white font-bold text-xl tracking-tight">Sync Center</h1>
          <div className="w-10"></div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="material-icons-round text-warning text-xl">wifi_off</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-warning"></span>
              </span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Offline Mode Active</p>
              <p className="text-white/70 text-xs">Queue paused. Will retry automatically.</p>
            </div>
          </div>
          <button
            className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            onClick={() => appStore.syncOfflineQueue()}
          >
            Connect
          </button>
        </div>
      </header>
      <main className="flex-1 px-4 py-6 space-y-8 overflow-y-auto pb-24">
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span className="material-icons-round text-primary text-xl">backup</span>
              Sync Queue
            </h2>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold px-2 py-1 rounded-full">
              {pendingCount}
            </span>
          </div>
          <div className="space-y-3">
            {queue.map((item) => {
              const meta = statusMeta[item.status] ?? statusMeta.pending;
              const isError = item.status === "pending";
              const toneClass = isError ? "bg-danger" : "bg-warning";
              const textClass = isError ? "text-danger" : "text-warning";

              return (
                <div
                  key={item.id}
                  className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${toneClass}`}></div>
                  <div className="flex justify-between items-start mb-2 pl-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Tipo: {item.type}</p>
                    </div>
                    <span className={`flex items-center gap-1 text-xs font-medium ${textClass} bg-warning/10 px-2 py-1 rounded-md`}>
                      <span className="material-icons-round text-sm">{meta.icon}</span>
                      {meta.label}
                    </span>
                  </div>
                  <div className="flex justify-end gap-2 mt-3 pl-2">
                    <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <span className="material-icons-round text-sm">delete</span>
                      Discard
                    </button>
                    <button
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-primary hover:bg-primary-dark rounded-lg shadow-sm transition-colors"
                      onClick={() => appStore.syncOfflineQueue()}
                    >
                      <span className="material-icons-round text-sm">refresh</span>
                      Retry
                    </button>
                  </div>
                </div>
              );
            })}
            {!queue.length && (
              <div className="text-center text-sm text-gray-400 py-10">No hay elementos pendientes.</div>
            )}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span className="material-icons-round text-primary text-xl">edit_note</span>
              Saved Drafts
            </h2>
          </div>
          <div className="grid gap-4">
            {drafts.map((draft, index) => {
              const completion = Math.min(100, Math.max(10, Math.round(draft.content.length / 6)));
              const indicator = index % 2 === 0 ? "bg-primary" : "bg-blue-500";

              return (
                <div
                  key={draft.id}
                  className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between h-full"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-primary">
                      <span className="material-icons-round">assignment</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Edited {new Date(draft.updatedAt).toLocaleDateString("es-AR")}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{draft.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                      {draft.content}
                    </p>
                    <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div className={`${indicator} h-1.5 rounded-full`} style={{ width: `${completion}%` }}></div>
                    </div>
                    <p className={`text-xs text-right mt-1 ${indicator} font-semibold`}>{completion}% Complete</p>
                  </div>
                  <Link
                    href={`/drafts/${draft.id}`}
                    className="w-full py-2.5 rounded-lg border border-primary text-primary dark:text-purple-300 font-semibold text-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex justify-center items-center gap-2 group"
                  >
                    Continue Editing
                    <span className="material-icons-round text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              );
            })}
            {!drafts.length && (
              <div className="text-center text-sm text-gray-400 py-10">No hay borradores guardados.</div>
            )}
          </div>
        </section>
        <div className="flex justify-center mt-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <img
            alt="La Purpura Wolf Logo"
            className="h-16 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-8i6-O7h50oyrGhhHbbwO1EPrTpEjXzu8rUF_lcYP94EwxewmEa7x4ZRIVvytcRrjb4aibGCSC37lsrADtefXPjxBYBsrg_f3pEPATkpeXfcKHL70czvYEs06GzThUl5w-hr1dht0faBHwiPg8YiTQuWIm6mY9qpQ1qbiTRLLycu3o94rWPfAwBuHozvql6cQu80SsHshm9Dv1LWWLoeVCYSQCn7_8Fc4VD08VtNve63ZISTx_Z4u7SI2k_QCvUOwBGzYQbLH28M"
          />
        </div>
      </main>
      <div className="fixed bottom-6 right-6 z-20">
        <Link
          href="/drafts/new"
          className="bg-primary hover:bg-primary-dark text-white rounded-2xl p-4 shadow-xl shadow-purple-900/30 transition-transform active:scale-95 flex items-center justify-center"
          aria-label="New draft"
        >
          <span className="material-icons-round text-3xl">add</span>
        </Link>
      </div>
      <nav className="fixed bottom-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-6 z-10 hidden"></nav>
    </div>
  );
}
