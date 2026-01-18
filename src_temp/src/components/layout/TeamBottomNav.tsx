"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveTab = "dashboard" | "map" | "team" | "settings";

type TeamBottomNavProps = {
  active?: ActiveTab;
};

export default function TeamBottomNav({ active }: TeamBottomNavProps) {
  const pathname = usePathname();
  const resolvedActive =
    active ??
    (pathname.startsWith("/team") || pathname.startsWith("/users")
      ? "team"
      : pathname.startsWith("/map")
        ? "map"
        : pathname.startsWith("/settings")
          ? "settings"
          : "dashboard");
  const baseItem =
    "flex flex-col items-center justify-center w-16 group";
  const baseIcon =
    "material-icons-round text-subtext-light dark:text-subtext-dark text-2xl group-hover:text-primary transition-colors";
  const baseLabel =
    "text-[10px] font-medium text-subtext-light dark:text-subtext-dark mt-1 group-hover:text-primary transition-colors";

  return (
    <nav className="fixed bottom-0 w-full bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 z-50 rounded-t-2xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center px-2 pb-5 pt-1">
        <Link href="/home" className={baseItem}>
          <span className={resolvedActive === "dashboard" ? "material-icons-round text-primary text-2xl" : baseIcon}>dashboard</span>
          <span className={resolvedActive === "dashboard" ? "text-[10px] font-medium text-primary mt-1" : baseLabel}>Dash</span>
        </Link>
        <Link href="/map" className={baseItem}>
          <span className={resolvedActive === "map" ? "material-icons-round text-primary text-2xl" : baseIcon}>map</span>
          <span className={resolvedActive === "map" ? "text-[10px] font-medium text-primary mt-1" : baseLabel}>Map</span>
        </Link>
        <Link
          href="/home"
          className="flex flex-col items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 -mt-6 border-4 border-background-light dark:border-background-dark"
          aria-label="Home"
        >
          <img
            alt="Logo"
            className="w-8 h-8 invert brightness-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAxi6COLkHB1aiqb_nux0LO2B03RHPHAy963DqBW3y9Uo0Y3e3TgUh-ABoujIZ0wG55GMddPP2OVEIJJ3kFE_iEBPDrqhc4DLK6aPdYo2kJxbsFfXEq4fxYPSizbHzI90M1uHcFtlnSqiMlO3uP4mfW3Fdixyh3iGOvVsKmWUsyNKq-pOC_esDD5ppQlgrU3hTxxPH8PB2rdr8DPO3dl331bORuEiFczDRlvezijWfoeAAu-YYzJI9DcNDYPnXdbdN6iRoAZP1t5I"
          />
        </Link>
        <Link href="/team" className={baseItem}>
          <span className={resolvedActive === "team" ? "material-icons-round text-primary text-2xl" : baseIcon}>people</span>
          <span className={resolvedActive === "team" ? "text-[10px] font-medium text-primary mt-1" : baseLabel}>Team</span>
        </Link>
        <Link href="/settings" className={baseItem}>
          <span className={resolvedActive === "settings" ? "material-icons-round text-primary text-2xl" : baseIcon}>settings</span>
          <span className={resolvedActive === "settings" ? "text-[10px] font-medium text-primary mt-1" : baseLabel}>Settings</span>
        </Link>
      </div>
    </nav>
  );
}
