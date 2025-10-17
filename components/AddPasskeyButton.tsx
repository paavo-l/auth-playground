"use client";

import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import TransitionButton from "./TransitionButton";

const PASSKEY_NAME = "Auth playground passkey";

function AddPasskeyButton() {
    const onClick = async () => {
        const result = await authClient.passkey.addPasskey({
            name: PASSKEY_NAME,
            // authenticatorAttachment: "cross-platform",
        });

        if (result?.error) {
            toast.error(result.error.message);
            return;
        }

    };

    return <TransitionButton label="Add passkey" onClick={onClick} />;
}

export default AddPasskeyButton;
