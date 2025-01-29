import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone, faPlus } from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import { LOGO, PROFILE_PHOTO, SIDEBAR_TOGGLER } from '../../utils/Constants'

const Header = () => {
  return (
    <div className='flex w-full justify-between h-16 items-center shadow-sm px-6'>
        <div className='flex'>
            <img className='w-9 h-12 pt-4 cursor-pointer' 
                src={SIDEBAR_TOGGLER} 
                alt = "toggle button"/>
            <img className='w-28 h-16 cursor-pointer'
                src={LOGO}
                alt = "logo"/>
        </div>
        
        <div className='flex'>
            <input className='border focus:outline-blue-200 border-gray-400 rounded-l-full p-4 h-10 w-[30rem]' placeholder="Search"/>
            <button className='border border-gray-400 rounded-r-full w-16 h-10  bg-gray-200 text-center cursor-pointer'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button className='ml-4 rounded-full bg-gray-200 w-10 h-10 cursor-pointer'>
                <FontAwesomeIcon icon={faMicrophone} />
            </button>
        </div> 

        <div className='flex justify-between items-center'>
            <button className='w-24 p-2 rounded-full h-10 bg-gray-200 m-2 cursor-pointer'>
                <FontAwesomeIcon icon={faPlus} /> Create
            </button>
            <button className='m-2 cursor-pointer'>
                <FontAwesomeIcon style={{height:'2rem'}} icon={faBell} />
            </button>
            <img
            className='w-10 h-10 rounded-full m-2 cursor-pointer' 
            src={PROFILE_PHOTO}
            alt="Profile Image"/>
        </div>
    </div>
  )
}

export default Header