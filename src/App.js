import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setmovies] = useState([])
  const [isloading, setisloading] = useState(false)
  const [error, seterror] = useState(null)
  const [intervalId, setIntervalId] = useState(0);



  async function fetchingdatahandler() {
    seterror(null)
    setisloading(true)

  const interval = setInterval(async () => {

      try {
        const response = await fetch("https://swapi.py4e.com/api/film/")

        if (response.status !== 200) {
          throw new Error("something went wrong retrying...")
        }


        const convertedresponse = await response.json()
        const moviesarray = await convertedresponse.results
        setisloading(false)
        setmovies(moviesarray)
      } catch (Error) {
        seterror(Error.message)

      }
    }, 5000);
    setIntervalId(interval)


  }

  function stophandler(){
clearInterval(intervalId)
  setIntervalId(111)
  }


console.log("out",intervalId)

  let content = <p> NO movie Available</p>

  if (isloading === true) {
    content = <p> loading...</p>

  }

  if (error) {
    content = <div><button onClick={stophandler}>Cancel</button> <p>{error}</p></div>
  }


  if(intervalId===111)
  {
    content= <p> sorry , no item found</p>
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }



  return (
    <React.Fragment>
      <section>
        <button onClick={fetchingdatahandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
