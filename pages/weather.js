import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
  <div className="">
    <div className="bg-black  text-white flex h-screen">
    <div className="bg-black  text-white flex justify-content: flex-end items-end h-screen w-28">

      <div className="bg-gray-800 text-white justify-items-center h-screen w-28 rounded-lg">
        <div className="mt-6 text-white h-24 w-24 flex items-center justify-center">
          <img className="w-12" src="blow.png"></img>
        </div>
        <div className="mt-6 text-white h-24 w-24 flex items-center grid grid-cols-1">
          <div className="flex justify-center w-24 mt-6">
            <img src="cloud.png"></img>
          </div>
          <div className="flex justify-center w-24 mb-8">
            <p className=" text-white font-bold">Weather</p>
          </div>
        </div>
        <div className="mt-6 text-white h-24 w-24 flex items-center grid grid-cols-1">
          <div className="flex justify-center w-24 mt-6">
            <img className="fill-white" src="list.png"></img>
          </div>
          <div className="flex justify-center w-24 mb-8">
            <p className=" text-white font-bold">Cities</p>
          </div>
        </div>
        <div className="mt-6 text-white h-24 w-24 flex items-center grid grid-cols-1">
          <div className="flex justify-center w-24 mt-6">
            <img className="w-8" src="map.png"></img>
          </div>
          <div className="flex justify-center w-24 mb-8">
            <p className=" text-white font-bold">Map</p>
          </div>
        </div>
        <div className="mt-6 text-white h-24 w-24 flex items-center grid grid-cols-1">
          <div className="flex justify-center w-24 mt-6">
            <img className="w-8" src="settings.png"></img>
          </div>
          <div className="flex justify-center w-24 mb-8">
            <p className=" text-white font-bold">Settings</p>
          </div>
        </div>
        <button onClick={() => {router.push("Universal")}} className="w-24 h-12 bg-white rounded-xl font-mono m-4 text-black">
                Go back
            </button>
      </div>
    </div>
    <div className="bg-gray-800 w-2/3 h-12 rounded-xl flex items-center mt-4 ml-8">
    <p className="text-white ml-8 font-bold font-mono">Search for cities.</p>
    </div>
    </div>
  </div>
  );
}