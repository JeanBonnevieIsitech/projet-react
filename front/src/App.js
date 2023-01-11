import logo from './logo.svg';
import './App.css';
// import Bonsoir from './components/Bonsoir';
import Clock from './components/Clock'
import { useCallback, useState } from 'react';
import Weather from './components/Weather';

function App() {

  const [time, setTime] = useState(new Date())
  const [weather, setWeather] = useState(null)

  function refreshClock() {
    setTime(new Date())
  }

  setInterval(refreshClock, 1000)

  // api météo

  function getLocation() {
    setWeather({'loading':true})
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


      .catch(error =>{
        setWeather(null)
      }
        )

    }
    function onLocationfailure(error) {
      setWeather({'error': true})
    }

    // api .net

    function getGames(){

    }
    


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Clock time={time} />
        <Weather weather={weather}/>
        <button onClick={getLocation}>Actualiser météo</button>
        <button onClick={getGames}>List des jeux</button>
        {/* <Bonsoir name="Jean" />
        <Bonsoir name="Louis" /> */}
      </header>
    </div>
  );
}

export default App;
