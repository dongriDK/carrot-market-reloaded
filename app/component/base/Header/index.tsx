import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "../../../assets/png/headerLogo.png";
import HeaderLink1 from "../../../assets/png/headerLink1.png";
import HeaderLink2 from "../../../assets/png/headerLink2.png";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full h-20 flex justify-center bg-gray-800 *:flex *:font-sans *:font-semibold *:text-lg *:text-white px-10">
      <nav className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <Image alt="케이쉴드주니어 로고" src={HeaderLogo} />
          </Link>
        </div>
        <div className="flex *:list-none h-full *:px-6">
          <Link href={"/"} className="flex ">
            <li className="my-auto">K-shield Jr.소개</li>
          </Link>
          <Link href={"/"} className="flex ">
            <li className="my-auto">교육과정</li>
          </Link>
          <Link href={"/"} className="flex ">
            <li className="my-auto">교육신청</li>
          </Link>
          <Link href={"/"} className="flex ">
            <li className="my-auto">협약기업 소개</li>
          </Link>
          <Link href={"/"} className="flex ">
            <li className="my-auto">Communication</li>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/">
            <Image alt="과학기술정보통신부 로고" src={HeaderLink1} />
          </Link>
          <Link href="/">
            <Image alt="한국인터넷진흥원 로고" src={HeaderLink2} />
          </Link>
        </div>
      </nav>
    </header>
  );
};
