import React from "react";

export default function Input({ type = "text", className, ...props }) {
    return (
        <input
            type={type}
            className={`${className} border px-3 py-2.5 rounded-lg text-slate-900 font-light text-sm focus:outline-none placeholder:font-light placeholder:text-sm`}
            {...props}
        />
    );
}
