"use client";
import Image from "next/image";
import useQueryBlogs from "@features/hooks/queries/useQueryBlogs";
import Aberration from "@public/assets/images/aberration.png";

export default function BlogArticlePageView({id}:{id: string|number}){

    const { data: blog, isSuccess } = useQueryBlogs.getBlogsById(id);

    return(
        <>
            {isSuccess && 
                <div className="absolute left-0 top-0 -z-[1] w-full h-3/5 opacity-25">
                    <Image quality={100} className="object-cover" fill sizes="100vw" src={blog.image} alt="" />
                    <Image quality={100} className="object-cover opacity-10" fill sizes="100vw" src={Aberration} alt="" />
                </div>
            }
        </>
    )
}