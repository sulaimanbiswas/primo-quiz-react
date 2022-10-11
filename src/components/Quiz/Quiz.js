import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const { data, status } = useLoaderData();
  const [count, setCount] = useState(0);
  if (status === false && data) {
    return (
      <h1 className="font-bold text-center text-3xl text-orange-500 my-10">
        No Quiz Found
      </h1>
    );
  }

  const { name, questions } = data;

  return (
    <div className="container mx-auto p-5 w-full md:w-1/2 my-10">
      <h1 className="font-bold text-center text-3xl text-orange-500">
        Quiz of {name}
      </h1>
      <h2 className="text-center mt-5">Correct Answer: {count}</h2>
      <div className="">
        {questions.map((singleQuestion) => (
          <Question
            key={singleQuestion.id}
            singleQuestion={singleQuestion}
            setCount={setCount}
            count={count}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
