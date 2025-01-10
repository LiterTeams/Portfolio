"use client";
import useSearch from "@features/hooks/system/useSearch";

export default function SearchNavbar({className}:{className?: string;}){

    const { searchParams, pathname, handleSearch } = useSearch();

    console.log(pathname);

    return(
        <div className={`flex items-center gap-4 ${className}`}>
            <input className="flex-grow text-sm px-3 py-2 rounded-xl bg-dark-secondaty outline-none" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} defaultValue={searchParams.get("query")?.toString()} />
        </div>
    )
}