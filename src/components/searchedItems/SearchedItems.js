import React from 'react'
import Side from '../Side'
import SearchedContent from './SearchedContent'

function SearchedItems() {
  return (
    <>
        <div className="main row  mt-3 me-5" style={{overflow:'hidden'}}>
            <Side></Side>
            <SearchedContent></SearchedContent>
        </div>
    </>
  )
}

export default SearchedItems