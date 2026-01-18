"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveTab = "incidents" | "map" | "tasks" | "settings";

type IncidentsBottomNavProps = {
  active?: ActiveTab;
};

export default function IncidentsBottomNav({ active }: IncidentsBottomNavProps) {
  const pathname = usePathname();
  const resolvedActive =
    active ??
    (pathname.startsWith("/incidents")
      ? "incidents"
      : pathname.startsWith("/map")
        ? "map"
        : pathname.startsWith("/tasks")
          ? "tasks"
          : "settings");
  const baseItem =
    "flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors";
  const activeItem =
    "flex flex-col items-center justify-center w-full h-full text-primary dark:text-purple-400";

  return (
    <nav className="fixed bottom-0 w-full bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark pb-safe z-40">
      <div className="flex justify-around items-center h-16 px-2">
        <Link href="/incidents" className={resolvedActive === "incidents" ? activeItem : baseItem}>
          <span className="material-icons-round text-2xl">list_alt</span>
          <span className="text-[10px] font-medium mt-1">Incidents</span>
        </Link>
        <Link href="/map" className={resolvedActive === "map" ? activeItem : baseItem}>
          <span className="material-icons-round text-2xl">map</span>
          <span className="text-[10px] font-medium mt-1">Map</span>
        </Link>
        <Link href="/tasks" className={resolvedActive === "tasks" ? activeItem : baseItem}>
          <span className="material-icons-round text-2xl">task</span>
          <span className="text-[10px] font-medium mt-1">Tasks</span>
        </Link>
        <Link href="/settings" className={resolvedActive === "settings" ? activeItem : baseItem}>
          <span className="material-icons-round text-2xl">settings</span>
          <span className="text-[10px] font-medium mt-1">Settings</span>
        </Link>
      </div>
      <div className="h-6 w-full bg-surface-light dark:bg-surface-dark"></div>
    </nav>
  );
}
