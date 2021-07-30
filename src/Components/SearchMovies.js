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
            // setMovie(prevMovies => [...prevMovies, data.results[0].title])
            setMovie(data.results)
        } catch (err) {
            console.error(err)
        }

        console.log(movies)

    }



    return (
        <>
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
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (

                    <div className="card" key={movie.id}>
                        <img
                            className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}