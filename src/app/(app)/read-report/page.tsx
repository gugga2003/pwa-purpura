"use client";

import { useRouter } from "next/navigation";

export default function ReadReportPage() {
    const router = useRouter();

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col pb-24">
            <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 p-3 flex items-center justify-between shadow-sm">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-300 font-bold text-sm"
                >
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                    Volver
                </button>
                <span className="font-mono text-xs text-gray-500">Informe_Tecnico_V1.pdf</span>
                <button className="text-primary">
                    <span className="material-symbols-outlined">download</span>
                </button>
            </header>

            <main className="flex-1 p-4 overflow-y-auto">
                <div className="max-w-3xl mx-auto bg-white min-h-[800px] shadow-lg rounded-sm p-8 text-gray-800">
                    {/* Mock PDF Content */}
                    <div className="border-b-2 border-primary pb-4 mb-6 flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-bold uppercase tracking-wide text-primary">Informe Técnico</h1>
                            <p className="text-sm text-gray-500 mt-1">Relevamiento Territorial Zona Norte</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold">#LP-2023-REPORT-001</p>
                            <p className="text-xs text-gray-400">15 Oct 2023</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <section>
                            <h2 className="font-bold text-lg mb-2 border-b border-gray-200 pb-1">1. Introducción</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                El presente informe detalla los hallazgos realizados durante el operativo de campo llevado a cabo en el sector norte del departamento.
                                El objetivo principal fue identificar puntos críticos de infraestructura y evaluar la cobertura de servicios básicos en los barrios relevados.
                                Se utilizaron metodologías de observación directa y encuestas muestrales a referentes barriales.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-lg mb-2 border-b border-gray-200 pb-1">2. Datos Recopilados</h2>
                            <div className="grid grid-cols-2 gap-4 my-4">
                                <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                    <p className="text-xs text-gray-500 uppercase">Hogares Relevados</p>
                                    <p className="text-2xl font-bold">1,245</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                    <p className="text-xs text-gray-500 uppercase">Incidencias Críticas</p>
                                    <p className="text-2xl font-bold text-red-500">32</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-justify">
                                Se observa una alta densidad poblacional en las manzanas 40 a 55, con requerimientos urgentes en materia de luminaria pública y recolección de residuos.
                                Los datos sugieren una correlación directa entre la falta de mantenimiento urbano y los reportes vecinales recientes.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-lg mb-2 border-b border-gray-200 pb-1">3. Conclusiones</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                Se recomienda la intervención inmediata de las cuadrillas de mantenimiento para subsanar los riesgos eléctricos detectados.
                                Asimismo, se propone una segunda etapa de relevamiento focalizada en el aspecto sociosanitario.
                            </p>
                        </section>

                        <div className="mt-12 flex justify-between items-end pt-8 border-t border-gray-200">
                            <div>
                                <p className="font-bold text-sm">Firma del Responsable</p>
                                <div className="h-16 w-32 bg-gray-50 mt-2 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs italic">
                                    [Firma Digital]
                                </div>
                            </div>
                            <div className="text-right text-xs text-gray-400">
                                <p>Generado por La Púrpura PWA</p>
                                <p>Hash: 8f9d2a...1b2c</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
