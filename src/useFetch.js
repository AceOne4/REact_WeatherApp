import { useEffect, useState } from "react";
import { weatherAPIKEY, weatherAPIURL } from "./api";

export const useFetch = (lat, lon) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setforecast] = useState(null);
  const [loading, setLoadings] = useState(true);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = await fetch(
          `${weatherAPIURL}/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKEY}`
        );

        const weatherD = await weatherData.json();
        setWeather(weatherD);
      } catch (err) {}
    };
    const forecastData = async () => {
      try {
        const forecastData = await fetch(
          `${weatherAPIURL}/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKEY}`
        );
        const forecastD = await forecastData.json();
        setforecast(forecastD);
        setLoadings(false);
      } catch (err) {
        return console.error(err);
      }
    };
    if (!isNaN(lat) && !isNaN(lon)) {
      fetchWeatherData(lat, lon);
      forecastData(lat, lon);
    }
  }, [lat, lon]);

  return { weather, forecast, loading };
};
