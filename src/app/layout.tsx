import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Page from "./page";
export const metadata = {
    title: "Sobhan Esfandyari",
    description: "Sobhan Esfandyari Personal Website",
    icons: {
        icon: "/pics/favicon-16x16.png",
        apple: "/pics/favicon/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Navbar />
            <body>{children}</body>
            <Footer />
        </html>
    );
}
