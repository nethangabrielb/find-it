import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Error = () => {
  return (
    <div className="flex flex-col h-[100svh]">
      <Header></Header>
      <div className="flex justify-center items-center flex-col my-auto text-secondary gap-5 px-4">
        <img
          src="/error.png"
          alt="Error"
          className="w-full max-w-[520px] drop-shadow"
        />
        <p className="font-extrabold text-2xl sm:text-3xl text-center text-last">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-2xl font-bold bg-secondary text-last border border-last/15 hover:brightness-105 active:scale-[0.99] transition"
        >
          Back home
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
