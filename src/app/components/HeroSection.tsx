"use client";
import React from "react";
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Link from "next/link";


export function SpotlightPreview() {
    return (
        <div className="h-auto md:h-[46rem] flex flex-col justify-center space-y-5 dark:bg-black items-center overflow-hidden py-20  md:py-0 mx-auto ">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" max-w-7xl flex flex-col justify-between items-center  mx-auto   space-y-4 relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Master The Art Of Music
                </h1>
                <p className="mt-6 text-sm  font-normal md:text-xl  text-neutral-300 max-w-xl text-center ">
                    Dive into our Comprehensive Courses and transformm your musical journy today.Wheather your beginner or looking to refine your future.joit us to unlocke your true potential.
                </p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

