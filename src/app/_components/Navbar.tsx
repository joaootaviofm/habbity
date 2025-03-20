import Image from "next/image";
export default function Navbar() {
  const navList = ["Features", "Pricing", "About us"];

  return (
    <nav className="fixed w-full left-0 top-0 bg-black/30 backdrop-blur-md border-b border-[#ECECEC]/5 py-6 px-[200px] flex justify-between items-center text-[#ECECEC]">
      <div className="cursor-default rounded-md hover:scale-110 hover:rounded-md transition-all duration-300 flex items-center gap-[10px]">
        <Image
          width={30}
          height={30}
          src="/habitty-logo.jpeg"
          alt="not official logo yet"
          className="rounded-md"
        />
        <h1 className="font-bold text-[30px]">Habbity</h1>
      </div>
      <ul className="flex items-center gap-[32px] text-[16px]">
        {navList.map((item, index) => (
          <li key={index} className="border-b border-transparent hover:border-b-[#ECECEC] transition-all duration-300 hover:scale-105">
            <a href="">{item}</a>
          </li>
        ))}
        <button className="hover:bg-transparent hover:text-[#ECECEC] border border-transparent hover:border-[#ECECEC] transition-all duration-300 text-[#0B081C] cursor-pointer bg-[#ECECEC] px-[20px] py-[8px] rounded-[50px]">
          Download the app
        </button>
        <a
          href="#"
          className="text-[#ECECEC] hover:text-[#0B081C] hover:bg-[#ECECEC] transition-all duration-300 bg-transparent cursor-pointer border border-[#ECECEC] px-[20px] py-[8px] rounded-[50px]"
        >
          Talk to an expert
        </a>
      </ul>
    </nav>
  );
}
