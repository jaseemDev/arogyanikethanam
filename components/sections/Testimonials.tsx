import React from "react";
import Testimonial from "../cards/Testimonial";
import { testimonialDetails } from "@/constants/testimonialDetails";

const Testimonials = () => {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <Testimonial data={testimonialDetails} />
      </div>
    </>
  );
};

export default Testimonials;
