import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/fonts";
import Header from "@/layouts/Header";

export const metadata: Metadata = {
    title: "Aizen | Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' className='dark'>
            <body
                className={`${poppins.className} dark:bg-black dark:text-white`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
