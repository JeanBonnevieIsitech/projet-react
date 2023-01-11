import logo from './logo.svg';
import './App.css';
// import Bonsoir from './components/Bonsoir';
import Clock from './components/Clock'
import { useCallback, useState } from 'react';
import Weather from './components/Weather';
import { initializeApp } from "firebase/app";

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

    // api firebase

    // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfJLT8GdSjpWLGXGE-IJ1ENm7VicEdVx0",
  authDomain: "api-test-reac.firebaseapp.com",
  databaseURL: "https://api-test-reac-default-rtdb.firebaseio.com",
  projectId: "api-test-reac",
  storageBucket: "api-test-reac.appspot.com",
  messagingSenderId: "676279220685",
  appId: "1:676279220685:web:c847216058f02dd7996c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    const getGames = useCallback(async()=>{
      const response = await fetch('https://api-test-reac.firebaseio.com/Jeux.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data)

    })


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
