import React, { useState } from 'react'
import WatchVideo from './WatchVideo'
import CommentsListComponent from '../Comments/CommentsComponent'
import {commentsData} from '../../utils/commentsData'
import LiveCommentsComponent from '../Comments/LiveCommentsComponent'
import { useDispatch } from 'react-redux'
import { addChatList } from '../../utils/chatSlice'

const WatchPageContainer = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("")

  const handleChatClick = (e) => {
    if(inputText != "Add a comment")
    {
      dispatch(addChatList({
        name: "Roopa Shetty",
        message: inputText
      }));
      setInputText("")
    }
      
  }

  return (
    <div className='relative lg:top-24 md:top-40 top-40 flex flex-col lg:flex-row h-[100vh] mx-20 justify-center'>
        <div className='flex flex-col lg:w-[55rem] h-full mr-6'>
              <WatchVideo/>
           <div className='hidden lg:block text-[1.2rem] font-bold pt-5'>{commentsData.length} Comments:
              <CommentsListComponent comments={commentsData}/>
           </div>
        </div>
        
        <div className='lg:w-[30%] flex flex-col'>
          <div className=' h-[450px] border-1 border-gray-400 bg-gray-100 overflow-y-scroll flex flex-col-reverse'>
             <LiveCommentsComponent/>
          </div>
          <div className='border-gray-400 border-x-1 border-b-1 p-4'>
            <input type='text' placeholder='Add a comment' value={inputText} className='rounded-lg bg-gray-200 w-[75%] p-2 mr-4 focus:outline-none' onChange={(e)=>setInputText(e.target.value)}/>
            <button className='text-gray-700 bg-gray-400 p-2 w-12 rounded-lg' onClick={handleChatClick}>Send</button>
          </div>       
        </div>
    </div>
  )
}

export default WatchPageContainer