import Button from "@/components/Button";
import Input from "@/components/Input";
import AppLayout from "@/components/Layouts/AppLayout";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import React, { useState } from "react";

export default function Register() {
    const { register } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/",
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        });
    };
    return (
        <AppLayout title="Register Page">
            <div className="flex justify-center mt-20">
                <div className="max-w-7xl">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex">
                            <img src="https://fakeimg.pl/500x500/?text=Register" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-medium">Register</h1>
                            <p className="text-sm font-light">
                                Already have an account?{" "}
                                <Link href="/register" className="text-green-500 font-normal">
                                    Login here
                                </Link>
                            </p>
                            <form onSubmit={submitHandler}>
                                <div className="mt-4">
                                    <Input
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <p>{errors.name}</p>
                                </div>
                                <div className="mt-4">
                                    <Input
                                        name="email"
                                        id="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p>{errors.email}</p>
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
                                    <p>{errors.password}</p>
                                </div>
                                <div className="mt-4">
                                    <Input
                                        name="passwordConfirmation"
                                        id="passwordConfirmation"
                                        placeholder="Password Confirmation"
                                        type="password"
                                        value={passwordConfirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <Button>Register</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
