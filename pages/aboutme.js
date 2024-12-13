import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
  <div className="bg-black">
    <button onClick={() => {router.push("Universal")}} className="w-24 h-12 bg-white rounded-xl font-mono m-4 text-black">
      Go back
    </button>
    <div className="bg-black text-black flex justify-center items-center h-screen">
    <div className="column pr-20">
    <p className="text-xl font-bold text-white font-mono transition ease-in-out delay-150 hover:text-green-600">My name is...</p>
    <p className="text-2xl font-bold text-white font-mono transition ease-in-out delay-150 hover:text-green-600">Erdenebod</p>
    <p className="text-xl text-white font-mono transition ease-in-out delay-150 hover:text-green-600">11B student</p>
    <p className="text-xl text-white font-mono transition ease-in-out delay-150 hover:text-green-600">Student of Nest IT since 2022</p>
    <p className="text-xl text-white font-mono transition ease-in-out delay-150 hover:text-green-600">Learning web development since 2023</p>
    <p className="text-xl text-white font-mono transition ease-in-out delay-150 hover:text-green-600">Recently learned MySQL</p>
    <p className="text-xl text-white font-mono transition ease-in-out delay-150 hover:text-green-600">Fully comfortable with Tailwind</p>
    </div>
    <Image className="border-4 border-green-600 animate-bounce" src="/man.avif" width={500} height={500}/>
    </div>
  </div>
  );
}

