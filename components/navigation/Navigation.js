const Navigation = ({ isOpened }) => {
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
          <Link href="/code_hub">
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
          <Link href="/music_hall">
            <a>Music Hall</a>
          </Link>
        </span>
        <WebDropdownMenu
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          recitalList={recitalList}
        />
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
