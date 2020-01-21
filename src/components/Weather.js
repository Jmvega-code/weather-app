import React from "react";

const Weather = props => (
  <div>
    { props.city && props.country && <p>Location: {props.city}, {props.country} </p> }
    { props.temperature && <p>Temperature: {props.temperature}ºC</p> }
    { props.humidity && <p>Humidity: {props.humidity}%</p> }
    { props.wind && <p>Wind: {props.wind} m/s</p> }
    { props.description && <p>Weather condition: {props.description} </p> }
    { props.error && <p> {props.error} </p> }
  </div>
);

export default Weather;