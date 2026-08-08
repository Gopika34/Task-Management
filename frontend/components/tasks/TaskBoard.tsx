import type { Task, TaskStatus } from "./task-data";
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
            title: "In Progress",
            status: "in-progress",
        },
        {
            title: "Completed",
            status: "completed",
        },
    ];

export default function TaskBoard({ tasks }: TaskBoardProps) {
    return (
        <div className="flex gap-4 overflow-x-auto pb-4">
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
    );
}