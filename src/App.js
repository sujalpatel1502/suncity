import React from 'react'
import HeadBanner from './components/HeadBanner'
import Nav from './components/Nav'
import AboutCompany from './components/AboutCompany'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <HeadBanner/>
      <hr/>
      <Nav/>
      <AboutCompany/>
      <Footer/>
    </div>
  )
}

export default App
