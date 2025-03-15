import React from "react";

const IconBtn = ({
    text,
    onClick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
}) => {

  return (
    <button
    className="bg-yellow-50 text-black p-2 text-[18px] rounded-lg text-center px-4 w-fit h-fit"
    disabled={disabled}
    onClick={onClick}
    type={type}
    >
        {
            children ? (
                <>

                <span className="flex flex-row gap-2 items-center">
                    <p>
                        {text}    
                    </p>
                    {children}
                </span>
                </>
            ) : (text)
        }
    </button>
  );

};

export default IconBtn;
