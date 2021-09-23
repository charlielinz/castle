import Link from "next/link";
import { useState } from "react";
import InvisibleHorizon from "./InvisibleHorizon";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <nav id="fakeNav" className="bg-gray-50 lg:h-4"></nav>
      <InvisibleHorizon setIsIntersecting={setIsIntersecting} />
      <nav
        className={
          isIntersecting
            ? "bg-gray-50 sticky top-0 z-10 inset-x-0 font-sans text-gray-900"
            : "transition-shadow duration-500 shadow-sm bg-gray-50 sticky top-0 z-10 inset-x-0 font-sans text-gray-900"
        }
      >
        <div className="max-w-screen-lg mx-auto">
          <ul className="flex justify-end items-center gap-4">
            <li className="mr-auto p-4">
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
            <li className="py-6">
              <span className="px-2 text-sm border-b border-gray-50 lg:text-lg lg:px-4 lg:py-1 hover:border-b hover:border-gray-400">
                <Link href="/code">
                  <a>Codehub</a>
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
              <DropdownMenu isOpened={isOpened} setIsOpened={setIsOpened} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
