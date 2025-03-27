import React from 'react'
import Navber from '../../componants/Navber/Navber'
import Banner from '../../componants/Banner/Banner'
import About from '../../componants/About/About'
import NAICScodes from '../../componants/NAICScodes/NAICScodes'

function Home() {
  return (
    <div className=''>
       <Navber></Navber>
       <Banner></Banner>
       <About></About>

       <div className='bg-[#F5F5F5] p-20'>

       <NAICScodes></NAICScodes>
       </div>
    </div>
  )
}

export default Home