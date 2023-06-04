import React from 'react';

export default function Container({ children }) {
    return <div className="relative max-w-screen mx-auto lg:px-24 md:px-16 px-8">{children}</div>;
}