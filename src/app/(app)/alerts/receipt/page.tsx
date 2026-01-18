"use client";

import { useRouter } from "next/navigation";

export default function ReceiptPage() {
  const router = useRouter();

  return (
    <div className="bg-primary min-h-screen text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-[-20%] left-[-20%] size-[500px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-20%] size-[500px] rounded-full bg-purple-900/40 blur-3xl" />

      <div className="z-10 w-full max-w-sm">
        <header className="flex justify-between items-start mb-8">
          <button onClick={() => router.back()} className="bg-white/10 p-2 rounded-full backdrop-blur-md">
            <span className="material-symbols-outlined text-white">close</span>
          </button>
          <button className="bg-white/10 p-2 rounded-full backdrop-blur-md">
            <span className="material-symbols-outlined text-white">share</span>
          </button>
        </header>

        <div className="bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Receipt ZigZap Top */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-primary"
            style={{ clipPath: "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)" }}>
          </div>

          <div className="p-8 pt-12 text-center">
            <div className="size-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-3xl text-success">check_circle</span>
            </div>
            <h2 className="text-2xl font-black uppercase mb-1">Comprobante</h2>
            <p className="text-gray-500 font-mono text-xs mb-6">ID: #ORD-99283-MX</p>

            <div className="border-t border-b border-gray-100 py-4 my-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Fecha</span>
                <span className="font-bold">20 Ene 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Hora</span>
                <span className="font-bold">14:30 HS</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Operador</span>
                <span className="font-bold">Juan Pérez</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Territorio</span>
                <span className="font-bold">Zona Norte</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl mb-4">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LaPurpuraPWA_Receipt_99283"
                alt="QR Receipt"
                className="size-32 mx-auto mix-blend-multiply opacity-90"
              />
              <p className="text-[10px] text-gray-400 mt-2 font-mono">Escanear para verificar autenticidad</p>
            </div>
          </div>

          {/* Receipt ZigZap Bottom */}
          <div className="h-2 bg-gray-50"></div>
        </div>

        <button
          onClick={() => alert('Descarga iniciada')}
          className="w-full bg-white text-primary font-bold py-4 rounded-xl mt-6 shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">download</span>
          Descargar PDF
        </button>
      </div>
    </div>
  );
}
