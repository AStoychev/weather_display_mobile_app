import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getWeather } from "../services/getWeatherData";

function useFetchData() {
    const [temperature, setTemperature] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const cityQuery = useSelector(state => state.data.cityQuery);

    function capitalizeFirstLetter(word) {
        const capitalized =
            word.charAt(0).toUpperCase()
            + word.slice(1)
        return capitalized
    }

    function onErrorMessageHandle() {
        setError(false);
    };

    async function onHandlePress(query) {
        setError(false)
        try {
            setLoading(true);
            const { celsium, fahrenheit, kelvin } = await getWeather(query);
            setCity(capitalizeFirstLetter(query));
            setTemperature({
                celsiumTemp: celsium,
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

    return { onHandlePress, onErrorMessageHandle, temperature, city, loading, error }
}

export default useFetchData;