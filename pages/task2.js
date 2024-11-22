import { useState } from "react";

export default function Task2() {
    const [search, setSearch] = useState("");
    
    console.log("search utga ---->", search);

    return(
        <div className="flex items-center justify-center h-screen flex-col">
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