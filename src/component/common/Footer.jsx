import React from "react";
import {FooterLink1 ,FooterLink2} from "../../data/footer-links"
import FooterCard from "./FooterCard";
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { FaYoutube, FaTwitter, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row w-screen justify-evenly bottom-0 bg-richblack-800 font-thin p-10 border-t-2 border-t-richblack-600">
        
        <div className="flex flex-row p-8 justify-between w-[49%] mx-4">
            <div className="flex flex-col gap-6 ml-10">
                <img src={logo} alt="logo"/>
                <FooterCard section={FooterLink1[0]}></FooterCard>
                <div className="flex flex-row text-white text-3xl gap-2">
                    <FaFacebook/>
                    <FaGoogle/>
                    <FaTwitter/>
                    <FaYoutube/>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <FooterCard section={FooterLink1[1]}></FooterCard>
                <FooterCard section={FooterLink1[2]}></FooterCard>
            </div>
            <div className="flex flex-col gap-10">
                <FooterCard section={FooterLink1[3]}></FooterCard>
                <FooterCard section={FooterLink1[4]}></FooterCard>

            </div>
        </div>

        <div className="border-richblack-600 border-l-2 rounded-lg mx-4"></div>


        <div className="flex flex-row p-8 justify-evenly w-[49%]">
            {   
                FooterLink2.map((section, index) => {
                    return (
                        <FooterCard key={index} section={section}></FooterCard>
                    )
                })
            }
        </div>
    </div>
  );
};

export default Footer;
