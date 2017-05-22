var React = require('react');

var WeatherMsg = ({location, temp}) => {
  return (
    <p>It is {temp} degrees in {location}</p>
  );
}

module.exports = WeatherMsg;
