import { useState } from "react";
import { useRouter } from "next/router";
export default function Task2() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    
    console.log("search utga ---->", search);

    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <button onClick={() => {router.push("Universal")}} className="w-24 h-12 bg-white rounded-xl font-mono m-4">
                Go back
            </button>
            <image src="/google.png" width={500}
            height={500} />
            
    
            <input
            type="search"
            onChange={(e)=> console.log("e", e)}
            className="border-2 border-black rounded" />
            <p>Search: {search}</p>
        </div>
    )    
}