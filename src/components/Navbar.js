import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 sticky top-0 z-10 inset-x-0 font-sans text-gray-900">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="py-4 border-b border-gray-300 flex justify-start">
          <ul className="flex items-center gap-4">
            <li className="mr-2 ">
              <Link to="/" className="flex items-center gap-2">
                <p>
                  <span className="material-icons-outlined text-3xl">
                    castle
                  </span>
                </p>
                <p className="text-2xl mr-1">Castle</p>
              </Link>
            </li>
            {/* <li className="px-8 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg">
              <Link to="/experience">Code</Link>
            </li>
            <li className="px-8 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg">
              <Link to="/skills">Record</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
