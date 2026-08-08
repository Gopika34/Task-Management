type PageHeaderProps = {
    title: string;
    description?: string;
    actions?: React.ReactNode;
};

export default function PageHeader({
    title,
    description,
    actions,
}: PageHeaderProps) {
    return (
        <header className="flex items-start justify-between border-b border-border px-6 py-5">
            <div>
                <h1 className="text-xl font-semibold tracking-tight text-text-primary">
                    {title}
                </h1>

                {description && (
                    <p className="mt-1 text-sm text-text-secondary">
                        {description}
                    </p>
                )}
            </div>

            {actions && (
                <div className="flex items-center gap-2">
                    {actions}
                </div>
            )}
        </header>
    );
}