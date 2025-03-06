import React from 'react'

const useCaluclateDateDifference = (date) => {

const now = new Date();

const yearDiff = now.getFullYear() - date.getFullYear();
const monthDifference = now.getMonth() - date.getMonth();
const dayDifference = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  return {yearDiff, monthDifference, dayDifference}
}

export default useCaluclateDateDifference