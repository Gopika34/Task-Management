import Link from "next/link";
import {
    CheckSquare,
    FolderKanban,
    Settings,
    UserCircle,
} from "lucide-react";

const navigationItems = [
    {
        label: "Tasks",
        href: "/tasks",
        icon: CheckSquare,
    },
    {
        label: "Projects",
        href: "/projects",
        icon: FolderKanban,
    },
];

export default function Sidebar() {
    return (
        <aside className="flex h-screen w-56 shrink-0 flex-col border-r border-border bg-surface">
            {/* Workspace */}
            <div className="border-b border-border px-4 py-4">
                <button className="flex w-full items-center justify-between rounded-md px-1 py-1 text-left hover:bg-surface-muted">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-700">
                            D
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-text-primary">
                                Dexter
                            </span>

                            <span className="text-[11px] text-text-muted">
                                Workspace
                            </span>
                        </div>
                    </div>

                    <span className="text-xs text-text-muted">⌄</span>
                </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 px-3 py-5">
                <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Workspace
                </p>

                <nav className="space-y-1">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary"
                            >
                                <Icon size={16} strokeWidth={1.8} />

                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom navigation */}
            <div className="border-t border-border px-3 py-3">
                <Link
                    href="/profile"
                    className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                >
                    <UserCircle size={16} strokeWidth={1.8} />
                    <span>Profile</span>
                </Link>

                <button className="mt-1 flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-text-secondary hover:bg-surface-muted hover:text-text-primary">
                    <Settings size={16} strokeWidth={1.8} />
                    <span>Settings</span>
                </button>
            </div>
        </aside>
    );
}