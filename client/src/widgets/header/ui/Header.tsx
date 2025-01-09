"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Logo from "@public/logo.png";

import routes from "@entities/config/routes";

import { FaBurger } from "react-icons/fa6";

export default function Header(){

    const pathname = usePathname();

    const links = [
        {label: routes.home.label, href: routes.home.href, block: routes.home.block},
        {label: routes.about.label, href: routes.about.href, block: routes.about.block},
        {label: routes.services.label, href: routes.services.href, block: routes.services.block},
        {label: routes.projects.label, href: routes.projects.href, block: routes.projects.block},
        {label: routes.blog.label, href: routes.blog.href, block: routes.blog.block},
        {label: routes.connect.label, href: routes.connect.href, block: routes.connect.block},
    ];

    return(
        <header>
            <div className="container">
                <div className="flex justify-between items-center desktop:justify-start gap-6 h-inherit bg-dark-secondaty rounded-xl py-3 px-6">
                    <Link href={routes.home.href} className="flex items-center gap-3">
                        <Image priority quality={100} width={40} height={40} className="object-contain" src={Logo} alt="logo" />
                        <h1>LT | Salfiya</h1>
                    </Link>
                    <nav className="hidden laptop:block">
                        <ul className="flex items-center gap-3">
                            {links.map((link, key) =>
                                <li key={`nav-${key}`}>
                                    <Link className={`block text-sm py-[2px] text-center px-3 rounded-xl border border-solid duration-300 ${pathname == link.href ? "bg-blue drop-shadow-glow_blue border-white/25" : `border-white/15 hover:border-white/25 ${link.block ? "opacity-50 hover:bg-red hover:drop-shadow-glow_red" : "hover:bg-blue hover:drop-shadow-glow_blue"}`}`} href={!link.block ? link.href : "#"}>{link.label}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <button className="block laptop:hidden">
                        <FaBurger size={36} color="white" />
                    </button>
                </div>
            </div>
        </header>
    )
}