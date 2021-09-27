import Link from "next/link";

const MobileDropdownMenu = ({ isOpened, setIsOpened }) => {
  return (
    <div className="absolute z-30 transform -translate-x-66 text-base">
      <ul
        className={
          isOpened
            ? "w-80 p-4 bg-gray-50 rounded-lg shadow-md transition duration-700 opacity-100 translate-y-4"
            : "invisible w-40 p-4 bg-gray-50 rounded-lg shadow-md transition duration-700 opacity-0 translate-y-0"
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
            <Link href="/code" className="w-full">
              <a>Code Hub</a>
            </Link>
          </span>
        </li>
        <li className="flex p-2 text-xl rounded-sm">
          <span className="w-full" onClick={() => setIsOpened(false)}>
            <Link href="/record">
              <a>Music Hall</a>
            </Link>
          </span>
        </li>
        <ul className="px-4 py-2">
          <li className="px-2 py-2 text-base rounded-sm">
            <span onClick={() => setIsOpened(false)}>
              <Link href="/record#piano-solo-recital">
                <a>
                  <p>2019.06.18</p>
                  <p>Piano Recital</p>
                </a>
              </Link>
            </span>
          </li>
          <li className="px-2 py-2 text-base rounded-sm">
            <span onClick={() => setIsOpened(false)}>
              <Link href="/record#chamber-music-recital-1">
                <a>
                  <p>2018.06.23</p>
                  <p>Chamber Music Recital</p>
                </a>
              </Link>
            </span>
          </li>
          <li className="px-2 py-2 text-base rounded-sm">
            <span onClick={() => setIsOpened(false)}>
              <Link href="/record#chamber-music-recital-2">
                <a>
                  <p>2018.06.03</p>
                  <p>Chamber Music Recital</p>
                </a>
              </Link>
            </span>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default MobileDropdownMenu;
