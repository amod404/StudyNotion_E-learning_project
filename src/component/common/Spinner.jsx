import React from "react";

const Spinner = () => {
  return (
  <div className="flex justify-center items-center w-full h-90vh">

      <style>
        {`
          .spinner {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            padding: 1.1px;
            background: conic-gradient(#0000 10%, #FFFFFF) content-box;
            -webkit-mask: repeating-conic-gradient(#0000 0deg, #000 1deg 20deg, #0000 21deg 36deg),
              radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 calc(100% - 9px));
            -webkit-mask-composite: destination-in;
            mask-composite: intersect;
            animation: spinner-d55elj 1s infinite steps(10);
          }

          @keyframes spinner-d55elj {
            to {
              transform: rotate(1turn);
            }
          }
        `}
      </style>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
 