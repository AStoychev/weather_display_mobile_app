import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_API;

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    try {
      const celsiusData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const fahrenheitData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
      const kelvinData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

      const celsius = celsiusData.data.main.temp;
      const fahrenheit = fahrenheitData.data.main.temp;
      const kelvin = kelvinData.data.main.temp;

      return { city, celsius, fahrenheit, kelvin };
    } catch (error) {
      throw Error(`Failed to fetch weather for ${city}: ${error.message}`);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data[action.payload.city] = {
          celsius: action.payload.celsius,
          fahrenheit: action.payload.fahrenheit,
          kelvin: action.payload.kelvin,
        };
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
