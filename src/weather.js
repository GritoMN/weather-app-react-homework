import React, { useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.js";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");

  function displayTemperature(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1396ff9da501a83ff2b7fb3c4589098&units=metric`;
    axios.get(url).then(displayTemperature);
  }

  return (
    <div>
      <Watch
        class="watch"
        height="100"
        width="300"
        color="white"
        ariaLabel="loading"
      />
      <form onSubmit={handleSubmit}>
        <input type="Search" placeholder="Which city" onChange={updateCity} />
        <input type="Submit" value="Search" />
      </form>
      <ul>
        <li>Temperature: {Math.round(temperature)} °C</li>
        <li>Description: {description} </li>
        <li>Humidity: {humidity} %</li>
        <li>Wind: {wind} km/h</li> <img src={icon} alt="Wind" />
      </ul>
    </div>
  );
}
