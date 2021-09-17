import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 sticky top-0 z-10 inset-x-0 font-sans text-gray-900">
      <div className="max-w-screen-lg mx-auto px-4 py-4 border-b border-gray-300">
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
          <li className="px-4 py-2 text-sm lg:text-lg lg:px-8 lg:py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg">
            <Link to="/code">Code</Link>
          </li>
          <li className="px-4 py-2 text-sm lg:text-lg lg:px-8 lg:py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg">
            <Link to="/record">Record</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
