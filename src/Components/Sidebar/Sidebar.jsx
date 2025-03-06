import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons"
import { faGreaterThan, faClockRotateLeft, faFilm, faHouse, faList, faThumbsUp, faClock, faScissors, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"

const Sidebar = () => {
    const togglerSelector = useSelector((store) => store.sidebarTogglerReducer.isToggle)

  return (
    <div className={`${togglerSelector ? 'w-[7rem]' : 'w-[12rem]'} `}>{
        togglerSelector ? (
            <div className="h-[37rem] ml-4 pr-2 leading-6 hover:overflow-y-auto overflow-hidden mt-[4.5rem] static lg:fixed left-0">
          <button className="w-full rounded-xl p-2  hover:bg-gray-200 flex flex-col justify-center">
              <FontAwesomeIcon className="pl-3"  icon={faHouse} />
              <p>Home</p>
          </button>
          <button className="w-full rounded-xl p-2  hover:bg-gray-200 flex flex-col">
              <FontAwesomeIcon className="pl-3"  icon={faFilm} />
              <p>Shorts</p>
          </button>
          <button className="w-full rounded-xl p-2  hover:bg-gray-200 flex  flex-col">
              <FontAwesomeIcon className="pl-3" icon={faSquareYoutube} />
              <p>Subscription</p>
          </button>
          <button className="w-full rounded-xl p-2 text-center hover:bg-gray-200 flex flex-col">
              <FontAwesomeIcon className="pl-3" icon={faUser} />
              <p>User</p>
          </button>
       </div>
        ) :
        (
            <div 
          className="h-[37rem] lg:ml-5 w-[11rem] pr-2 leading-6 hover:overflow-y-auto overflow-hidden lg:mt-[4.5rem] static lg:fixed left-0
          [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-300">

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
    </div>
  )
}

export default Sidebar