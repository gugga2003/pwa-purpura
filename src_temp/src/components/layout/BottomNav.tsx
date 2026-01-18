"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveTab = "home" | "tasks" | "alerts" | "settings";

type BottomNavProps = {
  active?: ActiveTab;
};

export default function BottomNav({ active }: BottomNavProps) {
  const pathname = usePathname();
  const resolvedActive =
    active ??
    (pathname.startsWith("/tasks") || pathname.startsWith("/new-task")
      ? "tasks"
      : pathname.startsWith("/alerts")
        ? "alerts"
        : pathname.startsWith("/settings")
          ? "settings"
          : "home");
  const baseItem =
    "flex flex-col items-center justify-center w-12 text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary transition-colors";
  const activeItem = "flex flex-col items-center justify-center w-12 text-primary";

  return (
    <nav className="fixed bottom-0 w-full bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-6 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] z-50">
      <div className="flex justify-between items-center h-16 pb-4">
        <Link href="/home" className={resolvedActive === "home" ? activeItem : baseItem}>
          <span className="material-icons-round text-2xl">home</span>
          <span className="text-[10px] font-medium mt-1">Home</span>
        </Link>
        <Link href="/tasks" className={resolvedActive === "tasks" ? activeItem : baseItem}>
          <span className="material-icons-round text-2xl">list_alt</span>
          <span className="text-[10px] font-medium mt-1">Tasks</span>
        </Link>
        <div className="relative -top-6">
          <Link
            href="/new-task"
            className="w-14 h-14 bg-primary rounded-full shadow-lg shadow-purple-900/20 flex items-center justify-center text-white transform active:scale-95 transition-all border-4 border-white dark:border-card-dark"
            aria-label="Add task"
          >
            <span className="material-icons-round text-3xl">add</span>
          </Link>
        </div>
        <Link href="/alerts" className={resolvedActive === "alerts" ? activeItem : baseItem}>
          <div className="relative">
            <span className="material-icons-round text-2xl">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full"></span>
          </div>
          <span className="text-[10px] font-medium mt-1">Alerts</span>
        </Link>
        <Link href="/settings" className={resolvedActive === "settings" ? activeItem : baseItem}>
          <span className="material-icons-round text-2xl">settings</span>
          <span className="text-[10px] font-medium mt-1">Settings</span>
        </Link>
      </div>
      <div className="w-full flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>
    </nav>
  );
}
