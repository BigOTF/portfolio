import React, { useEffect } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos';

const Projects = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500,
          easing: 'ease-in-out',
          offset: 100,
        });
    }, []);

  return (
    <div id='project' className='w-full px-4 py-10 lg:px-20 lg:py-[60px] bg-black'>
        <div className='flex flex-col gap-5 lg:px-8'>
            <div className='flex items-center justify-center'>
                <p className='flex items-center gap-4 font-sora text-[28px] leading-8 lg:text-5xl text-white'>My <span className='font-extrabold'>Projects</span></p>
            </div>

            <div className='flex flex-col gap-10 lg:gap-10'>

                <div className='flex flex-col gap-7 lg:flex-row lg:gap-10 lg:py-5 lg:items-center'>
                    <div data-aos="fade-up">
                        <img src={'/dummy.png'}/>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col gap-7 lg:gap-6'>
                        <p className='font-sora font-extrabold text-2xl lg:text-5xl text-white'>01</p>
                        <p className='font-sora font-bold text-xl lg:text-[32px] lg:leading-10 text-white'>Medivap Health Insights Platform</p>
                        <p className='font-sora text-base text-[#71717A]'>Medivap is a cutting-edge health application designed to simplify and enhance the way we manage our well-being. By integrating innovative tools like a vaccine tracker, medication tracker, and doctor chat, Medivap ensures that health management becomes effortless and stress-free for individuals and families alike.</p>

                        <a href='https://medi-vap.vercel.app/' target='_blank'>
                            <FaExternalLinkAlt className='w-5 h-5 text-white cursor-pointer'/>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col gap-7 lg:flex-row lg:gap-10 lg:py-5 lg:items-center'>
                    <div data-aos="fade-up" className='lg:hidden'>
                        <img src={'/luxe.png'} className=''/>
                    </div>
                    
                    <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col gap-7 lg:gap-6'>
                        <p className='font-sora font-extrabold text-2xl lg:text-5xl text-white'>02</p>
                        <p className='font-sora font-bold text-xl lg:text-[32px] lg:leading-10 text-white'>LuxeGuard Logistics Platform</p>
                        <p className='font-sora text-base text-[#71717A]'>LuxeGuard is a premier logistics solution tailored for the seamless transportation of luxury goods. With a commitment to precision, security, and excellence, we specialize in delivering high-value items with unmatched care and efficiency. By integrating cutting-edge technology and specialized handling techniques, [Company Name] ensures that every shipment arrives at its destination safely and in pristine condition, making logistics effortless and worry-free for businesses and individuals alike.</p>

                        <a href='https://luxe-guard-beta.vercel.app/' target='_blank'>
                            <FaExternalLinkAlt className='w-5 h-5 text-white cursor-pointer'/>
                        </a>
                    </div>

                    <div data-aos="fade-up" className='hidden lg:flex'>
                        <img src={'/luxe.png'} className=''/>
                    </div>
                </div>

                <div className='flex flex-col gap-7 lg:flex-row lg:gap-10 lg:py-5 lg:items-center'>
                    <div data-aos="fade-up" className='border px-20 py-20 border-[#71717A]'>
                        <img src={'/web3task.png'}/>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col gap-7 lg:gap-6'>
                        <p className='font-sora font-extrabold text-2xl lg:text-5xl text-white'>03</p>
                        <p className='font-sora font-bold text-xl lg:text-[32px] lg:leading-10 text-white'>Web3task Landing page</p>
                        <p className='font-sora text-base text-[#71717A]'>Web3task is an On-Chain GitHub is here to transform the way projects are built and knowledge is shared. By leveraging blockchain technology, this platform empowers developers and students worldwide to collaborate seamlessly while significantly reducing project costs.</p>

                        <a href='https://web3-task-blue.vercel.app/' target='_blank'>
                            <FaExternalLinkAlt className='w-5 h-5 text-white cursor-pointer'/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects