"use client";

import { useState } from "react";

import AppShell from "@/components/layout/AppShell";
import TaskBoard from "@/components/tasks/TaskBoard";
import TaskToolbar from "@/components/tasks/TaskToolbar";
import TasksHeader from "@/components/tasks/TasksHeader";
import { initialTasks } from "@/components/tasks/task-data";

export default function TasksPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <AppShell>
            <div className="min-h-screen bg-background">
                <TasksHeader />

                <TaskToolbar
                    onAddTask={() => setIsCreateModalOpen(true)}
                />

                <main className="overflow-x-auto px-6 py-5">
                    <TaskBoard tasks={initialTasks} />
                </main>
                
                {isCreateModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
                        <div className="w-full max-w-md rounded-xl border border-border bg-surface p-6 shadow-xl">

                            <div className="mb-5">
                                <h2 className="text-lg font-semibold text-text-primary">
                                    Create task
                                </h2>

                                <p className="mt-1 text-sm text-text-secondary">
                                    Add a new task to your workspace.
                                </p>
                            </div>

                            <div className="space-y-4">

                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-text-primary">
                                        Task name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter task name"
                                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm outline-none focus:border-border-strong"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-text-primary">
                                        Description
                                    </label>

                                    <textarea
                                        placeholder="Describe the task..."
                                        rows={3}
                                        className="w-full resize-none rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-border-strong"
                                    />
                                </div>

                            </div>

                            <div className="mt-6 flex justify-end gap-2">

                                <button
                                    type="button"
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="rounded-md border border-border px-4 py-2 text-sm text-text-secondary hover:bg-surface-muted"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                                >
                                    Create task
                                </button>

                            </div>

                        </div>
                    </div>
                )}

            </div>
        </AppShell>
    );
}