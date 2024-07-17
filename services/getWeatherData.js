import axios from "axios";

const API = process.env.EXPO_PUBLIC_API;
// const city = 'London'
const url = ''

export async function getWeather(city) {
    const celsiumData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
    const fahrenheitData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`);
    const kelvinData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`);

    const celsium = celsiumData.data.main.temp;
    const fahrenheit = fahrenheitData.data.main.temp;
    const kelvin = kelvinData.data.main.temp;

    return {celsium: celsium, fahrenheit: fahrenheit, kelvin: kelvin}
}