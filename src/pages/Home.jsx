import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../component/core/HomePage/HighlightText";
import CTAButton from "../component/common/Button";
import banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../component/core/HomePage/CodeBlocks";
import Footer from "../component/common/Footer";
import TimeLineSection from "../component/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../component/core/HomePage/LearningLanguageSection";
import InstructorSection from "../component/core/HomePage/InstructorSection";
import ExploreMore from "../component/core/HomePage/ExploreMore";

const Home = () => {
  return(
    <div>
        {/* section 1 */}
        <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center
         text-white justify-between">
    
            <Link to={"/signup"}>
                <div className="group mt-16 mx-auto rounded-full bg-richblack-800 font-semibold text-richblack-200
                transition-all duration-200 ease-in-out hover:scale-95 w-fit border border-richblack-600">
                    <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[10px]
                    transition-all duration-200 group-hover:bg-richblack-900">
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className="text-center text-4xl font-semibold mt-8">
                Empower Your Future with
                <HighlightText text={"Coding Skills"}/>
            </div>

            <div className=" mt-4 w-[90%] text-center text-lg text-richblack-300">
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes and personalized feedback from instructors.
            </div>

            <div className="flex flex-row gap-7 mt-8">
                
                <CTAButton active={true} linkto="/signup">
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto="/login">
                    Book a Demo
                </CTAButton>

            </div>

            <div className="relative mx-3 my-12 max-w-[940px] shadow-[18px_22px_0px_#ffffff]">
                <div className="shadow-[-4px_-4px_20px_0px_#118AB2]">
                    <video muted loop autoPlay src={banner} className=""></video>
                </div>
            </div>

            {/* code section 1 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock Your
                            <HighlightText text={"coding potential"}/>
                            with our online courses
                        </div>
                    }
                    subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={
                        {
                            btnText: "Try it Yourself",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false,
                        }
                    }

                    codeblock={`<!DOCTYPE html>\n<html>\n<head>\n\t<title>Document</title>\n</head>\n<body>\n\t<nav>\n\t\t<a href="/home"/>\n\t\t<a href="/about"/>\n\t</nav>\n</body>\n</html>`}
                    codeColor={"text-yellow-25"}
                />
            </div>

            {/* code section 2 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Start
                            <HighlightText text={"Coding"}/>
                            <br />in Second
                            
                        </div>
                    }
                    subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                    ctabtn1={
                        {
                            btnText: "Continue Lesson",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false,
                        }
                    }

                    codeblock={`import "./index.css";\nimport { BrowserRouter } from "react-router-dom";\nconst root = ReactDOM.createRoot(do\ncument.getElementById("root"));\nroot.render(\n<React.StrictMode>\n<BrowserRouter>\n<App />\n</BrowserRouter>\n</React.StrictMode>\n);`}
                    codeColor={"text-yellow-25"}
                />
            </div>

            <ExploreMore/>

        </div>


        {/* section 2 */}
        <div className="bg-pure-greys-5 text-richblack-700">   {/* main section */}
            <div className="homepage_bg h-[320px]">          {/* top grid pattern */}

                <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-5 mx-auto">  {/* div covering the screen */}
                    <div className="mt-[200px] flex flex-row gap-7 text-white">  {/* button containing div */}
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className="flex flex-row items-center gap-3">
                                Explore Full Catalog
                                <FaArrowRight/>
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn More
                            </div>
                        </CTAButton>
                    </div>
                </div>
            
            </div>
            
            <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
                <div className="flex flex-row gap-5 mb-5 mt-[95px] justify-center">
                    <div className="text-4xl font-semibold w-[45%]">
                        Get the Skills you need for a 
                        <HighlightText text={"Job that is in demand"}/>
                    </div>
                    <div className="flex flex-col gap-10 w-[40%] items-start">
                        <div className="text-[16px]">The modern StudyNotion is the dictates its own terms. Today, to be a competetive specialist requires more than professional skills.</div>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div>
                                Learn More
                            </div>
                        </CTAButton>
                    </div>

                </div>
                

                <TimeLineSection/>
                
                <LearningLanguageSection/>

            </div>

        </div>

        {/* section 3 */}
        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
            
            <InstructorSection/>

            <h2 className="text-center text-4xl font-semibold mt-10">Review from Other Learners</h2>
            
            {/* Review slider here */}
                    
        </div>


        {/* footer  */}
        <Footer></Footer>
    </div>
  )
};

export default Home;
