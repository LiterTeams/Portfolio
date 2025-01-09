"use client";
import Developer from "@widgets/personal-info/ui/Developer";
import TechnologyStack from "@widgets/personal-info/ui/TechnologyStack";
import Socials from "@widgets/personal-info/ui/Socials";
import Blog from "@app/widgets/blogs/ui/Blogs";

export default function HomePageView(){
    return(
        <>
            <div className="flex gap-6">
                <Developer />
                <div className="flex flex-col gap-6 flex-grow">
                    <TechnologyStack />
                    <Socials />
                </div>
            </div>
            <Blog showLast title="Last Blog" className="mt-12" />
        </>
    )
}