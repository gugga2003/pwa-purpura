import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-manrope">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-4 pt-12 pb-3 transition-colors duration-300">
        <div className="flex items-center justify-between max-w-2xl mx-auto w-full">
          <h1 className="text-3xl font-bold tracking-tight text-primary dark:text-white">Ajustes</h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pt-6 flex flex-col gap-6 pb-24">
        <section className="relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-soft border border-transparent dark:border-white/10 cursor-pointer transition-all active:scale-[0.99]">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="flex items-center p-4 gap-4 relative z-10">
            <div className="relative shrink-0">
              <div
                className="w-16 h-16 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-white/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbY0VdWjN9GW4XpF-Br1q7EM3UlLdg5eyojIE4M0gWRwGtc8u8MqBbUDgkbP--MaY1FyUw8AMNQvwL0sQCY7XJnD28LCVZcpHh9tkKfkBW7kiEu9jX2XU_VW2EWwrSv3ZoapRInI6l5a9IkSOnt0kCvPHCRzlXmse96yI9CyNDpn8p2_3cKn1cIUftb6PHMCQJXT0kmJTtDAoOPxGvc-6GYxFZ2pgQLDKdlFB5_ahe25v3NCkoNG7IzWF6kNfrXD7MMwpGdvSoyzY')",
                }}
              ></div>
              <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-[#1c1c1e]"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold truncate">María González</h2>
              <p className="text-primary font-medium text-sm truncate">Supervisora de Zona • ID: #8821</p>
              <p className="text-text-sec-light dark:text-text-sec-dark text-xs mt-0.5">maria.gonzalez@lapurpura.com</p>
            </div>
            <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-semibold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider ml-4 mb-2">
            General
          </h3>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-soft border border-transparent dark:border-white/10 divide-y divide-gray-100 dark:divide-white/5">
            <SettingsRow icon="notifications" title="Notificaciones" />
            <SettingsRow icon="palette" title="Apariencia" value="Automático" />
            <SettingsRow icon="language" title="Idioma" value="Español (MX)" />
          </div>
        </section>

        <section>
          <h3 className="text-xs font-semibold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider ml-4 mb-2">
            Operaciones en Campo
          </h3>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-soft border border-transparent dark:border-white/10 divide-y divide-gray-100 dark:divide-white/5">
            <SettingsRow
              icon="sync"
              title="Sincronización"
              value="Hace 2 min • Correcto"
            />
            <ToggleRow icon="wifi_off" title="Modo Offline" checked={false} />
            <ToggleRow icon="location_on" title="Rastreo en 2do plano" subtitle="Requerido para bitácora" checked />
          </div>
        </section>

        <section>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-soft border border-transparent dark:border-white/10">
            <button className="w-full p-4 flex items-center justify-center text-[17px] font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 active:opacity-70 transition-colors">
              Cerrar Sesión
            </button>
          </div>
          <div className="flex flex-col items-center justify-center mt-6 mb-4 gap-1">
            <p className="text-xs text-text-sec-light dark:text-text-sec-dark font-medium">
              La Púrpura Gestión v2.4.1 (Build 204)
            </p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Powered by PurpleTech</p>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 w-full bg-surface-light dark:bg-[#161618] border-t border-gray-200 dark:border-white/5 pb-safe z-50">
        <div className="flex items-center justify-around h-[83px] max-w-2xl mx-auto pb-4">
          <NavLink href="/home" icon="home" label="Inicio" />
          <NavLink href="/tasks" icon="assignment" label="Tareas" />
          <Link
            href="/map"
            className="relative flex flex-col items-center justify-center w-full h-full text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors group"
          >
            <div className="absolute -top-6 bg-primary rounded-full p-3 shadow-lg shadow-primary/30 border-4 border-background-light dark:border-background-dark group-active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-white">map</span>
            </div>
            <span className="text-[10px] font-medium mt-8">Ruta</span>
          </Link>
          <NavLink href="/reports" icon="bar_chart" label="Reportes" />
          <NavLink href="/settings" icon="settings" label="Ajustes" iconFilled />
        </div>
      </nav>
      <div className="h-[83px]"></div>
    </div>
  );
}

type SettingsRowProps = {
  icon: string;
  title: string;
  value?: string;
};

function SettingsRow({ icon, title, value }: SettingsRowProps) {
  return (
    <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconStyle(icon)}`}
        >
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>
        <span className="font-medium text-[17px]">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {value && (
          <span className="text-text-sec-light dark:text-text-sec-dark text-[17px]">{value}</span>
        )}
        <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 group-hover:text-gray-400">
          chevron_right
        </span>
      </div>
    </div>
  );
}

function ToggleRow({
  icon,
  title,
  subtitle,
  checked = false,
}: {
  icon: string;
  title: string;
  subtitle?: string;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconStyle(icon)}`}
        >
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-[17px]">{title}</span>
          {subtitle && (
            <span className="text-xs text-text-sec-light dark:text-text-sec-dark">{subtitle}</span>
          )}
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input className="sr-only peer" type="checkbox" checked={checked} readOnly />
        <div className="w-[51px] h-[31px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-primary after:shadow-sm"></div>
      </label>
    </div>
  );
}

function iconStyle(icon: string) {
  switch (icon) {
    case "notifications":
      return "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400";
    case "palette":
      return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";
    case "language":
      return "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400";
    case "sync":
      return "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400";
    case "wifi_off":
      return "bg-purple-100 dark:bg-purple-900/30 text-primary dark:text-purple-300";
    case "location_on":
      return "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400";
    default:
      return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300";
  }
}

type NavLinkProps = {
  href: string;
  icon: string;
  label: string;
  iconFilled?: boolean;
  labelText?: string;
};

function NavLink({ href, icon, label, iconFilled, labelText }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center w-full h-full text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors group"
    >
      <span
        className={`mb-1 ${iconFilled ? "material-symbols-filled" : "material-symbols-outlined"}`}
        style={{ fontSize: "24px" }}
      >
        {icon}
      </span>
      <span className="text-[10px] font-medium">{labelText ?? label}</span>
    </Link>
  );
}
