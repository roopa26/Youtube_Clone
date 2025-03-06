import React from 'react'

const useTimeAgo = (dateObj) => {

    const {yearDiff, monthDifference, dayDifference} = dateObj;
    if(yearDiff >= 1) return `${yearDiff} year${yearDiff >1 ? 's': ''} ago`;
    else if(monthDifference >= 1) return `${monthDifference} month${monthDifference > 1 ? 's': ''} ago`;
    else if(dayDifference == 0) return 'Today'
    else return `${dayDifference} day${dayDifference > 1 ? 's' :''}`;
  
}

export default useTimeAgo