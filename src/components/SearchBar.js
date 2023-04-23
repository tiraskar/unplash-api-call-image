import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [value, setValues] = useState(' ')
  const handleSubmit = (e, term) => {
    e.preventDefault()
    onSubmit('Search by ', term)
    setValues(...value)
  }
  const handleChange = (e) => {
    setValues(e.target.value)
  }
  return (
    <div className=' flex flex-col py-10 mx-auto'>
      <form onSubmit={handleSubmit} className='flex mx-auto space-x-4'>
        <label htmlFor='search'>Search</label>
        <input
          type='text'
          onChange={handleChange}
          value={value}
          className='border-2 border-red-400 rounded-sm py-2 px-2'
        />

        <button onClick={handleSubmit}>Click me</button>
      </form>
    </div>
  )
}

export default SearchBar
