import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getWeather } from '../services/getWeatherData';

const mock = new MockAdapter(axios);

describe('getWeather function', () => {
    afterEach(() => {
        mock.reset();
    });

    it('fetches weather data correctly on successful request', async () => {
        const city = 'London';
        const API = process.env.EXPO_PUBLIC_API;
        const mockWeatherData = {
            main: { temp: 20 },
        };

        mock
            .onGet(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
            .reply(200, mockWeatherData);
        mock
            .onGet(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`)
            .reply(200, { main: { temp: 68 } });
        mock
            .onGet(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
            .reply(200, { main: { temp: 293.15 } });

        const result = await getWeather(city);

        expect(result).toEqual({
            celsium: 20,
            fahrenheit: 68,
            kelvin: 293.15,
        });
    });

    it('handles error correctly on failed request', async () => {
        const city = 'London';
        const API = process.env.EXPO_PUBLIC_API;

        mock
            .onGet(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
            .reply(404);

        await expect(getWeather(city)).rejects.toThrow();
    });
});
