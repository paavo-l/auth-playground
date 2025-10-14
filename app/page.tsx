import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { getSession } from "@/lib/server-session";

export default async function Home() {
  const session = await getSession();

  return (
    <>
      <main>
        {session?.user ?
          <>
            <p>Welcome, {session.user.name}!</p>
            <LogoutButton />
          </>
          :
          <LoginButton />}
      </main>
      <footer></footer>
    </>
  );
}
