import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setmovies]=useState([])

  function fetchingdatahandler(){
    fetch("https://swapi.py4e.com/api/films/").then(res=>{
      return res.json()
     })
     .then((data)=>{
      setmovies(data.results)
    
     })
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
