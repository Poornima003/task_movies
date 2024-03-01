import React, { useState } from 'react'

function Movies({newMovie}) {
  const [value,setValue] = useState('')

  const handlesubmit = e => {
    e.preventDefault()
    newMovie(value)

    setValue("")

  }
  return (
   <div  style={{textAlign:'center'}}>
      <div style={{marginBottom:'10px'}}>Director and Movies</div>
      <form onSubmit={handlesubmit}>
        <input type="text" value={value} id='dir' name='director' placeholder='Director name' onChange={(e)=>setValue(e.target.value)} />
        <input style={{marginLeft:'10px'}} id='mov' name='movie' type="text" value={value} placeholder='Movie name' onChange={(e)=>setValue(e.target.value)} />
        <button  style={{backgroundColor:'green', marginLeft:'10px'}} type='submit' >Add</button>
      </form>
   </div>
  )
}

export default Movies