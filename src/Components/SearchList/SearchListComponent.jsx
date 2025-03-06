import React from 'react'
import { useSelector } from 'react-redux'

const SearchListComponent = () => {
  const selector = useSelector(store => store.searchSlice)
  const searchList = selector.searchList?.filter(i=>i.query==selector.currentSearchText)
  return (
    <div>
      <ul>
        {searchList && searchList[0]?.results?.map((item, index) => 
          <li key={index} className='p-1.5'>🔍 {item}</li>
        )}
      </ul>
    </div>
  )
}

export default SearchListComponent