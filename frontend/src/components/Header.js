import React from "react";
import Container from "./Container";

function Header({ className, children }) {
    return (
        <div className={`${className} border-b shadow-sm`}>
            <Container>{children}</Container>
        </div>
    );
}

function Title({ children }) {
    return <h1 className="max-w-xl text-gray-200 font-semibold lg:text-4xl text-2xl mb-4">{children}</h1>;
}

function Description({ children }) {
    return <span className="max-w-2xl text-lg leading-relaxed font-light text-gray-200">{children}</span>;
}

Header.Title = Title;
Header.Description = Description;

export default Header;
