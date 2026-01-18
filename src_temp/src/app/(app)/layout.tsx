"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { appStore, useAppStore } from "@/lib/store";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const session = useAppStore((state) => state.session);
  const hydrated = useAppStore((state) => state.hydrated);
  const bootstrapped = useAppStore((state) => state.bootstrapped);

  useEffect(() => {
    appStore.hydrate();
  }, []);

  useEffect(() => {
    if (hydrated && !bootstrapped) {
      appStore.bootstrap();
    }
  }, [hydrated, bootstrapped]);

  useEffect(() => {
    if (hydrated && !session) {
      router.replace("/");
    }
  }, [hydrated, session, router]);

  return <>{children}</>;
}
