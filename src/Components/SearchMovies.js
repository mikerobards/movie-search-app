import React, { useState } from 'react'
import apiKey from '../config.js'


export default function SearchMovies() {

    // states - input query, movvies
    const [query, setQuery] = useState('')
    const [movies, setMovie] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
        console.log(url)

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setMovie(prevMovies => [...prevMovies, data.results[0].title])
        } catch (err) {
            console.error(err)
        }

        console.log(movies)

    }



    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input
                className="input"
                type="text"
                name="query"
                placeholder="Such as 'Jurassic Park'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button" type="submit">Search</button>

            <h1>{movies} </h1>
        </form>
    )
}