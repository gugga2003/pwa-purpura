import Link from "next/link";

export default function TerritoryProfilePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-start w-12">
          <Link href="/territory/contacts" className="flex items-center">
            <span className="material-symbols-outlined cursor-pointer text-[#171216] dark:text-white">
              arrow_back_ios
            </span>
          </Link>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-center flex-1">Ficha de Contacto</h1>
        <div className="flex items-center justify-end w-12">
          <Link href="/territory/contacts" className="text-primary font-bold text-sm">
            Editar
          </Link>
        </div>
      </header>
      <main className="pb-10">
        <section className="mt-6 px-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-white dark:border-gray-700 soft-shadow"
                data-alt="Retrato de primer plano de un hombre sonriendo"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzx-VaGVrMQA2ZySeUcKkrzxuiAjEaqtxxWEBxoxmmheyOgzNSnl1ZUyJfchXj_o2AiYz8R1ufZOSI0ePDZBJEyKVB3rYVqInPRRtN48E5EzPRYRb92XQdgS6rDfUq4YJ6_ez1NcpTXAJhB-HP3TxlVtmH2mFuFuptl7kFYevHoHJWk8h3eRTMt2_D4RA5wSbvc-VIo5HNOqlVJR4GO8YRBZg_rIY48u7vX-BQ49IwP3eBx0D8Bby2Izvj_YOKA06dCkjkpP-oC30')",
                }}
              ></div>
              <div className="absolute bottom-1 right-2 bg-green-500 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-extrabold tracking-tight">Juan Perez</h2>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mt-1">
                Funcionario Municipal
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">ONGs - Desarrollo Social</p>
            </div>
          </div>
        </section>
        <section className="mt-6 px-4">
          <div className="flex gap-2 flex-wrap justify-center">
            <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-primary/10 px-4">
              <p className="text-primary text-xs font-bold uppercase tracking-wide">Vivienda</p>
            </div>
            <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-primary/10 px-4">
              <p className="text-primary text-xs font-bold uppercase tracking-wide">Educacion</p>
            </div>
            <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-primary/10 px-4">
              <p className="text-primary text-xs font-bold uppercase tracking-wide">Salud</p>
            </div>
          </div>
        </section>
        <section className="mt-8 px-4">
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/chat"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl py-3 flex items-center justify-center gap-2 soft-shadow transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">phone</span>
              <span className="font-bold text-sm">Llamar</span>
            </Link>
            <Link
              href="/chat"
              className="bg-white dark:bg-gray-800 text-primary border border-primary/20 rounded-xl py-3 flex items-center justify-center gap-2 soft-shadow transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">chat_bubble</span>
              <span className="font-bold text-sm">Mensaje</span>
            </Link>
          </div>
        </section>
        <div className="mt-8 space-y-6 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 soft-shadow">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-50 dark:border-gray-700 pb-2">
              <span className="material-symbols-outlined text-primary text-xl">contact_page</span>
              <h3 className="text-base font-bold">Informacion de Contacto</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-background-light dark:bg-gray-700 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-gray-500 text-lg">mail</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="text-sm font-semibold">juan.perez@municipio.gob.ar</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-background-light dark:bg-gray-700 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-gray-500 text-lg">location_on</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Direccion Territorial</p>
                  <p className="text-sm font-semibold">Calle Falsa 123, Barrio Los Pinos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 soft-shadow">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-50 dark:border-gray-700 pb-2">
              <span className="material-symbols-outlined text-primary text-xl">account_tree</span>
              <h3 className="text-base font-bold">Vinculo Institucional</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background-light dark:bg-gray-700 p-3 rounded-lg">
                <p className="text-[10px] text-primary font-extrabold uppercase tracking-widest mb-1">Territorio</p>
                <p className="text-sm font-bold">Zona Sur</p>
              </div>
              <div className="bg-background-light dark:bg-gray-700 p-3 rounded-lg">
                <p className="text-[10px] text-primary font-extrabold uppercase tracking-widest mb-1">Rama</p>
                <p className="text-sm font-bold">Desarrollo Social</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 soft-shadow">
            <div className="flex items-center justify-between mb-4 border-b border-gray-50 dark:border-gray-700 pb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">history</span>
                <h3 className="text-base font-bold">Historial de Interaccion</h3>
              </div>
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">2 ACTIVIDADES</span>
            </div>
            <div className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:h-full before:w-[1px] before:bg-gray-200 dark:before:bg-gray-700">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center z-10">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="bg-background-light dark:bg-gray-700/50 p-3 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-xs font-bold text-primary">Proyecto Vivienda 2024</p>
                    <span className="text-[9px] text-gray-400 font-medium">12 OCT</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    Participo como lider de mesa tecnica en el relevamiento de la Zona Sur.
                  </p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center z-10">
                  <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                </div>
                <div className="bg-background-light dark:bg-gray-700/50 p-3 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300">Relevamiento Territorial</p>
                    <span className="text-[9px] text-gray-400 font-medium">05 SEP</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    Mencionado como actor clave para la gestion de recursos de salud.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/territory"
              className="w-full mt-6 py-2 text-primary font-bold text-xs flex items-center justify-center gap-1 border border-dashed border-primary/30 rounded-lg"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              Registrar Interaccion
            </Link>
          </div>
        </div>
        <footer className="mt-8 px-4 text-center">
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
            Ultima actualizacion: 14 de Octubre, 2023
          </p>
        </footer>
      </main>
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/chat"
          className="bg-primary text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/40 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined">share</span>
        </Link>
      </div>
    </div>
  );
}
