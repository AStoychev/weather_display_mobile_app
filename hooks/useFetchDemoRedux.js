import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/slices/weatherSlice";

const useFetchDemoRedux = (city) => {
    const dispatch = useDispatch();
    const { celsius, fahrenheit, kelvin } = useSelector((state) => state.weather.data[city] || {});
    const { loading, error } = useSelector((state) => state.weather || {});

    const handleFetchWeather = () => {
        dispatch(fetchWeather(city))
    }

    return { handleFetchWeather, celsius, fahrenheit, kelvin, loading, error, city }
}

export default useFetchDemoRedux;