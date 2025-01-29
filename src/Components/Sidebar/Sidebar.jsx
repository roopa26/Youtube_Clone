import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons"
import { faGreaterThan, faClockRotateLeft, faFilm, faHouse, faList, faThumbsUp, faClock, faScissors } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Sidebar = () => {
  return (
    <div 
    className="w-[12rem] ml-4 mr-8 leading-8 hover:overflow-y-auto overflow-hidden
     [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

        <div className="w-full h-full">
            <button className="w-full rounded-xl p-2  hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faHouse} />
                <p>Home</p>
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faFilm} />
                <p>Shorts</p>
            </button>
            <button className="w-full rounded-xl p-2  hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faSquareYoutube}/>
                <p>Suscribe</p>
            </button>

            <hr className="border-gray-300 my-4"/>

            <button className="text-left text-lg font-medium w-full hover:bg-gray-200 rounded-xl px-2 py-2">
                You <FontAwesomeIcon className="ml-2 text-gray-400 font-light" icon={faGreaterThan} />
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faClockRotateLeft} />
                <p>History</p>
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
            <FontAwesomeIcon className="mr-3.5" icon={faList} />
                <p>Playlists</p>
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faSquareYoutube}/>
                <p>Your Videos</p>
            </button>
            <button className="w-full rounded-xl p-2  hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faClock} />
                <p>Watch Later</p>
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faThumbsUp} />
                <p>Liked Videos</p>
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faScissors} />
                <p>Clips</p>
            </button>
            <hr className="border-gray-300 my-4"/>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
            <FontAwesomeIcon className="mr-3.5" icon={faList} />
                <p>Playlists</p>
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faSquareYoutube}/>
                <p>Your Videos</p>
            </button>
            <button className="w-full rounded-xl p-2  hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faClock} />
                <p>Watch Later</p>
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faThumbsUp} />
                <p>Liked Videos</p>
            </button>
            <button className="w-full rounded-xl p-2 hover:bg-gray-200 flex items-center">
                <FontAwesomeIcon className="mr-3.5" icon={faScissors} />
                <p>Clips</p>
            </button>
        </div>
    </div>
  )
}

export default Sidebar