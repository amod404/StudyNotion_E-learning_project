import React from "react";
import HighlightText from "../HomePage/HighlightText";

const Quote = () => {
  return(
    <div className="text-center w-[70%] text-3xl font-semibold p-2 mb-16">
        We are passionate about revolutionizing the way we learn. Our innovative platform 
        <HighlightText text={"combines technology,"}></HighlightText>
        <span className="text-[#fea704]"> expertise, </span>
        and community to create an 
        <span className="text-[#ffee00]"> unparalleled educational experience.</span>
    </div>
  );
};

export default Quote;
