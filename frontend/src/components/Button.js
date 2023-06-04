import React from "react";

export default function Button({ type = "submit", children, className, ...props }) {
    return (
        <button
            type={type}
            className={`${className} px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold`}
            {...props}>
            {children}
        </button>
    );
}
