import React from 'react'
import {useState} from 'react';
function SearchBar({placeholder, data}) {
    
  return (
      <div className='search container'>
      <div className='searchInputs'>
              <input type="text" placeholder={placeholder} />
          
          </div>
      <div className='dataResult'>
        {
          data.map((sName) => {
            return <div><li>{sName}</li></div>
          })
        }
          </div>
    </div>
  )
}

export default SearchBar