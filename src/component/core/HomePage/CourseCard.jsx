import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  if (currentCard === cardData.heading) {
    return (
      <div className="flex flex-col w-[30%] bg-richblack-5 px-8 pt-8 pb-4 shadow-yellow-50 shadow-[12px_12px_0] transition-all duration-200 ease-in-out hover:cursor-pointer">
        <h2 className="text-richblack-900 text-2xl mb-3">{cardData.heading}</h2>
        <p className="text-richblack-600 text-lg mb-[70px] ">
          {cardData.description}
        </p>
        <div className="flex flex-row justify-between border-t-2 border-dotted border-richblack-200 p-4">
          <div className="flex flex-row gap-2 items-center justify-center text-xl text-blue-500">
            <FaUserFriends></FaUserFriends>
            <p>{cardData.level}</p>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center text-xl text-blue-500">
            <ImTree />
            <p>{cardData.lessionNumber}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-[30%] bg-richblack-800 px-8 pt-8 pb-4 transition-all duration-200 ease-in-out hover:cursor-pointer" onClick={() => setCurrentCard(cardData.heading)}>
        <h2 className="text-richblack-5 text-2xl mb-3">{cardData.heading}</h2>
        <p className="text-richblack-300 text-lg mb-[70px] ">
          {cardData.description}
        </p>
        <div className="flex flex-row justify-between border-t-2 border-dotted border-richblack-200 p-4">
          <div className="flex flex-row gap-2 items-center justify-center text-xl">
            <FaUserFriends></FaUserFriends>
            <p>{cardData.level}</p>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center text-xl">
            <ImTree />
            <p>{cardData.lessionNumber}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default CourseCard;
