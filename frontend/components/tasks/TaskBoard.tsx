import type {
    Task,
    TaskStatus,
} from "./task-data";

import TaskColumn from "./TaskColumn";

type TaskBoardProps = {
    tasks: Task[];
};

const columns: {
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

export default function TaskBoard({
    tasks,
}: TaskBoardProps) {
    return (
        <div className="w-full overflow-x-auto pb-4">

            <div className="flex w-max min-w-full gap-4">

                {columns.map((column) => {
                    const columnTasks = tasks.filter(
                        (task) => task.status === column.status
                    );

                    return (
                        <TaskColumn
                            key={column.status}
                            title={column.title}
                            status={column.status}
                            tasks={columnTasks}
                        />
                    );
                })}

            </div>

        </div>
    );
}