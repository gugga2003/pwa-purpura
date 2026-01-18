import Link from "next/link";

export default function ReassignPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#171216] dark:text-white flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link
            className="text-[#171216] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            href="/alerts/review"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-center w-full">Reasignar Revisor</h2>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto pb-32">
        <section className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#85667f] dark:text-gray-400 px-6 pb-2">Revisor Actual</h3>
          <div className="px-4">
            <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-gray-900 p-4 shadow-md border border-gray-100 dark:border-gray-800">
              <div className="size-14 rounded-full bg-cover bg-center border-2 border-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCREj0n1-MX29n3A02_o6gVQDxrMui_CWiLgzq8mLLzdPn2U_KLO-HpUCN5bTaDXi08vcWJguQ9OdKRFyD_BNzz-Lq5g0AdQQO-nR7_tjSNWl3J8GQr8DqmeE-0n10dpni3CCt2pdnsC3htOCrSkRT9Czf_RbV9kNFIx1zEYbVjkKL3e23KC7BFuS2odmKQCPHy4vpAmz5JnYY0c50R8KR3tQhlw4cyQGFujclOwxRuk-5DAbG75MVLG1dyht_yCZR1e0OgW62zJeM'); }}></div>
              <div className="flex flex-col flex-1">
                <p className="text-primary text-xs font-bold uppercase tracking-tighter">Asignado actualmente</p>
                <p className="text-base font-extrabold text-[#171216] dark:text-white">Carlos Martínez</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">Comercial • Norte</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded text-red-600 text-xs font-bold">
                6 Pendientes
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="px-4 flex justify-between pb-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#85667f] dark:text-gray-400">Revisores Disponibles</h3>
            <span className="text-[10px] font-bold uppercase bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full text-[#171216] dark:text-white">Rama: Comercial</span>
          </div>
          <div className="px-4 space-y-3">
            {[
              {
                name: "Elena Rodríguez",
                badge: "3 relevamientos",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCREj0n1-MX29n3A02_o6gVQDxrMui_CWiLgzq8mLLzdPn2U_KLO-HpUCN5bTaDXi08vcWJguQ9OdKRFyD_BNzz-Lq5g0AdQQO-nR7_tjSNWl3J8GQr8DqmeE-0n10dpni3CCt2pdnsC3htOCrSkRT9Czf_RbV9kNFIx1zEYbVjkKL3e23KC7BFuS2odmKQCPHy4vpAmz5JnYY0c50R8KR3tQhlw4cyQGFujclOwxRuk-5DAbG75MVLG1dyht_yCZR1e0OgW62zJeM",
                selected: false,
                status: "3 relevamientos pendientes",
              },
              {
                name: "Julián Vera",
                badge: "1",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAv1Yro4oY4tlGGlrIVmGwZmwJUj6B8Q-h4USPkV_a2goBouxmQP9b-nbtNvaPS-3zB9o9zXecZoaYRR3J4WG6KE88TEdF_C9_Nlp0pk1X4vK-WXpKpMLHhdHedS2szke0RGUVeXQVzrgTqPhtVz7FtCDU7ekyCICj79Lgn_jnTEIYZrKcQFGkPL9PHLD-XfwBKMEotUmXbETHQERiBcyzNdnD1kfxNFLOFm0z4RLYBQZssoJUOviRwKjq1C8lLQBU0QHoLdQR-jqA",
                selected: true,
                status: "1 relevamiento pendiente",
              },
              {
                name: "Sofía Luna",
                badge: "0",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGVjKrBJR1hFIEpQOgcfh-2iJx9-NtH22vvLRSCZVUOdIhzTu_HB4v4-_p7s4mXzRcSmlF7kxNrQlXbuXkR9tAlRYyKxsnC7wlSMleIEViVkEHDCoOaB20P6teKtSWnZq2-JE5prMlvCvqOvE1E70_ZZY3bN6-cKMKc9DgY-dsxmLskD_-VWQ9oz1Cd9R72VJwDue9VcWiZf0H41AIX9dl7VCMiQe8zBtqpMhBLFmmaC5QHKYC11SD_6AwID5bHNe2YHjAEGq6S44",
                selected: false,
                status: "0 relevamientos pendientes",
              },
              {
                name: "Marcos Díaz",
                badge: "4",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlAS9z2tJRtMN8IilANN_UtvRBzf1W4PGQjz2n_Wc45cmZDBcp08htJayBRsVCHtAAl_eQzFmzOfI_PN0BY9R4_FBBcTSSLJYvufxXY-ypWhtSZpRQ2t-KB8ofaz0BKTI_mAYciNzaomJjnFJpX3o5cLxPjh5lPwIWGApFKCC3LQ_N81F-IkkomyNRtYxo1smefiJq8JvA_IFVGgqiuoOPfnXQQHaGWf6-GNy3iImcPueYnACFk6dsdxeEwr8IY0DnYoB0K9pWCuA",
                selected: false,
                status: "4 relevamientos pendientes",
              },
            ].map((reviewer) => (
              <label
                key={reviewer.name}
                className={`relative flex items-center gap-4 rounded-xl bg-white dark:bg-gray-900 p-4 ios-shadow border-2 transition-all cursor-pointer ${reviewer.selected ? "border-primary" : "border-transparent"}`}
              >
                <input className="hidden peer" type="radio" name="reviewer" defaultChecked={reviewer.selected} />
                <div className="size-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url("${reviewer.image}")` }}></div>
                <div className="flex flex-col flex-1">
                  <p className="text-base font-bold text-[#171216] dark:text-white">{reviewer.name}</p>
                  <p className={`text-xs uppercase font-semibold ${reviewer.selected ? "text-primary" : "text-gray-500 dark:text-gray-400"}`}>
                    {reviewer.status}
                  </p>
                </div>
                <div className={`size-6 rounded-full border-2 flex items-center justify-center transition-colors ${reviewer.selected ? "border-primary bg-primary text-white" : "border-gray-200 dark:border-gray-700 text-transparent"}`}>
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                </div>
              </label>
            ))}
          </div>
        </section>
      </main>
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light/90 to-transparent dark:from-background-dark dark:via-background-dark/90 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <Link href="/alerts/review" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base ios-shadow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined">sync_alt</span>
            Confirmar Reasignación
          </Link>
        </div>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 pb-safe pb-4">
        <div className="max-w-md mx-auto flex justify-around items-center pt-3">
          {[
  ["home", "Inicio", "/home"],
  ["assignment", "Modulo B3", "/alerts/review"],
  ["map", "Territorio", "/territory"],
  ["settings", "Perfil", "/profile"],
].map(([icon, label, href]) => (
  <Link
    key={icon}
    href={href}
    className={`flex flex-col items-center gap-1 ${icon === "assignment" ? "text-primary" : "text-gray-400 dark:text-gray-500"}`}
  >
    <span className="material-symbols-outlined" style={icon === "assignment" ? { fontVariationSettings: "'FILL' 1" } : undefined}>
      {icon}
    </span>
    <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
  </Link>
))}
        </div>
      </nav>
    </div>
  );
}


