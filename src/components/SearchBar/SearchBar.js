import React from 'react'
import './SearchBar.css'

function SearchBar (props) {
  const { size = 'medium', ...rest } = props
  return (
    <input className={`input ${size}`} {...rest} />
  )
}

export default SearchBar