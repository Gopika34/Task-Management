"use client";

import {
    Search,
    SlidersHorizontal,
    Columns3,
    Plus,
} from "lucide-react";

export default function TaskToolbar() {
    return (
        <div className="flex items-center gap-2">
            {/* Search */}
            <button
                type="button"
                aria-label="Search tasks"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-secondary hover:bg-surface-muted"
            >
                <Search
                    size={14}
                    strokeWidth={1.8}
                />
            </button>

            {/* Fields */}
            <button
                type="button"
                className="flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-xs text-text-secondary hover:bg-surface-muted"
            >
                <Columns3
                    size={14}
                    strokeWidth={1.8}
                />

                <span>Fields</span>
            </button>

            {/* Filter */}
            <button
                type="button"
                aria-label="Filter tasks"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-secondary hover:bg-surface-muted"
            >
                <SlidersHorizontal
                    size={14}
                    strokeWidth={1.8}
                />
            </button>

            {/* Add Task */}
            <button
                type="button"
                className="flex h-8 items-center gap-1.5 rounded-md bg-black px-3 text-xs font-medium text-white hover:bg-neutral-800"
            >
                <Plus
                    size={14}
                    strokeWidth={2}
                />

                <span>Add Task</span>
            </button>
        </div>
    );
}