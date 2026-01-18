import Link from "next/link";

export default function AlertRevokePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1F2937] dark:text-white min-h-screen font-display flex flex-col">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 border-b border-border-dark/30">
        <div className="flex items-center p-4 justify-between max-w-lg mx-auto">
          <Link
            href="/alerts"
            className="text-[#171216] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Baja Definitiva</h2>
          <Link href="/alerts" className="text-slate-500 dark:text-[#b6a0b3] text-sm font-bold">
            CANCELAR
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-lg mx-auto pb-24">
        <section className="p-6 flex flex-col items-center border-b border-border-dark/20 relative">
          <div className="relative mb-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-primary/20"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJveRU5EE5N4GNlhTQrUGvXzhVsXtGxLEDaSWHJ9xbxERo26-wjyToqnUppRfrHfE7nJNpogAMc4d1ZaI0XTweL_gPcJjT6e1bRtdOlEmRk_uXSoZALVWmbqlgNmY7-nu1ZTVGj5lCln9p2bfe9rTAt1BRCMbj2WKBaLZDJTewafVb7Q3WQOT0WX48YacgyRse8KXEGmFpnxlWIspxn1Ry87mP2i53hLb-woGVdJ3Md385CFvpFnwpdsxKgwdRy4flgEbvR1GMizc")',
              }}
            ></div>
            <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-2 border-background-dark">
              <span className="material-symbols-outlined text-sm">verified_user</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-extrabold">Alejandro Velázquez</h1>
            <p className="text-sm text-[#b6a0b3] mt-1">ID: #LP-992834 • ADMIN_LEVEL_4</p>
            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-widest border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Estado actual: ACTIVO
            </div>
          </div>
        </section>

        <section className="px-4 pt-6 pb-2">
          <div className="flex items-center gap-2 text-danger font-bold text-xs uppercase tracking-widest justify-center">
            <span className="material-symbols-outlined text-base">warning</span>
            ADVERTENCIA DE SEGURIDAD
          </div>
        </section>

        <section className="px-4 mb-6">
          <div className="bg-danger/10 border border-danger/30 p-5 rounded-xl flex flex-col gap-3">
            <h3 className="text-danger text-lg font-extrabold">ESTA ACCIÓN ES IRREVERSIBLE</h3>
            <p className="text-slate-700 dark:text-red-100/70 text-sm leading-relaxed">
              Al proceder con el estado <span className="font-bold underline">REVOKED</span>, el usuario perderá acceso inmediato a toda la infraestructura crítica de La Púrpura
              Territorio. Esta acción no puede deshacerse sin intervención de Nivel 5.
            </p>
          </div>
        </section>

        <section className="px-4 mb-6">
          <h3 className="text-sm font-extrabold tracking-widest mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">terminal</span>
            CONSECUENCIAS TÉCNICAS
          </h3>
          <div className="grid gap-3">
            {[
              {
                icon: "logout",
                title: "Invalidación de Sesiones",
                desc: "Cierre inmediato de sesiones en web y aplicaciones móviles.",
              },
              {
                icon: "key_off",
                title: "Bloqueo de API Keys",
                desc: "Todas las integraciones y scripts vinculados dejarán de funcionar.",
              },
              {
                icon: "history_edu",
                title: "Registro en Auditoría",
                desc: "Su firma administrativa quedará vinculada a esta revocación.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-lg bg-surface-dark/5 dark:bg-surface-dark border border-border-dark/10"
              >
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-slate-500 dark:text-[#b6a0b3]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 mb-8">
          <label className="block text-xs font-extrabold mb-3 uppercase tracking-widest text-[#b6a0b3]">MOTIVO DE LA BAJA (REQUERIDO)</label>
          <div className="space-y-2">
            {["Fin de ciclo operativo / Contrato", "Incumplimiento de Protocolo", "Otros motivos administrativos"].map(
              (label, idx) => (
                <label
                  key={label}
                  className="flex items-center p-4 bg-surface-dark/5 dark:bg-background-dark border border-border-dark rounded-lg cursor-pointer hover:border-primary transition-colors"
                >
                  <input
                    className="w-5 h-5 text-primary bg-background-dark border-border-dark focus:ring-primary focus:ring-offset-background-dark"
                    name="reason"
                    type="radio"
                    defaultChecked={idx === 0}
                  />
                  <span className={`ml-3 text-sm font-semibold ${idx === 2 ? "text-danger" : ""}`}>{label}</span>
                </label>
              ),
            )}
            <label className="flex items-center p-4 bg-surface-dark/5 dark:bg-background-dark border border-border-dark rounded-lg cursor-pointer hover:border-primary transition-colors">
              <input className="w-5 h-5 text-primary bg-background-dark border-border-dark focus:ring-primary focus:ring-offset-background-dark" name="reason" type="radio" />
              <span className="ml-3 text-sm font-semibold">Incidente de Seguridad Crítico</span>
            </label>
          </div>
        </section>

        <section className="px-4 mt-auto">
          <Link
            href="/alerts/revoke/confirmation"
            className="w-full block bg-[#851c74] hover:bg-[#a0228c] text-white py-5 rounded-xl font-extrabold text-sm uppercase tracking-[0.1em] flex items-center justify-center gap-3 shadow-lg shadow-primary/20 transition-transform active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">gavel</span>
            REVOCAR ACCESO INMEDIATAMENTE
          </Link>
          <p className="text-center text-[#b6a0b3] text-[10px] mt-4 uppercase tracking-[0.2em] opacity-50">
            Protocolo Púr-99 // Autenticación Biométrica Requerida al Pulsar
          </p>
        </section>
      </main>

      <div className="h-8 w-full bg-background-light dark:bg-background-dark"></div>
    </div>
  );
}
