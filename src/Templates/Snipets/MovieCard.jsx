


// Tamplates: jsx fajlovi(header, footer...) 
// Snipets: mali delovi koda

// * prop da prosledimo: da uhvatimo: ({movieData})
const MovieCard = ({movie}) => {

    return (
        <>
            <img src={movie.Poster} alt="" />
            <h3>{movie.Title}</h3>
            <p>{movie.Plot}</p>
            {/* <img src={movie.Poster} alt="" />
            <h3>{movie.Title}</h3>
            <p>{movie.Plot}</p> */}
        </>
    )
}

export default MovieCard;
