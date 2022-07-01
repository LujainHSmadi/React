import React from 'react'
import './banner.css'
function Banner() {
  return (
      <header className='banner' style={{
          backgroundSize: 'cover',
          backgroundPosition:'center',
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589208741264-WML4ZVCWB50NFQ5NNUQY/netflix.jpg')`
      }}>
    </header>
  )
}

export default Banner