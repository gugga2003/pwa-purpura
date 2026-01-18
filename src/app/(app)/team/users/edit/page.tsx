"use client";

import { useRouter } from "next/navigation";

export default function TeamUserEditPage() {
  const router = useRouter();
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-text-main dark:text-white min-h-screen flex flex-col transition-colors duration-200">
      <div className="relative flex flex-col h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
        <header className="flex items-center justify-between px-4 py-4 bg-surface-light dark:bg-surface-dark sticky top-0 z-20 border-b border-border-light dark:border-border-dark">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => router.back()}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight text-center flex-1">Editar Usuario</h1>
          <div className="w-10" />
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar p-4 pb-40 space-y-5">
          <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/10" />
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <div
                  className="w-28 h-28 rounded-full border-4 border-white dark:border-surface-dark shadow-md bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2uoEy3pA76erawoHP3dUl6vZH1ga_SeqBM9yeCIp3glp4ngx2e5VqGbdFGIK1wqemKa1xAJIUyCsmQxKLgw0bgX1HZhMNBw_dBPgzn5R374lvxTkDGt_-f4AQmRHpRJx3gOk5uGpCV_Dff8ahBIi0HbOXW4c9s_zJwcAimPqWRov8RT51rfh_QEbY0fwseKjoS5nvUkZdoziatwz_NaiKWHV8eVSsPTV9fsFqC5Qbk1p6T-1V3BlwifcfJLz09ZXHsYuphacXMjk')",
                  }}
                />
                <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-2 border-white dark:border-surface-dark shadow-lg hover:bg-primary-dark transition-transform">
                  <span className="material-symbols-outlined text-lg">photo_camera</span>
                </button>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">Cambiar foto de perfil</p>
            </div>
            <div className="space-y-5">
              <InputField label="Nombre Completo" value="Juan Pérez" icon="person" />
              <InputField label="Correo Electrónico" value="juan.perez@lapurpura.com" icon="mail" type="email" />
              <InputField label="Teléfono" value="+52 55 1234 5678" icon="call" type="tel" />
            </div>
          </section>

          <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft p-6 space-y-5">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">work_outline</span>
              Datos Operativos
            </h3>
            <div className="space-y-5">
              <SelectField label="Rol" options={["Supervisor de Campo", "Agente de Ventas", "Administrador"]} />
              <SelectField label="Territorio" options={["Zona Norte - Sector A", "Zona Centro", "Zona Sur"]} />
            </div>
          </section>

          <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft p-5 flex items-center justify-between border-l-4 border-primary">
            <div>
              <h3 className="text-base font-bold text-text-main dark:text-white">Estado de Cuenta</h3>
              <p className="text-sm text-text-secondary">Permitir acceso a la plataforma</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer focus:ring-2 peer-focus:ring-primary/30 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
            </label>
          </section>

          <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-text-main dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-400">lock</span>
                  Seguridad
                </h3>
                <p className="text-xs text-text-secondary mt-1">Último cambio hace 30 días</p>
              </div>
              <button className="text-sm font-bold text-primary hover:text-primary-dark hover:underline transition-colors px-3 py-2 rounded-lg hover:bg-primary/5" onClick={() => router.push("/recover-password/reset")}>
                Restablecer Contraseña
              </button>
            </div>
          </section>
        </main>

        <div className="absolute bottom-20 left-0 w-full px-4">
          <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2" onClick={() => router.push("/users")}>
            <span className="material-symbols-outlined">save</span>
            Guardar Cambios
          </button>
        </div>

        <nav className="absolute bottom-0 left-0 right-0 flex justify-around items-center h-16 border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
          <NavItem icon="home" label="Inicio" onClick={() => router.push("/home")} />
          <NavItem icon="group" label="Usuarios" active onClick={() => router.push("/users")} />
          <NavItem icon="map" label="Territorio" onClick={() => router.push("/territory")} />
          <NavItem icon="settings" label="Ajustes" onClick={() => router.push("/settings")} />
        </nav>
      </div>
    </div>
  );
}

const InputField = ({
  label,
  value,
  icon,
  type = "text",
}: {
  label: string;
  value: string;
  icon: string;
  type?: string;
}) => (
  <label className="block">
    <span className="text-sm font-semibold text-text-main dark:text-gray-200 mb-1.5 block">{label}</span>
    <div className="relative">
      <input
        type={type}
        defaultValue={value}
        className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
      />
      <span className="material-symbols-outlined absolute right-3 top-3.5 text-text-secondary text-xl pointer-events-none">
        {icon}
      </span>
    </div>
  </label>
);

const SelectField = ({ label, options }: { label: string; options: string[] }) => (
  <label className="block">
    <span className="text-sm font-semibold text-text-main dark:text-gray-200 mb-1.5 block">{label}</span>
    <div className="relative">
      <select className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium appearance-none pr-10">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <span className="material-symbols-outlined absolute right-3 top-3.5 text-text-secondary pointer-events-none">expand_more</span>
    </div>
  </label>
);

const NavItem = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    className={`flex flex-col items-center gap-1 text-[10px] font-medium ${active ? "text-primary" : "text-text-secondary hover:text-primary transition-colors"}`}
    onClick={onClick}
  >
    <span className="material-symbols-outlined" style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>
      {icon}
    </span>
    <span className={`${active ? "font-bold" : ""}`}>{label}</span>
  </button>
);


