import React from 'react'
import Navber from '../../componants/Navber/Navber'
import Banner from '../../componants/Banner/Banner'
import About from '../../componants/About/About'

function Home() {
  return (
    <div className=''>
       <Navber></Navber>
       <Banner></Banner>
       <About></About>
    </div>
  )
}

export default Home