import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    return (
        <div className="bg-black w-screen h-screen flex justify-center items-center">
            <div className="bg-white w-2/3 h-80 rounded-3xl">
                <div className="flex justify-center items-start pt-20 text-2xl font-mono font-bold">
                            11B Munkhbaysgalan projects
                    </div>
                <div className="w-full h-full grid grid-rows-1 grid-flow-col gap-12 flex justify-center items-end pb-40">
                    <button onClick={() => {router.push("aboutme")}} className="bg-white w-32 h-16 rounded-xl font-mono font-thin border-2 border-black hover:bg-green-500 ease-in-out duration-300 hover:w-36 hover:h-20">
                        About me
                    </button>
                    <button onClick={() => {router.push("colors")}} className="bg-white w-32 h-16 rounded-xl font-mono font-thin border-2 border-black hover:bg-green-500 ease-in-out duration-300 hover:w-36 hover:h-20">
                        Colors
                    </button>
                    <button onClick={() => {router.push("grid")}} className="bg-white w-32 h-16 rounded-xl font-mono font-thin border-2 border-black hover:bg-green-500 ease-in-out duration-300 hover:w-36 hover:h-20">
                        Grid
                    </button>
                    <button onClick={() => {router.push("search")}} className="bg-white w-32 h-16 rounded-xl font-mono font-thin border-2 border-black hover:bg-green-500 ease-in-out duration-300 hover:w-36 hover:h-20">
                        Search
                    </button>
                    <button onClick={() => {router.push("searchuser")}} className="bg-white w-32 h-16 rounded-xl font-mono font-thin border-2 border-black hover:bg-green-500 ease-in-out duration-300 hover:w-36 hover:h-20">
                        Search for an user
                    </button>
                    <button onClick={() => {router.push("weather")}} className="bg-white w-32 h-16 rounded-xl font-mono font-thin border-2 border-black hover:bg-green-500 ease-in-out duration-300 hover:w-36 hover:h-20">
                        Weather
                    </button>
                </div>
            </div>
        </div>
    );
}