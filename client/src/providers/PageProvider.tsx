"use client";

import Header from "@widgets/header/ui/Header";
import Footer from "@widgets/footer/ui/Footer";

// import { usePathname } from "next/navigation";

export default function PageProvider({children}:{children:React.ReactNode}){
    // const pathname = usePathname();
    return(
        <div className="wrapper">
            <Header />
            <main>
                <div className="container">
                    <span className="block mb-9 bg-red/50 pointer-events-none px-3 py-[6px] text-white text-base text-center rounded-xl">The site is under testing. All data is stubs.</span>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}