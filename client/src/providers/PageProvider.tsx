"use client";
import { useState } from "react";

import Header from "@widgets/header/ui/Header";
import Footer from "@widgets/footer/ui/Footer";
import Button from "@shared/buttons/Button";

import { AiFillCloseCircle } from "react-icons/ai";

// import { usePathname } from "next/navigation";

export default function PageProvider({children}:{children:React.ReactNode}){

    const [showAllert, setShowAllert] = useState(true);
    const toggle = () => setShowAllert(!showAllert);

    // const pathname = usePathname();
    return(
        <div className="wrapper">
            <Header />
            <main>
                <div className="container">
                    {showAllert &&
                        <span className="flex items-center justify-between mb-9 bg-red/80 px-3 py-[6px] rounded-xl">
                            <p className="text-white text-base">Attention! This is a test run. Project and blog data are in a local DB!</p>
                            <Button onClick={toggle}>
                                <AiFillCloseCircle size={16} color="white" />
                            </Button>
                        </span>
                    }
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}