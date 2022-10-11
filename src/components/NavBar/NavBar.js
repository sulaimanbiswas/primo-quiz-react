import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container mx-auto p-5 bg-slate-200">
      <div className="flex justify-between items-center">
        <div className="">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Primo <span className="text-orange-500">Quiz</span>
            </h1>
          </Link>
        </div>
        <div className="flex gap-5">
          <Link
            className="text-xl hover:text-orange-500 font-semibold"
            to="/topic"
          >
            Topic
          </Link>
          <Link
            className="text-xl hover:text-orange-500 font-semibold"
            to="/statistics"
          >
            Statistics
          </Link>
          <Link
            className="text-xl hover:text-orange-500 font-semibold"
            to="/blog"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
