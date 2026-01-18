import Link from "next/link";

const contacts = [
  {
    id: "contact-1",
    name: "Juan Perez",
    role: "Funcionario Municipal",
    territory: "Zona Sur",
    email: "juan.perez@municipio.gob.ar",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzx-VaGVrMQA2ZySeUcKkrzxuiAjEaqtxxWEBxoxmmheyOgzNSnl1ZUyJfchXj_o2AiYz8R1ufZOSI0ePDZBJEyKVB3rYVqInPRRtN48E5EzPRYRb92XQdgS6rDfUq4YJ6_ez1NcpTXAJhB-HP3TxlVtmH2mFuFuptl7kFYevHoHJWk8h3eRTMt2_D4RA5wSbvc-VIo5HNOqlVJR4GO8YRBZg_rIY48u7vX-BQ49IwP3eBx0D8Bby2Izvj_YOKA06dCkjkpP-oC30",
  },
  {
    id: "contact-2",
    name: "Camila Duarte",
    role: "Referente Social",
    territory: "Zona Centro",
    email: "camila.duarte@lapurpura.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8r5fzpFJcrH_X57dLKfrpjI9_J1n3vQ0g4x6xT5bUQAGLwFjlKp9mq07Kr_AaVxT1arR9Tzpkahb4qJ0mR5x7x8dQh8l4p7sH5YpSbdt5oZK7qVd8U9tkHk25l0gS5F0mBnPa2Q6q6bOj2Q5R3rQmHf9fM1lv-DY60y0SmgnQjF5uYKj8kC7aXW_kP6mVefWWl_EWzJP6ZOl0Wm9rBXS4"
  },
  {
    id: "contact-3",
    name: "Lucas Mercado",
    role: "Coordinador Tecnico",
    territory: "Zona Norte",
    email: "lucas.mercado@lapurpura.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7B0a1o4xRr0sB2uJ7m9WZ7s2qCE6E7URx6b4wB5nyD2dU6rMYNLkQbt9JQDs9A4eZja6LqTnxtV6r5v0QFvt0y9SgZ2YgUxn6lvW_2s9No6o4M8r4jNmB7c8p6dV4v"
  },
];

export default function TerritoryContactsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#171216] dark:text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Link
            href="/territory"
            className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-[#171216] dark:text-white">arrow_back_ios</span>
          </Link>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Contactos Territoriales</h1>
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Modulo C1</p>
          </div>
        </div>
        <Link
          href="/territory/profile"
          className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary"
        >
          <span className="material-symbols-outlined text-xl">person</span>
        </Link>
      </header>
      <main className="pb-24">
        <section className="px-4 pt-6 pb-2">
          <h2 className="text-2xl font-extrabold tracking-tight">Directorio Territorial</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Identifica referentes y responsables por zona.
          </p>
        </section>
        <section className="px-4 pb-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
              placeholder="Buscar por nombre, territorio o email"
              type="text"
            />
          </div>
        </section>
        <section className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-primary text-white px-4 text-xs font-bold">
              Todos
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 text-xs font-semibold">
              Zona Norte
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 text-xs font-semibold">
              Zona Centro
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 text-xs font-semibold">
              Zona Sur
            </button>
          </div>
        </section>
        <section className="px-4 space-y-4">
          {contacts.map((contact) => (
            <Link
              key={contact.id}
              href="/territory/profile"
              className="bg-white dark:bg-gray-800 rounded-xl p-4 soft-shadow border border-gray-100 dark:border-gray-700 flex items-center gap-4"
            >
              <div
                className="size-14 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700"
                style={{ backgroundImage: `url('${contact.avatar}')` }}
              ></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#171216] dark:text-white truncate">{contact.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{contact.role}</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">
                  {contact.territory}
                </p>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
          ))}
        </section>
      </main>
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/team/invite"
          className="bg-primary text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/40 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined">person_add</span>
        </Link>
      </div>
    </div>
  );
}
