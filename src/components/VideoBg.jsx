import React from 'react'
import videoBg from "../assets/video-bg.mp4"
import bgThumbnail from "../assets/video_bg_thumbnail.webp"

const VideoBg = () => {
  return (
    <div className='hidden md:block w-screen h-screen'>
        <video playsInline  className='w-full h-full' poster={bgThumbnail} autoPlay loop muted>
            <source src={videoBg} type="" />
        </video>
    </div>
  )
}

export default VideoBg