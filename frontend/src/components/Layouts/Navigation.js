import { useAuth } from "@/hooks/useAuth";
import useCartCount from "@/hooks/useCartCount";
import axios from "@/libs/axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import DropdownMenu from "../DropdownMenu";
import { useTheme } from "next-themes";

export default function Navigation() {
    const router = useRouter();

    const { logout, user } = useAuth();

    const [isOpen, setIsOpen] = useState(false);

    const { data: categories } = useSWR("/api/categories", () => axios.get("/api/categories").then((response) => response.data.data));

    const { cartCount } = useCartCount();

    const { theme, setTheme } = useTheme();

    function MobileNavigation(props) {
        return (
            <button onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 0 24 24" {...props}>
                    <path
                        className={`${isOpen ? "hidden" : "block"}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                    <path
                        className={`${!isOpen ? "hidden" : "block"}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        );
    }
    function SunIcon(props) {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
            </svg>
        );
    }

    function MoonIcon(props) {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
            </svg>
        );
    }

    function ModeToggle(props) {
        return (
            <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="lg:mr-5 group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                <SunIcon className="h-4 w-4 fill-zinc-100 stroke-zinc-500 dark:hidden" />
                <MoonIcon className="h-4 w-4 fill-zinc-100 stroke-zinc-500 dark:block hidden" />
            </button>
        );
    }

    return (
        <nav className="lg:flex lg:flex-row flex-col items-center border-b bg-white">
            <div className="flex justify-between items-center border-b border-1 lg:border-0">
                <div className="px-4 py-3">
                    <Link href="/" className="text-base font-semibold dark:text-gray-50">
                        ElaraCharm
                    </Link>
                </div>
                <div className="flex lg:hidden gap-5 px-4 items-center">
                    <ModeToggle />
                    <Link href="/checkout/cart" className="flex py-5 -mr-3 text-sm text-slate-900 hover:text-slate-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        <span className="relative bottom-2 right-2 rounded-full bg-red-500 text-white px-2 text-sm">{cartCount}</span>
                    </Link>

                    <button className="flex items-center rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                        <MobileNavigation className="h-4 w-4 fill-zinc-100 stroke-zinc-500 " />
                    </button>
                </div>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:flex-row flex-col justify-between`}>
                <div className="flex lg:flex-row items-center flex-col">
                    {categories &&
                        categories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/${category.slug}`}
                                className="block px-4 py-5 text-sm text-slate-900 hover:text-slate-700">
                                {category.name}
                            </Link>
                        ))}
                </div>
                <div className="flex lg:flex-row items-center flex-col">
                    {user ? (
                        <>
                            <DropdownMenu label={user?.name}>
                                <DropdownMenu.Item>Profile</DropdownMenu.Item>
                                <DropdownMenu.Item>History</DropdownMenu.Item>
                                <DropdownMenu.Item onClick={logout}>Logout</DropdownMenu.Item>
                            </DropdownMenu>
                            <Link href="/checkout/cart" className="lg:flex hidden px-4 py-5 text-sm text-slate-900 hover:text-slate-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                <span className="relative bottom-2 right-2 rounded-full bg-red-500 text-white px-2 text-sm">
                                    {cartCount}
                                </span>
                            </Link>
                            <div className="lg:block hidden">
                                <ModeToggle />
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="block px-4 py-5 text-sm text-slate-900 hover:text-slate-700">
                                Login
                            </Link>
                            <Link href="/register" className="block px-4 py-5 text-sm text-slate-900 hover:text-slate-700">
                                Register
                            </Link>
                            <ModeToggle />
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
