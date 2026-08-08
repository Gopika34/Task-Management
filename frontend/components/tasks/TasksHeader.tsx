import Button from "@/components/ui/Button";
import { Plus } from "lucide-react";

export default function TasksHeader() {
    return (
        <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-xl font-semibold tracking-tight text-text-primary">
                    Tasks
                </h1>

                <p className="mt-1 text-sm text-text-secondary">
                    Manage and organize your work
                </p>
            </div>

            <Button>
                <Plus size={16} className="mr-2" />
                Add Task
            </Button>
        </div>
    );
}