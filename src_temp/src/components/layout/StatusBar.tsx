import React from "react";

export default function StatusBar() {
  return (
    <div className="h-12 w-full bg-background-light dark:bg-background-dark flex items-end justify-between px-6 pb-2 select-none sticky top-0 z-50">
      <div className="text-xs font-semibold">9:41</div>
      <div className="flex gap-1.5 items-center">
        <span className="material-icons-round text-sm">signal_cellular_alt</span>
        <span className="material-icons-round text-sm">wifi</span>
        <span className="material-icons-round text-sm">battery_full</span>
      </div>
    </div>
  );
}
