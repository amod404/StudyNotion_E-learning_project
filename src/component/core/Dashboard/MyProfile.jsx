import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
  
  const {user} = useSelector((state)=>state.profile);
  const navigate = useNavigate();

  return(
    <div className="text-white flex flex-col gap-6">
        <h1 className="text-3xl mb-4">
            My Profile
        </h1>

        {/* section 1 */}
        <div className="flex flex-row w-full justify-between items-center p-8 bg-richblack-800 border-[1px] border-richblack-700  rounded-md">
            <div className="flex flex-row items-center gap-4">
                <img src={user?.image} alt={`profile-${user?.firstName}`} 
                    className="aspect-square w-[78px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                    <p className="text-2xl text-richblack-5 font-semibold">{user?.firstName} {user.lastName ? user.lastName : ""}</p>
                    <p className="text-richblack-200">{user?.email}</p>
                </div>
            </div>
            <IconBtn
                text="Edit"
                onclick={() => {
                    navigate("/dashboard/settings")
                }}
            >
                <FaEdit/>
            </IconBtn>
        </div>

        {/* section 2 */}
        <div className="flex flex-row w-full justify-between p-8 bg-richblack-800 border-[1px] border-richblack-700  rounded-md">
            <div className="flex flex-col gap-10 ">
                <p className="text-2xl text-richblack-5 font-semibol">About</p>
                <p className="text-richblack-200 max-w-[70%]">' {user?.additionalDetails?.about || "Write Something about Yourself"} '</p>
            </div>
            <IconBtn
                text="Edit"
                onclick={() => {
                    navigate("/dashboard/settings")
                }}
            >
                <FaEdit/>
            </IconBtn>
        </div>

        {/* section 3 */}
        <div className="flex flex-row w-full justify-between p-8 bg-richblack-800 border-[1px] border-richblack-700  rounded-md">
            <div className="flex flex-col gap-10">
                <p className="text-2xl text-richblack-5 font-semibol">Personal Details</p>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-richblack-200">First Name</p>
                            <p className="text-richblack-5">{user?.firstName}</p>
                        </div>
                        <div>
                            <p className="text-richblack-200">Email</p>
                            <p className="text-richblack-5">{user?.email}</p>
                        </div>
                        <div>
                            <p className="text-richblack-200">Gender</p>
                            <p className="text-richblack-5">{user?.additionalDetails?.gender ?? "Add gender"}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-richblack-200">Last Name</p>
                            <p className="text-richblack-5">{user?.lastName}</p>
                        </div>
                        <div>
                            <p className="text-richblack-200">Phone Number</p>
                            <p className="text-richblack-5">{user?.additionalDetails?.contactNumber ?? "Add contact Number"}</p>
                        </div>
                        <div>
                            <p className="text-richblack-200">date of Birth</p>
                            <p className="text-richblack-5">{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                        </div>
                    </div>

                </div>
            </div>
            <IconBtn
                text="Edit"
                onclick={() => {
                    navigate("/dashboard/settings")
                }}
            >
                <FaEdit/>
            </IconBtn>
        </div>


    
    </div>
  );
};

export default MyProfile;
