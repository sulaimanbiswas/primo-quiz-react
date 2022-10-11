import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="border border-orange-500 rounded-md p-2 flex flex-col gap-3 bg-gray-200">
      <img className=" rounded" src={logo} alt="" />
      <div className="flex justify-between">
        <h2 className="text-xl text-orange-500 font-bold">{name}</h2>
        <p className="">Total Quiz: {total}</p>
      </div>
      <Link to={`/${id}`}>
        <button className=" w-full text-white text-xl bg-orange-500 hover:bg-orange-600 rounded-md p-2">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default Topic;
