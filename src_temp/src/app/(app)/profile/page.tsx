import Link from "next/link";

const incidents = [
  {
    id: "#INC-8842",
    priority: "Alta",
    color: "red",
    territory: "Territorio Norte • Sector 4",
    description:
      "Falla crítica en transformador principal afectando el alumbrado público de 3 manzanas. Requiere intervención inmediata.",
    time: "Hace 15 min",
    team: ["JD", "+2"],
  },
  {
    id: "#INC-8731",
    priority: "Media",
    color: "orange",
    territory: "Territorio Centro • Plaza Sur",
    description:
      "Acumulación de residuos sólidos tras evento comunitario. Solicitud de cuadrilla de limpieza extraordinaria.",
    time: "Hace 2 horas",
    team: ["AL"],
  },
  {
    id: "#INC-8699",
    priority: "Baja",
    color: "blue",
    territory: "Territorio Oeste • Av. Mar",
    description:
      "Pintura de señalización peatonal desgastada. Se programa mantenimiento preventivo para el fin de semana.",
    time: "Ayer, 18:30",
    team: ["Sin asignar"],
  },
];

export default function ProfilePage() {
  return (
    <div className="bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100 font-manrope min-h-screen flex flex-col antialiased">
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-200 px-4 pt-3 pb-1">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">Incidencias</h1>
          <div className="flex gap-2">
            <Link className="p-2 text-slate-600 hover:bg-gray-100 rounded-full transition-colors" href="/alerts">
              <span className="material-symbols-outlined">notifications</span>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 transition-all"
              type="text"
              placeholder="Buscar ID o territorio..."
            />
          </div>
          <button className="bg-gray-100 p-2 rounded-xl text-slate-600 border border-transparent active:scale-95 transition-all">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          <button className="pb-3 text-sm font-bold border-b-2 border-primary text-primary whitespace-nowrap">
            Abiertas (12)
          </button>
          <button className="pb-3 text-sm font-medium border-b-2 border-transparent text-slate-500 whitespace-nowrap">
            Asignadas (8)
          </button>
          <button className="pb-3 text-sm font-medium border-b-2 border-transparent text-slate-500 whitespace-nowrap">
            Cerradas
          </button>
        </div>
      </nav>

      <main className="flex-1 p-4 space-y-4 pb-32">
        {incidents.map((incident) => (
          <Link
            key={incident.id}
            href={`/incidents/${encodeURIComponent(incident.id)}`}
            className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-gray-100 dark:border-gray-900 active:scale-[0.98] transition-transform block"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID INCIDENCIA</span>
                <span className="text-lg font-extrabold text-slate-900 dark:text-white">{incident.id}</span>
              </div>
              <span
                className={`px-3 py-1 text-[10px] font-black uppercase tracking-tighter rounded-full border ${
                  incident.color === "red"
                    ? "bg-red-100 text-red-600 border-red-200"
                    : incident.color === "orange"
                    ? "bg-orange-100 text-orange-600 border-orange-200"
                    : "bg-blue-100 text-blue-600 border-blue-200"
                }`}
              >
                Prioridad {incident.priority}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span>{incident.territory}</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
              {incident.description}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
              <div className="flex -space-x-2">
                {incident.team.map((member) => (
                  <div
                    key={member}
                    className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white dark:border-gray-900 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-white"
                  >
                    {member}
                  </div>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 font-medium">{incident.time}</span>
            </div>
          </Link>
        ))}
      </main>

      <Link
        className="fixed right-6 bottom-24 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center z-50 active:scale-90 transition-all"
        href="/incidents/new"
      >
        <span className="material-symbols-outlined text-[32px]">add</span>
      </Link>

      <nav className="fixed bottom-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-200 pb-8 pt-3 px-6 flex justify-between items-center z-50">
        <NavButton icon="home" label="Inicio" href="/home" />
        <NavButton icon="format_list_bulleted" label="Incidencias" href="/incidents" />
        <NavButton icon="group" label="Equipo" href="/team" />
        <NavButton icon="person" label="Perfil" href="/profile" active />
      </nav>
    </div>
  );
}

const NavButton = ({
  icon,
  label,
  href,
  active,
}: {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}) => (
  <Link
    href={href}
    className={`flex flex-col items-center gap-1 group ${
      active
        ? "text-primary"
        : "text-slate-400 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
    }`}
  >
    <span className={`material-symbols-outlined ${active ? "icon-filled" : ""}`} style={{ fontVariationSettings: "'FILL' 0" }}>
      {icon}
    </span>
    <span className="text-[10px] font-bold">{label}</span>
  </Link>
);
