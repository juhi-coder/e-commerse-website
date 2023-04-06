
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './Pages/About';
import Navbar from './componets/navbar/Navbar';
import { Button } from 'react-bootstrap';
import MovieList from "./components/Movies/MovieList";
import React, { useState } from "react";
function App() {

  
  return (
   <div>
    const [movies, setMovies] = useState([]);
  const fetchMoviesHandler =( async () => {

      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const loadMovies = [];
      for (let key in data) {
        loadMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadMovies);
  });

   </div>
  );
 <Header/>
  return (
    <div>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      <MovieList movies={movies} />
      {/* <Header/>
<Footer/>
</div>
<Footer/> */}
    </div>
  );
}


export default App;
