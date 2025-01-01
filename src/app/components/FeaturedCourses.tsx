"use client";
import Link from 'next/link'
import React, { use } from 'react'
import courseData from '../data/music_courses.json'
import { div } from 'framer-motion/client'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    prize: number,
    instructor: string,
    isFeatured: boolean,

}

const FeaturedCourses = () => {
    const feturedCourses = courseData.courses.filter((course) => course.isFeatured)
    return (
        <div className='bg-gray-900 py-12'>

            <div className='text-center'>
                <h1 className='text-teal-600 tracking-wide font-semibold text-base'>FEATURED COURSES</h1>
                <div className='text-center'>
                    <h1 className='text-3xl mt-2 sm:text-4xl tracking-wide leading-8 font-extrabold '>Learn With The Best</h1>
                </div>
            </div>

            <div className='mt-10'>
                <div className='grid mx-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center gap-8'>
                    {
                        feturedCourses.map((data, id) => {
                            return <div key={id} className='flex justify-center text-center '>
                                <BackgroundGradient className='bg-zinc-900 rounded-[22px]  overflow-hidden h-full'>
                                    <div className='flex flex-col  flex-wrap flex-grow  p-4 md:p-6 text-center items-center justify-center'>
                                        <p className='mt-2 text-2xl text-slate-300'>{data.title}</p>
                                        <p className='mt-2 text-base text-gray-500 text-center'>{data.description}</p>
                                        <div className='mt-2'>
                                            <Link href={`/courses/${data.id}`}>
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        })
                    }
                </div>

            </div>
            <div className='mt-20 text-center'>
                <Link href={"/couses"}>
                    <button className='px-5 py-1 bg-white rounded  text-black'>View All Courses</button>
                </Link>
            </div>

        </div>
    )
}

export default FeaturedCourses

