import React from 'react'
import './banner.css'
function Banner() {
  function truncate(string,n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (
      <header className='banner' style={{
          backgroundSize: 'cover',
          backgroundPosition:'center center',
      backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg')`
      }}>
          <div className="banner__contents">
              <h1 className="banner__title">Movie Name</h1>
              <div className="banner_button">
              <button className='banner__button'>Play</button>
              <button className='banner__button'>My List</button>
              </div>
        <h1 className='banner__description'> {truncate(`This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description `,150)}</h1>
          </div>
          <div className="banner--fadeBottom"/>
            
    </header>
  )
}

export default Banner