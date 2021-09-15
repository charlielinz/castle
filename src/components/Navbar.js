import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 sticky top-0 z-10 inset-x-0">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="py-4 border-b border-gray-200 flex justify-start">
          <ul className="flex items-center gap-4">
            <li className="mr-2 flex items-center gap-2">
              <p>
                <span className="material-icons-outlined text-3xl">castle</span>
              </p>
              <p className="text-2xl mr-1">Castle</p>
              <p className="text-xs w-24">Welcome to Charlie's castle</p>
            </li>
            <li>
            </li>
            <li className="px-8 py-2 bg-gray-100 hover:bg-gray-800 text-sm hover:text-gray-100 transition-colors duration-100 rounded-lg ">
              <Link to="/">Home</Link>
            </li>
            <li className="px-8 py-2 bg-gray-100 hover:bg-gray-800 text-sm hover:text-gray-100 transition-colors duration-100 rounded-lg">
              <Link to="/experience">Experience</Link>
            </li>
            <li className="px-8 py-2 bg-gray-100 hover:bg-gray-800 text-sm hover:text-gray-100 transition-colors duration-100 rounded-lg">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="px-8 py-2 bg-gray-100 hover:bg-gray-800 text-sm hover:text-gray-100 transition-colors duration-100 rounded-lg">
              <Link to="/profolio">Profolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
