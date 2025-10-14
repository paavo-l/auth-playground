import LoggedInCard from "@/components/LoggedInCard";
import LoginButton from "@/components/LoginButton";

import { getSession } from "@/lib/server-session";

export default async function Home() {
  const session = await getSession();

  return (
    <>
      <main>
        {session?.user ? (
          <LoggedInCard session={session} />
        ) : (
          <LoginButton />
        )}
      </main>
      <footer></footer>
    </>
  );
}
