import AppShell from "@/components/layout/AppShell";
import TaskBoard from "@/components/tasks/TaskBoard";
import TaskToolbar from "@/components/tasks/TaskToolbar";
import TasksHeader from "@/components/tasks/TasksHeader";
import { initialTasks } from "@/components/tasks/task-data";

export default function TasksPage() {
    return (
        <AppShell>
            <div className="min-h-screen bg-background">

                {/* Top application header */}
                <TasksHeader />

                {/* Tasks header + toolbar */}
                <section className="flex items-center justify-between border-b border-border px-4 py-3">

                    <h1 className="text-md font-semibold text-text-primary">
                        Tasks
                    </h1>

                    <TaskToolbar />

                </section>

                {/* Task board */}
                <main className="overflow-x-auto px-4 py-4">
                    <TaskBoard tasks={initialTasks} />
                </main>

            </div>
        </AppShell>
    );
}