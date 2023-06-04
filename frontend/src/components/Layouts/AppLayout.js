import Head from "next/head";
import React from "react";
import Navigation from "./Navigation";
import Container from "../Container";

export default function AppLayout({ title, children }) {
    return (
        <>
            <Head>
                <title>{`${title} / Elaracharm`}</title>
            </Head>

            <main className="flex flex-col min-h-screen bg-white text-slate-900 antialiased tracking-tighter">
                <Navigation />

                {children}
            </main>

            <footer className="bg-white border-t">
                <Container>
                    <div className="flex lg:flex-row flex-col justify-between lg:py-20 py-8 gap-y-16">
                        <div className="flex flex-col">
                            <h1 className="text-zinc-800 lg:text-4xl text-2xl font-bold">Elaracharm</h1>
                            <span className="text-zinc-800 text-sm leading-relaxed font-medium">200% Money Back Guarantee Authentic. Guaranteed.</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">FAQ</span>
                            <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">Privacy Policy</span>
                            <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">Payment Confirmation</span>
                            <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">Buying & Selling Guide</span>
                            <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">Elaranews</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">Explore us more on Social Media!</span>
                            <div className="flex gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M16.5 7.5l0 .01"></path>
                                </svg>
                                <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">Instagram</span>
                            </div>
                            <div className="flex gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                </svg>
                                <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">Twitter</span>
                            </div>
                            <div className="flex gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                    <path d="M10 9l5 3l-5 3z"></path>
                                </svg>
                                <span className="text-zinc-800 text-sm leading-relaxed font-medium mb-2">Youtube</span>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="flex border-t py-5">
                    <Container>
                        <h1 className="text-center leading-relaxed text-sm font-light">
                            <span className="font-medium">© Copyright 2023 Elaracharm.</span> All rights reserved.
                        </h1>
                    </Container>
                </div>
            </footer>
        </>
    );
}
