import React from "react";

const Option = ({ option, questionId, isCorrect }) => {
  return (
    <div className="flex gap-4">
      <input
        onClick={() => isCorrect(option)}
        type="radio"
        name={questionId}
        id={option}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default Option;
