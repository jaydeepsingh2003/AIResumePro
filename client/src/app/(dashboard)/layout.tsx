"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    return (
        <div className="h-full relative bg-titanium-black text-white">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-black/40 text-slate-400 w-72 backdrop-blur-3xl">
                <Sidebar />
            </div>
            <main id="main-content" className="md:pl-72 min-h-screen">
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
