import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const WatchVideo = () => {
  const {videoId} = useParams();
  const selector = useSelector(store => store.videoSliceReducer.videoList)

  const title = selector?.filter(v=>v.id == videoId)[0]?.snippet?.title

  return (
    <div className='h-[80%]'>
        <iframe 
        className='w-full h-[450px] object-cover rounded-lg'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        <div className='text-2xl font-bold my-4'>
          {title}
        </div>
      </div>
  )
}

export default WatchVideo