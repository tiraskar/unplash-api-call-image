import React from 'react'
import ImageShow from './ImageShow'

const ImageList = ({ images }) => {
  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  })
  return (
    <div className='container px-10 py-3 bg-blue-300 '>
      <div className='flex flex-row space-x-3 '>{renderImages}</div>
    </div>
  )
}

export default ImageList
