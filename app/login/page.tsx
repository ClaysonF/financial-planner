"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleCredentialsLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/dashboard"); // Redirect after login
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Login</h1>

            <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mb-4"
                onClick={() => signIn("google")}
            >
                Sign In with Google
            </button>

            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleCredentialsLogin} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded text-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded text-black"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Login
                    </button>
                </form>
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}