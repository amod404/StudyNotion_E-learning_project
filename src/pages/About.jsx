import React from "react";
import HighlightText from "../component/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import FoundingStory from "../assets/Images/FoundingStory.png"
import Quote from "../component/core/AboutPage/Quote";
import StatsComponent from "../component/core/AboutPage/StatsComponent";
import LearningGrid from "../component/core/AboutPage/LearningGrid";
import ContactFormSection from "../component/core/AboutPage/ContactFormSection";
import Footer from "../component/common/Footer"

const About = () => {
  return(
    <div className="text-white mx-auto">
        {/* section1 */}
        <section className="w-screen">
            <div className="flex flex-col relative justify-center items-center w-full bg-richblack-800 mb-48">
                <header className="text-center max-w-[50%] py-14 flex flex-col items-center mb-40">
                    <p className="text-4xl font-semibold text-richblack-5 p-1">Driving Innovation in a Online Education for a</p>
                    <HighlightText text={"Brighter Future"}></HighlightText>
                    <p className="p-3 text-richblack-200 text-[16px] w-[80%]"> StudyNotion is at the forefront of driving innovation in online education. We'are 
                    passionate about creatinf brighter future by offering cutting-edge courses,
                    leveraging emerging technologies, and nurturing a vibrnt learning community</p>
                </header>
                <div className=" absolute flex mx-auto gap-x-3 top-[50%] translate-y-[15%]">
                    <img src={BannerImage1} alt="" />
                    <img src={BannerImage2} alt="" />
                    <img src={BannerImage3} alt="" />
                </div>
            </div>
        </section>

        {/* section 2 */}
        <section className="w-screen flex flex-col items-center">
                <Quote/>
                <div className="border-b-[1px] h-[1px] w-[95%] border-richblack-600"></div>
        </section>

        {/* section 3 */}
        <section className="w-screen p-2 flex flex-col items-center py-32">
            <div className="flex flex-col w-[80%] gap-32">
                <div className="flex flex-col lg:flex-row gap-10 justify-evenly">
                    <div className="flex flex-col w-[45%] gap-6 text-richblack-100 text-[17px]">
                        <h1 className="text-4xl font-edu-sa font-bold bg-gradient-to-bl from-[#b615f0] via-[#ff0000] to-[#ff6a00] bg-clip-text text-transparent pb-2">Or Founding Story</h1>
                        <p>Our e-learning platform was born out of a shared vision and passion for transforming eduction. It all began with a group
                        of educators, technologists, and lifelong learners who recognied the need for accessile,
                        flexible and high-quality learning opportunities in a rapidly evolving digital world.</p>
                        <p>As experienced educators ourselves , we witnessed firsthand the limitations and 
                        challanges of traditional education systems. We believed thate education sould not
                        be confined to the walls of a classroom or restricted by geograpical boundries.
                        We envisioned a platform that could bridge these gaps and empower individuals from 
                        all walks of life to unloack their full potential.</p>
                    </div>
                    <div className="w-[45%] pt-8 pl-2">
                        <img src={FoundingStory} alt="" />
                    </div>
                
                </div>

                <div className="flex flex-row gap-10 justify-evenly">

                    <div className="flex flex-col w-[45%] gap-6 text-richblack-100 text-[17px]">
                        <h1 className="text-4xl font-edu-sa font-bold bg-gradient-to-bl from-[#fffb00] via-[#fff530] to-[#fff1ce] bg-clip-text text-transparent mb-2">Our Vision</h1>
                        <p>With thisi viion in mind, we set out on ajourney to create an e-learning 
                        platform that would revolutionize the way people learn. Our team of dedicated
                        experts worked tirelessly to develop a robust and intuitive platform that combines
                        cutting-edge technology with engaging content, fostering a dynamic and iteractive 
                        learning experience.</p>
                    </div>
                    <div className="flex flex-col w-[45%] gap-6 text-richblack-100 text-[17px]">
                        <h1 className="text-4xl font-edu-sa font-bold bg-gradient-to-bl from-[#2c43ee] via-[#22e5ff] to-[#ffffff] bg-clip-text text-transparent mb-2">Our Mission</h1>
                        <p>Our mission goes beyong just delivering courses online. We wanted to create a
                        vibrant ommunity of learners, where individuals can connect, collaborate, and
                        learn from one another. We believetatknowledge thrives in an environment of 
                        sharing and dialogue, and we foster this spirit of collaboraio through forums, 
                        live sessions, and networking opportunities.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* section 4 */}
        <StatsComponent></StatsComponent>


        {/* section 5 */}
        <section className="w-screen py-20">
            <div className="w-[80%] mx-auto">
                <LearningGrid/>
            </div>
            <ContactFormSection/>
        </section>

        {/* section 6  */}
        <section>
            <div>
                Review from other learner
            
            </div>
        </section>

        <Footer></Footer>


    </div>
  )
};

export default About;
