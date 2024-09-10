import Image from "next/image";
import { testimonials } from "../constants"

export default function Testimonials() {
  return (
<div className="mt-20 tracking-wide scroll-m-24" id="testimonials">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="flex flex-col justify-between bg-neutral-900 rounded-md p-5 text-base border border-neutral-800 font-thin sm:min-h-[200px]">
              <p>{testimonial.text}</p>
              <div className="flex mt-6">
                <Image
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                  width="300"
                  height="300"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
