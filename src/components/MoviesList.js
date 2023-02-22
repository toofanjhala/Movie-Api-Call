import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {

  function Deletemovie(id){
    props.onDEL(id)
   }
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        
        <Movie
      
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          ondelete={Deletemovie.bind("null",movie.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
