import React from 'react'
import { PROFILE_PHOTO } from '../../utils/Constants'

const CommentsComponent = ({userComment}) => {
    const {name, comment, replies} = userComment
  return (
    <div className='flex items-center m-2 bg-gray-100 rounded-lg'>
        <img className='w-10 h-10 rounded-full m-2 cursor-pointer' src={PROFILE_PHOTO}
            alt="Profile Image"/>
            <div className='text-[0.8rem]'>
                <div className='font-bold'>{name}</div>
                <div className='font-normal'>{comment}</div>
            </div>
        
    </div>
  )
}


const CommentsListComponent = ({comments}) => {
    return <>
    {comments.map((c,index) => 
    <div key={index}>
        <CommentsComponent userComment={c}/>
        <div className='border-l-2 ml-6 pl-2'>
            <CommentsListComponent comments={c.replies}/>
        </div>
    </div>
            
        
        )}
    </>
}

export default CommentsListComponent