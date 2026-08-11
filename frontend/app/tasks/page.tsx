"use client";

import { useMemo, useState } from "react";

import AppShell from "@/components/layout/AppShell";

import TaskBoard from "@/components/tasks/TaskBoard";

import TaskList from "@/components/tasks/TaskList";

import TaskToolbar from "@/components/tasks/TaskToolbar";

import TasksHeader from "@/components/tasks/TasksHeader";

import { initialTasks } from "@/components/tasks/task-data";

import type { ViewMode } from "@/components/tasks/ViewToggle";
import type { TaskField } from "@/components/tasks/TaskToolbar";

export default function TasksPage() {
    const [viewMode, setViewMode] = useState<ViewMode>("board");
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleFields, setVisibleFields] = useState<TaskField[]>([
        "members",
        "dueDate",
        "labels",
    ]);

    const filteredTasks = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return initialTasks;
        }

        return initialTasks.filter((task) =>
            task.title.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const toggleField = (field: TaskField) => {
        setVisibleFields((currentFields) => {
            if (currentFields.includes(field)) {
                return currentFields.filter(
                    (currentField) => currentField !== field
                );
            }

            return [...currentFields, field];
        });
    };

    return (
        <AppShell>

            <div className="min-h-screen bg-background">

                {/* Existing page header */}
                <TasksHeader />

                {/* Toolbar */}
                <TaskToolbar
                    viewMode={viewMode}
                    onViewChange={setViewMode}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    visibleFields={visibleFields}
                    onFieldToggle={toggleField}
                />

                {/* Main content */}
                <main className="min-w-0 px-6 py-5">
                    {viewMode === "board" ? (
                        <TaskBoard
                            tasks={filteredTasks}
                            visibleFields={visibleFields}
                        />
                    ) : (
                        <TaskList
                            tasks={filteredTasks}
                            visibleFields={visibleFields}
                        />
                    )}

                </main>

            </div>

        </AppShell>
    );
}