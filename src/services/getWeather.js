import axios from "axios"

const getWeather = async (latitude, longitude) => {

  // const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f874a45a7dea0f7d5ff8e276277fd52a&units=metric`
  console.log(URL);

  const request = await axios.get(URL)
  console.log(request);

  return request
}

export default getWeather