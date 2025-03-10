import React from "react";
import { Link } from "react-router-dom";

const FooterCard = ({section}) => {
  return (
    <div className="flex flex-col">
        <div className="text-richblack-25 font-semibold mb-4">{section?.title}</div>
        <div className="flex flex-col gap-2">
            {
                section?.links.map((subSection, index) => {
                    return(
                        <Link key={index} to={subSection?.link} className="hover:underline text-richblack-300">
                            {subSection?.title}
                        </Link>
                    )
                })
            }
        </div>
    </div>
  );
};

export default FooterCard;
