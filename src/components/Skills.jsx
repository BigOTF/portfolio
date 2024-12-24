import React, { useEffect } from 'react'
import { FaGitAlt, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

import AOS from 'aos';

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);
   
  return (
    <div className='w-full px-4 py-10 lg:px-20 lg:py-[60px]'>
        <div className='lg:px-8 flex flex-col gap-5 items-center'>
            <div>
                <p className='flex items-center gap-4 font-sora text-[28px] leading-8 lg:text-5xl'>My <span className='font-extrabold'>Skills</span></p>
            </div>

            <div className='grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 py-5'>

              <div data-aos="fade-up" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <FaGitAlt className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>Git</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <IoLogoJavascript className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>Javascript</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <FaCss3 className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>CSS</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <RiTailwindCssFill className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>TailwindCSS</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="500" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <FaReact className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>ReactJS</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="600" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <RiNextjsFill className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>NextJS</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="700" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <DiMongodb className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>MongoDb</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="800" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <IoLogoFirebase className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>Firebase</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="900" className='w-[161.5px] h-[160px] lg:w-[186px] lg:h-[186px] px-6 py-6 flex flex-col items-center justify-center gap-8 border border-black rounded-[4px] text-black hover:bg-black hover:text-white transition-all duration-300'>
                <div>
                  <FaNode className='w-14 h-14'/>
                </div>

                <div>
                  <p className='font-sora font-bold text-xl'>Nodejs</p>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Skills