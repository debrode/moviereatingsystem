import React from "react";

const img_api="https://image.tmdb.org/t/p/w1280";

const setVoteClass =(vote)=>{
    if(vote >= 8)
        return "green";
    else if(vote>= 6){
        return "orange";
    }
    else{
        return "red";
    }
    
}

const Movie=({title,poster_path,overview,vote_average})=>(
   <div className="movie">
       <img src={(poster_path)?(img_api+poster_path):"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fmovie&psig=AOvVaw3A-h-P02VMiPewNKnMv4tY&ust=1608576932050000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICTlpye3e0CFQAAAAAdAAAAABAJ"} alt={title}/>
       <div className="movie-info">
           <h3>{title}</h3>
           <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
       </div>

       <div className="movie-over">
           <h2>Overview:</h2>
           <p>{overview}</p>
       </div>
   </div>

);

export default Movie;
