import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { GetWeatherByCity } from "../../services/Weather.service";
import { WeatherForecast } from "../../interfaces";
import "./CityWeather.scss";

export const CityWeather: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { language } = useAppContext();

  const [weather, setWeather] = useState<WeatherForecast[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!cityName) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await GetWeatherByCity.get("/forecast", {
          q: cityName,
        });

        const hourlyData = data.list.slice(0, 8);

        setWeather(hourlyData);
        setError(null);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError(
          language === "en"
            ? "Failed to load weather data."
            : "No se pudo cargar la información del clima."
        );
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName, language]);

  if (loading) return <div className="weather-loading">Loading...</div>;
  if (error) return <p>{error}</p>;

  const iconUrl = (icon: string): string =>
    `https://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className="city-weather">
      {weather ? (
        <>
          <h2>
            {language === "en" ? "Weather in" : "Clima en"} {cityName}
          </h2>
          <div className="current-weather">
            <h2>{language === "en" ? "Current Weather" : "Clima actual"}</h2>
            <img
              src={iconUrl(weather[0].weather[0].icon)}
              alt={weather[0].weather[0].description}
              className="weather-icon"
            />
            <p>
              {language === "en" ? "Temperature:" : "Temperatura:"}{" "}
              {weather[0].main.temp}°C
            </p>
            <p>
              {language === "en" ? "Description:" : "Descripción:"}{" "}
              {weather[0].weather[0].description}
            </p>
            <p>Min Temp: {weather[0].main.temp_min}°C</p>
            <p>Max Temp: {weather[0]?.main.temp_max}°C</p>
          </div>

          <div className="hourly-forecast">
            <h2>
              {language === "en" ? "Hourly Forecast" : "Pronóstico por hora"}
            </h2>
            <div className="hourly-forecast__container">
              <ul>
                {weather.map((forecast, index) => {
                  return (
                    <li className="forecast-card" key={index}>
                      <p>{new Date(forecast.dt * 1000).toLocaleTimeString()}</p>
                      <p>{forecast.main.temp}°C</p>
                      <img
                        src={iconUrl(forecast.weather[0].icon)}
                        alt={forecast.weather[0].description}
                        className="weather-icon"
                      />
                      <p>{forecast.weather[0].description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>{language === "en" ? "City not found" : "Ciudad no encontrada"}</p>
      )}
    </div>
  );
};
