import axios from "@/libs/axios";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export default function index() {
    const links = [
        { href: "/account-settings", label: "Account settings" },
        { href: "/support", label: "Support" },
        { href: "/license", label: "License" },
        { href: "/sign-out", label: "Sign out" },
    ];
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-blue-200 dark:bg-slate-900">
            <Menu>
                <Menu.Button className="bg-white px-4 py-2 rounded-lg">More</Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"></Transition>
                <Menu.Items>
                    {links.map((link) => (
                        <Menu.Item key={link.href} as={Fragment}>
                            {({ active }) => (
                                <a href={link.href} className={`${active ? "bg-blue-500 text-white" : "bg-white text-black"}`}>
                                    {link.label}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    );
}
