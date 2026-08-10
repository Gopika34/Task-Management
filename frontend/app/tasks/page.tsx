"use client";

import { useState } from "react";

import AppShell from "@/components/layout/AppShell";

import TaskBoard from "@/components/tasks/TaskBoard";

import TaskList from "@/components/tasks/TaskList";

import TaskToolbar from "@/components/tasks/TaskToolbar";

import TasksHeader from "@/components/tasks/TasksHeader";

import { initialTasks } from "@/components/tasks/task-data";

import type { ViewMode } from "@/components/tasks/ViewToggle";

export default function TasksPage() {
    const [viewMode, setViewMode] = useState<ViewMode>("board");

    return (
        <AppShell>

            <div className="min-h-screen bg-background">

                {/* Existing page header */}
                <TasksHeader />

                {/* Toolbar */}
                <TaskToolbar
                    viewMode={viewMode}
                    onViewChange={setViewMode}
                />

                {/* Main content */}
                <main className="px-6 py-5">

                    {viewMode === "board" ? (
                        <TaskBoard
                            tasks={initialTasks}
                        />
                    ) : (
                        <TaskList
                            tasks={initialTasks}
                        />
                    )}

                </main>

            </div>

        </AppShell>
    );
}