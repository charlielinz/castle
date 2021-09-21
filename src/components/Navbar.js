import { Link } from "react-router-dom";
import { useState } from "react";
import InvisibleHorizon from "./InvisibleHorizon";

const Navbar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  return (
    <>
      <nav id="fakeNav" className="bg-gray-50 lg:h-4"></nav>
      <InvisibleHorizon setIsIntersecting={setIsIntersecting} />
      <nav
        className={
          isIntersecting
            ? "bg-gray-50 sticky top-0 z-10 inset-x-0 font-sans text-gray-900"
            : "transition-colors duration-500 bg-gray-100 sticky top-0 z-10 inset-x-0 font-sans text-gray-900"
        }
      >
        <div className="max-w-screen-lg mx-auto px-4 py-4 ">
          <ul className="flex justify-end items-center gap-4">
            <li className="mr-auto">
              <Link to="/" className="flex items-center gap-2">
                <p>
                  <span className="material-icons-outlined lg:text-4xl">
                    castle
                  </span>
                </p>
                <p className="text-xl mr-1 lg:text-3xl lg:mx-1">Castle</p>
              </Link>
            </li>
            <li className="px-4 py-2 text-sm lg:px-8 lg:py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg">
              <Link to="/code">Codehub</Link>
            </li>
            <li className="px-4 py-2 text-sm lg:px-8 lg:py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg">
              <Link to="/record">Music Hall</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
