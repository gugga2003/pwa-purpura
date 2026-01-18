"use client";

import ModulePlaceholder from "@/components/templates/ModulePlaceholder";
import { useParams } from "next/navigation";

export default function Page() {
    const { id } = useParams();
    return <ModulePlaceholder title={"Incidente #" + id} />;
}