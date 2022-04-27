import './App.css';
import { useEffect, useState } from 'react';
import getWeather from './services/getWeather';


function App() {

  const [cityName, setCityName] = useState('')
  const [country, setCountry] = useState('')
  const [iconWeather, setIconWeather] = useState('') //02d
  const [description, setDescription] = useState('')
  const [temperature, setTemperature] = useState('')
  const [isCelsius, setIsCelsius] = useState('true')

  useEffect( () => {
    navigator.geolocation.getCurrentPosition((position) =>  {
      getWeather(position.coords.latitude, position.coords.longitude)
        .then((response) => {
          console.log(response.data);
          setCityName(response.data.name)
          setCountry(response.data.sys.country)
          setIconWeather(response.data.weather[0].icon)
          setDescription(response.data.weather[0].description)
          setTemperature(Math.floor(response.data.main.temp))
        })
    })


  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>{cityName}, {country}</h1>
        <img src={`http://openweathermap.org/img/wn/${iconWeather}@2x.png`} alt="" />
        <p>{description}</p>
        <h3>{isCelsius ? temperature : Math.floor((temperature * 9/5) + 32)} {isCelsius ? '°C' : '°F'}</h3>
        <button onClick={() => setIsCelsius(!isCelsius)}>Change to { !isCelsius ? '°C' : '°F'}</button>
      </div>
    </div>
  );
}

export default App;
