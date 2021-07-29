import React from 'react'
import apiKey from '../config.js';


export default function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=&page=1&include_adult=false`;
        console.log(url)
    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Such as 'Jurassic Park'" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}