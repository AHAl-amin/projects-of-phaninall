import React from 'react'
import Navber from '../../componants/Navber/Navber'
import Banner from '../../componants/Banner/Banner'
import About from '../../componants/About/About'
import NAICScodes from '../../componants/NAICScodes/NAICScodes'
import OurService from '../../componants/OurService/OurService'
import ContactInput from '../../componants/ContactInput/ContactInput'
import ContactBanner from '../../componants/ContactBanner/ContactBanner'

function Home() {
  return (
    <div className=''>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>

      <div className='bg-[#F5F5F5]'>

        <NAICScodes></NAICScodes>
      </div>
      <OurService></OurService>
     <div className='bg-[#F5F5F5]'>	
     <ContactInput></ContactInput>
     <ContactBanner></ContactBanner>
     </div>
    </div>
  )
}

export default Home