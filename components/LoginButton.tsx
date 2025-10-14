"use client";

import { authClient } from "@/lib/auth-client";
import TransitionButton from "./TransitionButton";

function LoginButton() {

    const signInGithub = async () => {
        await authClient.signIn.social({
            provider: "github",
        });
    };

    return <TransitionButton label="Login with GitHub" onClick={signInGithub} />;
}

export default LoginButton;
