import "./App.css";
import { useEffect, useState } from "react";
import getWeather from "./services/getWeather";
import Weather from "./components/Weather";
import Spinner from "./components/Spinner";
import images from "./images.json"

function App() {
  const [isLocation, setIsLocation] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [iconWeather, setIconWeather] = useState("01d");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [background, setBackground] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setIsLocation(true);
      getWeather(position.coords.latitude, position.coords.longitude).then(
        (response) => {
          setCityName(response.data.name);
          setCountry(response.data.sys.country);
          setIconWeather(response.data.weather[0].icon);
          setDescription(response.data.weather[0].description);
          setTemperature(Math.floor(response.data.main.temp));
          setBackground(images[response.data.weather[0].main].bgImg)
        }
      );
    });
  }, []);

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      {isLocation ? (
        <Weather
          cityName={cityName}
          country={country}
          iconWeather={iconWeather}
          description={description}
          temperature={temperature}
        />) : (<Spinner />)
      }
    </div>
  );
}

export default App;
