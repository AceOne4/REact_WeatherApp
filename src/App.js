import { useState } from "react";
import "./App.css";
import Search from "./components/Seacrh/Search";
import CurrentWeather from "./components/currenWeather/CurrentWeather";
import { useFetch } from "./useFetch";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [weatherD, setWeatherD] = useState(null);
  const [name, setName] = useState("");
  const data = weatherD?.value?.split(" ");
  const weather = useFetch((+data?.[0]).toFixed(2), (+data?.[1]).toFixed(2));
  const onSearchChangeHandler = (data) => {
    setWeatherD(data);
    setName(data.name);
  };
  return (
    <div className="container">
      <Search onSearchChange={onSearchChangeHandler} />
      {!weather.loading && (
        <CurrentWeather data={weather.weather} name={name} />
      )}
      {!weather.loading && <Forecast data={weather.forecast} />}
    </div>
  );
}

export default App;
