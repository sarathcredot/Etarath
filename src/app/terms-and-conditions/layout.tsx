

import "@/app/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>

            {children}

        </>
    );
}
