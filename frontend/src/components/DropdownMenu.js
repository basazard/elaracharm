import Link from "next/link";
import React, { useState } from "react";

function DropdownMenu({ label, children }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <button onClick={() => setIsActive(!isActive)} className="inline-flex items-center gap-2 text-sm text-slate-900 hover:text-slate-700 px-4">
            {label}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${isActive ? "rotate-180 transition duration-300" : "rotate-0 transition duration 300"} w-4 h-4`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            <div
                className={`${
                    isActive ? "absolute" : "hidden"
                } z-10 top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 border`}>
                {children}
            </div>
        </button>
    );
}

function Item({ children, ...props }) {

    return (
        <div
            {...props}
            className={`block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out`}>
            {children}
        </div>
    );
}

DropdownMenu.Item = Item;

export default DropdownMenu;
