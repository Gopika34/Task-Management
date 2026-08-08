import { PanelLeft } from "lucide-react";

export default function TasksHeader() {
    return (
        <header className="flex h-10 items-center border-b border-border bg-background">
            <button
                type="button"
                aria-label="Toggle sidebar"
                className="flex h-full w-10 items-center justify-center border-r border-border text-text-secondary hover:bg-surface-muted"
            >
                <PanelLeft
                    size={14}
                    strokeWidth={1.8}
                />
            </button>
        </header>
    );
}