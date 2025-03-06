import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addChatList } from '../../utils/chatSlice';
import { PROFILE_PHOTO } from '../../utils/Constants'
import generateName from '../../utils/randomNameGenerator';
import { generateRandomMessage } from '../../utils/randomStringGenerator';

const LiveCommentsComponent = () => {
    const dispatch = useDispatch();
    const selector = useSelector(store => store.chatSlice.chatMessage);

    useEffect(() => {
        setInterval(()=>{
            dispatch(addChatList({
                name: generateName(),
                message: generateRandomMessage(8) +" Lorem ipsum donar immet 🚀"
            }))
        }, 2000)
    },[]);

  return (
    <>        
       {selector?.map((chat, index) => 
        <div key={index} className='text-[0.8rem] flex text-black items-center'>
            <img className='w-8 h-8 rounded-full m-2 cursor-pointer' src={PROFILE_PHOTO}
                        alt="Profile Image"/>
            <div className='font-bold p-2'>{chat.name}</div>
            <div className='font-normal'>{chat.message}</div>                    
        </div>)}
    </>
  )
}

export default LiveCommentsComponent