import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="flex flex-col bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm gap-2">
        <input
          className="w-full rounded-full py-3 pl-5 bg-gray-200 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium focus:scale-90 outline-none">
          Search
        </button>
      </div>
    </main>
  );
}
