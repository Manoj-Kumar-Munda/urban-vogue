import React from 'react';
import bgVideo from '../assets/bg-video.mp4'
import '../styles/mainPage.css';
import Header from './Header';

const Body = () => {
  return (
    <div className='w-full h-screen relative overflow-hidden '>
        <Header />

        <video className='absolute inset-0 hidden md:block' autoPlay loop muted>
            <source src={bgVideo} />
            
        </video>

        <div className='absolute bottom-16 left-0 right-0 flex flex-col items-center'>
            <h1 className='brand-name'>The Veronicas</h1>
            <h3 className='sub-text'><span>+ EXPLORE THE COLLECTIONS</span></h3>
        </div>


    </div>
  )
}

export default Body