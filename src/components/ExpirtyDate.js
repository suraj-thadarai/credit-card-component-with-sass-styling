import React from 'react'

const ExpirtyDate = ({ expiryDate }) => {
  return (
    <div className='expiryDate'>
      <span>
        VALID
        THRU
      </span>
      {" "}
      {expiryDate}
    </div>
  )
}

export default ExpirtyDate