import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg max-w-xl'>{overview}</p>

        <div className='my-4 md:my-0'>
            <button className='bg-white text-black py-2 md:py-4 rounded-lg px-6 md:px-12 text-lg hover:bg-opacity-80'>▸ Play</button>
            <button className='hidden md:inline-block bg-gray-700 text-white py-4 rounded-lg px-12 text-lg bg-opacity-50 mx-2'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;