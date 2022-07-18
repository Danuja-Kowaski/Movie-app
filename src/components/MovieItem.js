import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const MovieItem = () => {
    const[items, setItems] = useState([]);

    const api_key = "974a35977003f3584b947676ec2a6637";
    const api_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`;
    const getMovieData = ()=> {
       axios.get(api_url)
       .then( (response) => {
        const allMovies = response.data.results;
        setItems(allMovies);
        }).catch( error => console.error(`Error: ${error}`));
    };

    useEffect(()=>{
    getMovieData();
    }, []);

    return (
        <div>
            { items.length !== 0 ? items.map( (movie)=>{
            return <MovieList key={movie.id} item={movie}/>
            }) : <p>No movies</p>}
        </div>
    )
    } 


export default MovieItem;