import React from 'react'

function ImageElement({src, alt}) {
  return (
    <div>
        <img src={src} alt={alt} className='image-element'></img>
    </div>
  )
}

export default ImageElement