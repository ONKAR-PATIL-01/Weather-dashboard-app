import React from 'react';
import './WeatherDisplayComponent.css'; // Import the CSS file

const WeatherDisplayComponent = ({ weatherData, loading }) => {
  // Check if weatherData is null (initial state) or loading is true
  if (weatherData === null || loading) {
    return null; // Display nothing until data is available
  }

  if (weatherData.cod !== 200) {
    return <div>Error: {weatherData.message}</div>; // Display the error message
  }

  const {
    name,
    main,
    wind,
    weather,
  } = weatherData;

  // Check if the necessary data is present, and provide default values if not
  const temperature = main?.temp ?? 'N/A';
  const humidity = main?.humidity ?? 'N/A';
  const windSpeed = wind?.speed ?? 'N/A';
  const weatherCondition = weather.length > 0 ? weather[0].description : 'N/A';

  return (
    <div className="weather-data">
      <h2>Weather in {name}</h2>
      <div>
        <p>Temperature: {temperature}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} m/s</p>
        <p>Condition: {weatherCondition}</p>
      </div>
    </div>
  );
};

export default WeatherDisplayComponent;
