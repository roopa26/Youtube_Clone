import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useCaluclateDateDifference from "../../../utils/useCaluclateDateDifference"
import useTimeAgo from "../../../utils/useTimeAgo"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"

const VideoComponent = ({videoInfo}) => {

const url = videoInfo?.snippet?.thumbnails?.standard?.url
const {title, channelTitle} = videoInfo.snippet
const {viewCount} = videoInfo.statistics
const {publishedAt} = videoInfo.snippet

const dateDifference = useCaluclateDateDifference(new Date(publishedAt));

const timeAgo = useTimeAgo(dateDifference)

  return (
    <div className="w-[75%] md:w-[95%] font-sans">
      <img className="object-cover w-full h-60 rounded-xl hover:rounded-none" src={url}/>
      <div className="flex mt-2 justify-between">
        <div className="py-2">
          <h1 className="text-[1rem] font-semibold">{title}</h1>
          <p className="text-[1rem] text-gray-500">{channelTitle}</p>
          <div className="flex text-[1rem] text-gray-500">
            <p>{Math.floor(viewCount/1000)}K views |</p>
            <p>{timeAgo}</p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon className="mt-3.5 pr-2" icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  )
}

export default VideoComponent