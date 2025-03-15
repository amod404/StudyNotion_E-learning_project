import React, { useState } from "react";
import {sidebarLinks} from "../../../data/dashboard-links"
import { logout } from "../../../services/operation/authAPI";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../common/Spinner";
import SideBarLink from "./SideBarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from "../../common/ConfirmationModal";

const SideBar = () => {
  
  const {user, loading: profileLoading} = useSelector((state)=>state.profile);
  const {loading: authLoading} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);


  if(profileLoading || authLoading){
    return (
        <Spinner/>
    )
  }

  return (
    <div className="relative">
        <div className="flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700
        h-[calc(100vh-3.5rem)] bg-richblack-800 py-10">
            <div className="flex flex-col">
                {
                    sidebarLinks.map((link) => {
                        if(link.type && user?.accountType !== link.type) return null;
                        return (
                            <SideBarLink link={link} iconName={link.icon} key={link.id}/>
                        )

                    })
                }
            </div>

            <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>

            <div className="flex flex-col">
                <SideBarLink link={{name:"Settings", path:"dashboard/settings"}} iconName={"VscSettingsGear"}></SideBarLink>
                
                <button
                    onClick={() => setConfirmationModal(
                        {
                        text1:"Are You Sure ?",
                        text2:"You will be logged out of you Account.",
                        btn1Text: "Logout",
                        btn2Text: "Cancel",
                        btn1Handler: () => dispatch(logout(navigate)),
                        btn2Handler: () => setConfirmationModal(null),
                        }
                    ) }
                    className="text-sm font-medium text-richblack-300 ml-8 mt-1"
                >

                <div className="flex items-center gap-x-2">
                    <VscSignOut className="text-lg"/>
                    <span>Logout</span>
                </div>

                </button>

            </div>
            
        </div>

        {confirmationModal !== null && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  );
};

export default SideBar;
