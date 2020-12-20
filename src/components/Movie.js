import React from "react";

const img_api="https://image.tmdb.org/t/p/w1280";

const Movie=({title,poster_path,overview,vote_average})=>(
   <div className="movie">
       <img src={img_api+poster_path} alt={title}/>
       <div className="movie-info">
           <h3>{title}</h3>
       </div>

       <div className="movie-over">
           <h2>Overview:</h2>
           <p>{overview}</p>
       </div>
   </div>

);

export default Movie;
