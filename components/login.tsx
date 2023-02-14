'use client';
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
      return (
        <>
        <div className="mx-auto max-w-md">
          Hi, {session.user.name}!
          <button className="text-black bg-white px-4 py-1 rounded-md mx-3" onClick={() => signOut()}>Sign out</button>
          </div>
        </>
      )
    }
    return (
      <>
      <div className="mx-auto max-w-md">
        Not signed in <br />
        <button className="text-black bg-white px-4 py-1 rounded-md" onClick={() => signIn()}>Sign in</button>
        </div>
      </>
    )
  };
  