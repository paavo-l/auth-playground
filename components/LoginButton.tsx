"use client";

import { authClient } from "@/lib/auth-client";

function LoginButton() {

    const signInGithub = async () => {
        await authClient.signIn.social({
            provider: "github"
        })
    }

    return (<button type="button" onClick={signInGithub}>Login with GitHub</button>);
}

export default LoginButton;