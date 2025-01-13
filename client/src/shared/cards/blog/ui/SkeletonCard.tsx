"use client";

export default function SkeletonCard(){

    const clx = "px-3 py-[2px] rounded-xl";

    return(
        <div className="relative px-6 flex gap-4 animate-pulse">
            <div className="absolute -z-[1] left-0 top-0 w-full h-full flex flex-center">
                <div className="bg-grey-light w-full h-[90%] rounded-xl"/>
            </div>
            <div className="relative flex-[0_0_720px] h-[364px] rounded-xl bg-grey overflow-hidden border border-solid border-white/15">
                <div className="absolute flex flex-center w-full h-full">
                    <svg className="size-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <span className={`${clx} bg-grey-light w-16 h-4 absolute right-4 bottom-4 text-xs`} />
            </div>
            <div className="flex flex-col py-10 gap-1 flex-grow">
                <span className={`${clx} bg-grey h-3 w-3/4`} />
                <span className={`${clx} bg-grey h-2 w-1/4`} />
            </div>
        </div>
    )
}