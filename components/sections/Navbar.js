import Link from "next/link";
import { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import InvisibleHorizon from "../navigation/InvisibleHorizon";
import Navigation from "../navigation/Navigation";
import MobileNavigation from "../navigation/MobileNavigation";

const Navbar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const windowWidth = useWindowWidth();
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
              <Navigation isOpened={isOpened} setIsOpened={setIsOpened} />
            ) : (
              <MobileNavigation isOpened={isOpened} setIsOpened={setIsOpened} />
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
