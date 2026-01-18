"use client";

import Link from "next/link";

const chats = [
  {
    id: "chat-1",
    name: "Equipo Norte",
    preview: "Se detectó una filtración en plaza central.",
    time: "10:42",
    unread: 2,
  },
  {
    id: "chat-2",
    name: "Logística Central",
    preview: "Confirmamos entrega de insumos.",
    time: "09:10",
    unread: 0,
  },
  {
    id: "chat-3",
    name: "Rama Salud",
    preview: "Relevamiento pendiente para Zona Sur.",
    time: "Ayer",
    unread: 1,
  },
];

export default function ChatPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#171216] dark:text-white pb-24">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <span className="material-symbols-outlined">chat</span>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Chat Territorial</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Comms</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">search</span>
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Conversaciones</h3>
          <Link className="text-primary text-sm font-bold" href="/chat-to-incident">
            Convertir
          </Link>
        </div>
        <div className="space-y-3">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex items-start justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  {chat.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171216] dark:text-white">{chat.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{chat.preview}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[10px] text-gray-400 font-medium">{chat.time}</span>
                {chat.unread > 0 ? (
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{chat.unread}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 pt-3 pb-8 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/home">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-primary" href="/chat">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              chat
            </span>
            <span className="text-[10px] font-bold">Chat</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/map">
            <span className="material-symbols-outlined">map</span>
            <span className="text-[10px] font-bold">Mapa</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400" href="/profile">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
