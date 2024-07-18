import axios from 'axios';
import { getWeather } from '../services/getWeatherData';

jest.mock('axios');

describe('getWeather', () => {
    const API_KEY = process.env.EXPO_PUBLIC_API;
    const city = 'London';
    const celsiusResponse = { data: { main: { temp: 20 } } };
    const fahrenheitResponse = { data: { main: { temp: 68 } } };
    const kelvinResponse = { data: { main: { temp: 293.15 } } };

    beforeEach(() => {
        axios.get.mockReset();
    });

    it('fetches weather data and returns temperatures in Celsius, Fahrenheit, and Kelvin', async () => {
        axios.get.mockImplementation((url) => {
            if (url.includes('units=metric')) {
                return Promise.resolve(celsiusResponse);
            } else if (url.includes('units=imperial')) {
                return Promise.resolve(fahrenheitResponse);
            } else {
                return Promise.resolve(kelvinResponse);
            }
        });

        const result = await getWeather(city);

        expect(result).toEqual({
            celsius: 20,
            fahrenheit: 68,
            kelvin: 293.15,
        });

        expect(axios.get).toHaveBeenCalledTimes(3);
        expect(axios.get).toHaveBeenCalledWith(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        expect(axios.get).toHaveBeenCalledWith(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
        expect(axios.get).toHaveBeenCalledWith(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    });

    it('logs an error when the first API call fails', async () => {
        const error = new Error('Network Error');
        axios.get.mockRejectedValueOnce(error);
        console.log = jest.fn();

        await getWeather(city);

        expect(console.log).toHaveBeenCalledWith('ERROR', error);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('logs an error when the second API call fails', async () => {
        const error = new Error('Network Error');
        axios.get.mockImplementation((url) => {
            if (url.includes('units=metric')) {
                return Promise.resolve(celsiusResponse);
            } else if (url.includes('units=imperial')) {
                return Promise.reject(error);
            } else {
                return Promise.resolve(kelvinResponse);
            }
        });
        console.log = jest.fn();

        await getWeather(city);

        expect(console.log).toHaveBeenCalledWith('ERROR', error);
        expect(axios.get).toHaveBeenCalledTimes(2);
    });

    it('logs an error when the third API call fails', async () => {
        const error = new Error('Network Error');
        axios.get.mockImplementation((url) => {
            if (url.includes('units=metric')) {
                return Promise.resolve(celsiusResponse);
            } else if (url.includes('units=imperial')) {
                return Promise.resolve(fahrenheitResponse);
            } else {
                return Promise.reject(error);
            }
        });
        console.log = jest.fn();

        await getWeather(city);

        expect(console.log).toHaveBeenCalledWith('ERROR', error);
        expect(axios.get).toHaveBeenCalledTimes(3);
    });
});



// TEST BEFORE TRY CATCH

// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import { getWeather } from '../services/getWeatherData';

// const mock = new MockAdapter(axios);

// describe('getWeather function', () => {
//     afterEach(() => {
//         mock.reset();
//     });

//     it('fetches weather data correctly on successful request', async () => {
//         const city = 'London';
//         const API = process.env.EXPO_PUBLIC_API;
//         const mockWeatherData = {
//             main: { temp: 20 },
//         };

//         mock
//             .onGet(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
//             .reply(200, mockWeatherData);
//         mock
//             .onGet(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`)
//             .reply(200, { main: { temp: 68 } });
//         mock
//             .onGet(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
//             .reply(200, { main: { temp: 293.15 } });

//         const result = await getWeather(city);

//         expect(result).toEqual({
//             celsius: 20,
//             fahrenheit: 68,
//             kelvin: 293.15,
//         });
//     });

//     it('handles error correctly on failed request', async () => {
//         const city = 'London';
//         const API = process.env.EXPO_PUBLIC_API;

//         mock
//             .onGet(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
//             .reply(404);

//         await expect(getWeather(city)).rejects.toThrow();
//     });
// });
