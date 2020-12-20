import React, {useEffect,useState} from "react";
// import './App.css';
import Movie from './components/Movie';

const featured_api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const search_api="https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";


function App(){
  const [movies,setMovies]= useState([]);

  const [searchterm, setsearchterm] = useState('');
  useEffect( ()=>{
    fetch(featured_api).then(res=>res.json())
    .then(data=>{
     setMovies(data.results);
    })
    
  },[])

  const handleOnSubmit = (e) =>{
    e.preventDefault();
     if(searchterm){
    fetch(search_api+searchterm).then((res)=>res.json()).then((data)=>{if(data.results){
    setMovies(data.results)}});
    setsearchterm('');
   }

  };

  const handleOnChange = (e) => {
    setsearchterm(e.target.value);
  }

  return (
    <>
    <header>
      <h1>MovieReview</h1>
      <form onSubmit={handleOnSubmit}>
      <input 
      className="search" 
      type="text" 
      placeholder="Search..."
      value={searchterm}
      onChange={handleOnChange}
      />
      </form>
    
  </header>
    <div className="movie-container">
     
        {movies.length>0 
        &&movies.map(movie =>
        <Movie key={movie.id} {...movie}
        />)
}

   
    </div>



    </>
      );
}


export default App;