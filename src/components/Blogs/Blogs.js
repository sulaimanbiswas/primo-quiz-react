import React from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      question: "What is the purpose of react router?",
      answer:
        "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
    },
    {
      id: 2,
      question: "How does context api work?",
      answer:
        'The React Context API is a way for a React app to effectively produce global variables that can be passed around.  This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.  Context is also touted as an easier, lighter approach to state management using Redux.s',
    },
    {
      id: 3,
      question: "What is useRef hook in react?",
      answer:
        "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.",
    },
  ];
  return (
    <div className="container mx-auto px-5 my-10">
      <h2 className="text-3xl text-orange-500 font-bold text-center">
        Question And Answer
      </h2>
      <div className="md:w-1/2 mx-auto flex flex-col gap-10 mt-10">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
