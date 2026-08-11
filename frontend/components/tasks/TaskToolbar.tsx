"use client";

import { useState } from "react";
import {
    Search,
    SlidersHorizontal,
    Columns3,
    Plus,
    Check,
} from "lucide-react";

import ViewToggle, { type ViewMode } from "./ViewToggle";

type TaskToolbarProps = {
    viewMode: ViewMode;
    onViewChange: (mode: ViewMode) => void;
    searchQuery: string;
    onSearchChange: (value: string) => void;
};
export default function TaskToolbar({
    viewMode,
    onViewChange,
    searchQuery,
    onSearchChange,
}: TaskToolbarProps) {
    const [fieldsOpen, setFieldsOpen] = useState(false);

    return (
        <div className="relative flex items-center justify-between border-b border-border px-6 py-3">
            {/* Left side */}
            <h1 className="text-xl font-semibold tracking-tight text-text-primary">
                Tasks
            </h1>

            {/* Right side */}
            <div className="flex items-center gap-2">

                {/* Search */}
                <div className="flex h-8 w-56 items-center gap-2 rounded-md border border-border bg-background px-2.5">
                    <Search
                        size={14}
                        strokeWidth={1.8}
                        className="shrink-0 text-text-muted"
                    />

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) => onSearchChange(event.target.value)}
                        placeholder="Search tasks..."
                        className="w-full bg-transparent text-xs text-text-primary outline-none placeholder:text-text-muted"
                    />
                </div>

                {/* Fields */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setFieldsOpen((open) => !open)}
                        className={`flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs transition-colors ${fieldsOpen
                            ? "border-border bg-surface-muted text-text-primary"
                            : "border-border bg-background text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                            }`}
                        aria-expanded={fieldsOpen}
                    >
                        <Columns3 size={14} strokeWidth={1.8} />
                        <span>Fields</span>
                    </button>

                    {fieldsOpen && (
                        <div className="absolute right-0 top-10 z-50 w-60 rounded-lg border border-border bg-background p-2 shadow-lg">

                            {/* View toggle */}
                            <div className="mb-2 flex items-center justify-center border-b border-border pb-2">
                                <ViewToggle
                                    viewMode={viewMode}
                                    onChange={onViewChange}
                                />
                            </div>

                            {/* Fields */}
                            <div className="space-y-1">

                                <FieldOption
                                    label="Priority"
                                    checked={false}
                                />

                                <FieldOption
                                    label="Members"
                                    checked={true}
                                />

                                <FieldOption
                                    label="Due Date"
                                    checked={false}
                                />

                                <FieldOption
                                    label="Labels"
                                    checked={false}
                                />

                                <FieldOption
                                    label="Status"
                                    checked={false}
                                />

                                <FieldOption
                                    label="Reporter"
                                    checked={false}
                                />

                            </div>
                        </div>
                    )}
                </div>

                {/* Filter */}
                <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary"
                    aria-label="Filter tasks"
                >
                    <SlidersHorizontal size={14} strokeWidth={1.8} />
                </button>

                {/* Add Task */}
                <button
                    type="button"
                    className="flex h-8 items-center gap-1.5 rounded-md bg-black px-3 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                >
                    <Plus size={14} strokeWidth={2} />
                    <span>Add Task</span>
                </button>

            </div>
        </div>
    );
}

type FieldOptionProps = {
    label: string;
    checked: boolean;
};

function FieldOption({
    label,
    checked,
}: FieldOptionProps) {
    return (
        <button
            type="button"
            className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs text-text-secondary hover:bg-surface-muted hover:text-text-primary"
        >
            <span>{label}</span>

            <span
                className={`flex h-3.5 w-3.5 items-center justify-center rounded ${checked
                    ? "bg-black text-white"
                    : "border border-border bg-background"
                    }`}
            >
                {checked && <Check size={10} strokeWidth={2.5} />}
            </span>
        </button>
    );
}