"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function GuestLoginButton() {
    const router = useRouter();

    const handleGuestLogin = () => {
        router.push("/tasks");
    };

    return (
        <Button
            type="button"
            className="w-full"
            onClick={handleGuestLogin}
        >
            Continue as Guest
        </Button>
    );
}