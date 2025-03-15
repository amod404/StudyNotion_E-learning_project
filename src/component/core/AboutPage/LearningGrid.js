import React from "react";
import HighlightText from "../HomePage/HighlightText";
import CTAButton from "../../common/Button"

const LearningGridArray = [
    {
        order:-1,
        heading: "World-Class Learning for",
        highlightText: "Anyone,Anywhere",
        description:
        "StudyNotion partners with more than 275+ leading universities and companies to bring flexible, afforable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order:1,
        heading: "Curriculum Bases on Indusry Needs",
        description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order:2,
        heading:"Our Learning Methods",
        description:"StudyNotion partners wit more than 275+ leading universities and companies to bring",
    },
    {
        order:3,
        heading:"Certification",
        description:"StudyNotion partners wit more than 275+ leading universities and companies to bring",
    },
    {
        order:4,
        heading:`Rating "Auto-grading"`,
        description:"StudyNotion partners wit more than 275+ leading universities and companies to bring",
    },
    {
        order:5,
        heading:"Ready to Work",
        description:"StudyNotion partners wit more than 275+ leading universities and companies to bring",
    },

]

const LearningGrid = () => {
  return(
    <div className="grid mx-auto grid-col-1 lg:grid-cols-4 mb-20 p-5 lg:w-fit">
        {
            LearningGridArray.map( (card,index) => {
                return (
                    <div
                    key={index}
                    className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                    ${card.order %2 === 1 && card.order>0 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"}
                    ${card.order === 3 && "lg:col-start-2"}
                    ${card.order === -1 && "bg-transparent"}`}>

                    {
                        card.order === -1
                        ? (
                            <div className="lg:w-[90%] flex flex-col pb-5 gap-3">
                                <div className="text-4xl font-semibold mb-2">
                                    <p className="mb-1">
                                        {card.heading}
                                    </p>
                                    <HighlightText text={card.highlightText}/>
                                </div>
                                <p className="text-richblack-200 text-sm">
                                    {card.description}
                                </p>
                                <div className="w-fit mt-3">
                                    <CTAButton active={true} linkto={card.BtnLink}>
                                        {card.BtnText}
                                    </CTAButton>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-8 p-4">
                                <h1 className="text-richblack-5 text-xl">
                                    {card.heading}
                                </h1>
                                <p className="text-richblack-300 font-medium">
                                    {card.description}
                                </p>
                            </div>
                        )
                    }
                        
                    </div>
                )
            })
        }
    </div>
  );
};

export default LearningGrid;
