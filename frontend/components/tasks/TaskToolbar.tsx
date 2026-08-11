"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";
import {
    Search,
    SlidersHorizontal,
    Columns3,
    Plus,
    Check,
} from "lucide-react";

import ViewToggle, { type ViewMode } from "./ViewToggle";

export type TaskField =
    | "priority"
    | "members"
    | "dueDate"
    | "labels"
    | "status"
    | "reporter";

type TaskToolbarProps = {
    viewMode: ViewMode;
    onViewChange: (mode: ViewMode) => void;

    searchQuery: string;
    onSearchChange: (value: string) => void;

    visibleFields: TaskField[];
    onFieldToggle: (field: TaskField) => void;
};

export default function TaskToolbar({
    viewMode,
    onViewChange,
    searchQuery,
    onSearchChange,
    visibleFields,
    onFieldToggle,
}: TaskToolbarProps) {
    const [fieldsOpen, setFieldsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const fieldsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                fieldsRef.current &&
                !fieldsRef.current.contains(event.target as Node)
            ) {
                setFieldsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setFieldsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-between border-b border-border px-6 py-3">
            {/* Left side */}
            <h1 className="text-xl font-semibold tracking-tight text-text-primary">
                Tasks
            </h1>

            {/* Right side */}
            <div className="flex items-center gap-2">

                {/* Search */}
                <div
                    className={`flex h-8 items-center rounded-md border border-border bg-background transition-all duration-200 ${searchOpen
                            ? "w-56 px-2.5"
                            : "w-8 justify-center px-0"
                        }`}
                    onMouseEnter={() => setSearchOpen(true)}
                >
                    <button
                        type="button"
                        onClick={() => setSearchOpen(true)}
                        className="flex h-7 w-7 shrink-0 items-center justify-center text-text-secondary hover:text-text-primary"
                        aria-label="Search tasks"
                    >
                        <Search
                            size={14}
                            strokeWidth={1.8}
                        />
                    </button>

                    {searchOpen && (
                        <input
                            autoFocus
                            type="text"
                            value={searchQuery}
                            onChange={(event) => onSearchChange(event.target.value)}
                            onBlur={() => {
                                if (!searchQuery) {
                                    setSearchOpen(false);
                                }
                            }}
                            placeholder="Search tasks..."
                            className="ml-1 w-full bg-transparent text-xs text-text-primary outline-none placeholder:text-text-muted"
                        />
                    )}
                </div>

                {/* Fields */}
                <div ref={fieldsRef} className="relative">
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
                                    checked={visibleFields.includes("priority")}
                                    onClick={() => onFieldToggle("priority")}
                                />

                                <FieldOption
                                    label="Members"
                                    checked={visibleFields.includes("members")}
                                    onClick={() => onFieldToggle("members")}
                                />

                                <FieldOption
                                    label="Due Date"
                                    checked={visibleFields.includes("dueDate")}
                                    onClick={() => onFieldToggle("dueDate")}
                                />

                                <FieldOption
                                    label="Labels"
                                    checked={visibleFields.includes("labels")}
                                    onClick={() => onFieldToggle("labels")}
                                />

                                <FieldOption
                                    label="Status"
                                    checked={visibleFields.includes("status")}
                                    onClick={() => onFieldToggle("status")}
                                />

                                <FieldOption
                                    label="Reporter"
                                    checked={visibleFields.includes("reporter")}
                                    onClick={() => onFieldToggle("reporter")}
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
    onClick: () => void;
};

function FieldOption({
    label,
    checked,
    onClick,
}: FieldOptionProps) {
    return (
        <button
            type="button"
            onClick={onClick}
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