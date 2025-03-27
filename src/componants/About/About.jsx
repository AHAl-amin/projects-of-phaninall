import React from 'react'
import AboutImgOne from "../../assets/image/aboutimg.png"
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

function About() {
    return (
        <div className='max-w-[80%] mx-auto mt-20 font-lora my-30'>
            <div className='text-center space-y-4'>
              
                <h2 className='text-[#FF6C0A]  text-[16px] font-semibold '>
                    <div className='w-[46px] h-[4px] bg-gradient-to-r from-[#FF6C0A] rounded-xl  mx-auto  mb-2 '></div>
                ABOUT US</h2>
               
                <h1 className='text-[40px] font-semibold'>Orange Tech Consultants</h1>
                <p className='text-[16px]'> Our mission is to drive progress and enhance the lives of our customers by delivering <br /> superior products and services that exceed expectations.</p>
            </div>
            <div className='flex justify-between gap-10  items-center my-20'>
                <div className='w-full'>

                    <img className='w-[465px]' src={AboutImgOne} alt="" />
                </div>
                <div className='w-full space-y-10 text-[16px]'>
                    <p>
                    <div className='w-[46px] h-[4px] bg-gradient-to-r from-[#FF6C0A] rounded-xl    mb-2 '></div>
                        
                        At Orange Tech Consultants, we are redefining innovation in technology services. With expertise in AI/ML, Generative AI, DevSecOps, Cloud Engineering, Data Engineering, SRE, and Full Stack Web Development, we deliver cutting-edge solutions that empower businesses to thrive in a digital-first world. </p>
                    <p>Our commitment lies in helping organizations unlock their true potential through custom solutions, streamlined processes, and transformative strategies. Whether it’s building scalable data pipelines, automating infrastructure, or designing secure and modern web applications, our team excels in delivering results that matter.</p>
                       <p>
                    With a focus on operational excellence, security, and scalability, we partner with clients to navigate challenges, optimize performance, and stay ahead of the curve. At Orange Tech Consultants, innovation meets execution to drive lasting success.
                    </p>
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-2 rounded-md hover:bg-[#FF7A00] px-4 py-2 text-sm font-medium text-white border border-[#E86F00] transition-colors"
                    >
                        Read More <BsArrowRight className="h-4 w-4" />
                    </Link>

                </div>
            </div>




        </div>
    )
}

export default About