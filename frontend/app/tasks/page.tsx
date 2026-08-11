"use client";

import { useMemo, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import TaskBoard from "@/components/tasks/TaskBoard";
import TaskList from "@/components/tasks/TaskList";
import TaskToolbar from "@/components/tasks/TaskToolbar";
import TasksHeader from "@/components/tasks/TasksHeader";
import {
    initialTasks,
    type Task,
    type TaskStatus,
} from "@/components/tasks/task-data";
import type { ViewMode } from "@/components/tasks/ViewToggle";
import type { TaskField } from "@/components/tasks/TaskToolbar";
import AddTaskModal from "@/components/tasks/AddTaskModal";


export default function TasksPage() {
    const [viewMode, setViewMode] = useState<ViewMode>("board");
    const [tasks, setTasks] = useState(initialTasks);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [newTaskStatus, setNewTaskStatus] = useState<TaskStatus>("todo");
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleFields, setVisibleFields] = useState<TaskField[]>([
        "members",
        "dueDate",
        "labels",
    ]);

    const filteredTasks = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return tasks;
        }

        return tasks.filter((task) =>
            task.title.toLowerCase().includes(query)
        );
    }, [tasks, searchQuery]);

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

    const openTaskModal = (status: TaskStatus = "todo") => {
        setNewTaskStatus(status);
        setIsTaskModalOpen(true);
    };
    const handleCreateTask = (task: Task) => {
        setTasks((currentTasks) => [
            ...currentTasks,
            task,
        ]);
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
                    onAddTask={() => openTaskModal("todo")}
                />

                {/* Main content */}
                <main className="min-w-0 px-6 py-5">
                    {viewMode === "board" ? (
                        <TaskBoard
                            tasks={filteredTasks}
                            visibleFields={visibleFields}
                            onAddTask={openTaskModal}
                        />
                    ) : (
                        <TaskList
                            tasks={filteredTasks}
                            visibleFields={visibleFields}
                        />
                    )}

                </main>

            </div>

            <AddTaskModal
                isOpen={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                onCreate={handleCreateTask}
                defaultStatus={newTaskStatus}
            />
        </AppShell>
    );
}