import React, { useEffect, useState } from "react";
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
  const [weatherData, setWeatherData] = useState({});
  const [searchTerm, setSearchTerm] = useState(null);

  // const search = async () => {
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log(data);
  // };

  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${"london"}&units=Metric&appid=${api_key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const onSearch = () => {
    const setData = (data) => {
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setWeatherData({});
        // alert("City not found");
      }
    };

    if (searchTerm === null) return null;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=Metric&appid=${api_key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const inputchange = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log("weatherData", weatherData);
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="search"
          onChange={inputchange}
        ></input>
        <div
          className="search-icon"
          onClick={() => {
            onSearch();
          }}
        >
          <img src={search_icon} alt="" height="20px" width="20px" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" height="300px" width="300px" />
      </div>
      <div className="weather-temp">{/* {temperature}°C */}</div>

      <div className="weather-location">
        {(weatherData && weatherData.name) || "City"}
      </div>
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
