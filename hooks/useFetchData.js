import { useState } from "react";
import { getWeather } from "../services/getWeatherData";

function useFetchData() {
    const [temperatures, setTemperature] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function onErrorMessageHandle() {
        setError(false);
    };

    async function onHandlePress(query) {
        setError(false)
        try {
            setLoading(true);
            const { celsius, fahrenheit, kelvin } = await getWeather(query);
            setCity(query);
            setTemperature({
                celsiusTemp: celsius,
                fahrenheitTemp: fahrenheit,
                kelvinTemp: kelvin
            });
        } catch (error) {
            setError(true);
            console.log('ERROR', error);
        } finally {
            setLoading(false)
        }
    }

    return { onHandlePress, onErrorMessageHandle, temperatures, city, loading, error }
}

export default useFetchData;