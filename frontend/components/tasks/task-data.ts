export type TaskStatus =
    | "todo"
    | "in-progress"
    | "completed";

export type TaskPriority =
    | "low"
    | "medium"
    | "high";

export type Task = {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    assignee: string;
    dueDate?: string;
    labels: string[];
};

export const initialTasks: Task[] = [
    {
        id: "task-1",
        title: "Design landing page",
        description: "Create the initial landing page design.",
        status: "todo",
        priority: "high",
        assignee: "D",
        dueDate: "Aug 12",
        labels: ["Design"],
    },
    {
        id: "task-2",
        title: "Set up authentication",
        description: "Implement guest authentication flow.",
        status: "todo",
        priority: "medium",
        assignee: "G",
        dueDate: "Aug 13",
        labels: ["Development"],
    },
    {
        id: "task-3",
        title: "Build dashboard",
        description: "Implement the main dashboard layout.",
        status: "in-progress",
        priority: "high",
        assignee: "A",
        dueDate: "Aug 15",
        labels: ["Development"],
    },
    {
        id: "task-4",
        title: "Write documentation",
        description: "Document the project setup and architecture.",
        status: "completed",
        priority: "low",
        assignee: "D",
        dueDate: "Aug 10",
        labels: ["Documentation"],
    },
];