import React from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div className="container mx-auto p-5 ">
      <div className="flex justify-center items-center ">
        <BarChart width={320} height={500} data={data}>
          <Bar dataKey="total" fill="#f97316" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
