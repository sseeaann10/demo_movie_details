const MovieList = ({ movies }) => {
    return (
        <div>
            <h2>My List</h2>
                <ul>
                    {movies.map((movie) => (
                        <li>{movie}</li>
                    ))}
                </ul>
        </div>
    )
}

export default MovieList;