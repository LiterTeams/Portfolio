"use client";
import Developer from "@widgets/personal-info/ui/Developer";
import TechnologyStack from "@widgets/personal-info/ui/TechnologyStack";
import Socials from "@widgets/personal-info/ui/Socials";
import Repository from "@widgets/personal-info/ui/Repository";
import Blog from "@widgets/blogs/ui/Blogs";
import Projects from "@widgets/projects/ui/Projects";

export default function HomePageView(){
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
            <Blog showLast title="Last Blog" className="mt-12" />
            <Projects title="Projects" className="mt-12" />
        </>
    )
}