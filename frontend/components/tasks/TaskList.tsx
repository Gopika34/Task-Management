import {
    MoreHorizontal,
} from "lucide-react";

import type {
    Task,
    TaskStatus,
} from "./task-data";

type TaskListProps = {
    tasks: Task[];
};

const sections: {
    title: string;
    status: TaskStatus;
}[] = [
    {
        title: "To Do",
        status: "todo",
    },
    {
        title: "Doing",
        status: "in-progress",
    },
    {
        title: "Completed",
        status: "completed",
    },
    {
        title: "On Hold",
        status: "on-hold",
    },
];

export default function TaskList({
    tasks,
}: TaskListProps) {
    return (
        <div className="space-y-6">

            {sections.map((section) => {
                const sectionTasks = tasks.filter(
                    (task) => task.status === section.status
                );

                return (
                    <TaskListSection
                        key={section.status}
                        title={section.title}
                        tasks={sectionTasks}
                    />
                );
            })}

        </div>
    );
}

type TaskListSectionProps = {
    title: string;
    tasks: Task[];
};

function TaskListSection({
    title,
    tasks,
}: TaskListSectionProps) {
    return (
        <section>

            {/* Section heading */}
            <div className="mb-2 flex items-center gap-2">
                <h2 className="text-sm font-semibold text-text-primary">
                    {title}
                </h2>

                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-surface-muted px-1.5 text-[10px] font-medium text-text-muted">
                    {tasks.length}
                </span>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-lg border border-border">

                {/* Header */}
                <div className="grid grid-cols-[minmax(220px,1fr)_110px_110px_120px_40px] border-b border-border bg-surface-muted px-4 py-2.5 text-[10px] font-medium text-text-muted">

                    <span>Task</span>

                    <span>Priority</span>

                    <span>Members</span>

                    <span>Due Date</span>

                    <span>Actions</span>

                </div>

                {/* Rows */}
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskListRow
                            key={task.id}
                            task={task}
                        />
                    ))
                ) : (
                    <div className="px-4 py-5 text-xs text-text-muted">
                        No tasks
                    </div>
                )}

            </div>
        </section>
    );
}

function TaskListRow({
    task,
}: {
    task: Task;
}) {
    return (
        <div className="grid grid-cols-[minmax(220px,1fr)_110px_110px_120px_40px] items-center border-b border-border px-4 py-2.5 last:border-b-0">

            {/* Task */}
            <div className="min-w-0">
                <p className="truncate text-xs font-medium text-text-primary">
                    {task.title}
                </p>
            </div>

            {/* Priority */}
            <div>
                <PriorityBadge priority={task.priority} />
            </div>

            {/* Member */}
            <div className="flex items-center gap-2">

                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-[9px] font-semibold text-purple-700">
                    {task.assignee}
                </div>

            </div>

            {/* Due date */}
            <span className="text-xs text-text-secondary">
                {task.dueDate || "-"}
            </span>

            {/* Actions */}
            <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-md text-text-muted hover:bg-surface-muted hover:text-text-primary"
                aria-label={`Actions for ${task.title}`}
            >
                <MoreHorizontal size={14} />
            </button>

        </div>
    );
}

function PriorityBadge({
    priority,
}: {
    priority: Task["priority"];
}) {
    const styles = {
        low: "text-text-secondary",
        medium: "text-orange-500",
        high: "text-red-500",
    };

    return (
        <span
            className={`text-xs font-medium capitalize ${styles[priority]}`}
        >
            {priority}
        </span>
    );
}