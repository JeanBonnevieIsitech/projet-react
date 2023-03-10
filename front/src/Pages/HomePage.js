
// import Bonsoir from './components/Bonsoir';
import Clock from '../components/Clock'
import Weather from '../components/Weather';
import Jeux from '../components/Jeux';
import Test from '../components/Test';
import Day from '../components/Day';
import React, { useState } from 'react';


function HomePage() {
    const [time, setTime] = useState(new Date())
    const [weather, setWeather] = useState(null)
    const [jeux, setJeux] = useState(null)
    const [message, setMessage] = useState("Test")
    const [day, setDay] = useState(true)




    function refreshClock() {
        setTime(new Date())
    }

    setInterval(refreshClock, 1000)

    // api météo

    function getLocation() {
        setWeather({ 'loading': true })
        navigator.geolocation.getCurrentPosition(onLocationsuccess, onLocationfailure)
    }

    function onLocationsuccess(position) {
        const apiKey = "a3ec4fe9d17dec2efdfbf799321f0353"

        //console.log(position)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=fr&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setWeather(data)
            })


            .catch(error => {
                setWeather({ 'error': 'Une erreur est survenue' })
            }
            )

    }
    function onLocationfailure(error) {
        setWeather({ 'error': 'vous devez autoriser la localisation' })
    }

    // api .net

    function getGames() {

        setJeux({ 'loading': true })
        const response = fetch('https://localhost:7155/api/Jeux')
        response.then((response) => response.json())
            .then((data) => {
                console.log(data)
                setJeux(data)
            }).catch(error => {
                setJeux({ 'error': 'Une erreur est survenue' })
            })


    }

    function triggtest() {
        setMessage("Test validé")
    }

    function daySwitch() {
        setDay(!day)
    }

    return (

            <div>
                <Clock time={time} />
                <Weather weather={weather} />
                <button onClick={getLocation}>Actualiser météo</button>
                <Jeux jeux={jeux} />
                <button onClick={getGames}>Liste des jeux</button>
                <Test message={message} />
                <button onClick={triggtest}>Test</button>
                <Day day={day} />
                <button onClick={daySwitch}>Changer</button>
            </div>

    );

}

export default HomePage;