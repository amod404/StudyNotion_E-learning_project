import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operation/authAPI";
import Spinner from "../component/common/Spinner";
import { FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
    
    const [emailSent,setEmailSent] = useState(false);
    const [email,setEmail] = useState("");
    const {loading} = useSelector((state)=>state.auth)
    const dispatch = useDispatch();


    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));
    }


    return (
        <div className="text-richblack-5 flex justify-center items-center w-full h-[calc(100vh-3.5rem)]">
            {
                loading ? (
                    <div className="flex flex-col w-screen h-[calc(100vh-3.5rem)] items-center justify-center">
                        <Spinner/>
                    </div>
                ) : ( 
                    <div className="flex flex-col p-8 gap-2 w-[50%]">
                        <h1 className="text-richblack-5 text-4xl font-semibold">
                            {
                                !emailSent ? "Reset your Password" : "Check Your Email"
                            }
                        </h1>

                        <p className="text-richblack-300">
                            {
                                !emailSent ? "Have no fear. We'll Email you instrctions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to your ${email}`
                            }
                        </p>

                        <form onSubmit={handleOnSubmit}
                        className="my-10 flex flex-row  gap-8 items-center ">
                            {
                                !emailSent && (
                                    <label htmlFor="email" className="text-richblack-300 text-sm">
                                        <p>Email Address*</p>
                                        <input required
                                        id='email'
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={ (event) => setEmail(event.target.value)}
                                        placeholder="Enter Your Email Address"
                                        className="form-style bg-richblack-700 text-white p-2 rounded-md border-b-[3px] border-b-richblack-600 focus:outline-none"
                                        ></input>
                                    </label>
                                )
                            }
                            
                            <button type="submit" className="w-fit p-3 px-6 bg-yellow-50 text-[16px] text-black font-semibold rounded-md mt-6">
                                {
                                    !emailSent ? "Reset Password" : "Resend Email"
                                }
                            </button>
                        </form>

                        <Link to="/login" >
                            <div className="w-fit p-3 px-6 text-richblack-300 font-semibold rounded-md flex flex-row gap-2 items-center">
                                <span> <FaArrowLeft/> </span>
                                <p>Back to Login</p>
                            </div>
                        </Link>
                    </div> 
                )
            }
        </div>
    );
};

export default ForgotPassword;