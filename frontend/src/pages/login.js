import Button from "@/components/Button";
import Input from "@/components/Input";
import AppLayout from "@/components/Layouts/AppLayout";
import { useAuth } from "@/hooks/useAuth";
import useCartCount from "@/hooks/useCartCount";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Login() {
    const router = useRouter();

    const { refreshCartCount } = useCartCount();

    const { login } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/",
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldRemember, setShouldRemember] = useState(false);
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset));
        } else {
            setStatus(null);
        }
    });

    const submitHandler = async (e) => {
        e.preventDefault();

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        });

        setTimeout(() => {
            refreshCartCount();
        }, 500);
    };

    return (
        <AppLayout title="Login Page">
            <div className="flex justify-center mt-20">
                <div className="max-w-7xl">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex">
                            <img src="https://fakeimg.pl/500x500/?text=Login" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-medium">Login</h1>
                            <p className="text-sm font-light">
                                Don't have an account?{" "}
                                <Link href="/register" className="text-green-500 font-normal">
                                    Sign up here
                                </Link>
                            </p>
                            <form onClick={submitHandler}>
                                <div className="mt-4">
                                    <Input
                                        name="email"
                                        id="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <Input
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="block mt-4">
                                    <label htmlFor="remember_me" className="inline-flex items-center">
                                        <input
                                            id="remember_me"
                                            type="checkbox"
                                            name="remember"
                                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            onChange={(event) => setShouldRemember(event.target.checked)}
                                        />

                                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <Button>Login</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
