import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../component/common/Spinner";
import { resetPassword } from "../services/operation/authAPI";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const UpdatePassword = () => {

    const [formData, setFormData] = useState({
        password:"",
        confirmPassword:""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleOnChange = (e) => {
        setFormData( (prevData) => ({
            ...prevData,
            [e.target.name] : e.target.value
        }))
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(formData.password, formData.confirmPassword,token,navigate));
    }

    return (
    <div className="text-white w-screen h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center">
        {
            loading ? ( 
                <div className="flex flex-col w-screen h-[calc(100vh-3.5rem)] items-center justify-center">
                    <Spinner/>
                </div>
             ) : (
                <div className="flex flex-col p-8 gap-2 w-[40%]">
                    <h1 className="text-richblack-5 text-4xl font-semibold mx-auto">Choose new Password</h1>
                    <p className="text-richblack-300 mx-auto">Almost done. Enter your new passwordand yours all set.</p>
                    <form onSubmit={handleOnSubmit}
                    className="my-10 flex flex-col gap-8 items-center ">      
                        <label htmlFor="password" className="text-richblack-300 text-sm relative">
                            <p>New Password*</p>
                            <input 
                                required
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                onChange={handleOnChange}
                                placeholder="Password"
                                className="form-style bg-richblack-700 text-white p-2 rounded-md border-b-[3px] border-b-richblack-600 focus:outline-none"
                             />
                             <span onClick={() => setShowPassword((prev) => !prev)}
                             className="absolute right-2 top-[50%] -translate-y-[20%]">
                                {
                                    showPassword ? ( <AiFillEyeInvisible fontSize={24} />) 
                                    : ( <AiFillEye fontSize={24}/> )
                                }
                             </span>
                        </label>
                        <label htmlFor="confirmPassword" className="text-richblack-300 text-sm relative">
                            <p>Confirm New Password*</p>
                            <input 
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={handleOnChange}
                                placeholder="Confirm Password"
                                className="form-style bg-richblack-700 text-white p-2 rounded-md border-b-[3px] border-b-richblack-600 focus:outline-none"
                             />
                             <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                              className="absolute right-2 top-[50%] -translate-y-[20%]">
                                {
                                    showConfirmPassword ? ( <AiFillEyeInvisible fontSize={24} />) 
                                    : ( <AiFillEye fontSize={24}/> )
                                }
                             </span>
                        </label>

                        <div className="flex flex-row w-full justify-between items-center">
                            <Link to="/login" >
                                <div className="w-fit p-3 px-6 text-richblack-300 font-semibold rounded-md flex flex-row gap-2 items-center">
                                    <span> <FaArrowLeft/> </span>
                                    <p>Back to Login</p>
                                </div>
                            </Link>
                            <button type="submit" className="w-fit p-3 px-6 bg-yellow-50 text-[16px] text-black font-semibold rounded-md ">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            ) 
        }
    </div>
  );
};

export default UpdatePassword;