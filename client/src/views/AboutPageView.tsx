"use client";
import Developer from "@widgets/personal-info/ui/Developer";
import TechnologyStack from "@widgets/personal-info/ui/TechnologyStack";
import Socials from "@widgets/personal-info/ui/Socials";
import Repository from "@widgets/personal-info/ui/Repository";

export default function AboutPageView(){
    return(
        <>
            <div className="flex gap-6">
                <Developer />
                <div className="flex flex-col gap-6 flex-grow">
                    <TechnologyStack />
                    <Socials className="h-full" />
                </div>
            </div>
            <Repository className="mt-6" />
        </>
    )
}