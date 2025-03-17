"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") return <p>Loading...</p>;

    return (
        <div className="text-center mt-10">
            <h1 className="text-2xl font-bold">Welcome, {session?.user?.name}!</h1>
            <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => signOut()}
            >
                Sign Out
            </button>
        </div>
    );
}