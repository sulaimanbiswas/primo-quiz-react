import React from "react";

const NavBar = () => {
  return (
    <nav className="container mx-auto p-5 bg-slate-200">
      <div className="flex justify-between items-center">
        <div className="">
          <a href="/">
            <h1 className="text-2xl font-bold">
              Primo <span className="text-orange-500">Quiz</span>
            </h1>
          </a>
        </div>
        <div className="flex gap-5">
          <a
            className="text-xl hover:text-orange-500 font-semibold"
            href="/topic"
          >
            Topic
          </a>
          <a
            className="text-xl hover:text-orange-500 font-semibold"
            href="/statistics"
          >
            Statistics
          </a>
          <a
            className="text-xl hover:text-orange-500 font-semibold"
            href="/blog"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
