import React from "react";
import "./CurrentWeather.css";
function CurrentWeather({ data, name }) {
  if (!data) return;
  const { weather, main, wind } = data;
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{name}</p>
          <p className="descrbtion">{weather?.[0].main}</p>
        </div>
        <img
          alt="weather"
          className="weather_icon"
          src={`Icons/${weather?.[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{(main?.temp - 273.15).toFixed(0)}°C</p>
        <div className="details">
          <div className="row">
            <span className="labelrow head">Details</span>
          </div>
          <div className="row">
            <span className="labelrow">Feel Like:</span>
            <span className="valuerow">
              {(main?.feels_like - 273.15).toFixed(2)}°C
            </span>
          </div>
          <div className="row">
            <span className="labelrow">Wind:</span>
            <span className="valuerow">{wind?.speed}m/s</span>
          </div>
          <div className="row">
            <span className="labelrow">Humidity:</span>
            <span className="valuerow">{main?.humidity}%</span>
          </div>
          <div className="row">
            <span className="labelrow">Pressure:</span>
            <span className="valuerow">{main?.pressure}hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
