import LoggedInCard from "@/components/LoggedInCard";
import LoginButton from "@/components/LoginButton";
import LoginWithPasskeyButton from "@/components/LoginWithPasskeyButton";

import { getSession } from "@/lib/server-session";

export default async function Home() {
  const session = await getSession();

  return (
    <>
      {session?.user ? (
        <LoggedInCard session={session} />
      ) : (
        <div className="flex flex-col gap-2">
          <LoginButton />
          <LoginWithPasskeyButton />
        </div>
      )}
    </>
  );
}
