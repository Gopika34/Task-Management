import Link from "next/link";
import GuestLoginButton from "@/components/auth/GuestLoginButton";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="w-full max-w-sm">
                {/* Brand */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
                        A
                    </div>

                    <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
                        Welcome back
                    </h1>

                    <p className="mt-2 text-sm text-text-secondary">
                        Sign in to continue to your workspace
                    </p>
                </div>

                {/* Login Card */}
                <div className="rounded-lg border border-border bg-surface p-6">
                    <div className="space-y-3">
                        <GuestLoginButton />
                        <GoogleLoginButton />
                    </div>

                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-xs text-text-muted">OR</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-text-secondary">
                            Want to explore the application?
                        </p>

                        <Link
                            href="/tasks"
                            className="mt-2 inline-block text-sm font-medium text-text-primary underline underline-offset-4 hover:opacity-70"
                        >
                            Preview workspace
                        </Link>
                    </div>
                </div>

                <p className="mt-6 text-center text-xs text-text-muted">
                    By clicking continue, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>
                </p>
            </div>
        </main>
    );
}