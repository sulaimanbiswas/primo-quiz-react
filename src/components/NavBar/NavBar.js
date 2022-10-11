import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container mx-auto p-5 shadow-md bg-slate-200">
      <div className="flex justify-between items-center">
        <div className="">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Primo <span className="text-orange-500">Quiz</span>
            </h1>
          </Link>
        </div>
        <div className="flex gap-5">
          <NavLink
            className="text-xl hover:text-orange-500 font-semibold"
            to="/topic"
          >
            Topic
          </NavLink>
          <NavLink
            className="text-xl hover:text-orange-500 font-semibold"
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className="text-xl hover:text-orange-500 font-semibold"
            to="/blog"
          >
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
