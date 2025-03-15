import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import play_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../../common/Button"

const LearningLanguageSection = () => {
  return (
    <div className="mt-52">
        <div className="flex flex-col items-center gap-5">

            <div className="text-4xl font-semibold text-center ">
                Your Swiss Knife for 
                <HighlightText text={"learning any language"}/>
            </div>

            <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
                Using spin making learning multiple language easy, with 20+ languages realistic voice-over,
                process tracking, custom schedule and more.
            </div>

            <div className="flex flex-row items-center justify-center mt-5">
                <img src={know_your_progress} alt="know_your_progress" className="object-contain -mr-32" />
                <img src={compare_with_others} alt="compare_with_others" className="object-contain" />
                <img src={play_your_lesson} alt="play_your_lesson" className="object-contain -ml-36" />
            </div>

            <div className="w-fit mb-24">
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn More
                    </div>
                </CTAButton>
            </div>

        </div>
    </div>
  );
};

export default LearningLanguageSection;
