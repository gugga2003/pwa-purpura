"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { useAppStore } from "@/lib/store";

const avatarImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDelZjFNBRvXpUPhJsyaF6mLYZmKH-Af6dRUdZBWhNQF-VTevQP_VwmpGRZQQkXdp9_PYshshJv1b9KRE35WAcMh84BHzfnjQNRh30gMFuD04H4d_kiayl3mstZt6vR4epwEF-a7FuHS_NKTYBub2e6F7IrR11UUJ7yQDCaiAxgbFWQKddfKPZVAKab_NWbBdoLsTYBoKbJ04t_KbwYEh24jSrq8NBGg7FLmbpewpB-0nqLyVYY572jmvAUpbgCBx1Ny4dHkuR6OMs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA1TPG5gllrqjFHm6SNwOrGR8m2gAQC86w089WmvrmQ1KGEgi7CrQ9hN9slHvfv82fFN2qSxtVvOTC7w03M0bOi_-VqWf7aSiBDdsddGBb1TJiUMpzmjO4Yh4gS4zgHxw5m6kYumoz6gbWQHvAcLMBkdKmraXBKURp11_KQZtk5aQrMYPbOSLSQATpfBS1Eh38vkkJMeVMaUqV-Xq1d8nfPAHk7WH_s5xD41gnQd-fkGV3Bu5cK7GiIgHYPy4WNuk7YbPRitKqQRJM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB92kge_jG0gMGzeCXL8O-VRGOLsKPsMDXKqyBxxSOkES56cQwL8JoE2bA0ZQ8kmv50HYX45Bt3IbmOM7GunbemogcyMH67FtTsJm_Ctal3q5BAKNqAdF27v-H_p4pO6BN5yBZWGkEvR0D38ii_udli0BsG_5g0Bat04pzioMQDTFJABh_Oq6BpRtqEbA-3QnlDmNn1k0kX1-5gKVDwQXvVAuWSlCQ-vPJQ5fRn9wXoEChkVdeAj0mQSzNiJH_LArV7PA0_lt7iISc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCUQgUL5DyeJ1XgfUgsjHU-cubJZrO4b_UEZtszdm6_mJKAEVzL5JDwMzsc22qnz0npzVRW7VNpWklD0CVUQf3QjAvfwnVg7hlmsgqwu0xkKnN0JZmnZn5Dd51u5pQaQrdhgzQbDQpudQAsJ_1RwqASzKzJ9xIBfA5QFNU5FG-Kj6fAiXVumyeiJoyEHb1bgYpeoPaRVqWSUJxD_OfOUDOTCfwCmRL6zZwudFRmk7EegkUiyHPhSvjyTfQGofFI0LnnXjsashCMFA",
];

export default function UsersPage() {
  const users = useAppStore((state) => state.users);
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return users;
    return users.filter((user) =>
      [user.name, user.email, user.role, user.territory].some((value) =>
        value.toLowerCase().includes(term)
      )
    );
  }, [query, users]);

  return (
    <div className="bg-[#f7f7f7] dark:bg-[#1f1f1f] min-h-screen flex flex-col font-manrope antialiased text-[#171216] dark:text-white transition-colors duration-200">
      <header className="sticky top-0 z-20 bg-[#f7f7f7]/95 dark:bg-[#1f1f1f]/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800 transition-colors">
        <div className="flex items-center px-4 py-3 justify-between">
          <Link
            href="/home"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
            aria-label="Back"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Gestion de Usuarios</h1>
        </div>
        <div className="px-4 pb-2">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#871d75]/60 group-focus-within:text-[#871d75] transition-colors">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </div>
            <input
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-transparent rounded-xl bg-white dark:bg-[#2d2d2d] dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-[#871d75]/20 focus:border-[#871d75] shadow-sm transition-all outline-none"
              placeholder="Buscar por nombre, ID o zona..."
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar items-center">
          <button className="flex shrink-0 items-center justify-center px-4 py-1.5 rounded-full bg-[#871d75] text-white shadow-[0_4px_20px_-2px_rgba(135,29,117,0.2)] transition-transform active:scale-95">
            <span className="text-sm font-medium">Todos</span>
          </button>
          <button className="flex shrink-0 items-center justify-center px-4 py-1.5 rounded-full bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#871d75]/50 transition-all active:scale-95">
            <span className="text-sm font-medium">Admin</span>
          </button>
          <button className="flex shrink-0 items-center justify-center px-4 py-1.5 rounded-full bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#871d75]/50 transition-all active:scale-95">
            <span className="text-sm font-medium">Colaborador</span>
          </button>
          <button className="flex shrink-0 items-center justify-center px-4 py-1.5 rounded-full bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#871d75]/50 transition-all active:scale-95">
            <span className="text-sm font-medium">Activos</span>
          </button>
        </div>
      </header>
      <main className="flex-1 px-4 py-4 space-y-4 pb-32 overflow-y-auto">
        {filteredUsers.map((user, index) => (
          <article
            key={user.id}
            className="bg-white dark:bg-[#2d2d2d] p-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4 transition-transform active:scale-[0.99]"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="relative shrink-0">
                <div
                  className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center border-2 border-white dark:border-gray-600 shadow-sm"
                  style={{
                    backgroundImage: `url("${avatarImages[index % avatarImages.length]}")`,
                  }}
                ></div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full border-2 border-white dark:border-[#2d2d2d] p-0.5">
                  <span className="material-symbols-outlined text-[10px] text-white font-bold block">check</span>
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="text-[#171216] dark:text-white text-base font-bold leading-tight truncate">
                  {user.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#871d75]/10 text-[#871d75] dark:text-fuchsia-300 dark:bg-[#871d75]/30">
                    {user.role}
                  </span>
                  <span className="text-[#85667f] dark:text-gray-400 text-xs truncate">• {user.territory}</span>
                </div>
              </div>
            </div>
            <div className="shrink-0 flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#871d75] shadow-inner"></div>
              </label>
            </div>
          </article>
        ))}
        {!filteredUsers.length && (
          <div className="text-center text-sm text-gray-400 py-10">No hay usuarios para mostrar.</div>
        )}
      </main>
      <Link
        href="/users/new"
        className="fixed bottom-24 right-5 z-40 bg-[#871d75] hover:bg-[#6e175e] text-white rounded-full p-4 shadow-[0_10px_30px_-5px_rgba(135,29,117,0.3)] transition-all active:scale-90 flex items-center justify-center group"
        aria-label="Anadir Usuario"
      >
        <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform duration-300">
          add
        </span>
      </Link>
      <nav className="fixed bottom-0 w-full bg-white dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-2 z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-around pb-2">
          <Link className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#871d75] transition-colors" href="/home">
            <span className="material-symbols-outlined text-[24px]">home</span>
            <span className="text-[10px] font-medium">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#871d75] transition-colors" href="/map">
            <span className="material-symbols-outlined text-[24px]">map</span>
            <span className="text-[10px] font-medium">Territorio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 p-2 text-[#871d75] transition-colors relative" href="/users">
            <div className="absolute -top-2 w-8 h-1 bg-[#871d75] rounded-b-full"></div>
            <span className="material-symbols-outlined text-[24px] fill-current">group</span>
            <span className="text-[10px] font-bold">Usuarios</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#871d75] transition-colors" href="/reports">
            <span className="material-symbols-outlined text-[24px]">bar_chart</span>
            <span className="text-[10px] font-medium">Reportes</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#871d75] transition-colors" href="/settings">
            <span className="material-symbols-outlined text-[24px]">settings</span>
            <span className="text-[10px] font-medium">Ajustes</span>
          </Link>
        </div>
        <div className="h-4 w-full bg-white dark:bg-[#1a1a1a]"></div>
      </nav>
      <div className="fixed bottom-16 left-0 w-full h-8 bg-gradient-to-t from-[#f7f7f7] dark:from-[#1f1f1f] to-transparent pointer-events-none z-20"></div>
    </div>
  );
}
