import AppShell from "@/components/layout/AppShell";
import TaskBoard from "@/components/tasks/TaskBoard";
import TaskToolbar from "@/components/tasks/TaskToolbar";
import TasksHeader from "@/components/tasks/TasksHeader";
import { initialTasks } from "@/components/tasks/task-data";

export default function TasksPage() {
    return (
        <AppShell>
            <div className="min-h-screen bg-background">
                <TasksHeader />

                <TaskToolbar />

                <main className="overflow-x-auto px-6 py-5">
                    <TaskBoard tasks={initialTasks} />
                </main>
            </div>
        </AppShell>
    );
}