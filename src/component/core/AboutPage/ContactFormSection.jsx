import React from "react";
import ContactUsForm from "../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return(
    <div className="mx-auto max-w-[50%] flex flex-col items-center mt-10 gap-2">
        <h1 className="text-4xl text-richblack-5 font-bold">
            Get in Touch
        </h1>
        <p className="text-richblack-100 mb-8">
            We'd love to be here for you, Please fill out this form
        </p>
        <div>
            <ContactUsForm/>
        </div>

    </div>
  );
};

export default ContactFormSection;
