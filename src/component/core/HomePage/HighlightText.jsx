import React from "react";

const HighlightText = ({text}) => {
  return <span className="text-4xl font-bold bg-gradient-to-r from-[#0072ec] to-blue-200 bg-clip-text text-transparent"> {text} </span>;
  // return <span className=" font-semibold text-blue-100"> {text} </span>;
};

export default HighlightText;
