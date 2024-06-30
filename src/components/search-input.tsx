"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
    const searchParams = useSearchParams();

    return (
        <form action={actions.search}>
            <Input name="term" defaultValue={searchParams.get("term") || ""} />
        </form>
    );
}

// Client components with 'useSearchParams' need to be wrapped with 'Suspense' or you'll get a strange warning at build time

// Pages that reference 'searchParams' will be marked as 'dynamic' for purposes of build time caching
