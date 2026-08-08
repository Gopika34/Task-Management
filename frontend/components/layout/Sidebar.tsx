import Link from "next/link";
import { CheckSquare, FolderKanban } from "lucide-react";

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
        <aside className="flex h-screen w-52 flex-col border-r border-gray-200 bg-white">
            {/* Workspace */}
            <div className="border-b border-gray-200 px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-black">
                            D
                        </div>

                        <span className="text-sm font-medium text-gray-900">
                            Dexter
                        </span>
                    </div>

                    <span className="text-xs text-gray-400">⌄</span>
                </div>
            </div>

            {/* Navigation */}
            <div className="px-3 py-4">
                <p className="mb-2 px-2 text-[10px] font-medium uppercase tracking-wide text-gray-400">
                    Workspace
                </p>

                <nav className="space-y-1">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Icon size={15} strokeWidth={1.8} />

                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}