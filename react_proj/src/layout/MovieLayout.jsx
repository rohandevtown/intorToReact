import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.Component'

const MovieLayout = (Component) => ({...props}) => {
  return (
    <div>
        <MovieNavbar />
        <Component {...props} />
    </div>
  )
}

export default MovieLayout