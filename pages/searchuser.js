import { useState } from "react";
import { useRouter } from "next/router";
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

export default function Home() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const filteredData = usersData.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log("search", search);
    console.log("filtered", filteredData);

    return (
        <div className="w-screen h-screen bg-white">
            <button onClick={() => {router.push("Universal")}} className="w-24 h-12 bg-white rounded-xl font-mono m-4">
                Go back
            </button>
            <div className="p-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold font-mono text-black">Хэрэглэгчийн жагсаалт</h1>

                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="border-2 border-black rounded-lg text-black"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                                    {
                        filteredData.length === 0 ? (
                            <div className="font-bold text-center text-black">No results found</div>
                        ) : (
                            filteredData.map((user) => {
                                return (
                                    <div
                                        key={user.id}
                                        className="font-bold font-mono mb-8 p-4 h-12 flex items-center border-2 border-black/50 rounded-lg shadow-xl text-black"
                                    >
                                        {user.id}. {user.name}: {user.email}
                                    </div>
                                );
                            })
                        )
                    }
                </div>
            </div>
        </div>
    );
}