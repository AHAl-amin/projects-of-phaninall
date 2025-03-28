import React from 'react'
import contactInputimg from "../../assets/image/contactInput.png"

function ContactInput() {




  return (
    <div className='flex w-full mx-auto max-w-[80%] gap-10 justify-between font-lora py-24'> 
      <div>

        <div className="w-[460px] ">
          <div className=" mb-6">
            <p className="text-[#FF6C0A] font-medium text-[20px]">Contact Information</p>
            <h2 className="text-[44px] font-medium text-gray-800 mt-1">Get In Touch</h2>
          </div>

          <div className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[50px] px-3 py-2 border border-[#545454] rounded-md focus:outline-none focus:ring-1 "
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Phone"
                className="w-full h-[50px] px-3 py-2 border border-[#545454] rounded-md focus:outline-none focus:ring-1 "
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[50px] px-3 py-2 border border-[#545454] rounded-md focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full h-[73px] px-3 py-2 border border-[#545454] rounded-md focus:outline-none focus:ring-1 "
              ></textarea>
            </div>

            <button className="w-full h-[50px] bg-[#FF6C0A]  text-white font-medium py-3 px-4 rounded-md transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div>
        <img className='w-[468px] h-[501px]' src={contactInputimg} alt="" />

      </div>
    </div>
  )
}

export default ContactInput