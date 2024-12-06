import { useState } from "react";
        const usersData = [
            {
                id: 1,
                name: "Erdenebold",
                email: "Erdeke@gmail.com",
            },
            {
                id: 2,
                name: "Munkhbaysgalan",
                email: "munkhbaysgalan@gmail.com",
            },
            {
                id: 3,
                name: "Erdenejargal",
                email: "Erdejeku123@gmail.com",
            },
            {
                id: 4,
                name: "Ulemj",
                email: "Uljekmubis1234@gmail.com",
            },
            {
                id: 5,
                name: "Temuge",
                email: "temitemka@gmail.com",
            },
            {
                id: 6,
                name: "Temuujin",
                email: "TEMUUJIN123@gmail.com",
            },
        ];
        export default function Home(){
            const[search, setSearch] = useState("");
    
            const filteredData = usersData.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            );
            console.log("search", search);
            console.log("filtered", filteredData);
        return(
            <div className="p-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold font-mono">Хэрэглэгчийн жагсаалт</h1>
                    
                    <input onChange={(e)=>setSearch(e.target.value)}
                    type="text" className="border-2 border-black rounded-lg">
                    </input>
                </div>
                    {filteredData.map((usersData) => {
                        return (
                            <div className="font-bold font-mono mb-8 h-12 flex items-center border-2 border-black rounded-lg shadow-xl">
                                {usersData.id}. {usersData.name}: {usersData.email}
                            </div>
                        );
                    })}
                </div>
        );
    }