import { Link } from "react-router-dom";

const DropDownMenu = ({ isOpened, setIsOpened }) => {
  return (
    <div
      className="absolute transform -translate-x-20 mt-6 text-base"
      onMouseLeave={() => setIsOpened(false)}
    >
      <ul
        className={
          isOpened
            ? "flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md transition duration-500 opacity-100"
            : "invisible p-4 bg-white rounded-lg shadow-md transition duration-500 opacity-0"
        }
      >
        <li className="px-2 py-1 rounded-sm hover:bg-gray-100">
          <Link to="/record#piano-solo-recital">
            <p>2019.06.18</p>
            <p>Piano Recital</p>
          </Link>
        </li>
        <li className="px-2 py-1 rounded-sm hover:bg-gray-100">
          <Link to="/record#chamber-music-recital-1">
            <p>2018.06.23</p>
            <p>Chamber Music Recital</p>
          </Link>
        </li>
        <li className="px-2 py-1 rounded-sm hover:bg-gray-100">
          <Link to="/record#chamber-music-recital-2">
            <p>2018.06.03</p>
            <p>Chamber Music Recital</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
