"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

const UpcomingWebinar = () => {
    const projects = [
        {
            "title": "The Evolution of Jazz Music",
            "description": "Explore the rich history of jazz, from its roots in New Orleans to its global influence across various genres.",
            "isFeatured": true,
            "slug": "evolution-of-jazz-music"
        },
        {
            "title": "Understanding Music Theory",
            "description": "A beginner's guide to music theory, covering notes, scales, chords, and basic harmony concepts.",
            "isFeatured": false,
            "slug": "understanding-music-theory"
        },
        {
            "title": "How to Play Guitar for Beginners",
            "description": "Step-by-step guide for beginners on how to start playing guitar, including basic chords and strumming techniques.",
            "isFeatured": false,
            "slug": "how-to-play-guitar-for-beginners"
        },
        {
            "title": "The Rise of Electronic Dance Music (EDM)",
            "description": "An in-depth look at the evolution of EDM, its sub-genres, and the impact it has had on the global music scene.",
            "isFeatured": true,
            "slug": "rise-of-electronic-dance-music"
        },
        {
            "title": "Classical Music: Key Composers and Pieces",
            "description": "Dive into the world of classical music, focusing on key composers like Beethoven, Mozart, and Bach, and their iconic works.",
            "isFeatured": false,
            "slug": "classical-music-key-composers-and-pieces"
        },
        {
            "title": "The Art of Music Production",
            "description": "Learn the basics of music production, including mixing, mastering, and creating tracks using DAWs (Digital Audio Workstations).",
            "isFeatured": true,
            "slug": "art-of-music-production"
        },
        {
            "title": "Exploring the World of Vinyl Records",
            "description": "A nostalgic journey into vinyl records, covering their history, resurgence, and the unique sound quality they offer.",
            "isFeatured": false,
            "slug": "exploring-the-world-of-vinyl-records"
        },
        {
            "title": "The Role of Music in Film",
            "description": "How film composers create powerful soundtracks that enhance storytelling and evoke emotions in viewers.",
            "isFeatured": false,
            "slug": "role-of-music-in-film"
        },
        {
            "title": "Learning Music Production with Ableton Live",
            "description": "Master music production using Ableton Live, from basic beat-making to advanced sound design techniques.",
            "isFeatured": false,
            "slug": "learning-music-production-with-ableton-live"
        },
        {
            "title": "The Impact of Hip-Hop on Modern Music",
            "description": "Examine how hip-hop has influenced popular music, fashion, culture, and society since its inception.",
            "isFeatured": true,
            "slug": "impact-of-hip-hop-on-modern-music"
        }
    ]

    return (
        <div className='py-12 bg-gray-900'>
            <div className='text-center'>
                <h1 className='text-teal-600 tracking-wide font-semibold text-base'>FEATURED WEBINAR</h1>
                <p className='text-3xl mt-2 sm:text-4xl tracking-wide leading-8 font-extrabold'>Enhanced Your Musical Journy</p>
            </div>
            <div className='mt-6'>
                <div className="max-w-7xl mx-auto px-8">

                    <HoverEffect
                        items={projects.map(data => ({
                            title: data.title,
                            description: data.description,
                            link: data.slug
                        }))}
                    />
                </div>
            </div>
            <div className='text-center mt-6'>
                <Link href={"/"}>
                    <button className='bg-white rounded text-black px-4 py-1'>View All Webinar</button>
                </Link>
            </div>
        </div>
    )
}

export default UpcomingWebinar