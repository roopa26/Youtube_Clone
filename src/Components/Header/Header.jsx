import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone, faPlus } from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import { LOGO, PROFILE_PHOTO, SEARCH_API, SIDEBAR_TOGGLER } from '../../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../utils/sidebarToggleSlice'
import { useNavigate } from "react-router";
import { addSearchList, addSearchText } from '../../utils/searchListSlice'
import { useRef, useState } from 'react'
import SearchListComponent from '../SearchList/SearchListComponent'
 
const Header = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const selector = useSelector(store => store.searchSlice)
    
    const [searchText, setSearchText] = useState("");
    const [showSearchList, setShowSearchList] = useState(false);
    const timeRef = useRef(null)

    const handleSideBarToggle = () => {
        dispatch(toggleMenu())
    }

    const handleSearchClick = () => {
        if(searchText != "") setShowSearchList(true)
        const searchList = selector.searchList?.filter(i=>i.query==searchText)
        clearTimeout(timeRef.current)

        if(searchList.length == 0){
            timeRef.current = setTimeout(async()=>{
                const searchResults = await fetch(SEARCH_API.replace('{search_string}',searchText));
                const searchResultsData = await searchResults.json()
                dispatch(addSearchText(searchText))
                dispatch(addSearchList({query:searchText, results:searchResultsData[1]}))
            }, 1000)
        }
    }

  return (
    <>
        <div className='flex w-full justify-between h-20 items-center px-6 static z-20 lg:fixed bg-white lg:-mt-2'>
        <div className='w-[10rem] flex flex-nowrap'>
            <img className='hidden md:inline-block w-9 h-12 pt-4 cursor-pointer' 
                src={SIDEBAR_TOGGLER} 
                alt = "toggle button"
                onClick={handleSideBarToggle}/>
            <img title='YouTube Home' className='w-28 h-16 cursor-pointer'
                src={LOGO}
                alt = "logo" onClick={()=>{navigate("/")}}/>
        </div>
        <div className='relative'>
            <div className='hidden md:flex flex-nowrap'>
                <input 
                className='border focus:outline-blue-200 border-gray-400 rounded-l-full p-4 h-10 lg:w-[30rem] [@media(max-width:768px)]:w-[10rem] md:w-[15rem]' 
                placeholder="Search"
                value={searchText}
                onChange={(e)=> {setSearchText(e.target.value); handleSearchClick()}}
                onBlur={()=>setShowSearchList(false)}
                onFocus={()=>{
                    if(searchText != "") 
                        setShowSearchList(true)}}
                />
                <button title="Search" 
                className='border border-gray-400 rounded-r-full w-16 h-10  bg-gray-200 text-center cursor-pointer'
                onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button title="Search with your voice" className='ml-4 rounded-full bg-gray-200 w-10 h-10 cursor-pointer'>
                    <FontAwesomeIcon icon={faMicrophone} />
                </button>
            </div> 
            {searchText && <div 
            className={`absolute bg-white border-1 font-semibold border-gray-300 text-black lg:w-[30rem] [@media(max-width:768px)]:w-[10rem] md:w-[15rem] mt-2 rounded-lg p-4 z-20 ${showSearchList ? 'block md:block' : 'hidden'}`}>
                <SearchListComponent />
            </div>}
        </div>

        <div className='flex justify-between items-center flex-nowrap'>
            <button title="Search" className='md:hidden ml-4 rounded-full bg-gray-200 w-10 h-10 cursor-pointer'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button className='hidden md:inline-block w-24 p-2 rounded-full h-10 bg-gray-200 m-2 cursor-pointer'>
                <FontAwesomeIcon icon={faPlus} /> <span className='hidden lg:inline-block'>Create</span>
            </button>
            <button title="notifications" className='m-2 cursor-pointer'>
                <FontAwesomeIcon style={{height:'2rem'}} icon={faBell} />
            </button>
            <img
            className='w-10 h-10 rounded-full m-2 cursor-pointer' 
            src={PROFILE_PHOTO}
            alt="Profile Image"/>
        </div>
        </div>
        
    </>
  )
}

export default Header