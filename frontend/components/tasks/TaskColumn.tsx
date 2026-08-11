import {
    Plus,
    GripVertical,
    MoreHorizontal,
} from "lucide-react";
import type { TaskField } from "./TaskToolbar";
import type {
    Task,
    TaskStatus,
} from "./task-data";
import TaskCard from "./TaskCard";

type TaskColumnProps = {
    title: string;
    status: TaskStatus;
    tasks: Task[];
    visibleFields: TaskField[];
    onAddTask: (status: TaskStatus) => void;
};

export default function TaskColumn({
    title,
    status,
    tasks,
    visibleFields,
    onAddTask,
}: TaskColumnProps) {
    return (
        <section className="flex w-[240px] shrink-0 flex-col rounded-lg bg-gray-400/20 p-2">

            {/* Column Header */}
            <div className="mb-2 flex h-7 items-center justify-between px-1">

                <div className="flex items-center gap-2">

                    <div className="flex items-center gap-1.5">

                        <GripVertical
                            size={12}
                            strokeWidth={1.8}
                            className="text-text-muted"
                        />

                        <h2 className="text-xs font-semibold text-text-primary">
                            {title}
                        </h2>

                    </div>
                </div>

                <div className="flex items-center">

                    <button
                        type="button"
                        onClick={() => onAddTask(status)}
                        className="flex h-6 w-6 items-center justify-center rounded-md text-text-muted hover:bg-surface-muted hover:text-text-primary"
                        aria-label={`Add task to ${title}`}
                    >
                        <Plus
                            size={14}
                            strokeWidth={1.8}
                        />
                    </button>

                    <button
                        type="button"
                        className="flex h-6 w-6 items-center justify-center rounded-md text-text-muted hover:bg-surface-muted hover:text-text-primary"
                        aria-label={`More options for ${title}`}
                    >
                        <MoreHorizontal
                            size={14}
                            strokeWidth={1.8}
                        />
                    </button>

                </div>

            </div>

            {/* Column body */}
            <div className="flex min-h-[120px] flex-col gap-2">

                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            visibleFields={visibleFields}
                        />
                    ))
                ) : (
                    <div className="flex min-h-[100px] items-center justify-center text-xs text-text-muted">
                        No tasks
                    </div>
                )}

                {/* Add Task */}
                <button
                    type="button"
                    onClick={() => onAddTask(status)}
                    className="flex items-center gap-1.5 px-1 py-1.5 text-[10px] text-text-secondary hover:text-text-primary"
                >
                    <Plus
                        size={12}
                        strokeWidth={1.8}
                    />

                    <span>Add Task</span>
                </button>

            </div>

        </section>
    );
}