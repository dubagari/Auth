import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl">
            <span className="text-slate-600">User</span>
            <span className="text-slate-500">Auth</span>
          </h1>
        </Link>
        <form className="flex items-center bg-slate-100 rounded-lg px-3 py-1 ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline  hover:underline hover:text-slate-400">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline  hover:underline hover:text-slate-400">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" hover:underline hover:text-slate-400">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
