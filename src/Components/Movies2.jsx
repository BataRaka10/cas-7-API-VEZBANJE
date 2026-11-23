import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../Templates/Snipets/MovieCard";


// * kada se klike na search movie refreshuje -> submitovace celu formu / zaustavimo da ne rifreshuje stranu -> type="button"

// * e.currentTarget.value -> value koji mi imamo

// * onInput={ (e) => setMovieName(e.currentTarget.value -> kada sesvaki put ukuca nesto: mi cemo setovati movieName sa tom vrednoscu koju je krisnik uneo ***

// * const [movieName, setMovieName] = useState() -> napravili smo state koji ce drzati ime tog filma ***

// ** zasto se nije odma desilo: kad se radi axios poziv on to radi asinhrono

// * radimo pretragu na osnovu movie name

// * DOMACI: cim se ocita stranica u konzoli ispisati da pokusa da nadje Lord of the rings / treba da pozovemo api i da nadje sve filmove Lord of the rings


// * resenje: da default ste bude: seState("Lord of the rings");

// * lord of the rings na page load (kada se ocita srtanica) resenje: useState("Lord of the rings")

// ** re-renderovanje: kada god dodje do promene neke komponente: na primer: da se promenio state -> ta kmoponenta se re-rendeuje

// menja state ona se renderuje: dobijamo infilte loop / resenje use efect

// * use efect = uloga mi je da se neki kod izvrsi, kada se ta kmoponenta renderuje, kada je zavrseno to renderovanje -> tada taj kod treba da se izvrsi(page load u javascripti) 

/**
 * * U reactu po defautu nam je ukljucen: stict mode (striktni mod): uloga strikt mo da je da sve sto mi uradimo, on uradi jos jednom, primer: pozivanje api -> on ce jos jednom da pozove api -> cisto da se uveri da je react kod funkcionise
 * 
 * 
 *  useEffect( () => {
        searchMovieByTitle();
    }, []);
  **  u [] -> se stavlja(prosledjuje) metoda koja se poziva na renderovanje

 * 
 */

// vezba: na search movie pretraga da es promeni slika

/**
 * * domaci: izvestiti kod u jednu komponentu: 
 *
 *  <img src={movieData.Poster} alt="" />
 *  <h3>{movieData.Title}</h3>
 *  <p>{movieData.Plot}</p>
 * 
 */

const Movies2 = () => {
    // za text
    // const [movieName, setMovieName] = useState();
    const [movieName, setMovieName] = useState("Lord of the rings")
    // / resenje: na search movie pretraga da es promeni slika
    // const [movieData, setMovieData] = useState({}) // {} = prazan objekat
    const [movieData, setMovieData] = useState({})
    
    // metoda(funkcija)
    // response vec dobijamo od servera: console.log(response.data)
    const searchMovieByTitle = () => {
        console.log("Hello World")


        axios.get(`${import.meta.env.VITE_OMDBAPI_URL}?t=${movieName}&apikey=${import.meta.env.VITE_OMDBAPI_KEY}`)

        // axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t="+movieName+"&apikey="+import.meta.env.VITE_OMDBAPI_KEY)

            // resenje: za movieData
            // -> kada doijem oodgovor od servera: mi hocemo da podesimo kao: movieData !*
            .then(response => setMovieData(response.data))
            // .then(response => console.log(response.data))

        // * DOMACI: cim se ocita stranica u konzoli ispisati da pokusa da nadje Lord of the rings / treba da pozovemo api i da nadje sve filmove Lord of the rings


    }

    // useEffect( () => {
    //     searchMovieByTitle()
    // }, []); // ako zelimo da se nesatoo izvrsi samo jednom: staviti  prazan array[]

    // searchMovieByTitle();

    // nasa meteoda cita iz statea: po defaultui podesava:  useState("Lord of the rings")
    // searchMovieByTitle(); // pozivanje metode
    // setMovieName("Test")

    return (
        <>
            <form>
                <input type="text" />
                <button type="button" onClick={searchMovieByTitle}>Search movie</button>
            </form>

            {/* resenje domaceg: movieData */}


            {/* <img src={ movieData.Poster } alt="" />
            <h3>{ movieData.Title }</h3>
            <p>{ movieData.Plot }</p> */}
            

            {/* movieCard: za pokazivanje podataka , preko propa prihvata podatke ({movie}) , pozovemo movieCard i prosledimo informacije  */}
            {/* <MovieCard movie={movieData}/> */}

            {/* <form>
                <input type="text" onInput={ (e) => searchMovieByTitle(e.currentTarget.value)}/>
                <button type="button" onClick={searchMovieByTitle}>Search movie</button>
            </form> */}
        </>
    )
}

export default Movies2;