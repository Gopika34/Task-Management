"use client";

export default function GoogleLoginButton() {
    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };

    return (
        <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted"
        >
            <span className="text-sm font-semibold">G</span>
            Continue with Google
        </button>
    );
}