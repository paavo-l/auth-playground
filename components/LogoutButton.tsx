"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

function LogoutButton() {
    const router = useRouter();

    const signOutGithub = async () => {
        await authClient.signOut();
        router.refresh();
    };

    return (
        <button type="button" onClick={signOutGithub}>
            Logout
        </button>
    );
}

export default LogoutButton;
