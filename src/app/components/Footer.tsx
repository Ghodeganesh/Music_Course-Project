import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='py-12 bg-black'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 px-8 md:px-10'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-2xl'>About Us</h1>
                    <p className='text-gray-400'>Unlock your musical potential with our comprehensive courses designed for all skill levels. Whether you're a beginner or an advanced musician, we provide expert instruction in theory, instruments, and music production.</p>
                </div>
                <div className='flex flex-col gap-3 text-gray-400'>
                    <h1 className='font-bold text-2xl text-white'>Quick Links</h1>
                    <div className='flex flex-col gap-1'>
                        <Link href={'/Home'} className='hover:text-white  hover:text-xl transition-all'>Home</Link>
                        <Link href={'/Course'} className='hover:text-white  hover:text-xl transition-all'>Course</Link>
                        <Link href={'/contact'} className='hover:text-white hover:text-xl transition-all'>Contact</Link>
                        <Link href={'/About'} className='hover:text-white hover:text-xl transition-all'>About</Link>
                    </div>
                </div>
                <div >
                    <h1 className='font-bold text-2xl'>Follow Us</h1>
                    <div className='flex gap-2 mt-3 text-gray-400 '>
                        <Link href={"www.instagram.com"}>Instagram</Link>
                        <Link href={"www.Telegram.com"}>Telegram</Link>
                        <Link href={"www.Facebook.com"}>Facebook</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 text-gray-400'>
                    <h1 className='font-bold text-2xl text-white'>Contact Us</h1>
                    <ul>
                        <li>Email: <a href="music:email@example.com">musci@example.com</a></li>
                        <li>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></li>
                        <li>Address: 123 Music Ave, City, Country</li>
                    </ul>
                </div>
            </div>
            <div className='text-center text-gray-400 mt-10'>  <p>&copy; {new Date().getFullYear()} Music School. All Rights Reserved.</p></div>
        </div>
    )
}

export default Footer