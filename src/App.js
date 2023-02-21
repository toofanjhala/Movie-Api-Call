import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setmovies]=useState([])

  async function fetchingdatahandler(){
    
     const response= await  fetch("https://swapi.py4e.com/api/films/")
     const convertedresponse = await response.json()
     const moviesarray= await convertedresponse.results
     
      setmovies(moviesarray)
    
     
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchingdatahandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
