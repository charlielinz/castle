import Link from "next/link";
import RecitalList from "../contents/RecitalList";

const MobileNavigation = ({ isOpened, setIsOpened }) => {
  const dropdownCssString = "px-2 py-2 text-base rounded-sm";
  return (
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
        <div
          className={
            isOpened
              ? "absolute z-30 transform -translate-x-66 text-base"
              : "invisible absolute -z-100 transform -translate-x-66 text-base"
          }
        >
          <ul
            className={
              isOpened
                ? "w-80 p-4 bg-gray-50 rounded-lg shadow-md transition duration-700 opacity-100 translate-y-4"
                : "invisible -z-100 w-40 p-4 bg-gray-50 rounded-lg shadow-md transition duration-700 opacity-0 translate-y-0"
            }
          >
            <li className="flex p-2 text-xl rounded-sm">
              <span className="w-full" onClick={() => setIsOpened(false)}>
                <Link href="/blog/posts" className="w-full">
                  <a>Blog</a>
                </Link>
              </span>
            </li>
            <li className="flex p-2 text-xl rounded-sm">
              <span className="w-full" onClick={() => setIsOpened(false)}>
                <Link href="/code-hub" className="w-full">
                  <a>Code Hub</a>
                </Link>
              </span>
            </li>
            <li className="flex p-2 text-xl rounded-sm">
              <span className="w-full" onClick={() => setIsOpened(false)}>
                <Link href="/music-hall">
                  <a>Music Hall</a>
                </Link>
              </span>
            </li>
            <ul className="px-4 py-2" onClick={() => setIsOpened(false)}>
              <RecitalList className={dropdownCssString} />
            </ul>
            <li className="flex py-2 text-xl rounded-sm text-truegray-600">
              <span className="w-full" onClick={() => setIsOpened(false)}>
                <Link href="/contact">
                  <a className="bg-truegray-200 px-4 py-1 rounded-lg">
                    Contact me
                  </a>
                </Link>
              </span>
            </li>
          </ul>
        </div>
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
  );
};

export default MobileNavigation;
