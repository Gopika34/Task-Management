"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function TaskToolbar() {
    const [search, setSearch] = useState("");

    return (
        <div className="flex flex-col gap-3 border-b border-border px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
                <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search tasks..."
                    className="h-9 w-full rounded-md border border-border bg-surface pl-9 pr-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-border-strong"
                />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <Button variant="secondary">
                    <SlidersHorizontal size={15} className="mr-2" />
                    Filter
                </Button>
            </div>
        </div>
    );
}