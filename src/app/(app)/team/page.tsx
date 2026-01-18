"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppStore } from "@/lib/store";

export default function TeamPage() {
  const user = useAppStore((state) => state.user);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const allMembers = [
    { id: 1, name: "Mateo Ramirez", role: "Regional Admin", territory: "North Zone", status: "online", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsex1fjy_qWkj-evRxe55n0I7aGu936O8VTe44Hjcc-J5kV75TC7bvERqTGYd3RX86pZyyXiatcmoWqvAaiU7a7OiX83xF3uPrRh6nM8BQQBggwEKVzQIw2iJYpWyonPdk3-6EWA4GivgkO0p1YwrNRXjTE1iElv33u4Nez-K1cjA7LM0_OmMTO9N_EJ6tCScIg40xvpuH6w-S14n_x5NT8Wm99R_GqRpxVDpOyq5vHH6-V9TgryI8MwTmQGsT4uG7Sh3wIaJGJO8" },
    { id: 2, name: "Sofia Lopez", role: "Field Officer", territory: "West Valley", status: "away", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-u_qMSm1CEjTsTH9AP2GM9LTCd1VXC260s8sVwEdb4lIMAkETZYxJQMT4lxxRTKc9Kh_gDs2XK4XHjag09SPfOQtReSdM-iy53a5ayBrr9udxINJSod-Dgo075EsSs2PgvmUJzoWl2ipcKZSalt3SG46i71IyHs1-6LAHOakiB_xjL6jb35D5mMED5YYXC6Fma7D7f4zjkPlynQwJusDjXrEfbfPJP87Qr3nNinSLuT0s6GQGGF4105ReHet0Oej_eQ0JSQKTvpc" },
    { id: 3, name: "Elena Cruz", role: "Field Officer", territory: "South Hills", status: "online", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD90BEcUyCU-Wdws1K-wbCaH9ZqgmlzVoTJzD7s33dZ75m0OUzbCNLCVV2c9TTa38QzokoZHc96GQ4oi6aqZgB6C3D3YdvWpFCSY8Ub_WVaHDUukboJmD33G-jEkCUWzTupreuO_5cFzTEsSHryeZSBANXXKCKl1VnOA9dJ5Ux4-GHU6Cjj4CB6sWdiEjYqJwOwsU-PdTQJxUiV0HMaWQ4-lOucTB8O5d5BwwacErz_uhRWtB1qcQsGjofYXrfl4FwcBf-0q_F2hTk" }
  ];

  const teamMembers = allMembers.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.territory.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all'
      ? true
      : filter === 'admin'
        ? m.role.includes("Admin")
        : !m.role.includes("Admin");
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="px-5 pb-24 space-y-6">
      <div className="mt-4 mb-2">
        <div className="relative">
          <input
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border-none shadow-soft text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50"
            placeholder="Buscar miembros del equipo..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="material-icons-round absolute left-3 top-3 text-gray-400">
            search
          </span>
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap ${filter === 'all' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-500 border border-gray-100 dark:border-gray-700'}`}>
            Todos
          </button>
          <button
            onClick={() => setFilter("field")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap ${filter === 'field' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-500 border border-gray-100 dark:border-gray-700'}`}>
            Operativos
          </button>
          <button
            onClick={() => setFilter("admin")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap ${filter === 'admin' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-500 border border-gray-100 dark:border-gray-700'}`}>
            Administradores
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
                    src={member.avatar}
                  />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 ${member.status === 'online' ? 'bg-green-500' : 'bg-amber-500'} rounded-full border-2 border-white dark:border-gray-800`}></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">ID: #OP-{1000 + member.id}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <span className="material-icons-round text-xl">more_vert</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 dark:bg-gray-900/50 p-2 rounded-xl">
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black mb-1">Rol</p>
                <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                  <span className="material-icons-round text-sm">badge</span>
                  {member.role}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-2 rounded-xl">
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black mb-1">Territorio</p>
                <div className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 font-bold text-xs">
                  <span className="material-icons-round text-sm text-gray-400">assistant_direction</span>
                  {member.territory}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Link href="/audits/logs" className="flex-1 py-2 text-[11px] font-bold text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg text-center hover:bg-gray-200 transition-colors">
                Auditar Logs
              </Link>
              <Link href="/team/users/edit" className="flex-1 py-2 text-[11px] font-bold text-white bg-primary rounded-lg text-center shadow-md shadow-primary/20 hover:brightness-110 transition-all">
                Editar Perfil
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-24 right-5 z-20">
        <Link
          href="/team/invite"
          className="bg-primary text-white p-4 rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <span className="material-icons-round text-2xl">person_add</span>
          <span className="text-sm font-bold">Invitar Miembro</span>
        </Link>
      </div>
    </main>
  );
}

