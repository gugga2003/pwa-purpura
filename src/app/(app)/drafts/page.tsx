"use client";

import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DraftsPage() {
    const drafts = useAppStore((state) => state.drafts);
    const router = useRouter();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 px-4 pt-6 text-[#171216] dark:text-white">
            <header className="mb-6">
                <h1 className="text-2xl font-bold">Borradores</h1>
                <p className="text-sm text-gray-500">Tus trabajos en progreso</p>
            </header>

            <div className="space-y-3">
                {drafts.length === 0 ? (
                    <p className="text-center text-gray-400 py-10">No tienes borradores pendientes.</p>
                ) : (
                    drafts.map((draft) => (
                        <div key={draft.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">{draft.title}</h3>
                                <p className="text-xs text-gray-500 capitalize">{draft.type} • {draft.lastModified}</p>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 max-w-[100px]">
                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${draft.progress}%` }}></div>
                                </div>
                            </div>
                            <button
                                onClick={() => router.push(`/drafts/${draft.id}`)}
                                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-primary"
                            >
                                <span className="material-symbols-outlined">edit</span>
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="fixed bottom-24 right-6 z-20">
                <Link href="/drafts/new" className="bg-primary text-white p-4 rounded-2xl shadow-xl flex items-center gap-2 font-bold">
                    <span className="material-symbols-outlined">add</span>
                    Nuevo Borrador
                </Link>
            </div>
        </div>
    );
}
