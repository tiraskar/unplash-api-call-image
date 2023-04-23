import React from 'react'

const ImageShow = ({ image }) => {
  return (
    <div className='bg-white shadow-md rounded-lg'>
      <img src={image.urls.small} alt={image.alt_description} className='' />
    </div>
  )
}

export default ImageShow
