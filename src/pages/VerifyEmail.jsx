import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../component/common/Spinner";
import OTPInput from "react-otp-input";
import { Link, useNavigate} from "react-router-dom";
import { signUp, sendOtp } from "../services/operation/authAPI";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const VerifyEmail = () => {
    const dispatch = useDispatch();
    const [otp,setOtp] = useState("");
    const {signupData ,loading} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!signupData){
            navigate("/signup");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        } = signupData;
        dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
    }



  return <div className="text-yellow-200">
    {
        loading ? (<div className="flex flex-col w-screen h-[calc(100vh-3.5rem)] items-center justify-center">
            <Spinner></Spinner>
        </div>) : (<div className="flex flex-col w-screen h-[calc(100vh-3.5rem)] justify-center items-center gap-2">
            <h1 className="text-richblack-5 text-4xl font-semibold">Verify Email</h1>
            <p className="text-richblack-300">A verfication code has been sent to you. Ener he cod below</p>
            <form onSubmit={handleOnSubmit} className="my-6 flex flex-col items-center">
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    placeholder={<span className="text-black px-2 font-bold"> - </span>}
                    renderInput={ (props) => (<input {...props}
                        className="text-4xl p-2 w-[70px] h-[70px] mx-1 text-center border border-richblack-600 bg-richblack-700 text-richblack-5 rounded-md focus:outline-none focus:ring-2 focus:ring-richblack-400 focus:border-transparent"
                    />) }
                />  

                <button type="submit" className="w-fit p-3 px-6 bg-yellow-50 text-[16px] text-black font-semibold rounded-md mt-6">
                    Verify Email
                </button>
            </form>

            <div className="flex flex-row items-center lg:w-[30%] md:w-[40%] sm:w-[50%] justify-between">

                <Link to="/login" >
                    <div className="w-fit p-3 px-6 text-richblack-300 font-semibold rounded-md flex flex-row gap-2 items-center">
                        <span> <FaArrowLeft/> </span>
                        <p>Back to Login</p>
                    </div>
                </Link>

                <button
                onClick={ () => dispatch(sendOtp(signupData?.email,navigate))}
                className="text-blue-100 underline flex flex-row gap-2"
                >
                    Resent it
                </button>
                
            </div>
        </div>)
    }
  </div>;
};

export default VerifyEmail;

