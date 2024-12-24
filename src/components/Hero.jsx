import React from 'react'
import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <main className='w-full px-4 py-10 lg:px-20 lg:py-[60px]'>
        <div className='lg:px-8 flex flex-col gap-12 lg:flex-row lg:gap-0 lg:items-center'>

            {/* mobile screen hero */}
            <div className='lg:hidden'>
                <img src={'/heroMobile.png'} alt='hero'/>
            </div>

            <div className='flex flex-col gap-8 lg:gap-10'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3 lg:gap-5'>
                        <p className='flex items-center gap-4 font-sora text-[28px] leading-8 lg:text-5xl'>Hello I'm <span className='font-extrabold text-[#000]'>Olamide.</span></p>
                        <p className='flex items-center gap-4 font-sora font-extrabold text-[28px] leading-8 lg:text-5xl'><span className='text-[#000]'>Frontend</span> <span className='text-stroke tracking-[-2px]'>Developer</span></p>
                        <p className='flex items-center gap-4 font-sora text-[28px] leading-8 lg:text-5xl'>Based In <span className='font-extrabold'>Nigeria</span></p>
                    </div>

                    <div>
                        <p className='font-sora text-base text-[#71717A]'>I'm Olorunfemi Olamide, a frontend developer with a passion for creating user-friendly and visually appealing web applications. With a strong foundation in modern web technologies, I thrive on building efficient and innovative digital solutions that enhance user experiences.</p>
                    </div>
                </div> 

                <div className='flex items-center gap-6 lg:gap-8'>
                    <a href='https://github.com/BigOTF' target='_blank' className='w-12 h-12 px-3 py-3 lg:w-14 lg:h-14 lg:px-4 lg:py-4 rounded-[4px] border-2 border-black hover:bg-black text-black hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer'>
                        <FaGithub className='w-5 h-5'/>
                    </a>
                    <a href='https://www.linkedin.com/in/olorunfemi-olamide-9b4037222/' target='_blank' className='w-12 h-12 px-3 py-3 lg:w-14 lg:h-14 lg:px-4 lg:py-4 rounded-[4px] border-2 border-black hover:bg-black text-black hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer'>
                        <FaLinkedinIn className='w-5 h-5'/>
                    </a>
                    <a href='https://x.com/Olamide957' target='_blank' className='w-12 h-12 px-3 py-3 lg:w-14 lg:h-14 lg:px-4 lg:py-4 rounded-[4px] border-2 border-black hover:bg-black text-black hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer'>
                        <FaXTwitter className='w-5 h-5'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100006539373639' target='_blank' className='w-12 h-12 px-3 py-3 lg:w-14 lg:h-14 lg:px-4 lg:py-4 rounded-[4px] border-2 border-black hover:bg-black text-black hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer'>
                        <FaFacebookF className='w-5 h-5'/>
                    </a>
                </div> 
            </div>

            {/* large screen hero */}
            <div className='hidden lg:flex'>
                <img src={'/hero.png'} alt='hero'/>
            </div>

        </div>

    </main>
  )
}

export default Hero