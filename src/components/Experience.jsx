import React, { useEffect } from 'react'
import AOS from 'aos';

const Experience = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500,
          easing: 'ease-in-out',
          offset: 100,
        });
    }, []);

  return (
    <div className='w-full bg-black px-4 py-10 lg:px-20 lg:py-[60px]'>
        <div className='flex flex-col gap-5 lg:px-8'>
            <div className='flex items-center justify-center'>
                <p className='flex items-center gap-4 font-sora text-[28px] leading-8 lg:text-5xl text-white'>My <span className='font-extrabold'>Experience</span></p>
            </div>

            <div className='flex flex-col gap-5 lg:gap-8 lg:px-6 lg:py-10'>

                <div data-aos="fade-up" className='flex flex-col gap-7 px-6 py-[30px] border border-[#71717A] rounded-[10px]'>
                    <div className='flex flex-col gap-[30px] lg:flex-row lg:justify-between lg:items-center'>

                        <div className='flex items-center gap-[30px]'>
                            <div>
                                <img src={'/solbase.png'} alt='solbase-logo' className='w-8 h-8'/>
                            </div>
                            <div>
                                <p className='font-sora font-semibold text-xl lg:text-2xl text-white'>Frontend Engineer at Solbase</p>
                            </div>
                        </div>

                        <div>
                            <p className='font-sora font-semibold text-base text-[#D4D4D8]'>Oct 2024 - Present</p>
                        </div>
                    </div>

                    <div>
                        <p className='font-sora text-base text-[#D4D4D8]'>As a Frontend Engineer at Solbase, I spearheaded the development of innovative web platforms that empower creators to monetize their podcasts, music, and more through cryptocurrency. From building sleek dashboards to crafting intuitive web interfaces, I ensured a seamless user experience, making it easier for creators to engage their audiences and earn in a decentralized ecosystem.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Experience