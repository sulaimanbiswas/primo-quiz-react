import React from "react";
import BG from "../../assets/bg.jpg";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BG})` }}
      className="container mx-auto p-5 bg-center bg-cover bg-no-repeat"
    >
      <h2 className="text-orange-500 font-bold text-5xl text-center">
        Multistep Quiz Form
      </h2>
      <p className="md:w-1/2 mx-auto text-white text-center mt-10 text-xl">
        Primo Quiz is a perfect solution for customers who are looking for a
        modern and clean interactive design for multistep forms, Questionnaire
        or any other multistep form wizard.
      </p>
    </div>
  );
};

export default Header;
