import { Plus } from "lucide-react";
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
        <section className="flex w-[228px] shrink-0 flex-col">
            {/* Column header */}
            <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-text-primary">
                        {title}
                    </h2>

                    <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[10px] font-medium text-text-muted">
                        {tasks.length}
                    </span>
                </div>

                <button
                    type="button"
                    className="rounded p-1.5 text-text-muted hover:bg-surface-muted hover:text-text-primary"
                    aria-label={`Add task to ${title}`}
                >
                    <Plus size={16} />
                </button>
            </div>

            {/* Tasks */}
            <div className="flex min-h-[120px] flex-col gap-2 rounded-lg bg-surface-muted/60 p-2">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                ) : (
                    <div className="flex flex-1 items-center justify-center py-8 text-xs text-text-muted">
                        No tasks
                    </div>
                )}
            </div>
        </section>
    );
}