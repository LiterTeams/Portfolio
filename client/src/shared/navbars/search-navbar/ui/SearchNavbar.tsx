"use client";
import useSearch from "@features/hooks/system/useSearch";

export default function SearchNavbar({className,disabled=false}:{className?: string; disabled?:boolean;}){

    const { searchParams, handleSearch } = useSearch();

    return(
        <div className={`flex items-center gap-4 ${className}`}>
            <input disabled={disabled} className={`flex-grow text-sm px-3 py-2 rounded-xl ${disabled ? "bg-red/15 cursor-not-allowed" : "bg-dark-secondaty"} outline-none`} placeholder="Search..." onChange={(e) => handleSearch("query",e.target.value)} defaultValue={searchParams.get("query")?.toString()} />
        </div>
    )
}