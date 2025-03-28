import React from 'react'
import ServiceBackround from "../../assets/image/serviceBackround.png"
import ServiceOne from "../../assets/image/serviceimg01.png"
import ServiceTwo from "../../assets/image/serviceimg02.png"
import ServiceThree from "../../assets/image/serviceimg03.png"

import { GoArrowLeft, GoArrowRight } from 'react-icons/go'




function OurService() {





    return (
        <div
            className="     mx-auto font-lora"
            style={{
                backgroundImage: `url(${ServiceBackround})
`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >


            <div className='py-28'>
                <h1 className='font-semibold text-center text-[44px] text-[#FFFFFF]'>Our Services</h1>
                <div className='flex justify-center gap-10 mt-10 items-center'>
                    <div className='bg-[#FFFFFF] rounded-[16px] p-4 space-y-2 w-[364px] h-[397px]'>
                        <div className='flex justify-center'><img className='w-[70px]' src={ServiceOne} alt="" /></div>
                        <h1 className='text-center text-[22px] font-semibold'>DevSecOps</h1>
                        <div>
                            <ul class="list-disc pl-5 text-[12px] space-y-3 text-[#333333]">
                                <li><span className='font-semibold'>Optimized Uptime:</span> Ensure smooth operations with minimal downtime for optimal performance and user experience.</li>
                                <li> <span className='font-semibold'>Proactive Monitoring:</span> Using tools to continuously track system health and detect issues early.</li>
                                <li> <span className='font-semibold'>Scalability and Efficiency: </span>Designing infrastructure to handle growth and perform efficiently under varying loads.</li>
                                <li><span className='font-semibold'>Incident Response:</span> Implementing protocols for quick issue resolution, minimizing outages and recovery time.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-[16px] p-4 space-y-2 w-[364px] h-[397px] '>
                        <div className='flex justify-center'><img className='w-[70px]' src={ServiceThree} alt="" /></div>
                        <h1 className='text-center text-[22px] font-semibold'>Full Stack Web Development</h1>
                        <div>
                            <ul class="list-disc pl-5 text-[12px] space-y-3 text-[#333333]">
                                <li><span className='font-semibold'>End-to-End Development: </span> Managing all aspects of web development, from front-end design to back-end architecture, for seamless solutions.</li>
                                <li> <span className='font-semibold'>Responsive Design:</span>  Delivering excellent user experiences across both mobile and desktop devices.</li>
                                <li> <span className='font-semibold'>Modern Technologies: </span> Using cutting-edge frameworks like React, Angular, and Node.js for scalable and high-performance applications.</li>
                                <li><span className='font-semibold'>Modern Technologies: </span> Using cutting-edge frameworks like React, Angular, and Node.js for scalable and high-performance applications.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-[16px] p-4 space-y-2 w-[364px] h-[397px]'>
                        <div className='flex justify-center'><img className='w-[70px]' src={ServiceTwo} alt="" /></div>
                        <h1 className='text-center text-[22px] font-semibold'> Infrastructure Automation</h1>
                        <div>
                            <ul class="list-disc pl-5 text-[12px] space-y-3 text-[#333333]">
                                <li><span className='font-semibold'>Increased Productivity: </span>Free up teams to focus on strategic initiatives by eliminating manual infrastructure tasks, boosting efficiency and innovation. See more</li>
                                <li> <span className='font-semibold'>Error Reduction:</span>  Minimize human intervention to reduce errors, enhancing accuracy and stability.</li>
                                <li> <span className='font-semibold'>Optimized IT Operations:  </span>Using tools to continuously track system health and detect issues early.</li>
                                <li><span className='font-semibold'>Automated Deployment & Configuration: </span> Streamline infrastructure setup with automated deployment and configuration, ensuring consistency and efficiency across environments.</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-center gap-4  p-8">
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-colors hover:bg-white/10"
                        aria-label="Previous"
                    >
                        <GoArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-colors hover:bg-white/10"
                        aria-label="Next"
                    >
                        <GoArrowRight className="h-5 w-5" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default OurService