"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReassignPage() {
  const router = useRouter();
  const [selectedReviewer, setSelectedReviewer] = useState("Julián Vera");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReassign = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Reasignado exitosamente a ${selectedReviewer}`);
      router.push("/alerts/review");
    }, 1500);
  };

  const reviewers = [
    {
      name: "Elena Rodríguez",
      status: "3 relevamientos pendientes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCREj0n1-MX29n3A02_o6gVQDxrMui_CWiLgzq8mLLzdPn2U_KLO-HpUCN5bTaDXi08vcWJguQ9OdKRFyD_BNzz-Lq5g0AdQQO-nR7_tjSNWl3J8GQr8DqmeE-0n10dpni3CCt2pdnsC3htOCrSkRT9Czf_RbV9kNFIx1zEYbVjkKL3e23KC7BFuS2odmKQCPHy4vpAmz5JnYY0c50R8KR3tQhlw4cyQGFujclOwxRuk-5DAbG75MVLG1dyht_yCZR1e0OgW62zJeM",
    },
    {
      name: "Julián Vera",
      status: "1 relevamiento pendiente",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv1Yro4oY4tlGGlrIVmGwZmwJUj6B8Q-h4USPkV_a2goBouxmQP9b-nbtNvaPS-3zB9o9zXecZoaYRR3J4WG6KE88TEdF_C9_Nlp0pk1X4vK-WXpKpMLHhdHedS2szke0RGUVeXQVzrgTqPhtVz7FtCDU7ekyCICj79Lgn_jnTEIYZrKcQFGkPL9PHLD-XfwBKMEotUmXbETHQERiBcyzNdnD1kfxNFLOFm0z4RLYBQZssoJUOviRwKjq1C8lLQBU0QHoLdQR-jqA",
    },
    {
      name: "Sofía Luna",
      status: "0 relevamientos pendientes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGVjKrBJR1hFIEpQOgcfh-2iJx9-NtH22vvLRSCZVUOdIhzTu_HB4v4-_p7s4mXzRcSmlF7kxNrQlXbuXkR9tAlRYyKxsnC7wlSMleIEViVkEHDCoOaB20P6teKtSWnZq2-JE5prMlvCvqOvE1E70_ZZY3bN6-cKMKc9DgY-dsxmLskD_-VWQ9oz1Cd9R72VJwDue9VcWiZf0H41AIX9dl7VCMiQe8zBtqpMhBLFmmaC5QHKYC11SD_6AwID5bHNe2YHjAEGq6S44",
    },
    {
      name: "Marcos Díaz",
      status: "4 relevamientos pendientes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlAS9z2tJRtMN8IilANN_UtvRBzf1W4PGQjz2n_Wc45cmZDBcp08htJayBRsVCHtAAl_eQzFmzOfI_PN0BY9R4_FBBcTSSLJYvufxXY-ypWhtSZpRQ2t-KB8ofaz0BKTI_mAYciNzaomJjnFJpX3o5cLxPjh5lPwIWGApFKCC3LQ_N81F-IkkomyNRtYxo1smefiJq8JvA_IFVGgqiuoOPfnXQQHaGWf6-GNy3iImcPueYnACFk6dsdxeEwr8IY0DnYoB0K9pWCuA",
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#171216] dark:text-white flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            onClick={() => router.back()}
            className="text-[#171216] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-center w-full">Reasignar Revisor</h2>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto pb-32">
        <section className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#85667f] dark:text-gray-400 px-6 pb-2">Revisor Actual</h3>
          <div className="px-4">
            <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-gray-900 p-4 shadow-md border border-gray-100 dark:border-gray-800">
              <div className="size-14 rounded-full bg-cover bg-center border-2 border-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCREj0n1-MX29n3A02_o6gVQDxrMui_CWiLgzq8mLLzdPn2U_KLO-HpUCN5bTaDXi08vcWJguQ9OdKRFyD_BNzz-Lq5g0AdQQO-nR7_tjSNWl3J8GQr8DqmeE-0n10dpni3CCt2pdnsC3htOCrSkRT9Czf_RbV9kNFIx1zEYbVjkKL3e23KC7BFuS2odmKQCPHy4vpAmz5JnYY0c50R8KR3tQhlw4cyQGFujclOwxRuk-5DAbG75MVLG1dyht_yCZR1e0OgW62zJeM')" }}></div>
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
            {reviewers.map((reviewer) => {
              const isSelected = selectedReviewer === reviewer.name;
              return (
                <label
                  key={reviewer.name}
                  className={`relative flex items-center gap-4 rounded-xl bg-white dark:bg-gray-900 p-4 ios-shadow border-2 transition-all cursor-pointer ${isSelected ? "border-primary" : "border-transparent"}`}
                  onClick={() => setSelectedReviewer(reviewer.name)}
                >
                  <input className="hidden peer" type="radio" name="reviewer" checked={isSelected} readOnly />
                  <div className="size-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url("${reviewer.image}")` }}></div>
                  <div className="flex flex-col flex-1">
                    <p className="text-base font-bold text-[#171216] dark:text-white">{reviewer.name}</p>
                    <p className={`text-xs uppercase font-semibold ${isSelected ? "text-primary" : "text-gray-500 dark:text-gray-400"}`}>
                      {reviewer.status}
                    </p>
                  </div>
                  <div className={`size-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? "border-primary bg-primary text-white" : "border-gray-200 dark:border-gray-700 text-transparent"}`}>
                    <span className="material-symbols-outlined text-white text-sm">check</span>
                  </div>
                </label>
              );
            })}
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pb-8 safe-area-bottom z-50">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleReassign}
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base ios-shadow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                Procesando...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">sync_alt</span>
                Confirmar Reasignación
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}


