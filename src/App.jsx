import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import Movies from './Components/Movies'

// api key: b676ab91
const API_KEY = "b676ab91";

// * https://www.omdbapi.com/?t=Terminator&apikey=b676ab91

const apikey = import.meta.env.VITE_OMDBAPI_KEY

const apiUrl = import.meta.env.VITE_OMDBAPI_URL

console.log(apikey)

console.log(apiUrl)

// pozivanje api
// fetch("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    // odgovor koji dobija od nas / * -> u prvom themn mi dobijamo samo ugrubo podatak( pretvara odgovor u JSON)
    // .then(response => console.log(response))
//     .then(response => response.json())

    // ispisivanje opdgovora json
//     .then(jsonResponse => console.log(jsonResponse))


  // ** Domaci: da ovaj poziv preko fetch -> pretvorimo da ide preko axios
// sa fetch -> mi pozivamo api

// ** GET METODA kada imamo ovako vidljive (expose)?t=Terminator&apikey=b676ab91

// dodata 7 na pocetak apikey: 7b676ab91
// axios.get("https://www.omdbapi.com/?t=Terminator&apikey=7b676ab91")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// * moramo da importujemo axios

// resenje: imam PROBLEM DA NADJEM RESENJE
// axios.get(process.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+process.env.VITE_OMDBAPI_KEY)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// console.log(process.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+process.env.VITE_OMDBAPI_KEY)

// * vezba: imamo stavari u .emv i url i api key "https://www.omdbapi.com/?t=Terminator&apikey" -> da promenimo dane poziva ovako https://www.omdbapi.com/? axios -> vec da iz .env povlaci te podatke, ne smemo da imamo nigde kljuc od apija vec koristeci .env izvucemo ove podatke https://www.omdbapi.com/ /// u axios pozivo treba da promenimo sve iz .env https://www.omdbapi.com/?t=Terminator&apikey=7b676ab91

// domaci: forma u koju mogu upisati ime nekog filma



const App = () => {
  const [count, setCount] = useState(0)

    return (
        <>
            <Movies />
        </>
    )
}

export default App
