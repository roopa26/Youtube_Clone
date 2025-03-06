import ButtonList from "./ButtonLists/ButtonList"
import VideoContainerComponent from "./VideoContainer/VideoContainerComponent"
import Sidebar from '../Sidebar/Sidebar'
import { useSelector } from "react-redux"

const Body = () => {
  const togglerSelector = useSelector((store) => store.sidebarTogglerReducer.isToggle)
  return (
    <div className="flex w-full">
      <div className={`${togglerSelector ? 'w-[7rem]' : 'w-[15%]'} px-4 hidden md:block`}>
            <Sidebar/>
      </div>
      <div className={`${togglerSelector ? 'ml-20' : ''}  lg:w-[85%] md:mr-4 h-[100vh] flex flex-col w-[90%] `}>
          <ButtonList/>
          <VideoContainerComponent/>
      </div>
    </div>
  )
}

export default Body