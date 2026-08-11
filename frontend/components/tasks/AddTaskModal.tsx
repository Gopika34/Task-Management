"use client";

import { useState } from "react";
import { X } from "lucide-react";

import type {
    Task,
    TaskPriority,
    TaskStatus,
} from "./task-data";

type AddTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (task: Task) => void;
    defaultStatus: TaskStatus;
};

export default function AddTaskModal({
    isOpen,
    onClose,
    onCreate,
    defaultStatus,
}: AddTaskModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<TaskStatus>(defaultStatus);
    const [priority, setPriority] =
        useState<TaskPriority>("medium");
    const [assignee, setAssignee] = useState("D");
    const [dueDate, setDueDate] = useState("");
    const [labels, setLabels] = useState("");

    if (!isOpen) {
        return null;
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!title.trim()) {
            return;
        }

        const newTask: Task = {
            // id: `task-${Date.now()}`,
            id: crypto.randomUUID(),
            title: title.trim(),
            description: description.trim(),
            status: defaultStatus,
            priority,
            assignee,
            dueDate: dueDate || undefined,
            labels: labels
                .split(",")
                .map((label) => label.trim())
                .filter(Boolean),
        };

        onCreate(newTask);

        setTitle("");
        setDescription("");
        setStatus(defaultStatus);
        setPriority("medium");
        setAssignee("D");
        setDueDate("");
        setLabels("");

        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

            <div className="w-full max-w-lg rounded-xl border border-border bg-background shadow-xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-border px-5 py-4">

                    <div>
                        <h2 className="text-sm font-semibold text-text-primary">
                            Create Task
                        </h2>

                        <p className="mt-0.5 text-[11px] text-text-muted">
                            Add a new task to your workspace.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-text-muted hover:bg-surface-muted hover:text-text-primary"
                        aria-label="Close modal"
                    >
                        <X size={15} />
                    </button>

                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>

                    <div className="space-y-4 px-5 py-5">

                        {/* Title */}
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-text-primary">
                                Task title
                            </label>

                            <input
                                type="text"
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                                placeholder="Enter task title..."
                                autoFocus
                                className="h-9 w-full rounded-md border border-border bg-background px-3 text-xs text-text-primary outline-none placeholder:text-text-muted focus:border-text-primary"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-text-primary">
                                Description
                            </label>

                            <textarea
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                                placeholder="Describe the task..."
                                rows={3}
                                className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-xs text-text-primary outline-none placeholder:text-text-muted focus:border-text-primary"
                            />
                        </div>

                        {/* Status + Priority */}
                        <div className="grid grid-cols-2 gap-3">

                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-text-primary">
                                    Status
                                </label>

                                <select
                                    value={status}
                                    onChange={(event) =>
                                        setStatus(
                                            event.target.value as TaskStatus
                                        )
                                    }
                                    className="h-9 w-full rounded-md border border-border bg-background px-2.5 text-xs text-text-primary outline-none"
                                >
                                    <option value="todo">
                                        To Do
                                    </option>

                                    <option value="in-progress">
                                        Doing
                                    </option>

                                    <option value="completed">
                                        Completed
                                    </option>

                                    <option value="on-hold">
                                        On Hold
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-text-primary">
                                    Priority
                                </label>

                                <select
                                    value={priority}
                                    onChange={(event) =>
                                        setPriority(
                                            event.target.value as TaskPriority
                                        )
                                    }
                                    className="h-9 w-full rounded-md border border-border bg-background px-2.5 text-xs text-text-primary outline-none"
                                >
                                    <option value="low">
                                        Low
                                    </option>

                                    <option value="medium">
                                        Medium
                                    </option>

                                    <option value="high">
                                        High
                                    </option>
                                </select>
                            </div>

                        </div>

                        {/* Member + Due Date */}
                        <div className="grid grid-cols-2 gap-3">

                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-text-primary">
                                    Member
                                </label>

                                <select
                                    value={assignee}
                                    onChange={(event) =>
                                        setAssignee(event.target.value)
                                    }
                                    className="h-9 w-full rounded-md border border-border bg-background px-2.5 text-xs text-text-primary outline-none"
                                >
                                    <option value="D">
                                        Dexter
                                    </option>

                                    <option value="G">
                                        Gopika
                                    </option>

                                    <option value="A">
                                        Admin
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-text-primary">
                                    Due Date
                                </label>

                                <input
                                    type="date"
                                    value={dueDate}
                                    onChange={(event) =>
                                        setDueDate(event.target.value)
                                    }
                                    className="h-9 w-full rounded-md border border-border bg-background px-2.5 text-xs text-text-primary outline-none"
                                />
                            </div>

                        </div>

                        {/* Labels */}
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-text-primary">
                                Labels
                            </label>

                            <input
                                type="text"
                                value={labels}
                                onChange={(event) =>
                                    setLabels(event.target.value)
                                }
                                placeholder="Design, Development"
                                className="h-9 w-full rounded-md border border-border bg-background px-3 text-xs text-text-primary outline-none placeholder:text-text-muted focus:border-text-primary"
                            />

                            <p className="mt-1 text-[10px] text-text-muted">
                                Separate multiple labels with commas.
                            </p>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-2 border-t border-border px-5 py-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="h-8 rounded-md border border-border px-3 text-xs text-text-secondary hover:bg-surface-muted"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={!title.trim()}
                            className="h-8 rounded-md bg-black px-3 text-xs font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Create Task
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}