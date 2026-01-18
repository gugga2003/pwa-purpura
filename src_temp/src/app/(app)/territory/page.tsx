import Link from "next/link";

const cards = [
  {
    title: "Jerarquia",
    description: "Visualiza niveles y nodos activos.",
    icon: "account_tree",
    href: "/territory/hierarchy",
  },
  {
    title: "Contactos",
    description: "Directorio territorial y roles.",
    icon: "groups",
    href: "/territory/contacts",
  },
  {
    title: "Selector de Rama",
    description: "Cambiar filtros por rama.",
    icon: "hub",
    href: "/territory/branch-selector",
  },
  {
    title: "Perfil Territorial",
    description: "Ficha detallada del referente.",
    icon: "badge",
    href: "/territory/profile",
  },
];

export default function TerritoryPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link
            href="/home"
            className="text-primary flex size-10 items-center justify-center bg-primary/10 rounded-full"
          >
            <span className="material-symbols-outlined">map</span>
          </Link>
          <div className="flex-1 px-3">
            <h2 className="text-[#171216] dark:text-white text-lg font-bold leading-tight tracking-tight">Territorio</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Modulo C</p>
          </div>
          <Link
            href="/map"
            className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          >
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">explore</span>
          </Link>
        </div>
      </header>
      <main className="max-w-md mx-auto px-4 pt-6 space-y-6 pb-24">
        <section>
          <h3 className="text-2xl font-extrabold text-[#171216] dark:text-white">Zona Norte Metropolitana</h3>
          <p className="text-sm text-gray-500 font-medium">Resumen territorial y contactos clave.</p>
        </section>
        <section className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#171216] dark:text-white">{card.title}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{card.description}</p>
              </div>
            </Link>
          ))}
        </section>
        <section className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-[#171216] dark:text-white">Accesos recientes</h4>
            <Link href="/territory/contacts" className="text-primary text-xs font-bold">
              Ver todos
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  JP
                </div>
                <div>
                  <p className="text-sm font-semibold">Juan Perez</p>
                  <p className="text-[10px] text-gray-400 uppercase">Funcionario Municipal</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">Activo</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  CD
                </div>
                <div>
                  <p className="text-sm font-semibold">Camila Duarte</p>
                  <p className="text-[10px] text-gray-400 uppercase">Referente Social</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Pendiente</span>
            </div>
          </div>
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 pt-3 pb-8 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/home">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Inicio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-primary" href="/territory">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
            <span className="text-[10px] font-bold">Territorio</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/reports">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-[10px] font-bold">Reportes</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="/profile">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
