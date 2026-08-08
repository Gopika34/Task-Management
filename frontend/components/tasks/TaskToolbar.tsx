"use client";

import {
    Search,
    SlidersHorizontal,
    Columns3,
    Plus,
} from "lucide-react";

export default function TaskToolbar() {
    return (
        <div className="flex items-center gap-2 justify-between m-3">

            <h1 className="text-xl font-semibold tracking-tight text-text-primary">
                Tasks
            </h1>

            <div className="flex gap-2 items-center">

                {/* Search */}
                <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-border hover:bg-surface-muted"
                    aria-label="Search tasks"
                >
                    <Search size={14} strokeWidth={2} />
                </button>

                {/* Fields */}
                <button
                    type="button"
                    className="flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-xs hover:bg-surface-muted"
                >
                    <Columns3 size={14} strokeWidth={2} />
                    <span>Fields</span>
                </button>

                {/* Filter */}
                <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-border hover:bg-surface-muted"
                    aria-label="Filter tasks"
                >
                    <SlidersHorizontal size={14} strokeWidth={2} />
                </button>

                {/* Add Task */}
                <button
                    type="button"
                    className="flex h-8 items-center gap-1.5 rounded-md bg-black px-3 text-xs font-medium text-white hover:bg-neutral-800"
                >
                    <Plus size={14} strokeWidth={2} />
                    <span>Add Task</span>
                </button>
            </div>

        </div>
    );
}