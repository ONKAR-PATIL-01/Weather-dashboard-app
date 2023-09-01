import React, { useState } from 'react';
import './SearchComponent.css';

const SearchComponent = ({ fetchWeatherData }) => {
  const [inputCityName, setInputCityName] = useState('');

  const handleSearch = () => {
    if (inputCityName.trim() !== '') {
      fetchWeatherData(inputCityName); // Pass the inputCityName to fetchWeatherData
    }
  };

  return (
    <div className="search-component">
      <h2>Search for Weather</h2>
      <div className="search-form">
        <label htmlFor="cityName">Enter City Name:</label>
        <input
          type="text"
          id="cityName"
          value={inputCityName}
          onChange={(e) => setInputCityName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
