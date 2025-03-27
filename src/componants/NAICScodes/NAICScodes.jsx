
import React from 'react'
import { Link } from 'react-router-dom'

function NAICScodes() {



    const tableData = [
        {
            code: "12543",
            description:
                "Computer Facilities Management Services - Provides on-site and remote management of computer systems and data processing facilities for clients. Includes IT infrastructure management and server administration.",
        },
        {
            code: "12543",
            description:
                "Computer Facilities Management Services - Provides on-site and remote management of computer systems and data processing facilities for clients. Includes IT infrastructure management and server administration.",
        },
        {
            code: "12543",
            description:
                "Computer Facilities Management Services - Provides on-site and remote management of computer systems and data processing facilities for clients. Includes IT infrastructure management and server administration.",
        },
        {
            code: "12543",
            description:
                "Computer Facilities Management Services - Provides on-site and remote management of computer systems and data processing facilities for clients. Includes IT infrastructure management and server administration.",
        },
        {
            code: "12543",
            description:
                "Computer Facilities Management Services - Provides on-site and remote management of computer systems and data processing facilities for clients. Includes IT infrastructure management and server administration.",
        },
        {
            code: "12543",
            description:
                "Computer Facilities Management Services - Provides on-site and remote management of computer systems and data processing facilities for clients. Includes IT infrastructure management and server administration.",
        },
        {
            code: "12543",
            description:
                "Computer Facilities Management Services - Provides on-site and remote management of computer systems and data processing facilities for clients. Includes IT infrastructure management and server administration.",
        },
        {
            code: "12543",
            description:
                "Computer Facilities Management Services - Provides on-site and remote management of computer systems and data processing facilities for clients. Includes IT infrastructure management and server administration.",
        },
    ]
    return (
        <div className='font-lora max-w-[80%] mx-auto space-y-10 '>
            <h1 className='text-[40px] text-center font-semibold'>
                NAICS Codes
            </h1>
            <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-md hover:bg-[#FF7A00] px-4 py-2 text-sm font-medium text-black hover:text-[#FFFFFF] border border-[#E86F00] transition-colors  w-[260px] h-[56px] mr-4"
            >
                NAICS Codes
            </Link>
            <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-md hover:bg-[#FF7A00] px-4 py-2 text-sm font-medium text-black hover:text-[#FFFFFF] border border-[#E86F00] w-[260px] h-[56px] transition-colors"
            >
                PSC Codes
            </Link>

          

                <div className=" mx-auto ">
                    <div className="overflow-x-auto rounded-lg ">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr className="bg-[#fde8d0]">
                                    <th className="w-1/4 px-6 py-3  text-sm font-medium text-gray-800 border-r border-[#FFF7EF] text-center">
                                        Code
                                    </th>
                                    <th className="w-3/4 px-6 py-3 text-center text-sm font-medium text-gray-800">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {tableData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-[#FFF7EF]" : "bg-[#FFE5CC]"}>
                                        <td className="px-6 py-4 text-[12px] text-center text-[#333333] border-r border-[#FFF7EF]">{item.code}</td>
                                        <td className="px-6 py-4 text-[12px] text-[#333333]">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


       
    )
}

export default NAICScodes