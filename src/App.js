import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchComponent from './components/SearchComponent/SearchComponent';
import WeatherDisplayComponent from './components/WeatherDisplayComponent/WeatherDisplayComponent';

const API_KEY = "a17870ef30c5ab6416d1790f9a760f35";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Remove cityName and setCityName from App state

  const fetchWeatherData = async (cityName) => { // Accept cityName as a parameter
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <SearchComponent
        fetchWeatherData={fetchWeatherData} // Pass the fetchWeatherData function directly
      />
      <WeatherDisplayComponent
        weatherData={weatherData}
        loading={loading}
      />
    </div>
  );
}

export default App;
