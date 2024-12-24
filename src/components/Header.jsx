import React, { useState } from 'react'
import { FiDownload } from "react-icons/fi";
import { GiHamburgerMenu } from 'react-icons/gi'
import { TiTimes } from 'react-icons/ti';

const Header = () => {
    const [showNav, setShowNav] = useState(true);

    const handleShowNav = () => {
        return setShowNav((prev) => !prev);
    }

  return (
    <header className='w-full px-4 py-4 lg:px-20 lg:py-6 sticky top-0 z-10 shadow-lg'>

        {/* large screen nav */}
        <div className='px-8 lg:flex justify-between items-center hidden'>
            <div>
                <img src={'/Logo.png'} alt='logo' className='w-[139.92px] h-10'/>
            </div>

            <ul className='flex items-center gap-8'>
                <a href='#about' className='font-sora font-semibold text-xl text-[#000] hover:text-gray-500 cursor-pointer transition-all duration-300'>About Me</a>
                <a href='#skills' className='font-sora font-semibold text-xl text-[#000] hover:text-gray-500 cursor-pointer transition-all duration-300'>Skills</a>
                <a href='#project' className='font-sora font-semibold text-xl text-[#000] hover:text-gray-500 cursor-pointer transition-all duration-300'>Projects</a>
                <a href='#contact' className='font-sora font-semibold text-xl text-[#000] hover:text-gray-500 cursor-pointer transition-all duration-300'>Contact Me</a>
            </ul>

            <a href='/resume.pdf' download="resume.pdf" className='bg-[#000] px-5 py-4 flex items-center gap-2 w-[153px] h-14 rounded-[4px] cursor-pointer'>
                <p className='font-sora font-semibold text-xl text-[#fff]'>Resume</p>
                <div>
                    <FiDownload className='text-[#fff] w-5 h-5'/>
                </div>
            </a>
        </div>

        {/* small screen nav */}
        <div className='flex flex-col gap-8 lg:hidden'>
            <div className='flex items-center justify-between'>
                <div>
                    <img src={'/Logo.png'} alt='logo' className='w-[139.92px] h-10'/>
                </div>

                <div>
                    {
                        showNav ? <GiHamburgerMenu onClick={handleShowNav} className='w-9 h-9 text-[#000]'/> : <TiTimes onClick={handleShowNav} className='w-10 h-10 text-[#000]'/>
                    }
                </div>
            </div>

            <div className={showNav ? 'hidden' : 'flex flex-col gap-8'}>
                <ul className='flex flex-col gap-8'>
                    <a href='#about' className='font-sora font-semibold text-xl text-[#000]'>About Me</a>
                    <a href='#skills' className='font-sora font-semibold text-xl text-[#000]'>Skills</a>
                    <a href='#project' className='font-sora font-semibold text-xl text-[#000]'>Projects</a>
                    <a href='#contact' className='font-sora font-semibold text-xl text-[#000]'>Contact Me</a>
                </ul>

                <a href='/resume.pdf' download="resume.pdf" className='bg-[#000] px-5 py-6 flex items-center justify-center gap-2  h-14 rounded-[4px] cursor-pointer'>
                    <p className='font-sora font-semibold text-xl text-[#fff]'>Resume</p>
                    <div>
                        <FiDownload className='text-[#fff] w-5 h-5'/>
                    </div>
                </a>
            </div>

        </div>

    </header>
  )
}

export default Header