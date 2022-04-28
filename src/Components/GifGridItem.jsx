import React from 'react'

const GifGridItem = ( { url, title } ) => { 
  return (
    <div className='cards animate__animated animate__fadeInDown'>
      <img src={url} alt={title} />

      <p>{ title }</p>
      
    </div>
  )
}

export default GifGridItem