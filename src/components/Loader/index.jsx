import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div
          className="w-4 h-4 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-4 h-4 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: ".2s" }}
        ></div>
        <div
          className="w-4 h-4 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
