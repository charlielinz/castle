import Link from "next/link";
import RecitalList from "../contents/RecitalList";

const Navigation = ({ isOpened, setIsOpened }) => {
  const dropdownCssString = "px-2 py-1 rounded-sm hover:bg-gray-100"
  return (
    <>
      <li className="py-6">
        <span className="border-b border-gray-50 text-lg px-4 py-1 hover:border-b hover:border-gray-400">
          <Link href="/blog/posts">
            <a>Blog</a>
          </Link>
        </span>
      </li>
      <li className="py-6">
        <span className="border-b border-gray-50 text-lg px-4 py-1 hover:border-b hover:border-gray-400">
          <Link href="/code-hub">
            <a>Code Hub</a>
          </Link>
        </span>
      </li>
      <li
        className="py-6 "
        onMouseLeave={() => setIsOpened(false)}
        onClick={() => setIsOpened(false)}
      >
        <span
          className="border-b border-gray-50 text-lg px-4 py-1 hover:border-b hover:border-gray-400"
          onMouseEnter={() => setIsOpened(true)}
        >
          <Link href="/music-hall">
            <a>Music Hall</a>
          </Link>
        </span>
        <div
          className="absolute transform -translate-x-56 mt-6 text-base w-1/3"
          onMouseLeave={() => setIsOpened(false)}
        >
          <ul
            className={
              isOpened
                ? "flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md transition duration-700 opacity-100"
                : "invisible p-4 bg-white rounded-lg shadow-md transition duration-700 opacity-0"
            }
          >
            <RecitalList className={dropdownCssString} />
          </ul>
        </div>
      </li>
      <li className="py-6">
        <span className="mr-3 px-4 py-3 text-lg text-truegray-700 bg-truegray-200 rounded-2xl transition-all duration-300 hover:text-white hover:bg-truegray-400">
          <Link href="/contact">
            <a>Contact me</a>
          </Link>
        </span>
      </li>
    </>
  );
};

export default Navigation;
