import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from "./HighlightText";
import CTAButton from "../../common/Button"

const InstructorSection = () => {
  return(
    <div className="mt-16">
        <div className="flex flex-row gap-20 items-center">
            <div className="w-[50%]">
                <img src={Instructor} alt="instructor" className="shadow-white"/>
            </div>
            <div className="w-[50%] flex flex-col gap-6">
                <div className="text-4xl font-semibold w-[50%]">
                    Become an 
                    <HighlightText text={"Instructor"}/>
                </div>

                <p className="font-medium text-[16px] w-[90%] text-richblack-300 mb-10">
                    Instructor from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>

                <div className="w-fit">
                    <CTAButton active={true} linkto={"signup"}>
                        <div className="flex flex-row gap-4 items-center">
                            <p>Start Learning Today</p>
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                </div>

            </div>
        </div>
    </div>
  );
};

export default InstructorSection;
