import React from "react";
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock,backgroundGradient, codeColor
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-24 w-[1200px] `}>
        
        {/* Section 1  */}
        <div className="w-[50%] flex flex-col gap-8">
            {heading}
            <div className="text-richblack-300 ">
                {subheading}
            </div>

            <div className="flex gap-7 mt-7">
            
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className="flex gap-2 items-center">
                        {ctabtn1.btnText}
                        <FaArrowRight/>
                    </div>
                </CTAButton>

                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                    <div className="flex gap-2 items-center">
                        {ctabtn2.btnText}
                    </div>
                </CTAButton>

            </div>

        </div>

        {/* Section 2 */}
        <div className="flex flex-row h-fit text-xl w-[50%] py-4 ">
            {/* HW -> BG gradient */}

            <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-semibold bg-transparent">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
            </div>

            <div className={`w-[90%] flex flex-col gap-2 font-mono text-opacity-70 ${codeColor} pr-2 bg-[radial-gradient(ellipse,_rgba(20,10,120,0.4)_10%,_rgba(20,10,100,0.4)_20%,_rgba(20,10,80,0.4)_30%,_rgba(20,10,60,0.4)_40%,_#000814_70%,_#000814_100%)]`} 
            style={{ minHeight: "100px" }}>
                <TypeAnimation
                    sequence={[codeblock,2000,"_"]}
                    repeat={Infinity}
                    omitDeletionAnimation
                    style={
                        {
                            whiteSpace:"pre-line",
                            display:"block"
                        }
                    }
                />
            </div>
        </div>

    </div>
  );
};

export default CodeBlocks;
