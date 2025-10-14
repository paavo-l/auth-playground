"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import TransitionButton from "./TransitionButton";

function LogoutButton() {
    const router = useRouter();

    const signOutGithub = async () => {
        await authClient.signOut();
        router.refresh();
    };

    return <TransitionButton label="Logout" onClick={signOutGithub} />;
}

export default LogoutButton;
