import React, { useState } from "react";
import "./WeatherApp.css";

import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import clear_icon from "../assets/clear.png";
import search_icon from "../assets/search.png";

let api_key = "cdc3ec354af4d9e6bf51504498fdc151";

const WeatherApp = () => {
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    //humidity[0].innerHTML=data.main.humidity;
    //wind[0].innerHTML=data.wind.speed;
    temperature[0].innerHTML = data.main.temp + " °C";
    //location[0].innerHTML=data.name;
    setTemperature(data.main.temp);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setLocation(data.name);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search"></input>
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" height="20px" width="20px" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" height="300px" width="300px" />
      </div>
      <div className="weather-temp">{/* {temperature}°C */}</div>

      <div className="weather-location">london</div>
      <div className="data-container">
        <div className="element">
          <img
            src={humidity_icon}
            alt=""
            height="60px"
            width="60px"
            className="icon"
          />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img
            src={wind_icon}
            alt=""
            height="60px"
            width="100px"
            className="icon"
          />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
