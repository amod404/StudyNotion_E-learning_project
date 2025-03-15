import React from "react";
import IconBtn from "./IconBtn";

const ConfirmationModal = ({modalData}) => {
  return(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-richblack-900/30">
        <div className="bg-richblack-900 border-2 border-richblack-800 rounded-md p-6 flex flex-col text-richblack-200">
            <p>
                {modalData.text1}
            </p>
            <p className="mb-6">
                {modalData.text2}
            </p>
            <div className="flex flex-row gap-2">
                <IconBtn
                    onclick={modalData?.btn1Handler}
                    text={modalData?.btn1Text}
                    >
                </IconBtn>
                <button className="bg-richblack-500 text-black p-2 rounded-lg text-center px-4"
                onClick={modalData?.btn2Handler}>
                    {modalData?.btn2Text}
                </button>
            </div>
        </div>
    </div>
  );
};

export default ConfirmationModal;
