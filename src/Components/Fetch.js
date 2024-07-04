import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fetch({ city, setCity, setCheck }) {
  const apikey = process.env.REACT_APP_API_KEY;
  const baseurl = process.env.REACT_APP_BASE_URL;

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/v1/current.json?key=${apikey}&q=${city}&aqi=no`);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();

  }, [apikey, baseurl, city]);

  function handleBack(e) {
    e.preventDefault();
    setWeather(null);
    setCity("");
    setCheck(false);
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {weather ? (
        <div>
          <div>{weather.current.condition.text}</div>
          <img
            src={weather.current.condition.icon}
            alt="Fetched from API"
            className="mt-2 max-w-full"
          />
          <div>Temperature in centigrade: {weather.current.temp_c} C</div>
          <div>Temperature in fahrenheit: {weather.current.temp_f} F</div>
          <div>Wind Speed (kms per hour): {weather.current.wind_kph}</div>
          <div>City: {weather.location.name}</div>
          <div>Region: {weather.location.region}</div>
          <div>Country: {weather.location.country}</div>
          <div>Local Time: {weather.location.localtime}</div>
        </div>
      ) : (
        <div>Loading information...</div>
      )}
      <button
        type='submit'
        onClick={handleBack}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        BACK
      </button>
    </div>
  );
}
