import React, { useState } from "react";

export default function Drawer() {
    const [drawer, setDrawer] = useState(false);

    return (
        <div>
            <div
                className={`${
                    drawer ? "translate-x-0" : "translate-x-full"
                } fixed top-0 right-0 z-40 w-80 h-screen p-4 overflow-y-auto transition-transform bg-red-500`}>
                <button className="text-4xl" onClick={() => setDrawer(!drawer)}>
                    x
                </button>
            </div>
            <div
                className={`fixed top-0 right-0 h-screen w-full bg-black opacity-0 transform transition-opacity duration-300 ${
                    drawer ? "opacity-25" : "opacity-0 pointer-events-none"
                }`}></div>
        </div>
    );
}
