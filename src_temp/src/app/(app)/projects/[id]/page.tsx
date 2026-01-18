import Link from "next/link";

export default function ProjectDetailPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171216] dark:text-white min-h-screen pb-32">
      <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 justify-between border-b border-primary/10">
          <div className="flex items-center gap-3">
            <Link
              href="/projects/kanban"
              className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[#171216] dark:text-white">arrow_back_ios_new</span>
            </Link>
            <h2 className="text-[#171216] dark:text-white text-lg font-extrabold leading-tight tracking-tight">Detalle Tecnico</h2>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-[#171216] dark:text-white">share</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-[#171216] dark:text-white">more_vert</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-6">
        <div className="flex flex-col gap-5">
          <div className="relative group">
            <div
              className="bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-xl w-full shadow-lg"
              data-alt="Technical urban development project infrastructure view"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkLbVhgETgiD7-M2d9d3W8eKzC8Ud70XykxDKwQ08p-DY_ovRE_8-EqpM3BlaRO12074SN2nAWI1SxTyPvXfG_4C2-mL1AGj0n-PIP1D83nd6VBCUoZrQdQygy34UslfxIlrhadZJ5sX6CfR-7eS5FfUU-JQXX4xmHYGHqyCNDt-n2Wma4qRAODOIHzGJcekD3Udc9W1ZMDCPlkdoYY5UaSutixvnssgHSciM4fW1W1QZBHf-pLSYBI2CcOxKt6yfu1lGLxP9KDGE')",
              }}
            ></div>
            <div className="absolute top-3 right-3 bg-[#E68A1A] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              En Progreso
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[#171216] dark:text-white text-2xl font-extrabold leading-tight tracking-tight">
              Infraestructura Comunitaria: Zona 4
            </h1>
            <div className="flex flex-wrap gap-y-2 gap-x-4 mt-1">
              <div className="flex items-center gap-1.5 text-primary font-medium text-sm">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Territorio: Zona Norte
              </div>
              <div className="flex items-center gap-1.5 text-primary font-medium text-sm">
                <span className="material-symbols-outlined text-sm">architecture</span>
                Rama: Urbanismo
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-primary">description</span>
          <h2 className="text-[#171216] dark:text-white text-xl font-bold tracking-tight">1. Resumen Tecnico</h2>
        </div>
        <div className="bg-white dark:bg-[#2d1a29] rounded-xl p-5 custom-shadow border border-primary/5">
          <div className="space-y-4">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Problema detectado</p>
              <p className="text-[#85667f] dark:text-gray-300 text-sm leading-relaxed">
                Falta de acceso pavimentado y drenaje pluvial insuficiente en el sector 4,
                causando anegamientos recurrentes durante la temporada estival.
              </p>
            </div>
            <div className="h-px bg-primary/5"></div>
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Objetivos principales</p>
              <ul className="text-[#85667f] dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>Pavimentacion de 500m lineales.</li>
                <li>Instalacion de 12 luminarias LED solares.</li>
                <li>Soterramiento de desagues pluviales.</li>
              </ul>
            </div>
            <div className="bg-primary/5 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">payments</span>
                <span className="text-[#171216] dark:text-white font-bold">Presupuesto</span>
              </div>
              <span className="text-primary font-extrabold text-lg">$2,500,000 ARS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-primary">settings_applications</span>
          <h2 className="text-[#171216] dark:text-white text-xl font-bold tracking-tight">2. Operacion y Tareas</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Link
            href="/projects/kanban"
            className="bg-primary hover:bg-primary/90 transition-all rounded-xl p-4 flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-2 rounded-lg text-white">
                <span className="material-symbols-outlined">view_kanban</span>
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Tablero Kanban</p>
                <p className="text-white/70 text-xs">Gestionar tareas operativas</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">chevron_right</span>
          </Link>
          <div className="bg-white dark:bg-[#2d1a29] rounded-xl p-5 custom-shadow border border-primary/5">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Relevamientos Relacionados</p>
            <div className="space-y-3">
              <Link
                href="/reports"
                className="flex items-center justify-between p-3 rounded-lg border border-primary/10 bg-background-light dark:bg-background-dark/30"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">assignment_turned_in</span>
                  <div>
                    <p className="text-sm font-bold text-[#171216] dark:text-white">Sondeo de Terreno</p>
                    <p className="text-[10px] text-[#85667f]">Finalizado 7 12 Oct 2023</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#85667f] text-sm">open_in_new</span>
              </Link>
              <Link
                href="/reports"
                className="flex items-center justify-between p-3 rounded-lg border border-primary/10 bg-background-light dark:bg-background-dark/30"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">pending_actions</span>
                  <div>
                    <p className="text-sm font-bold text-[#171216] dark:text-white">Censo de Vecinos</p>
                    <p className="text-[10px] text-[#85667f]">En curso 7 Hoy</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#85667f] text-sm">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-primary">groups</span>
          <h2 className="text-[#171216] dark:text-white text-xl font-bold tracking-tight">3. Equipo Asignado</h2>
        </div>
        <div className="bg-white dark:bg-[#2d1a29] rounded-xl p-5 custom-shadow border border-primary/5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl border-l-4 border-primary">
              <div
                className="size-12 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                data-alt="Professional profile photo of project leader"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrmc8UAOzMroHzFfb6G89xjjPyLqBHeyqvg_PI8iPV_IaczoBiAEaQtvyI1KdbknszHg3Yp6Z2knf26uGCFqTKfr14fVFzAR5GQzc3S3d8mmHT3v-ROicmSqAP_7qacRAb4sGnF7Dn75pSdSCWUcRKbmedFtDWDHljP6TfAaafef3_CSzTVeU3ZQPLPTD5p68nH5piJVxDwpq71-QGshODxzcpD4eZCDFn32H7x__RSRQP6L6lWw-cyw3QVCERWfbw_ws2O9wk-tw')",
                }}
              ></div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-tighter">Responsable Tecnico</p>
                <p className="font-bold text-[#171216] dark:text-white">Arq. Julian Rossi</p>
              </div>
            </div>
            <div className="space-y-3 mt-2">
              <p className="text-[#85667f] dark:text-gray-400 text-xs font-medium px-1">Colaboradores de campo</p>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs border border-primary/20">MA</div>
                  <div>
                    <p className="text-sm font-bold text-[#171216] dark:text-white">Martina Alvarez</p>
                    <p className="text-[10px] text-[#85667f]">Logistica Territorial</p>
                  </div>
                </div>
                <Link href="/chat" className="material-symbols-outlined text-primary">chat</Link>
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs border border-primary/20">LC</div>
                  <div>
                    <p className="text-sm font-bold text-[#171216] dark:text-white">Lucas Castro</p>
                    <p className="text-[10px] text-[#85667f]">Gestion de Recursos</p>
                  </div>
                </div>
                <Link href="/chat" className="material-symbols-outlined text-primary">chat</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-primary">monitoring</span>
          <h2 className="text-[#171216] dark:text-white text-xl font-bold tracking-tight">4. Indicadores de Impacto</h2>
        </div>
        <div className="bg-white dark:bg-[#2d1a29] rounded-xl p-5 custom-shadow border border-primary/5">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-end mb-2">
                <p className="text-sm font-bold text-[#171216] dark:text-white">Progreso de Hitos</p>
                <p className="text-primary font-extrabold text-lg">65%</p>
              </div>
              <div className="w-full bg-primary/10 h-3 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "65%" }}></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-[#85667f]">Inicio: 01 Sep</span>
                <span className="text-[10px] text-[#85667f]">Estimado: 15 Dic</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5">
              <div>
                <p className="text-sm font-bold text-[#171216] dark:text-white">Nivel de Impacto Social</p>
                <p className="text-xs text-[#85667f]">Basado en alcance poblacional</p>
              </div>
              <div className="bg-[#3D994D] text-white px-4 py-1.5 rounded-lg font-extrabold text-sm shadow-sm">
                ALTO
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-20 left-0 right-0 px-4 z-40">
        <Link
          href="/reports-export"
          className="w-full bg-[#851c74] text-white font-extrabold py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">picture_as_pdf</span>
          EXPORTAR DOSSIER PDF
        </Link>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 glass-nav border-t border-primary/10 px-6 py-3 flex justify-between items-center z-50">
        <Link href="/home" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined text-[26px]">home</span>
          <span className="text-[10px] font-bold">Inicio</span>
        </Link>
        <Link href="/map" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined text-[26px]">explore</span>
          <span className="text-[10px] font-bold">Mapa</span>
        </Link>
        <Link href="/projects/kanban" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[26px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
          <span className="text-[10px] font-bold">Proyectos</span>
        </Link>
        <Link href="/alerts" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined text-[26px]">notifications</span>
          <span className="text-[10px] font-bold">Avisos</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined text-[26px]">person</span>
          <span className="text-[10px] font-bold">Perfil</span>
        </Link>
      </nav>
    </div>
  );
}
