import AppShell from "@/components/layout/AppShell";
import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

export default function TasksPage() {
    return (
        <AppShell>
            <div className="min-h-screen bg-background">
                <PageHeader
                    title="Tasks"
                    description="Manage and organize your work"
                    actions={
                        <Button>
                            Add Task
                        </Button>
                    }
                />

                <main className="p-6">
                    <div className="rounded-lg border border-border bg-surface p-6">
                        <p className="text-sm text-text-secondary">
                            Your tasks will appear here.
                        </p>
                    </div>
                </main>
            </div>
        </AppShell>
    );
}