import AppShell from "@/components/layout/AppShell";

export default function TasksPage() {
  return (
    <AppShell>
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Tasks
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Task management workspace
        </p>
      </div>
    </AppShell>
  );
}