import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 sm:px-10 py-4 sm:text-2xl bg-secondary/95 text-last h-fit backdrop-blur border-b border-last/10">
      <Link to="/">
        <span className="font-bold italic sm:text-4xl text-xl hover:underline flex items-center gap-3">
          Eye Spy
          <img
            src="search.svg"
            alt="Search Icon"
            className="w-10 sm:w-12 drop-shadow-sm"
          />
        </span>
      </Link>
      <nav className="flex items-center gap-3 sm:gap-5 text-base sm:text-xl">
        <Link
          to="/leaderboard"
          className="rounded-full px-3 py-1.5 hover:bg-last/10 transition-colors"
        >
          Leaderboard
        </Link>
      </nav>
    </header>
  );
};

export default Header;
