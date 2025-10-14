import Image from "next/image";
import type { AuthSession } from "@/lib/server-session";
import LogoutButton from "./LogoutButton";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

type Props = {
    session: AuthSession;
};

function LoggedInCard({ session }: Props) {
    if (!session) {
        return null;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Welcome, {session.user.name}!</CardTitle>
                <CardDescription>{session.user.email}</CardDescription>
                {session.user.image && (
                    <CardAction>
                        <Image
                            width={42}
                            height={42}
                            src={session.user.image}
                            alt="Profile picture"
                        />
                    </CardAction>
                )}
            </CardHeader>
            <CardFooter>
                <LogoutButton />
            </CardFooter>
        </Card>
    );
}

export default LoggedInCard;
