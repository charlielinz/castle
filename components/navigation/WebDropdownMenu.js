import Link from "next/link";

const WebDropDownMenu = ({ isOpened, setIsOpened, recitalList }) => {
  return (
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
        {recitalList.map((recital, index) => {
          const recitalHref = "/record#" + `${recital.hash}`;
          return (
            <li className="px-2 py-1 rounded-sm hover:bg-gray-100" key={index}>
              <Link href={recitalHref}>
                <a>
                  <p>{recital.date}</p>
                  <p>{recital.title}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WebDropDownMenu;
