import React from "react";

const Result = props => {
  const {
    err,
    city,
    temp,
    sunset,
    sunrise,
    date,
    wind,
    pressure
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <h3>Wynik wyszukiwania dla miast {city}</h3>
        <h4>Dane dla dnia i godziny: {date}</h4>
        <h4>Aktualna temperatura: {temp} °C</h4>
        <h4>Wschód słońca o: {sunriseTime}</h4>
        <h4>Zachód słońca o: {sunsetTime}</h4>
        <h4>Ciśnienie: {pressure} hpa</h4>
        <h4>Siła wiatru: {wind} m/s</h4>
      </div>
    );
  }

  return (
    <div className="result">{err ? `Nie mamy w bazie ${city}` : content}</div>
  );
};

export default Result;
