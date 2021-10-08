import Link from "next/link";
import { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import InvisibleHorizon from "./InvisibleHorizon";
import WebDropdownMenu from "./WebDropdownMenu";
import MobileDropdownMenu from "./MobileDropdownMenu";
import { recitals } from "../components/RecordHolder"

const Navbar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const windowWidth = useWindowWidth();
  const recitalList = recitals.recitals;
  return (
    <>
      <nav id="fakeNav" className="h-2 bg-gray-50 lg:h-4"></nav>
      <InvisibleHorizon setIsIntersecting={setIsIntersecting} />
      <nav
        className={
          isIntersecting
            ? "bg-gray-50 sticky top-0 z-10 inset-x-0 font-sans text-gray-900"
            : "transition-shadow duration-500 shadow-sm bg-gray-50 sticky top-0 z-10 inset-x-0 font-sans text-gray-900"
        }
      >
        <div className="relative max-w-screen-lg mx-auto">
          <ul className="flex justify-end items-center gap-4">
            <li className="mr-auto py-4 px-6">
              <span>
                <Link href="/">
                  <a className="flex items-center gap-2">
                    <span className="material-icons-outlined lg:text-4xl">
                      castle
                    </span>
                    <span className="text-xl mr-1 lg:text-3xl lg:mx-1">
                      Castle
                    </span>
                  </a>
                </Link>
              </span>
            </li>
            {windowWidth > 1024 ? (
              <>
                <li className="py-6">
                  <span className="px-2 text-sm border-b border-gray-50 lg:text-lg lg:px-4 lg:py-1 hover:border-b hover:border-gray-400">
                    <Link href="/blog/posts">
                      <a>Blog</a>
                    </Link>
                  </span>
                </li>
                <li className="py-6">
                  <span className="px-2 text-sm border-b border-gray-50 lg:text-lg lg:px-4 lg:py-1 hover:border-b hover:border-gray-400">
                    <Link href="/code">
                      <a>Code hub</a>
                    </Link>
                  </span>
                </li>
                <li
                  className="py-6 "
                  onMouseLeave={() => setIsOpened(false)}
                  onClick={() => setIsOpened(false)}
                >
                  <span
                    className="mr-1 px-2 text-sm border-b border-gray-50 lg:text-lg lg:mr-0 lg:px-4 lg:py-1 hover:border-b hover:border-gray-400"
                    onMouseEnter={() => setIsOpened(true)}
                  >
                    <Link href="/record">
                      <a>Music Hall</a>
                    </Link>
                  </span>
                  <WebDropdownMenu
                    isOpened={isOpened}
                    setIsOpened={setIsOpened}
                    recitalList={recitalList}
                  />
                </li>
              </>
            ) : (
              <>
                <li className="mr-3">
                  <a
                    className={
                      isOpened
                        ? "relative z-50 fas fa-stream px-4 py-2 text-xl text-gray-700 bg-gray-50 rounded-md transform duration-700 "
                        : "fas fa-stream px-4 py-2 text-xl text-gray-700"
                    }
                    onClick={() => setIsOpened(!isOpened)}
                  />
                  <MobileDropdownMenu
                    isOpened={isOpened}
                    setIsOpened={setIsOpened}
                    recitalList={recitalList}
                  />
                  <button
                    className={
                      isOpened
                        ? "z-20 fixed bg-black h-full w-full top-0 bottom-0 left-0 right-0 opacity-60 transform duration-300 cursor-default"
                        : "z-20 invisible fixed bg-black h-full w-full top-0 bottom-0 left-0 right-0 opacity-0 transform duration-300 cursor-default"
                    }
                    onClick={() => setIsOpened(false)}
                  ></button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
