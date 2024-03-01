import React, { useState } from 'react'
import {Movies} from './Movies'
import FilmActions from './FilmActions'

function MovieList() {
    const [movies, setMovies] = useState([])
    const newMovie = movie =>{
        setMovies([...movies, {added: movie, completed: false}])
    }
    const deleteMovie = id => {
        setMovies(movies.filter(movie =>movie.id !==id))
    }
  return (
    <>
        <div>
            <Movies newMovie={newMovie}/>
            {movies.forEach((movie,index)=>(
                <FilmActions task={movie} key={index} deleteMovie={deleteMovie}/>
            ))}
        </div>
    
    </>
  )
}

export default MovieList