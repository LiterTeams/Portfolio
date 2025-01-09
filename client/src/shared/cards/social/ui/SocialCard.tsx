"use client";
import { ReactNode } from "react";

import { IoLogoVk } from "react-icons/io";
import { RiTelegram2Fill, RiFacebookFill } from "react-icons/ri";
import { FaXTwitter, FaDiscord, FaYoutube, FaGithub } from "react-icons/fa6";
import { SiBoosty } from "react-icons/si";

import { SocialEnumT } from "@entities/types/enum.types";
import { SocialIF } from "@entities/interfaces/additional";

const size = 24;

const IconclassName = "text-dark-primary-alternative duration-300 group-hover:text-blue"

const icons: Record<SocialEnumT, ReactNode> = {
    "vk": <IoLogoVk size={size} className={IconclassName} />,
    "telegram": <RiTelegram2Fill size={size} className={IconclassName} />,
    "twitter": <FaXTwitter size={size} className={IconclassName} />,
    "facebook": <RiFacebookFill size={size} className={IconclassName} />,
    "discord": <FaDiscord size={size} className={IconclassName} />,
    "youtube": <FaYoutube size={size} className={IconclassName} />,
    "boosty": <SiBoosty size={size} className={IconclassName} />,
    "git": <FaGithub size={size} className={IconclassName} />,
};

export default function SocialCard({label, icon, href}:SocialIF){
    return(
        <a target="_blank" href={href} className="flex group flex-center flex-col gap-2 bg-dark-primary-alternative px-4 py-6 rounded-xl border border-solid border-white/15 duration-300 hover:drop-shadow-glow_blue hover:bg-blue hover:border-white/25">
            <div className="flex flex-center p-2 rounded-full bg-white">
                {icons[icon]}
            </div>
            <h3 className="text-sm text-center pointer-events-none">{label}</h3>
        </a>
    )
}