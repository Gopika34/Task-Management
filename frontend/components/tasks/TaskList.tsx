import {
    MoreHorizontal,
} from "lucide-react";
import type {
    Task,
    TaskStatus,
} from "./task-data";
import type { TaskField } from "./TaskToolbar";

type TaskListProps = {
    tasks: Task[];
    visibleFields: TaskField[];
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
    visibleFields,
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
                        visibleFields={visibleFields}
                    />
                );
            })}

        </div>
    );
}

type TaskListSectionProps = {
    title: string;
    tasks: Task[];
    visibleFields: TaskField[];
};

function TaskListSection({
    title,
    tasks,
    visibleFields,
}: TaskListSectionProps) {
    const showPriority = visibleFields.includes("priority");
    const showMembers = visibleFields.includes("members");
    const showDueDate = visibleFields.includes("dueDate");
    const showLabels = visibleFields.includes("labels");
    const showStatus = visibleFields.includes("status");
    const showReporter = visibleFields.includes("reporter");

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

            {/* Horizontal scroll */}
            <div className="overflow-x-auto rounded-lg border border-border">

                <div className="min-w-[650px]">

                    {/* Header */}
                    <div
                        className="grid items-center border-b border-border bg-surface-muted px-4 py-2.5 text-[10px] font-medium text-text-muted"
                        style={{
                            gridTemplateColumns: `
                                minmax(220px, 1fr)
                                ${showPriority ? "110px" : ""}
                                ${showMembers ? "110px" : ""}
                                ${showDueDate ? "120px" : ""}
                                ${showLabels ? "150px" : ""}
                                ${showStatus ? "110px" : ""}
                                ${showReporter ? "120px" : ""}
                                40px
                            `,
                        }}
                    >
                        <span>Task</span>

                        {showPriority && <span>Priority</span>}

                        {showMembers && <span>Members</span>}

                        {showDueDate && <span>Due Date</span>}

                        {showLabels && <span>Labels</span>}

                        {showStatus && <span>Status</span>}

                        {showReporter && <span>Reporter</span>}

                        <span>Actions</span>
                    </div>

                    {/* Rows */}
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <TaskListRow
                                key={task.id}
                                task={task}
                                visibleFields={visibleFields}
                            />
                        ))
                    ) : (
                        <div className="px-4 py-5 text-xs text-text-muted">
                            No tasks
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
}



function TaskListRow({
    task,
    visibleFields,
}: {
    task: Task;
    visibleFields: TaskField[];
}) {
    const showPriority = visibleFields.includes("priority");
    const showMembers = visibleFields.includes("members");
    const showDueDate = visibleFields.includes("dueDate");
    const showLabels = visibleFields.includes("labels");
    const showStatus = visibleFields.includes("status");
    const showReporter = visibleFields.includes("reporter");

    return (
        <div
            className="grid items-center border-b border-border px-4 py-2.5 last:border-b-0"
            style={{
                gridTemplateColumns: `
                    minmax(220px, 1fr)
                    ${showPriority ? "110px" : ""}
                    ${showMembers ? "110px" : ""}
                    ${showDueDate ? "120px" : ""}
                    ${showLabels ? "150px" : ""}
                    ${showStatus ? "110px" : ""}
                    ${showReporter ? "120px" : ""}
                    40px
                `,
            }}
        >

            {/* Task */}
            <div className="min-w-0">
                <p className="truncate text-xs font-medium text-text-primary">
                    {task.title}
                </p>
            </div>

            {/* Priority */}
            {showPriority && (
                <div>
                    <PriorityBadge priority={task.priority} />
                </div>
            )}

            {/* Members */}
            {showMembers && (
                <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-[9px] font-semibold text-purple-700">
                        {task.assignee}
                    </div>

                    <span className="text-xs text-text-secondary">
                        Admin
                    </span>
                </div>
            )}

            {/* Due Date */}
            {showDueDate && (
                <span className="text-xs text-text-secondary">
                    {task.dueDate || "-"}
                </span>
            )}

            {/* Labels */}
            {showLabels && (
                <div className="flex flex-wrap gap-1">
                    {task.labels.map((label) => (
                        <span
                            key={label}
                            className="rounded-md bg-surface-muted px-1.5 py-1 text-[9px] text-text-secondary"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            )}

            {/* Status */}
            {showStatus && (
                <span className="text-xs capitalize text-text-secondary">
                    {task.status.replace("-", " ")}
                </span>
            )}

            {/* Reporter */}
            {showReporter && (
                <span className="text-xs text-text-secondary">
                    Admin
                </span>
            )}

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