import React from "react";
import { Meteors } from "../components/ui/meteors";

export default function MeteorsDemo() {
  return (
    <div className="m-full">
      <div className="w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="min-h-screen w-full flex flex-col gap-6 items-center justify-center mb-4 border-gray-500">
            <div className="flex flex-col gap-6 justify-center items-center">
              <h2 className="text-5xl font-bold text-white">Contact Us</h2>
              <p className="text-center max-w-4xl text-gray-400 text-[19px]">
                We're here to help with any questions about our course, program, or event. We value your feedback and inquiries. Contact us anytime for support, suggestions, or more information—we love hearing from you!
              </p>
            </div>
            <div className="min-w-7xl flex flex-col gap-4 justify-center items-center mx-auto text-center w-full">
              {/* Input field - responsive width with md size */}
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full md:w-96 lg:w-[500px] xl:w-[600px] rounded-sm bg-black text-white px-6 py-2 mb-4"
              />
              {/* Textarea field - responsive width with md size */}
              <textarea
                name="message"
                className="bg-black w-full md:w-96 lg:w-[500px] xl:w-[600px] px-4 py-2 rounded-sm min-w-md"
                placeholder="Add your message"
                rows={10}
              ></textarea>

            </div>
           
          </div>
         

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
