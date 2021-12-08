import Link from "next/link";

const MobileNavDropdown = ({ isOpened, setIsOpened, recitalList }) => {
  return (
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
            <Link href="/code_hub" className="w-full">
              <a>Code Hub</a>
            </Link>
          </span>
        </li>
        <li className="flex p-2 text-xl rounded-sm">
          <span className="w-full" onClick={() => setIsOpened(false)}>
            <Link href="/music_hall">
              <a>Music Hall</a>
            </Link>
          </span>
        </li>
        <ul className="px-4 py-2">
          {recitalList.map((recital, index) => {
            const recitalHref = "/music_hall#" + `${recital.hash}`;
            return (
              <li className="px-2 py-2 text-base rounded-sm" key={index}>
                <span onClick={() => setIsOpened(false)}>
                  <Link href={recitalHref}>
                    <a>
                      <p>{recital.date}</p>
                      <p>{recital.title}</p>
                    </a>
                  </Link>
                </span>
              </li>
            );
          })}
        </ul>
        <li className="flex p-2 text-xl rounded-sm text-truegray-600">
          <span className="w-full" onClick={() => setIsOpened(false)}>
            <Link href="/contact">
              <a className="bg-truegray-200 px-4 py-1 rounded-lg">Contact me</a>
            </Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavDropdown;
