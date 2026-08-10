"use client";

import { List, LayoutGrid } from "lucide-react";

export type ViewMode = "list" | "board";

type ViewToggleProps = {
    viewMode: ViewMode;
    onChange: (mode: ViewMode) => void;
};

export default function ViewToggle({
    viewMode,
    onChange,
}: ViewToggleProps) {
    return (
        <div className="flex h-8 items-center rounded-md border border-border bg-surface-muted p-0.5">
            <button
                type="button"
                onClick={() => onChange("list")}
                className={`flex h-7 items-center gap-1.5 rounded px-3 text-xs transition-colors ${
                    viewMode === "list"
                        ? "bg-white text-text-primary shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                }`}
            >
                <List size={13} strokeWidth={1.8} />
                <span>List</span>
            </button>

            <button
                type="button"
                onClick={() => onChange("board")}
                className={`flex h-7 items-center gap-1.5 rounded px-3 text-xs transition-colors ${
                    viewMode === "board"
                        ? "bg-white text-text-primary shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                }`}
            >
                <LayoutGrid size={13} strokeWidth={1.8} />
                <span>Board</span>
            </button>
        </div>
    );
}