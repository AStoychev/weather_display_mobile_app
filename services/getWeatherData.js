import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API;

export async function getWeather(city) {
    try {
        const celsiusData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const fahrenheitData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
        const kelvinData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        const celsius = celsiusData.data.main.temp;
        const fahrenheit = fahrenheitData.data.main.temp;
        const kelvin = kelvinData.data.main.temp;

        return { celsius: celsius, fahrenheit: fahrenheit, kelvin: kelvin }
    }
    catch (error) {
        console.log('ERROR', error)
    }
}