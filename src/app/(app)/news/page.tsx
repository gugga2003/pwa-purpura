"use client";

import { useAppStore } from "@/lib/store";
import Link from "next/link";

export default function NewsPage() {
    const user = useAppStore((state) => state.user);

    const news = [
        {
            id: 1,
            title: "Nuevo Protocolo de Relevamiento",
            date: "Hoy, 10:30 AM",
            category: "OPERACIONES",
            excerpt: "Se ha actualizado la guía técnica para la recolección de datos en barrios vulnerables...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmx_W7xI-y_z-Rz-Gz-Wz-X-Y-Z-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z"
        },
        {
            id: 2,
            title: "Mantenimiento Programado",
            date: "Ayer",
            category: "SISTEMA",
            excerpt: "El día Domingo la plataforma estará fuera de servicio por 2 horas debido a actualizaciones de seguridad.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmx_W7xI-y_z-Rz-Gz-Wz-X-Y-Z-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z"
        }
    ];

    return (
        <main className="px-5 pb-24 space-y-6">
            <section className="pt-4">
                <h2 className="text-xl font-bold text-[#171216] dark:text-white mb-4">Últimas Novedades</h2>
                <div className="space-y-4">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-700">
                            <div className="h-40 bg-gray-200 dark:bg-gray-700 relative">
                                <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-[11px] text-primary font-bold">{item.date}</p>
                                <h3 className="font-bold text-lg text-[#171216] dark:text-white leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{item.excerpt}</p>
                                <Link href={`/news/${item.id}`} className="inline-flex items-center gap-1 text-primary text-sm font-bold pt-2">
                                    Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
