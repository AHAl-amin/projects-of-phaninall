import React from 'react'
import contacBnnerimg from "../../assets/image/contactBanner.png"
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

function ContactBanner() {
    return (
        <div>
            <div
                className="     mx-auto font-lora max-w-[80%]  rounded-[30px] "
                style={{
                    backgroundImage: `url(${contacBnnerimg})
        `,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}

            >
                <div className='font-lora text-[#FFFFFF] py-20 space-y-2 px-10'>

                    <h1 className=''>
                        <div className='w-[46px] h-[4px] bg-gradient-to-r from-[#FFFFFF] rounded-xl   mb-2 '></div>
                        CONTACT US
                    </h1>
                    <h1 className='font-bold text-[48px]'>
                        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
                    </h1>
                    <p className='text-[16px] font-medium'>Our mission is to drive progress and enhance the lives of our <br />
                        customers by delivering  superior products and. </p>

                    <div className='pt-6'>
                         <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-2 rounded-md hover:bg-[#FF7A00] px-4 py-2 text-sm font-medium  hover:text-[#FFFFFF] border border-[#E86F00] transition-colors w-[167px] h-[56px] "
                    >
                        Contacts Us <BsArrowRight className="h-4 w-4" />
                    </Link>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default ContactBanner