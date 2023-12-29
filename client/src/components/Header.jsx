import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-orange-400">Afaq</span>
            <span className="text-slate-700">Ahmad</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex items-center gap-4">
          <li className="hidden sm:inline hover:underline text-slate-600 cursor-pointer transition-all ease-in duration-150">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="hidden sm:inline hover:underline text-slate-600 cursor-pointer transition-all ease-in duration-150">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:underline text-slate-600 cursor-pointer transition-all ease-in duration-150">
            <Link to={"/sign-in"}>SignIn</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
