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
    
    // text: text za movieName / napravili smo state koji ce nam drzati ime tog filma: setMovieName
    // const [movieName, setMovieName] = useState();

    // resenje: treba da pokazemo: lord of the rings filmove na page load-u (da to bude default) -> da bude default: useState("Lord of the rings") -> da prvi put kada se ocita komponenta da pozove * !
    const [movieName, setMovieName] = useState("Lord of the rings"); // difoltna vrednost !

    // / resenje: na search movie pretraga da es promeni slika

    // * vezba: da napravima: npr: akop ukucamo: hobbit u pretrazi(Search movi) da on uzme i promeni na osnovu filma koji je nasao, na stranici da promeni sta pise
    // const [movieData, setMovieData] = useState({}) // {} = prazan objekat
    const [movieData, setMovieData] = useState({});
    
    // metoda(funkcija)
    // response vec dobijamo od servera: console.log(response.data)
    const searchMovieByTitle = () => {
        // console.log("Hello World")
        console.log(movieName)

        // * DOMACI: cim se ocita stranica u konzoli ispisati da pokusa da nadje Lord of the rings / treba da pozovemo api i da nadje sve filmove Lord of the rings

        axios.get(`${import.meta.env.VITE_OMDBAPI_URL}?t=${movieName}&apikey=${import.meta.env.VITE_OMDBAPI_KEY}`)

        // movieName: pretraga na osnovu movieName koji smo ukucali *
        // axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t="+movieName+"&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
            // * resenje: za movieData
            // response vec dobijamo od servera, i umesto console.log,  setMovieData
            // -> kada doijem oodgovor od servera: mi hocemo da podesimo kao: movieData !*
            .then(response => setMovieData(response.data))
            // .then(response => setMovieData(response.data))
            // .then(response => console.log(response.data))

    }

    // * uloga useEffect: jeste da izvrsi se neki kod na pageload ili kada komponenta renderovanje, kada se zavrsi renderovanje, tad taj kod treba da izvrsi 
    // Kako se pise
    useEffect( () => {
        searchMovieByTitle();
    }, []);  // prazni array[] -> u prevodu: treba da prosledimo metodu koja se poziva da renderuje / * ako zelimo da se nesto izvrsi samo jednom: staviti  prazan array[] * !

    // useEffect( () => {
    //     searchMovieByTitle()
    // }, []); // ako zelimo da se nesatoo izvrsi samo jednom: staviti  prazan array[] *!

    // * pozivanje nase metode: metoda cita iz steta: rekli smo da je defaultni state: useState("Lord of the rings") / ** on po defaultu podesava lord of the rings poziva api

    // searchMovieByTitle();
    // searchMovieByTitle();

    // * nasa meteoda cita iz statea: po defaultui podesava:  useState("Lord of the rings")
    // searchMovieByTitle(); // pozivanje metode

    // api se pozvao 100 puta, kada ocitamo komponentu( promenimo state), ona es ponovo rirenderuje(iz pocetka se izvrsava) i dobijamo infinite loop // Mi zeli, da se izvrsi samo jednom useEffect()
    // setMovieName("Test")

    return (
        <>
            <form>
                <input type="text" onInput={ (e) => setMovieName(e.currentTarget.value) }/>
                <button type="button" onClick={searchMovieByTitle}>Search movie</button>
            </form>

            {/* resenje domaceg: movieData */}
            <img src={movieData.Poster} alt="" />
            <h3>{movieData.Title}</h3>
            <p>{movieData.Plot}</p>

            {/* movieCard: za pokazivanje podataka , preko propa prihvata podatke ({movie}) , pozovemo movieCard i prosledimo informacije  */}
            {/* <MovieCard movie={movieData}/> */}
            
        </>
    )
}

export default Movies2;