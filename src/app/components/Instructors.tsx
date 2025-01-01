"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
import Image from "next/image";

const Instructors = () => {
    const people = [
        {
          id: 1,
          name: "John Doe",
          designation: "Software Engineer",
          image:
            "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          id: 2,
          name: "Robert Johnson",
          designation: "Product Manager",
          image:
            "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Data Scientist",
          image:
            "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image:
            "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
          id: 5,
          name: "Tyler Durden",
          designation: "Soap Developer",
          image:
            "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
          id: 6,
          name: "Dora",
          designation: "The Explorer",
          image:
            "https://randomuser.me/api/portraits/women/6.jpg",
        },
      ];
      
    
    return (
        <div className='relative w-full h-[40rem] overflow-hidden flex justify-center items-center'>
            <WavyBackground className='max-w-7xl w-full flex flex-col items-center  mx-auto'>
                <h2 className='text-2xl md:text-4xl lg:text-7xl font-semibold mb-8'>Meet Our Instructors </h2>
                <p className='text-base md:text-lg text-center mb-4 text-white' >Discove the talented profesionals who will guide your musical journy</p>
                <div className="flex flex-row items-center justify-center mt-5 mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors