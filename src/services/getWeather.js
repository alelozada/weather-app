import axios from "axios"

const getWeather = async (latitude, longitude) => {

  const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  const request = await axios.get(URL)

  return request
}

export default getWeather