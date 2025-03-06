import VideoComponent from "../VideoCard/VideoComponent"
import { useEffect, useState } from "react"
import {VIDEO_LIST} from "../../../utils/Constants"
import {useDispatch, useSelector} from 'react-redux';
import { addVideoList } from "../../../utils/videoSlice";
import { Link } from "react-router-dom";

const VideoContainerComponent = () => {
  const dispatch = useDispatch();
  const videoSelector = useSelector((store) => store.videoSliceReducer.videoList)

  const fectchVideos= async () =>{
    try{
      const results = await fetch(VIDEO_LIST);
      const videos = await results.json();
      dispatch(addVideoList(videos.items))
    }
    catch(error){
      console.log(error)
    }
    
  }
  useEffect(() => {
    if(videoSelector?.length == 0 || !videoSelector)
      fectchVideos();
  },[videoSelector])

  return (
    
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mt-36 mt-6 w-auto ml-16 md:ml-0 ">
          {videoSelector && videoSelector.map((videoInfo) => 
          <Link key={videoInfo.id} to={`/watch/${videoInfo.id}`}>
            <VideoComponent videoInfo={videoInfo}/>
          </Link>
          )}
      </div>
    
  )
}

export default VideoContainerComponent