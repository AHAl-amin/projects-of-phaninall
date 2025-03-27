import React from 'react'
import BackgroundImg from "../../assets/image/BannerImg.png"
import BannerImgOne from "../../assets/image/bannerimg01.png"
import { GiSparkles } from 'react-icons/gi'

function Banner() {
    return (
        <div
            className=" min-h-screen    mx-auto "
            style={{
                backgroundImage: `url(${BackgroundImg})
      `,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

            <div className='font-lora flex max-w-[80%] mx-auto items-center justify-between h-full pt-72 '>
                <div className='w-[666px] space-y-10'>
                    <h1 className='text-[70px] font-semibold text-[#FFFFFF]'>Orange  Tech Consultants</h1>
                    <p className='text-[16px] text-[#FFFFFF]'> Vision: “To be a trusted leader in AI-driven  technology solutions that enhance security,innovation, and operational excellence.”</p>
                    <div className='w-[666px] flex'>
                        {/* <input className='text-[#FFFFFF]' placeholder='Enter your propmt..' type="text" /><button className='text-[#FFFFFF] bg-[#FF6C0A]'>Enter</button> */}

                        <div className="flex items-center w-full 
                        bg-[#FFFFFF1A]  p-2 rounded">
                            <div className="flex items-center flex-1 gap-2 px-3">
                                <GiSparkles className="w-4 h-4 text-white/70" />
                                <input
                                    type="text"
                                    placeholder="Enter your prompt.."
                                    className="w-full bg-transparent  border-none outline-none text-white/80 placeholder:text-white/50"
                                />
                            </div>
                        </div>
                        <button className='text-[#FFFFFF] bg-[#FF6C0A] text-[18px] p-2 w-28'>Enter</button>


                    </div>
                </div>
                <div>
                    <img className='w-[405px] h-[491px]' src={BannerImgOne} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Banner