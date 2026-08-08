import {PanelLeft} from "lucide-react";

export default function TasksHeader() {
    return (
        <div className="flex flex-col border-b border-border gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <PanelLeft size={14} strokeWidth={2}/>
                {/* <p className="mt-1 text-sm text-text-secondary">
                    Manage and organize your work
                </p> */}
        </div>
    );
}