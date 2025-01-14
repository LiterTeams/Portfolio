"use client";

export default function Skeleton(){

    const clx = "bg-grey-light px-3 py-[2px] rounded-xl";

    return(
        <div className="bg-grey p-3 rounded-xl flex flex-col gap-2 border border-solid border-white/15 pointer-events-none animate-pulse">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <span className={`${clx} flex-grow h-4`} />
                <span className="h-4 w-12 px-3 py-[2px] rounded-xl bg-grey-light" />
            </div>
            <hr className="text-white/50" />
            <p className={`${clx} w-full`}/>
            <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-[6px] flex-grow">
                    <span className="size-2 flex-shrink-0 rounded-full bg-grey-light" />
                    <p className={`${clx} h-2 flex-grow`} />
                </div>
                <div className="flex items-center gap-[6px] flex-grow">
                    <span className="size-2 flex-shrink-0 rounded-full bg-grey-light" />
                    <p className={`${clx} h-2 flex-grow`} />
                </div>
                <div className="flex items-center gap-[6px] flex-grow">
                    <span className="size-2 flex-shrink-0 rounded-full bg-grey-light" />
                    <p className={`${clx} h-2 flex-grow`} />
                </div>
            </div>
        </div>
    )
}