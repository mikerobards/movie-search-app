import React from 'react'
import apiKey from '../key'


export default function SearchMovies() {

    const searchMovie = async (e) => {
        e.preventDefault()
        console.log("submitting")

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    }

    return (
        <form className="form" onSubmit={searchMovie}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Such as 'Jurassic Park'" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}