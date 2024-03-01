import React from 'react'

function FilmActions({deleteMovie}) {
  return (
    <div>
        <button onClick={()=>deleteMovie(task.id)}>Remove</button>
    </div>
  )
}

export default FilmActions