import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import Movies from './Components/Movies'
import Movies2 from './Components/Movies2'
import Movies3 from './Components/Movies.3'
import MovieCard2 from './Templates/MovieCard2'

// api key: b676ab91
// const API_KEY = "b676ab91";
const API_KEY = "b676ab91"

// * primer api poziva
// * https://www.omdbapi.com/?t=Terminator&apikey=b676ab91

// const apikey = import.meta.env.VITE_OMDBAPI_KEY
const apikey = import.meta.env.VITE_OMDBAPI_KEY;
// const apiUrl = import.meta.env.VITE_OMDBAPI_URL
const apiUrl = import.meta.env.VITE_OMDBAPI_URL;

// console.log(apikey)
console.log(apikey)
// console.log(apiUrl)
console.log(apiUrl)

// ** GET METODA kada imamo ovako vidljive (expose)?t=Terminator&apikey=b676ab91 ***

// * sa fetch -> mi pozivamo api *

fetch("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    // * sa prvim then -> hvatamo response ili ti odgovor koji dobija nazad -> u prvovim than console.log(response) -> mi dobijamo ugrubo podatke !
    // sa prvim then -> mi pretvaramo taj odgovor u jsoon
    .then(response => response.json()) // da poretvorimo odgovor u JSON

    // * mi sa drugim then -> samo ispisujemo odgovor (te podatke) JSON
    .then(jsonResponse => console.log(jsonResponse))


// fetch("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    // * sa prvim then -> hvatamo response ili ti odgovor koji dobija nazad -> u prvovim than console.log(response) -> mi dobijamo ugrubo podatke !
    // sa prvim then -> mi pretvaramo taj odgovor u jsoon
//     .then(response => response.json()) // da poretvorimo odgovor u JSON

    // mi sa drugim tham samo ispisujemo odgovor (te podatke) JSON
//     .then(jsonResponse => console.log(jsonResponse))


// * moramo da importujemo axios

  // ** Domaci: da ovaj poziv preko fetch -> pretvorimo da ide preko axios
// sa fetch -> mi pozivamo api

// * resenje:

axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    // .then(response => console.log(response))
    .then(response => console.log(response.data))
    .catch(error => console.log(error))


// axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


// * vezba: imamo stavari u .emv i url i api key "https://www.omdbapi.com/?t=Terminator&apikey" -> da promenimo da ne poziva ovako https://www.omdbapi.com/? axios -> vec da iz .env povlaci te podatke, ne smemo da imamo nigde kljuc od apija vec koristeci .env izvucemo ove podatke https://www.omdbapi.com/ /// u axios pozivo treba da promenimo sve iz .env https://www.omdbapi.com/?t=Terminator&apikey=7b676ab91

axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
    .then(response => console.log(response.data)
)

console.log(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)

// axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// console.log(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)



// ** GET METODA kada imamo ovako vidljive (expose)?t=Terminator&apikey=b676ab91

// dodata 7 na pocetak apikey: 7b676ab91
// axios.get("https://www.omdbapi.com/?t=Terminator&apikey=7b676ab91")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// * moramo da importujemo axios

// resenje: imam PROBLEM DA NADJEM RESENJE

// axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)

// console.log(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)

// * domaci: forma u koju mogu upisati ime nekog filma

const App = () => {

    return (
        <>
            <Movies />
            <Movies2 />
            {/* <Movies3 /> */}
        </>
    )
}

export default App;
