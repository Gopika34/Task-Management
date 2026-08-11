import {
    CalendarDays,
    MoreHorizontal,
    Tag,
} from "lucide-react";

import type { Task } from "./task-data";
import type { TaskField } from "./TaskToolbar";

type TaskCardProps = {
    task: Task;
    visibleFields: TaskField[];
};

export default function TaskCard({
    task,
    visibleFields,
}: TaskCardProps) {
    const showPriority = visibleFields.includes("priority");
    const showMembers = visibleFields.includes("members");
    const showDueDate = visibleFields.includes("dueDate");
    const showLabels = visibleFields.includes("labels");
    const showReporter = visibleFields.includes("reporter");

    return (
        <article className="group rounded-md border border-border bg-surface px-2.5 py-2.5 transition-shadow hover:shadow-sm">

            {/* Task title */}
            <div className="flex items-start justify-between gap-2">
                <h3 className="min-w-0 flex-1 text-[12px] font-medium leading-4 text-text-primary">
                    {task.title}
                </h3>

                <button
                    type="button"
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-text-muted hover:bg-surface-muted hover:text-text-primary"
                    aria-label={`More options for ${task.title}`}
                >
                    <MoreHorizontal size={14} />
                </button>
            </div>

            {/* Members + Due Date */}
            {(showMembers || showReporter || showDueDate) && (
                <div className="mt-3 flex items-center justify-between gap-2">

                    {/* Left side */}
                    <div className="flex items-center gap-3">

                        {showMembers && (
                            <div className="flex items-center gap-2">
                                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[9px] font-semibold text-purple-700">
                                    {task.assignee}
                                </div>

                                <span className="text-[10px] text-text-secondary">
                                    Admin
                                </span>
                            </div>
                        )}

                        {showReporter && (
                            <span className="text-[10px] text-text-secondary">
                                Reporter: Admin
                            </span>
                        )}

                    </div>

                    {/* Right side */}
                    {showDueDate && task.dueDate && (
                        <span className="flex shrink-0 items-center gap-1 rounded-md bg-red-50 px-1.5 py-1 text-[9px] font-medium text-red-500">
                            <CalendarDays
                                size={10}
                                strokeWidth={1.8}
                            />

                            {task.dueDate}
                        </span>
                    )}

                </div>
            )}

            {/* Labels */}
            {showLabels && task.labels.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {task.labels.map((label) => (
                        <span
                            key={label}
                            className="flex items-center gap-1 rounded-md border border-border bg-surface-muted px-1.5 py-1 text-[9px] text-text-secondary"
                        >
                            <Tag
                                size={10}
                                strokeWidth={1.8}
                            />

                            {label}
                        </span>
                    ))}
                </div>
            )}

            {/* Priority */}
            {showPriority && (
                <div className="mt-3">
                    <span
                        className={`text-[10px] font-medium capitalize ${task.priority === "high"
                                ? "text-red-500"
                                : task.priority === "medium"
                                    ? "text-orange-500"
                                    : "text-text-secondary"
                            }`}
                    >
                        {task.priority}
                    </span>
                </div>
            )}

        </article>
    );
}