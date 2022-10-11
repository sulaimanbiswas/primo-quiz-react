import React from "react";

const Blog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default Blog;
