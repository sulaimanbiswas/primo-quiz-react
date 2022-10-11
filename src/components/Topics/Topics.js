import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topic from "../Topic/Topic";

const Topics = () => {
  const { data } = useLoaderData();
  return (
    <>
      <Header></Header>
      <div className=" container mx-auto p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </>
  );
};

export default Topics;
