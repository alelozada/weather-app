import { useState } from "react";
import './Weather.css';

const Weather = ({ cityName, country, iconWeather, description, temperature }) => {
  const [isCelsious, setIsCelsuios] = useState(true);

  return (
    <div className="container weather-card">
      <h1>
        {cityName}, {country}
      </h1>
      <img
        src={`http://openweathermap.org/img/wn/${iconWeather}@2x.png`}
        alt=""
      />
      <p>{description}</p>
      <h3>
        {isCelsious ? temperature : Math.floor((temperature * 9) / 5 + 32)}{" "}
        {isCelsious ? "°C" : "°F"}
      </h3>
      <button onClick={() => setIsCelsuios(!isCelsious)}>
        Change to {!isCelsious ? "°C" : "°F"}
      </button>
    </div>
  );
};
export default Weather;
