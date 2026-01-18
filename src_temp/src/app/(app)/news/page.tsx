"use client";

import Link from "next/link";

import { useAppStore } from "@/lib/store";

const highlightImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuArU940TE6MJu_bxUuQeeV5Sg3G5EbgYRzHbfNk7aNr4flyhuBWUc5QCEWCkr7TSgb_LS9vnNz26x5goTnsuHrGcamTIGg3iSIM28-A1it4Utit9XtgNls9L_RXfgAVuM8JfyebNaYg8k7YaT0A2l2ThBKf0WtNpvJ0nTfOPEGSTKtBJmuzmmheEphAs9Vk1rWwyrrGE_bBKLMDDmRL4QEw8jpEf6ngKzK6FJXjYMS-q0HwzRD3irB3-qxzijDFsHa-l0j1Jw1aty4";

const listImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGkGXGWXCGS8li6xQTTc_0z0DPysXcDI55JmiQ-bbtdHdB3MrU2uyviu4nrwpkDZiYd4bASHl_hPLTUt82IkgsN2Ui1RKj27PyEeWf8UypmwtC6PyXkllcLC0hla436CjU02pBaJAT2UuK18wX8ALts7991L-2-YW7bX67ehzlfHBp04oUUYl7c_kEfvYDa87h1TPaIan50Df8Qxq3H9BNV6hyAkPtX-q5J7o9mHxeJ2oi0VKHEyguagONyhJ0oaMl4ZTmqwJGL7M",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnjOK7V1mqD0EPrjYVL9P4HU-PxE8lnX1UVqDxVXApr4On7MS5hyx5qF0WNS0TwDnqT1IhL6P9JHO6CEIYGvsd6wnMoA554BqaK042DrjI5bO1Y_WC2QZLgQzB-2BqRMYmBGL5j_mr_0T2xa8DrLRect-VlfNeAdIYHMzNksRDHce1gGgDqZ8kRLcLzLRW1vxQGvc2_hubq9s-cK0zbfPc8z97PfDr9Ns8tkfNGvDKBdJdtSNiAEHngXstA-uddrfBBTgHXmcvUOc",
];

const categories = ["Operativo", "Corporativo", "Tecnologia", "Territorio"];

function formatRelativeTime(value: string) {
  const createdAt = new Date(value).getTime();
  if (Number.isNaN(createdAt)) return "Recién";
  const diffMs = Date.now() - createdAt;
  const diffMinutes = Math.max(1, Math.round(diffMs / 60000));
  if (diffMinutes < 60) return `Hace ${diffMinutes} min`;
  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `Hace ${diffHours} h`;
  const diffDays = Math.round(diffHours / 24);
  return `Hace ${diffDays} d`;
}

export default function NewsPage() {
  const news = useAppStore((state) => state.news);
  const primary = news[0];
  const rest = news.slice(1);

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#f7f7f7] dark:bg-[#121212] shadow-2xl font-manrope text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-200">
      <header
        className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#1e1e1e]/95 backdrop-blur-md border-b border-gray-100 dark:border-white/5 px-4 pb-3"
        style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-gray-100 dark:ring-gray-700"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCDacPSZt-hb-qN8hI6B5VgzYJWE_dFJIfYKkRc9FkxYoBT7rAkJ2Qfl_rabIZ-H0GtSf48TZ1xwQ72J-SMJF7pwcsGpcwnkrKr34KZSfO1ShWnndpQuQXwQMaqSRC9Mz4Nku0luDjaiq4gmn2yMzwchwNakRjyrJHPxVFjsKin0goAi33QStZArGq_D0sGxL0qhzEh_QSeWqWA7GXRg_pCbyvWMhqJdox892BvOxt1a-TjPd5zpNf78A3PIVkjOH6pcwv4PkQZYE");',
                }}
              ></div>
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-[#1e1e1e] rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#85667f] dark:text-gray-400 leading-none mb-1">
                Bienvenido,
              </span>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white leading-none">Carlos M.</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/alerts"
              className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors relative"
              aria-label="Notificaciones"
            >
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-200">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-[#871d75] rounded-full animate-pulse"></span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full pb-24">
        <div className="px-5 pt-6 pb-2">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Novedades <span className="text-[#871d75]">La Púrpura</span>
          </h1>
          <p className="text-sm text-[#85667f] dark:text-gray-400 mt-1">Mantente informado de la operación.</p>
        </div>

        <div className="sticky top-[72px] z-30 bg-[#f7f7f7]/95 dark:bg-[#121212]/95 backdrop-blur-sm py-2 pl-5 overflow-hidden">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pr-5 pb-2">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#871d75] text-white px-5 shadow-sm shadow-[#871d75]/30 transition-transform active:scale-95">
              <span className="text-sm font-semibold">Todos</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-5 text-slate-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
              <span className="text-sm font-medium">Operativo</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-5 text-slate-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
              <span className="text-sm font-medium">RRHH</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-5 text-slate-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
              <span className="text-sm font-medium">Urgente</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-5">
          {primary ? (
            <article className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#1e1e1e] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border-2 border-[#871d75] transition-all hover:shadow-lg">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-md bg-[#871d75]/90 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                <span className="material-symbols-outlined text-[14px]">priority_high</span>
                IMPORTANTE
              </div>

              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div
                  className="h-full w-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${highlightImage}")`,
                  }}
                ></div>
              </div>

              <div className="flex flex-col p-5 gap-3">
                <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white">{primary.title}</h3>
                <p className="text-base leading-relaxed text-[#85667f] dark:text-gray-300">{primary.summary}</p>
                <div className="mt-2 flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-4">
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                    {formatRelativeTime(primary.createdAt)} • {primary.author}
                  </span>
                  <Link
                    href="/news"
                    className="flex items-center gap-1.5 text-sm font-bold text-[#871d75] hover:text-[#6a165c] dark:hover:text-fuchsia-400 transition-colors"
                  >
                    Leer comunicado
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ) : (
            <div className="mt-4 flex flex-col items-center justify-center gap-3 py-8 opacity-60">
              <div className="flex size-12 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5">
                <span className="material-symbols-outlined text-gray-400">check_circle</span>
              </div>
              <p className="text-sm font-medium text-gray-400 text-center">No hay novedades para mostrar</p>
            </div>
          )}

          {rest.map((item, index) => {
            const image = listImages[index % listImages.length];
            const category = categories[(index + 1) % categories.length];

            return (
              <article
                key={item.id}
                className="flex flex-col rounded-xl bg-white dark:bg-[#1e1e1e] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-white/5 overflow-hidden transition-all hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div
                    className="h-40 sm:h-auto sm:w-1/3 w-full bg-center bg-cover bg-no-repeat relative"
                    style={{
                      backgroundImage: `url("${image}")`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4 gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center rounded bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-green-700 dark:text-green-300">
                          {category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-gray-100">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#85667f] dark:text-gray-400 line-clamp-2">{item.summary}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-end">
                      <Link
                        href="/news"
                        className="text-sm font-semibold text-[#871d75] dark:text-fuchsia-400 hover:underline"
                      >
                        Leer mas
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {primary && rest.length === 0 ? (
            <div className="mt-4 flex flex-col items-center justify-center gap-3 py-8 opacity-60">
              <div className="flex size-12 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5">
                <span className="material-symbols-outlined text-gray-400">check_circle</span>
              </div>
              <p className="text-sm font-medium text-gray-400 text-center">Todo esta al dia</p>
            </div>
          ) : null}
        </div>
      </main>

      <nav
        className="fixed bottom-0 z-50 w-full max-w-md bg-white dark:bg-[#1e1e1e] border-t border-gray-200 dark:border-white/5 pb-safe shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)]"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center justify-around h-16">
          <Link
            className="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors group"
            href="/home"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">home_app_logo</span>
            <span className="text-[10px] font-medium">Inicio</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors group"
            href="/map"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">map</span>
            <span className="text-[10px] font-medium">Mapa</span>
          </Link>
          <Link
            className="relative flex flex-col items-center justify-center w-full h-full gap-1 text-[#871d75] dark:text-fuchsia-400 transition-colors"
            href="/news"
          >
            <div className="absolute -top-[1px] w-12 h-1 rounded-b-lg bg-[#871d75] dark:bg-fuchsia-400"></div>
            <span className="material-symbols-outlined fill-current">newspaper</span>
            <span className="text-[10px] font-bold">Noticias</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors group"
            href="/profile"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
            <span className="text-[10px] font-medium">Perfil</span>
          </Link>
        </div>
      </nav>

      <Link
        href="/news/new"
        className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#871d75] text-white shadow-lg shadow-[#871d75]/40 transition-transform active:scale-90 hover:bg-[#6a165c]"
        aria-label="Anadir novedad"
      >
        <span className="material-symbols-outlined">add</span>
      </Link>
    </div>
  );
}
