import React, { useState } from "react"; 
import { useRouter } from "next/router";

const useStateTask = () => {
    const[color, setColor] = useState("");
    const router = useRouter();
    return(
        <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
            <button onClick={() => {router.push("Universal")}} className="w-24 h-12 bg-white rounded-xl font-mono m-4">
                Go back
            </button>
            <p>
            Өнгө солих:
            </p>
            <button className="border bg-red-800 py-4 px-6"
            onClick={()=> {
                setColor("red");
            }}
            >
                Улаан
            </button>
            <button className="border bg-blue-800 py-4 px-6"
            onClick={()=> {
                setColor("blue");
            }}
            >
                Цэнхэр
            </button>
            <button className="border bg-green-800 py-4 px-6"
            onClick={()=> {
                setColor("green");
            }}
            >
                Ногоон
            </button>
        </div>
    );
};

export default useStateTask;