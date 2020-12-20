import React, {useEffect,useState} from "react";
// import './App.css';
import Movie from './components/Movie';

const featured_api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const search_api="https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query";


function App(){
  const [movies,setMovies]= useState([]);
  useEffect( ()=>{
    fetch(featured_api).then(res=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
    
  },[])
  return (
    <>
    <header>
    <input className="search" type="text" placeholder="Search..."/>
  </header>
    <div className="movie-container">
   
     {movies.length>0 &&
     movies.map(movie=>
        <Movie key={movie.id} {...movie}/>)}
    </div>

    </>
      );
}


export default App;