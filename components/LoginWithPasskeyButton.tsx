"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import TransitionButton from "./TransitionButton";

function LoginWithPasskeyButton() {
    const router = useRouter();
    const onClick = async () => {
        const result = await authClient.signIn.passkey({
            autoFill: true,
        });

        console.log(result);

        if (result?.error) {
            toast.error(result.error.message);
            return;
        }

        router.refresh();
    };

    return (
        <>
            <TransitionButton label="Login with Passkey" onClick={onClick} />

            <label htmlFor="name">Username:</label>
            <input type="text" name="name" autoComplete="username webauthn"></input>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                autoComplete="current-password webauthn"
            ></input>
        </>
    );
}

export default LoginWithPasskeyButton;
