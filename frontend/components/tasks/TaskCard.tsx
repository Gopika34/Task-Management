import { CalendarDays, MoreHorizontal } from "lucide-react";
import type { Task } from "./task-data";

type TaskCardProps = {
    task: Task;
};

const priorityStyles = {
    low: "bg-gray-100 text-gray-600",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
};

export default function TaskCard({ task }: TaskCardProps) {
    return (
        <article className="group rounded-lg border border-border bg-surface p-3 transition-shadow hover:shadow-sm">
            {/* Top row */}
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-medium leading-5 text-text-primary">
                    {task.title}
                </h3>

                <button
                    type="button"
                    className="rounded p-1 text-text-muted opacity-0 transition-opacity hover:bg-surface-muted group-hover:opacity-100"
                    aria-label={`More options for ${task.title}`}
                >
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* Description */}
            {task.description && (
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-text-secondary">
                    {task.description}
                </p>
            )}

            {/* Labels */}
            {task.labels.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {task.labels.map((label) => (
                        <span
                            key={label}
                            className="rounded bg-surface-muted px-2 py-1 text-[10px] font-medium text-text-secondary"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            )}

            {/* Bottom row */}
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span
                        className={`rounded px-2 py-1 text-[10px] font-medium capitalize ${priorityStyles[task.priority]
                            }`}
                    >
                        {task.priority}
                    </span>

                    {task.dueDate && (
                        <span className="flex items-center gap-1 text-[10px] text-text-muted">
                            <CalendarDays size={12} />
                            {task.dueDate}
                        </span>
                    )}
                </div>

                {/* Assignee */}
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-[10px] font-semibold text-purple-700">
                    {task.assignee}
                </div>
            </div>
        </article>
    );
}