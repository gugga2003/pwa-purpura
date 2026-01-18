"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OfflineQueuePage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/sync-center");
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Redirecting to Sync Center...</p>
        </div>
    );
}
