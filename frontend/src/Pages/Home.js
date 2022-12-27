import React from 'react'
import Body from '../Components/Body'
import Generator from '../Components/Generator'
import Navbar from '../Components/Navigation'

function Home() {
  return (
    <div>
        <Navbar/>
        <Body/>
        <Generator/>
    </div>
  )
}

export default Home