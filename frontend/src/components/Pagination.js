import { useRouter } from "next/router";
import React from "react";

export default function Pagination({ meta, slug, tag }) {
    const router = useRouter();

    const handleClick = (label) => {
        if (tag) {
            router.push(`/${slug}/${tag}/pages/${label}`);
        } else if (slug) {
            router.push(`/${slug}/pages/${label}`);
        } else {
            router.push(`/pages/${label}`);
        }
    };

    return (
        <div className="flex flex-wrap gap-y-3 items-center justify-center my-10">
            {meta.links.map((link, index) => (
                <button
                    key={index}
                    disabled={link.url == null && "disabled"}
                    onClick={() => handleClick(link.label)}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`${link.active && "bg-blue-100 text-blue-700"} ${
                        link.url == null && "opacity-75 hover:bg-gray-200"
                    } border rounded px-4 py-2 mx-1 text-sm hover:text-blue-700 hover:bg-blue-100`}
                />
            ))}
        </div>
    );
}
