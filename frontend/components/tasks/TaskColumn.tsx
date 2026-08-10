import {
    GripVertical,
    MoreHorizontal,
    Plus,
} from "lucide-react";

import type { Task, TaskStatus } from "./task-data";
import TaskCard from "./TaskCard";

type TaskColumnProps = {
    title: string;
    status: TaskStatus;
    tasks: Task[];
};

export default function TaskColumn({
    title,
    status,
    tasks,
}: TaskColumnProps) {
    return (
        <section className="w-[228px] shrink-0 rounded-lg border border-border bg-surface-muted p-2">
            {/* Column Header */}
            <div className="flex h-7 items-center justify-between px-1">
                <div className="flex min-w-0 items-center gap-1.5">
                    <GripVertical
                        size={12}
                        strokeWidth={1.8}
                        className="shrink-0 text-text-muted"
                    />

                    <h2 className="truncate text-[11px] font-semibold text-text-primary">
                        {title}
                    </h2>

                    <span className="text-[10px] font-medium text-text-muted">
                        {tasks.length}
                    </span>
                </div>

                <div className="flex items-center gap-0.5">
                    <button
                        type="button"
                        className="flex h-6 w-6 items-center justify-center rounded text-text-muted hover:bg-surface hover:text-text-primary"
                        aria-label={`Add task to ${title}`}
                    >
                        <Plus size={14} strokeWidth={1.8} />
                    </button>

                    <button
                        type="button"
                        className="flex h-6 w-6 items-center justify-center rounded text-text-muted hover:bg-surface hover:text-text-primary"
                        aria-label={`More options for ${title}`}
                    >
                        <MoreHorizontal size={14} strokeWidth={1.8} />
                    </button>
                </div>
            </div>

            {/* Task Cards */}
            <div className="mt-1 flex flex-col gap-2">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                        />
                    ))
                ) : (
                    <div className="flex min-h-[80px] items-center justify-center rounded-md border border-dashed border-border bg-surface text-[10px] text-text-muted">
                        No tasks
                    </div>
                )}
            </div>

            {/* Add Task */}
            <button
                type="button"
                className="mt-1 flex h-8 w-full items-center gap-1.5 rounded-md px-1.5 text-[10px] text-text-secondary hover:bg-surface hover:text-text-primary"
            >
                <Plus
                    size={13}
                    strokeWidth={1.8}
                />

                <span>Add Task</span>
            </button>
        </section>
    );
}