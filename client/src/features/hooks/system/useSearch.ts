"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function useSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
   
    const handleSearch = (query: string) => {
      const params = new URLSearchParams(searchParams);
      
      if (query) params.set("query", query);
      else params.delete("query");
      
      replace(`${pathname}?${params.toString()}`);
    }

    return { searchParams, pathname, handleSearch }
}


