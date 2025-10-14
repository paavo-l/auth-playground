import { headers } from "next/headers";
import { auth } from "./auth";

export const getSession = async () => await auth.api.getSession({
    headers: await headers(),
});

export type AuthSession = Awaited<ReturnType<typeof getSession>>;