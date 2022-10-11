import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Option from "../Option/Option";

const SingleQuestion = ({ singleQuestion, count, setCount }) => {
  const { correctAnswer, id, options, question } = singleQuestion;

  const isCorrect = (option) => {
    if (option === correctAnswer) {
      setCount(count + 1);
      toast.success("Correct Answer", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Wrong Answer", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const correctAnswerShow = () => {
    toast.warn(`${correctAnswer}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="shadow-md mt-8 flex flex-col gap-4 p-6">
      <div className="flex justify-between">
        <h2 className="text-xl">
          Quiz {}: {question}
        </h2>

        <div className="">
          <EyeIcon
            onClick={correctAnswerShow}
            className="w-6 text-orange-500"
          ></EyeIcon>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <Option
            key={option}
            option={option}
            questionId={id}
            isCorrect={isCorrect}
          ></Option>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleQuestion;
