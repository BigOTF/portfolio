import React, { useEffect } from 'react'
import AOS from 'aos';

const About = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500,
          easing: 'ease-in-out',
          offset: 100,
        });
    }, []);

  return (
    <div id='about' className='w-full px-4 py-10 lg:px-20 lg:py-[60px]'>
        <div className='flex flex-col gap-5 lg:flex-row lg:gap-16'>
            <div data-aos="fade-up">
                <img src={'/about.png'} alt='about'/>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='flex items-center gap-4 font-sora text-[28px] leading-8 lg:text-5xl'>About <span className='font-extrabold'>Me</span></p>

                <div className='flex flex-col gap-5'>
                    <p data-aos="fade-up" className='font-sora text-base text-[#71717A]'>I'm a passionate, self-proclaimed designer who specializes in Frontend Development (React.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    
                    <p data-aos="fade-up" data-aos-delay="200" className='font-sora text-base text-[#71717A]'>I began my journey as a web developer late 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early twenties, almost a year after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as React.js, TypeScript, Nextjs, Tailwindcss and much more.</p>

                    <p data-aos="fade-up" data-aos-delay="300" className='font-sora text-base text-[#71717A]'>When I'm not in full-on developer mode, you can find me hovering around on twitter or on tiktok, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About