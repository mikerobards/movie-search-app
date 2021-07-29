import React from 'react'

export default function SearchMovies() {
    return (
        <form className="form">
            <label htmlFor="query" className="label">Moive Name</label>
            <input type="text" name="query" placeholder="Such as 'Jurassic Park'" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}