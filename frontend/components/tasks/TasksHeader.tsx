import { PanelLeft } from "lucide-react";

export default function TasksHeader() {
    return (
        <header className="flex h-14 items-center border-b border-border px-6">
            <div className="flex items-center gap-3 border-r border-border">
                <button
                    type="button"
                    className="rounded-md p-1.5 text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                    aria-label="Toggle sidebar"
                >
                    <PanelLeft size={14} strokeWidth={1.8} />
                </button>

            </div>
        </header>
    );
}