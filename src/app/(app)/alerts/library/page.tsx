"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LibraryPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("docs");

  const categories = [
    { id: "docs", label: "Documentos", icon: "folder" },
    { id: "media", label: "Multimedia", icon: "image" },
    { id: "forms", label: "Formularios", icon: "assignment" },
  ];

  const items = [
    { id: 1, type: "docs", title: "Protocolo de Seguridad v2.pdf", size: "2.4 MB", date: "20 Ene 2024" },
    { id: 2, type: "docs", title: "Manual de Marca.pdf", size: "15.0 MB", date: "10 Dic 2023" },
    { id: 3, type: "media", title: "Evidencia_Zona_Sur.jpg", size: "4.5 MB", date: "Yesterday" },
    { id: 4, type: "forms", title: "Encuesta Calidad.xls", size: "1.2 MB", date: "2 hrs ago" },
  ];

  const filteredItems = items.filter(i => i.type === activeTab);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 text-[#171216] dark:text-white">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between max-w-md mx-auto">
        <button onClick={() => router.back()} className="text-primary">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="font-bold text-lg">Biblioteca</h2>
        <div className="w-6" />
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-400">search</span>
          <input
            type="text"
            placeholder="Buscar archivos..."
            className="w-full bg-white dark:bg-gray-800 rounded-xl py-3 pl-12 pr-4 shadow-sm border-none focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white dark:bg-gray-800 text-gray-500 shadow-sm'
                }`}
            >
              <span className="material-symbols-outlined text-lg">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl flex items-center gap-4 shadow-sm active:scale-[0.99] transition-transform">
              <div className={`size-12 rounded-lg flex items-center justify-center ${item.type === 'docs' ? 'bg-red-50 text-red-500' :
                  item.type === 'media' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'
                }`}>
                <span className="material-symbols-outlined text-2xl">
                  {item.type === 'docs' ? 'picture_as_pdf' : item.type === 'media' ? 'image' : 'table_view'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm truncate">{item.title}</h4>
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <span>{item.size}</span>
                  <span className="size-1 bg-gray-300 rounded-full" />
                  <span>{item.date}</span>
                </p>
              </div>
              <button className="text-gray-400 hover:text-primary">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <span className="material-symbols-outlined text-4xl mb-2">folder_off</span>
              <p>No hay archivos en esta categoría</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
