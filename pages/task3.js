import Image from "next/image";
import localFont from "next/font/local";

export default function Home() {
  return (
  <div className="">
    <div className="bg-black text-black flex h-screen">
    <div className="bg-white text-black flex justify-content: flex-end items-end h-screen w-36">
      <div className="bg-gray-800 text-white justify-items-center h-screen w-32 rounded-lg">
        <div className="mt-6 bg-gray-200 text-white h-28 w-28">

        </div>
        <div className="mt-6 bg-gray-200 text-white h-28 w-28">\
          <image src="sun.png"></image>
        </div>
        <div className="mt-6 bg-gray-200 text-white h-28 w-28">

        </div>
        <div className="mt-6 bg-gray-200 text-white h-28 w-28">

        </div>
      </div>
    </div>
    </div>
  </div>
  );
}